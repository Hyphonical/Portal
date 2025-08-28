export interface PlanPlayer {
	playerUUID: string;
	playerName: string;
	activityIndex: number;
	playtimeActive: number;
	sessionCount: number;
	lastSeen: number;
	registered: number;
	country: string;
	pingAverage: number;
	pingMax: number;
	pingMin: number;
	extensionValues?: Record<string, unknown>;
}

export interface PlanStatsResponse {
	players: PlanPlayer[];
	extensionDescriptors?: unknown[];
}
