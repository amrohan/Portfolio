module.exports = {
  siteUrl: process.env.SITE_URL || "https://amrohan.xyz",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: ["/up", "posts"] },
      { userAgent: "*", allow: "/" },
    ],
    // additionalSitemaps: [`${siteUrl}/sitemap.xml`],
  },
  exclude: ["/up", "/components"],
};
