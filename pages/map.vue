<template>
	<section class="mx-auto w-full max-w-5xl px-6 py-6">
		<h2 class="text-2xl font-semibold tracking-wide mb-4 text-center">Live World Map</h2>
		<div
			class="rounded-2xl border border-neutral-200/50 dark:border-neutral-800/60 bg-white/60 dark:bg-neutral-900/50 backdrop-blur-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
		>
			<div class="relative">
				<iframe
					src="https://bluemap.voidtales.win/#skyloft"
					title="Void Tales BlueMap"
					class="w-full h-[400px] md:h-[500px] border-0 rounded-2xl"
					loading="lazy"
					referrerpolicy="no-referrer"
					allowfullscreen
				></iframe>
				<!-- Optional loading overlay -->
				<div
					v-if="isLoading"
					class="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-black/80 rounded-2xl"
				>
					<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isLoading = ref(true);

onMounted(() => {
	setTimeout(() => {
		isLoading.value = false;
	}, 2000);
});

definePageMeta({
	title: 'Map',
});
</script>
