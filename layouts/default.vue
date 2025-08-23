<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
import { Analytics } from '@vercel/analytics/nuxt';
</script>

<template>
  <SpeedInsights />
  <Analytics />
  <div>
	<header
	  class="sticky top-0 z-50 border-b border-neutral-200/40 dark:border-neutral-800/60 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md"
	>
	  <div
		class="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between"
	  >
		<NuxtLink to="/" class="font-semibold tracking-wide"
		  >Void Tales</NuxtLink
		>
		<div class="flex items-center gap-3">
		  <ColorModeToggle />
		</div>
	  </div>
	</header>

	<div class="mx-auto max-w-5xl px-6 py-10">
	  <slot />
	</div>

	<footer
	  class="mt-20 border-t border-neutral-200/40 dark:border-neutral-800/60"
	>
	  <div class="mx-auto max-w-5xl px-6 py-8 text-sm opacity-70">
		© {{ new Date().getFullYear() }} Void Tales ~ Vibe-casted by Hyphonical 💙
	  </div>
	</footer>
  </div>
</template>