import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://arrnaya.github.io/arrnaya/",
      lastModified: new Date("2025-05-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://arrnaya.github.io/arrnaya/blog",
      lastModified: new Date("2025-05-01"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://arrnaya.github.io/arrnaya/blog/ca-ai-roadmap",
      lastModified: new Date("2026-04-30"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://arrnaya.github.io/arrnaya/blog/cbdc-defi",
      lastModified: new Date("2025-10-09"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://arrnaya.github.io/arrnaya/blog/defi-banking-sea",
      lastModified: new Date("2025-05-01"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://arrnaya.github.io/arrnaya/blog/layer1-scaling",
      lastModified: new Date("2025-12-03"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://arrnaya.github.io/arrnaya/blog/rwa-tokenization",
      lastModified: new Date("2025-07-11"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://arrnaya.github.io/arrnaya/blog/stablecoin-architecture",
      lastModified: new Date("2025-06-04"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
