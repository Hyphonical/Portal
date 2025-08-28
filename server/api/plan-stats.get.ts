import { defineEventHandler } from 'h3';
import { useRuntimeConfig } from '#imports';

let planCookie: string | null = null;

export default defineEventHandler(async () => {
	const runtimeConfig = useRuntimeConfig();
	const PLAN_URL = runtimeConfig.plan.url;
	const PLAN_USER = runtimeConfig.plan.user;
	const PLAN_PASS = runtimeConfig.plan.pass;
	const SERVER_ID = runtimeConfig.plan.serverId;

	async function loginPlan() {
		const res = await $fetch.raw(`${PLAN_URL}/auth/login`, {
			method: 'POST',
			headers: { accept: '*/*', 'Content-Type': 'application/x-www-form-urlencoded' },
			body: `user=${PLAN_USER}&password=${PLAN_PASS}`,
		});
		const cookie = res.headers.get('set-cookie');
		if (cookie) planCookie = cookie;
	}

	if (!planCookie) await loginPlan();

	try {
		const stats = await $fetch(`${PLAN_URL}/v1/playersTable?server=${SERVER_ID}`, {
			headers: { cookie: planCookie! },
		});
		return stats;
	} catch (e) {
		planCookie = null;
		return { error: 'Failed to fetch stats' };
	}
});
