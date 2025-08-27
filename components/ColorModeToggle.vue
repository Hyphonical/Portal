<script setup lang="ts">
const colorMode = useColorMode();
const toggle = () => {
	colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script>

<template>
	<ClientOnly>
		<button
			type="button"
			class="px-3 py-1.5 rounded-xl border border-neutral-300/60 dark:border-neutral-700/60 text-sm"
			@click="toggle"
			:aria-label="`Switch to ${colorMode.value === 'dark' ? 'light' : 'dark'} mode`"
			:title="`Switch to ${colorMode.value === 'dark' ? 'light' : 'dark'} mode`"
		>
			{{ colorMode.value === 'dark' ? '🌙 Dark' : '☀️ Light' }}
		</button>

		<template #fallback>
			<button
				type="button"
				class="px-3 py-1.5 rounded-xl border border-neutral-300/60 dark:border-neutral-700/60 text-sm"
				disabled
				aria-hidden="true"
			>
				🔄 Theme
			</button>
		</template>
	</ClientOnly>
</template>
