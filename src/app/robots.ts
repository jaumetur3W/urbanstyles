import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/checkout/exit", "/api/*"],
    },
    sitemap: "https://urbanstyles.es/sitemap.xml",
  };
}

