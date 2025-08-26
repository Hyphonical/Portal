<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
import { Analytics } from '@vercel/analytics/nuxt';
</script>

<template>
  <SpeedInsights />
  <Analytics />
  <div>
	<header
		class="sticky top-0 z-50 border-b border-neutral-200/40 dark:border-neutral-800/60 bg-transparent dark:bg-transparent backdrop-blur-md"
	>
	  <div
		class="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between"
	  >
	<NuxtLink to="/" class="font-semibold tracking-wide mr-4 sm:mr-6">
		Void Tales
	</NuxtLink>
<!-- Social Links (styled like ColorModeToggle) -->
<div class="flex items-center gap-3">
  <NuxtLink to="https://wiki.voidtales.win" target="_blank"
    class="px-3 py-1.5 rounded-xl border border-neutral-300/60 dark:border-neutral-700/60 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800/70 transition-colors">
    Wiki
  </NuxtLink>

  <NuxtLink to="https://blog.voidtales.win" target="_blank"
    class="px-3 py-1.5 rounded-xl border border-neutral-300/60 dark:border-neutral-700/60 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800/70 transition-colors">
    Blog
  </NuxtLink>

  <NuxtLink to="https://forum.voidtales.win" target="_blank"
    class="px-3 py-1.5 rounded-xl border border-neutral-300/60 dark:border-neutral-700/60 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800/70 transition-colors">
    Forum
  </NuxtLink>

  <NuxtLink to="https://discord.voidtales.win" target="_blank"
    class="px-3 py-1.5 rounded-xl border border-neutral-300/60 dark:border-neutral-700/60 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800/70 transition-colors">
    Discord
  </NuxtLink>
</div>
		<!-- add responsive left margin so toggle is separated from the social buttons -->
		<div class="flex items-center gap-3 ml-2 sm:ml-4">
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