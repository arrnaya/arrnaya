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
      lastModified: new Date("2026-08-17"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.arrnaya.com/blog/erc-3643-trex-rwa-tokenization",
      lastModified: new Date("2026-08-17"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.arrnaya.com/blog/ai-agent-trust-stack-erc-standards",
      lastModified: new Date("2026-08-17"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.arrnaya.com/blog/elon-musk-money-wont-matter-2036",
      lastModified: new Date("2026-08-05"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.arrnaya.com/blog/banking-5-0-ai-human-collaboration",
      lastModified: new Date("2026-06-29"),
      changeFrequency: "yearly",
      priority: 0.8,
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
    {
      url: "https://www.arrnaya.com/blog/ai-agents-the-learning-loop-moat",
      lastModified: new Date("2026-06-16"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://www.arrnaya.com/blog/ai-augmented-web3-infrastructure",
      lastModified: new Date("2026-05-27"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
