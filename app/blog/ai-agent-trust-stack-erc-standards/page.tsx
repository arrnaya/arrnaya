import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";
import FaqSection from "../../components/FaqSection";
import RelatedReading from "../../components/RelatedReading";
import { blogPostingSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title:
    "The Trust Stack: How ERC-7662, ERC-7857, ERC-8126 & ERC-8196 Give Anonymous AI Agents On-Chain Credibility | Arrnaya Blog",
  description:
    "A practitioner's deep dive into the emerging ERC standard stack for autonomous AI agents — ERC-7662 and ERC-7857 for agent identity and IP ownership, ERC-8126 for multi-dimensional verification and risk scoring, and ERC-8196 for policy-bound execution. How these standards replace blind trust in anonymous agents with cryptographically verifiable, policy-driven execution.",
  keywords: [
    "ERC-7662",
    "ERC-7857",
    "ERC-8126",
    "ERC-8196",
    "ERC-8004",
    "AI agent NFT",
    "agentic wallet",
    "autonomous agent verification",
    "policy-driven execution",
    "AI agent risk scoring",
    "on-chain AI agent identity",
    "trustless agents Ethereum",
    "agent wallet policy",
    "EIP-712 agent policy",
    "TEE ZKP data transfer",
    "AI agent audit trail",
    "agent delegation blockchain",
    "hosting trust trap",
    "account abstraction AI agents",
    "decentralized AI trust infrastructure",
  ],
  authors: [{ name: "Arrnaya" }],
  openGraph: {
    type: "article",
    title:
      "The Trust Stack: How ERC-7662, ERC-7857, ERC-8126 & ERC-8196 Give Anonymous AI Agents On-Chain Credibility",
    description:
      "A practitioner's deep dive into the ERC standard stack for autonomous AI agents — identity, IP ownership, verification, and policy-bound execution.",
    publishedTime: "2026-08-17",
    tags: [
      "AI Agents",
      "Blockchain",
      "ERC-7662",
      "ERC-7857",
      "ERC-8126",
      "ERC-8196",
      "ERC-8004",
      "Ethereum Standards",
      "Agentic Wallets",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Trust Stack: How ERC-7662, ERC-7857, ERC-8126 & ERC-8196 Give Anonymous AI Agents On-Chain Credibility",
    description:
      "A practitioner's deep dive into the ERC standard stack for autonomous AI agents — identity, IP ownership, verification, and policy-bound execution.",
  },
};

const toc = [
  { id: "anonymity-problem", label: "The Anonymity Problem" },
  { id: "trust-stack-overview", label: "The Four-Layer Trust Stack" },
  { id: "erc-7662-agent-nfts", label: "ERC-7662 — AI Agents as Ownable NFTs" },
  { id: "erc-7857-private-metadata", label: "ERC-7857 — Verifiable Private Transfer" },
  { id: "erc-8126-verification", label: "ERC-8126 — Verification & Risk Scoring" },
  { id: "erc-8196-policy-execution", label: "ERC-8196 — Policy-Bound Execution" },
  { id: "composing-the-stack", label: "Composing the Stack" },
  { id: "failure-modes", label: "Failure Modes" },
  { id: "roadmap", label: "Implementation Roadmap" },
  { id: "conclusion", label: "Conclusion" },
];

const linkCls =
  "text-[#06b6d4] hover:text-[#a855f7] transition-colors underline underline-offset-4";

export default function BlogPost() {
  return (
    <>
      <JsonLd
        data={blogPostingSchema({
          headline:
            "The Trust Stack: How ERC-7662, ERC-7857, ERC-8126 & ERC-8196 Give Anonymous AI Agents On-Chain Credibility",
          description:
            "A practitioner's deep dive into the emerging ERC standard stack for autonomous AI agents — ERC-7662 and ERC-7857 for agent identity and IP ownership, ERC-8126 for multi-dimensional verification and risk scoring, and ERC-8196 for policy-bound execution.",
          slug: "ai-agent-trust-stack-erc-standards",
          datePublished: "2026-08-17",
          keywords: [
            "ERC-7662",
            "ERC-7857",
            "ERC-8126",
            "ERC-8196",
            "ERC-8004",
            "AI agent NFT",
            "agentic wallet",
            "autonomous agent verification",
            "policy-driven execution",
            "on-chain AI agent identity",
          ],
        })}
      />
      <Navbar />

      <article className="pt-20">
        {/* Hero */}
        <header className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[#0f0524]" />
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#7c3aed] opacity-20 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#06b6d4] opacity-15 blur-[100px]" />
          <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] rounded-full bg-[#3b82f6] opacity-10 blur-[80px]" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 30%, rgba(168,85,247,0.4) 0px, rgba(168,85,247,0.4) 1px, transparent 1px),
                                radial-gradient(circle at 70% 20%, rgba(124,58,237,0.3) 0px, rgba(124,58,237,0.3) 1.5px, transparent 1.5px),
                                radial-gradient(circle at 40% 70%, rgba(6,182,212,0.35) 0px, rgba(6,182,212,0.35) 1px, transparent 1px),
                                radial-gradient(circle at 80% 60%, rgba(59,130,246,0.25) 0px, rgba(59,130,246,0.25) 1px, transparent 1px),
                                radial-gradient(circle at 15% 80%, rgba(124,58,237,0.3) 0px, rgba(124,58,237,0.3) 1.5px, transparent 1.5px),
                                radial-gradient(circle at 60% 50%, rgba(168,85,247,0.2) 0px, rgba(168,85,247,0.2) 2px, transparent 2px),
                                radial-gradient(circle at 90% 85%, rgba(6,182,212,0.3) 0px, rgba(6,182,212,0.3) 1px, transparent 1px),
                                radial-gradient(circle at 35% 15%, rgba(59,130,246,0.2) 0px, rgba(59,130,246,0.2) 1px, transparent 1px)`,
              backgroundSize:
                "250px 250px, 300px 300px, 200px 200px, 350px 350px, 280px 280px, 400px 400px, 220px 220px, 320px 320px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030308]" />

          <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-28 md:py-36">
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <span className="text-[11px] font-semibold tracking-wider uppercase px-4 py-2 rounded-full bg-[rgba(6,182,212,0.15)] text-[#06b6d4] border border-[rgba(6,182,212,0.25)] backdrop-blur-sm">
                AI · Blockchain · Agent Standards · Ethereum
              </span>
              <span className="text-[11px] text-[#94a3b8]">30 min read · Advanced</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-8">
              The Trust{" "}
              <span className="bg-gradient-to-r from-[#a855f7] to-[#06b6d4] bg-clip-text text-transparent">
                Stack
              </span>
              <br />
              How Four ERC Standards Give
              <br />
              Anonymous AI Agents On-Chain Credibility
            </h1>
            <p className="text-base md:text-lg text-[#94a3b8] max-w-[720px] leading-relaxed mb-10">
              Autonomous agents already sign transactions and move capital under pseudonymous wallets with no accountable operator behind them. ERC-7662, ERC-7857, ERC-8126, and ERC-8196 — layered on the ERC-8004 identity registry — are the emerging standard for replacing blind trust in those agents with cryptographically verifiable, policy-driven execution.
            </p>
            <div className="flex flex-wrap gap-6">
              {[
                { num: "4 + 1", label: "ERC-7662, 7857, 8126, 8196 — built on the ERC-8004 identity registry" },
                { num: "2 Layers", label: "Ownership & IP (7662/7857) + Verification & Execution (8126/8196)" },
                { num: "0 Identity", label: "Credibility anchored to proof and policy, not to who operates the agent" },
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
                    className="text-sm text-[#94a3b8] hover:text-[#06b6d4] transition-colors leading-relaxed flex items-start gap-3"
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
                AI agents already sign transactions, rebalance vaults, negotiate with other agents, and move stablecoins — most of them behind pseudonymous wallets, some fully autonomous, many built by teams no counterparty has ever verified. The industry has spent two years arguing about whether agents should be allowed to remain anonymous. That argument is largely moot: they already are, by construction. An externally owned account or a smart contract wallet carries no name, no jurisdiction, and no accountable legal entity attached to it. The real question is not how to de-anonymize agents. It is how to make an anonymous agent&apos;s on-chain behavior verifiable and boundable without ever needing to know who is behind it.
              </p>
              <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                Four Ethereum Request for Comment standards, submitted between 2024 and early 2026, converge on exactly that problem from four different angles. <a href="https://eips.ethereum.org/EIPS/eip-7662" target="_blank" rel="noopener noreferrer" className={linkCls}>ERC-7662</a> and <a href="https://eips.ethereum.org/EIPS/eip-7857" target="_blank" rel="noopener noreferrer" className={linkCls}>ERC-7857</a> treat an agent&apos;s prompts, memory, and model weights as ownable, tradeable, IP-protected assets. <a href="https://eips.ethereum.org/EIPS/eip-8126" target="_blank" rel="noopener noreferrer" className={linkCls}>ERC-8126</a> defines a multi-dimensional, independently checkable risk score for any registered agent. And <a href="https://eips.ethereum.org/EIPS/eip-8196" target="_blank" rel="noopener noreferrer" className={linkCls}>ERC-8196</a> turns that score into an enforceable, revocable, cryptographically bound execution policy — the layer that finally lets a user delegate capital to an agent without handing over a private key or trusting a hosting platform&apos;s good behavior.
              </p>
              <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                This is a technical field guide, not an investment thesis. It is written for protocol engineers, agent framework builders, and treasury architects who are evaluating whether — and how — to let an autonomous agent touch real capital. Every interface, struct, and function name below is taken directly from the published specifications, linked throughout so you can verify the source rather than take a blog&apos;s word for it.
              </p>
            </div>

            {/* Section 1 */}
            <section id="anonymity-problem">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">01 · Problem</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  The Anonymity Problem
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Pseudonymous humans and autonomous software agents look similar on a block explorer — both are just addresses — but they fail differently, and the standards stack in this article exists because of that difference. A human operating a pseudonymous wallet still faces a cost to spin up a new identity: time, reputation-building, and in the worst case a legal backstop that can eventually attach a real name to a persistent pattern of harmful behavior. An autonomous agent has none of that friction. Forking a new wallet and redeploying a model endpoint costs almost nothing, there is no natural rate limit on how many &quot;identities&quot; a single operator can spin up, and in most jurisdictions there is no legal person sitting behind the curtain to eventually hold accountable.
                </p>
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  There is a second, subtler difference. A human&apos;s intentions are relatively stable from one transaction to the next. An agent&apos;s behavior is probabilistic — the same system prompt, run twice, can produce two different actions, and under adversarial conditions a jailbreak or a prompt-injection attack can push a well-intentioned agent into a transaction its owner never authorized. Trusting an agent the way you&apos;d trust a known counterparty doesn&apos;t transfer cleanly, because there often isn&apos;t a stable &quot;who&quot; to trust in the first place — only a policy, a model, and a host that may or may not be faithfully relaying what the model actually decided.
                </p>

                <div className="bg-[rgba(6,182,212,0.06)] border border-[rgba(6,182,212,0.15)] rounded-xl p-6 md:p-8">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#06b6d4] mb-3">Working Definition</div>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    <strong className="text-[#f8fafc]">Policy-driven execution</strong> is on-chain action gated by a machine-checkable, cryptographically committed policy rather than by trust in an operator&apos;s stated intentions. It is the property the ERC-7662 / ERC-7857 / ERC-8126 / ERC-8196 stack is converging on — not agent trustworthiness in the human sense, but agent boundedness that can be checked by a smart contract in a single transaction.
                  </p>
                </div>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Most agent frameworks in production today handle this badly in one of two ways. Some hand the agent process a raw private key directly: fast to build, and catastrophic the moment a prompt-injection payload embedded in a webpage or a tool response convinces the model to emit a transfer instruction. Others route execution through a hosting platform that holds the key on the user&apos;s behalf: this removes the key from the agent&apos;s immediate reach, but replaces it with a new single point of failure — the host can now suppress outputs, delay requests, or simply misrepresent what the agent decided, and the user has no cryptographic way to prove what actually happened. ERC-8196 has a precise name for this second failure mode: the <strong className="text-[#f8fafc]">hosting trust trap</strong>.
                </p>

                <div className="my-10 pl-6 md:pl-8 border-l-[3px] border-[#a855f7] bg-[rgba(168,85,247,0.05)] rounded-r-lg p-6 md:p-8 relative">
                  <div className="absolute top-2 left-4 text-6xl text-[#a855f7] opacity-20 font-serif leading-none">&ldquo;</div>
                  <p className="text-base md:text-lg italic text-[#a855f7] leading-relaxed relative z-10 mb-3">
                    Anonymity was never the actual vulnerability in agentic systems. Unverifiable, unbounded delegation was — and until recently, the standards to fix that simply didn&apos;t exist.
                  </p>
                  <cite className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] not-italic">— On the Agent Trust Gap</cite>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="trust-stack-overview">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">02 · Architecture</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  The Four-Layer Trust Stack
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  No single EIP solves the anonymity-credibility problem. Five standards — four requested here plus the identity registry underneath them — stack cleanly into four functional layers, though none of the authors coordinated them into one master proposal. They converge because the problem decomposes the same way every time an engineer sits down to solve it: an agent needs to be discoverable and addressable, it needs to own the intellectual property that constitutes it, it needs to be independently checkable for risk, and it needs to be constrained in what it can actually do with capital.
                </p>

                <div className="overflow-x-auto my-10">
                  <table className="w-full text-[13px] border-collapse">
                    <thead>
                      <tr className="border-b border-[#1a1a2e]">
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#06b6d4]">Layer</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#06b6d4]">Standard</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#06b6d4]">Status</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#06b6d4]">Anchors</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#06b6d4]">Prevents</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Identity & Discovery", "ERC-8004", "Draft", "Global agentId (namespace + chainId + contract) and a registration URI", "Agents that can't be found, compared, or addressed consistently across apps"],
                        ["Asset & IP Ownership", "ERC-7662", "Draft", "Encrypted prompt/model reference bound to NFT ownership", "Prompt and IP theft; unverifiable claims about what a buyer is actually acquiring"],
                        ["Verifiable Data Transfer", "ERC-7857", "Final", "Cryptographic proof that agent memory/weights were actually re-encrypted and handed over", "Ownership transfers where the underlying data never really moves"],
                        ["Verification & Risk", "ERC-8126", "Final", "Five-dimension risk score anchored to agentId", "Interacting with an agent that has no independently checkable trust signal"],
                        ["Policy Execution", "ERC-8196", "Final", "Cryptographically bound spend/action policy referencing a live 8126 score", "Blind delegation, host key theft, unbounded agent action"],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-[#1a1a2e]/60 hover:bg-[rgba(6,182,212,0.03)] transition-colors">
                          <td className="py-3 px-4 text-[#f8fafc] font-medium text-[13px]">{row[0]}</td>
                          <td className="py-3 px-4 text-[#94a3b8] font-mono text-[12px]">{row[1]}</td>
                          <td className="py-3 px-4 text-[#94a3b8]">{row[2]}</td>
                          <td className="py-3 px-4 text-[#94a3b8]">{row[3]}</td>
                          <td className="py-3 px-4 text-[#ef4444]">{row[4]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-[rgba(245,158,11,0.06)] border border-[rgba(245,158,11,0.15)] rounded-xl p-6 md:p-8">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#f59e0b] mb-3">Standards Maturity Inversion</div>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    Both ERC-8126 and ERC-8196 formally list <a href="https://eips.ethereum.org/EIPS/eip-8004" target="_blank" rel="noopener noreferrer" className={linkCls}>EIP-8004</a> in their <code className="text-[#f8fafc]">Requires</code> field, and both have reached <strong className="text-[#f8fafc]">Final</strong> status. EIP-8004 itself remains <strong className="text-[#f8fafc]">Draft</strong>. In practice, the verification and execution layers of this stack standardized faster than the identity layer they formally depend on — worth knowing before you commit production infrastructure to the assumption that agentId resolution is a settled interface.
                  </p>
                </div>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  <a href="https://eips.ethereum.org/EIPS/eip-8004" target="_blank" rel="noopener noreferrer" className={linkCls}>ERC-8004, &quot;Trustless Agents,&quot;</a> is the connective tissue underneath everything that follows, so it is worth a paragraph even though it is not one of the four standards this article centers on. It defines three registries on top of ERC-721: an Identity Registry that assigns each agent a globally unique <code className="text-[#f8fafc]">agentId</code> combining namespace, chain ID, and contract address, whose <code className="text-[#f8fafc]">tokenURI</code> (called the agentURI) resolves to a JSON registration file with endpoints and supported trust models; a Reputation Registry where any client can submit numerical feedback signals; and a Validation Registry where independent validators — including ERC-8126 verification providers — can record auditable verification results. Every function name referenced in the sections below that takes an <code className="text-[#f8fafc]">agentId</code> parameter is, ultimately, resolving against this registry.
                </p>
              </div>
            </section>

            {/* Section 3 — ERC-7662 */}
            <section id="erc-7662-agent-nfts">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">03 · Identity &amp; IP</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  ERC-7662 — AI Agents as Ownable, IP-Protected NFTs
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  <a href="https://eips.ethereum.org/EIPS/eip-7662" target="_blank" rel="noopener noreferrer" className={linkCls}>ERC-7662</a> starts from a simple observation: for a large class of agents, the product is the prompt. A well-engineered system prompt, tool configuration, and model pairing represents real intellectual effort and is directly commercializable — but a vanilla ERC-721 with the prompt sitting in public token metadata defeats the entire business model the moment the token is listed, because anyone can read and clone it for free without buying anything.
                </p>

                <div className="bg-[#0a0a12] border border-[#1a1a2e] rounded-xl overflow-hidden my-8">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-[#1a1a2e] bg-[rgba(255,255,255,0.02)]">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748b]">IERC7662 — extends IERC721</span>
                  </div>
                  <pre className="p-5 text-[13px] leading-relaxed overflow-x-auto text-[#94a3b8]">
{`interface IERC7662 is IERC721 {
    function getAgentData(uint256 tokenId) external view returns (
        string memory name,
        string memory description,
        string memory model,
        string memory userPromptURI,
        string memory systemPromptURI,
        bool promptsEncrypted
    );

    event AgentUpdated(uint256 indexed tokenId);
}`}
                  </pre>
                </div>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Each token carries a <code className="text-[#f8fafc]">model</code> identifier (for example <code className="text-[#f8fafc]">gpt-4-0125-preview</code> or <code className="text-[#f8fafc]">claude-3-opus-20240229</code>), and two URIs — <code className="text-[#f8fafc]">userPromptURI</code> and <code className="text-[#f8fafc]">systemPromptURI</code> — pointing at decentralized storage. The recommended architecture encrypts both before upload and ties decryption capability to <code className="text-[#f8fafc]">ownerOf(tokenId)</code>, so that transferring the NFT transfers decryption rights atomically with ownership — the same trick NFT-gated content platforms use, applied to a prompt instead of a media file. The standard also mandates a <code className="text-[#f8fafc]">{"${variableName}"}</code> syntax for injectable runtime parameters, so downstream tooling — a web form, an agent runtime, an MCP server — can recognize and substitute dynamic values without parsing free text.
                </p>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  The limitation is structural, not incidental: mapping-tied encryption is a convention, not a proof. Nothing in ERC-7662 requires a seller to have actually re-encrypted the underlying data for the buyer&apos;s key at the moment of transfer — <code className="text-[#f8fafc]">transferFrom()</code> only moves a token ID, and says nothing about the payload it is supposed to represent. A buyer has no cryptographic way to confirm the encrypted content they now &quot;own&quot; is current, correctly re-keyed, or not simply corrupted. That gap is exactly what the next standard closes.
                </p>
              </div>
            </section>

            {/* Section 4 — ERC-7857 */}
            <section id="erc-7857-private-metadata">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">04 · Verifiable Transfer</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  ERC-7857 — Verifiable Transfer of Private Agent Metadata
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  <a href="https://eips.ethereum.org/EIPS/eip-7857" target="_blank" rel="noopener noreferrer" className={linkCls}>ERC-7857, &quot;AI Agents NFT with Private Metadata,&quot;</a> formalizes exactly the gap ERC-7662 leaves open. It treats an agent&apos;s memory, model weights, and character definition as <code className="text-[#f8fafc]">IntelligentData</code> that must be provably re-encrypted and handed over on every transfer — not implied by a naming convention, but demonstrated through an off-chain prover and on-chain verifier pattern supporting two oracle types: Trusted Execution Environments (TEE) and zero-knowledge proofs (ZKP).
                </p>

                <div className="bg-[#0a0a12] border border-[#1a1a2e] rounded-xl overflow-hidden my-8">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-[#1a1a2e] bg-[rgba(255,255,255,0.02)]">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748b]">Core Data Structures</span>
                  </div>
                  <pre className="p-5 text-[13px] leading-relaxed overflow-x-auto text-[#94a3b8]">
{`struct IntelligentData {
    string dataDescription;
    bytes32 dataHash;
}

struct AccessProof {
    bytes32 oldDataHash;
    bytes32 newDataHash;
    bytes nonce;
    bytes encryptedPubKey;
    bytes proof;
}

struct OwnershipProof {
    OracleType oracleType;      // TEE or ZKP
    bytes32 oldDataHash;
    bytes32 newDataHash;
    bytes sealedKey;
    bytes encryptedPubKey;
    bytes nonce;
    bytes proof;
}

struct TransferValidityProof {
    AccessProof accessProof;
    OwnershipProof ownershipProof;
}`}
                  </pre>
                </div>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  The main <code className="text-[#f8fafc]">IERC7857</code> interface exposes four distinct operations, each answering a different question about who can do what with an agent&apos;s data: <code className="text-[#f8fafc]">iTransfer()</code> moves ownership and re-encrypts the underlying data for the recipient, verified through a <code className="text-[#f8fafc]">TransferValidityProof[]</code>; <code className="text-[#f8fafc]">iClone()</code> duplicates the data to a new token while the original owner retains theirs — useful for licensing a fine-tuned copy of an agent without losing the master; <code className="text-[#f8fafc]">authorizeUsage()</code> grants usage rights without transferring ownership at all, the equivalent of renting an agent rather than buying it; and <code className="text-[#f8fafc]">delegateAccess()</code> assigns an assistant for access verification, foreshadowing the execution-delegation problem ERC-8196 solves in full.
                </p>

                <div className="overflow-x-auto my-10">
                  <table className="w-full text-[13px] border-collapse">
                    <thead>
                      <tr className="border-b border-[#1a1a2e]">
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#06b6d4]">Property</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#06b6d4]">TEE-based prover</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#06b6d4]">ZKP-based prover</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Key handling", "Can hold multi-party private keys and re-encrypts directly", "Cannot hold delegator keys; proves properties without touching them"],
                        ["Trust assumption", "Hardware attestation integrity", "Soundness of the underlying proof system"],
                        ["Re-encryption timing", "On demand, at time of transfer", "Prover retains the re-encryption key; must re-encrypt on every later transfer so prior owners can't decrypt future states"],
                        ["Primary failure mode", "A hardware exploit undermines all data behind it", "A circuit bug or trusted-setup compromise undermines soundness"],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-[#1a1a2e]/60 hover:bg-[rgba(6,182,212,0.03)] transition-colors">
                          <td className="py-3 px-4 text-[#f8fafc] font-medium text-[13px]">{row[0]}</td>
                          <td className="py-3 px-4 text-[#94a3b8]">{row[1]}</td>
                          <td className="py-3 px-4 text-[#94a3b8]">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Replay protection relies on nonce tracking with a time-bounded expiration window, cleared via <code className="text-[#f8fafc]">cleanExpiredProofs()</code>; sealed-key changes and ownership changes are required to be atomic and independently verifiable, so a proof cannot be partially applied.
                </p>

                <div className="bg-[rgba(6,182,212,0.06)] border border-[rgba(6,182,212,0.15)] rounded-xl p-6 md:p-8">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#06b6d4] mb-3">Ownership vs. Data — Deliberately Decoupled</div>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    An NFT can change hands without the underlying agent data moving at all — that is what <code className="text-[#f8fafc]">authorizeUsage()</code> is for. And data can be provably duplicated without any transfer of ownership — that is what <code className="text-[#f8fafc]">iClone()</code> is for. Vanilla ERC-721 conflates &quot;who owns the token&quot; with &quot;who possesses the asset.&quot; ERC-7857 deliberately splits control from possession, because an agent&apos;s IP has licensing and derivative-work economics a static image or collectible never had to model.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 — ERC-8126 */}
            <section id="erc-8126-verification">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">05 · Verification</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  ERC-8126 — Multi-Dimensional Verification and Risk Scoring
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Owning a well-encrypted, provably-transferable agent NFT says nothing about whether that specific agent is safe to interact with today. <a href="https://eips.ethereum.org/EIPS/eip-8126" target="_blank" rel="noopener noreferrer" className={linkCls}>ERC-8126, &quot;AI Agent Verification,&quot;</a> is the layer that answers exactly that — deliberately specified as an <strong className="text-[#f8fafc]">off-chain verification standard</strong> with an optional on-chain attestation hook, so routine checks don&apos;t need to be gas-metered to be standardized.
                </p>
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  The flow is mandatory and deliberately closes a spoofing hole: a verification provider <strong className="text-[#f8fafc]">must</strong> call <code className="text-[#f8fafc]">tokenURI(agentId)</code> on the ERC-8004 Identity Registry and resolve the returned metadata — direct parameter submission without an <code className="text-[#f8fafc]">agentId</code> is explicitly prohibited. This means a verifier can never be tricked into scoring metadata that was never actually bound to the agent on-chain.
                </p>

                <div className="overflow-x-auto my-10">
                  <table className="w-full text-[13px] border-collapse">
                    <thead>
                      <tr className="border-b border-[#1a1a2e]">
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#06b6d4]">Check</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#06b6d4]">What It Verifies</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#06b6d4]">Attack It Mitigates</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["ETV — Ethereum Token Verification", "Smart contract deployment via eth_getCode, checked against known vulnerability patterns and OWASP's Smart Contract Security Verification Standard", "Deploying against a malicious or unaudited contract"],
                        ["MCV — Media Content Verification", "imageUrl authenticity, provenance, tampering, watermarks, and steganographic payloads via C2PA-style provenance checks", "Fake branding or steganographically hidden instructions in agent imagery"],
                        ["SCV — Solidity Code Verification", "Deployed bytecode matches registered source; audits for reentrancy and flash-loan attack patterns", "Bytecode/source mismatch hiding malicious logic"],
                        ["WAV — Web Application Verification", "HTTPS endpoint accessibility, SSL certificate validity, OWASP Web Security Testing Guide compliance", "Compromised or hijacked agent endpoints"],
                        ["WV — Wallet Verification", "Transaction history cross-referenced against threat intelligence databases", "Sanctioned addresses, mixer usage, known bot/exploit patterns"],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-[#1a1a2e]/60 hover:bg-[rgba(6,182,212,0.03)] transition-colors">
                          <td className="py-3 px-4 text-[#f8fafc] font-medium text-[13px]">{row[0]}</td>
                          <td className="py-3 px-4 text-[#94a3b8]">{row[1]}</td>
                          <td className="py-3 px-4 text-[#ef4444]">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  The overall risk score is the arithmetic mean of the five sub-scores on a 0–100 scale, bucketed for straightforward interpretation: 0–20 low risk, 21–40 moderate, 41–60 elevated, 61–80 high, 81–100 critical. Two optional layers extend this: <strong className="text-[#f8fafc]">Private Data Verification (PDV)</strong> generates zero-knowledge proofs of the verification results without exposing the underlying sensitive data, which matters for GDPR-adjacent compliance and eliminates a whole category of breach risk; and <strong className="text-[#f8fafc]">Quantum Cryptography Verification (QCV)</strong>, an optional quantum-resistant layer using AES-256-GCM that returns an encrypted <code className="text-[#f8fafc]">record_id</code> and <code className="text-[#f8fafc]">decryption_url</code> for long-horizon security against Shor&apos;s-algorithm-class threats to current elliptic curve cryptography.
                </p>

                <div className="bg-[#0a0a12] border border-[#1a1a2e] rounded-xl overflow-hidden my-8">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-[#1a1a2e] bg-[rgba(255,255,255,0.02)]">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748b]">Optional On-Chain Attestation Interface</span>
                  </div>
                  <pre className="p-5 text-[13px] leading-relaxed overflow-x-auto text-[#94a3b8]">
{`interface IERC8126 {
    event AgentVerified(
        uint256 indexed agentId,
        uint8 overallRiskScore,
        bytes32 etvProofId,
        bytes32 mcvProofId,
        bytes32 scvProofId,
        bytes32 wavProofId,
        bytes32 wvProofId,
        bytes32 summaryProofId
    );

    event AttestationPosted(
        uint256 indexed agentId,
        uint8 riskScore,
        bytes32 proofId
    );

    function getLatestRiskScore(uint256 agentId) external view returns (uint8);
}`}
                  </pre>
                </div>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Verification results may optionally post as attestations to ERC-8004&apos;s Validation Registry, making a risk score portable and discoverable across any application that reads the same registry rather than trapped inside one provider&apos;s dashboard. Providers may charge gasless fees using <a href="https://eips.ethereum.org/EIPS/eip-3009" target="_blank" rel="noopener noreferrer" className={linkCls}>EIP-3009</a>&apos;s <code className="text-[#f8fafc]">TransferWithAuthorization</code> for USDC settlement, and the standard is explicitly provider-agnostic — any entity can implement a compliant verification service, which is meant to produce competition and specialization rather than a single gatekeeper.
                </p>

                <div className="my-10 pl-6 md:pl-8 border-l-[3px] border-[#06b6d4] bg-[rgba(6,182,212,0.05)] rounded-r-lg p-6 md:p-8 relative">
                  <div className="absolute top-2 left-4 text-6xl text-[#06b6d4] opacity-20 font-serif leading-none">&ldquo;</div>
                  <p className="text-base md:text-lg italic text-[#06b6d4] leading-relaxed relative z-10 mb-3">
                    Verification indicates point-in-time technical compliance, not guaranteed future behavior.
                  </p>
                  <cite className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] not-italic">— ERC-8126, Security Considerations</cite>
                </div>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  That single line does more work than most of the standard&apos;s prose. A wallet can be compromised the day after a clean WV check; an endpoint can be hijacked the week after a passing WAV result. The standard&apos;s own security section treats re-verification as a first-class operational requirement, not an edge case — which is precisely the hook ERC-8196 uses to make a risk score actionable in real time rather than a one-time gate.
                </p>
              </div>
            </section>

            {/* Section 6 — ERC-8196 */}
            <section id="erc-8196-policy-execution">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">06 · Execution</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  ERC-8196 — Policy-Bound Execution and the End of Blind Delegation
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  A perfectly verified agent — an ERC-8126 score of 5, comfortably &quot;low risk&quot; — is still just a number you have to trust was computed and interpreted correctly. It says nothing about what the agent will actually be permitted to do with your funds tomorrow. <a href="https://eips.ethereum.org/EIPS/eip-8196" target="_blank" rel="noopener noreferrer" className={linkCls}>ERC-8196, &quot;AI Agent Authenticated Wallet,&quot;</a> is the layer that turns a risk score into an enforceable, revocable, funds-bounded contract. The standard explicitly frames itself as Layer 2 (Execute) of a two-layer trust stack, sitting directly on top of ERC-8126 as Layer 1 (Identify &amp; Verify) — the difference between a background check and an employment contract with a termination clause.
                </p>

                <div className="overflow-x-auto my-10">
                  <table className="w-full text-[13px] border-collapse">
                    <thead>
                      <tr className="border-b border-[#1a1a2e]">
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#06b6d4]">Policy Field</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#06b6d4]">Type</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#06b6d4]">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["agentId", "uint256", "ERC-8126 lookup key for live risk scoring"],
                        ["allowedActions", "string[]", "Permitted transaction types, e.g. \"transfer\", \"swap\""],
                        ["allowedContracts / blockedContracts", "address[]", "Whitelist and blacklist of target contracts"],
                        ["maxValuePerTx / maxValuePerDay", "uint256", "Per-transaction and optional daily spending caps, in wei"],
                        ["validAfter / validUntil", "uint256", "Policy activation and expiration timestamps"],
                        ["minVerificationScore", "uint8", "Minimum ERC-8126 score required — actions rejected if the live score exceeds it"],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-[#1a1a2e]/60 hover:bg-[rgba(6,182,212,0.03)] transition-colors">
                          <td className="py-3 px-4 text-[#f8fafc] font-medium text-[13px] font-mono">{row[0]}</td>
                          <td className="py-3 px-4 text-[#94a3b8] font-mono text-[12px]">{row[1]}</td>
                          <td className="py-3 px-4 text-[#94a3b8]">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#0a0a12] border border-[#1a1a2e] rounded-xl overflow-hidden my-8">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-[#1a1a2e] bg-[rgba(255,255,255,0.02)]">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748b]">IAIAgentAuthenticatedWallet — Core Surface</span>
                  </div>
                  <pre className="p-5 text-[13px] leading-relaxed overflow-x-auto text-[#94a3b8]">
{`function registerPolicy(
    address agent, uint256 agentId,
    string[] calldata allowedActions,
    address[] calldata allowedContracts,
    address[] calldata blockedContracts,
    uint256 maxValuePerTx, uint256 maxValuePerDay,
    uint256 validAfter, uint256 validUntil,
    uint8 minVerificationScore
) external returns (bytes32 policyHash);

function executeAction(
    bytes32 policyHash, address target, uint256 value,
    bytes calldata data, uint256 nonce,
    bytes32 entropyCommitment, bytes calldata signature
) external returns (bool success, bytes32 auditEntryId);

function revokePolicy(bytes32 policyHash, string calldata reason) external;

event ActionExecuted(
    bytes32 indexed policyHash, address indexed agent,
    address target, uint256 value, bytes32 auditEntryId
);

error PolicyViolation(bytes32 policyHash, string reason);
error ValueExceedsLimit(uint256 value, uint256 maxValue);`}
                  </pre>
                </div>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Every call to <code className="text-[#f8fafc]">executeAction()</code> requires an EIP-712-signed action referencing <code className="text-[#f8fafc]">policyHash</code>, checked against expiration, value caps, and the contract allow/block lists — and critically, against a <strong className="text-[#f8fafc]">live</strong> call to <code className="text-[#f8fafc]">getLatestRiskScore(agentId)</code> on ERC-8126. If the agent&apos;s current score has degraded past <code className="text-[#f8fafc]">minVerificationScore</code> since the policy was registered, execution is rejected automatically — a policy can suspend an agent&apos;s spending authority without any human noticing the degradation first.
                </p>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  The <code className="text-[#f8fafc]">entropyCommitment</code> parameter is the standard&apos;s answer to probabilistic host manipulation: the agent (or its host) commits to a random seed before generating its proposed action, then reveals it at execution time, and the contract checks the reveal against the earlier commitment. A malicious host cannot generate several candidate outputs, see which one would be scored most favorably or execute most profitably for the host, and submit that one after the fact — the randomness is locked in before the model runs.
                </p>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Every executed action is written to a hash-chained audit trail — each <code className="text-[#f8fafc]">AuditEntryLogged</code> event carries a <code className="text-[#f8fafc]">previousHash</code>, a sequence number, and a session ID. Implementations may store entries off-chain (IPFS is the natural choice) and anchor periodic Merkle roots on-chain to keep gas costs manageable, while any tampering with the off-chain log breaks the hash chain and is immediately detectable without needing to store every entry on Ethereum itself. <code className="text-[#f8fafc]">revokePolicy()</code> is callable by the owner at any time, and because every subsequent action requires a live policy check, revocation takes effect immediately — a real kill switch, not a request the agent has to agree to honor.
                </p>

                <div className="bg-[rgba(239,68,68,0.06)] border border-[rgba(239,68,68,0.15)] rounded-xl p-6 md:p-8">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#ef4444] mb-3">Design Principle — CROPS</div>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">
                    ERC-8196 states its design ethos explicitly around four principles: Censorship Resistance, Open Source verifiability, Privacy preservation, and Security. The interface is also written to compose with <a href="https://eips.ethereum.org/EIPS/eip-4337" target="_blank" rel="noopener noreferrer" className={linkCls}>ERC-4337</a> account abstraction, so smart contract wallets can implement policy enforcement, gas sponsorship, and session-key scoping in a single stack rather than three bolted-together systems.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7 — Composing */}
            <section id="composing-the-stack">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">07 · Reference Architecture</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  Composing the Stack
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Consider a protocol treasury that wants to run an autonomous market-making agent against its stablecoin reserves. The five standards above compose into a single lifecycle, each one handing a verifiable artifact to the next.
                </p>

                <div className="space-y-0 my-10">
                  {[
                    { num: "1", title: "Register (ERC-8004)", desc: "The agent operator mints an agent NFT and publishes an agentURI describing endpoints and supported trust models. This is the only step required before anyone else can reference the agent by a stable agentId." },
                    { num: "2", title: "Protect the IP (ERC-7662 / ERC-7857)", desc: "The system prompt, tool definitions, and any fine-tuned weights are encrypted and committed as IntelligentData. If the operator later sells or licenses the agent, iTransfer() or iClone() provide a provable handover instead of a \"trust me, I re-encrypted it\" claim." },
                    { num: "3", title: "Verify (ERC-8126)", desc: "Before the treasury will consider delegating funds, an independent verification provider runs ETV, MCV, SCV, WAV, and WV against the agentId's resolved metadata and posts a risk score — optionally as an attestation to ERC-8004's Validation Registry." },
                    { num: "4", title: "Bind a Policy (ERC-8196)", desc: "The treasury multisig calls registerPolicy(), scoping the agent to specific DEX router contracts, a per-transaction cap, a daily cap, a validity window, and a minVerificationScore referencing the agentId's live 8126 score." },
                    { num: "5", title: "Execute Under Audit (ERC-8196)", desc: "Each rebalance the agent proposes is signed with EIP-712 over the policyHash and an entropy commitment, checked against the live risk score and policy bounds at the moment of execution, and logged into a hash-chained audit trail the treasury reconciles on a fixed cadence." },
                  ].map((item) => (
                    <div key={item.num} className="flex gap-4 py-5 border-b border-[#1a1a2e]/60">
                      <span className="w-9 h-9 rounded-full bg-[#0a0a12] border-2 border-[#06b6d4] flex items-center justify-center text-sm font-bold text-[#06b6d4] shrink-0 mt-0.5">{item.num}</span>
                      <div>
                        <strong className="text-[#f8fafc] block mb-1 text-sm">{item.title}</strong>
                        <p className="text-sm text-[#94a3b8] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#0a0a12] border border-[#1a1a2e] rounded-xl overflow-hidden my-8">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-[#1a1a2e] bg-[rgba(255,255,255,0.02)]">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748b]">Composed Lifecycle — Pseudocode</span>
                  </div>
                  <pre className="p-5 text-[13px] leading-relaxed overflow-x-auto text-[#94a3b8]">
{`// 1. ERC-8004 — mint identity
const agentId = await identityRegistry.register(agentURI);

// 2. ERC-7857 — commit encrypted IP, provable on future transfer
const dataHash = await agentNFT.iClone(agentId, {
  intelligentData: [{ dataDescription: "system-prompt", dataHash: hash(prompt) }],
});

// 3. ERC-8126 — independent risk score, resolved via agentId only
const { overallRiskScore } = await verifier.verify(agentId); // reads tokenURI(agentId)

// 4. ERC-8196 — treasury binds an enforceable envelope
const policyHash = await wallet.registerPolicy(
  agentAddress, agentId,
  ["swap", "rebalance"],
  [aaveRouter, curvePool], [],
  parseEther("50000"), parseEther("250000"),
  now, now + THIRTY_DAYS,
  20 // minVerificationScore — "low risk" bucket only
);

// 5. ERC-8196 — agent proposes, contract checks live score + policy at execution time
const { success, auditEntryId } = await wallet.executeAction(
  policyHash, curvePool, rebalanceValue, calldata,
  nonce, entropyCommitment, agentSignature
);`}
                  </pre>
                </div>

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Notice what nobody in this flow ever needs to know: the treasury never learns the operator&apos;s legal identity. It only needs an agentId, a risk score computed against verifiable metadata, and a policy contract that refuses to execute anything outside its bounds regardless of what the agent — or a hostile host — tries to submit. That is what &quot;credibility without identity&quot; actually means in practice. The stack substitutes provenance-of-behavior, checkable in a single transaction, for provenance-of-person, which was never actually available for a pseudonymous counterparty anyway.
                </p>
              </div>
            </section>

            {/* Section 8 — Failure modes */}
            <section id="failure-modes">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">08 · Risk</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  Failure Modes: What the Standards Don&apos;t Solve
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  A stack that claims to make anonymous agents credible deserves the same scrutiny it applies to the agents themselves. Four gaps are worth building around rather than assuming away.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
                  {[
                    { title: "Standards Maturity Inversion", color: "#f59e0b", desc: "ERC-8126 and ERC-8196 are Final and formally require ERC-8004, which remains Draft. Production systems are standardizing verification and execution on top of an identity layer whose interface could still change before ratification." },
                    { title: "Who Verifies the Verifier", color: "#ef4444", desc: "ERC-8126 is deliberately provider-agnostic, which means a risk score is only as trustworthy as the provider issuing it. The standard's own security section flags provider collusion as a risk and recommends multi-provider strategies — but doesn't mandate one." },
                    { title: "Entropy Commitment Is a Mitigation, Not a Cure", color: "#f59e0b", desc: "Commit-reveal raises the cost of host manipulation but doesn't eliminate it. A patient adversary controlling the host over many committed runs can still bias outcomes statistically; the standard explicitly frames this as requiring multiple independent hosts for full mitigation." },
                    { title: "The Agent Still Needs a Signing Key", color: "#ef4444", desc: "ERC-8196 removes the need for an agent to hold the delegator's private key, but the agent's own ERC-4337 account still needs a key to produce EIP-712 signatures. Scoped and revocable is a large improvement over unscoped custody — but it is not \"the agent has no key at all.\"" },
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
                  There is a fifth gap worth naming even though no panel above covers it cleanly: cross-chain fragmentation. An <code className="text-[#f8fafc]">agentId</code> under ERC-8004 is scoped to namespace, chain ID, and contract address — an agent operating identically across five chains today needs five separate identities, with no native standard for linking them into one reputation surface. Anyone building a multi-chain agent product should plan to solve that stitching problem themselves; it isn&apos;t covered by any of the four standards above.
                </p>
              </div>
            </section>

            {/* Section 9 — Roadmap */}
            <section id="roadmap">
              <div className="mb-10 pb-6 border-b border-[#1a1a2e]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">09 · Implementation</div>
                <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                  Implementation Roadmap for Protocol Teams
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  For a team deciding whether to let an autonomous agent touch real capital, the sequencing below matters more than any individual integration detail.
                </p>

                <div className="space-y-0 my-10">
                  {[
                    { num: "1", title: "Register before you build anything custom", desc: "If you're building agent identity today, implement against ERC-8004's Identity Registry rather than a bespoke schema — every downstream standard in this stack is written to resolve agentId through it." },
                    { num: "2", title: "Choose an IP protection model deliberately", desc: "Use ERC-7662's simpler mapping-plus-URI pattern if you only need to gate a prompt behind ownership. Move to ERC-7857 if you need provable transfer, cloning, or usage licensing of the underlying agent data — that's the axis 7662 cannot prove." },
                    { num: "3", title: "Don't self-attest risk", desc: "Integrate at least one independent ERC-8126 verification provider before an agent touches real capital, and design for multi-provider aggregation from the start rather than retrofitting it after a single-provider failure." },
                    { num: "4", title: "Wrap every funded agent in a policy contract before mainnet", desc: "Treat ERC-8196's registerPolicy() as a prerequisite, not a later hardening pass. Specify allowedContracts, per-tx and per-day caps, and a minVerificationScore tied to the live 8126 score so a degrading agent loses spending authority automatically." },
                    { num: "5", title: "Build the audit habit before you need it", desc: "Reconcile the hash-chained audit trail on a fixed cadence, not just after an incident, and rehearse revokePolicy() as an actual operational runbook rather than a theoretical kill switch." },
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

                <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                  Teams with an existing ERC-4337 smart account stack will move fastest, since ERC-8196 is written to compose directly with account abstraction rather than requiring a parallel wallet system. Teams starting from a raw EOA-per-agent model should expect the migration to policy-bound execution to be the largest single piece of work in this roadmap — and the piece with the highest payoff if the agent is ever compromised.
                </p>
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="bg-[#0a0a12] border border-[#1a1a2e] rounded-2xl p-10 md:p-14 text-center">
              <div className="text-[10px] font-mono tracking-widest uppercase text-[#a855f7] mb-4">Synthesis</div>
              <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4">
                Verifiably Bounded, Not Verifiably Trusted
              </h2>
              <p className="text-sm text-[#94a3b8] leading-relaxed max-w-[800px] mx-auto mb-6">
                Anonymity was never the actual liability in agentic systems; unverifiable, unbounded delegation was. ERC-7662 and ERC-7857 give an agent&apos;s intellectual property a provable owner and a provable transfer path. ERC-8126 gives any counterparty an independently checkable, point-in-time risk signal. ERC-8196 turns that signal into an enforceable, revocable, funds-bounded policy that a smart contract — not a human, and not the agent&apos;s host — checks on every single action.
              </p>
              <p className="text-sm text-[#94a3b8] leading-relaxed max-w-[800px] mx-auto mb-6">
                None of this makes an anonymous agent trustworthy in the way a KYC&apos;d counterparty is trustworthy. It makes the agent <strong className="text-[#f8fafc]">verifiably bounded</strong> — a more modest, more honest, and ultimately more useful property for software that has to act at machine speed, across jurisdictions, without a human in every loop.
              </p>
              <p className="text-sm text-[#94a3b8] leading-relaxed max-w-[800px] mx-auto">
                For teams building agentic products, the practical takeaway is sequencing: identity first, IP protection where resale or licensing matters, independent verification before any capital exposure, and policy-bound execution as a non-negotiable prerequisite — not a compliance afterthought bolted on after the first incident.
              </p>
            </section>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6">
          <FaqSection
            headline="ERC-7662, ERC-7857, ERC-8126 & ERC-8196"
            items={[
              {
                question: "What is the difference between ERC-7662 and ERC-7857?",
                answer: "ERC-7662 defines the simpler pattern: an ERC-721 extension where an agent's encrypted prompt and model reference are stored as a URI tied to ownerOf(tokenId). It's convention-based — nothing in the standard proves the encrypted data was actually re-keyed for a buyer at transfer time. ERC-7857 closes that gap with a formal off-chain prover / on-chain verifier system (TEE or ZKP) that produces a TransferValidityProof demonstrating the data was genuinely decrypted and re-encrypted for the new owner. ERC-7857 also separates ownership, cloning, and usage authorization into distinct operations (iTransfer, iClone, authorizeUsage), which ERC-7662 does not.",
              },
              {
                question: "Why do ERC-8126 and ERC-8196 both require ERC-8004?",
                answer: "ERC-8004 defines the Identity Registry that assigns every agent a globally unique agentId and a resolvable agentURI. ERC-8126 requires it because its verification flow mandates resolving agent metadata through tokenURI(agentId) rather than accepting raw parameters, which prevents spoofed verification requests. ERC-8196 requires ERC-8126 (and transitively ERC-8004) because its policy execution layer performs a live getLatestRiskScore(agentId) lookup before every action — the agentId is the shared key that lets identity, verification, and execution all reference the same underlying agent.",
              },
              {
                question: "Are these ERC standards live and deployed today?",
                answer: "As of the EIP registry, ERC-7857, ERC-8126, and ERC-8196 have reached Final status, while the foundational ERC-8004 remains Draft. Reaching Final in the EIP process means the specification text is settled, not that widespread production adoption has happened — teams building on this stack should verify current registry addresses and audited reference implementations before relying on it for funds custody, and should track ERC-8004 for changes since 8126 and 8196 both depend on its interface.",
              },
              {
                question: "What is the \"hosting trust trap\" that ERC-8196 addresses?",
                answer: "It's the failure mode where a user delegates an agent's private key custody to a hosting platform instead of holding it directly. The host becomes a single point of failure: it can suppress outputs, delay requests, misrepresent what the agent decided, or simply steal funds, and the user has no cryptographic way to prove what actually happened. ERC-8196 avoids this by never requiring the delegator's private key to leave their control — the agent signs scoped, policy-bound actions instead, and every action is checked against an on-chain policy contract regardless of what the host claims.",
              },
              {
                question: "How does the entropy commitment in ERC-8196 work?",
                answer: "It's a commit-reveal scheme: before generating a proposed action, the agent (or its host) commits to a random seed (entropyCommitment). At execution time, it reveals the value, and the policy contract checks the reveal hashes back to the earlier commitment. This prevents a host from generating multiple candidate outputs, observing which one is most favorable, and submitting that one after the fact — a specific countermeasure against manipulation of probabilistic, LLM-driven agents.",
              },
              {
                question: "What's the difference between TEE-based and ZKP-based proofs in ERC-7857?",
                answer: "A TEE-based prover runs inside trusted hardware, can hold multi-party private keys, and re-encrypts data directly, with trust resting on hardware attestation. A ZKP-based prover proves properties of a re-encryption without ever holding the delegator's private keys, with trust resting on the soundness of the proof system. Because a ZKP prover retains the re-encryption key itself rather than handing it off, it must re-encrypt on every subsequent transfer to prevent a previous owner from being able to decrypt the data's current state.",
              },
              {
                question: "Does a high ERC-8126 verification score guarantee an agent is safe to interact with?",
                answer: "No — the standard is explicit that verification indicates point-in-time technical compliance, not guaranteed future behavior. A wallet can be compromised, or an endpoint hijacked, the day after a clean check. This is exactly why ERC-8196 performs a live risk-score lookup on every execution rather than checking once at policy registration; a degrading score automatically restricts the agent's spending authority without requiring a human to notice first.",
              },
              {
                question: "Can an agent be verified under ERC-8126 without ever being tokenized under ERC-7662 or ERC-7857?",
                answer: "Yes. ERC-8126 only requires the agent to be registered under ERC-8004's Identity Registry so it has a resolvable agentId and agentURI — it does not require the agent's prompts or model weights to be tokenized as an NFT. ERC-7662 and ERC-7857 solve a different problem (ownable, tradeable, IP-protected agent assets) that's orthogonal to whether an agent can be independently risk-scored.",
              },
              {
                question: "How does this stack relate to ERC-4337 account abstraction?",
                answer: "ERC-8196 is explicitly written to compose with ERC-4337 — smart contract wallets and account abstraction systems can implement the IAIAgentAuthenticatedWallet interface directly, meaning policy enforcement, gas sponsorship, and session-key scoping can live in a single wallet stack rather than three separately integrated systems. Teams already running ERC-4337 smart accounts have the shortest integration path to policy-bound agent execution.",
              },
            ]}
          />
        </div>

        {/* Post Footer */}
        <div className="max-w-[1200px] mx-auto px-6 pb-24">
          <div className="border-t border-[#1a1a2e] pt-10 flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-[11px] font-mono text-[#64748b] tracking-wider">
              The Trust Stack: ERC-7662, ERC-7857, ERC-8126 &amp; ERC-8196 · August 2026
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
                slug: "ai-augmented-web3-infrastructure",
                title: "AI-Augmented Web3 Infrastructure: From Static Ledgers to Intelligent Economic Operating Systems",
                category: "AI & Blockchain",
                excerpt: "The architectural field guide for building at the intersection of AI and blockchain — M2M architecture, ZK-ML, agentic dApps, and the 2026 stack.",
              },
              {
                slug: "ai-agents-the-learning-loop-moat",
                title: "The Learning Loop Moat: AI Agents in Finance and Treasury Management",
                category: "AI & Finance",
                excerpt: "Why frontier models are commoditizing and the durable moat is the institutional learning loop — with a policy-gated treasury agent architecture.",
              },
              {
                slug: "institutional-custody-architecture",
                title: "Designing Institutional-Grade Custody Architecture",
                category: "Custody",
                excerpt: "A deep technical teardown of institutional digital asset custody: TSS vs multisig, MPC-CMP protocol design, HSM integration, and disaster recovery.",
              },
            ]}
          />
        </div>
      </article>

      <Footer />
    </>
  );
}
