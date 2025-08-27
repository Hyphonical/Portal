# Void Tales Portal ✨

A lightweight Nuxt 4 portal for the Void Tales Minecraft community: landing page, live server status, embedded BlueMap, SEO, and performance analytics.

- Live map: [pages/map.vue](pages/map.vue)
- Home and gallery: [pages/index.vue](pages/index.vue)
- Layout and header: [layouts/default.vue](layouts/default.vue)
- Global app shell: [app.vue](app.vue)

## Features

- 🟢 Live server status via Nitro endpoint → UI in [components/ServerStatus.vue](components/ServerStatus.vue), API in [server/api/mc-status.get.ts](server/api/mc-status.get.ts)
- 🗺️ Embedded BlueMap world viewer → [pages/map.vue](pages/map.vue)
- 🌓 Dark/light mode with persisted preference → [components/ColorModeToggle.vue](components/ColorModeToggle.vue)
- 🔎 Automatic SEO and canonical tags → [plugins/seo.ts](plugins/seo.ts)
- 🖼️ Optimized images via Nuxt Image → used in [pages/index.vue](pages/index.vue)
- 🅰️ Google Fonts via @nuxt/fonts → configured in [nuxt.config.ts](nuxt.config.ts)
- 📊 Vercel Analytics + Speed Insights → injected in [layouts/default.vue](layouts/default.vue)
- 🛡️ Strong security headers + long-term cache for assets → [vercel.json](vercel.json)
- 💨 Tailwind CSS v4 with custom animations/utilities → [tailwind.config.js](tailwind.config.js), [assets/css/tailwind.css](assets/css/tailwind.css)

## Tech Stack

- Nuxt 4 + Vue 3.5 (Nitro server for API routes)
- Tailwind CSS v4 (via @tailwindcss/postcss)
- PostCSS + Autoprefixer
- @nuxt/image, @nuxt/fonts, @nuxtjs/color-mode
- Vercel Analytics + Speed Insights
- VanillaTilt for subtle 3D hover effects

See project configuration in [nuxt.config.ts](nuxt.config.ts).

## Getting Started

Prerequisites:

- Node.js 18.20+ (LTS recommended)
- npm (or your preferred package manager)

Install and run (Windows PowerShell):

```powershell
npm install
npm run dev
# open http://localhost:3000
```

Build, generate, and preview:

```powershell
npm run build
npm run generate
npm run preview
```

## Configuration

Public runtime config lives in [nuxt.config.ts](nuxt.config.ts) under `runtimeConfig.public`. These keys are read at runtime (and can be provided via `.env`):

```dotenv
# .env (copy from .env.example)
NUXT_PUBLIC_SITE_URL=https://portal.voidtales.win

# Minecraft server
NUXT_PUBLIC_MC_HOST=play.voidtales.win
NUXT_PUBLIC_MC_PORT=25565

# Modrinth project
NUXT_PUBLIC_MODRINTH_URL=https://modrinth.com/modpack/your-pack
```

Used by:

- SEO and social previews: `siteUrl`, `siteName`, `siteDescription`, `themeColor`, `ogImage`, `twitterImage`, `twitterCard`, `twitterSite` → see [plugins/seo.ts](plugins/seo.ts)
- Server status: `mcServerHost`, `mcServerPort` → see [components/ServerStatus.vue](components/ServerStatus.vue) and [server/api/mc-status.get.ts](server/api/mc-status.get.ts)
- Modrinth button: `modrinthUrl` → see [components/ServerStatus.vue](components/ServerStatus.vue)

Tip:

- Set `NUXT_PUBLIC_SITE_URL` correctly for accurate canonical/og:urls.
- Social images default to `/og.svg` and `/twitter.svg` (place in `public/`).

## Styles

- Tailwind entry and global styles: [assets/css/tailwind.css](assets/css/tailwind.css)
  - Imports Tailwind v4 and applies custom base layers, dark theme background overlay, and hover/animation helpers.
- Tailwind config (colors, keyframes, animations): [tailwind.config.js](tailwind.config.js)
  - Includes a custom `modrinth` brand color and several animations (`bob`, `fade-in`, `slide-up`, `blur-in`).

Fonts are configured in [nuxt.config.ts](nuxt.config.ts) and loaded via @nuxt/fonts:

- Asul (UI text)
- Cinzel Decorative (headings)

## API

Minecraft status (proxied via Nitro):

- Route: `GET /api/mc-status?host=<host>&port=<port>`
- Source: [server/api/mc-status.get.ts](server/api/mc-status.get.ts)
- Returns:
  ```json
  {
  	"online": true,
  	"host": "play.voidtales.win",
  	"port": 25565,
  	"players": { "online": 7, "max": 40 },
  	"version": "1.20.1",
  	"motd": "Welcome to Void Tales",
  	"favicon": "data:image/png;base64,...",
  	"latency": 42
  }
  ```
  If `host`/`port` are omitted, values from runtime config are used.

## SEO

- Canonical URL is computed from `siteUrl` + current route.
- Open Graph and Twitter meta are set automatically.
- Relative image paths are normalized to absolute using `siteUrl`.
- Source: [plugins/seo.ts](plugins/seo.ts)

Adjust descriptions and social tags in [nuxt.config.ts](nuxt.config.ts).

## Deployment

Vercel-ready:

- Caching for Nuxt assets and strict security headers configured in [vercel.json](vercel.json)
  - CSP allows embedding BlueMap via `frame-src https://bluemap.voidtales.win`
  - COOP/COEP/COEP headers included; adjust if you embed cross-origin content
- Ensure `NUXT_PUBLIC_SITE_URL` is set in Vercel Project Settings → Environment Variables.

Build commands:

- Install: `npm install` or `bun install`
- Build: `npm run build`
- Output: Nuxt/Nitro auto-detected by Vercel

## Contributing

- Use VS Code settings in [.vscode/settings.json](.vscode/settings.json); Prettier is enforced.
- Before committing:
  ```powershell
  npm run format
  ```
- Suggested flow:
  - Branch from `main`
  - Make focused changes
  - Add/update docs where relevant
  - Open a PR

## Useful Files

- App config: [nuxt.config.ts](nuxt.config.ts)
- Pages: [pages/](pages/)
- Components: [components/](components/)
- Layouts: [layouts/](layouts/)
- Styles: [assets/css/tailwind.css](assets/css/tailwind.css), [tailwind.config.js](tailwind.config.js)
- Server/API: [server/api/mc-status.get.ts](server/api/mc-status.get.ts)
- SEO plugin: [plugins/seo.ts](plugins/seo.ts)
- Public assets: [public/](public/)
- Vercel headers: [vercel.json](vercel.json)
- Formatting: [.prettierrc](.prettierrc)

---

<a href="https://portal.hypho.dev">Void Tales</a> © 2025 by <a href="https://creativecommons.org">Hyphonical, Inventory, ShinSnowly</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a><img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">
