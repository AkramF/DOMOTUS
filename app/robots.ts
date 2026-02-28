import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/simulateur", "/api/", "/_next/", "/error", "/404"],
      },
    ],
    sitemap: "https://www.domotus.ma/sitemap.xml",
    host: "https://www.domotus.ma",
    crawlDelay: 0.5,
  };
}
