export interface ServerStatus {
	online: boolean;
	host: string;
	port: number;
	players: { online: number; max: number };
	version: string | null;
	motd: string | null;
}
