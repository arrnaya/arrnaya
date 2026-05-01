import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Real-World Asset Tokenization: A Practical Guide | Arrnaya Blog",
  description:
    "From legal structures to smart contract implementation — how to tokenize real assets in a compliant manner, with depth across every asset class from private real estate to sovereign debt.",
  keywords: [
    "real world asset tokenization",
    "RWA tokenization guide",
    "tokenized real estate",
    "ERC-3643",
    "asset tokenization legal structure",
    "tokenized treasury",
    "tokenized private credit",
    "RWA DeFi 2025",
  ],
  authors: [{ name: "Arrnaya" }],
  openGraph: {
    type: "article",
    title: "Real-World Asset Tokenization: A Practical Guide",
    description:
      "From legal structures to smart contract implementation — how to tokenize real assets in a compliant manner.",
    publishedTime: "2025-05-01",
    tags: ["RWA", "Tokenization", "Real World Assets", "ERC-3643", "Smart Contracts", "DeFi"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real-World Asset Tokenization: A Practical Guide",
    description:
      "From legal structures to smart contract implementation — how to tokenize real assets in a compliant manner.",
  },
};

const toc = [
  { id: "fundamentals", label: "What Is RWA Tokenization" },
  { id: "legal", label: "Legal Structures" },
  { id: "asset-classes", label: "Asset Class Breakdown" },
  { id: "smart-contracts", label: "Smart Contract Architecture" },
  { id: "standards", label: "Token Standards" },
  { id: "oracle", label: "Oracle & Valuation" },
  { id: "secondary", label: "Secondary Market & Liquidity" },
  { id: "compliance", label: "Compliance & KYC" },
  { id: "process", label: "End-to-End Process" },
  { id: "checklist", label: "Builder's Checklist" },
];

export default function BlogPost() {
  return (
    <>
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
                Tokenization · RWA · 2025
              </span>
              <span className="text-[11px] text-[#94a3b8]">18 min read · Advanced</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-8">
              Real-World Asset
              <br />
              <span className="bg-gradient-to-r from-[#a855f7] to-[#3b82f6] bg-clip-text text-transparent">
                Tokenization
              </span>
            </h1>
            <p className="text-base md:text-lg text-[#94a3b8] max-w-[700px] leading-relaxed mb-10">
              From legal structures to smart contract implementation — how to tokenize real assets in a compliant manner, with depth across every asset class from private real estate to sovereign debt.
            </p>
            <div className="flex flex-wrap gap-6">
              {[
                { num: "$30T", label: "Addressable RWA Market" },
                { num: "$12B+", label: "Tokenized Assets On-Chain (2025)" },
                { num: "+680%", label: "Growth Since 2022" },
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
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
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
            {/* Section 1 */}
            <section id="fundamentals">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">01 · Foundation</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  What Is Real-World Asset Tokenization — and Why Now?
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Real-world asset tokenization is the process of creating a blockchain-based digital representation — a token — whose ownership and transfer rights are legally and economically linked to an off-chain physical or financial asset. The token is not the asset itself; it is a programmable claim on the asset, mediated by a legal agreement that binds the token to specific rights: income, governance, redemption, or all three.
                </p>
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  The core promise is the transformation of historically illiquid, inaccessible, and operationally expensive asset classes into programmable, composable, 24/7-tradeable digital instruments. A $50 million commercial real estate building that previously required a $500,000 minimum investment and 6 months of paper-based closing processes becomes accessible to a qualified investor anywhere in the world, with a $1,000 minimum and settlement in seconds.
                </p>

                <div className="bg-[rgba(245,158,11,0.06)] border border-[rgba(245,158,11,0.15)] rounded-xl p-6 md:p-8">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#f59e0b] mb-3">The Market Inflection Point</div>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    2024–2025 marks the first period where institutional capital — BlackRock (BUIDL), Franklin Templeton (BENJI), JPMorgan (Onyx), UBS, and sovereign wealth funds — has moved from pilot programs to live, scaled RWA tokenization products. The technology is no longer experimental; it is institutional infrastructure in production.
                  </p>
                </div>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Three converging forces have made now the right moment: <strong className="text-[#f8fafc]">regulatory clarity</strong> emerging across MiCA, MAS, and the UAE; <strong className="text-[#f8fafc]">institutional demand</strong> for yield-bearing on-chain instruments from DeFi protocols sitting on billions in idle stablecoin capital; and <strong className="text-[#f8fafc]">infrastructure maturity</strong> — account abstraction, institutional custody, and on-chain compliance tools that make the user experience viable beyond crypto natives.
                </p>

                <h3 className="text-lg font-bold text-[#f8fafc] mt-10 mb-4">The Tokenization Stack: What You&apos;re Actually Building</h3>
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Every tokenized asset project sits at the intersection of four distinct domains — any weakness in any layer undermines the entire structure. Understanding this stack is the prerequisite to all architecture decisions that follow.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
                  {[
                    { title: "Legal Layer", color: "#a855f7", items: ["SPV / trust structure", "Offering document / PPM", "Token-to-asset legal nexus", "Investor rights definition", "Jurisdiction selection"] },
                    { title: "Financial Layer", color: "#f59e0b", items: ["Asset valuation methodology", "Income distribution model", "Reserve / collateral ratio", "Fee structure design", "Redemption mechanics"] },
                    { title: "Technical Layer", color: "#10b981", items: ["Token standard selection", "Smart contract architecture", "Oracle integration", "Compliance module", "Cross-chain bridge"] },
                    { title: "Operational Layer", color: "#ef4444", items: ["KYC/AML onboarding", "Custodian management", "Reporting & attestation", "Investor portal / UX", "Secondary market access"] },
                  ].map((panel) => (
                    <div key={panel.title} className="bg-[#0a0a12] border border-[#1a1a2e] rounded-xl overflow-hidden">
                      <div className="flex items-center gap-3 px-5 py-4 border-b border-[#1a1a2e] bg-[rgba(255,255,255,0.02)]">
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ background: panel.color }} />
                        <span className="text-sm font-bold text-[#f8fafc]">{panel.title}</span>
                      </div>
                      <ul className="p-5 space-y-2">
                        {panel.items.map((item) => (
                          <li key={item} className="text-[13px] text-[#94a3b8] flex items-start gap-2">
                            <span className="text-[#64748b] mt-0.5 shrink-0">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="legal">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">02 · Legal Architecture</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  Legal Structures: How You Bind a Token to a Real Asset
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  The legal structure is the most critical and most frequently underestimated component of any RWA tokenization project. The blockchain does not enforce ownership rights — courts do. The token itself has no intrinsic legal standing unless a jurisdiction-specific legal structure explicitly defines what rights the token confers, on whom, and how those rights are enforced in the event of dispute, insolvency, or regulatory action.
                </p>
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  There is no single universal legal structure for RWA tokenization. The appropriate structure depends on the asset class, target investor jurisdiction, regulatory classification of the token, and desired liquidity profile. However, the vast majority of compliant tokenizations use one of five foundational structures.
                </p>

                <h3 className="text-lg font-bold text-[#f8fafc] mt-8 mb-4">The Five Core Legal Structures</h3>

                <div className="overflow-x-auto my-10">
                  <table className="w-full text-[13px] border-collapse">
                    <thead>
                      <tr className="border-b border-[#1a1a2e]">
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#a855f7]">Structure</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#a855f7]">How It Works</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#a855f7]">Best For</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#a855f7]">Key Risk</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#a855f7]">Examples</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["SPV Equity Tokenization", "SPV holds asset; tokens = equity shares in SPV", "Real estate, infrastructure, PE funds", "SPV insolvency exposure; complex governance", "RealT, Lofty, most RE tokenization"],
                        ["Trust Structure", "Asset held by trustee; tokens = beneficial interest in trust", "Treasuries, commodities, funds", "Trustee discretion risk; jurisdiction variation", "BUIDL (BlackRock), BENJI (Franklin)"],
                        ["Debt / Note Issuance", "Tokens = transferable promissory notes or bonds", "Private credit, trade finance, mortgages", "Regulated securities offering; prospectus required", "Centrifuge, Goldfinch, Maple Finance"],
                        ["Revenue Sharing Agreement", "Tokens grant right to % of revenue; no equity", "Music royalties, IP, recurring revenue businesses", "Regulatory grey area; may still be securities", "Royal (music), various creator platforms"],
                        ["Direct Property Title", "Land registry records token ownership directly", "Jurisdictions with digital title capability", "Requires legislative support; rare globally", "UAE DIFC pilots, emerging land registries"],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-[#1a1a2e]/60 hover:bg-[rgba(124,58,237,0.03)] transition-colors">
                          <td className="py-3 px-4 text-[#f8fafc] font-medium text-[13px]">{row[0]}</td>
                          <td className="py-3 px-4 text-[#94a3b8]">{row[1]}</td>
                          <td className="py-3 px-4 text-[#94a3b8]">{row[2]}</td>
                          <td className="py-3 px-4 text-[#94a3b8]">{row[3]}</td>
                          <td className="py-3 px-4 text-[#94a3b8]">{row[4]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-bold text-[#f8fafc] mt-8 mb-4">The SPV Anatomy — In Detail</h3>
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Because the SPV equity structure is used in the majority of real estate and infrastructure tokenization projects, understanding its precise anatomy is essential. A Special Purpose Vehicle in this context is a legally isolated entity — typically an LLC, LP, or private limited company — whose <strong className="text-[#f8fafc]">sole purpose</strong> is to hold a single asset or pool of assets. Its isolation from the sponsor's balance sheet is its primary legal function: if the sponsor becomes insolvent, the asset remains inside the SPV and is not subject to the sponsor's creditors.
                </p>

                <div className="bg-[rgba(16,185,129,0.06)] border border-[rgba(16,185,129,0.15)] rounded-xl p-6 md:p-8">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#10b981] mb-3">SPV Structure Pattern</div>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    <strong className="text-[#f8fafc]">Sponsor entity</strong> (manages the project) → establishes <strong className="text-[#f8fafc]">SPV LLC</strong> (holds the asset) → issues <strong className="text-[#f8fafc]">membership interest tokens</strong> (ERC-3643 or ERC-1400) to investors via a Regulation D / Regulation S offering → <strong className="text-[#f8fafc]">smart contract</strong> distributes rental income or capital gains as USDC to token holders proportionally → <strong className="text-[#f8fafc]">transfer restrictions</strong> enforced on-chain to limit secondary trading to verified accredited investors.
                  </p>
                </div>

                <h3 className="text-lg font-bold text-[#f8fafc] mt-8 mb-4">Securities Law: The Question You Cannot Avoid</h3>
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  In the United States, the Howey Test determines whether a token constitutes a security: an investment of money, in a common enterprise, with expectation of profits, derived from the efforts of others. <strong className="text-[#f8fafc]">The overwhelming majority of RWA tokens are securities under this definition.</strong> This is not a problem to be solved — it is a framework to be complied with. Reg D 506(b) or 506(c) exemptions allow private placement to accredited investors without full SEC registration; Reg S governs non-US offerings; Reg A+ enables smaller public offerings up to $75M. In the EU, MiCA's ART/EMT framework governs asset-referenced tokens directly, while traditional securities tokenization falls under MiFID II and the EU DLT Pilot Regime.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="asset-classes">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">03 · Asset Classes</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  Asset Class Breakdown: What Tokenizes Well and What Doesn&apos;t
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Not all assets are equally well-suited to tokenization. The ideal candidate asset has clear legal title, an established valuation methodology, predictable income streams, and regulatory familiarity. The worst candidates have disputed title, illiquid underlying markets, complex multi-party governance, or regulatory hostility to digital representation.
                </p>

                <div className="overflow-x-auto my-10">
                  <table className="w-full text-[13px] border-collapse">
                    <thead>
                      <tr className="border-b border-[#1a1a2e]">
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#a855f7]">Asset Class</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#a855f7]">Tokenization Maturity</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#a855f7]">Legal Complexity</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#a855f7]">Valuation Method</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#a855f7]">Income Stream</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#a855f7]">DeFi Composability</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["US Treasuries / MMF", "Production", "Medium", "Daily NAV (automated)", "Daily yield accrual", "High"],
                        ["Private Credit / Loans", "Production", "Medium", "Par + accrued interest", "Fixed coupon", "Medium"],
                        ["Commercial Real Estate", "Growing", "High", "Cap rate / DCF / appraisal", "Rental yield + appreciation", "Low-Medium"],
                        ["Residential RE", "Growing", "High", "Comparable sales / AVM", "Rental yield", "Low-Medium"],
                        ["Gold / Precious Metals", "Mature", "Medium", "Spot price (oracle)", "None (store of value)", "High"],
                        ["Private Equity Funds", "Early", "Very High", "Quarterly NAV", "Distributions (irregular)", "Low"],
                        ["Trade Finance / Invoices", "Growing", "Medium", "Face value + discount", "Invoice yield (short-term)", "Medium"],
                        ["Infrastructure / Energy", "Early", "Very High", "DCF / project finance", "Revenue-based distributions", "Low"],
                        ["Art / Collectibles", "Experimental", "High", "Auction comparables", "None (appreciation only)", "Very Low"],
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

                <div className="my-10 pl-6 md:pl-8 border-l-[3px] border-[#a855f7] bg-[rgba(168,85,247,0.05)] rounded-r-lg p-6 md:p-8 relative">
                  <div className="absolute top-2 left-4 text-6xl text-[#a855f7] opacity-20 font-serif leading-none">&ldquo;</div>
                  <p className="text-base md:text-lg italic text-[#a855f7] leading-relaxed relative z-10 mb-3">
                    The assets that tokenize best are not necessarily the most exciting — they are the ones with the clearest legal title, the most transparent valuation, and the most predictable cash flows. Boring, in RWA tokenization, is a feature.
                  </p>
                  <cite className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] not-italic">— Framework for Asset Selection</cite>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="smart-contracts">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">04 · Engineering</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  Smart Contract Architecture for RWA Tokens
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  An RWA token contract is fundamentally more complex than a standard ERC-20. It must encode not just the transfer of value, but a set of legal obligations — investor eligibility, holding period restrictions, distribution mechanics, redemption rights, and the ability for a regulated entity to enforce legal orders — all within an immutable (or carefully upgradeable) contract deployed on a public blockchain.
                </p>

                <h3 className="text-lg font-bold text-[#f8fafc] mt-8 mb-4">Core Contract Modules</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
                  {[
                    { title: "Token Core", sub: "ERC-3643 / ERC-1400", color: "#a855f7", items: ["ERC-3643 or ERC-1400 base", "Partition-based balances", "Forced transfer (legal orders)", "Mint / burn with cap", "Fractional precision (18 decimals)"] },
                    { title: "Identity Registry", sub: "On-chain KYC", color: "#f59e0b", items: ["On-chain investor identity claims", "KYC status verification", "Jurisdiction mapping", "Accreditation status", "Claim expiry & renewal"] },
                    { title: "Compliance Module", sub: "Transfer rules", color: "#10b981", items: ["Transfer eligibility check", "Country restriction rules", "Max investor count limit", "Lock-up period enforcement", "OFAC sanctions blocking"] },
                    { title: "Distribution Engine", sub: "Yield payments", color: "#ef4444", items: ["Pro-rata income distribution", "Push vs pull payment model", "Multiple currency support", "Tax withholding hooks", "Reinvestment option"] },
                  ].map((panel) => (
                    <div key={panel.title} className="bg-[#0a0a12] border border-[#1a1a2e] rounded-xl overflow-hidden">
                      <div className="flex items-center gap-3 px-5 py-4 border-b border-[#1a1a2e] bg-[rgba(255,255,255,0.02)]">
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ background: panel.color }} />
                        <span className="text-sm font-bold text-[#f8fafc]">{panel.title}</span>
                        <span className="text-[10px] font-mono text-[#64748b] ml-auto">{panel.sub}</span>
                      </div>
                      <ul className="p-5 space-y-2">
                        {panel.items.map((item) => (
                          <li key={item} className="text-[13px] text-[#94a3b8] flex items-start gap-2">
                            <span className="text-[#64748b] mt-0.5 shrink-0">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-[#f8fafc] mt-8 mb-4">Reference Contract: ERC-3643 RWA Token Core</h3>
                <div className="bg-[#0a0a12] border border-[#1a1a2e] rounded-xl overflow-hidden my-8">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-[#1a1a2e] bg-[rgba(255,255,255,0.02)]">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748b]">Solidity · ERC-3643 Pattern</span>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748b]">Illustrative / Simplified</span>
                  </div>
                  <pre className="p-5 text-[13px] leading-relaxed overflow-x-auto text-[#94a3b8]">
{`// SPDX-License-Identifier: MIT
// RWA Token — ERC-3643 (T-REX) pattern — illustrative
pragma solidity ^0.8.20;

interface IIdentityRegistry {
    function isVerified(address investor) external view returns (bool);
    function investorCountry(address investor) external view returns (uint16);
}

interface ICompliance {
    function canTransfer(address from, address to, uint256 amount)
        external view returns (bool);
    function transferred(address from, address to, uint256 amount) external;
}

contract RWAToken {
    string  public name;
    string  public symbol;
    uint8   public constant decimals = 18;
    uint256 public totalSupply;

    IIdentityRegistry public identityRegistry;
    ICompliance       public compliance;
    address           public owner;
    bool              public paused;

    mapping(address => uint256) public balanceOf;
    mapping(address => bool)    public frozen;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event AddressFrozen(address indexed addr, bool isFrozen, address agent);
    event RecoverySuccess(address lostWallet, address newWallet);

    modifier onlyOwner() {
        require(msg.sender == owner, "NOT_OWNER"); _;
    }

    // ── Core transfer with compliance gate ───────────────
    function transfer(address to, uint256 amount) external returns (bool) {
        _transfer(msg.sender, to, amount);
        return true;
    }

    function _transfer(address from, address to, uint256 amount) internal {
        require(!paused,         "TOKEN_PAUSED");
        require(!frozen[from] && !frozen[to], "ADDRESS_FROZEN");
        require(
            identityRegistry.isVerified(to),
            "RECEIVER_NOT_VERIFIED: KYC required"
        );
        require(
            compliance.canTransfer(from, to, amount),
            "COMPLIANCE_VIOLATION"
        );
        require(balanceOf[from] >= amount, "INSUFFICIENT_BALANCE");

        balanceOf[from] -= amount;
        balanceOf[to]   += amount;
        compliance.transferred(from, to, amount);

        emit Transfer(from, to, amount);
    }

    // ── Forced transfer — court order / legal recovery ───
    function forcedTransfer(
        address from, address to, uint256 amount
    ) external onlyOwner returns (bool) {
        require(balanceOf[from] >= amount, "INSUFFICIENT_BALANCE");
        balanceOf[from] -= amount;
        balanceOf[to]   += amount;
        compliance.transferred(from, to, amount);
        emit Transfer(from, to, amount);
        return true;
    }

    // ── Wallet recovery (lost key with identity proof) ───
    function recoveryAddress(
        address lostWallet,
        address newWallet,
        address investorOnchainId
    ) external onlyOwner {
        require(
            identityRegistry.isVerified(newWallet),
            "NEW_WALLET_NOT_VERIFIED"
        );
        uint256 bal = balanceOf[lostWallet];
        balanceOf[lostWallet] = 0;
        balanceOf[newWallet] += bal;
        compliance.transferred(lostWallet, newWallet, bal);
        emit RecoverySuccess(lostWallet, newWallet);
        emit Transfer(lostWallet, newWallet, bal);
    }
}`}
                  </pre>
                </div>

                <h3 className="text-lg font-bold text-[#f8fafc] mt-8 mb-4">Distribution Contract: Pro-Rata Income Payments</h3>
                <div className="bg-[#0a0a12] border border-[#1a1a2e] rounded-xl overflow-hidden my-8">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-[#1a1a2e] bg-[rgba(255,255,255,0.02)]">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748b]">Solidity · Distribution Engine</span>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748b]">Pull Payment Pattern</span>
                  </div>
                  <pre className="p-5 text-[13px] leading-relaxed overflow-x-auto text-[#94a3b8]">
{`// Pull-payment distributor — gas-efficient for large holder counts
contract RWADistributor {
    IERC20   public immutable token;      // RWA token contract
    IERC20   public immutable stablecoin;  // USDC or equivalent

    uint256 public distributionIndex;
    mapping(uint256 => uint256) public distributions;        // epoch → amount per token
    mapping(address => uint256) public lastClaimedEpoch;

    // ── Issuer pushes distribution ────────────────────────
    function distribute(uint256 totalAmount) external {
        require(token.totalSupply() > 0, "NO_SUPPLY");
        uint256 perToken = (totalAmount * 1e18) / token.totalSupply();
        stablecoin.transferFrom(msg.sender, address(this), totalAmount);
        distributions[++distributionIndex] = perToken;
    }

    // ── Investor claims accumulated yield ─────────────────
    function claim() external returns (uint256 totalClaim) {
        uint256 lastClaimed = lastClaimedEpoch[msg.sender];
        uint256 balance     = token.balanceOf(msg.sender);

        for (uint256 i = lastClaimed + 1; i <= distributionIndex; i++) {
            totalClaim += (distributions[i] * balance) / 1e18;
        }

        lastClaimedEpoch[msg.sender] = distributionIndex;
        if (totalClaim > 0) stablecoin.transfer(msg.sender, totalClaim);
    }
}`}
                  </pre>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="standards">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">05 · Standards</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  Token Standards: ERC-3643, ERC-1400, and Emerging Alternatives
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  The choice of token standard is a long-term architectural commitment that determines composability, compliance capability, secondary market access, and ecosystem tooling availability. The RWA space has not converged on a single standard — three distinct standards are actively used, each with different philosophical approaches to the compliance-composability tradeoff.
                </p>

                <div className="overflow-x-auto my-10">
                  <table className="w-full text-[13px] border-collapse">
                    <thead>
                      <tr className="border-b border-[#1a1a2e]">
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#a855f7]">Standard</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#a855f7]">Compliance Model</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#a855f7]">DeFi Composability</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#a855f7]">Ecosystem Support</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#a855f7]">Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["ERC-3643 (T-REX)", "On-chain identity registry + modular compliance", "Moderate", "Tokeny, Polygon, EVM chains", "Securities, real estate, regulated funds"],
                        ["ERC-1400 / ERC-1410", "Partition-based; document linking; controller rights", "Lower", "Polymath, legacy platforms", "Equity with multiple share classes"],
                        ["ERC-20 + Permit + Hooks", "Off-chain compliance; transfer hooks via ERC-777 pattern", "High", "Uniswap, Aave, full DeFi ecosystem", "Tokenized treasuries, liquid assets"],
                        ["ERC-4626 (Vault)", "Shares in yield-bearing vault; NAV-based redemption", "Very High", "Universal DeFi vault standard", "Tokenized MMFs, yield-bearing RWAs"],
                        ["ERC-1155 (Multi-token)", "Batch operations; semi-fungible", "Moderate", "OpenSea, NFT ecosystems", "Real estate fractions, collectibles"],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-[#1a1a2e]/60 hover:bg-[rgba(124,58,237,0.03)] transition-colors">
                          <td className="py-3 px-4 text-[#f8fafc] font-medium text-[13px]">{row[0]}</td>
                          <td className="py-3 px-4 text-[#94a3b8]">{row[1]}</td>
                          <td className="py-3 px-4 text-[#94a3b8]">{row[2]}</td>
                          <td className="py-3 px-4 text-[#94a3b8]">{row[3]}</td>
                          <td className="py-3 px-4 text-[#94a3b8]">{row[4]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-[rgba(16,185,129,0.06)] border border-[rgba(16,185,129,0.15)] rounded-xl p-6 md:p-8">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#10b981] mb-3">Emerging Best Practice: ERC-4626 + Compliance Layer</div>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    The most DeFi-composable compliant RWA architecture combines ERC-4626 (the vault standard) as the base — enabling integration with Aave, Morpho, and other yield aggregators — with a compliance wrapper that restricts deposit/withdrawal to KYC-verified addresses. BlackRock's BUIDL and Ondo's USDY use variants of this pattern, enabling institutional-grade RWA to be used as collateral in DeFi without sacrificing compliance.
                  </p>
                </div>
              </div>
            </section>
            {/* Section 6 */}
            <section id="oracle">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">06 · Oracle & Valuation</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  Oracle Architecture and On-Chain Asset Valuation
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  The oracle layer is where the off-chain world of real assets meets the on-chain world of smart contracts. Every RWA token that aspires to DeFi composability — particularly as collateral — must have a credible, manipulation-resistant, auditable on-chain price feed. This is technically and commercially one of the hardest problems in RWA tokenization.
                </p>
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Unlike crypto assets, which have liquid on-chain markets that allow AMM-based TWAP pricing, real assets are valued through processes that are inherently slower, more subjective, and less frequent: property appraisals happen quarterly, private credit NAV updates are monthly, trade finance invoices are valued at face value until maturity. <strong className="text-[#f8fafc]">The oracle must faithfully represent this reality on-chain without introducing manipulation vectors or creating false price precision.</strong>
                </p>

                <div className="overflow-x-auto my-10">
                  <table className="w-full text-[13px] border-collapse">
                    <thead>
                      <tr className="border-b border-[#1a1a2e]">
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#a855f7]">Asset Class</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#a855f7]">Valuation Frequency</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#a855f7]">Oracle Type</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#a855f7]">Staleness Risk</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#a855f7]">Manipulation Risk</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["US Treasuries", "Daily (market hours)", "Chainlink NAV feed", "Low", "Very Low"],
                        ["Gold / Commodities", "Continuous (spot)", "Chainlink / Pyth spot", "Very Low", "Low"],
                        ["Private Credit", "Monthly (NAV)", "Issuer-signed + Chainlink", "Medium", "Medium"],
                        ["Real Estate", "Quarterly (appraisal)", "Signed appraisal oracle", "High", "Medium"],
                        ["Private Equity", "Quarterly (NAV)", "Fund admin signed oracle", "High", "Low-Medium"],
                        ["Trade Finance / Invoices", "Static (par until maturity)", "Issuer attestation", "N/A (fixed value)", "Fraud risk"],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-[#1a1a2e]/60 hover:bg-[rgba(124,58,237,0.03)] transition-colors">
                          <td className="py-3 px-4 text-[#f8fafc] font-medium text-[13px]">{row[0]}</td>
                          <td className="py-3 px-4 text-[#94a3b8]">{row[1]}</td>
                          <td className="py-3 px-4 text-[#94a3b8]">{row[2]}</td>
                          <td className="py-3 px-4 text-[#94a3b8]">{row[3]}</td>
                          <td className="py-3 px-4 text-[#94a3b8]">{row[4]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-[rgba(239,68,68,0.06)] border border-[rgba(239,68,68,0.15)] rounded-xl p-6 md:p-8">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#ef4444] mb-3">The Illiquid Asset DeFi Collateral Problem</div>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    Using illiquid RWA tokens as DeFi collateral against loans creates liquidation paradoxes: if a tokenized real estate token needs to be liquidated, there may be no liquid on-chain buyer, forcing a fire-sale in illiquid off-chain markets. Protocols like Centrifuge and Flux Finance handle this through special redemption windows and liquidation buffers — not instant AMM liquidation. This fundamental tension is unsolved and requires careful protocol design.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="secondary">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">07 · Secondary Markets</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  Secondary Market Design and Liquidity Architecture
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  The promise of RWA tokenization includes unlocking secondary market liquidity for traditionally illiquid assets. In practice, achieving genuine liquidity requires deliberate architectural choices — and brutal honesty about what &quot;liquidity&quot; means for different asset classes. A tokenized US Treasury has genuine on-chain liquidity because its underlying asset has a $25 trillion liquid market. A tokenized office building in Kuala Lumpur does not.
                </p>

                <h3 className="text-lg font-bold text-[#f8fafc] mt-8 mb-4">Secondary Market Architecture Options</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
                  {[
                    { title: "Regulated ATS / Exchange", color: "#a855f7", items: ["Registered Alternative Trading System", "tZERO, INX, MERJ, ADDX (SGX)", "Enforces accredited investor rules", "Requires exchange listing approval", "Best for: equity-like securities"] },
                    { title: "Compliant DEX", color: "#f59e0b", items: ["Permissioned AMM (Uniswap hooks v4)", "Only KYC'd wallets can trade", "Price discovery via on-chain AMM", "Composable with DeFi protocols", "Best for: liquid tokenized assets"] },
                    { title: "OTC Broker Network", color: "#10b981", items: ["Off-chain price discovery", "On-chain settlement only", "Works for institutional block trades", "No price impact on-chain", "Best for: large illiquid positions"] },
                    { title: "Issuer Redemption", color: "#ef4444", items: ["Redeem directly with issuer at NAV", "No secondary market dependency", "Redemption window (daily / weekly)", "Redemption queue during stress", "Best for: fund-like structures"] },
                  ].map((panel) => (
                    <div key={panel.title} className="bg-[#0a0a12] border border-[#1a1a2e] rounded-xl overflow-hidden">
                      <div className="flex items-center gap-3 px-5 py-4 border-b border-[#1a1a2e] bg-[rgba(255,255,255,0.02)]">
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ background: panel.color }} />
                        <span className="text-sm font-bold text-[#f8fafc]">{panel.title}</span>
                      </div>
                      <ul className="p-5 space-y-2">
                        {panel.items.map((item) => (
                          <li key={item} className="text-[13px] text-[#94a3b8] flex items-start gap-2">
                            <span className="text-[#64748b] mt-0.5 shrink-0">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="compliance">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">08 · Compliance</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  Investor Onboarding, KYC Architecture, and Ongoing Obligations
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  The compliance stack for RWA tokenization is layered across three phases: <strong className="text-[#f8fafc]">investor onboarding</strong> (pre-issuance), <strong className="text-[#f8fafc]">ongoing monitoring</strong> (post-issuance), and <strong className="text-[#f8fafc]">event-driven obligations</strong> (distributions, redemptions, corporate actions). Each phase has specific regulatory requirements that must be addressed both off-chain in written policies and on-chain in smart contract logic.
                </p>

                <h3 className="text-lg font-bold text-[#f8fafc] mt-8 mb-4">Investor Onboarding: The ERC-3643 Identity Architecture</h3>
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  ERC-3643's most powerful innovation is its on-chain identity registry — a smart contract that stores cryptographically signed &quot;claims&quot; about investor attributes (KYC status, jurisdiction, accreditation level, sanctions clearance) without storing the underlying personal data on-chain. When a transfer is attempted, the compliance module queries the registry: does the receiver have an unexpired KYC claim for the relevant jurisdiction? If yes, the transfer proceeds. If not, it reverts.
                </p>
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  This architecture cleanly separates the KYC process (off-chain, managed by a compliance provider like Onfido, Synaps, or SumSub) from the transfer enforcement (on-chain, immutable, real-time). The claim issuer signs a structured attestation that goes on-chain; the personal data stays off-chain with the compliance provider.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="process">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">09 · Process</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  End-to-End Tokenization Process: From Asset to On-Chain Token
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  A complete RWA tokenization project from inception to secondary market trading typically spans 6–18 months and involves 8–12 distinct workstreams executed in parallel. The following end-to-end process represents the sequence for a real estate or private credit tokenization — the most common use cases.
                </p>

                <div className="space-y-0 my-10">
                  {[
                    { num: "1", title: "Asset Selection & Structuring Decision", desc: "Confirm the asset meets tokenization criteria: clear legal title, established valuation methodology, and a viable investor base. Choose the legal structure (SPV equity, debt, trust) and target jurisdiction based on asset type and regulatory environment. Engage securities counsel early — this decision gates everything downstream." },
                    { num: "2", title: "Legal Entity Formation & Regulatory Filing", desc: "Establish the SPV or trust in the chosen jurisdiction. In the US: file SEC exemption (Reg D 506(b)/506(c) or Reg S). In EU: prepare MiCA white paper or Prospectus Regulation filing. In Singapore: review MAS VASP / CMS licensing requirements. Engage a transfer agent registered with the relevant authority." },
                    { num: "3", title: "Smart Contract Development & Audit", desc: "Implement the token contract (ERC-3643 or ERC-1400 recommended), identity registry, compliance module, distribution engine, and oracle integration. Engage at least two independent smart contract auditors with securities token experience. Deploy to testnet; run full functional and stress testing. Address all critical and high findings before mainnet deployment." },
                    { num: "4", title: "Compliance Infrastructure Deployment", desc: "Integrate KYC/AML provider (SumSub, Onfido, Persona). Deploy on-chain identity registry and populate with initial investor claims. Configure compliance module rules: jurisdictions allowed, maximum investor count, lock-up periods, sanctions screening frequency. Test forced transfer and freeze functions. Establish OFAC/sanctions list update pipeline." },
                    { num: "5", title: "Investor Onboarding & Primary Issuance", desc: "Open subscription period. Investors complete KYC, accreditation verification, and subscription agreement. Upon funding and KYC clearance, tokens are minted to verified investor wallets. Subscriptions aggregated and SPV receives funds; asset acquisition closes. Initial token distribution recorded on-chain with full audit trail." },
                    { num: "6", title: "Oracle Activation & NAV Feeds", desc: "Activate Chainlink or custom oracle feeds for ongoing asset valuation. Establish cadence with custodian/fund administrator for NAV updates. Configure smart contract to reject minting if oracle feed is stale. Publish initial proof-of-reserves or asset attestation on-chain." },
                    { num: "7", title: "Secondary Market Activation", desc: "List on a compliant ATS (tZERO, INX, ADDX) or deploy a permissioned DEX pool (Uniswap v4 with compliance hooks). Seed initial liquidity if using AMM model. Establish OTC desk for institutional block trades. Publish transfer restriction summary in investor portal." },
                    { num: "8", title: "Ongoing Operations: Distributions, Reporting & Redemptions", desc: "Execute periodic income distributions via the distribution contract. Publish monthly or quarterly asset reports (NAV, income, material events) to investor portal and on-chain via IPFS attestation. Process redemption requests within defined windows. Update investor KYC status as claims expire. Maintain AML monitoring for secondary market activity. File required regulatory reports." },
                  ].map((item) => (
                    <div key={item.num} className="flex gap-4 py-5 border-b border-[#1a1a2e]/60">
                      <span className="w-9 h-9 rounded-full bg-[#0a0a12] border-2 border-[#a855f7] flex items-center justify-center text-sm font-bold text-[#a855f7] shrink-0 mt-0.5">{item.num}</span>
                      <div>
                        <strong className="text-[#f8fafc] block mb-1 text-sm">{item.title}</strong>
                        <p className="text-sm text-[#94a3b8] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 10 */}
            <section id="checklist">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">10 · Launch Checklist</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  The RWA Builder&apos;s Pre-Launch Checklist
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Before deploying a tokenized asset to mainnet or applying for regulatory authorization, the following checklist represents the minimum bar for a credibly compliant architecture.
                </p>

                <div className="space-y-0 my-10">
                  {[
                    { icon: "M", color: "#a855f7", title: "Legal structure established", desc: "SPV, trust, or note structure formed in appropriate jurisdiction; counsel confirmed regulatory pathway" },
                    { icon: "M", color: "#a855f7", title: "Securities exemption filed or registration complete", desc: "Reg D, Reg S, Prospectus, or MiCA white paper filed before any token distribution" },
                    { icon: "M", color: "#a855f7", title: "Transfer agent appointed", desc: "Regulated transfer agent managing cap table and investor records" },
                    { icon: "M", color: "#a855f7", title: "Smart contract audited (×2)", desc: "Two independent audits; critical/high findings resolved and published; formal verification for distribution logic" },
                    { icon: "M", color: "#a855f7", title: "KYC/AML program operational", desc: "Written AML policy; designated MLRO; CDD procedures for all token purchasers; Travel Rule compliance for qualifying transfers" },
                    { icon: "M", color: "#a855f7", title: "Identity registry deployed and tested", desc: "On-chain claim issuance tested end-to-end; claim expiry and renewal processes validated" },
                    { icon: "M", color: "#a855f7", title: "Sanctions screening integrated", desc: "Real-time OFAC/UN/EU screening; on-chain freeze capability tested; daily false-positive review process active" },
                    { icon: "M", color: "#a855f7", title: "Custodian / asset manager appointed", desc: "Regulated custodian holding underlying assets with segregated accounts; management agreement executed" },
                    { icon: "R", color: "#f59e0b", title: "Oracle feeds live with staleness guard", desc: "Independent price/NAV oracle with on-chain freshness check; mint suspended if staleness threshold exceeded" },
                    { icon: "R", color: "#f59e0b", title: "Distribution tested end-to-end", desc: "Full cycle: income received by SPV → pushed to distributor contract → claimed by investor wallet → stablecoin received, tested on testnet and mainnet fork" },
                    { icon: "R", color: "#f59e0b", title: "Incident response plan documented", desc: "Playbooks for: smart contract exploit, oracle failure, regulatory freeze order, custodian failure, peg deviation; team contacts established" },
                    { icon: "R", color: "#f59e0b", title: "Secondary market pathway confirmed", desc: "ATS listing approved, or compliant DEX deployed and tested, or OTC desk operational" },
                    { icon: "C", color: "#10b981", title: "DeFi integration tested (if applicable)", desc: "If token will be used as DeFi collateral: oracle deviation limits tested; liquidation flow validated with issuer redemption mechanism" },
                    { icon: "C", color: "#10b981", title: "Cross-chain bridge secured (if applicable)", desc: "Independent bridge audit; supply reconciliation mechanism; canonical chain designation; bridge pause capability" },
                    { icon: "C", color: "#10b981", title: "Tax reporting infrastructure (if distributing yield)", desc: "Withholding tax logic for applicable jurisdictions; investor tax statement generation process; Form 1099/K-1 equivalent where required" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 py-4 border-b border-[#1a1a2e]/60">
                      <span
                        className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5"
                        style={{ background: item.color + "20", color: item.color, border: `1px solid ${item.color}40` }}
                      >
                        {item.icon}
                      </span>
                      <div>
                        <strong className="text-[#f8fafc] text-sm">{item.title}</strong>
                        <p className="text-[13px] text-[#94a3b8] leading-relaxed mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-[11px] font-mono text-[#64748b] mt-4">
                  <span className="text-[#a855f7]">M</span> Mandatory legal/regulatory requirement · <span className="text-[#f59e0b]">R</span> Industry best practice · <span className="text-[#10b981]">C</span> Conditional on architecture
                </p>
              </div>
            </section>

            {/* Conclusion */}
            <section className="bg-[#0a0a12] border border-[#1a1a2e] rounded-2xl p-10 md:p-14 text-center">
              <h2 className="text-xl md:text-[26px] font-bold text-[#a855f7] mb-4">
                The $30 Trillion Opportunity Is an Execution Problem
              </h2>
              <p className="text-sm text-[#94a3b8] leading-relaxed max-w-[800px] mx-auto mb-6">
                The addressable market for real-world asset tokenization — $30 trillion across real estate, private credit, infrastructure, and public securities — is not a technical problem. The EVM, ERC-3643, Chainlink oracles, and institutional custody solutions are all production-ready. The barrier is <strong className="text-[#f8fafc]">execution discipline</strong>: the legal structures properly formed, the compliance infrastructure actually built, the smart contracts properly audited, the investor rights actually enforceable.
              </p>
              <p className="text-sm text-[#94a3b8] leading-relaxed max-w-[800px] mx-auto mb-6">
                The projects that fail will fail not because the blockchain didn&apos;t work — they will fail because the SPV wasn&apos;t bankruptcy-remote, the oracle was self-attested, the KYC was superficial, or the securities offering was never properly exempted. <strong className="text-[#f8fafc]">The winners in RWA tokenization will be builders who treat legal architecture with the same rigor as smart contract architecture.</strong>
              </p>
              <p className="text-sm text-[#94a3b8] leading-relaxed max-w-[800px] mx-auto">
                The token is the easy part. The asset is the hard part. Build accordingly.
              </p>
            </section>
          </div>
        </div>

        {/* Post Footer */}
        <div className="max-w-[1200px] mx-auto px-6 pb-24">
          <div className="border-t border-[#1a1a2e] pt-10 flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-[11px] font-mono text-[#64748b] tracking-wider">
              Real-World Asset Tokenization: A Practical Guide · May 2025
            </p>
            <p className="text-[11px] font-mono text-[#64748b] tracking-wider">
              For educational use · Not financial or legal advice
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
