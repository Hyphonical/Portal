<template>
	<section class="section-shell">
		<h1 class="text-3xl font-bold mb-6">Server Statistics</h1>
		<div v-if="error" class="text-red-500 mb-4">Failed to load stats.</div>
		<table
			v-if="stats?.players"
			class="min-w-full bg-white/80 dark:bg-neutral-900/80 rounded-xl overflow-hidden"
		>
			<thead>
				<tr>
					<th class="px-4 py-2">Player</th>
					<th class="px-4 py-2">Playtime</th>
					<th class="px-4 py-2">Sessions</th>
					<th class="px-4 py-2">Last Seen</th>
					<th class="px-4 py-2">Country</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="p in stats.players" :key="p.playerUUID">
					<td class="px-4 py-2">{{ p.playerName }}</td>
					<td class="px-4 py-2">{{ Math.round(p.playtimeActive / 3600) }}h</td>
					<td class="px-4 py-2">{{ p.sessionCount }}</td>
					<td class="px-4 py-2">{{ new Date(p.lastSeen * 1000).toLocaleString() }}</td>
					<td class="px-4 py-2">{{ p.country }}</td>
				</tr>
			</tbody>
		</table>
		<div v-else class="text-neutral-500">No player data available.</div>
	</section>
</template>

<script setup lang="ts">
import type { PlanStatsResponse } from '~/types/plan-stats';

const { data: stats, error } = await useFetch<PlanStatsResponse>('/api/plan-stats');
definePageMeta({
	title: 'Server Statistics',
});
</script>
