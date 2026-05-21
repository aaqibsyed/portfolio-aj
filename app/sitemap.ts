import type { MetadataRoute } from "next";

const baseUrl = "https://aaqib.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/now", "/resume", "/architecture"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7
  }));
}
