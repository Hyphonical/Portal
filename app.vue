<template>
	<ColorScheme placeholder=" " />
	<div class="relative min-h-screen bg-transparent text-neutral-900 dark:text-neutral-200">
		<NuxtLayout>
			<main class="relative z-10 min-h-screen opacity-0 animate-fade-in motion-reduce:animate-none">
				<NuxtPage />
			</main>
		</NuxtLayout>
	</div>
</template>
