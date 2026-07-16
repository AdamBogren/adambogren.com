import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://adambogren.com", changeFrequency: "monthly", priority: 1 }];
}
