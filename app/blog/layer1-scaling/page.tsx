import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";
import FaqSection from "../../components/FaqSection";
import RelatedReading from "../../components/RelatedReading";
import { blogPostingSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Layer-1 Scaling: Beyond TPS Metrics | Arrnaya Blog",
  description:
    "TPS is a lie — or at least an incomplete truth. This deep-dive explores the real metrics that matter when evaluating Layer-1 blockchain infrastructure: finality, decentralization, state growth, MEV, and economic security.",
  keywords: [
    "Layer 1 blockchain",
    "TPS metrics",
    "blockchain scaling",
    "blockchain infrastructure",
    "finality",
    "decentralization trilemma",
    "MEV",
    "state growth",
    "Ethereum",
    "Solana",
    "Avalanche",
    "blockchain performance",
  ],
  authors: [{ name: "Arrnaya" }],
  openGraph: {
    type: "article",
    title: "Layer-1 Scaling: Beyond TPS Metrics",
    description:
      "Why throughput alone doesn't tell the full story — and what really matters when evaluating blockchain infrastructure.",
    publishedTime: "2025-12-03",
    tags: ["Layer-1", "Blockchain", "Scaling", "Infrastructure", "Finality", "Decentralization"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Layer-1 Scaling: Beyond TPS Metrics",
    description:
      "Why throughput alone doesn't tell the full story — and what really matters when evaluating blockchain infrastructure.",
  },
  // JSON-LD rendered via component
};

const toc = [
  { id: "tps-problem", label: "The TPS Problem" },
  { id: "finality", label: "Finality: The Metric That Matters" },
  { id: "decentralization", label: "Decentralization" },
  { id: "state-growth", label: "State Growth" },
  { id: "mev", label: "MEV: The Hidden Tax" },
  { id: "economic-security", label: "Economic Security" },
  { id: "real-framework", label: "A Better Evaluation Framework" },
  { id: "verdict", label: "The Verdict: 2025" },
];

export default function BlogPost() {
  return (
    <>
      <JsonLd data={blogPostingSchema({
        headline: "Layer-1 Scaling: Beyond TPS Metrics",
        description:
          "TPS is a lie — or at least an incomplete truth. This deep-dive explores the real metrics that matter when evaluating Layer-1 blockchain infrastructure: finality, decentralization, state growth, MEV, and economic security.",
        slug: "layer1-scaling",
        datePublished: "2025-12-03",
        keywords: [
          "Layer 1 blockchain",
          "TPS metrics",
          "blockchain scaling",
          "blockchain infrastructure",
          "finality",
          "decentralization trilemma",
          "MEV",
          "state growth",
          "Ethereum",
          "Solana",
          "Avalanche",
          "blockchain performance",
        ],
      })} />
      <Navbar />

      <article className="pt-20">
        {/* Hero — Purple Sparkling Background */}
        <header className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[#0f0524]" />
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#7c3aed] opacity-20 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#a855f7] opacity-15 blur-[100px]" />
          <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] rounded-full bg-[#3b82f6] opacity-10 blur-[80px]" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 30%, rgba(168,85,247,0.4) 0px, rgba(168,85,247,0.4) 1px, transparent 1px),
                                radial-gradient(circle at 70% 20%, rgba(124,58,237,0.3) 0px, rgba(124,58,237,0.3) 1.5px, transparent 1.5px),
                                radial-gradient(circle at 40% 70%, rgba(168,85,247,0.35) 0px, rgba(168,85,247,0.35) 1px, transparent 1px),
                                radial-gradient(circle at 80% 60%, rgba(59,130,246,0.25) 0px, rgba(59,130,246,0.25) 1px, transparent 1px),
                                radial-gradient(circle at 15% 80%, rgba(124,58,237,0.3) 0px, rgba(124,58,237,0.3) 1.5px, transparent 1.5px),
                                radial-gradient(circle at 60% 50%, rgba(168,85,247,0.2) 0px, rgba(168,85,247,0.2) 2px, transparent 2px),
                                radial-gradient(circle at 90% 85%, rgba(124,58,237,0.3) 0px, rgba(124,58,237,0.3) 1px, transparent 1px),
                                radial-gradient(circle at 35% 15%, rgba(59,130,246,0.2) 0px, rgba(59,130,246,0.2) 1px, transparent 1px)`,
              backgroundSize:
                "250px 250px, 300px 300px, 200px 200px, 350px 350px, 280px 280px, 400px 400px, 220px 220px, 320px 320px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030308]" />

          <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-28 md:py-36">
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <span className="text-[11px] font-semibold tracking-wider uppercase px-4 py-2 rounded-full bg-[rgba(124,58,237,0.15)] text-[#a855f7] border border-[rgba(168,85,247,0.25)] backdrop-blur-sm">
                Blockchain · Infrastructure · 2025
              </span>
              <span className="text-[11px] text-[#94a3b8]">20 min read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-8">
              Layer-1 Scaling:
              <br />
              <span className="bg-gradient-to-r from-[#a855f7] to-[#3b82f6] bg-clip-text text-transparent">
                Beyond TPS Metrics
              </span>
            </h1>
            <p className="text-base md:text-lg text-[#94a3b8] max-w-[700px] leading-relaxed mb-10">
              Why throughput alone doesn&apos;t tell the full story — and what really matters when evaluating blockchain infrastructure.
            </p>
            <div className="flex flex-wrap gap-6">
              {[
                { num: "~7", label: "Bitcoin Real TPS" },
                { num: "15–30", label: "Ethereum Real TPS" },
                { num: "2K–4K", label: "Solana Real TPS" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-2xl md:text-3xl font-extrabold text-[#f8fafc]">{stat.num}</span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748b]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* TOC */}
        <div className="bg-[#0a0a12] border-b border-[#1a1a2e]">
          <div className="max-w-[1200px] mx-auto px-6 py-8">
            <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-4">Contents</div>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {toc.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-[#94a3b8] hover:text-[#a855f7] transition-colors leading-relaxed flex items-start gap-3"
                  >
                    <span className="text-[10px] font-mono text-[#64748b] mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
          <div className="space-y-24">
            {/* Intro */}
            <div className="space-y-6">
              <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                The blockchain marketing playbook has a favourite number: <strong className="text-[#f8fafc]">transactions per second</strong>. Solana claims 65,000. Sui claims 297,000. Aptos claims 160,000. Every new Layer-1 emerges with a TPS figure designed to embarrass its predecessors — and every figure, examined closely, dissolves under a single question: <em>measured how, under what conditions, doing what?</em>
              </p>
              <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                TPS is not a lie exactly. It is something more dangerous — a metric that is technically accurate in controlled benchmarks and substantively misleading in production. It flattens a multidimensional engineering problem into a single integer, optimised for press releases rather than protocol evaluation.
              </p>
              <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                This analysis unpacks what that multidimensional problem actually looks like: the dimensions that matter, the tradeoffs they encode, and a more honest framework for evaluating whether a blockchain can serve as foundational global infrastructure.
              </p>
            </div>

            {/* Section 1 */}
            <section id="tps-problem">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">01 · Throughput</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  The TPS Problem: What the Number Hides
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Transactions per second is a throughput measure. It tells you how many discrete state transitions a network can process in one second. What it does not tell you is the nature of those transactions, the conditions under which they were counted, the cost imposed on the network by processing them at that speed, or what happens to the system when it actually approaches that limit.
                </p>

                {/* Terminal */}
                <div className="bg-[#0a0a12] border border-[#1a1a2e] rounded-xl overflow-hidden my-8">
                  <div className="flex items-center gap-2 px-5 py-3 border-b border-[#1a1a2e] bg-[rgba(255,255,255,0.02)]">
                    <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
                    <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                    <span className="w-3 h-3 rounded-full bg-[#10b981]" />
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] ml-2">benchmark_audit.sh — TPS Claim Deconstruction</span>
                  </div>
                  <pre className="p-5 text-[13px] leading-relaxed overflow-x-auto text-[#94a3b8] font-mono">
{`// What "65,000 TPS" actually means in most whitepapers:

test_conditions: {
  transaction_type:   "simple token transfer",  // not contract calls
  validator_count:    4,                          // not 1000+
  network_topology:   "local testnet",            // not global p2p
  state_size:         "minimal",                  // not 200GB+
  adversarial_load:   false,                      // no spam
}

⚠  production_tps ≈ benchmark_tps × 0.03 to 0.15
⚠  smart_contract_tps ≈ benchmark_tps × 0.005 to 0.04`}
                  </pre>
                </div>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Ethereum mainnet processes roughly <strong className="text-[#f8fafc]">15–30 TPS</strong> in production. Its theoretical ceiling, often cited at around 30 TPS, is achieved with simple ETH transfers; complex DeFi interactions involving multiple contract calls consume gas that effectively reduces throughput to single digits for that transaction type. Solana's real-world throughput, widely cited in independent analyses, hovers between <strong className="text-[#f8fafc]">2,000–4,000 TPS</strong> — impressive, but a fraction of headline claims, and achieved with a validator hardware requirement that has material implications for decentralization.
                </p>

                <div className="bg-[rgba(245,158,11,0.06)] border border-[rgba(245,158,11,0.15)] rounded-xl p-6 md:p-8">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#f59e0b] mb-3">The Validator Hardware Trap</div>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    High TPS almost always requires high validator hardware specifications. Solana validators require machines with 256GB+ RAM, high-end GPUs, and 1Gbps+ network connections — creating a hardware barrier that systematically excludes individual node operators and concentrates validation in data centers. This is not a bug in Solana's design. It is a deliberate tradeoff. The question is whether that tradeoff is disclosed and priced correctly in the ecosystem's valuation of the chain.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="finality">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">02 · Latency</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  Finality: The Metric That Actually Matters for UX
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  For most end-user experiences — and for virtually all cross-chain bridges, exchanges, and payments infrastructure — the relevant question is not how many transactions per second a chain can process, but <strong className="text-[#f8fafc]">how long after submission a transaction is irreversible</strong>. This is finality: the moment at which a transaction cannot be reorganised away by a future chain state.
                </p>
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Finality types differ fundamentally across consensus mechanisms:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
                  {[
                    { num: "TYPE_01", title: "Probabilistic Finality", desc: "Used by Bitcoin (Nakamoto consensus). Transactions become more final with each subsequent block, but are never mathematically guaranteed. 6 confirmations (~60 min) is convention, not proof. Re-orgs are possible at any depth — merely exponentially unlikely." },
                    { num: "TYPE_02", title: "Economic Finality", desc: "Used by Ethereum post-Merge. Finality occurs after two epochs (~12.8 min) when a supermajority of validators attest. Reversal requires burning 1/3 of staked ETH (~$30B+) — economically, but not mathematically, impossible to undo." },
                    { num: "TYPE_03", title: "Instant Finality", desc: "BFT-based chains (Cosmos, Avalanche) achieve finality within seconds — often 1–2 blocks. The tradeoff: validators must reach agreement synchronously, which bounds validator set size and introduces liveness risks under network partitions." },
                    { num: "TYPE_04", title: "Optimistic Finality", desc: "Solana's approach — transactions are treated as final immediately but subject to a brief confirmation window. Produces excellent UX but has historically suffered from outages when the optimism fails: the chain has halted multiple times under adversarial load." },
                  ].map((item) => (
                    <div key={item.num} className="bg-[#0a0a12] border border-[#1a1a2e] rounded-xl p-6">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#a855f7] block mb-3">{item.num}</span>
                      <h4 className="text-base font-bold text-[#f8fafc] mb-3">{item.title}</h4>
                      <p className="text-[13px] text-[#94a3b8] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  For payment applications, instant BFT finality is the gold standard. For DeFi protocols where liveness is paramount, economic finality with strong validator economics may be preferable. For store-of-value use cases, probabilistic finality backed by extreme hash rate remains the battle-tested choice. <strong className="text-[#f8fafc]">No single finality model is universally superior</strong> — but TPS tells you nothing about which model a chain uses.
                </p>

                <div className="my-10 pl-6 md:pl-8 border-l-[3px] border-[#a855f7] bg-[rgba(168,85,247,0.05)] rounded-r-lg p-6 md:p-8 relative">
                  <div className="absolute top-2 left-4 text-6xl text-[#a855f7] opacity-20 font-serif leading-none">&ldquo;</div>
                  <p className="text-base md:text-lg italic text-[#a855f7] leading-relaxed relative z-10 mb-3">
                    A chain that processes 100,000 TPS with 2-second finality is not ten times better than one processing 10,000 TPS. It may be worse — if that speed comes at the cost of a validator set so small that three data centers can collude to rewrite history.
                  </p>
                  <cite className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] not-italic">— Infrastructure design principle</cite>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="decentralization">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">03 · Decentralization</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  Decentralization: The Cost Everyone Underprices
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  The blockchain trilemma — the proposition that networks can optimise for at most two of security, scalability, and decentralization — is a simplification, but a useful one. What it captures is that <strong className="text-[#f8fafc]">decentralization has real costs</strong> that manifest as throughput limits, and that teams who claim to have solved the trilemma have almost always done so by redefining one of its terms.
                </p>
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Decentralization in practical terms means: how many independent parties must collude to corrupt the chain? This question has multiple layers.
                </p>

                {/* Metric Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#1a1a2e] rounded-xl overflow-hidden my-10">
                  {[
                    { num: "~4", label: "Mining pools control 60%+ of Bitcoin hashrate", sub: "concentration risk despite PoW 'decentralization'" },
                    { num: "~1,900", label: "Active Ethereum validators (entities, not keys)", sub: "strongest validator diversity among major L1s" },
                    { num: "19", label: "Validators control 33%+ of Solana stake", sub: "liveness and safety threshold concentration" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-[#0a0a12] p-8 text-center">
                      <span className="text-4xl font-extrabold text-[#a855f7] block mb-2">{stat.num}</span>
                      <span className="text-[13px] text-[#94a3b8] leading-relaxed block">{stat.label}</span>
                      <span className="text-[10px] text-[#64748b] mt-2 block">{stat.sub}</span>
                    </div>
                  ))}
                </div>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Node count is an imprecise but instructive proxy. A chain with 10,000 full nodes is meaningfully more decentralized than one with 100 — because geographic distribution, client diversity, and hardware accessibility compound. Ethereum's ~10,000 full nodes, distributed across dozens of countries and multiple client implementations (<strong className="text-[#f8fafc]">Geth, Lighthouse, Besu, Nethermind</strong>), represent a kind of decentralization that is structurally resistant to nation-state-level attack in ways that a 1,000-validator proof-of-stake chain operating within a handful of jurisdictions is not.
                </p>

                <h3 className="text-lg font-bold text-[#f8fafc] mt-10 mb-4">The Nakamoto Coefficient</h3>
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  The Nakamoto Coefficient — the minimum number of entities required to reach a protocol-breaking threshold (typically 33% for liveness, 51% for safety in BFT systems) — is a more precise decentralization metric than node count. It can be calculated across multiple subsystems: mining/staking, clients, geographic distribution, exchange liquidity, and developer activity. A chain with a Nakamoto Coefficient of 3 on any subsystem has a single-digit number of attack targets — regardless of what its TPS marketing claims.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="state-growth">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">04 · State Scalability</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  State Growth: The Silent Killer of Long-Term Scalability
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Every transaction on a smart contract platform modifies state: account balances, contract storage, code. State is the cumulative record of every interaction ever made. State growth is the rate at which this record expands — and it represents one of the most underappreciated threats to long-term blockchain viability.
                </p>

                {/* Terminal */}
                <div className="bg-[#0a0a12] border border-[#1a1a2e] rounded-xl overflow-hidden my-8">
                  <div className="flex items-center gap-2 px-5 py-3 border-b border-[#1a1a2e] bg-[rgba(255,255,255,0.02)]">
                    <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
                    <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                    <span className="w-3 h-3 rounded-full bg-[#10b981]" />
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] ml-2">state_growth_analysis.rs</span>
                  </div>
                  <pre className="p-5 text-[13px] leading-relaxed overflow-x-auto text-[#94a3b8] font-mono">
{`// State size as of 2025 (approx, full archive nodes):
ethereum_archive:  ~2.4 TB   // growing ~1 GB/day
ethereum_pruned:   ~1.1 TB  // manageable, but rising
solana_ledger:     ~90 TB   // extremely high due to throughput
bitcoin_full:      ~650 GB  // slow growth, UTXO model helps

// The problem: state must be held in fast storage (SSD/RAM)
// for validators to process blocks within slot time.
// As state grows, hardware requirements escalate.
// Decentralization shrinks. The trilemma bites.`}
                  </pre>
                </div>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  High-TPS chains face a compounding state growth problem: more transactions per second means more state modifications per second. Solana's ledger history, requiring tens of terabytes even with aggressive pruning, is already accessible only to institutional node operators with significant storage infrastructure. This is not a temporary condition — it is a structural consequence of the design choices that enable the throughput figure.
                </p>
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Solutions under active development — Ethereum's <strong className="text-[#f8fafc]">EIP-4444</strong> (history expiry), <strong className="text-[#f8fafc]">stateless clients</strong>, and <strong className="text-[#f8fafc]">Verkle trees</strong> — address this at the protocol level by separating history storage from state execution. These represent genuine progress. They also illustrate that TPS without a state growth management strategy is not a long-term scalability solution. It is a debt instrument: borrowed performance, payable in future centralization.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="mev">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">05 · MEV</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  MEV: The Hidden Tax on Throughput
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Maximal Extractable Value — formerly Miner Extractable Value — is the profit available to block producers by selectively ordering, including, or excluding transactions within a block. It is, in practical terms, a tax on network users levied by validators, and it scales directly with throughput: more transactions per second means more opportunities for value extraction.
                </p>
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  MEV manifests as sandwich attacks on DEX trades, frontrunning of oracle updates, liquidation racing in lending protocols, and arbitrage across fragmented liquidity pools. In competitive MEV environments, users pay inflated gas fees as bots bid for priority inclusion, and naive users with large trades lose value to sandwiching that never appears in their transaction receipt.
                </p>

                <div className="bg-[rgba(245,158,11,0.06)] border border-[rgba(245,158,11,0.15)] rounded-xl p-6 md:p-8">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#f59e0b] mb-3">MEV Is Not a Bug. It Is a Revenue Model.</div>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    Ethereum's Flashbots ecosystem has extracted over $1.5 billion in cumulative MEV since tracking began. This is not a flaw in Ethereum's design — it is an emergent consequence of a public mempool and arbitrary transaction ordering. The relevant evaluation question is whether a Layer-1's MEV environment is transparent, whether it can be mitigated, and whether it is disproportionately captured by a small number of sophisticated actors — which directly affects whether the chain's throughput is genuinely accessible to average users at advertised costs.
                  </p>
                </div>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Chains that claim to eliminate MEV have typically done so through one of three mechanisms: private mempools (which centralise information advantage with the block producer), deterministic ordering (which eliminates MEV but also eliminates priority fee markets, creating inclusion uncertainty), or application-layer rate limiting (which pushes MEV to other surfaces). None of these are free — they represent different distributions of the same underlying economic force.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="economic-security">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">06 · Security</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  Economic Security: What Backs the Chain?
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  A blockchain's security model ultimately rests on an economic proposition: attacking the chain must cost more than any achievable gain. For proof-of-work chains this is the cost of acquiring and operating sufficient hash rate. For proof-of-stake chains it is the cost of acquiring and risking the slashing of sufficient staked value.
                </p>

                <div className="overflow-x-auto my-10">
                  <table className="w-full text-[13px] border-collapse">
                    <thead>
                      <tr className="border-b border-[#1a1a2e]">
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#a855f7]">Chain</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#a855f7]">Consensus</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#a855f7]">Attack Cost (est.)</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#a855f7]">TPS (Real-world)</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#a855f7]">Finality</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#a855f7]">Nakamoto Coeff.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Bitcoin", "PoW", "$10B+/hr", "~7", "~60 min (6 conf)", "~4"],
                        ["Ethereum", "PoS", "$30B+ slash", "15–30", "~12.8 min", "~11"],
                        ["Solana", "PoS+PoH", "~$2–4B slash", "2,000–4,000", "<1 sec", "~19 (33%)"],
                        ["Avalanche (C)", "Snowball BFT", "~$1.5B slash", "~4,500", "~2 sec", "~26"],
                        ["Cosmos Hub", "Tendermint BFT", "~$300M slash", "~10,000 (bench)", "~6 sec", "~7"],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-[#1a1a2e]/60 hover:bg-[rgba(124,58,237,0.03)] transition-colors">
                          <td className="py-3 px-4 text-[#f8fafc] font-medium text-[13px]">{row[0]}</td>
                          <td className="py-3 px-4 text-[#94a3b8]">{row[1]}</td>
                          <td className="py-3 px-4 text-[#94a3b8]">{row[2]}</td>
                          <td className="py-3 px-4 text-[#94a3b8]">{row[3]}</td>
                          <td className="py-3 px-4 text-[#94a3b8]">{row[4]}</td>
                          <td className="py-3 px-4 text-[#94a3b8]">{row[5]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Economic security is not static. It scales with the market value of staked or mined assets — meaning that during bear markets, chains with smaller market caps see their security budgets compress. A chain with $5B in staked value at $10 token price has a very different security profile from the same chain at $0.50. TPS figures, needless to say, are unaffected by this dynamic.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="real-framework">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">07 · Framework</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  A Better Evaluation Framework
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Rather than a single headline number, a rigorous Layer-1 evaluation examines performance across at least six dimensions, each representing a distinct set of engineering tradeoffs:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
                  {[
                    { num: "[01]", label: "THROUGHPUT", title: "Real-world TPS", desc: "Sustained production TPS for complex contract interactions, not benchmark transfers. Measured during peak load, not idle periods." },
                    { num: "[02]", label: "LATENCY", title: "Time-to-finality", desc: "The actual irreversibility window for a transaction, measured in seconds, with the economic cost of reversal specified. Critical for UX and bridge design." },
                    { num: "[03]", label: "DECENTRALIZATION", title: "Nakamoto Coefficient", desc: "Across staking, client diversity, geography, and infrastructure providers. Measured at current state, not theoretical design capacity." },
                    { num: "[04]", label: "STATE SCALABILITY", title: "State growth rate", desc: "GB per year of state accumulation, hardware requirements to operate a full node, and the existence of credible state management strategies." },
                    { num: "[05]", label: "MEV ENVIRONMENT", title: "Extractable value surface", desc: "Is the MEV market transparent or opaque? Who captures it? Does it materially affect effective cost and inclusion for average users?" },
                    { num: "[06]", label: "ECONOMIC SECURITY", title: "Cost-to-attack", desc: "USD value required to execute a liveness or safety attack, adjusted for market conditions and validator concentration. The floor beneath all other metrics." },
                  ].map((item) => (
                    <div key={item.num} className="bg-[#0a0a12] border border-[#1a1a2e] rounded-xl p-6">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#a855f7] block mb-2">{item.num} {item.label}</span>
                      <h4 className="text-base font-bold text-[#f8fafc] mb-3">{item.title}</h4>
                      <p className="text-[13px] text-[#94a3b8] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="verdict">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">08 · Verdict</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  The Verdict: Chain Selection in 2025
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  The honest answer to &quot;which Layer-1 is best&quot; is: it depends entirely on what you are building and which dimensions of the evaluation framework you are willing to compromise.
                </p>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  <strong className="text-[#f8fafc]">For maximum security and decentralization:</strong> Ethereum remains the only chain with a combination of economic security, validator diversity, client pluralism, and geographic distribution that approaches meaningful censorship resistance at nation-state scale. Its throughput limitations are real, but its Layer-2 ecosystem (Arbitrum, Optimism, Base, zkSync) means that application throughput and Ethereum security are no longer mutually exclusive.
                </p>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  <strong className="text-[#f8fafc]">For applications requiring fast finality and high application-layer throughput:</strong> Solana's engineering is genuinely impressive, and its real-world performance in consumer applications (compressed NFTs, high-frequency trading, consumer payments) is unmatched among decentralised alternatives. The validator concentration and hardware requirements represent known, quantifiable tradeoffs — the question is whether they are acceptable for the specific application.
                </p>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  <strong className="text-[#f8fafc]">For sovereign application chains:</strong> The Cosmos ecosystem's application-specific chain model — where each application runs its own BFT chain with its own validator set and token economics — offers a different kind of scalability: not more TPS on a shared chain, but the ability to design the chain itself around application requirements. The tradeoffs are security fragmentation and bridge complexity.
                </p>

                <div className="my-10 pl-6 md:pl-8 border-l-[3px] border-[#a855f7] bg-[rgba(168,85,247,0.05)] rounded-r-lg p-6 md:p-8 relative">
                  <div className="absolute top-2 left-4 text-6xl text-[#a855f7] opacity-20 font-serif leading-none">&ldquo;</div>
                  <p className="text-base md:text-lg italic text-[#a855f7] leading-relaxed relative z-10 mb-3">
                    The best blockchain for your application is the one whose tradeoff surface maps most cleanly onto your threat model. TPS is a feature. Decentralization is infrastructure. Security is a prerequisite. Get the order right.
                  </p>
                  <cite className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] not-italic">— Framework synthesis, 2025</cite>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="bg-[#0a0a12] border border-[#1a1a2e] rounded-2xl p-10 md:p-14">
              <div className="text-[10px] font-mono tracking-widest uppercase text-[#a855f7] mb-4">Conclusion</div>
              <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-6">
                Stop Benchmarking. Start Auditing.
              </h2>
              <div className="space-y-4 max-w-[800px]">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  TPS will remain the dominant marketing metric for new Layer-1 launches because it is simple, large, and easily fabricated under controlled conditions. That will not change. What can change is the sophistication of the audience evaluating those claims.
                </p>
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Every blockchain represents a specific set of bets about which properties matter most: how decentralized a system needs to be to resist the relevant threat actors, how fast finality needs to be for the target use case, how much state growth is acceptable given the hardware economics of the next decade, and what MEV environment is tolerable for the users the chain will serve.
                </p>
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  The chains that survive the next cycle of infrastructure maturation will not be the ones with the highest TPS in 2025 whitepapers. They will be the ones whose engineering decisions — visible in finality models, validator economics, state management strategies, and MEV environments — prove correct over a decade of production load.
                </p>
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Audit those decisions. The TPS number is a distraction.
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6">
          <FaqSection
            headline="Blockchain Infrastructure & Scaling"
            items={[
              {
                question: "Is TPS completely irrelevant when evaluating blockchains?",
                answer: "No — but it's insufficient. TPS measures throughput under ideal conditions. What matters more is sustained production TPS during congestion, the cost per transaction at peak load, and how complex the transactions are. A chain claiming 65,000 TPS with simple transfers may process only 300 TPS for complex DeFi interactions. TPS is a ceiling, not a floor. Evaluate it alongside finality time, state growth, validator hardware requirements, and economic security.",
              },
              {
                question: "What's the difference between probabilistic and instant finality?",
                answer: "Probabilistic finality (Bitcoin, pre-Merge Ethereum) means transactions become exponentially harder to reverse with each new block, but never mathematically impossible. Instant finality (BFT chains like Cosmos, Avalanche) means transactions are irreversible as soon as validators reach consensus — typically within 1–2 seconds. Ethereum post-Merge uses economic finality: after two epochs (~12.8 minutes), reversing a transaction would require burning ~$30B+ in staked ETH. For payments, instant finality is ideal. For DeFi, economic finality with strong validator economics may be preferable.",
              },
              {
                question: "Should I build on Ethereum, Solana, or a Cosmos app-chain?",
                answer: "It depends on your threat model. Choose Ethereum if maximum security and decentralization matter — its 10,000+ node network and $100B+ economic security make it the safest choice for high-value settlements. Choose Solana if you need fast finality and high throughput for consumer applications — but accept the tradeoff of validator concentration (~19 validators control 33%+ stake). Choose Cosmos if you need a sovereign chain with custom tokenomics and governance — but accept the security fragmentation of smaller validator sets. Many serious applications use Ethereum L2s (Arbitrum, Base) to combine Ethereum security with Solana-like speed.",
              },
              {
                question: "What is state growth, and why does it matter for long-term scalability?",
                answer: "State is the cumulative record of all accounts, balances, and contract storage. State growth is how fast this record expands. Ethereum's full archive node is ~2.4 TB and growing ~1 GB/day. Solana's ledger is ~90 TB. As state grows, validator hardware requirements escalate — excluding smaller operators and centralizing validation. High-TPS chains face compounding state growth. Solutions like Ethereum's stateless clients and Verkle trees aim to separate history storage from state execution, but these are multi-year engineering efforts.",
              },
            ]}
          />
        </div>

        {/* Post Footer */}
        <div className="max-w-[1200px] mx-auto px-6 pb-24">
          <div className="border-t border-[#1a1a2e] pt-10 flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-[11px] font-mono text-[#64748b] tracking-wider">
              Layer-1 Scaling: Beyond TPS Metrics · Dec 2025
            </p>
            <p className="text-[11px] font-mono text-[#64748b] tracking-wider">
              Infrastructure analysis for builders · Not financial advice
            </p>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-6 pb-24">
          <RelatedReading
            posts={[
              {
                slug: "rwa-tokenization",
                title: "Real-World Asset Tokenization: A Practical Guide",
                category: "Tokenization",
                excerpt: "From legal structures to smart contract implementation — how to tokenize real assets.",
              },
              {
                slug: "cbdc-defi",
                title: "CBDCs & DeFi: Convergence or Collision?",
                category: "Regulatory",
                excerpt: "Exploring the intersection of state-backed and open financial systems.",
              },
              {
                slug: "stablecoin-architecture",
                title: "Designing Compliant Stablecoin Architectures",
                category: "Stablecoins",
                excerpt: "Technical and regulatory considerations for building stablecoin systems.",
              },
            ]}
          />
        </div>
      </article>

      <Footer />
    </>
  );
}
