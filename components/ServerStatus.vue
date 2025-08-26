<script setup lang="ts">
import { ref } from 'vue'
const cfg = useRuntimeConfig().public
const { data, pending, refresh } = useFetch('/api/mc-status', {
  query: { host: cfg.mcServerHost, port: cfg.mcServerPort },
  server: true,
  default: () => ({
	online: false,
	host: cfg.mcServerHost,
	port: Number(cfg.mcServerPort || 25565),
	players: { online: 0, max: 0 },
	version: null,
	motd: null
  }),
  lazy: true
})

const copied = ref(false)
const copyIp = async () => {
  const ip = `${cfg.mcServerHost}${cfg.mcServerPort && Number(cfg.mcServerPort) !== 25565 ? ':' + cfg.mcServerPort : ''}`
  await navigator.clipboard.writeText(ip)
  copied.value = true
  setTimeout(() => copied.value = false, 1200)
}
</script>

<template>
  <div
    class="w-full rounded-2xl border border-neutral-200/50 dark:border-neutral-800/60 bg-white/60 dark:bg-neutral-900/50 backdrop-blur-md p-5 flex flex-col gap-4"
  >
    <!-- TOP BLOCK: contains Online/Refresh AND Players/Version -->
    <div class="flex flex-col gap-3">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          <span
            :class="[
              'inline-flex items-center gap-2 px-2 py-1 rounded-lg text-xs font-medium',
              data?.online ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300' : 'bg-rose-500/15 text-rose-700 dark:text-rose-300'
            ]"
          >
            <span
              class="h-2 w-2 rounded-full"
              :class="data?.online ? 'bg-emerald-500' : 'bg-rose-500'"
            ></span>
            {{ data?.online ? 'Online' : 'Offline' }}
          </span>
          <button
            class="text-xs px-2 py-1 rounded-lg border border-neutral-300/60 dark:border-neutral-700/60 hover:bg-neutral-100 dark:hover:bg-neutral-800/70"
            @click="() => refresh()"
            :disabled="pending"
          >
            {{ pending ? 'Refreshing…' : 'Refresh' }}
          </button>
        </div>

        <div class="flex items-center gap-2">
          <code
            class="text-sm px-2 py-1 rounded-lg bg-neutral-100/80 dark:bg-neutral-800/70 border border-neutral-200/60 dark:border-neutral-700/60 flex items-center gap-1"
          >
            {{ cfg.mcServerHost
            }}<template
              v-if="cfg.mcServerPort && Number(cfg.mcServerPort) !== 25565"
            >:{{ cfg.mcServerPort }}</template>
            <span class="ml-2 cursor-pointer" @click="copyIp" title="Copy IP">
              <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </span>
          </code>
        </div>
      </div>

      <!-- Players / Version directly under the top row -->
      <div class="flex flex-wrap items-center gap-4 text-sm opacity-85">
        <div>
          Players: <strong>{{ data?.players?.online ?? 0 }}</strong
          ><template v-if="data?.players?.max"> / {{ data?.players?.max }}</template>
        </div>
        <div v-if="data?.version">
          Version: <strong>{{ data.version }}</strong>
        </div>
        <div v-if="data?.motd" class="truncate max-w-full">
          MOTD: <span class="opacity-80">{{ data.motd }}</span>
        </div>
      </div>
    </div>

    <!-- BOTTOM: Buttons / Links -> remains the last element -->
    <div class="flex items-center gap-3">
      <NuxtLink :to="cfg.modrinthUrl" target="_blank" class="px-4 py-2 rounded-xl bg-modrinth text-white hover:brightness-110 transition-colors text-sm flex items-center gap-x-2">
        <span>Get the Modpack on Modrinth</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M12.252.004a11.78 11.768 0 0 0-8.92 3.73a11 11 0 0 0-2.17 3.11a11.37 11.359 0 0 0-1.16 5.169c0 1.42.17 2.5.6 3.77c.24.759.77 1.899 1.17 2.529a12.3 12.298 0 0 0 8.85 5.639c.44.05 2.54.07 2.76.02c.2-.04.22.1-.26-1.7l-.36-1.37l-1.01-.06a8.5 8.489 0 0 1-5.18-1.8a5.3 5.3 0 0 1-1.3-1.26c0-.05.34-.28.74-.5a37.572 37.545 0 0 1 2.88-1.629c.03 0 .5.45 1.06.98l1 .97l2.07-.43l2.06-.43l1.47-1.47c.8-.8 1.48-1.5 1.48-1.52c0-.09-.42-1.63-.46-1.7c-.04-.06-.2-.03-1.02.18c-.53.13-1.2.3-1.45.4l-.48.15l-.53.53l-.53.53l-.93.1l-.93.07l-.52-.5a2.7 2.7 0 0 1-.96-1.7l-.13-.6l.43-.57c.68-.9.68-.9 1.46-1.1c.4-.1.65-.2.83-.33c.13-.099.65-.579 1.14-1.069l.9-.9l-.7-.7l-.7-.7l-1.95.54c-1.07.3-1.96.53-1.97.53c-.03 0-2.23 2.48-2.63 2.97l-.29.35l.28 1.03c.16.56.3 1.16.31 1.34l.03.3l-.34.23c-.37.23-2.22 1.3-2.84 1.63c-.36.2-.37.2-.44.1c-.08-.1-.23-.6-.32-1.03c-.18-.86-.17-2.75.02-3.73a8.84 8.84 0 0 1 7.9-6.93c.43-.03.77-.08.78-.1c.06-.17.5-2.999.47-3.039c-.01-.02-.1-.02-.2-.03Zm3.68.67c-.2 0-.3.1-.37.38c-.06.23-.46 2.42-.46 2.52c0 .04.1.11.22.16a8.51 8.499 0 0 1 2.99 2a8.38 8.379 0 0 1 2.16 3.449a6.9 6.9 0 0 1 .4 2.8c0 1.07 0 1.27-.1 1.73a9.4 9.4 0 0 1-1.76 3.769c-.32.4-.98 1.06-1.37 1.38c-.38.32-1.54 1.1-1.7 1.14c-.1.03-.1.06-.07.26c.03.18.64 2.56.7 2.78l.06.06a12.07 12.058 0 0 0 7.27-9.4c.13-.77.13-2.58 0-3.4a11.96 11.948 0 0 0-5.73-8.578c-.7-.42-2.05-1.06-2.25-1.06Z"
          />
        </svg>
      </NuxtLink>
      <NuxtLink to="https://discord.voidtales.win" target="_blank" class="px-4 py-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 text-sm">
        Join Discord
      </NuxtLink>
    </div>
  </div>
</template>