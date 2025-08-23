export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    const route = useRoute()
    const cfg = useRuntimeConfig().public

    const toAbs = (p?: string) =>
      p && (p.startsWith('http://') || p.startsWith('https://'))
        ? p
        : new URL(p || '/', cfg.siteUrl).toString()

    const canonical = new URL(route.fullPath || route.path, cfg.siteUrl).toString()

    useHead({
      link: [{ rel: 'canonical', href: canonical }]
    })

    useSeoMeta({
      title: cfg.siteName,
      description: cfg.siteDescription,
      ogType: 'website',
      ogSiteName: cfg.siteName,
      ogTitle: cfg.siteName,
      ogDescription: cfg.siteDescription,
      ogUrl: canonical,
      ogImage: toAbs(cfg.ogImage),
      twitterCard: (['summary', 'summary_large_image', 'app', 'player'].includes(cfg.twitterCard) ? cfg.twitterCard : 'summary') as 'summary' | 'summary_large_image' | 'app' | 'player',
      twitterSite: cfg.twitterSite,
      twitterTitle: cfg.siteName,
      twitterDescription: cfg.siteDescription,
      twitterImage: toAbs(cfg.twitterImage),
      themeColor: cfg.themeColor
    })
  })
})