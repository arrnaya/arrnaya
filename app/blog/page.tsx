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
      <section
        className="relative pt-44 pb-32 overflow-hidden"
        style={{
          minHeight: "60vh",
          backgroundImage: "url('/arrnaya-emblem.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b]/85 via-[#0f0a1e]/80 to-[#030308]/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030308]/40 to-[#030308]" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 text-center">
          <div className="text-xs font-semibold tracking-[2px] uppercase text-[#8b5cf6] mb-4">Blog</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Ideas, Insights & Innovation
          </h1>
          <p className="text-base text-[#94a3b8] max-w-[600px] mx-auto leading-relaxed">
            Exploring the power of AI and Blockchain to transform industries, businesses, and everyday life. Practical insights for professionals across spheres.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-[1280px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-[#0a0a12] border border-[#1a1a2e] rounded-2xl overflow-hidden hover:border-[#252542] hover:-translate-y-1 transition-all no-underline"
            >
              {/* Card Header / Thumbnail Area */}
              <div className="h-48 bg-gradient-to-br from-[#1e1b4b] to-[#0f0a1e] flex items-center justify-center shrink-0">
                <div className="w-14 h-14 flex items-center justify-center bg-[rgba(124,58,237,0.15)] border border-[rgba(124,58,237,0.25)] rounded-2xl text-[#8b5cf6] group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-[11px] font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full bg-[rgba(124,58,237,0.1)] text-[#8b5cf6] border border-[rgba(124,58,237,0.2)]">
                    {post.category}
                  </span>
                  <span className="text-[11px] text-[#64748b]">{post.date}</span>
                </div>
                <h3 className="text-lg font-bold text-[#f8fafc] mb-3 group-hover:text-[#a855f7] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-[13px] text-[#64748b] leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#1a1a2e]">
                  <span className="text-[11px] text-[#64748b]">{post.readTime}</span>
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-[#8b5cf6]">
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
