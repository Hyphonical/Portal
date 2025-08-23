<template>
	<div class="fixed inset-0 z-0 pointer-events-none select-none isolation">
		<div
			v-for="blob in blobs"
			:key="blob.id"
			class="blob"
			:ref="(el) => (blob.el = el as HTMLElement)"
			:style="{
				'--size': blob.size + 'px',
				'--blur': blob.blur + 'px',
				'--opacity': blob.opacity.toString(),
				'--color': blob.color
			} as any"
		/>
		<svg width="0" height="0" style="position: absolute">
			<filter id="warp">
				<feTurbulence
					type="fractalNoise"
					baseFrequency="0.006"
					numOctaves="2"
					seed="3"
				/>
				<feDisplacementMap in="SourceGraphic" scale="12" />
			</filter>
		</svg>
	</div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

type BlobItem = {
	id: number
	el: HTMLElement | null
	color: string
	size: number
	blur: number
	opacity: number
	baseX: number
	baseY: number
	ampX: number
	ampY: number
	ampS: number
	freqX: number
	freqY: number
	freqS: number
	phaseX: number
	phaseY: number
	phaseS: number
	parallax: number
	hueSpeed: number
	rotSpeed: number
}

const COLORS = [
	'oklch(64% 0.18 292.7 / 0.9)', // purple
	'oklch(64% 0.18 200 / 0.9)',   // blue
	'oklch(64% 0.18 340 / 0.9)'    // pink
]

const BLOB_COUNT = 5

const rand = (min: number, max: number) => Math.random() * (max - min) + min
const pick = <T>(a: T[]): T => {
	if (a.length === 0) throw new Error('Cannot pick from an empty array')
	return a[Math.floor(Math.random() * a.length)]!
}
const clamp = (min: number, v: number, max: number) => Math.max(min, Math.min(v, max))

const blobs = ref<BlobItem[]>(
	Array.from({ length: BLOB_COUNT }, (_, id) => {
		const size = rand(280, 520)
		return {
			id,
			el: null,
			color: pick(COLORS),
			size,
			blur: rand(48, 84),
			opacity: rand(0.16, 0.26),
			baseX: rand(12, 88),
			baseY: rand(12, 88),
			ampX: rand(6, 16),
			ampY: rand(6, 16),
			ampS: rand(0.06, 0.16), // scale amplitude
			freqX: rand(0.15, 0.35),
			freqY: rand(0.15, 0.35),
			freqS: rand(0.08, 0.18),
			phaseX: rand(0, Math.PI * 2),
			phaseY: rand(0, Math.PI * 2),
			phaseS: rand(0, Math.PI * 2),
			parallax: rand(2, 7),
			hueSpeed: rand(2, 6) / 100,   // deg/sec factor
			rotSpeed: rand(1, 4) / 100    // deg/sec factor
		}
	})
)

let raf = 0
let reduceMotion = false

const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 } // normalized, smoothed

function onPointerMove(e: PointerEvent) {
	mouse.tx = e.clientX / window.innerWidth
	mouse.ty = e.clientY / window.innerHeight
}

onMounted(() => {
	reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
	window.addEventListener('pointermove', onPointerMove, { passive: true })

	const start = performance.now()

	const tick = () => {
		const now = performance.now()
		const t = (now - start) / 1000 // seconds

		// Smooth mouse
		mouse.x += (mouse.tx - mouse.x) * 0.06
		mouse.y += (mouse.ty - mouse.y) * 0.06

		for (const b of blobs.value) {
			if (!b.el) continue

			// Multi-sine motion for organic paths
			const x =
				b.baseX +
				b.ampX * Math.sin(t * b.freqX + b.phaseX) +
				0.6 * b.ampX * Math.sin(t * (b.freqX * 0.7) + b.phaseX * 1.7) +
				(mouse.x - 0.5) * b.parallax

			const y =
				b.baseY +
				b.ampY * Math.cos(t * b.freqY + b.phaseY) +
				0.6 * b.ampY * Math.cos(t * (b.freqY * 0.8) + b.phaseY * 1.3) +
				(mouse.y - 0.5) * b.parallax

			// Elliptical breathing
			const s = 1 + b.ampS * Math.sin(t * b.freqS + b.phaseS)
			const sx = s * (1 + 0.28 * Math.sin(t * (b.freqS * 0.85) + b.phaseS * 1.2))
			const sy = s * (1 + 0.28 * Math.cos(t * (b.freqS * 0.9) + b.phaseS * 0.9))

			// Subtle rotation and hue drift
			const rot = 6 * Math.sin(t * b.rotSpeed + b.phaseX) // deg
			const hue = 10 * Math.sin(t * b.hueSpeed + b.phaseY) // deg
			const op = clamp(0.1, b.opacity + 0.04 * Math.sin(t * 0.2 + b.phaseX), 0.28)

			if (!reduceMotion) {
				b.el.style.setProperty('--x', x.toFixed(3))
				b.el.style.setProperty('--y', y.toFixed(3))
				b.el.style.setProperty('--sx', sx.toFixed(3))
				b.el.style.setProperty('--sy', sy.toFixed(3))
				b.el.style.setProperty('--rot', `${rot.toFixed(2)}deg`)
				b.el.style.setProperty('--hue', `${hue.toFixed(2)}deg`)
				b.el.style.setProperty('--opacity', op.toFixed(3))
			} else {
				// Static but still pretty
				b.el.style.setProperty('--x', b.baseX.toFixed(3))
				b.el.style.setProperty('--y', b.baseY.toFixed(3))
				b.el.style.setProperty('--sx', '1')
				b.el.style.setProperty('--sy', '1')
				b.el.style.setProperty('--rot', '0deg')
				b.el.style.setProperty('--hue', '0deg')
			}
		}

		raf = requestAnimationFrame(tick)
	}

	tick()
})

onBeforeUnmount(() => {
	cancelAnimationFrame(raf)
	window.removeEventListener('pointermove', onPointerMove)
})
</script>

<style>
.isolation {
	isolation: isolate; /* keep blend modes contained */
}

/* One blob layer */
.blob {
	position: absolute;
	top: 0;
	left: 0;
	width: var(--size);
	height: var(--size);
	/* Softer falloff than before for a more "misty" look */
	background: radial-gradient(
		ellipse at center,
		var(--color) 0%,
		transparent 68%
	);
	opacity: var(--opacity, 0.22);
	/* Optional: enable warp filter (heavier)
	filter: url(#warp) blur(var(--blur)) hue-rotate(var(--hue, 0deg)) saturate(1.05);
	*/
	filter: blur(var(--blur)) hue-rotate(var(--hue, 0deg)) saturate(1.05);
	mix-blend-mode: screen; /* try 'lighten' if needed */
	will-change: transform, filter, opacity;

	/* Center the blob and move it with transforms (GPU-friendly) */
	transform: translate3d(calc(var(--x, 50) * 1vw), calc(var(--y, 50) * 1vh), 0)
		translate(-50%, -50%) rotate(var(--rot, 0deg))
		scale(var(--sx, 1), var(--sy, 1));
}
</style>
