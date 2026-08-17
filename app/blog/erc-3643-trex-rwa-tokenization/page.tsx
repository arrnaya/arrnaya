import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";
import FaqSection from "../../components/FaqSection";
import RelatedReading from "../../components/RelatedReading";
import { blogPostingSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title:
    "T-REX Reloaded: How ERC-3643 Is Rewiring Real-World Asset Tokenization | Arrnaya Blog",
  description:
    "A practitioner's deep dive into ERC-3643 (T-REX) — the six-contract compliance architecture behind $32B+ in tokenized real-world assets. ONCHAINID identity, modular compliance, agent governance, and the T-REX Ledger's multi-chain orchestration layer now powering Apex Group's $100B tokenization roadmap.",
  keywords: [
    "ERC-3643",
    "T-REX protocol",
    "T-REX Ledger",
    "RWA tokenization",
    "security token standard",
    "ONCHAINID",
    "permissioned token",
    "compliant tokenization",
    "identity registry blockchain",
    "modular compliance smart contract",
    "Apex Group tokenization",
    "tokenized funds",
    "regulated token standard",
    "ERC-3643 Association",
    "Tokeny T-REX",
    "multi-chain orchestration layer",
    "cap table blockchain",
    "forced transfer securities token",
    "claim topics registry",
    "trusted issuers registry",
  ],
  authors: [{ name: "Arrnaya" }],
  openGraph: {
    type: "article",
    title:
      "T-REX Reloaded: How ERC-3643 Is Rewiring Real-World Asset Tokenization",
    description:
      "A practitioner's deep dive into ERC-3643's compliance architecture, ONCHAINID identity, and the T-REX Ledger's multi-chain orchestration layer powering $32B+ in tokenized assets.",
    publishedTime: "2026-08-17",
    tags: [
      "ERC-3643",
      "T-REX",
      "RWA Tokenization",
      "Security Tokens",
      "ONCHAINID",
      "Compliance",
      "Tokeny",
      "Apex Group",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "T-REX Reloaded: How ERC-3643 Is Rewiring Real-World Asset Tokenization",
    description:
      "A practitioner's deep dive into ERC-3643's compliance architecture, ONCHAINID identity, and the T-REX Ledger's multi-chain orchestration layer powering $32B+ in tokenized assets.",
  },
};

const toc = [
  { id: "why-compliance-broke-tokenization", label: "Why Compliance Broke Plain Tokenization" },
  { id: "trex-architecture", label: "Anatomy of T-REX: Six Contracts, One Transfer Gate" },
  { id: "onchainid", label: "ONCHAINID: Identity That Travels With the Investor" },
  { id: "compliance-module", label: "The Compliance Module: Rules as Code" },
  { id: "governance-controls", label: "Agents, Forced Transfers & Recovery" },
  { id: "trex-ledger-multichain", label: "The T-REX Ledger & the Apex Group Deal" },
  { id: "reference-flow", label: "Building on ERC-3643: A Reference Flow" },
  { id: "limitations", label: "What ERC-3643 Doesn't Solve" },
  { id: "roadmap", label: "Implementation Roadmap for Issuers" },
  { id: "conclusion", label: "Conclusion" },
];

const linkCls =
  "text-[#f59e0b] hover:text-[#a855f7] transition-colors underline underline-offset-4";

export default function BlogPost() {
  return (
    <>
      <JsonLd
        data={blogPostingSchema({
          headline:
            "T-REX Reloaded: How ERC-3643 Is Rewiring Real-World Asset Tokenization",
          description:
            "A practitioner's deep dive into ERC-3643 (T-REX) — the six-contract compliance architecture behind $32B+ in tokenized real-world assets. ONCHAINID identity, modular compliance, agent governance, and the T-REX Ledger's multi-chain orchestration layer now powering Apex Group's $100B tokenization roadmap.",
          slug: "erc-3643-trex-rwa-tokenization",
          datePublished: "2026-08-17",
          keywords: [
            "ERC-3643",
            "T-REX protocol",
            "T-REX Ledger",
            "RWA tokenization",
            "security token standard",
            "ONCHAINID",
            "permissioned token",
            "Apex Group tokenization",
            "modular compliance",
          ],
        })}
      />
      <Navbar />

      <article className="pt-20">
        {/* Hero */}
        <header className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[#0f0524]" />
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#f59e0b] opacity-15 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#7c3aed] opacity-15 blur-[100px]" />
          <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] rounded-full bg-[#3b82f6] opacity-10 blur-[80px]" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 30%, rgba(245,158,11,0.35) 0px, rgba(245,158,11,0.35) 1px, transparent 1px),
                                radial-gradient(circle at 70% 20%, rgba(124,58,237,0.3) 0px, rgba(124,58,237,0.3) 1.5px, transparent 1.5px),
                                radial-gradient(circle at 40% 70%, rgba(168,85,247,0.3) 0px, rgba(168,85,247,0.3) 1px, transparent 1px),
                                radial-gradient(circle at 80% 60%, rgba(59,130,246,0.25) 0px, rgba(59,130,246,0.25) 1px, transparent 1px),
                                radial-gradient(circle at 15% 80%, rgba(245,158,11,0.25) 0px, rgba(245,158,11,0.25) 1.5px, transparent 1.5px),
                                radial-gradient(circle at 60% 50%, rgba(168,85,247,0.2) 0px, rgba(168,85,247,0.2) 2px, transparent 2px),
                                radial-gradient(circle at 90% 85%, rgba(245,158,11,0.25) 0px, rgba(245,158,11,0.25) 1px, transparent 1px),
                                radial-gradient(circle at 35% 15%, rgba(59,130,246,0.2) 0px, rgba(59,130,246,0.2) 1px, transparent 1px)`,
              backgroundSize:
                "250px 250px, 300px 300px, 200px 200px, 350px 350px, 280px 280px, 400px 400px, 220px 220px, 320px 320px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030308]" />

          <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-28 md:py-36">
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <span className="text-[11px] font-semibold tracking-wider uppercase px-4 py-2 rounded-full bg-[rgba(245,158,11,0.15)] text-[#f59e0b] border border-[rgba(245,158,11,0.25)] backdrop-blur-sm">
                RWA · Compliance · Security Tokens · ERC-3643
              </span>
              <span className="text-[11px] text-[#94a3b8]">27 min read · Advanced</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-8">
              T-REX{" "}
              <span className="bg-gradient-to-r from-[#f59e0b] to-[#a855f7] bg-clip-text text-transparent">
                Reloaded
              </span>
              <br />
              How ERC-3643 Is Rewiring
              <br />
              Real-World Asset Tokenization
            </h1>
            <p className="text-base md:text-lg text-[#94a3b8] max-w-[720px] leading-relaxed mb-10">
              A plain ERC-20 transfer only has one way to fail: insufficient balance. A securities transfer has to fail for a dozen legitimate reasons — unaccredited investor, restricted jurisdiction, breached investor cap, active freeze. ERC-3643, born as the T-REX protocol, is the six-contract architecture that gave tokenized securities a native vocabulary for &quot;no&quot; — and it now underwrites over $32 billion in tokenized assets.
            </p>
            <div className="flex flex-wrap gap-6">
              {[
                { num: "$32B+", label: "Assets tokenized on ERC-3643 per the Association" },
                { num: "6 Contracts", label: "Token, identity, compliance & registries working as one gate" },
                { num: "$100B by 2027", label: "Apex Group's target using the T-REX Ledger as default infrastructure" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-2xl md:text-3xl font-extrabold text-[#f8fafc]">{stat.num}</span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] max-w-[220px]">{stat.label}</span>
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
                    className="text-sm text-[#94a3b8] hover:text-[#f59e0b] transition-colors leading-relaxed flex items-start gap-3"
                  >
                    <span className="text-[10px] font-mono text-[#64748b] mt-0.5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
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
                Real-world asset tokenization spent its first cycle obsessed with throughput and total value locked, as if the barrier to putting a bond or a fund share on-chain was ever a blockchain&apos;s transactions-per-second. It wasn&apos;t. The barrier was that a plain ERC-20 <code className="text-[#f8fafc]">transfer()</code> has exactly one way to fail — insufficient balance — and a regulated security has to be able to fail for reasons no fungible utility token was ever designed to express: an unaccredited counterparty, a restricted jurisdiction, a breached investor cap, an active freeze order.
              </p>
              <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                <a href="https://eips.ethereum.org/EIPS/eip-3643" target="_blank" rel="noopener noreferrer" className={linkCls}>ERC-3643</a>, published as a Final standard in 2021 under the name T-REX (Token for Regulated EXchanges) and maintained today by the <a href="https://www.erc3643.org/" target="_blank" rel="noopener noreferrer" className={linkCls}>ERC-3643 Association</a>, is the answer that stuck. It is not one smart contract but six, coordinating a permissioned token with an on-chain identity system and a programmable compliance layer — and per the Association&apos;s own figures, it now sits underneath more than <strong className="text-[#f8fafc]">$32 billion</strong> in tokenized funds, equities, bonds, commodities, and other regulated instruments, with founding and member organizations spanning Invesco, Bitstamp, Polygon, DTCC, Fireblocks, and a long list of law firms who don&apos;t attach their name to things casually.
              </p>
              <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                This is a technical field guide for engineers and issuers evaluating the standard, not a marketing brief. It walks through the actual interfaces — <code className="text-[#f8fafc]">IERC3643</code>, <code className="text-[#f8fafc]">IIdentityRegistry</code>, <code className="text-[#f8fafc]">ICompliance</code>, and the rest — and closes with the most consequential recent development: the <a href="https://www.t-rex.network/" target="_blank" rel="noopener noreferrer" className={linkCls}>T-REX Ledger</a>&apos;s emergence as a multi-chain orchestration layer, and why a $3.5 trillion administrator just made it their default infrastructure.
              </p>
            </div>

            {/* Section 1 */}
            <section id="why-compliance-broke-tokenization">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">01 · Problem</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  Why Compliance Broke Plain Tokenization
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  ERC-3643 requires <a href="https://eips.ethereum.org/EIPS/eip-20" target="_blank" rel="noopener noreferrer" className={linkCls}>EIP-20</a> and <a href="https://eips.ethereum.org/EIPS/eip-173" target="_blank" rel="noopener noreferrer" className={linkCls}>EIP-173</a> — it is an ERC-20 extension, not a replacement — which makes the two functions it adds on top all the more telling about what was actually missing. The specification&apos;s own rationale states it plainly: transfers of securities can fail for a variety of reasons, unlike utility tokens, and <code className="text-[#f8fafc]">isVerified()</code> and <code className="text-[#f8fafc]">canTransfer()</code> exist as &quot;a more general-purpose way&quot; to pre-check eligibility before a transfer is ever attempted.
                </p>

                <div className="overflow-x-auto my-10">
                  <table className="w-full text-[13px] border-collapse">
                    <thead>
                      <tr className="border-b border-[#1a1a2e]">
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#f59e0b]">Failure Reason</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#f59e0b]">Plain ERC-20</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#f59e0b]">ERC-3643</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Insufficient balance", "Reverts", "Reverts (same as ERC-20)"],
                        ["Receiver not KYC'd / lacks required claims", "No concept exists", "isVerified() returns false, transfer blocked"],
                        ["Receiver in a restricted jurisdiction", "No concept exists", "Compliance module rejects via canTransfer()"],
                        ["Investor cap or per-country cap breached", "No concept exists", "Compliance module rejects via canTransfer()"],
                        ["Wallet under investigation", "No concept exists", "setAddressFrozen() / freezePartialTokens() blocks it"],
                        ["Offering halted by regulator or issuer", "No concept exists", "pause() blocks all transfers token-wide"],
                        ["Court-ordered transfer, lost-key recovery", "Impossible without a proxy admin hack", "forcedTransfer() / recoveryAddress(), agent-gated"],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-[#1a1a2e]/60 hover:bg-[rgba(245,158,11,0.03)] transition-colors">
                          <td className="py-3 px-4 text-[#f8fafc] font-medium text-[13px]">{row[0]}</td>
                          <td className="py-3 px-4 text-[#ef4444]">{row[1]}</td>
                          <td className="py-3 px-4 text-[#94a3b8]">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-[rgba(245,158,11,0.06)] border border-[rgba(245,158,11,0.15)] rounded-xl p-6 md:p-8">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#f59e0b] mb-3">Working Definition</div>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    ERC-3643 is not &quot;ERC-20 with a whitelist.&quot; A whitelist is a single flat gate. ERC-3643 separates <strong className="text-[#f8fafc]">investor eligibility</strong> (does this wallet belong to a person or entity allowed to hold this asset class at all — the Identity Registry&apos;s job) from <strong className="text-[#f8fafc]">transaction-level compliance</strong> (does this specific transfer violate a rule of this specific offering, like a country cap — the Compliance contract&apos;s job). Two independent gates, checked separately, is what lets one identity be reused across many different offerings with different rules.
                  </p>
                </div>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  This distinction is also what makes the standard genuinely reusable rather than bespoke per issuance. A pension fund and a real-estate SPV can enforce completely different investor caps and jurisdiction rules through two different Compliance contracts, while both check the exact same investor&apos;s exact same on-chain identity through the exact same Identity Registry pattern — the KYC is done once, not once per offering.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="trex-architecture">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">02 · Architecture</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  Anatomy of T-REX: Six Contracts, One Transfer Gate
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  A T-REX deployment is a small system, not a single contract. The <a href="https://eips.ethereum.org/EIPS/eip-3643" target="_blank" rel="noopener noreferrer" className={linkCls}>EIP-3643 specification</a> defines six interfaces that coordinate every transfer, and the reference implementation maintained on the <a href="https://github.com/ERC-3643" target="_blank" rel="noopener noreferrer" className={linkCls}>ERC-3643 GitHub organization</a> ships all six as a working suite.
                </p>

                <div className="overflow-x-auto my-10">
                  <table className="w-full text-[13px] border-collapse">
                    <thead>
                      <tr className="border-b border-[#1a1a2e]">
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#f59e0b]">Contract</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#f59e0b]">Interface</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#f59e0b]">Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Token", "IERC3643", "ERC-20-compatible transfer surface, gated by every check below before it executes"],
                        ["Identity Registry", "IIdentityRegistry", "Links wallet → on-chain Identity contract + ISO-3166 country code; exposes isVerified()"],
                        ["Identity Registry Storage", "IIdentityRegistryStorage", "Shared whitelist layer so multiple Identity Registries can bind to one investor base"],
                        ["Compliance", "ICompliance", "Token-level transaction rules (caps, country limits); exposes canTransfer()"],
                        ["Trusted Issuers Registry", "ITrustedIssuersRegistry", "Which claim issuers (KYC/AML providers) are authorized, and for which claim topics"],
                        ["Claim Topics Registry", "IClaimTopicsRegistry", "Which claim types (e.g. \"KYC-passed\", \"accredited-investor\") this token requires"],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-[#1a1a2e]/60 hover:bg-[rgba(245,158,11,0.03)] transition-colors">
                          <td className="py-3 px-4 text-[#f8fafc] font-medium text-[13px]">{row[0]}</td>
                          <td className="py-3 px-4 text-[#94a3b8] font-mono text-[12px]">{row[1]}</td>
                          <td className="py-3 px-4 text-[#94a3b8]">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#0a0a12] border border-[#1a1a2e] rounded-xl overflow-hidden my-8">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-[#1a1a2e] bg-[rgba(255,255,255,0.02)]">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748b]">The Transfer Gate — Check Sequence</span>
                  </div>
                  <pre className="p-5 text-[13px] leading-relaxed overflow-x-auto text-[#94a3b8]">
{`function transfer(address to, uint256 amount) external returns (bool) {
    require(!paused(), "token is paused");
    require(!frozen[msg.sender] && !frozen[to], "wallet frozen");
    require(balanceOf(msg.sender) - frozenTokens[msg.sender] >= amount,
            "insufficient free balance");
    require(identityRegistry.isVerified(to),
            "receiver lacks required claims");
    require(compliance.canTransfer(msg.sender, to, amount),
            "violates offering compliance rules");

    _transfer(msg.sender, to, amount);
    compliance.transferred(msg.sender, to, amount); // update compliance state
    return true;
}`}
                  </pre>
                </div>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Five checks, two of them — <code className="text-[#f8fafc]">isVerified()</code> and <code className="text-[#f8fafc]">canTransfer()</code> — delegated entirely to independent contracts the token doesn&apos;t need to understand the internals of. That indirection is the whole design: the token contract stays stable and auditable while the identity rules and the compliance rules can each evolve, be upgraded, or be swapped per jurisdiction without touching the asset itself.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="onchainid">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">03 · Identity</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  ONCHAINID: Identity That Travels With the Investor, Not the Wallet
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  The Identity Registry doesn&apos;t store KYC documents. It stores a mapping from a wallet address to an on-chain Identity contract — <a href="https://tokeny.com/erc3643/" target="_blank" rel="noopener noreferrer" className={linkCls}>ONCHAINID</a> in the reference implementation — built on the claim-holder pattern from ERC-734/ERC-735, plus an ISO-3166 country code for jurisdiction checks. <code className="text-[#f8fafc]">isVerified()</code> doesn&apos;t ask &quot;is this a known wallet.&quot; It asks whether the Identity contract behind that wallet holds claims, signed by an issuer the Trusted Issuers Registry actually trusts, covering every topic the Claim Topics Registry requires for this specific token.
                </p>

                <div className="bg-[#0a0a12] border border-[#1a1a2e] rounded-xl overflow-hidden my-8">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-[#1a1a2e] bg-[rgba(255,255,255,0.02)]">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748b]">IIdentityRegistry — Core Surface</span>
                  </div>
                  <pre className="p-5 text-[13px] leading-relaxed overflow-x-auto text-[#94a3b8]">
{`interface IIdentityRegistry {
    function registerIdentity(address wallet, IIdentity id, uint16 country) external;
    function deleteIdentity(address wallet) external;
    function updateCountry(address wallet, uint16 country) external;
    function updateIdentity(address wallet, IIdentity id) external;

    // The check every transfer() ultimately calls:
    function isVerified(address wallet) external view returns (bool);

    function identity(address wallet) external view returns (IIdentity);
    function investorCountry(address wallet) external view returns (uint16);
}`}
                  </pre>
                </div>

                <div className="overflow-x-auto my-10">
                  <table className="w-full text-[13px] border-collapse">
                    <thead>
                      <tr className="border-b border-[#1a1a2e]">
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#f59e0b]">Registry</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#f59e0b]">Answers</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#f59e0b]">Example Entry</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Claim Topics Registry", "Which claim types does this token require at all?", "\"KYC-passed\", \"accredited-investor\", \"non-sanctioned\""],
                        ["Trusted Issuers Registry", "Who is allowed to sign those claims, and for which topics?", "A licensed KYC provider, trusted for \"KYC-passed\" and \"non-sanctioned\" only"],
                        ["Identity Registry Storage", "Which wallets are already onboarded, shared across which tokens?", "One investor base reused across an issuer's fund family"],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-[#1a1a2e]/60 hover:bg-[rgba(245,158,11,0.03)] transition-colors">
                          <td className="py-3 px-4 text-[#f8fafc] font-medium text-[13px]">{row[0]}</td>
                          <td className="py-3 px-4 text-[#94a3b8]">{row[1]}</td>
                          <td className="py-3 px-4 text-[#94a3b8]">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  The Identity Registry Storage split matters more than it looks. Without it, every new token an issuer launches would need investors to re-do KYC from scratch, because each token would own its own private mapping of verified wallets. With a shared storage layer, <code className="text-[#f8fafc]">bindIdentityRegistry()</code> lets a new token&apos;s Identity Registry attach to an existing, already-populated investor base — the practical mechanism behind Tokeny&apos;s claim that identity can be &quot;reused across multiple security offerings.&quot;
                </p>

                <div className="my-10 pl-6 md:pl-8 border-l-[3px] border-[#f59e0b] bg-[rgba(245,158,11,0.05)] rounded-r-lg p-6 md:p-8 relative">
                  <div className="absolute top-2 left-4 text-6xl text-[#f59e0b] opacity-20 font-serif leading-none">&ldquo;</div>
                  <p className="text-base md:text-lg italic text-[#f59e0b] leading-relaxed relative z-10 mb-3">
                    ONCHAINID ensures only users meeting pre-defined conditions can become token holders — even on permissionless blockchains.
                  </p>
                  <cite className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] not-italic">— ERC-3643 Association</cite>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="compliance-module">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">04 · Compliance</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  The Compliance Module: Rules as Code
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Identity answers &quot;is this investor eligible for this asset class, in general.&quot; It says nothing about whether a specific transfer violates the specific rules of a specific offering. That is <code className="text-[#f8fafc]">ICompliance</code>&apos;s job — a contract deliberately kept independent from investor identity, bound to exactly one token, and holding state that updates on every transfer.
                </p>

                <div className="bg-[#0a0a12] border border-[#1a1a2e] rounded-xl overflow-hidden my-8">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-[#1a1a2e] bg-[rgba(255,255,255,0.02)]">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748b]">ICompliance — Core Surface</span>
                  </div>
                  <pre className="p-5 text-[13px] leading-relaxed overflow-x-auto text-[#94a3b8]">
{`interface ICompliance {
    function bindToken(address token) external;
    function unbindToken(address token) external;

    // The check every transfer() ultimately calls:
    function canTransfer(address from, address to, uint256 amount)
        external view returns (bool);

    // State hooks — called by the token after each event:
    function transferred(address from, address to, uint256 amount) external;
    function created(address to, uint256 amount) external;
    function destroyed(address from, uint256 amount) external;
}`}
                  </pre>
                </div>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  In practice, production T-REX deployments rarely hardcode rules directly into one monolithic <code className="text-[#f8fafc]">ICompliance</code> implementation. The reference architecture supports a modular pattern — a coordinating compliance contract that delegates to pluggable rule modules, so an issuer can compose &quot;max 99 investors per country,&quot; &quot;no single holder above 20% of supply,&quot; and &quot;no transfers within a 12-month lock-up&quot; as independent, swappable pieces rather than one contract that has to be redeployed every time a single rule changes.
                </p>

                <div className="bg-[rgba(245,158,11,0.06)] border border-[rgba(245,158,11,0.15)] rounded-xl p-6 md:p-8">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#f59e0b] mb-3">Two Gates, Not One</div>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    A transfer between two fully KYC&apos;d, fully eligible investors can still be rejected — <code className="text-[#f8fafc]">isVerified()</code> passes on both sides, but <code className="text-[#f8fafc]">canTransfer()</code> fails because the offering has hit its investor cap, or the receiving country&apos;s allocation is exhausted. This is deliberate: identity eligibility and offering-specific compliance are legally distinct questions in most securities regimes, and conflating them into one check would force every offering to duplicate identity logic it should be sharing.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="governance-controls">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">05 · Governance</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  Agents, Forced Transfers &amp; Recovery
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  A maximally decentralized token has no one who can freeze it, reverse a transfer, or reissue a lost balance — and for a regulated security, that is not a feature, it is a compliance failure waiting to happen. Courts issue seizure orders. Regulators demand fraud remediation. Institutional custodians lose keys and need cap tables to remain intact anyway. ERC-3643 treats issuer override powers as a first-class part of the standard, gated through <code className="text-[#f8fafc]">IAgentRole</code>, not bolted on as an afterthought.
                </p>

                <div className="overflow-x-auto my-10">
                  <table className="w-full text-[13px] border-collapse">
                    <thead>
                      <tr className="border-b border-[#1a1a2e]">
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#f59e0b]">Mechanism</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#f59e0b]">Function</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#f59e0b]">Real-World Trigger</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Full wallet freeze", "setAddressFrozen(wallet, true)", "Wallet flagged under active fraud or AML investigation"],
                        ["Partial token freeze", "freezePartialTokens() / unfreezePartialTokens()", "Only the disputed tranche of tokens needs to be locked, not the investor's full holding"],
                        ["Token-wide halt", "pause() / unpause()", "Regulator-ordered trading halt, or issuer pausing during a corporate action"],
                        ["Forced transfer", "forcedTransfer(from, to, amount)", "Court order, or fraud remediation — receiver must still pass isVerified()"],
                        ["Wallet recovery", "recoveryAddress(oldWallet, newWallet, investorId)", "Lost private key — cap table history is preserved, not erased"],
                        ["Batch operations", "batchTransfer / batchMint / batchBurn / batchSetAddressFrozen", "Cap table events affecting many holders at once, executed gas-efficiently in one block"],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-[#1a1a2e]/60 hover:bg-[rgba(245,158,11,0.03)] transition-colors">
                          <td className="py-3 px-4 text-[#f8fafc] font-medium text-[13px]">{row[0]}</td>
                          <td className="py-3 px-4 text-[#94a3b8] font-mono text-[12px]">{row[1]}</td>
                          <td className="py-3 px-4 text-[#94a3b8]">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Every one of these powers is scoped to addresses explicitly granted the agent role by the contract owner via <a href="https://eips.ethereum.org/EIPS/eip-173" target="_blank" rel="noopener noreferrer" className={linkCls}>EIP-173</a> ownership, through <code className="text-[#f8fafc]">addAgent()</code> / <code className="text-[#f8fafc]">removeAgent()</code> / <code className="text-[#f8fafc]">isAgent()</code>. The specification frames this role as accommodating &quot;automated systems or smart contracts&quot; too — an automated redemption engine or a fraud-detection service can hold agent rights and act programmatically, without a human signing every individual freeze.
                </p>

                <div className="bg-[rgba(239,68,68,0.06)] border border-[rgba(239,68,68,0.15)] rounded-xl p-6 md:p-8">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#ef4444] mb-3">Trust Concentration, By Design</div>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    <code className="text-[#f8fafc]">forcedTransfer()</code> bypasses sender consent entirely — the receiver still has to pass <code className="text-[#f8fafc]">isVerified()</code>, but the sender gets no veto. This is appropriate and required for regulated securities. It is also a meaningful centralization of power in whoever holds the agent role, and investors evaluating a T-REX-based offering should understand exactly who that is and under what governance those keys are held — this is not a decentralization guarantee, and the standard never claims to be one.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="trex-ledger-multichain">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">06 · Multi-Chain</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  The T-REX Ledger &amp; the Apex Group Deal
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Everything above solves compliance on a single chain. It does not solve what happens the moment an issuer distributes the same fund across Ethereum, Polygon, and a permissioned institutional chain simultaneously — which is now the default expectation, not the exception. Deploy T-REX naively on three chains and you get three separate investor caps, three separate country-limit counters, and three cap tables that can silently drift out of sync, each individually compliant and collectively wrong.
                </p>
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  The <a href="https://www.t-rex.network/" target="_blank" rel="noopener noreferrer" className={linkCls}>T-REX Ledger</a> is the response: a cross-chain orchestration layer, described as the canonical book of record for regulated tokenized assets, that aggregates and synchronizes investor records, compliance checks, and transfer controls across every chain an issuer distributes on — without replacing any individual blockchain. It functions as a shared compliance reference layer that each deployment queries in real time, tying compliance to the investor&apos;s ONCHAINID rather than to any single wallet address on any single chain.
                </p>

                <div className="overflow-x-auto my-10">
                  <table className="w-full text-[13px] border-collapse">
                    <thead>
                      <tr className="border-b border-[#1a1a2e]">
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#f59e0b]">Concern</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#f59e0b]">Naive Multi-Chain T-REX</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#f59e0b]">With the T-REX Ledger</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Investor cap enforcement", "Counted independently per chain — can be bypassed by spreading across chains", "Counted once against the synchronized cross-chain record"],
                        ["KYC / onboarding", "Re-verified per chain deployment", "Identity resolved once via ONCHAINID, reused across every chain"],
                        ["Compliance drift risk", "Each chain's rules can silently diverge over time", "Rules and records synchronized in real time against one reference layer"],
                        ["Cap table integrity", "Fragmented ownership records across chains", "Unified book of record regardless of distribution channel"],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-[#1a1a2e]/60 hover:bg-[rgba(245,158,11,0.03)] transition-colors">
                          <td className="py-3 px-4 text-[#f8fafc] font-medium text-[13px]">{row[0]}</td>
                          <td className="py-3 px-4 text-[#ef4444]">{row[1]}</td>
                          <td className="py-3 px-4 text-[#94a3b8]">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  On March 19, 2026, <a href="https://www.t-rex.network/news/apex-group-to-enable-global-distribution-of-tokenized-funds-using-the-t-rex-ledger-as-its-multi-chain-orchestration-layer" target="_blank" rel="noopener noreferrer" className={linkCls}>Apex Group</a> — a global financial services provider administering over <strong className="text-[#f8fafc]">$3.5 trillion</strong> in assets — announced it would adopt the T-REX Ledger as its default multi-chain infrastructure for tokenized fund distribution, targeting <strong className="text-[#f8fafc]">$100 billion</strong> in tokenized assets by June 2027. This is not a pilot from a crypto-native fund administrator; it is one of the largest fund administration platforms in traditional finance making a specific, standard-anchored infrastructure choice.
                </p>

                <div className="my-10 pl-6 md:pl-8 border-l-[3px] border-[#a855f7] bg-[rgba(168,85,247,0.05)] rounded-r-lg p-6 md:p-8 relative">
                  <div className="absolute top-2 left-4 text-6xl text-[#a855f7] opacity-20 font-serif leading-none">&ldquo;</div>
                  <p className="text-base md:text-lg italic text-[#a855f7] leading-relaxed relative z-10 mb-3">
                    A neutral orchestration layer that whitelists investor identity and brings clarity to KYC and AML — across networks.
                  </p>
                  <cite className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] not-italic">— Peter Hughes, on the Apex Group / T-REX Ledger partnership</cite>
                </div>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  The word &quot;neutral&quot; is doing real work in that quote. The T-REX Ledger does not ask Apex Group to pick a winning chain — it lets distribution decisions be made on liquidity, counterparty access, and cost, while compliance and ownership integrity stay constant underneath. That is the structural bet the entire ERC-3643 ecosystem is making for its next phase: the compliance layer, not the settlement chain, is the durable piece of infrastructure.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="reference-flow">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">07 · Reference Flow</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  Building on ERC-3643: A Reference Flow
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Every T-REX-based issuance, from a tokenized wine cellar to a nine-figure fund, follows the same five-phase sequence.
                </p>

                <div className="space-y-0 my-10">
                  {[
                    { num: "1", title: "Deploy the Registries", desc: "Deploy the Identity Registry, Identity Registry Storage, Trusted Issuers Registry, and Claim Topics Registry — or bind to an existing shared Identity Registry Storage if the issuer already has an onboarded investor base." },
                    { num: "2", title: "Onboard Identities", desc: "Each investor's ONCHAINID is registered via registerIdentity(), with a country code and claims signed by an issuer already listed in the Trusted Issuers Registry for the topics this token requires." },
                    { num: "3", title: "Configure Compliance", desc: "Deploy or bind an ICompliance implementation encoding this specific offering's rules — investor caps, country limits, lock-up windows — and bindToken() it to the new token contract." },
                    { num: "4", title: "Issue & Distribute", desc: "mint() creates tokens directly to verified holders; batchMint() handles a full cap table migration in one transaction. Every subsequent transfer runs the full isVerified() + canTransfer() gate automatically." },
                    { num: "5", title: "Operate", desc: "Agents handle the operational lifecycle as it happens: freezing wallets under investigation, executing forced transfers under legal order, recovering lost wallets, and pausing the token during corporate actions — all logged on-chain." },
                  ].map((item) => (
                    <div key={item.num} className="flex gap-4 py-5 border-b border-[#1a1a2e]/60">
                      <span className="w-9 h-9 rounded-full bg-[#0a0a12] border-2 border-[#f59e0b] flex items-center justify-center text-sm font-bold text-[#f59e0b] shrink-0 mt-0.5">{item.num}</span>
                      <div>
                        <strong className="text-[#f8fafc] block mb-1 text-sm">{item.title}</strong>
                        <p className="text-sm text-[#94a3b8] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#0a0a12] border border-[#1a1a2e] rounded-xl overflow-hidden my-8">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-[#1a1a2e] bg-[rgba(255,255,255,0.02)]">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748b]">Composed Issuance — Pseudocode</span>
                  </div>
                  <pre className="p-5 text-[13px] leading-relaxed overflow-x-auto text-[#94a3b8]">
{`// 2. Onboard — investor identity resolved once, reusable across offerings
await identityRegistry.registerIdentity(investorWallet, onchainId, countryCode);

// 3. Configure — offering-specific rule, independent of identity
await compliance.bindToken(fundToken.address);
await compliance.setMaxInvestorsPerCountry(countryCode, 99);

// 4. Issue — every check below runs automatically inside mint()/transfer()
await fundToken.mint(investorWallet, shareAmount);
// -> identityRegistry.isVerified(investorWallet)  must be true
// -> compliance.canTransfer(issuer, investorWallet, shareAmount) must be true

// 5. Operate — agent-gated remediation, receiver still must pass isVerified()
await fundToken.connect(agent).forcedTransfer(compromisedWallet, recoveryWallet, amount);`}
                  </pre>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="limitations">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">08 · Risk</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  What ERC-3643 Doesn&apos;t Solve
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  A standard this widely adopted deserves the same scrutiny it applies to the tokens built on it. Four gaps are worth understanding before treating T-REX as a compliance guarantee rather than a compliance framework.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
                  {[
                    { title: "Trust in the Claim Issuer Is Off-Chain", color: "#ef4444", desc: "isVerified() only confirms a claim is signed by an address the Trusted Issuers Registry lists. The standard has no mechanism for deciding whether that issuer actually performed proper KYC/AML — that governance question sits entirely outside the smart contract layer." },
                    { title: "Compliance Is Only as Good as Its Code", color: "#f59e0b", desc: "canTransfer() enforces exactly what was programmed into the linked Compliance contract. A misconfigured or buggy module — a missing jurisdiction rule, an off-by-one cap — will happily approve a transfer a regulator would reject." },
                    { title: "Agent Powers Are a Deliberate Centralization", color: "#ef4444", desc: "Forced transfer, freeze, and recovery are necessary for regulated securities, but they concentrate real power in whoever controls the agent role. This is not a decentralization guarantee, and treating it as one misreads the standard's intent." },
                    { title: "Cross-Chain Sync Requires Every Chain to Opt In", color: "#f59e0b", desc: "The T-REX Ledger reduces fragmentation, but only for deployments that actually integrate with it. A platform or chain that doesn't query the orchestration layer remains a compliance blind spot the ledger can't see into." },
                  ].map((panel) => (
                    <div key={panel.title} className="bg-[#0a0a12] border border-[#1a1a2e] rounded-xl overflow-hidden">
                      <div className="flex items-center gap-3 px-5 py-4 border-b border-[#1a1a2e] bg-[rgba(255,255,255,0.02)]">
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ background: panel.color }} />
                        <span className="text-sm font-bold text-[#f8fafc]">{panel.title}</span>
                      </div>
                      <div className="p-5">
                        <p className="text-[13px] text-[#94a3b8] leading-relaxed">{panel.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  None of this is a knock against the standard specifically — every one of these gaps exists in traditional securities infrastructure too, just implemented through transfer agents, custodians, and paper KYC files instead of smart contracts. ERC-3643&apos;s contribution is making those same trust boundaries explicit, auditable, and machine-checkable rather than buried in a back-office process. That is a meaningfully different — and better — failure surface, but it is still a failure surface.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="roadmap">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">09 · Implementation</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  Implementation Roadmap for Issuers
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  For an issuer or platform evaluating whether to build a tokenized offering on ERC-3643, the sequencing below determines whether the first issuance takes weeks or quarters.
                </p>

                <div className="space-y-0 my-10">
                  {[
                    { num: "1", title: "Don't fork the reference implementation blind", desc: "Start from the audited contracts on the ERC-3643 GitHub organization, but treat every compliance module as something legal counsel reviews line by line against the specific jurisdiction and asset class — the code enforces exactly what it's told, nothing more." },
                    { num: "2", title: "Decide identity reuse strategy up front", desc: "If you plan to launch more than one offering, architect the Identity Registry Storage as a shared layer from day one. Retrofitting shared identity after investors are onboarded per-token means re-doing KYC integration work that could have been built once." },
                    { num: "3", title: "Treat the agent role as a governance decision, not a deployment detail", desc: "Document who holds agent rights, under what multisig or institutional custody, and what triggers forced transfers or freezes before the first token is minted — not after the first incident forces the question." },
                    { num: "4", title: "Plan for multi-chain distribution before you need it", desc: "If distribution across more than one chain is even plausible within the offering's lifetime, evaluate the T-REX Ledger's orchestration model now. Migrating a single-chain investor base into a synchronized cross-chain record later is materially harder than starting there." },
                    { num: "5", title: "Instrument compliance state, not just transfer events", desc: "Log canTransfer() rejections and isVerified() failures, not only successful transfers. A compliance module that silently blocks legitimate investors is a business problem long before it's a regulatory one, and the failure logs are the only early warning you'll get." },
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

            {/* Conclusion */}
            <section id="conclusion" className="bg-[#0a0a12] border border-[#1a1a2e] rounded-2xl p-10 md:p-14 text-center">
              <div className="text-[10px] font-mono tracking-widest uppercase text-[#a855f7] mb-4">Synthesis</div>
              <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4">
                The Compliance Layer Was the Missing Infrastructure
              </h2>
              <p className="text-sm text-[#94a3b8] leading-relaxed max-w-[800px] mx-auto mb-6">
                ERC-3643 didn&apos;t win adoption by being the most decentralized security token standard available — it won by being the most honest one about what regulated assets actually require: identity that can fail a transfer, compliance rules that can fail a transfer independently of identity, and agent powers that exist because someone has to remain accountable when a court order or a lost key demands it.
              </p>
              <p className="text-sm text-[#94a3b8] leading-relaxed max-w-[800px] mx-auto mb-6">
                The T-REX Ledger&apos;s emergence as a multi-chain orchestration layer — validated by a $3.5 trillion administrator committing to a $100 billion tokenization target through it — signals where the standard is heading next. The settlement chain is becoming a distribution choice. The compliance layer, anchored in ONCHAINID and the six-contract T-REX architecture, is becoming the durable infrastructure underneath it.
              </p>
              <p className="text-sm text-[#94a3b8] leading-relaxed max-w-[800px] mx-auto">
                For teams evaluating tokenized securities infrastructure today, the practical lesson is not to pick a chain first. It is to pick the compliance architecture first, and let chain and distribution strategy follow from there.
              </p>
            </section>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6">
          <FaqSection
            headline="ERC-3643 & the T-REX Protocol"
            items={[
              {
                question: "What does ERC-3643 actually add on top of ERC-20?",
                answer: "ERC-3643 requires EIP-20 and EIP-173 and extends them with two core checks every transfer must pass: isVerified(), which confirms the receiver's on-chain identity holds the required claims from trusted issuers, and canTransfer(), which checks the transfer against offering-specific compliance rules like investor caps or jurisdiction limits. It also adds agent-gated controls — wallet freezing, forced transfers, recovery, and pausing — that a plain ERC-20 has no concept of.",
              },
              {
                question: "What is the difference between the Identity Registry and the Compliance contract?",
                answer: "The Identity Registry answers whether an investor is eligible to hold this asset class at all, by checking claims on their ONCHAINID against required claim topics and trusted issuers. The Compliance contract answers a separate question: whether this specific transfer breaks a rule of this specific offering, such as a per-country investor cap. Keeping them separate lets one verified identity be reused across many different offerings, each with independent compliance rules.",
              },
              {
                question: "What is ONCHAINID and why does ERC-3643 depend on it?",
                answer: "ONCHAINID is the on-chain identity implementation used in the T-REX reference architecture, built on the claim-holder pattern from ERC-734/ERC-735. It lets an investor accumulate signed claims (KYC status, accreditation, jurisdiction) once and reuse that identity across multiple security offerings, rather than repeating KYC per token. ERC-3643's isVerified() function is defined against this claim-checking model.",
              },
              {
                question: "Why does ERC-3643 allow an agent to force a transfer without the sender's consent?",
                answer: "Regulated securities are subject to court orders, fraud remediation, and lost-key recovery scenarios that traditional finance handles through transfer agents. forcedTransfer() gives an authorized agent the same capability on-chain — the receiver must still pass isVerified(), but the sender's consent is bypassed. This is a deliberate, scoped centralization appropriate for regulated assets, not a bug or a compromise of the standard's design.",
              },
              {
                question: "What problem does the T-REX Ledger solve that the base ERC-3643 standard doesn't?",
                answer: "Base ERC-3643 secures compliance on a single chain. Distributing the same asset across multiple chains without coordination creates fragmented investor caps, duplicated KYC, and cap tables that can drift out of sync. The T-REX Ledger acts as a cross-chain orchestration layer that synchronizes investor records and compliance state in real time across every chain an issuer distributes on, tying compliance to the investor's identity rather than to any single chain's wallet address.",
              },
              {
                question: "What did Apex Group actually commit to with the T-REX Ledger?",
                answer: "On March 19, 2026, Apex Group — which administers over $3.5 trillion in assets — announced it would adopt the T-REX Ledger as its default multi-chain infrastructure for distributing tokenized funds, with a stated target of tokenizing $100 billion in assets by June 2027. It is one of the largest traditional fund administrators making a specific, standard-anchored infrastructure commitment, rather than a crypto-native pilot.",
              },
              {
                question: "Is ERC-3643 the same thing as T-REX?",
                answer: "T-REX (Token for Regulated EXchanges) was the original protocol name; ERC-3643 is the formal Ethereum standard that codified it, created in 2021 and now maintained as a Final standard by the ERC-3643 Association. The names are used largely interchangeably today — the T-REX Network and T-REX Ledger are infrastructure built on top of the ERC-3643 standard, not a separate or competing standard.",
              },
              {
                question: "Does ERC-3643 guarantee a token is legally compliant?",
                answer: "No. The standard provides the technical machinery to enforce whatever compliance rules are configured — it does not verify that those rules are correct for a given jurisdiction, that claim issuers performed proper KYC/AML, or that the agent role is governed appropriately. Compliance still depends on correct legal structuring and correctly configured Compliance and Identity Registry contracts; the standard makes that structure enforceable and auditable, not automatic.",
              },
            ]}
          />
        </div>

        {/* Post Footer */}
        <div className="max-w-[1200px] mx-auto px-6 pb-24">
          <div className="border-t border-[#1a1a2e] pt-10 flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-[11px] font-mono text-[#64748b] tracking-wider">
              T-REX Reloaded: How ERC-3643 Is Rewiring Real-World Asset Tokenization · August 2026
            </p>
            <p className="text-[11px] font-mono text-[#64748b] tracking-wider">
              For educational use · Not financial or legal advice
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
                excerpt: "From legal structures to smart contract implementation — how to tokenize real assets in a compliant manner.",
              },
              {
                slug: "institutional-custody-architecture",
                title: "Designing Institutional-Grade Custody Architecture",
                category: "Custody",
                excerpt: "A deep technical teardown of institutional digital asset custody: TSS vs multisig, MPC-CMP protocol design, HSM integration, and disaster recovery.",
              },
              {
                slug: "ai-agent-trust-stack-erc-standards",
                title: "The Trust Stack: How ERC-7662, ERC-7857, ERC-8126 & ERC-8196 Give Anonymous AI Agents On-Chain Credibility",
                category: "AI & Blockchain",
                excerpt: "A technical field guide to the emerging ERC standard stack for autonomous agents — identity, IP ownership, verification, and policy-bound execution.",
              },
            ]}
          />
        </div>
      </article>

      <Footer />
    </>
  );
}
