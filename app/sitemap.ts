import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.arrnaya.com/",
      lastModified: new Date("2025-05-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.arrnaya.com/blog",
      lastModified: new Date("2026-05-02"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.arrnaya.com/blog/zero-knowledge-proofs-financial-infrastructure",
      lastModified: new Date("2026-05-06"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.arrnaya.com/blog/cross-border-payments-blockchain",
      lastModified: new Date("2026-05-05"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.arrnaya.com/blog/crypto-debit-card-infrastructure",
      lastModified: new Date("2026-05-05"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.arrnaya.com/blog/institutional-custody-architecture",
      lastModified: new Date("2026-05-02"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.arrnaya.com/blog/ca-ai-roadmap",
      lastModified: new Date("2026-04-30"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.arrnaya.com/blog/cbdc-defi",
      lastModified: new Date("2025-10-09"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.arrnaya.com/blog/defi-banking-sea",
      lastModified: new Date("2025-05-01"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.arrnaya.com/blog/layer1-scaling",
      lastModified: new Date("2025-12-03"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.arrnaya.com/blog/rwa-tokenization",
      lastModified: new Date("2025-07-11"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.arrnaya.com/blog/stablecoin-architecture",
      lastModified: new Date("2025-06-04"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.arrnaya.com/blog/tokenomics-engineering",
      lastModified: new Date("2026-05-03"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
