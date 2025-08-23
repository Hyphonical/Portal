<template>
	<section class="text-center space-y-8">

		<div class="mx-auto w-full max-w-xs relative flex flex-col items-center text-center overflow-visible">
			<h1 class="text-5xl font-bold tracking-wide">Void Tales</h1>
			<div class="w-full relative flex flex-col items-center justify-center">
				<div class="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm"></div>
				<div class="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full"></div>
				<div class="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-[5px] w-1/2 blur-sm"></div>
				<div class="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-px w-1/2"></div>
				<div class="absolute inset-0 w-full h-full [mask-image:radial-gradient(50%_200px_at_top,transparent_20%,white)]"></div>
			</div>
			<span
				class="pointer-events-none absolute -z-[1] inset-0 w-full h-full flex
							 before:content-[''] before:h-3/4 before:w-full before:bg-gradient-to-r
							 before:from-neutral-900 before:to-purple-600 before:blur-[90px]
							 after:content-[''] after:h-1/2 after:w-full after:bg-gradient-to-br
							 after:from-cyan-400 after:to-sky-300 after:blur-[90px]"
			></span>
		</div>

		<p class="text-lg opacity-80">A station between worlds ✨</p>

		<div class="flex items-center justify-center">
			<NuxtLink
				to="/join"
				class="px-5 py-2.5 rounded-xl
							 shadow-[0_2px_32px_0_oklch(60.6%_0.25_292.717)]
							 hover:scale-105 bg-neutral-900 text-white
							 dark:bg-white dark:text-neutral-900
							 hover:opacity-90 transition"
			>
				Join Us
			</NuxtLink>
		</div>
	</section>

	<!-- Portal Content Left -->
	<section class="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8 py-14 md:py-20">
		<div class="grid items-center gap-10 md:gap-14 md:grid-cols-2">
			<!-- Text -->
			<div class="space-y-5">
				<h2 class="text-3xl md:text-4xl font-semibold tracking-wide">
					Through Ash and Arcana
				</h2>
				<p class="text-base leading-relaxed opacity-85">
					Step into a realm shaped by embers, where lost kingdoms whisper and sorcery bends
					the void. Claim your path, master the arcane, and brave the trials between worlds.
				</p>
				<ul class="space-y-2.5 text-sm opacity-85">
					<li class="flex gap-3">
						<span class="mt-2 h-2 w-2 rounded-full bg-purple-500/80"></span>
						<span>RPG progression, bespoke classes, and attunements.</span>
					</li>
					<li class="flex gap-3">
						<span class="mt-2 h-2 w-2 rounded-full bg-indigo-500/80"></span>
						<span>Brutal encounters, world events, and co-op challenges.</span>
					</li>
					<li class="flex gap-3">
						<span class="mt-2 h-2 w-2 rounded-full bg-cyan-400/80"></span>
						<span>Discover relics, craft sigils, and bend the void to your will.</span>
					</li>
				</ul>
			</div>

			<!-- Image Card: slanted left -->
			<div class="relative [perspective:1200px]">
				<div
					class="relative rounded-2xl overflow-hidden border
								 bg-white/5 border-neutral-200/40 shadow-2xl
								 dark:bg-black/30 dark:border-white/10 backdrop-blur-sm
								 -skew-1 rotate-5"
				>
					<div class="pointer-events-none absolute -inset-px rounded-2xl
											bg-gradient-to-br from-purple-500/30 via-indigo-500/15 to-cyan-400/30
											opacity-60"></div>

					<img
						src="/images/portal.webp"
						alt="Void Tales ~ Soul Station"
						loading="lazy"
						decoding="async"
						fetchpriority="low"
						class="relative w-full rounded-2xl
									 opacity-95 mix-blend-normal dark:mix-blend-lighten"
					/>

					<div class="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-indigo-400/10"></div>
					<div class="pointer-events-none absolute inset-0 ring-1 ring-black/10 dark:ring-white/10 rounded-2xl"></div>
				</div>
			</div>
		</div>
	</section>

	<!-- Portal Content Right -->
	<section class="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8 py-14 md:py-20">
		<div class="grid items-center gap-10 md:gap-14 md:grid-cols-2">
			<!-- Image Card: slanted right -->
			<div class="relative [perspective:1200px]">
				<div
					class="relative rounded-2xl overflow-hidden border
								 bg-white/5 border-neutral-200/40 shadow-2xl
								 dark:bg-black/30 dark:border-white/10 backdrop-blur-sm
								 skew-1 -rotate-5"
				>
					<div class="pointer-events-none absolute -inset-px rounded-2xl
											bg-gradient-to-br from-purple-500/30 via-indigo-500/15 to-cyan-400/30
											opacity-60"></div>

					<img
						src="/images/portal-2.webp"
						alt="Void Tales ~ Soul Station"
						loading="lazy"
						decoding="async"
						fetchpriority="low"
						class="relative w-full rounded-2xl
									 opacity-95 mix-blend-normal dark:mix-blend-lighten"
					/>

					<div class="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-indigo-400/10"></div>
					<div class="pointer-events-none absolute inset-0 ring-1 ring-black/10 dark:ring-white/10 rounded-2xl"></div>
				</div>
			</div>

			<!-- Text (Right) -->
			<div class="space-y-5">
				<h2 class="text-3xl md:text-4xl font-semibold tracking-wide">
					Through Ash and Arcana
				</h2>
				<p class="text-base leading-relaxed opacity-85">
					Step into a realm shaped by embers, where lost kingdoms whisper and sorcery bends
					the void. Claim your path, master the arcane, and brave the trials between worlds.
				</p>
				<ul class="space-y-2.5 text-sm opacity-85">
					<li class="flex gap-3">
						<span class="mt-2 h-2 w-2 rounded-full bg-purple-500/80"></span>
						<span>RPG progression, bespoke classes, and attunements.</span>
					</li>
					<li class="flex gap-3">
						<span class="mt-2 h-2 w-2 rounded-full bg-indigo-500/80"></span>
						<span>Brutal encounters, world events, and co-op challenges.</span>
					</li>
					<li class="flex gap-3">
						<span class="mt-2 h-2 w-2 rounded-full bg-cyan-400/80"></span>
						<span>Discover relics, craft sigils, and bend the void to your will.</span>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
definePageMeta({
	title: 'Home'
})
</script>