import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";
import { blogPostingSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Cross-Border Payments on Blockchain: Replacing Correspondent Banking | Arrnaya",
  description:
    "A deep technical analysis of how blockchain and stablecoin rails are displacing correspondent banking for cross-border payments — covering SWIFT limitations, on-chain settlement mechanics, liquidity provisioning, regulatory compliance, and real-world deployment patterns for payment firms.",
  keywords: [
    "cross-border payments blockchain",
    "correspondent banking replacement",
    "stablecoin remittances",
    "SWIFT alternative blockchain",
    "on-chain settlement",
    "payment rails DeFi",
    "blockchain payments Southeast Asia",
    "USDC cross-border",
    "Circle CCTP",
    "cross-chain liquidity",
    "blockchain treasury management",
    "payment compliance crypto",
    "FX on-chain",
    "tokenized payments",
    "real-time gross settlement blockchain",
  ],
  openGraph: {
    title: "Cross-Border Payments on Blockchain: Replacing Correspondent Banking",
    description:
      "How stablecoin and blockchain rails are dismantling the correspondent banking stack — mechanics, liquidity design, compliance integration, and deployment patterns.",
    url: "https://www.arrnaya.com/blog/cross-border-payments-blockchain",
    siteName: "Arrnaya",
    type: "article",
    publishedTime: "2026-05-05T08:00:00+08:00",
    authors: ["Arrnaya"],
    images: [
      {
        url: "https://www.arrnaya.com/og-cross-border-payments.png",
        width: 1200,
        height: 630,
        alt: "Cross-Border Payments on Blockchain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cross-Border Payments on Blockchain: Replacing Correspondent Banking",
    description:
      "SWIFT moves $5T/day through a 50-year-old messaging layer. Blockchain payment rails settle in seconds at a fraction of the cost. Here's the engineering.",
    images: ["https://www.arrnaya.com/og-cross-border-payments.png"],
  },
  alternates: {
    canonical: "https://www.arrnaya.com/blog/cross-border-payments-blockchain",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.arrnaya.com/blog/cross-border-payments-blockchain#article",
      headline: "Cross-Border Payments on Blockchain: Replacing Correspondent Banking",
      description:
        "A deep technical analysis of how blockchain and stablecoin rails are displacing correspondent banking for cross-border payments.",
      datePublished: "2026-05-05T08:00:00+08:00",
      dateModified: "2026-05-05T08:00:00+08:00",
      author: {
        "@type": "Person",
        name: "Arrnaya",
        url: "https://www.arrnaya.com",
      },
      publisher: {
        "@type": "Organization",
        name: "Arrnaya",
        url: "https://www.arrnaya.com",
      },
      url: "https://www.arrnaya.com/blog/cross-border-payments-blockchain",
      keywords:
        "cross-border payments, blockchain, stablecoin, correspondent banking, SWIFT, DeFi payments",
      articleSection: "Payments & Financial Infrastructure",
      wordCount: 3200,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why is correspondent banking slow and expensive?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Correspondent banking relies on a chain of bilateral nostro/vostro accounts. Each hop introduces settlement lag (1–5 days), FX conversion fees, and messaging costs via SWIFT MT messages. A payment from Malaysia to Brazil may traverse 4–6 intermediary banks.",
          },
        },
        {
          "@type": "Question",
          name: "How do stablecoins replace correspondent banking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Stablecoins act as a universal settlement medium. The sender converts local currency to USDC/USDT, transmits on-chain to the recipient's address in seconds, and the recipient converts back to local currency. Two FX conversions replace a 4-hop correspondent chain.",
          },
        },
        {
          "@type": "Question",
          name: "What is Circle's Cross-Chain Transfer Protocol (CCTP)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CCTP is Circle's native burn-and-mint protocol for USDC. It burns USDC on the source chain, issues an attestation via Circle's attestation service, and mints canonical USDC on the destination chain. This eliminates bridge lock-up risk and maintains canonical supply integrity.",
          },
        },
        {
          "@type": "Question",
          name: "What regulatory frameworks apply to blockchain payment operators?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Operators must comply with local MSB/PSP licensing (BNM in Malaysia, MAS in Singapore), FATF Travel Rule for transfers >$1,000, VASP registration in relevant jurisdictions, and AML/KYC screening at on/off-ramp touchpoints.",
          },
        },
        {
          "@type": "Question",
          name: "What is nostro liquidity pre-funding and can blockchain eliminate it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nostro pre-funding is capital banks park in foreign accounts to guarantee same-day settlement. It ties up ~$27T globally (McKinsey estimate). Blockchain rails with atomic settlement eliminate the need for pre-funding by making settlement instant and final.",
          },
        },
        {
          "@type": "Question",
          name: "Which corridors are most viable for blockchain payment rails today?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "High-remittance corridors with accessible on/off-ramps: US–Philippines, US–Mexico, Singapore–India, UAE–South Asia, and intra-ASEAN corridors. These have established stablecoin liquidity and licensed exchange partners at both ends.",
          },
        },
        {
          "@type": "Question",
          name: "How does FX risk work on stablecoin payment rails?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The sender converts MYR→USDC (spot FX exposure at on-ramp), the on-chain leg is FX-neutral, and the recipient converts USDC→PHP (spot FX exposure at off-ramp). Total FX exposure window is minutes vs days in correspondent banking, dramatically reducing risk.",
          },
        },
        {
          "@type": "Question",
          name: "Can blockchain payment rails handle high transaction volumes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Solana processes 65,000 TPS with ~400ms finality. TRON handles ~2,000 TPS. Layer-2 rollups (Arbitrum, Base) extend Ethereum to 4,000+ TPS. These are sufficient for most payment volumes — Visa averages ~1,700 TPS globally.",
          },
        },
      ],
    },
  ],
};

const tocItems = [
  { id: "problem", label: "The Correspondent Banking Problem" },
  { id: "mechanics", label: "Blockchain Payment Mechanics" },
  { id: "stablecoin-rails", label: "Stablecoin Rails: Architecture" },
  { id: "cctp", label: "Cross-Chain Transfer Protocols" },
  { id: "liquidity", label: "Liquidity Provisioning Design" },
  { id: "compliance", label: "Regulatory & Compliance Stack" },
  { id: "corridors", label: "Live Corridor Analysis" },
  { id: "failure-modes", label: "Failure Modes & Risk Vectors" },
  { id: "deployment", label: "Deployment Architecture" },
  { id: "faq", label: "FAQ" },
];

export default function CrossBorderPaymentsPage() {
  return (
    <>
      <JsonLd data={blogPostingSchema({
        headline: "Cross-Border Payments on Blockchain: Replacing Correspondent Banking",
        description: "A deep technical analysis of how blockchain and stablecoin rails are displacing correspondent banking for cross-border payments — covering SWIFT limitations, on-chain settlement mechanics, liquidity provisioning, regulatory compliance, and real-world deployment patterns.",
        slug: "cross-border-payments-blockchain",
        datePublished: "2026-05-05T08:00:00+08:00",
        keywords: ["cross-border payments blockchain", "correspondent banking replacement", "stablecoin remittances", "SWIFT alternative", "on-chain settlement", "Circle CCTP", "FATF travel rule", "payment rails DeFi"],
      })} />
      <JsonLd data={faqSchema} />

      <Navbar />
      <main className="min-h-screen bg-[#030308] text-[#f8fafc]">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#0f0524] pt-24 pb-20">
          {/* Radial blur orbs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-[120px]" />
            <div className="absolute bottom-[-5%] right-[10%] w-[400px] h-[400px] rounded-full bg-blue-600/15 blur-[100px]" />
            <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-[80px]" />
          </div>
          {/* Sparkle overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                radial-gradient(circle at 10% 20%, rgba(168,85,247,0.15) 0%, transparent 50%),
                radial-gradient(circle at 90% 80%, rgba(59,130,246,0.1) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(139,92,246,0.05) 0%, transparent 70%)
              `,
            }}
          />

          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#a855f7]/30 bg-[#a855f7]/10 px-4 py-1.5">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#a855f7]">
                Payments & Financial Infrastructure
              </span>
            </div>
            <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-[#f8fafc]">
              Cross-Border Payments on Blockchain:<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
                Replacing Correspondent Banking
              </span>
            </h1>
            <p className="mt-6 text-lg text-[#94a3b8] max-w-2xl mx-auto leading-relaxed">
              SWIFT moves $5T/day through a messaging layer built in 1973. Blockchain rails settle
              the same value in seconds at basis-point cost. Here's the full engineering breakdown.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-[#64748b] font-mono">
              <span>May 5, 2026</span>
              <span>·</span>
              <span>~18 min read</span>
              <span>·</span>
              <span>Arrnaya</span>
            </div>
          </div>
        </section>

        {/* ── Body ─────────────────────────────────────────────── */}
        <div className="mx-auto max-w-4xl px-6 py-16 space-y-20">

          {/* Table of Contents */}
          <nav className="rounded-2xl border border-[#1a1a2e] bg-[#0a0a12] p-6">
            <p className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">Table of Contents</p>
            <ol className="space-y-2">
              {tocItems.map((item, i) => (
                <li key={item.id} className="flex items-start gap-3">
                  <span className="text-[#a855f7] font-mono text-xs mt-0.5 w-5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <a href={`#${item.id}`} className="text-[#94a3b8] hover:text-[#a855f7] text-sm transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Section 1: The Problem */}
          <section id="problem">
            <p className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-2">Section 01</p>
            <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-6">The Correspondent Banking Problem</h2>

            <p className="text-[#94a3b8] leading-relaxed mb-6">
              The correspondent banking network is a 1973 vintage system operating at 2026 transaction volumes. SWIFT processes approximately 45 million messages per day, but message delivery does not equal settlement. The actual movement of value occurs through a chain of bilateral nostro/vostro accounts — a structure that introduces three compounding inefficiencies: settlement latency (T+1 to T+5), capital pre-funding drag, and per-hop fee extraction.
            </p>

            {/* Pull Quote */}
            <blockquote className="my-8 pl-6 border-l-4 border-[#a855f7]">
              <p className="text-lg italic text-[#f8fafc] leading-relaxed">
                "McKinsey estimates that $27 trillion in liquidity is trapped in nostro accounts globally — capital earning zero return to guarantee settlement that blockchain achieves in milliseconds natively."
              </p>
            </blockquote>

            <p className="text-[#94a3b8] leading-relaxed mb-6">
              Consider a payment from Kuala Lumpur to São Paulo. The transaction path: BNM-licensed remittance firm → Malaysian correspondent bank → US correspondent bank → Brazilian correspondent bank → recipient's local bank. Each hop performs AML screening, FX conversion (sometimes implicit), and adds a correspondent fee ranging from $15–$70 per transaction. Total latency: 2–4 business days. Total cost: 4–8% of transaction value for retail corridors.
            </p>

            {/* Correspondent Chain Table */}
            <div className="rounded-xl border border-[#1a1a2e] overflow-hidden my-8">
              <div className="bg-[#0a0a12] border-b border-[#1a1a2e] px-4 py-2">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748b]">Correspondent Chain: KL → São Paulo</span>
              </div>
              <table className="w-full text-[13px] border-collapse">
                <thead>
                  <tr className="border-b border-[#1a1a2e]">
                    <th className="text-left px-4 py-3 text-[#64748b] font-mono text-xs uppercase">Hop</th>
                    <th className="text-left px-4 py-3 text-[#64748b] font-mono text-xs uppercase">Institution</th>
                    <th className="text-left px-4 py-3 text-[#64748b] font-mono text-xs uppercase">Action</th>
                    <th className="text-left px-4 py-3 text-[#64748b] font-mono text-xs uppercase">Fee</th>
                    <th className="text-left px-4 py-3 text-[#64748b] font-mono text-xs uppercase">Latency</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1", "Sender's bank (MY)", "MT103 message, debit sender", "$15–25", "Instant"],
                    ["2", "MY Correspondent", "Debit nostro, send SWIFT", "$10–20", "Same day"],
                    ["3", "US Correspondent", "Route via FED/CHIPS", "$15–30", "1 day"],
                    ["4", "BR Correspondent", "Convert USD→BRL", "$20–40", "1–2 days"],
                    ["5", "Recipient's bank (BR)", "Credit account", "$5–10", "1 day"],
                  ].map(([hop, inst, action, fee, lat]) => (
                    <tr key={hop} className="border-b border-[#1a1a2e] hover:bg-[rgba(124,58,237,0.03)] transition-colors">
                      <td className="px-4 py-3 text-[#a855f7] font-mono">{hop}</td>
                      <td className="px-4 py-3 text-[#f8fafc]">{inst}</td>
                      <td className="px-4 py-3 text-[#94a3b8]">{action}</td>
                      <td className="px-4 py-3 text-[#f59e0b] font-mono">{fee}</td>
                      <td className="px-4 py-3 text-[#94a3b8]">{lat}</td>
                    </tr>
                  ))}
                  <tr className="bg-[rgba(124,58,237,0.05)]">
                    <td className="px-4 py-3 text-[#64748b] font-mono">—</td>
                    <td className="px-4 py-3 text-[#f8fafc] font-semibold">Total</td>
                    <td className="px-4 py-3 text-[#94a3b8]">5 hops, 3 currency conversions</td>
                    <td className="px-4 py-3 text-[#ef4444] font-mono font-bold">$65–125</td>
                    <td className="px-4 py-3 text-[#ef4444] font-mono font-bold">2–4 days</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[#94a3b8] leading-relaxed">
              The structural problem is not SWIFT itself — SWIFT is merely a messaging standard. The problem is the underlying account-based settlement architecture that requires each bank to hold pre-funded liquidity at its counterparts. This is the capital inefficiency blockchain rails eliminate by design.
            </p>
          </section>

          {/* Section 2: Blockchain Mechanics */}
          <section id="mechanics">
            <p className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-2">Section 02</p>
            <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-6">Blockchain Payment Mechanics</h2>

            <p className="text-[#94a3b8] leading-relaxed mb-6">
              A blockchain payment rail reduces the correspondent chain to two legs: an on-ramp conversion (local currency → stablecoin) and an off-ramp conversion (stablecoin → local currency). The on-chain leg is a direct token transfer — no intermediary, no nostro account, no bilateral credit line required.
            </p>

            {/* Flow diagram as code block */}
            <div className="rounded-xl border border-[#1a1a2e] overflow-hidden my-8">
              <div className="bg-[#0a0a12] border-b border-[#1a1a2e] px-4 py-2 flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748b]">Payment Flow: Blockchain Rail</span>
                <span className="text-[10px] font-mono text-[#a855f7]">KL → São Paulo</span>
              </div>
              <pre className="bg-[#030308] text-[#94a3b8] text-[12px] p-5 overflow-x-auto leading-relaxed font-mono">
{`[SENDER: KL]                    [ON-CHAIN]                 [RECIPIENT: SP]

MYR 500                         USDC 112.50                PHP/BRL equiv.
  │                                 │                            │
  ▼                                 ▼                            ▼
On-ramp partner      ──────►  EVM/Solana transfer   ──────►  Off-ramp partner
(licensed MY PSP)              ~400ms–15s                  (licensed BR PSP)
MYR→USDC @ spot                 $0.001 gas                 USDC→BRL @ spot

Total FX exposure window: minutes (vs 4 days in correspondent banking)
Total cost: $0.50–2.00 (vs $65–125)
Settlement finality: cryptographic (vs probabilistic reconciliation)`}
              </pre>
            </div>

            <p className="text-[#94a3b8] leading-relaxed mb-6">
              The settlement finality model is fundamentally different. In correspondent banking, settlement is probabilistic — a completed SWIFT message doesn't mean funds have moved; it means instructions have been sent. Actual value transfer occurs via end-of-day net settlement through central bank RTGS systems. Disputes can unwind settlements days later. On-chain settlement with sufficient confirmations is cryptographically final — no counterparty can reverse a confirmed transaction.
            </p>

            {/* Settlement Comparison Table */}
            <div className="rounded-xl border border-[#1a1a2e] overflow-hidden my-8">
              <div className="bg-[#0a0a12] border-b border-[#1a1a2e] px-4 py-2">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748b]">Settlement Model Comparison</span>
              </div>
              <table className="w-full text-[13px] border-collapse">
                <thead>
                  <tr className="border-b border-[#1a1a2e]">
                    <th className="text-left px-4 py-3 text-[#64748b] font-mono text-xs uppercase">Property</th>
                    <th className="text-left px-4 py-3 text-[#64748b] font-mono text-xs uppercase">Correspondent Banking</th>
                    <th className="text-left px-4 py-3 text-[#64748b] font-mono text-xs uppercase">Blockchain Rail</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Settlement time", "T+1 to T+5", "400ms – 15s"],
                    ["Settlement finality", "Probabilistic (reconciliation)", "Cryptographic (irreversible)"],
                    ["Pre-funding required", "Yes (~$27T locked globally)", "No (atomic settlement)"],
                    ["Operating hours", "Business days only", "24/7/365"],
                    ["Minimum viable amount", "$200+ (economic)", "$0.01"],
                    ["FX exposure window", "2–4 days", "Minutes"],
                    ["Transparency", "Opaque (bilateral)", "Public ledger"],
                    ["Cost per transaction", "$15–125", "$0.10–2.00"],
                  ].map(([prop, trad, chain]) => (
                    <tr key={prop} className="border-b border-[#1a1a2e] hover:bg-[rgba(124,58,237,0.03)] transition-colors">
                      <td className="px-4 py-3 text-[#f8fafc] font-medium">{prop}</td>
                      <td className="px-4 py-3 text-[#ef4444]/80">{trad}</td>
                      <td className="px-4 py-3 text-[#10b981]">{chain}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Stablecoin Rails */}
          <section id="stablecoin-rails">
            <p className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-2">Section 03</p>
            <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-6">Stablecoin Rails: Architecture Choices</h2>

            <p className="text-[#94a3b8] leading-relaxed mb-6">
              Not all stablecoins are equivalent payment rails. The choice of stablecoin and chain defines throughput, finality time, liquidity depth, and regulatory risk surface. For institutional payment rails, the selection matrix covers five vectors: peg mechanism, redemption guarantees, on-chain liquidity, chain throughput, and regulatory status.
            </p>

            {/* Callout: USDC vs USDT */}
            <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5 my-8">
              <p className="text-[10px] font-mono tracking-widest uppercase text-blue-400 mb-2">Architecture Note</p>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                <strong className="text-[#f8fafc]">USDC vs USDT for payment rails:</strong> USDC is the preferred institutional rail. Circle publishes monthly attestation reports, maintains 1:1 USD reserve in segregated accounts (T-bills + cash), and has complied with NYDFS and MiCA requirements. USDT has $70B+ liquidity but opaque reserves and no equivalent regulatory standing. For licensed PSPs operating under AML/KYC regimes, USDC is the operationally safer choice despite lower on-chain liquidity on some chains.
              </p>
            </div>

            {/* Chain Selection Table */}
            <div className="rounded-xl border border-[#1a1a2e] overflow-hidden my-8">
              <div className="bg-[#0a0a12] border-b border-[#1a1a2e] px-4 py-2">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748b]">Chain Selection Matrix for Payment Rails</span>
              </div>
              <table className="w-full text-[13px] border-collapse">
                <thead>
                  <tr className="border-b border-[#1a1a2e]">
                    <th className="text-left px-4 py-3 text-[#64748b] font-mono text-xs uppercase">Chain</th>
                    <th className="text-left px-4 py-3 text-[#64748b] font-mono text-xs uppercase">TPS</th>
                    <th className="text-left px-4 py-3 text-[#64748b] font-mono text-xs uppercase">Finality</th>
                    <th className="text-left px-4 py-3 text-[#64748b] font-mono text-xs uppercase">Gas Cost</th>
                    <th className="text-left px-4 py-3 text-[#64748b] font-mono text-xs uppercase">USDC Support</th>
                    <th className="text-left px-4 py-3 text-[#64748b] font-mono text-xs uppercase">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Solana", "65,000", "~400ms", "$0.00025", "Native (Circle)", "High-volume retail corridors"],
                    ["TRON", "2,000", "~3s", "$0.001", "USDT dominant", "Emerging market remittances"],
                    ["Ethereum", "15–30", "~12s", "$0.50–5.00", "Native (Circle)", "High-value B2B settlements"],
                    ["Arbitrum", "4,000+", "~250ms", "$0.01–0.05", "Bridged/Native", "Mid-market enterprise"],
                    ["Base", "4,000+", "~2s", "$0.01–0.05", "Native (Coinbase)", "Consumer fintech apps"],
                    ["Stellar", "1,000", "~5s", "~$0.00001", "USDC (Circle)", "Aid/NGO corridors"],
                  ].map(([chain, tps, fin, gas, usdc, best]) => (
                    <tr key={chain} className="border-b border-[#1a1a2e] hover:bg-[rgba(124,58,237,0.03)] transition-colors">
                      <td className="px-4 py-3 text-[#a855f7] font-mono font-medium">{chain}</td>
                      <td className="px-4 py-3 text-[#f8fafc] font-mono">{tps}</td>
                      <td className="px-4 py-3 text-[#10b981] font-mono">{fin}</td>
                      <td className="px-4 py-3 text-[#f59e0b] font-mono">{gas}</td>
                      <td className="px-4 py-3 text-[#94a3b8]">{usdc}</td>
                      <td className="px-4 py-3 text-[#94a3b8] text-xs">{best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[#94a3b8] leading-relaxed">
              TRON dominates remittance volume in Southeast Asia and Africa not because of technical superiority but because of deep USDT liquidity at local exchange partners and sub-cent gas costs. This is a reminder that payment infrastructure adoption is driven by liquidity network effects, not raw throughput metrics.
            </p>
          </section>

          {/* Section 4: CCTP */}
          <section id="cctp">
            <p className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-2">Section 04</p>
            <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-6">Cross-Chain Transfer Protocols</h2>

            <p className="text-[#94a3b8] leading-relaxed mb-6">
              Multi-chain payment infrastructure requires moving stablecoins across chains without introducing bridge risk. The bridge hacks of 2021–2023 (Ronin $625M, Wormhole $320M, Nomad $190M) eliminated naive lock-and-mint bridges from institutional payment stacks. The modern solution is native burn-and-mint protocols.
            </p>

            {/* CCTP Technical Flow */}
            <div className="rounded-xl border border-[#1a1a2e] overflow-hidden my-8">
              <div className="bg-[#0a0a12] border-b border-[#1a1a2e] px-4 py-2 flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748b]">Circle CCTP: Burn-and-Mint Protocol</span>
                <span className="text-[10px] font-mono text-[#10b981]">v2 · 2024</span>
              </div>
              <pre className="bg-[#030308] text-[#94a3b8] text-[12px] p-5 overflow-x-auto leading-relaxed font-mono">
{`Step 1: Burn on Source Chain
  User calls depositForBurn(amount, destinationDomain, mintRecipient)
  on TokenMessenger contract (Ethereum/Solana/Arbitrum/Base)
  → USDC is permanently destroyed on source chain
  → BurnMessage emitted with nonce, amount, recipient

Step 2: Attestation
  Circle's Attestation Service observes the burn event
  Signs an attestation: keccak256(burnMessage) → ECDSA signature
  Typically available in 10–20 seconds

Step 3: Mint on Destination Chain
  User (or relayer) submits:
    receiveMessage(message, attestation)
  on MessageTransmitter contract on destination chain
  → Contract verifies Circle's signature
  → Mints canonical USDC to mintRecipient address

Key property: No bridge liquidity pool. No wrapped tokens.
             Canonical USDC supply integrity maintained.
             Smart contract risk surface = Circle's contracts only.`}
              </pre>
            </div>

            <p className="text-[#94a3b8] leading-relaxed mb-6">
              The attestation centralization risk is real: CCTP depends on Circle's attestation service being online and honest. Circle mitigates this with threshold signature schemes among multiple signers, but it remains a trusted party assumption. For a full trust-minimized cross-chain transfer, ZK proof-based bridges (e.g., zkBridge) eliminate this assumption at the cost of proof generation latency.
            </p>

            <p className="text-[#94a3b8] leading-relaxed">
              For payment corridors where speed matters more than trust minimization — which is most retail remittances — CCTP's 20–30 second end-to-end time is operationally acceptable. The canonical USDC guarantee eliminates the liquidity fragmentation problem that plagued wrapped-token bridges.
            </p>
          </section>

          {/* Section 5: Liquidity */}
          <section id="liquidity">
            <p className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-2">Section 05</p>
            <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-6">Liquidity Provisioning Design</h2>

            <p className="text-[#94a3b8] leading-relaxed mb-6">
              On-chain payment rails eliminate nostro pre-funding but introduce a different liquidity problem: on/off-ramp inventory management. A licensed PSP operating a Malaysia→Philippines corridor must hold MYR float for on-ramp purchasing and PHP float for off-ramp disbursements. The on-chain leg is instant — but the fiat legs still require inventory capital.
            </p>

            {/* Liquidity model formula */}
            <div className="rounded-xl border border-[#1a1a2e] overflow-hidden my-8">
              <div className="bg-[#0a0a12] border-b border-[#1a1a2e] px-4 py-2">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748b]">Liquidity Inventory Model</span>
              </div>
              <pre className="bg-[#030308] text-[#94a3b8] text-[12px] p-5 overflow-x-auto leading-relaxed font-mono">
{`Required Inventory = Peak_Daily_Volume × Settlement_Lag_Days × Safety_Buffer

Example:
  MYR corridor daily volume:     MYR 5,000,000/day
  Settlement lag (bank → PSP):   1 day
  Safety buffer:                 1.5×
  
  MYR inventory needed:          MYR 7,500,000

Compare to nostro pre-funding:
  Correspondent bank holds this capital idle for years
  PSP recycles this capital daily → effective capital cost ≈ 8–12× lower

Optimization: Pool inventory across corridors
  If MYR inflows ≈ PHP outflows in aggregate,
  inventory can be netted — reducing total float requirement
  by 40–70% depending on corridor correlation.`}
              </pre>
            </div>

            <p className="text-[#94a3b8] leading-relaxed mb-6">
              Advanced PSPs use AMM-based FX conversion directly on-chain to reduce inventory requirements. Protocols like Uniswap v3 and Curve's specialized stablecoin pools allow PSPs to convert between stablecoins (USDC→EURC, USDC→BRL stablecoin) atomically without holding inventory in destination-currency fiat. This is the architecture pattern emerging for next-generation payment corridors — see <a href="https://www.arrnaya.com/blog/stablecoin-architecture" className="text-[#a855f7] hover:underline">Designing Compliant Stablecoin Architectures</a> for reserve design context.
            </p>

            {/* Callout: DeFi liquidity risk */}
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5 my-8">
              <p className="text-[10px] font-mono tracking-widest uppercase text-amber-400 mb-2">Risk Note</p>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                <strong className="text-[#f8fafc]">DeFi liquidity as payment infrastructure is not production-grade yet.</strong> Curve pools have been exploited ($70M, 2023). AMM slippage on large transactions can exceed FX spreads at correspondent banks. Payment firms should use DeFi liquidity for FX discovery and small transactions only — maintain fiat inventory buffers for operational volumes above $100K/day per corridor.
              </p>
            </div>
          </section>

          {/* Section 6: Compliance */}
          <section id="compliance">
            <p className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-2">Section 06</p>
            <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-6">Regulatory & Compliance Stack</h2>

            <p className="text-[#94a3b8] leading-relaxed mb-6">
              The regulatory surface for blockchain payment operators spans licensing, travel rule compliance, AML/KYC screening, and sanctions filtering. The compliance architecture must integrate at the on-ramp and off-ramp touchpoints — the on-chain leg itself is permissionless and cannot carry compliance metadata natively (without solutions like ERC-3643 for permissioned tokens).
            </p>

            {/* Compliance stack */}
            <div className="space-y-4 my-8">
              {[
                {
                  num: "01",
                  title: "Licensing Layer",
                  desc: "Money Service Business (MSB) license in source jurisdiction. Malaysia: BNM payment institution licence. Singapore: MAS Major Payment Institution licence. Each corridor requires bilateral licensing — a MY→PH operator needs licences in both jurisdictions or partnerships with licensed entities.",
                },
                {
                  num: "02",
                  title: "FATF Travel Rule",
                  desc: "For transfers >$1,000 (or local threshold equivalent), VASPs must share originator and beneficiary information: name, account, national ID, physical address. Standards: IVMS 101 message format. Solutions: Notabene, Veriscope, TRP Network. Non-compliance blocks correspondent bank partnerships.",
                },
                {
                  num: "03",
                  title: "AML/KYC at On/Off-Ramps",
                  desc: "All fiat conversion touchpoints are regulated. On-ramp: sender identity verification (Tier 1: $200/day, Tier 2: $5,000/day, Tier 3: unlimited with enhanced due diligence). Off-ramp: beneficiary screening against OFAC SDN list, EU consolidated sanctions, UN Security Council list.",
                },
                {
                  num: "04",
                  title: "On-Chain Transaction Monitoring",
                  desc: "Chainalysis Reactor, Elliptic, or TRM Labs for source-of-funds analysis on incoming USDC. Flag addresses associated with darknet markets, sanctioned exchanges, or mixer usage. Integrate with compliance workflow before off-ramp conversion.",
                },
                {
                  num: "05",
                  title: "Reporting & Record-Keeping",
                  desc: "Blockchain's immutable ledger simplifies audit trails — every transaction has a cryptographic timestamp and is permanently verifiable. But on-chain data must be mapped to off-chain identity records. Maintain off-chain KYC records for 5–7 years per local regulations.",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-4 p-5 rounded-xl border border-[#1a1a2e] bg-[#0a0a12]">
                  <div className="shrink-0 w-10 h-10 rounded-full border border-[#a855f7]/50 flex items-center justify-center">
                    <span className="text-[11px] font-mono text-[#a855f7]">{item.num}</span>
                  </div>
                  <div>
                    <h3 className="text-[#f8fafc] font-semibold mb-1">{item.title}</h3>
                    <p className="text-[#94a3b8] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: Corridor Analysis */}
          <section id="corridors">
            <p className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-2">Section 07</p>
            <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-6">Live Corridor Analysis</h2>

            <p className="text-[#94a3b8] leading-relaxed mb-6">
              Blockchain payment rails have achieved meaningful adoption in corridors where: (a) traditional banking costs are highest, (b) licensed on/off-ramp partners exist at both ends, and (c) recipient demographics have mobile wallet access. The ASEAN + South Asia region leads globally on all three vectors.
            </p>

            <div className="rounded-xl border border-[#1a1a2e] overflow-hidden my-8">
              <div className="bg-[#0a0a12] border-b border-[#1a1a2e] px-4 py-2">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748b]">High-Viability Corridors for Blockchain Rails (2026)</span>
              </div>
              <table className="w-full text-[13px] border-collapse">
                <thead>
                  <tr className="border-b border-[#1a1a2e]">
                    <th className="text-left px-4 py-3 text-[#64748b] font-mono text-xs uppercase">Corridor</th>
                    <th className="text-left px-4 py-3 text-[#64748b] font-mono text-xs uppercase">Annual Volume</th>
                    <th className="text-left px-4 py-3 text-[#64748b] font-mono text-xs uppercase">Trad. Cost</th>
                    <th className="text-left px-4 py-3 text-[#64748b] font-mono text-xs uppercase">Chain Cost</th>
                    <th className="text-left px-4 py-3 text-[#64748b] font-mono text-xs uppercase">Active Players</th>
                    <th className="text-left px-4 py-3 text-[#64748b] font-mono text-xs uppercase">Readiness</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["US → Philippines", "$12.1B", "6–8%", "0.5–1%", "Coins.ph, Bitoy", "🟢 Live"],
                    ["US → Mexico", "$63B", "4–6%", "0.3–0.8%", "Bitso, Félix", "🟢 Live"],
                    ["SG → India", "$4.2B", "3–5%", "0.4–1%", "Transak, Wazirx", "🟢 Live"],
                    ["MY → Indonesia", "$1.8B", "4–7%", "0.5–1.2%", "TokoCrypto, Pintu", "🟡 Scaling"],
                    ["UAE → Pakistan", "$8.9B", "5–8%", "0.4–1%", "BitOasis, Paxful", "🟡 Scaling"],
                    ["SG → SEA (Intra)", "$3.5B", "2–4%", "0.2–0.6%", "Triple-A, Alchemy Pay", "🟡 Scaling"],
                    ["EU → Nigeria", "$4.1B", "8–12%", "0.6–1.5%", "Sendcash, MUDA", "🟠 Early"],
                  ].map(([corridor, vol, trad, chain, players, ready]) => (
                    <tr key={corridor} className="border-b border-[#1a1a2e] hover:bg-[rgba(124,58,237,0.03)] transition-colors">
                      <td className="px-4 py-3 text-[#f8fafc] font-medium">{corridor}</td>
                      <td className="px-4 py-3 text-[#94a3b8] font-mono">{vol}</td>
                      <td className="px-4 py-3 text-[#ef4444] font-mono">{trad}</td>
                      <td className="px-4 py-3 text-[#10b981] font-mono">{chain}</td>
                      <td className="px-4 py-3 text-[#94a3b8] text-xs">{players}</td>
                      <td className="px-4 py-3">{ready}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <blockquote className="my-8 pl-6 border-l-4 border-[#3b82f6]">
              <p className="text-lg italic text-[#f8fafc] leading-relaxed">
                "The US–Mexico corridor alone processes $63B/year. A 5% cost reduction = $3.15B in annual savings flowing back to migrant workers. Blockchain rails are not a fintech curiosity — they are a wealth redistribution mechanism at scale."
              </p>
            </blockquote>
          </section>

          {/* Section 8: Failure Modes */}
          <section id="failure-modes">
            <p className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-2">Section 08</p>
            <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-6">Failure Modes & Risk Vectors</h2>

            <p className="text-[#94a3b8] leading-relaxed mb-6">
              Blockchain payment rails are not failure-free. They trade correspondent banking's reconciliation risk for a different set of failure modes. Understanding these is prerequisite to building production-grade systems.
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-8">
              {[
                {
                  title: "Stablecoin Depeg Risk",
                  color: "border-red-500/30 bg-red-500/5",
                  tag: "text-red-400",
                  desc: "USDC depegged to $0.87 during the SVB collapse (March 2023). A payment firm holding $10M in USDC transit inventory faced an immediate $1.3M mark-to-market loss. Mitigation: real-time peg monitoring, multi-stablecoin diversification, instant unwinding triggers.",
                },
                {
                  title: "Smart Contract Exploits",
                  color: "border-red-500/30 bg-red-500/5",
                  tag: "text-red-400",
                  desc: "Bridge exploits cost $2B+ in 2022. Even payment-specific contracts have been exploited via reentrancy, oracle manipulation, and upgrade key compromise. Mitigation: formal verification, immutable core contracts, multi-sig upgrade keys.",
                },
                {
                  title: "On/Off-Ramp Partner Risk",
                  color: "border-amber-500/30 bg-amber-500/5",
                  tag: "text-amber-400",
                  desc: "If the off-ramp partner in the destination country fails (FTX-style), recipient funds are stranded on-chain with no conversion path. Mitigation: multi-partner redundancy, escrow models, regulatory licensed partners only.",
                },
                {
                  title: "Regulatory Shutdown Risk",
                  color: "border-amber-500/30 bg-amber-500/5",
                  tag: "text-amber-400",
                  desc: "Circle froze 75,000 USDC addresses following OFAC's Tornado Cash sanction. A payment firm whose correspondent is sanctioned may find its transit USDC frozen. Mitigation: jurisdictional diversification, KYC-at-origination to minimize frozen address exposure.",
                },
                {
                  title: "Finality Risk on PoS Chains",
                  color: "border-blue-500/30 bg-blue-500/5",
                  tag: "text-blue-400",
                  desc: "Ethereum's PoS finality takes ~12 minutes (2 epochs). Solana has had network halts (2021, 2022). Accepting 1-block confirmations as final is operationally convenient but exposes operators to reorg risk. Mitigation: chain-appropriate confirmation thresholds per transaction value.",
                },
                {
                  title: "Blockchain Network Congestion",
                  color: "border-blue-500/30 bg-blue-500/5",
                  tag: "text-blue-400",
                  desc: "During the 2021 NFT boom, Ethereum gas spiked to $200+ per transaction, making USDC transfers uneconomical. Payment corridors must have gas budget failsafes and chain failover logic to remain operational during congestion events.",
                },
              ].map((risk) => (
                <div key={risk.title} className={`p-5 rounded-xl border ${risk.color}`}>
                  <p className={`text-[10px] font-mono tracking-widest uppercase ${risk.tag} mb-2`}>Risk Vector</p>
                  <h3 className="text-[#f8fafc] font-semibold mb-2">{risk.title}</h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{risk.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 9: Deployment */}
          <section id="deployment">
            <p className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-2">Section 09</p>
            <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-6">Deployment Architecture</h2>

            <p className="text-[#94a3b8] leading-relaxed mb-6">
              A production-grade blockchain payment corridor requires six infrastructure components. The following is a reference architecture for a licensed PSP operating a 2-corridor stablecoin payment rail:
            </p>

            <div className="rounded-xl border border-[#1a1a2e] overflow-hidden my-8">
              <div className="bg-[#0a0a12] border-b border-[#1a1a2e] px-4 py-2 flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748b]">Reference Architecture: Production Payment Rail</span>
                <span className="text-[10px] font-mono text-[#a855f7]">v1.0</span>
              </div>
              <pre className="bg-[#030308] text-[#94a3b8] text-[12px] p-5 overflow-x-auto leading-relaxed font-mono">
{`┌─────────────────────────────────────────────────────────────────┐
│  LAYER 1: CUSTOMER INTERFACE                                     │
│  Mobile App / API  →  KYC/AML Engine  →  Payment Intent API     │
├─────────────────────────────────────────────────────────────────┤
│  LAYER 2: COMPLIANCE MIDDLEWARE                                  │
│  Travel Rule (Notabene)  →  Sanctions Screen  →  Risk Score     │
├─────────────────────────────────────────────────────────────────┤
│  LAYER 3: ON-RAMP                                               │
│  Fiat Collection (BNM-licensed)  →  FX Quote  →  USDC Purchase  │
├─────────────────────────────────────────────────────────────────┤
│  LAYER 4: ON-CHAIN SETTLEMENT                                   │
│  Hot Wallet  →  USDC Transfer (Solana/CCTP)  →  Confirmation    │
│  Chain Monitor  →  Gas Management  →  Retry Logic               │
├─────────────────────────────────────────────────────────────────┤
│  LAYER 5: OFF-RAMP                                              │
│  USDC Receipt Confirmation  →  USDC→Fiat  →  Bank Disbursement  │
│  (Licensed partner in destination jurisdiction)                  │
├─────────────────────────────────────────────────────────────────┤
│  LAYER 6: OPERATIONS                                            │
│  Inventory Management  →  Reconciliation  →  Regulatory Reports │
│  Peg Monitor  →  Incident Response  →  Audit Log               │
└─────────────────────────────────────────────────────────────────┘`}
              </pre>
            </div>

            <p className="text-[#94a3b8] leading-relaxed">
              The critical operational insight: Layer 4 (on-chain settlement) is the cheapest and most reliable component. Layers 1, 2, 3, and 5 are where regulatory complexity, counterparty risk, and operational costs concentrate. Blockchain rails don't eliminate operational complexity — they shift it from settlement to the fiat conversion boundaries. For more on custody and key management for institutional on-chain infrastructure, see <a href="https://www.arrnaya.com/blog/institutional-custody-architecture" className="text-[#a855f7] hover:underline">Institutional-Grade Custody Architecture</a>.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq">
            <p className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-2">Section 10</p>
            <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-6">Frequently Asked Questions</h2>

            <div className="space-y-3">
              {[
                {
                  q: "Why is correspondent banking slow and expensive?",
                  a: "Correspondent banking relies on a chain of bilateral nostro/vostro accounts. Each hop introduces settlement lag (1–5 days), FX conversion fees, and messaging costs via SWIFT MT messages. A payment from Malaysia to Brazil may traverse 4–6 intermediary banks.",
                },
                {
                  q: "How do stablecoins replace correspondent banking?",
                  a: "Stablecoins act as a universal settlement medium. The sender converts local currency to USDC/USDT, transmits on-chain to the recipient's address in seconds, and the recipient converts back to local currency. Two FX conversions replace a 4-hop correspondent chain.",
                },
                {
                  q: "What is Circle's Cross-Chain Transfer Protocol (CCTP)?",
                  a: "CCTP is Circle's native burn-and-mint protocol for USDC. It burns USDC on the source chain, issues an attestation via Circle's attestation service, and mints canonical USDC on the destination chain. This eliminates bridge lock-up risk and maintains canonical supply integrity.",
                },
                {
                  q: "What regulatory frameworks apply to blockchain payment operators?",
                  a: "Operators must comply with local MSB/PSP licensing (BNM in Malaysia, MAS in Singapore), FATF Travel Rule for transfers >$1,000, VASP registration in relevant jurisdictions, and AML/KYC screening at on/off-ramp touchpoints.",
                },
                {
                  q: "What is nostro liquidity pre-funding and can blockchain eliminate it?",
                  a: "Nostro pre-funding is capital banks park in foreign accounts to guarantee same-day settlement. It ties up ~$27T globally. Blockchain rails with atomic settlement eliminate the need for pre-funding by making settlement instant and final.",
                },
                {
                  q: "Which corridors are most viable for blockchain payment rails today?",
                  a: "High-remittance corridors with accessible on/off-ramps: US–Philippines, US–Mexico, Singapore–India, UAE–South Asia, and intra-ASEAN corridors. These have established stablecoin liquidity and licensed exchange partners at both ends.",
                },
                {
                  q: "How does FX risk work on stablecoin payment rails?",
                  a: "The sender converts MYR→USDC (spot FX exposure at on-ramp), the on-chain leg is FX-neutral, and the recipient converts USDC→PHP (spot FX exposure at off-ramp). Total FX exposure window is minutes vs days in correspondent banking, dramatically reducing risk.",
                },
                {
                  q: "Can blockchain payment rails handle high transaction volumes?",
                  a: "Solana processes 65,000 TPS with ~400ms finality. TRON handles ~2,000 TPS. Layer-2 rollups (Arbitrum, Base) extend Ethereum to 4,000+ TPS. These are sufficient for most payment volumes — Visa averages ~1,700 TPS globally.",
                },
              ].map((item, i) => (
                <details key={i} className="group rounded-xl border border-[#1a1a2e] bg-[#0a0a12] overflow-hidden">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
                    <span className="text-[#f8fafc] font-medium text-sm pr-4">{item.q}</span>
                    <span className="text-[#a855f7] shrink-0 text-lg group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-5 pb-4 text-[#94a3b8] text-sm leading-relaxed border-t border-[#1a1a2e] pt-4">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <div className="rounded-2xl border border-[#1a1a2e] bg-[#0a0a12] p-8 text-center">
              <div className="text-3xl mb-4">◈</div>
              <h2 className="text-xl md:text-2xl font-bold text-[#f8fafc] mb-4">
                The Correspondent Bank Is Being Disintermediated
              </h2>
              <p className="text-[#94a3b8] leading-relaxed max-w-2xl mx-auto mb-6">
                Blockchain payment rails are not speculative. They are live infrastructure moving billions of dollars monthly in corridors where the cost and speed differential over correspondent banking is undeniable. The implementation complexity has shifted from settlement (solved) to compliance and fiat conversion (solvable). The firms building the licensed on/off-ramp infrastructure at both corridor endpoints are building the payment system of the next decade.
              </p>
              <p className="text-[#64748b] text-sm font-mono">
                Infrastructure analysis for builders · Not financial advice
              </p>
            </div>
          </section>

          {/* Related Reading */}
          <section>
            <p className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-4">Related Reading</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Designing Compliant Stablecoin Architectures", url: "/blog/stablecoin-architecture", desc: "Reserve design, MiCA compliance, smart contract architecture" },
                { title: "CBDCs & DeFi: Convergence or Collision?", url: "/blog/cbdc-defi", desc: "How central bank digital currencies interact with permissionless payment rails" },
                { title: "Institutional Custody Architecture", url: "/blog/institutional-custody-architecture", desc: "MPC, HSM, and TSS for securing on-chain payment infrastructure" },
                { title: "DeFi Banking in Southeast Asia", url: "/blog/defi-banking-sea", desc: "Financial inclusion and regional adoption patterns" },
              ].map((post) => (
                <a key={post.url} href={post.url} className="block p-5 rounded-xl border border-[#1a1a2e] bg-[#0a0a12] hover:border-[#a855f7]/40 transition-colors group">
                  <h3 className="text-[#f8fafc] font-medium mb-2 group-hover:text-[#a855f7] transition-colors text-sm">{post.title}</h3>
                  <p className="text-[#64748b] text-xs leading-relaxed">{post.desc}</p>
                </a>
              ))}
            </div>
          </section>

        </div>

        {/* Post Footer */}
        <div className="border-t border-[#1a1a2e] py-8">
          <div className="mx-auto max-w-4xl px-6 flex flex-wrap items-center justify-between gap-4 text-[#64748b] font-mono text-xs">
            <span>arrnaya.com · Infrastructure analysis for builders</span>
            <span>Published May 5, 2026 · Payments & Infrastructure</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
