import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://asanka.one";
  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/mentoring", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/tools", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
    { url: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/terms-of-use", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/security-compliance", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${base}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
