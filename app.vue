<template>
  <ColorScheme placeholder=" " />
  <div class="relative min-h-screen bg-white text-neutral-900 dark:bg-black dark:text-neutral-200">
    <ClientOnly>
      <Background />
    </ClientOnly>
    <NuxtLayout>
      <main class="relative z-10 min-h-screen opacity-0 animate-fade-in motion-reduce:animate-none">
        <NuxtPage />
      </main>
    </NuxtLayout>
  </div>
</template>