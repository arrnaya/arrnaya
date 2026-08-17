import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";
import FaqSection from "../../components/FaqSection";
import RelatedReading from "../../components/RelatedReading";
import { blogPostingSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Designing Institutional-Grade Custody Architecture | Arrnaya Blog",
  description:
    "A deep technical teardown of institutional digital asset custody: TSS vs multisig, MPC-CMP protocol design, HSM integration, key ceremony architecture, disaster recovery frameworks, and analysis of Fireblocks and Anchorage infrastructure.",
  keywords: [
    "institutional custody",
    "MPC custody",
    "HSM integration",
    "multi-party computation",
    "TSS vs multisig",
    "key ceremony",
    "digital asset custody",
    "Fireblocks architecture",
    "Anchorage custody",
    "MPC-CMP protocol",
    "disaster recovery crypto",
  ],
  authors: [{ name: "Arrnaya" }],
  openGraph: {
    type: "article",
    title: "Designing Institutional-Grade Custody Architecture: MPC, HSM, and Multi-Party Signing",
    description:
      "TSS vs multisig, MPC-CMP protocol, HSM integration, key ceremony design, disaster recovery — a complete institutional custody teardown.",
    publishedTime: "2026-05-02",
    tags: ["Custody", "MPC", "HSM", "Institutional", "Security", "Digital Assets"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Designing Institutional-Grade Custody Architecture: MPC, HSM, and Multi-Party Signing",
    description:
      "TSS vs multisig, MPC-CMP protocol, HSM integration, key ceremony design, disaster recovery — a complete institutional custody teardown.",
  },
  // JSON-LD rendered via component
};

const toc = [
  { id: "threat-model", label: "The Threat Model" },
  { id: "tss-vs-multisig", label: "TSS vs. On-Chain Multisig" },
  { id: "mpc-cmp", label: "The MPC-CMP Protocol" },
  { id: "hsm-integration", label: "HSM Integration" },
  { id: "key-ceremony", label: "Key Ceremony Design" },
  { id: "disaster-recovery", label: "Disaster Recovery Architecture" },
  { id: "fireblocks", label: "Fireblocks Architecture Teardown" },
  { id: "anchorage", label: "Anchorage Architecture Teardown" },
  { id: "governance", label: "Policy Engine and Governance Layer" },
  { id: "recommendations", label: "Architecture Recommendations" },
];

export default function BlogPost() {
  return (
    <>
      <JsonLd
        data={blogPostingSchema({
          headline:
            "Designing Institutional-Grade Custody Architecture: MPC, HSM, and Multi-Party Signing for Digital Asset Firms",
          description:
            "A deep technical teardown of institutional digital asset custody: TSS vs multisig, MPC-CMP protocol design, HSM integration, key ceremony architecture, disaster recovery frameworks, and analysis of Fireblocks and Anchorage infrastructure.",
          slug: "institutional-custody-architecture",
          datePublished: "2026-05-02",
          keywords: [
            "institutional custody",
            "MPC custody",
            "HSM integration",
            "multi-party computation",
            "TSS vs multisig",
            "key ceremony",
            "digital asset custody",
            "Fireblocks architecture",
            "Anchorage custody",
            "MPC-CMP protocol",
            "disaster recovery crypto",
          ],
        })}
      />
      <Navbar />

      <article className="pt-20">
        {/* Hero */}
        <header className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[#ece1cc]" />
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#c2703f] opacity-20 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#c2703f] opacity-15 blur-[100px]" />
          <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] rounded-full bg-[#93aab8] opacity-10 blur-[80px]" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 30%, rgba(194,112,63,0.4) 0px, rgba(194,112,63,0.4) 1px, transparent 1px),
                                radial-gradient(circle at 70% 20%, rgba(194,112,63,0.3) 0px, rgba(194,112,63,0.3) 1.5px, transparent 1.5px),
                                radial-gradient(circle at 40% 70%, rgba(194,112,63,0.35) 0px, rgba(194,112,63,0.35) 1px, transparent 1px),
                                radial-gradient(circle at 80% 60%, rgba(147,170,184,0.25) 0px, rgba(147,170,184,0.25) 1px, transparent 1px),
                                radial-gradient(circle at 15% 80%, rgba(194,112,63,0.3) 0px, rgba(194,112,63,0.3) 1.5px, transparent 1.5px),
                                radial-gradient(circle at 60% 50%, rgba(194,112,63,0.2) 0px, rgba(194,112,63,0.2) 2px, transparent 2px),
                                radial-gradient(circle at 90% 85%, rgba(194,112,63,0.3) 0px, rgba(194,112,63,0.3) 1px, transparent 1px),
                                radial-gradient(circle at 35% 15%, rgba(147,170,184,0.2) 0px, rgba(147,170,184,0.2) 1px, transparent 1px)`,
              backgroundSize:
                "250px 250px, 300px 300px, 200px 200px, 350px 350px, 280px 280px, 400px 400px, 220px 220px, 320px 320px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f5efe2]" />

          <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-28 md:py-36">
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <span className="text-[11px] font-semibold tracking-wider uppercase px-4 py-2 rounded-full bg-[rgba(194,112,63,0.15)] text-[#c2703f] border border-[rgba(194,112,63,0.25)] backdrop-blur-sm">
                Custody · Security · 2026
              </span>
              <span className="text-[11px] text-[#5c5644]">25 min read</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-8">
              Designing{" "}
              <span className="bg-gradient-to-r from-[#c2703f] to-[#93aab8] bg-clip-text text-transparent">
                Institutional-Grade
              </span>
              <br />
              Custody Architecture
            </h1>
            <p className="text-base md:text-lg text-[#5c5644] max-w-[700px] leading-relaxed mb-10">
              MPC, HSM, and Multi-Party Signing for Digital Asset Firms — a complete technical teardown of the protocols, tradeoffs, and production architectures that govern how institutions secure billions in digital assets.
            </p>
            <div className="flex flex-wrap gap-6">
              {[
                { num: "$200B+", label: "Assets under institutional digital custody, 2025" },
                { num: "3–5s", label: "Target signing latency for MPC production systems" },
                { num: "2-of-3", label: "Minimum threshold scheme for institutional governance" },
                { num: "$0", label: "Full private key ever assembled in MPC custody" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-2xl md:text-3xl font-extrabold text-[#201c14]">{stat.num}</span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* TOC */}
        <div className="bg-[#fbf7ee] border-b border-[#ddd0b2]">
          <div className="max-w-[1200px] mx-auto px-6 py-8">
            <div className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268] mb-4">Contents</div>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {toc.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-[#5c5644] hover:text-[#c2703f] transition-colors leading-relaxed flex items-start gap-3"
                  >
                    <span className="text-[10px] font-mono text-[#8a8268] mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
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
              <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                In traditional finance, custody is understood. Regulated custodians hold bearer instruments in vaulted facilities under well-established legal frameworks, with decades of court precedent establishing what <strong className="text-[#201c14]">control</strong> means and who bears liability when it is lost. In digital assets, custody is a cryptographic problem wearing a compliance uniform — and the engineering decisions made at its foundation determine not just operational risk, but whether assets can be recovered at all.
              </p>
              <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                The custody stack for a regulated digital asset firm managing significant AUM must satisfy a set of requirements that are individually demanding and collectively contradictory: keys must be completely inaccessible to any single insider at any moment, yet the firm must be able to sign transactions in seconds to meet trading desk SLAs. The system must survive the simultaneous compromise of multiple infrastructure components, yet maintain availability that satisfies institutional clients used to 99.99% uptime. It must be auditable enough to satisfy regulators, yet private enough to protect clients from targeted attacks.
              </p>
              <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                This analysis examines how the leading institutional custody architectures — and the protocols that underpin them — navigate these contradictions.
              </p>
            </div>

            {/* Section 1: Threat Model */}
            <section id="threat-model">
              <div className="mb-10 pb-6 border-b border-[#ddd0b2]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268] mb-3">01 · Security</div>
                <h2 className="font-display text-xl md:text-[26px] font-bold text-[#201c14] mb-4 leading-snug">
                  The Threat Model: What Institutional Custody Must Defeat
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  Before evaluating any custody technology, a firm must specify what it is defending against. The threat landscape for institutional digital asset custody is broader than it first appears, and different custody architectures optimise for different subsets of it.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
                  <div className="bg-[#fbf7ee] border border-[#ddd0b2] rounded-xl p-6">
                    <h4 className="text-[10px] font-mono tracking-widest uppercase text-[#c2703f] mb-4">External Threat Vectors</h4>
                    <ul className="space-y-3">
                      {[
                        "Network intrusion: Compromise of signing infrastructure via software vulnerabilities, supply chain attacks, or zero-days in dependencies",
                        "Social engineering: Targeted attacks on operators and administrators to extract key material or authorise fraudulent transactions",
                        "Side-channel attacks: Timing, power analysis, or electromagnetic attacks on HSM hardware, particularly relevant for cold signing paths",
                        "Supply chain compromise: Malicious firmware, compromised HSMs, or backdoored cryptographic libraries introduced before deployment",
                      ].map((item, i) => (
                        <li key={i} className="text-[13px] text-[#5c5644] leading-relaxed flex items-start gap-2">
                          <span className="text-[#c2703f] mt-1 shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#fbf7ee] border border-[#ddd0b2] rounded-xl p-6">
                    <h4 className="text-[10px] font-mono tracking-widest uppercase text-[#b98a3d] mb-4">Internal Threat Vectors</h4>
                    <ul className="space-y-3">
                      {[
                        "Rogue employee: Single authorised operator exfiltrating key material or self-approving fraudulent withdrawals",
                        "Collusion: Multiple insiders coordinating to meet signing thresholds without legitimate business purpose",
                        "Coercion: Physical or legal pressure on key holders to sign without proper governance process",
                        "Operational error: Accidental key deletion, backup corruption, or procedural failures that result in permanent loss",
                      ].map((item, i) => (
                        <li key={i} className="text-[13px] text-[#5c5644] leading-relaxed flex items-start gap-2">
                          <span className="text-[#b98a3d] mt-1 shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-[rgba(185,138,61,0.06)] border border-[rgba(185,138,61,0.15)] rounded-xl p-6 md:p-8">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#b98a3d] mb-3">The Dual Failure Mode Problem</div>
                  <p className="text-sm text-[#5c5644] leading-relaxed">
                    Every custody architecture must be evaluated against two distinct failure modes: <strong className="text-[#201c14]">theft</strong> (keys exfiltrated, assets stolen) and <strong className="text-[#201c14]">loss</strong> (keys destroyed or inaccessible, assets permanently locked). These failure modes are in direct tension — measures that reduce theft risk often increase loss risk, and vice versa. The engineering task is calibrating this tradeoff for the firm's specific risk tolerance and regulatory context.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: TSS vs Multisig */}
            <section id="tss-vs-multisig">
              <div className="mb-10 pb-6 border-b border-[#ddd0b2]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268] mb-3">02 · Cryptography</div>
                <h2 className="font-display text-xl md:text-[26px] font-bold text-[#201c14] mb-4 leading-snug">
                  TSS vs. On-Chain Multisig: The Foundational Choice
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  The first architectural decision is whether multi-party control of assets will be implemented via <strong className="text-[#201c14]">threshold signature schemes (TSS)</strong>, a cryptographic technique, or <strong className="text-[#201c14]">on-chain multisig</strong>, a smart contract or protocol-level construct.
                </p>

                <div className="overflow-x-auto my-10">
                  <table className="w-full text-[13px] border-collapse">
                    <thead>
                      <tr className="border-b border-[#ddd0b2]">
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#c2703f]">Dimension</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#c2703f]">TSS / MPC</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#c2703f]">On-Chain Multisig</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Key Architecture", "No full private key ever exists. Key shares held by separate parties; signing via cryptographic protocol.", "N private keys exist independently. Smart contract or script requires M-of-N signatures to spend."],
                        ["On-Chain Footprint", "Indistinguishable from single-sig on-chain. No disclosure of threshold configuration. Lower fees.", "Multisig structure publicly visible on-chain. M and N values disclosed. Higher fees on some chains."],
                        ["Chain Compatibility", "Chain-agnostic — works for any chain supporting the underlying signature scheme. Requires per-chain integration work.", "Chain-specific — each chain has different multisig primitives. UTXO chains, EVM chains, and others require separate implementations."],
                        ["Smart Contract Risk", "No smart contract risk. Signing is off-chain cryptography; no exploitable on-chain logic.", "Smart contract bugs are a material attack surface. Multisig contracts have been exploited (Parity wallet, $150M frozen)."],
                        ["Latency", "3–10 rounds of network communication between signing nodes. Adds latency; must be engineered for SLA.", "Each signer signs independently. Aggregation is trivial. Low coordination latency."],
                        ["Key Refresh", "Key shares can be refreshed proactively — parties compute new shares without changing the underlying key. Old shares become useless.", "Key rotation requires new address generation and asset migration. Expensive and creates operational risk."],
                        ["Regulatory Optics", "Preferred by most institutional regulators. No on-chain disclosure of custody structure. Harder to target.", "On-chain transparency can be a compliance asset (auditability) or a liability (attack surface disclosure)."],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-[#ddd0b2]/60 hover:bg-[rgba(194,112,63,0.03)] transition-colors">
                          <td className="py-3 px-4 text-[#201c14] font-medium text-[13px]">{row[0]}</td>
                          <td className="py-3 px-4 text-[#5c5644]">{row[1]}</td>
                          <td className="py-3 px-4 text-[#5c5644]">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  The institutional consensus has moved decisively toward <strong className="text-[#201c14]">TSS/MPC</strong> for most use cases. The combination of no single point of cryptographic failure, chain-agnosticism, and on-chain indistinguishability makes it the superior architecture for firms managing diverse asset portfolios under regulatory scrutiny.
                </p>

                <div className="my-10 pl-6 md:pl-8 border-l-[3px] border-[#c2703f] bg-[rgba(194,112,63,0.05)] rounded-r-lg p-6 md:p-8 relative">
                  <div className="absolute top-2 left-4 text-6xl text-[#c2703f] opacity-20 font-serif leading-none">&ldquo;</div>
                  <p className="text-base md:text-lg italic text-[#c2703f] leading-relaxed relative z-10 mb-3">
                    The private key is the asset. Any architecture where a full private key exists — even transiently, even in hardware — has a single point of cryptographic failure. MPC's value proposition is not that it distributes risk. It is that it eliminates the key as a singular attack target entirely.
                  </p>
                  <cite className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268] not-italic">— Design principle, institutional custody engineering</cite>
                </div>
              </div>
            </section>

            {/* Section 3: MPC-CMP */}
            <section id="mpc-cmp">
              <div className="mb-10 pb-6 border-b border-[#ddd0b2]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268] mb-3">03 · Protocol</div>
                <h2 className="font-display text-xl md:text-[26px] font-bold text-[#201c14] mb-4 leading-snug">
                  The MPC-CMP Protocol: How Modern MPC Signing Works
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  The cryptographic engine underneath modern institutional MPC custody is typically an implementation of <strong className="text-[#201c14]">MPC-CMP</strong> (Multi-Party Computation for ECDSA, CMP variant), published by Ran Canetti, Rosario Gennaro, Steven Goldfeder, Nikolaos Makriyannis, and Udi Peled in 2020. MPC-CMP replaced earlier ECDSA threshold protocols that required a preprocessing round and were vulnerable to certain abort attacks.
                </p>

                <h3 className="text-lg font-bold text-[#201c14] mt-10 mb-4">Key Generation (Distributed Key Generation — DKG)</h3>
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  The protocol begins with distributed key generation: a process by which <em>n</em> parties jointly compute a public key and receive individual secret shares — without any party or external coordinator ever seeing the full private key. The DKG procedure in MPC-CMP uses Feldman's verifiable secret sharing, ensuring that each party's share is consistent with the others and that the resulting public key is verifiable without revealing the private key.
                </p>

                <div className="bg-[#fbf7ee] border border-[#ddd0b2] rounded-xl overflow-hidden my-8">
                  <div className="flex items-center gap-2 px-5 py-3 border-b border-[#ddd0b2] bg-[rgba(32,28,20,0.02)]">
                    <span className="w-3 h-3 rounded-full bg-[#b0432f]" />
                    <span className="w-3 h-3 rounded-full bg-[#b98a3d]" />
                    <span className="w-3 h-3 rounded-full bg-[#74805e]" />
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268] ml-2">Protocol · MPC-CMP DKG — Distributed Key Generation</span>
                  </div>
                  <pre className="p-5 text-[13px] leading-relaxed overflow-x-auto text-[#5c5644] font-mono">
{`// n parties jointly generate keypair. No party sees sk.
// Feldman VSS + Schnorr commitment scheme

Round 1  →  Each party Pᵢ samples secret sᵢ ← ℤₙ
           Commits to polynomial fᵢ(x) where fᵢ(0) = sᵢ
           Broadcasts Pedersen commitment Cᵢ + Schnorr proof

Round 2  →  Each Pᵢ sends share fᵢ(j) to party Pⱼ (encrypted)
           Parties verify shares against commitments
           Abort if verification fails → reshare with honest parties

Output   →  Party Pᵢ holds secret share xᵢ = Σⱼ fⱼ(i) mod n
           Public key pk = g^(Σ xᵢ) is known to all
           sk = Σ xᵢ is NEVER assembled by any party`}
                  </pre>
                </div>

                <h3 className="text-lg font-bold text-[#201c14] mt-10 mb-4">Threshold Signing — The CMP Improvement</h3>
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  The signing protocol in MPC-CMP achieves ECDSA threshold signing in <strong className="text-[#201c14]">4 rounds</strong> (reduced from earlier protocols requiring preprocessing). The key innovation is the use of Paillier encryption for the randomness multiplication step — the part of ECDSA generation that previously required either a trusted dealer or expensive zero-knowledge proofs.
                </p>

                <div className="bg-[#fbf7ee] border border-[#ddd0b2] rounded-xl overflow-hidden my-8">
                  <div className="flex items-center gap-2 px-5 py-3 border-b border-[#ddd0b2] bg-[rgba(32,28,20,0.02)]">
                    <span className="w-3 h-3 rounded-full bg-[#b0432f]" />
                    <span className="w-3 h-3 rounded-full bg-[#b98a3d]" />
                    <span className="w-3 h-3 rounded-full bg-[#74805e]" />
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268] ml-2">Protocol · MPC-CMP Signing — t-of-n Threshold Signing</span>
                  </div>
                  <pre className="p-5 text-[13px] leading-relaxed overflow-x-auto text-[#5c5644] font-mono">
{`// t parties (of n) sign message m without exposing key shares
// Paillier homomorphic encryption used for nonce multiplication

Round 1  →  Each signer samples nonce share kᵢ, γᵢ ← ℤₙ
           Broadcasts Paillier encryption: Enc(kᵢ), Enc(γᵢ)
           Commits to elliptic curve points Γᵢ = γᵢ·G

Round 2  →  Parties compute MtA (Multiplicative-to-Additive) shares
           kᵢ · γⱼ computed via Paillier without revealing kᵢ or γⱼ
           ZK proofs verify correct Paillier computation

Round 3  →  Parties reveal Γᵢ, compute R = k⁻¹·G
           Each party computes partial signature σᵢ
           Broadcasts σᵢ with ZK consistency proof

Output   →  Any party aggregates: σ = Σ σᵢ mod n
           ECDSA signature (r, s) is valid for pk over m
           No party's key share xᵢ was ever revealed`}
                  </pre>
                </div>

                <h3 className="text-lg font-bold text-[#201c14] mt-10 mb-4">Proactive Secret Sharing and Key Refresh</h3>
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  MPC-CMP supports <strong className="text-[#201c14]">proactive secret sharing</strong>: periodic refresh of all key shares such that the new shares are mathematically unrelated to the old ones (while the underlying key remains unchanged). This is critical for institutional security: key shares exfiltrated before a refresh are useless after it. Production systems should run proactive refresh on a schedule — daily or weekly for hot wallets, monthly for warm, on-demand for cold.
                </p>
              </div>
            </section>

            {/* Section 4: HSM Integration */}
            <section id="hsm-integration">
              <div className="mb-10 pb-6 border-b border-[#ddd0b2]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268] mb-3">04 · Hardware</div>
                <h2 className="font-display text-xl md:text-[26px] font-bold text-[#201c14] mb-4 leading-snug">
                  HSM Integration: Anchoring MPC in Hardware Trust
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  MPC alone is a cryptographic protocol running on general-purpose compute. Without hardware roots of trust, the security boundary of each MPC node extends to the entire software stack — operating system, hypervisor, cloud provider infrastructure, and every library in the dependency chain. <strong className="text-[#201c14]">Hardware Security Modules (HSMs)</strong> establish a hardware-enforced boundary within which key material cannot be extracted regardless of software compromise.
                </p>

                <div className="bg-[#fbf7ee] border border-[#ddd0b2] rounded-xl overflow-hidden my-8 p-6 font-mono text-[13px] leading-relaxed text-[#5c5644]">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#c2703f] block mb-4">// HSM-Anchored MPC Node Architecture</span>
                  <div className="text-center mb-2">
                    <span className="inline-block border border-[rgba(184,146,42,0.4)] px-4 py-2 text-[#93aab8]">Policy Engine / Transaction Authorisation</span>
                  </div>
                  <div className="text-center text-[rgba(184,146,42,0.6)] my-1">│</div>
                  <div className="text-center mb-2">
                    <span className="inline-block border border-[#ddd0b2] px-4 py-2 text-[#5c5644]">MPC Protocol Runtime (userspace)</span>
                  </div>
                  <div className="text-center text-[rgba(184,146,42,0.6)] my-1">│  PKCS#11 / vendor API</div>
                  <div className="text-center mb-2">
                    <span className="inline-block border border-[rgba(184,146,42,0.4)] px-4 py-2 text-[#b98a3d]">HSM Boundary</span>
                  </div>
                  <div className="text-center flex justify-center gap-2 mb-2">
                    <span className="inline-block border border-[#74805e] px-3 py-1 text-[#8fa077] text-[12px]">Key Share Storage</span>
                    <span className="inline-block border border-[#74805e] px-3 py-1 text-[#8fa077] text-[12px]">Crypto Engine</span>
                    <span className="inline-block border border-[#74805e] px-3 py-1 text-[#8fa077] text-[12px]">Attestation / RNG</span>
                  </div>
                  <div className="text-center text-[rgba(147,170,184,0.35)] text-[11px] mt-3">
                    FIPS 140-2 Level 3 / CC EAL4+ · Tamper-responsive enclosure · Zeroisation on attack
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#201c14] mt-10 mb-4">HSM Selection Criteria for MPC Nodes</h3>
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  Not all HSMs are equal, and the MPC use case creates specific requirements that differ from traditional HSM deployments:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
                  <div className="bg-[#fbf7ee] border border-[#ddd0b2] rounded-xl p-6">
                    <h4 className="text-[10px] font-mono tracking-widest uppercase text-[#c2703f] mb-4">Required Capabilities</h4>
                    <ul className="space-y-3">
                      {[
                        "FIPS 140-2 Level 3 minimum — Level 4 preferred for tier-1 cold signing nodes",
                        "Custom firmware support — MPC protocol primitives may need to run inside the HSM boundary",
                        "High-throughput ECDSA — signing throughput measured in operations per second",
                        "Remote attestation — ability to cryptographically prove firmware integrity to remote verifiers",
                      ].map((item, i) => (
                        <li key={i} className="text-[13px] text-[#5c5644] leading-relaxed flex items-start gap-2">
                          <span className="text-[#c2703f] mt-1 shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#fbf7ee] border border-[#ddd0b2] rounded-xl p-6">
                    <h4 className="text-[10px] font-mono tracking-widest uppercase text-[#b98a3d] mb-4">Vendor Landscape</h4>
                    <ul className="space-y-3">
                      {[
                        "Thales Luna Network HSM — dominant in banking; excellent PKCS#11 support; used in Fireblocks node infrastructure",
                        "Utimaco SecurityServer — strong European regulatory track record; BaFin/ECB compliance",
                        "AWS CloudHSM / Azure Dedicated HSM — cloud-native; limited custom firmware options",
                        "Ledger Vault (enterprise) — purpose-built for crypto; strong UX for governance workflows",
                      ].map((item, i) => (
                        <li key={i} className="text-[13px] text-[#5c5644] leading-relaxed flex items-start gap-2">
                          <span className="text-[#b98a3d] mt-1 shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-[rgba(147,170,184,0.06)] border border-[rgba(147,170,184,0.15)] rounded-xl p-6 md:p-8">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#93aab8] mb-3">The Cloud HSM Tradeoff</div>
                  <p className="text-sm text-[#5c5644] leading-relaxed">
                    Cloud-hosted HSMs offer operational convenience and elastic scalability, but introduce a dependency on cloud provider infrastructure integrity. For tier-1 cold storage, dedicated on-premise HSMs in physically controlled facilities remain the gold standard. Cloud HSMs are appropriate for warm and hot tiers where the tradeoff between convenience and absolute security has already been made.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Key Ceremony */}
            <section id="key-ceremony">
              <div className="mb-10 pb-6 border-b border-[#ddd0b2]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268] mb-3">05 · Operations</div>
                <h2 className="font-display text-xl md:text-[26px] font-bold text-[#201c14] mb-4 leading-snug">
                  Key Ceremony Design: The Most Critical Operational Moment
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  The key ceremony — the procedure by which the distributed key generation protocol is executed to create a new custody key — is the single most consequential operational event in a custody firm's lifecycle. A ceremony executed correctly creates a key whose security is mathematically guaranteed by the MPC protocol. A ceremony with procedural flaws can create attack vectors that persist for the lifetime of the key.
                </p>

                <div className="my-10 border border-[#ddd0b2] rounded-xl overflow-hidden">
                  {[
                    { num: "I", title: "Pre-Ceremony Planning & Participant Selection", desc: "Define the threshold scheme (t-of-n). Designate signing nodes and their operators — ensuring geographic separation, organisational independence, and background-checked personnel. Document the governance policy. Establish secure communication channels. Engage independent ceremony observers for audit purposes." },
                    { num: "II", title: "Environment Preparation & Verification", desc: "Each signing node must be provisioned, its firmware verified against published hashes, and its HSM initialised with tamper-evident seals verified by independent witnesses. Software on ceremony machines should be built from audited source. Network isolation — no internet connectivity during key generation; air-gapped machines preferred for cold tier ceremonies." },
                    { num: "III", title: "Distributed Key Generation Execution", desc: "The DKG protocol runs across all n nodes simultaneously. Each node generates its entropy, commits to its polynomial, exchanges encrypted shares, verifies received shares, and outputs its key share to HSM-protected storage. No node should output its share to any medium other than the designated HSM. The resulting public key is extracted and verified by all participants." },
                    { num: "IV", title: "Verification & Test Signing", desc: "A test signing round is executed with the new key: a transaction to a dust address is constructed, signed by the minimum required threshold, and broadcast to mainnet. Successful confirmation proves the key is valid. The public key's derivation path is recorded and independently verified. All ceremony logs, hashes, and participant attestations are collected and archived." },
                    { num: "V", title: "Backup Share Distribution & Recovery Documentation", desc: "Encrypted backup shares are distributed to geographically and organisationally separate custodians. Recovery procedures are documented in detail: who holds which backup share, under what governance conditions they may be used, what verification is required before reconstruction, and how the recovered key is reintegrated into live infrastructure." },
                  ].map((phase) => (
                    <div key={phase.num} className="grid grid-cols-[72px_1fr] sm:grid-cols-[72px_1fr] border-b border-[#ddd0b2] last:border-0">
                      <div className="bg-[#ece1cc] flex items-center justify-center text-2xl italic text-[#c2703f] font-serif border-r border-[#ddd0b2]">
                        {phase.num}
                      </div>
                      <div className="p-6 bg-[#fbf7ee]">
                        <h4 className="text-[10px] font-mono tracking-widest uppercase text-[#c2703f] mb-3">{phase.title}</h4>
                        <p className="text-[13px] text-[#5c5644] leading-relaxed">{phase.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 6: Disaster Recovery */}
            <section id="disaster-recovery">
              <div className="mb-10 pb-6 border-b border-[#ddd0b2]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268] mb-3">06 · Resilience</div>
                <h2 className="font-display text-xl md:text-[26px] font-bold text-[#201c14] mb-4 leading-snug">
                  Disaster Recovery Architecture: Designing for the Unthinkable
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  Disaster recovery in custody is not a single procedure — it is a tiered set of procedures corresponding to failure scenarios of different severity. A firm that plans only for "one node goes down" has not planned for disaster recovery. True DR planning must include scenarios that no individual within the organisation wants to contemplate: simultaneous destruction of multiple facilities, death or incapacitation of key personnel, catastrophic infrastructure failure, and hostile legal actions in multiple jurisdictions.
                </p>

                <div className="overflow-x-auto my-10">
                  <table className="w-full text-[13px] border-collapse">
                    <thead>
                      <tr className="border-b border-[#ddd0b2]">
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#c2703f]">Scenario</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#c2703f]">Recovery Mechanism</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#c2703f]">RTO Target</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#c2703f]">Governance Required</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Single node failure", "Automatic failover to standby node with pre-provisioned key share replica", "< 30 seconds", "None — automated"],
                        ["Majority node failure", "Cold backup key shares activated; new signing quorum assembled", "4–24 hours", "Senior operations + compliance sign-off"],
                        ["Full infrastructure loss", "Shamir backup shares reconstructed by designated trustees; assets swept to new key", "24–72 hours", "Board-level approval + independent trustee coordination"],
                        ["Key share compromise", "Immediate key refresh; compromised node isolated; audit initiated", "1–4 hours", "CISO + external security firm engagement"],
                        ["Firm dissolution / insolvency", "Client assets swept via court-appointed trustee using escrowed backup shares", "Days to weeks", "Legal process + independent trustee"],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-[#ddd0b2]/60 hover:bg-[rgba(194,112,63,0.03)] transition-colors">
                          <td className="py-3 px-4 text-[#201c14] font-medium text-[13px]">{row[0]}</td>
                          <td className="py-3 px-4 text-[#5c5644]">{row[1]}</td>
                          <td className="py-3 px-4 text-[#5c5644]">{row[2]}</td>
                          <td className="py-3 px-4 text-[#5c5644]">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-[rgba(147,170,184,0.06)] border border-[rgba(147,170,184,0.15)] rounded-xl p-6 md:p-8">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#93aab8] mb-3">The Trustee Independence Problem</div>
                  <p className="text-sm text-[#5c5644] leading-relaxed">
                    The most difficult DR scenario — firm dissolution — requires backup shares to be held by parties who are completely independent of the custody firm, yet bound by contractual and fiduciary obligations to clients. This is not purely a technical problem. It requires legal agreements, regulatory approval in the applicable jurisdictions, and trustees who themselves have robust custody infrastructure. Regulated trust companies, law firms with specific crypto mandates, and purpose-built independent trustee services all serve this function — each with distinct risk profiles and regulatory implications.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Fireblocks */}
            <section id="fireblocks">
              <div className="mb-10 pb-6 border-b border-[#ddd0b2]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268] mb-3">07 · Case Study</div>
                <h2 className="font-display text-xl md:text-[26px] font-bold text-[#201c14] mb-4 leading-snug">
                  Fireblocks Architecture Teardown
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  Fireblocks represents the dominant institutional MPC custody infrastructure provider, with over 1,800 institutional clients and $4 trillion in annualised transfer volume. Its architecture makes specific engineering choices that reflect its target market — active trading institutions requiring high-throughput, low-latency signing across hundreds of blockchains.
                </p>

                <h3 className="text-lg font-bold text-[#201c14] mt-10 mb-4">The MPC-CMP Implementation</h3>
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  Fireblocks implements MPC-CMP with a <strong className="text-[#201c14]">2-of-3 default threshold scheme</strong>: one share held by the Fireblocks cloud infrastructure, one by the client's mobile device (protected by the device's secure enclave), and one in cold backup storage. This design creates a specific security model: any signing operation requires Fireblocks infrastructure cooperation, which is simultaneously its primary security guarantee and its primary regulatory concern.
                </p>

                <div className="bg-[#fbf7ee] border border-[#ddd0b2] rounded-xl overflow-hidden my-8 p-6 font-mono text-[13px] leading-relaxed text-[#5c5644]">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#c2703f] block mb-4">// Fireblocks Three-Share Architecture (Simplified)</span>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="text-center">
                      <span className="inline-block border border-[#ddd0b2] px-3 py-2 text-[#5c5644] text-[12px] w-full">Fireblocks SGX Enclave<br/><span className="text-[rgba(147,170,184,0.4)] text-[11px]">Cloud · Always available<br/>Share [1 of 3]</span></span>
                    </div>
                    <div className="text-center">
                      <span className="inline-block border border-[rgba(184,146,42,0.4)] px-3 py-2 text-[#b98a3d] text-[12px] w-full">Client Mobile / HSM<br/><span className="text-[rgba(184,146,42,0.6)] text-[11px]">iOS Secure Enclave<br/>Share [2 of 3]</span></span>
                    </div>
                    <div className="text-center">
                      <span className="inline-block border border-[#ddd0b2] px-3 py-2 text-[#5c5644] text-[12px] w-full">Cold Backup Share<br/><span className="text-[rgba(147,170,184,0.4)] text-[11px]">Encrypted · Offline<br/>Share [3 of 3]</span></span>
                    </div>
                  </div>
                  <div className="text-center text-[rgba(184,146,42,0.5)] text-[11px]">
                    2-of-3 required to sign · Fireblocks always participates in hot-path signing
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#201c14] mt-10 mb-4">Intel SGX as Software HSM</h3>
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  Fireblocks uses <strong className="text-[#201c14]">Intel SGX (Software Guard Extensions)</strong> as the hardware root of trust for its cloud-hosted key share, rather than traditional HSMs. SGX enclaves provide memory encryption and attestation — code running inside an enclave cannot be inspected by the host OS, hypervisor, or cloud provider. This is a pragmatic choice for a cloud-native architecture.
                </p>
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  The tradeoff is that SGX has a documented history of side-channel vulnerabilities (Spectre, Meltdown, Plundervolt, SGAxe) that have periodically allowed enclave memory to be read by local attackers. Fireblocks mitigates this through SGX mitigations, regular patching, and the structural guarantee that the SGX share alone is insufficient to sign — but it represents a genuine divergence from the physical tamper-resistance model of FIPS 140-2 Level 3 HSMs.
                </p>

                <h3 className="text-lg font-bold text-[#201c14] mt-10 mb-4">Policy Engine and Network Architecture</h3>
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  Fireblocks operates a dedicated <strong className="text-[#201c14]">Fireblocks Network</strong> — a permissioned network for inter-institution transfers that allows direct asset movement between Fireblocks clients without on-chain settlement, settling net positions periodically. The policy engine supports complex governance rules: withdrawal limits by asset and amount, whitelisted destination addresses, multi-approver workflows with biometric authentication, and time-lock conditions. These policy rules are enforced at the MPC signing layer — a transaction that violates policy cannot be signed, not merely rejected at the application layer.
                </p>
              </div>
            </section>

            {/* Section 8: Anchorage */}
            <section id="anchorage">
              <div className="mb-10 pb-6 border-b border-[#ddd0b2]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268] mb-3">08 · Case Study</div>
                <h2 className="font-display text-xl md:text-[26px] font-bold text-[#201c14] mb-4 leading-snug">
                  Anchorage Architecture Teardown
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  Anchorage Digital, the first federally chartered digital asset bank in the United States (OCC charter, 2021), represents a fundamentally different architectural philosophy from Fireblocks: rather than a software-first MPC platform with cloud HSMs, Anchorage is built around physical infrastructure designed to satisfy the most stringent banking regulators in the world.
                </p>

                <h3 className="text-lg font-bold text-[#201c14] mt-10 mb-4">The Biometric-MPC Hybrid Model</h3>
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  Anchorage's signature architectural innovation is the integration of <strong className="text-[#201c14]">biometric authentication directly into the MPC signing quorum</strong>. Rather than relying solely on device possession, Anchorage requires biometric verification (fingerprint or face) from designated human approvers, whose biometric data is stored in an on-device secure enclave and never transmitted to Anchorage's servers. The biometric verification unlocks the approver's key share for the duration of the signing session only.
                </p>
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  This architecture satisfies a specific regulatory requirement: <strong className="text-[#201c14]">human intentionality in the signing process</strong>. A rogue automated system cannot satisfy the biometric threshold without physical human cooperation — directly addressing the coercion and rogue employee scenarios that concern banking regulators most acutely.
                </p>

                <h3 className="text-lg font-bold text-[#201c14] mt-10 mb-4">Physical Infrastructure and Regulatory Design</h3>
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  As a nationally chartered bank, Anchorage's custody infrastructure is designed to satisfy <strong className="text-[#201c14]">OCC Handbook</strong> requirements for custodial services, <strong className="text-[#201c14]">NIST SP 800-57</strong> key management standards, and the examination expectations of federal bank examiners. This creates a design constraint that differs fundamentally from non-bank MPC vendors: every component must be documentable, examinable, and explainable to a non-technical regulatory audience.
                </p>
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  Concretely, this means: physical HSMs in OCC-examinable facilities rather than cloud SGX enclaves; documented key ceremonies with notarised witness attestations; explicit chains of custody for all cryptographic material; and signing workflows that map to traditional banking dual-control concepts that regulators already understand.
                </p>
              </div>
            </section>

            {/* Section 9: Governance */}
            <section id="governance">
              <div className="mb-10 pb-6 border-b border-[#ddd0b2]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268] mb-3">09 · Governance</div>
                <h2 className="font-display text-xl md:text-[26px] font-bold text-[#201c14] mb-4 leading-snug">
                  Policy Engine and Governance Layer Design
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  The cryptographic layer — MPC signing, HSM protection — solves the key security problem. The governance layer solves the authorisation problem: even if an attacker cannot steal a key, they may be able to manipulate the signing process into authorising a fraudulent transaction. A well-designed policy engine makes the signing infrastructure useless to an attacker who has not also compromised the governance layer.
                </p>

                <div className="bg-[rgba(194,112,63,0.06)] border border-[rgba(194,112,63,0.15)] rounded-xl p-6 md:p-8">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#c2703f] mb-3">Governance Layer Requirements Checklist</div>
                  <div className="space-y-3">
                    {[
                      "Role-based access control with principle of least privilege at the operation level, not the account level.",
                      "Transaction limits by asset, amount, destination, and time window.",
                      "Mandatory destination address whitelisting with time-locked addition of new addresses.",
                      "Multi-approver workflows with quorum configuration per policy tier.",
                      "Out-of-band approval notification (separate channel from the transaction initiation channel).",
                      "Immutable audit log of all approval actions, exported to external SIEM in real time.",
                      "Automatic escalation for out-of-policy transactions — not rejection, but human review queue.",
                      "Configurable cooling-off periods for large withdrawals.",
                      "Geographic and time-of-day restrictions for sensitive operations.",
                    ].map((item, i) => (
                      <p key={i} className="text-[13px] text-[#5c5644] leading-relaxed flex items-start gap-3">
                        <span className="text-[#c2703f] font-mono text-[10px] mt-1 shrink-0">[{String(i + 1).padStart(2, "0")}]</span>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10: Recommendations */}
            <section id="recommendations">
              <div className="mb-10 pb-6 border-b border-[#ddd0b2]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268] mb-3">10 · Strategy</div>
                <h2 className="font-display text-xl md:text-[26px] font-bold text-[#201c14] mb-4 leading-snug">
                  Architecture Recommendations by Firm Profile
                </h2>
              </div>
              <div className="space-y-6">
                <div className="overflow-x-auto my-10">
                  <table className="w-full text-[13px] border-collapse">
                    <thead>
                      <tr className="border-b border-[#ddd0b2]">
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#c2703f]">Firm Profile</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#c2703f]">Recommended Architecture</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#c2703f]">Key Considerations</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Exchange / Trading Platform\nHigh volume, hot wallet dominant", "Fireblocks or proprietary MPC-CMP on cloud SGX with dedicated network HSMs for cold tier. 2-of-3 hot, 3-of-5 warm, 4-of-7 cold.", "Prioritise throughput and latency on hot path. Rigorous whitelisting on cold path. Dedicated operational security team."],
                        ["Qualified Custodian / Trust Company\nRegulatory-first, client segregation", "Anchorage-style physical HSM infrastructure or licensed Anchorage partnership. Per-client key isolation. OCC/state trust charter alignment.", "Regulatory examination readiness is the primary driver. Every design decision must be documentable to a non-technical examiner."],
                        ["Fund Manager / Family Office\nSelf-custody preference, lower volume", "3-of-5 MPC with two internal signers, one external trustee, and two cold backup shares. Hardware key shares (Ledger Enterprise or equivalent).", "Disaster recovery with trustee independence is paramount. Prioritise backup share custody and recovery testing over throughput."],
                        ["Protocol Treasury / DAO\nDecentralisation as governance feature", "Gnosis Safe multisig on-chain (transparency as governance) with individual signers using hardware wallets. MPC available as an alternative.", "On-chain transparency of multisig structure may be a feature, not a bug. Community auditability of treasury governance outweighs privacy concerns."],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-[#ddd0b2]/60 hover:bg-[rgba(194,112,63,0.03)] transition-colors">
                          <td className="py-3 px-4 text-[#201c14] font-medium text-[13px] whitespace-pre-line">{row[0]}</td>
                          <td className="py-3 px-4 text-[#5c5644]">{row[1]}</td>
                          <td className="py-3 px-4 text-[#5c5644]">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="bg-[#fbf7ee] border border-[#ddd0b2] rounded-2xl p-10 md:p-14">
              <div className="text-[10px] font-mono tracking-widest uppercase text-[#c2703f] mb-4">Conclusion</div>
              <h2 className="font-display text-xl md:text-[26px] font-bold text-[#201c14] mb-6">
                The Architecture Is Never Finished
              </h2>
              <div className="space-y-4 max-w-[800px]">
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  Institutional custody architecture is not a problem that gets solved at deployment and then maintained. The cryptographic threat landscape evolves — <strong className="text-[#201c14]">post-quantum migration</strong> (NIST's ML-DSA and ML-KEM standards) will require complete key architecture redesign within this decade. The regulatory landscape evolves — the OCC, ECB, MAS, and DFSA are all actively developing custody-specific guidance. The operational landscape evolves — key personnel leave, vendors are acquired, infrastructure providers change their terms.
                </p>
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  What distinguishes genuinely institutional-grade custody from custody-adjacent technology is not the sophistication of any individual component but the coherence of the whole: a cryptographic foundation (MPC-CMP on hardware-rooted nodes) that eliminates single points of failure; a governance layer that makes the signing infrastructure useless to an attacker who lacks legitimate authorisation; a disaster recovery framework that has been tested, documented, and explained to regulators; and an operational security culture that treats key ceremony discipline and proactive refresh as core business functions.
                </p>
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  The firms that get this right will hold digital assets safely for decades. The ones that mistake a vendor integration for a custody architecture will discover the difference at the worst possible moment.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <div className="max-w-[1200px] mx-auto px-6">
              <FaqSection
                headline="Institutional Custody FAQs"
                items={[
                  {
                    question: "What is MPC custody, and how does it differ from traditional multisig?",
                    answer: "MPC (Multi-Party Computation) custody uses threshold signature schemes to distribute key shares across multiple parties such that no full private key ever exists. Traditional multisig requires N independent private keys, with M-of-N signatures needed to spend. MPC is chain-agnostic, hides the threshold configuration on-chain, supports proactive key refresh, and eliminates smart contract risk — making it the preferred architecture for institutional custodians.",
                  },
                  {
                    question: "Why do institutional firms prefer TSS over on-chain multisig?",
                    answer: "TSS/MPC offers four advantages institutions value: (1) no on-chain disclosure of custody structure, reducing attack surface; (2) chain-agnostic operation across hundreds of blockchains; (3) proactive key refresh without address migration; and (4) no smart contract risk. On-chain multisig retains a role for DeFi treasuries where transparency is a governance feature, but for regulated custodians, TSS is the consensus choice.",
                  },
                  {
                    question: "What is the role of HSMs in digital asset custody?",
                    answer: "Hardware Security Modules establish a hardware-enforced boundary for key material. Even if the operating system, hypervisor, or cloud provider is compromised, keys inside a FIPS 140-2 Level 3 HSM cannot be extracted. In MPC custody, each node holds its key share inside an HSM, meaning an attacker must simultaneously compromise multiple HSMs across different jurisdictions to reconstruct the key — a dramatically harder problem than software-only key storage.",
                  },
                  {
                    question: "How does Fireblocks' architecture differ from Anchorage's?",
                    answer: "Fireblocks is a software-first, cloud-native MPC platform using Intel SGX enclaves as its hardware root of trust. It prioritises throughput, multi-chain support, and rapid onboarding — ideal for trading institutions. Anchorage is a federally chartered digital asset bank built around physical HSMs, biometric-MPC hybrid signing, and OCC-examinable facilities. It prioritises regulatory compliance, human intentionality in signing, and examination readiness — ideal for qualified custodians and trust companies.",
                  },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Post Footer */}
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="border-t border-[#ddd0b2] pt-10 flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-[11px] font-mono text-[#8a8268] tracking-wider">
              Designing Institutional-Grade Custody Architecture · May 2026
            </p>
            <p className="text-[11px] font-mono text-[#8a8268] tracking-wider">
              Infrastructure analysis for builders · Not financial advice
            </p>
          </div>
        </div>

        {/* Related Reading */}
        <div className="max-w-[1200px] mx-auto px-6 pb-24">
          <RelatedReading
            posts={[
              {
                slug: "layer1-scaling",
                title: "Layer-1 Scaling: Beyond TPS Metrics",
                category: "Blockchain",
                excerpt: "Why throughput alone doesn't tell the full story — and what really matters when evaluating blockchain infrastructure.",
              },
              {
                slug: "stablecoin-architecture",
                title: "Designing Compliant Stablecoin Architectures",
                category: "Stablecoins",
                excerpt: "Technical and regulatory considerations for building stablecoin systems that work within existing financial frameworks.",
              },
              {
                slug: "rwa-tokenization",
                title: "Real-World Asset Tokenization: A Practical Guide",
                category: "Tokenization",
                excerpt: "From legal structures to smart contract implementation — how to tokenize real assets in a compliant manner.",
              },
            ]}
          />
        </div>
      </article>

      <Footer />
    </>
  );
}
