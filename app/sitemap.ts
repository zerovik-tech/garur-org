import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: "https://garur.org",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://garur.org/gallery",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
