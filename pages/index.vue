<template>
	<!-- Hero Section -->
	<section class="text-center space-y-8">
		<div
			class="mx-auto w-full max-w-xs relative flex flex-col items-center text-center overflow-visible"
		>
			<h1 class="text-5xl font-bold tracking-wide">Void Tales</h1>
			<div class="w-full relative flex flex-col items-center justify-center">
				<div
					class="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm"
				></div>
				<div
					class="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full"
				></div>
				<div
					class="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-[5px] w-1/2 blur-sm"
				></div>
				<div
					class="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent h-px w-1/2"
				></div>
				<div
					class="absolute inset-0 w-full h-full [mask-image:radial-gradient(50%_200px_at_top,transparent_20%,white)]"
				></div>
			</div>
			<span
				class="pointer-events-none absolute -z-[1] inset-0 w-full h-full flex before:content-[''] before:h-3/4 before:w-full before:bg-gradient-to-r before:from-neutral-900 before:to-purple-600 before:blur-[90px] after:content-[''] after:h-1/2 after:w-full after:bg-gradient-to-br after:from-cyan-400 after:to-sky-300 after:blur-[90px]"
			></span>
		</div>

		<p class="text-lg opacity-80">A station between worlds ✨</p>
	</section>

	<!-- Connect Panel -->
	<section class="mx-auto w-full max-w-5xl px-6 py-6 opacity-0 animate-fade-in">
		<h2 class="text-2xl font-semibold tracking-wide mb-4">Connect</h2>

		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
			<!-- ServerStatus inserted directly, additional classes passed through (h-full + justify-between) -->
			<ServerStatus class="h-full justify-between" />

			<!-- Right panel: exactly the same root classes as ServerStatus -->
			<div
				class="w-full rounded-2xl border border-neutral-200/50 dark:border-neutral-800/60 bg-white/60 dark:bg-neutral-900/50 backdrop-blur-md p-5 flex flex-col justify-between gap-4 text-sm"
			>
				<div>
					<h3 class="text-sm font-medium mb-2">News & Announcements</h3>
					<p class="text-xs opacity-85 mb-3">
						Here could be a devlog entry from discord or something with added via workflow.
					</p>

					<ul class="text-xs space-y-2">
						<li class="flex items-start gap-2">
							<span class="mt-1 h-2 w-2 rounded-full bg-purple-500/80"></span> Event: Saturday 20:00
						</li>
						<li class="flex items-start gap-2">
							<span class="mt-1 h-2 w-2 rounded-full bg-indigo-500/80"></span> New questline now
							live
						</li>
					</ul>
				</div>

				<div class="mt-3 flex justify-end">
					<a
						href="/more"
						class="inline-block px-3 py-2 text-sm rounded-lg border border-neutral-300/60 dark:border-neutral-700/60"
						>Learn more</a
					>
				</div>
			</div>
		</div>
	</section>

	<!-- Portal Content Left -->
	<section class="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8 py-14 md:py-20">
		<div class="grid items-center gap-10 md:gap-14 md:grid-cols-2">
			<!-- Text -->
			<div class="space-y-5">
				<h2 class="text-3xl md:text-4xl font-semibold tracking-wide">Through Ash and Arcana</h2>
				<p class="text-base leading-relaxed opacity-85">
					You awaken in a world undone, where the goddess Phia lies scattered and silent, her
					fragments hidden across realms touched by the void. At the center of it all stands the
					Soul Station—a place where memory drifts, where paths between worlds converge. To walk
					this journey is to seek not only the pieces of a fallen divinity, but also the shape of
					your own forgotten self.
				</p>
				<ul class="space-y-2.5 text-sm opacity-85">
					<li class="flex gap-3">
						<span class="mt-2 h-2 w-2 rounded-full bg-purple-500/80"></span>
						<span>Gather Phia’s fragments, hidden in worlds fractured by the void.</span>
					</li>
					<li class="flex gap-3">
						<span class="mt-2 h-2 w-2 rounded-full bg-indigo-500/80"></span>
						<span>Shape your soul with relics, sigils, and attunements.</span>
					</li>
					<li class="flex gap-3">
						<span class="mt-2 h-2 w-2 rounded-full bg-cyan-400/80"></span>
						<span>Confront the trials that guard the way between memory and rebirth.</span>
					</li>
				</ul>
			</div>

			<!-- Image Card: slanted left -->
			<div class="relative [perspective:1200px] animate-bob" style="animation-delay: -1.5s;">
				<div
					class="relative rounded-2xl overflow-hidden border bg-white/5 border-neutral-200/40 shadow-2xl dark:bg-black/30 dark:border-white/10 backdrop-blur-sm -skew-1 rotate-5 card-hover"
				>
					<div
						class="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500/30 via-indigo-500/15 to-cyan-400/30 opacity-60"
					></div>

					<NuxtImg
						src="/images/portal-1.webp"
						alt="Void Tales ~ Soul Station"
						width="800"
						height="600"
						format="webp"
						quality="80"
						loading="lazy"
					/>

					<div
						class="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-indigo-400/10"
					></div>
					<div
						class="pointer-events-none absolute inset-0 ring-1 ring-black/10 dark:ring-white/10 rounded-2xl"
					></div>
				</div>
			</div>
		</div>
	</section>

	<!-- Portal Content Right -->
	<section class="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8 py-14 md:py-20">
		<div class="grid items-center gap-10 md:gap-14 md:grid-cols-2">
			<!-- Image Card: slanted right -->
			<div class="relative [perspective:1200px] animate-bob">
				<div
					class="relative rounded-2xl overflow-hidden border bg-white/5 border-neutral-200/40 shadow-2xl dark:bg-black/30 dark:border-white/10 backdrop-blur-sm skew-1 -rotate-5 card-hover"
				>
					<div
						class="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500/30 via-indigo-500/15 to-cyan-400/30 opacity-60"
					></div>

					<NuxtImg
						src="/images/portal-2.webp"
						alt="Void Tales ~ Soul Station"
						width="800"
						height="600"
						format="webp"
						quality="80"
						loading="lazy"
					/>

					<div
						class="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-indigo-400/10"
					></div>
					<div
						class="pointer-events-none absolute inset-0 ring-1 ring-black/10 dark:ring-white/10 rounded-2xl"
					></div>
				</div>
			</div>

			<!-- Text (Right) -->
			<div class="space-y-5">
				<h2 class="text-3xl md:text-4xl font-semibold tracking-wide">The Shattered Realms</h2>
				<p class="text-base leading-relaxed opacity-85">
					The lands you cross are more than ruins—they are kingdoms long surrendered to time. In the
					autumn-bound halls of Falwhind, beneath the endless trees of Ibya, or in the buried stone
					of Aridia, every shadow holds its own memory. Battles rise and fall, strange events twist
					the present, and creatures beyond reason linger in the dark. Here, to lose yourself is to
					step closer to the truth the world has hidden.
				</p>
				<ul class="space-y-2.5 text-sm opacity-85">
					<li class="flex gap-3">
						<span class="mt-2 h-2 w-2 rounded-full bg-purple-500/80"></span>
						<span>Wander realms each marked by their own history and peril.</span>
					</li>
					<li class="flex gap-3">
						<span class="mt-2 h-2 w-2 rounded-full bg-indigo-500/80"></span>
						<span>Face encounters, events, and challenges that shift with the world.</span>
					</li>
					<li class="flex gap-3">
						<span class="mt-2 h-2 w-2 rounded-full bg-cyan-400/80"></span>
						<span
							>Discover the strange beauty of being lost—and the wonder of finding your way.</span
						>
					</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- Gallery 2x2 -->
	<section class="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8 py-14 md:py-20">
		<div class="text-center max-w-2xl mx-auto space-y-3 mb-10">
			<h2 class="text-3xl md:text-4xl font-semibold tracking-wide">Echoes from the Station</h2>
			<p class="opacity-85">Glimpses across realms—moments caught between memory and motion.</p>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
			<!-- Card 1 -->
			<div
				ref="card1"
				class="relative rounded-2xl overflow-hidden border bg-white/5 border-neutral-200/40 shadow-2xl dark:bg-black/30 dark:border-white/10 backdrop-blur-sm card-hover"
			>
				<div
					class="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500/30 via-indigo-500/15 to-cyan-400/30 opacity-60"
				></div>
				<NuxtImg
					src="/images/grid-1.webp"
					alt="Void Tales ~ Soul Station"
					width="800"
					height="450"
					format="webp"
					quality="80"
					loading="lazy"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-indigo-400/10"
				></div>
				<div
					class="pointer-events-none absolute inset-0 ring-1 ring-black/10 dark:ring-white/10 rounded-2xl"
				></div>
			</div>

			<!-- Card 2 -->
			<div
				ref="card2"
				class="relative rounded-2xl overflow-hidden border bg-white/5 border-neutral-200/40 shadow-2xl dark:bg-black/30 dark:border-white/10 backdrop-blur-sm card-hover"
			>
				<div
					class="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500/30 via-indigo-500/15 to-cyan-400/30 opacity-60"
				></div>
				<NuxtImg
					src="/images/grid-2.webp"
					alt="Void Tales ~ Soul Station"
					width="800"
					height="450"
					format="webp"
					quality="80"
					loading="lazy"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-indigo-400/10"
				></div>
				<div
					class="pointer-events-none absolute inset-0 ring-1 ring-black/10 dark:ring-white/10 rounded-2xl"
				></div>
			</div>

			<!-- Card 3 -->
			<div
				ref="card3"
				class="relative rounded-2xl overflow-hidden border bg-white/5 border-neutral-200/40 shadow-2xl dark:bg-black/30 dark:border-white/10 backdrop-blur-sm card-hover"
			>
				<div
					class="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500/30 via-indigo-500/15 to-cyan-400/30 opacity-60"
				></div>
				<NuxtImg
					src="/images/grid-3.webp"
					alt="Void Tales ~ Soul Station"
					width="800"
					height="450"
					format="webp"
					quality="80"
					loading="lazy"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-indigo-400/10"
				></div>
				<div
					class="pointer-events-none absolute inset-0 ring-1 ring-black/10 dark:ring-white/10 rounded-2xl"
				></div>
			</div>

			<!-- Card 4 -->
			<div
				ref="card4"
				class="relative rounded-2xl overflow-hidden border bg-white/5 border-neutral-200/40 shadow-2xl dark:bg-black/30 dark:border-white/10 backdrop-blur-sm card-hover"
			>
				<div
					class="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500/30 via-indigo-500/15 to-cyan-400/30 opacity-60"
				></div>
				<NuxtImg
					src="/images/grid-4.webp"
					alt="Void Tales ~ Soul Station"
					width="800"
					height="450"
					format="webp"
					quality="80"
					loading="lazy"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-indigo-400/10"
				></div>
				<div
					class="pointer-events-none absolute inset-0 ring-1 ring-black/10 dark:ring-white/10 rounded-2xl"
				></div>
			</div>
		</div>

		<div class="text-center max-w-2xl mx-auto space-y-3 mt-10">
			<p class="opacity-85">
				Fragments remain—each a path back to what was lost, and forward to what must be found.
			</p>
		</div>
	</section>

	<!-- Social Links -->
	<section class="text-center space-y-6 py-20">
		<h3 class="text-2xl font-semibold tracking-wide">Follow the Journey</h3>
		<div class="flex items-center justify-center gap-4">
			<NuxtLink
				to="https://wiki.voidtales.win"
				target="_blank"
				class="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black hover:brightness-110 transition-colors"
			>
				Wiki
			</NuxtLink>
			<NuxtLink
				to="https://blog.voidtales.win"
				target="_blank"
				class="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black hover:brightness-110 transition-colors"
			>
				Blog
			</NuxtLink>
			<NuxtLink
				to="https://forum.voidtales.win"
				target="_blank"
				class="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black hover:brightness-110 transition-colors"
			>
				Forum
			</NuxtLink>
			<NuxtLink
				to="https://discord.voidtales.win"
				target="_blank"
				class="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black hover:brightness-110 transition-colors"
			>
				Discord
			</NuxtLink>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VanillaTilt from 'vanilla-tilt';

const card1 = ref(null);
const card2 = ref(null);
const card3 = ref(null);
const card4 = ref(null);

onMounted(() => {
	if (card1.value)
		VanillaTilt.init(card1.value, {
			max: 10,
			speed: 40,
			glare: true,
			'max-glare': 0.05,
			reverse: true,
		});
	if (card2.value)
		VanillaTilt.init(card2.value, {
			max: 10,
			speed: 40,
			glare: true,
			'max-glare': 0.05,
			reverse: true,
		});
	if (card3.value)
		VanillaTilt.init(card3.value, {
			max: 10,
			speed: 40,
			glare: true,
			'max-glare': 0.05,
			reverse: true,
		});
	if (card4.value)
		VanillaTilt.init(card4.value, {
			max: 10,
			speed: 40,
			glare: true,
			'max-glare': 0.05,
			reverse: true,
		});
});

definePageMeta({
	title: 'Home',
});
</script>
