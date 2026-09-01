import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog — Arrnaya | Ideas, Insights & Innovation",
  description:
    "In-depth articles on AI, Blockchain, DeFi, Payments, Leadership, and the future of finance. Practical insights for professionals across spheres.",
  keywords: [
    "Arrnaya Blog",
    "Blockchain Blog",
    "DeFi Insights",
    "AI Finance",
    "Web3 Articles",
    "Fintech Blog",
    "Tokenization",
    "Crypto Leadership",
  ],
  openGraph: {
    type: "website",
    title: "Blog — Arrnaya | Ideas, Insights & Innovation",
    description:
      "In-depth articles on AI, Blockchain, DeFi, Payments, Leadership, and the future of finance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Arrnaya | Ideas, Insights & Innovation",
    description:
      "In-depth articles on AI, Blockchain, DeFi, Payments, Leadership, and the future of finance.",
  },
  // JSON-LD rendered via component
};

const posts = [
  {
    slug: "fhe-blockchain-privacy-layer",
    title: "Fully Homomorphic Encryption: The Missing Privacy Layer for Blockchain",
    excerpt:
      "How FHE enables computation on encrypted data — and could unlock private healthcare, institutional finance, and compliant RWA tokenization. TFHE, CKKS, and BFV/BGV explained, plus how FHE compares to ZK proofs, MPC, and TEEs, and the real costs of building on it today.",
    category: "Cryptography & Privacy",
    date: "September 2026",
    readTime: "26 min read",
  },
  {
    slug: "erc-3643-trex-rwa-tokenization",
    title: "T-REX Reloaded: How ERC-3643 Is Rewiring Real-World Asset Tokenization",
    excerpt:
      "A practitioner's deep dive into ERC-3643's six-contract compliance architecture — ONCHAINID identity, modular compliance, agent governance, and the T-REX Ledger's multi-chain orchestration layer now powering Apex Group's $100B tokenization roadmap.",
    category: "RWA & Compliance",
    date: "August 2026",
    readTime: "27 min read",
  },
  {
    slug: "ai-agent-trust-stack-erc-standards",
    title: "The Trust Stack: How ERC-7662, ERC-7857, ERC-8126 & ERC-8196 Give Anonymous AI Agents On-Chain Credibility",
    excerpt:
      "A technical field guide to the emerging ERC standard stack for autonomous agents — encrypted agent IP under ERC-7662 and ERC-7857, multi-dimensional risk scoring under ERC-8126, and policy-bound execution under ERC-8196. How anonymous agents get verifiable credibility without a known identity.",
    category: "AI & Blockchain",
    date: "August 2026",
    readTime: "30 min read",
  },
  {
    slug: "elon-musk-money-wont-matter-2036",
    title: "Money Won't Matter by 2036: Dissecting Elon Musk's Post-Scarcity Thesis",
    excerpt:
      "A technical dissection of Elon Musk's July 2026 Economist interview — AI-driven deflation, universal high income, and the claim that money won't matter by 2036. Baumol effects, Engels' pause, distribution economics, and what actually stays scarce.",
    category: "AI & Economics",
    date: "August 2026",
    readTime: "26 min read",
  },
  {
    slug: "banking-5-0-ai-human-collaboration",
    title: "Banking 5.0: AI-Human Collaboration, Embedded Finance, and the Future of Financial Services",
    excerpt:
      "A practitioner's deep-dive into Banking 5.0 — how Industry 5.0, AI-human collaboration, embedded finance, and ecosystems are reshaping the business model of financial services. Built on the 4Ps and 10Ps framework.",
    category: "Future of Finance",
    date: "June 2026",
    readTime: "26 min read",
  },
  {
    slug: "ai-agents-the-learning-loop-moat",
    title: "The Learning Loop Moat: AI Agents in Finance and Treasury Management",
    excerpt:
      "Why frontier AI models are becoming interchangeable — and why the learning loop is the real competitive moat for financial firms. A practitioner's guide to AI agents in treasury, autonomous DeFi operations, institutional memory systems, and model-agnostic finance architecture.",
    category: "AI & Finance",
    date: "June 2026",
    readTime: "22 min read",
  },
  {
    slug: "ai-augmented-web3-infrastructure",
    title: "AI-Augmented Web3 Infrastructure: From Static Ledgers to Intelligent Economic Operating Systems",
    excerpt:
      "A practitioner's deep-dive into AI-blockchain convergence — covering decentralized inference, M2M architecture, smart contracts as policy layers, ZK-ML attestation, agentic dApps, and the design principles for building intelligent Web3 infrastructure in 2026.",
    category: "AI & Blockchain",
    date: "May 2026",
    readTime: "32 min read",
  },
  {
    slug: "zero-knowledge-proofs-financial-infrastructure",
    title: "Zero-Knowledge Proofs in Financial Infrastructure: ZK-KYC, ZK-AML & Privacy-Preserving Compliance",
    excerpt:
      "A practitioner's deep-dive into deploying zero-knowledge proofs in regulated financial systems — covering ZK-KYC architecture, ZK-AML circuit design, proof system selection (Groth16, PLONK, STARKs), Polygon ID integration, FATF Travel Rule compliance, and production deployment patterns.",
    category: "Cryptography & Compliance",
    date: "May 2026",
    readTime: "26 min read",
  },
  {
    slug: "cross-border-payments-blockchain",
    title: "Cross-Border Payments on Blockchain: Replacing Correspondent Banking",
    excerpt:
      "How stablecoin and blockchain rails are dismantling the correspondent banking stack — SWIFT limitations, on-chain settlement mechanics, Circle CCTP, FATF travel rule compliance, and live corridor analysis across ASEAN and global remittance routes.",
    category: "Payments",
    date: "May 2026",
    readTime: "18 min read",
  },
  {
    slug: "crypto-debit-card-infrastructure",
    title: "Crypto Debit Card Infrastructure: BIN Sponsorship, Card Networks & Programme Management",
    excerpt:
      "A practitioner's guide to building crypto-linked debit card infrastructure — BIN sponsorship mechanics, four-party network architecture, programme management, JIT funding flows, FX settlement, spending controls, and compliance engineering.",
    category: "Payments",
    date: "May 2026",
    readTime: "22 min read",
  },
  {
    slug: "tokenomics-engineering",
    title: "Tokenomics Engineering: Mechanism Design, Game Theory & Quantitative Sustainability",
    excerpt:
      "The quantitative models, protocol mechanics, and simulation frameworks behind tokens that survive — covering ve-tokenomics, emission curves, flywheels, reflexivity risk, and agent-based stress testing.",
    category: "Tokenomics",
    date: "May 2026",
    readTime: "28 min read",
  },
  {
    slug: "institutional-custody-architecture",
    title: "Designing Institutional-Grade Custody Architecture",
    excerpt:
      "A deep technical teardown of institutional digital asset custody: TSS vs multisig, MPC-CMP protocol design, HSM integration, key ceremony architecture, and disaster recovery frameworks.",
    category: "Custody",
    date: "May 2026",
    readTime: "25 min read",
  },
  {
    slug: "ca-ai-roadmap",
    title: "AI for the Modern CA — 30-Day Roadmap",
    excerpt:
      "A structured 30-day learning roadmap for practising Chartered Accountants in India — covering AI foundations, audit automation, tax technology, and advisory transformation.",
    category: "AI & Finance",
    date: "April 2026",
    readTime: "15 min read",
  },
  {
    slug: "layer1-scaling",
    title: "Layer-1 Scaling: Beyond TPS Metrics",
    excerpt:
      "Why throughput alone doesn't tell the full story — and what really matters when evaluating blockchain infrastructure.",
    category: "Blockchain",
    date: "Dec 2025",
    readTime: "20 min read",
  },
  {
    slug: "cbdc-defi",
    title: "CBDCs & DeFi: Convergence or Collision?",
    excerpt:
      "Central bank digital currencies and decentralized finance — exploring the intersection of state-backed and open financial systems.",
    category: "Regulatory",
    date: "Oct 2025",
    readTime: "18 min read",
  },
  {
    slug: "rwa-tokenization",
    title: "Real-World Asset Tokenization: A Practical Guide",
    excerpt:
      "From legal structures to smart contract implementation — how to tokenize real assets in a compliant manner.",
    category: "Tokenization",
    date: "July 2025",
    readTime: "18 min read",
  },
  {
    slug: "stablecoin-architecture",
    title: "Designing Compliant Stablecoin Architectures",
    excerpt:
      "Technical and regulatory considerations for building stablecoin systems that work within existing financial frameworks.",
    category: "Stablecoins",
    date: "June 2025",
    readTime: "16 min read",
  },
  {
    slug: "defi-banking-sea",
    title: "DeFi Banking in Southeast Asia",
    excerpt:
      "How decentralized finance is reshaping financial inclusion across emerging markets and what it means for the underbanked.",
    category: "DeFi",
    date: "May 2025",
    readTime: "14 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://www.arrnaya.com/" },
        { name: "Blog", url: "https://www.arrnaya.com/blog" },
      ])} />
      <Navbar />

      {/* Blog Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-[var(--bg)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--sage-glow)] via-transparent to-[var(--accent-glow)]" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 text-center">
          <div className="text-[11px] font-semibold tracking-[3px] uppercase text-[var(--accent)] mb-4">Blog</div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-[var(--text)] mb-6">
            Ideas, Insights & Innovation
          </h1>
          <p className="text-base text-[var(--text-muted)] max-w-[600px] mx-auto leading-relaxed">
            Exploring the power of AI and Blockchain to transform industries, businesses, and everyday life. Practical insights for professionals across spheres.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden hover:border-[var(--accent)] hover:-translate-y-1 transition-all no-underline"
            >
              {/* Card Header / Thumbnail Area */}
              <div className="h-48 bg-[var(--bg-alt)] flex items-center justify-center shrink-0">
                <div className="w-14 h-14 flex items-center justify-center bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl text-[var(--accent)] group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-[11px] font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full bg-[var(--accent-glow)] text-[var(--accent)]">
                    {post.category}
                  </span>
                  <span className="text-[11px] text-[var(--text-dim)]">{post.date}</span>
                </div>
                <h3 className="text-lg font-bold text-[var(--text)] mb-3 group-hover:text-[var(--accent)] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-[13px] text-[var(--text-dim)] leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-[var(--border)]">
                  <span className="text-[11px] text-[var(--text-dim)]">{post.readTime}</span>
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)]">
                    Read
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
