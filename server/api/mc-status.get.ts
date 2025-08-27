import { defineEventHandler, getQuery } from 'h3';

interface McStatusResponse {
	online: boolean;
	host: string | null;
	port: number;
	players: {
		online: number;
		max: number;
	};
	version: string | null;
	motd: string | null;
	favicon?: string | null;
	latency?: number | null;
}

interface McApiResponse {
	online?: boolean;
	players?: { online?: number; max?: number };
	version?: { name_clean?: string; name_raw?: string };
	motd?: { clean?: string[] };
	favicon?: string;
	latency?: number;
}

export default defineEventHandler(async (event): Promise<McStatusResponse> => {
	const cfg = useRuntimeConfig();
	const q = getQuery(event);

	const host = (q.host as string) || cfg.public.mcServerHost;
	const port = Number((q.port as string) || cfg.public.mcServerPort || 25565);

	if (!host) {
		return {
			online: false,
			host: null,
			port,
			players: { online: 0, max: 0 },
			version: null,
			motd: null,
		};
	}

	try {
		const url = `https://api.mcstatus.io/v2/status/java/${host}:${port}`;
		const res: McApiResponse = await $fetch<McApiResponse>(url, {
			timeout: 5000,
		});

		return {
			online: !!res?.online,
			host,
			port,
			players: {
				online: res?.players?.online ?? 0,
				max: res?.players?.max ?? 0,
			},
			version: res?.version?.name_clean ?? res?.version?.name_raw ?? null,
			motd: res?.motd?.clean?.join?.(' ') ?? null,
			favicon: res?.favicon ?? null,
			latency: res?.latency ?? null,
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
