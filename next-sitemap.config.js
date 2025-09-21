/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://shopbraze.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ["/server-sitemap.xml"],
  transform: async (config, url) => {
    return {
      loc: url,
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
