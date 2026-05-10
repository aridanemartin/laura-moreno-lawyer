/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com",
  generateRobotsTxt: true,
  exclude: ["/aviso-legal", "/politica-privacidad", "/politica-cookies"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
