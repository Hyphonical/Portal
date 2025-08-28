export default defineNuxtConfig({
	devtools: { enabled: true },
	compatibilityDate: '2025-08-22',
	modules: ['@nuxtjs/color-mode', '@nuxt/fonts', '@nuxt/image'],
	debug: false,

	css: ['~/assets/css/tailwind.css'],

	postcss: {
		plugins: {
			'@tailwindcss/postcss': {},
			autoprefixer: {},
		},
	},

	fonts: {
		families: [
			{ name: 'Asul', provider: 'google' },
			{ name: 'Cinzel Decorative', provider: 'google' },
		],
	},

	vite: {
		assetsInclude: ['**/*.wasm', '**/*.wasm?module'],
		ssr: { noExternal: ['@vercel/og'] },
	},

	app: {
		head: {
			title: 'Void Tales',
			titleTemplate: '%s · Void Tales',
			htmlAttrs: { lang: 'en' },
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'description', content: 'A station between worlds ✨' },
				{ name: 'theme-color', content: '#000000' },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:site_name', content: 'Void Tales' },
			],
			link: [
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
				{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&display=swap',
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Asul:wght@400&display=swap',
				},
			],
		},
	},

	runtimeConfig: {
		public: {
			siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
			siteName: 'Void Tales',
			siteDescription: 'A station between worlds ✨',
			themeColor: '#000000',
			ogImage: '/og.svg',
			twitterImage: '/twitter.svg',
			twitterCard: 'summary_large_image',
			twitterSite: '@shinsnowly',
			mcServerHost: process.env.NUXT_PUBLIC_MC_HOST || 'play.voidtales.win',
			mcServerPort: process.env.NUXT_PUBLIC_MC_PORT || '25565',
			modrinthUrl:
				process.env.NUXT_PUBLIC_MODRINTH_URL || 'https://modrinth.com/modpack/void-tales',
		},
	},

	colorMode: {
		classSuffix: '',
		preference: 'system',
		fallback: 'dark',
	},
});
