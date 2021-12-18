const siteUrl = "https://rohan.ml";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: ["/up", "posts"] },
      { userAgent: "*", allow: "/" },
    ],
    // additionalSitemaps: [`${siteUrl}/sitemap.xml`],
  },
  exclude: ["/up"],
};
