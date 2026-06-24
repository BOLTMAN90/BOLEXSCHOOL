import type { MetadataRoute } from "next";
import { ROUTES } from "@/lib/constants";

const pages = Object.values(ROUTES);

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({
    url: `https://bolexman.edu${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
