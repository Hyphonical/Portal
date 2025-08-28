import { defineEventHandler, getQuery } from 'h3';
import type { ServerStatus } from '~/types/mc-status';

export default defineEventHandler(async (event): Promise<ServerStatus> => {
	const cfg = useRuntimeConfig();
	const q = getQuery(event);

	const host = (q.host as string) || cfg.public.mcServerHost;
	const port = Number((q.port as string) || cfg.public.mcServerPort || 25565);

	if (!host) {
		return {
			online: false,
			host: host ?? '',
			port,
			players: { online: 0, max: 0 },
			version: null,
			motd: null,
		};
	}

	try {
		const url = `https://api.mcstatus.io/v2/status/java/${host}:${port}`;
		const res = await $fetch<{
			online?: boolean;
			players?: { online?: number; max?: number };
			version?: { name_clean?: string };
			motd?: { html?: string };
		}>(url, { timeout: 5000 });

		return {
			online: !!res?.online,
			host,
			port,
			players: {
				online: res?.players?.online ?? 0,
				max: res?.players?.max ?? 0,
			},
			version: res?.version?.name_clean ?? null,
			motd: res?.motd?.html ?? null,
		};
	} catch {
		return {
			online: false,
			host,
			port,
			players: { online: 0, max: 0 },
			version: null,
			motd: null,
		};
	}
});
