import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";
import { blogPostingSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Zero-Knowledge Proofs in Financial Infrastructure: ZK-KYC, ZK-AML & Privacy-Preserving Compliance | Arrnaya",
  description:
    "A practitioner's deep-dive into deploying zero-knowledge proofs in regulated financial systems — covering ZK-KYC architecture, ZK-AML circuit design, proof system selection (Groth16, PLONK, STARKs), Polygon ID integration, FATF Travel Rule compliance, and production deployment patterns for fintech and crypto firms.",
  keywords: [
    "zero-knowledge proofs finance",
    "ZK-KYC architecture",
    "ZK-AML compliance",
    "privacy-preserving compliance blockchain",
    "Polygon ID integration",
    "Groth16 PLONK STARKs comparison",
    "decentralised identity KYC",
    "FATF travel rule ZK",
    "zkSNARK financial compliance",
    "Privado ID",
    "Verite credentials",
    "zero-knowledge proof fintech",
    "on-chain KYC without data disclosure",
    "MAS privacy compliance",
    "ZK proof circuit design",
  ],
  openGraph: {
    title: "Zero-Knowledge Proofs in Financial Infrastructure: ZK-KYC, ZK-AML & Privacy-Preserving Compliance",
    description:
      "Traditional KYC creates compliance honeypots. ZK proofs let you verify everything without storing anything. Here's the full engineering playbook.",
    url: "https://www.arrnaya.com/blog/zero-knowledge-proofs-financial-infrastructure",
    siteName: "Arrnaya",
    type: "article",
    publishedTime: "2026-05-06T08:00:00+08:00",
    authors: ["Arrnaya"],
    images: [
      {
        url: "https://www.arrnaya.com/og-zk-proofs-financial.png",
        width: 1200,
        height: 630,
        alt: "Zero-Knowledge Proofs in Financial Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero-Knowledge Proofs in Financial Infrastructure",
    description:
      "Banks store your passport scan, SSN, and income data in centralised databases to 'verify' you. ZK proofs can verify everything without storing anything. Here's the architecture.",
    images: ["https://www.arrnaya.com/og-zk-proofs-financial.png"],
  },
  alternates: {
    canonical: "https://www.arrnaya.com/blog/zero-knowledge-proofs-financial-infrastructure",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TechArticle",
      "@id": "https://www.arrnaya.com/blog/zero-knowledge-proofs-financial-infrastructure#article",
      headline: "Zero-Knowledge Proofs in Financial Infrastructure: ZK-KYC, ZK-AML & Privacy-Preserving Compliance",
      description:
        "A practitioner's deep-dive into deploying zero-knowledge proofs in regulated financial systems — covering ZK-KYC architecture, ZK-AML circuit design, proof system selection, and production deployment patterns.",
      datePublished: "2026-05-06T08:00:00+08:00",
      dateModified: "2026-05-06T08:00:00+08:00",
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
      url: "https://www.arrnaya.com/blog/zero-knowledge-proofs-financial-infrastructure",
      keywords:
        "zero-knowledge proofs, ZK-KYC, ZK-AML, privacy-preserving compliance, Polygon ID, Groth16, PLONK, STARKs, FATF travel rule",
      articleSection: "Cryptography & Compliance Infrastructure",
      wordCount: 4800,
      proficiencyLevel: "Advanced",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is ZK-KYC and how does it differ from traditional KYC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ZK-KYC allows a user to prove identity attributes — such as 'I am over 18' or 'I am not on a sanctions list' — to a counterparty without revealing the underlying data. Traditional KYC requires sharing raw documents (passport scans, utility bills) that are then stored in centralised databases. ZK-KYC replaces data transfer with cryptographic proof, eliminating the storage honeypot while satisfying the same regulatory intent.",
          },
        },
        {
          "@type": "Question",
          name: "Which zero-knowledge proof system should I use for compliance applications?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Groth16 offers the smallest proof size (~200 bytes) and fastest verification, making it ideal for on-chain verification. PLONK/FFLONK avoids the per-circuit trusted setup and is better for systems with many circuit variants. STARKs are post-quantum resistant and require no trusted setup but produce larger proofs (~100KB). For most financial compliance use cases where on-chain gas cost matters, Groth16 (with a well-audited multi-party setup ceremony) or PLONK is the practical choice.",
          },
        },
        {
          "@type": "Question",
          name: "Does FATF's Travel Rule prevent ZK-KYC adoption?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not necessarily. FATF requires VASPs to transmit originator and beneficiary information for transfers above $1,000. ZK proofs can satisfy Travel Rule requirements by proving that the originator data exists, has been verified by a licensed provider, and the counterparty is not sanctions-listed — without transmitting raw personal data between VASPs. Regulators in Singapore (MAS) and the EU (MiCA) are actively exploring ZK-based Travel Rule compliance architectures.",
          },
        },
        {
          "@type": "Question",
          name: "What is Polygon ID and how does it enable ZK-KYC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Polygon ID (now rebranded as Privado ID) is a self-sovereign identity system built on iden3 — a set of open-source ZK identity protocols. Identity providers issue verifiable credentials (VCs) to users, who store them in a sovereign identity wallet. When a service requires KYC, the user generates a ZK proof from their credentials proving specific claims, which the verifier checks on-chain without receiving raw personal data.",
          },
        },
        {
          "@type": "Question",
          name: "What are the main failure modes of ZK compliance systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Key risks include: (1) Trusted setup compromise — if Groth16's toxic waste is not properly destroyed, the prover can generate false proofs. (2) Circuit underconstraint bugs — a subtle error in constraint definition can allow false statements to produce valid proofs. (3) Credential oracle risk — ZK proofs are only as reliable as the issuer who signs the underlying data. (4) Prover centralisation — outsourcing proof generation to a third-party prover creates a trust and censorship point. (5) Regulatory non-recognition — producing a ZK proof does not guarantee a regulator will accept it as satisfying KYC obligations.",
          },
        },
        {
          "@type": "Question",
          name: "How long does ZK proof generation take in production?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Client-side proof generation for Groth16 with ~10k constraints takes 1–3 seconds on a modern smartphone. More complex circuits (50k+ constraints for full AML screening) can take 10–30 seconds client-side, or 200–500ms if delegated to a proving server. STARK proofs are significantly more expensive to generate (5–30s for equivalent complexity) but verification is constant-time. Hardware acceleration (GPUs, FPGAs) can reduce generation time by 10–50x for large circuits.",
          },
        },
        {
          "@type": "Question",
          name: "What is the on-chain gas cost of ZK proof verification?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Groth16 verification costs approximately 250,000–350,000 gas on EVM-compatible chains. At 30 gwei base fee on Ethereum mainnet, that's roughly $3–8 per verification. On Layer-2s like Polygon or zkEVMs, costs drop to $0.001–$0.05. For high-throughput compliance checking, proof aggregation using recursive SNARKs can batch hundreds of verifications into a single on-chain call, amortising fixed costs.",
          },
        },
        {
          "@type": "Question",
          name: "How does ZK-AML work without seeing transaction data?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ZK-AML circuits can prove properties about a transaction set without revealing individual transactions. For example: 'the total volume of this address in the last 30 days is below $10,000' or 'none of these transaction counterparties appear in a committed sanctions merkle tree'. The sanctions list is committed as a Merkle root on-chain; the user proves non-membership using a Merkle exclusion proof inside the ZK circuit, revealing only that the proof passed — not which entry was checked.",
          },
        },
      ],
    },
  ],
};

export default function ZeroKnowledgeProofsPage() {
  return (
    <div style={{ background: "#030308", minHeight: "100vh", color: "#f8fafc" }}>
      <Navbar />
      <JsonLd data={faqSchema} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "#0f0524",
          position: "relative",
          overflow: "hidden",
          padding: "96px 24px 80px",
          // textAlign: "center",
        }}
      >
        {/* Gradient orbs */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 60% at 20% 30%, rgba(20,184,166,0.18) 0%, transparent 60%)," +
              "radial-gradient(ellipse 50% 50% at 80% 20%, rgba(59,130,246,0.14) 0%, transparent 55%)," +
              "radial-gradient(ellipse 40% 40% at 50% 80%, rgba(168,85,247,0.10) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />
        {/* Sparkle overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(20,184,166,0.25) 1px, transparent 1px)," +
              "radial-gradient(circle at 85% 15%, rgba(59,130,246,0.20) 1.5px, transparent 1.5px)," +
              "radial-gradient(circle at 45% 70%, rgba(168,85,247,0.15) 1px, transparent 1px)," +
              "radial-gradient(circle at 72% 55%, rgba(20,184,166,0.18) 1.5px, transparent 1.5px)," +
              "radial-gradient(circle at 30% 85%, rgba(59,130,246,0.12) 1px, transparent 1px)," +
              "radial-gradient(circle at 90% 75%, rgba(168,85,247,0.20) 1px, transparent 1px)," +
              "radial-gradient(circle at 60% 10%, rgba(20,184,166,0.15) 1.5px, transparent 1.5px)," +
              "radial-gradient(circle at 10% 60%, rgba(59,130,246,0.15) 1px, transparent 1px)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto" }}>
          {/* Eyebrow label */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(20,184,166,0.10)",
              border: "1px solid rgba(20,184,166,0.25)",
              borderRadius: "100px",
              padding: "6px 16px",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#14b8a6",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: "11px",
                fontFamily: "monospace",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#14b8a6",
              }}
            >
              Cryptography &amp; Compliance Infrastructure
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 4.5vw, 52px)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#f8fafc",
              marginBottom: "24px",
              letterSpacing: "-0.02em",
            }}
          >
            Zero-Knowledge Proofs in Financial Infrastructure
          </h1>
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "#94a3b8",
              maxWidth: "680px",
              margin: "0 auto 36px",
              lineHeight: 1.6,
            }}
          >
            Banks store your passport scan, biometrics, and income history in centralised databases
            to satisfy regulations written before cryptography offered a better option.
            Zero-knowledge proofs let you prove everything and reveal nothing.
            This is the engineering playbook.
          </p>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "24px",
              fontSize: "13px",
              fontFamily: "monospace",
              color: "#64748b",
            }}
          >
            <span>Arrnaya</span>
            <span>·</span>
            <span>May 6, 2026</span>
            <span>·</span>
            <span>28 min read</span>
            <span>·</span>
            <span style={{ color: "#14b8a6" }}>ZK Proofs · KYC · AML · Privacy</span>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 24px 96px" }}>

        {/* ── TABLE OF CONTENTS ─────────────────────────────────────────── */}
        <nav
          style={{
            background: "#0a0a12",
            border: "1px solid #1a1a2e",
            borderRadius: "16px",
            padding: "28px 32px",
            marginBottom: "64px",
          }}
        >
          <p
            style={{
              fontSize: "10px",
              fontFamily: "monospace",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#64748b",
              marginBottom: "12px",
            }}
          >
            Table of Contents
          </p>
          <ol style={{ margin: 0, padding: "0 0 0 20px", lineHeight: 2, color: "#94a3b8", fontSize: "14px" }}>
            <li><a href="#compliance-paradox" style={{ color: "#14b8a6", textDecoration: "none" }}>The Compliance Paradox: Why Data-Sharing KYC Is Broken</a></li>
            <li><a href="#zk-foundations" style={{ color: "#94a3b8", textDecoration: "none" }}>Zero-Knowledge Proof Foundations</a></li>
            <li><a href="#zk-kyc-architecture" style={{ color: "#94a3b8", textDecoration: "none" }}>ZK-KYC Architecture: Identity Without Disclosure</a></li>
            <li><a href="#zk-aml" style={{ color: "#94a3b8", textDecoration: "none" }}>ZK-AML: Transaction Compliance Without Exposure</a></li>
            <li><a href="#proof-systems" style={{ color: "#94a3b8", textDecoration: "none" }}>Proof System Selection: Groth16, PLONK &amp; STARKs</a></li>
            <li><a href="#production-systems" style={{ color: "#94a3b8", textDecoration: "none" }}>Production Systems: Polygon ID, Privado &amp; Verite</a></li>
            <li><a href="#circuit-design" style={{ color: "#94a3b8", textDecoration: "none" }}>Circuit Design for Compliance Applications</a></li>
            <li><a href="#performance" style={{ color: "#94a3b8", textDecoration: "none" }}>Performance Engineering &amp; Gas Cost Analysis</a></li>
            <li><a href="#fatf-travel-rule" style={{ color: "#94a3b8", textDecoration: "none" }}>FATF Travel Rule: The ZK Approach</a></li>
            <li><a href="#failure-modes" style={{ color: "#94a3b8", textDecoration: "none" }}>Failure Modes &amp; Attack Vectors</a></li>
            <li><a href="#deployment-phases" style={{ color: "#94a3b8", textDecoration: "none" }}>Deployment Playbook: Five Phases</a></li>
            <li><a href="#faq" style={{ color: "#94a3b8", textDecoration: "none" }}>FAQ</a></li>
          </ol>
        </nav>

        {/* ── SECTION 1: THE COMPLIANCE PARADOX ────────────────────────── */}
        <section id="compliance-paradox" style={{ marginBottom: "72px" }}>
          <p style={{ fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase", color: "#64748b", marginBottom: "8px" }}>
            Section 01
          </p>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: "#f8fafc", marginBottom: "24px", letterSpacing: "-0.01em" }}>
            The Compliance Paradox: Why Data-Sharing KYC Is Broken
          </h2>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "20px" }}>
            Every time a person opens a crypto exchange account, a neobank, or a DeFi protocol with onboarding,
            they hand over their passport scan, proof of address, selfie, sometimes biometrics — to an institution
            whose security posture they cannot audit, whose data retention policies they cannot verify,
            and whose future breach they cannot prevent.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "20px" }}>
            The regulatory intent is legitimate: verify that users are who they say they are,
            that they are not on sanctions lists, that they are not moving proceeds of crime.
            But the mechanism — centralised storage of raw identity documents — is a product of
            1990s database thinking applied to 2020s threat models. The Equifax breach (147 million records),
            the Binance KYC leak (60,000 user photographs), and dozens of smaller exchange leaks
            illustrate the compounding cost of storing what you only needed to verify.
          </p>

          {/* Pull quote */}
          <blockquote
            style={{
              borderLeft: "3px solid #14b8a6",
              paddingLeft: "24px",
              margin: "36px 0",
              fontStyle: "italic",
              fontSize: "18px",
              color: "#cbd5e1",
              lineHeight: 1.65,
              position: "relative",
            }}
          >
            <span style={{ position: "absolute", top: "-10px", left: "16px", fontSize: "60px", color: "rgba(20,184,166,0.15)", fontFamily: "Georgia, serif", lineHeight: 1 }}>"</span>
            The problem was never verification. The problem is that verification became an excuse for permanent data collection.
            Zero-knowledge proofs separate the proof from the payload — and in doing so, collapse an entire category of risk.
          </blockquote>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "20px" }}>
            The architecture of traditional KYC creates three compounding problems.
            First, every institution that onboards a user becomes a data custodian with perpetual liability.
            Second, users repeat this process across dozens of platforms — each one a new attack surface.
            Third, the data, once collected, is often shared laterally across group entities, sold to data brokers,
            or retained long after the regulatory minimum period, with no cryptographic guarantee of deletion.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "20px" }}>
            Zero-knowledge proofs offer a structural exit from this compounding liability.
            A ZK proof is a cryptographic object that proves a statement is true without revealing
            the evidence behind it. Applied to compliance, this means: prove that a user is over 18,
            is not sanctions-listed, and is a verified resident of a qualifying jurisdiction —
            without transmitting the passport number, date of birth, or home address to any counterparty.
          </p>

          {/* Comparison table */}
          <div style={{ overflowX: "auto", marginBottom: "12px" }}>
            <table style={{ width: "100%", fontSize: "13px", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #1a1a2e" }}>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#64748b", fontFamily: "monospace", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500 }}>Dimension</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#64748b", fontFamily: "monospace", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500 }}>Traditional KYC</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#64748b", fontFamily: "monospace", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500 }}>ZK-KYC</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Data transmitted", "Raw documents, biometrics, address proof", "Cryptographic proof of attributes"],
                  ["Institutional storage", "Centralised DB (liability honeypot)", "No raw data stored"],
                  ["Re-verification", "Repeat per institution", "Reusable proof across verifiers"],
                  ["Breach impact", "Full identity exposure", "Zero — no raw data to leak"],
                  ["Regulatory equivalence", "Explicitly accepted", "Emerging — MAS, MiCA exploring"],
                  ["Proof freshness", "Document expiry date", "Programmable TTL in circuit"],
                  ["Selective disclosure", "Not possible — all or nothing", "Native — prove specific claims"],
                  ["Audit trail", "Centralised logs", "On-chain nullifier registry"],
                ].map(([dim, trad, zk], i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid #1a1a2e",
                      transition: "background 0.15s",
                    }}
                  >
                    <td style={{ padding: "11px 16px", color: "#f8fafc", fontWeight: 500 }}>{dim}</td>
                    <td style={{ padding: "11px 16px", color: "#94a3b8" }}>{trad}</td>
                    <td style={{ padding: "11px 16px", color: "#14b8a6" }}>{zk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "12px", fontFamily: "monospace", color: "#64748b", marginBottom: "32px" }}>
            Table 1: Traditional KYC vs ZK-KYC across key compliance dimensions
          </p>
        </section>

        {/* ── SECTION 2: ZK FOUNDATIONS ────────────────────────────────── */}
        <section id="zk-foundations" style={{ marginBottom: "72px" }}>
          <p style={{ fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase", color: "#64748b", marginBottom: "8px" }}>
            Section 02
          </p>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: "#f8fafc", marginBottom: "24px", letterSpacing: "-0.01em" }}>
            Zero-Knowledge Proof Foundations
          </h2>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "20px" }}>
            A zero-knowledge proof is a protocol between a <em style={{ color: "#f8fafc" }}>prover</em> and a <em style={{ color: "#f8fafc" }}>verifier</em>.
            The prover demonstrates knowledge of a secret witness <em>w</em> satisfying a public statement <em>x</em>
            — defined by a relation <em>R(x, w) = true</em> — without revealing <em>w</em>.
            For financial compliance, the statement might be "this address has completed KYC with a licensed provider and is not sanctions-listed";
            the witness is the user's actual identity data and the identity provider's signature over it.
          </p>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "20px" }}>
            Three properties define a ZK proof system:
          </p>

          {/* Three properties */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", marginBottom: "32px" }}>
            {[
              {
                title: "Completeness",
                color: "#14b8a6",
                desc: "If the statement is true and the prover is honest, the verifier will be convinced. A valid witness always produces a valid proof.",
              },
              {
                title: "Soundness",
                color: "#3b82f6",
                desc: "A cheating prover cannot convince the verifier of a false statement, except with negligible probability. Security reduces to computational hardness assumptions.",
              },
              {
                title: "Zero-Knowledge",
                color: "#a855f7",
                desc: "The verifier learns nothing about the witness beyond the truth of the statement. Formally: a simulator can produce an indistinguishable transcript without the witness.",
              },
            ].map(({ title, color, desc }) => (
              <div
                key={title}
                style={{
                  background: "#0a0a12",
                  border: `1px solid ${color}30`,
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <p style={{ fontSize: "11px", fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase", color, marginBottom: "8px" }}>{title}</p>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#94a3b8", margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "24px" }}>
            Modern ZK proof systems — zkSNARKs (Succinct Non-interactive ARguments of Knowledge) and zkSTARKs —
            add two further properties critical for blockchain deployment:
            <em style={{ color: "#f8fafc" }}> succinctness</em> (the proof is short regardless of witness size)
            and <em style={{ color: "#f8fafc" }}>non-interactivity</em> (no back-and-forth between prover and verifier —
            the proof is a static object that anyone can verify).
          </p>

          {/* Math formula block */}
          <div style={{ background: "#0a0a12", border: "1px solid #1a1a2e", borderRadius: "14px", overflow: "hidden", marginBottom: "32px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", borderBottom: "1px solid #1a1a2e" }}>
              <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em" }}>zkSNARK Relation</span>
              <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#14b8a6" }}>CRYPTOGRAPHIC DEFINITION</span>
            </div>
            <pre style={{ padding: "20px", margin: 0, fontSize: "13px", fontFamily: "monospace", color: "#e2e8f0", lineHeight: 1.7, overflowX: "auto" }}>
{`// A zkSNARK for relation R proves:
//   Knowledge of witness w such that R(x, w) = 1
//   Without revealing w to the verifier

Setup:    (pk, vk) ← Setup(R)          // Trusted or universal setup
Prove:    π ← Prove(pk, x, w)           // Prover generates proof
Verify:   {0,1} ← Verify(vk, x, π)     // Verifier checks proof

// Financial compliance instantiation:
R(x, w) = 1  iff:
  x = (sanctions_merkle_root, issuer_pubkey, min_age)
  w = (identity_data, issuer_signature, merkle_path)
  AND:
    issuer_signature.verify(identity_data, issuer_pubkey) = true
    age_from(identity_data) >= min_age
    merkle_nonmembership(identity_data.hash, sanctions_merkle_root, merkle_path) = true`}
            </pre>
          </div>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "20px" }}>
            The statement <em>x</em> (the public input) is known to both parties and committed on-chain.
            The witness <em>w</em> never leaves the prover's device. The proof <em>π</em> is a compact
            byte array — typically 192–288 bytes for Groth16 — that the smart contract verifier
            checks in a single transaction. If it passes, the contract knows the statement is true.
            If it fails, the transaction reverts. No personal data crosses the wire.
          </p>
        </section>

        {/* ── SECTION 3: ZK-KYC ARCHITECTURE ──────────────────────────── */}
        <section id="zk-kyc-architecture" style={{ marginBottom: "72px" }}>
          <p style={{ fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase", color: "#64748b", marginBottom: "8px" }}>
            Section 03
          </p>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: "#f8fafc", marginBottom: "24px", letterSpacing: "-0.01em" }}>
            ZK-KYC Architecture: Identity Without Disclosure
          </h2>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "20px" }}>
            The ZK-KYC stack separates identity verification into three independent roles:
            the <em style={{ color: "#f8fafc" }}>issuer</em> (a licensed KYC provider who verifies the user once),
            the <em style={{ color: "#f8fafc" }}>holder</em> (the user, who stores their credentials locally),
            and the <em style={{ color: "#f8fafc" }}>verifier</em> (a protocol, exchange, or institution that needs compliance assurance).
            The issuer never interacts with the verifier. The verifier never sees the issuer's data.
            The proof is the only link between them.
          </p>

          {/* Architecture flow terminal */}
          <div style={{ background: "#0a0a12", border: "1px solid #1a1a2e", borderRadius: "14px", overflow: "hidden", marginBottom: "32px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", borderBottom: "1px solid #1a1a2e" }}>
              <div style={{ display: "flex", gap: "6px" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f59e0b", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
              </div>
              <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em" }}>ZK-KYC Flow</span>
              <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#14b8a6" }}>SEQUENCE DIAGRAM</span>
            </div>
            <pre style={{ padding: "20px", margin: 0, fontSize: "12px", fontFamily: "monospace", color: "#e2e8f0", lineHeight: 1.75, overflowX: "auto" }}>
{`┌──────────┐          ┌──────────────┐          ┌─────────────┐          ┌──────────────┐
│  User    │          │  KYC Issuer  │          │  ZK Wallet  │          │  Verifier    │
│ (Holder) │          │  (e.g. Sumsub│          │  (Privado)  │          │  (Protocol)  │
└────┬─────┘          └──────┬───────┘          └──────┬──────┘          └──────┬───────┘
     │                        │                         │                        │
     │── [1] Submit docs ────►│                         │                        │
     │                        │── [2] Verify identity ──┤                        │
     │                        │                         │                        │
     │◄─ [3] Issue VC ────────│                         │                        │
     │   {age, country, KYC_  │                         │                        │
     │   level, expiry, sig}  │                         │                        │
     │                        │                         │                        │
     │── [4] Store VC ───────────────────────────────►  │                        │
     │                        │                         │                        │
     │                        │                         │                        │
     │   ── ── ── ── LATER: Protocol Interaction ── ── ── ── ──                 │
     │                        │                         │                        │
     │── [5] Request proof ────────────────────────────────────────────────────►│
     │                        │                    [6] Generate ZK proof         │
     │                        │                        from VC + circuit         │
     │◄── ── ── ── ── ── ── ── ── ── ── [7] Return π + public inputs ──────────│
     │                        │                         │                        │
     │── [8] Submit tx + π ────────────────────────────────────────────────────►│
     │                        │                    [9] Verify(vk, x, π) on-chain │
     │                        │                    [10] Record nullifier hash    │
     │◄── [11] Access granted ──────────────────────────────────────────────────│`}
            </pre>
          </div>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "20px" }}>
            Steps 1–3 happen once. The KYC issuer verifies the user's identity through standard document
            checks (liveness detection, document scanning, sanctions screening) and issues a
            <em style={{ color: "#f8fafc" }}> verifiable credential (VC)</em> — a signed JSON-LD object containing
            the verified attributes. This VC is stored in the user's identity wallet, encrypted with their private key.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "20px" }}>
            Steps 5–11 happen at every protocol interaction. The user generates a ZK proof from their VC —
            proving specific claims from it — and the verifier checks only the proof. A <em style={{ color: "#f8fafc" }}>nullifier</em>
            is recorded on-chain for each proof: a deterministic hash derived from the credential
            and the verifier's identifier, preventing the same credential from being reused to bypass
            per-wallet limits while preserving user pseudonymity across protocols.
          </p>

          {/* Callout */}
          <div
            style={{
              background: "rgba(20,184,166,0.06)",
              border: "1px solid rgba(20,184,166,0.15)",
              borderRadius: "12px",
              padding: "20px 24px",
              marginBottom: "32px",
            }}
          >
            <p style={{ fontSize: "11px", fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#14b8a6", marginBottom: "8px" }}>
              ◆ KEY DESIGN INSIGHT
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#cbd5e1", margin: 0 }}>
              The nullifier schema prevents both <em>double-use</em> and <em>tracking across protocols</em>:
              <code style={{ background: "#0a0a12", padding: "2px 6px", borderRadius: "4px", fontSize: "13px", color: "#14b8a6", margin: "0 4px" }}>
                nullifier = hash(credential_hash || verifier_id || epoch)
              </code>
              Same user, same credential, different verifier → different nullifier. Privacy preserved.
              Same user, same verifier, same epoch → same nullifier. Replay prevented.
            </p>
          </div>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "20px" }}>
            The credential schema determines what claims can be proven. A minimal KYC credential schema
            for DeFi protocol compliance might include: <code style={{ background: "#0a0a12", padding: "2px 6px", borderRadius: "4px", fontSize: "13px", color: "#14b8a6" }}>kyc_level</code>,
            <code style={{ background: "#0a0a12", padding: "2px 6px", borderRadius: "4px", fontSize: "13px", color: "#14b8a6" }}> country_code</code>,
            <code style={{ background: "#0a0a12", padding: "2px 6px", borderRadius: "4px", fontSize: "13px", color: "#14b8a6" }}> age_over_18</code>,
            <code style={{ background: "#0a0a12", padding: "2px 6px", borderRadius: "4px", fontSize: "13px", color: "#14b8a6" }}> accredited_investor</code>,
            <code style={{ background: "#0a0a12", padding: "2px 6px", borderRadius: "4px", fontSize: "13px", color: "#14b8a6" }}> sanctions_cleared</code>, and
            <code style={{ background: "#0a0a12", padding: "2px 6px", borderRadius: "4px", fontSize: "13px", color: "#14b8a6" }}> expiry_timestamp</code>.
            A proof can selectively disclose any subset of these claims — the circuit constrains only the
            claims the verifier needs, leaving all other attributes private.
          </p>
        </section>

        {/* ── SECTION 4: ZK-AML ────────────────────────────────────────── */}
        <section id="zk-aml" style={{ marginBottom: "72px" }}>
          <p style={{ fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase", color: "#64748b", marginBottom: "8px" }}>
            Section 04
          </p>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: "#f8fafc", marginBottom: "24px", letterSpacing: "-0.01em" }}>
            ZK-AML: Transaction Compliance Without Exposure
          </h2>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "20px" }}>
            AML compliance has a harder problem than KYC. KYC is a one-time identity check;
            AML is ongoing transaction monitoring. The standard approach — feeding transaction
            data to centralised screening services (Chainalysis, Elliptic, TRM Labs) — works but
            creates a surveillance layer that sees every transaction across every screened entity.
            ZK-AML aims to preserve the compliance guarantee while removing the need for transaction disclosure.
          </p>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "20px" }}>
            Three ZK-AML patterns are deployed in production or near-production today:
          </p>

          {/* 3 AML patterns */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "36px" }}>
            {[
              {
                num: "01",
                title: "Sanctions Exclusion Proof",
                color: "#14b8a6",
                body: "A sanctions list (OFAC SDN, UN Consolidated, EU Consolidated) is committed as a Merkle root on-chain. The user proves Merkle non-membership — that their address hash does not appear in the committed set — without revealing which address they own. The verifier checks only the root (public) and the proof (opaque). Regulators can update the Merkle root; all prior non-membership proofs automatically expire.",
              },
              {
                num: "02",
                title: "Transaction Volume Circuit",
                color: "#3b82f6",
                body: "For travel rule and structuring detection, a circuit proves that a set of signed transaction records — held privately by the prover — satisfy volume constraints: aggregate volume < threshold, no single transaction > limit, and velocity checks (no more than N transactions per hour). The verifier receives the proof, not the transactions.",
              },
              {
                num: "03",
                title: "Source-of-Funds Attestation",
                color: "#a855f7",
                body: "An institutional counterparty proves that funds originate from a set of approved sources — licensed exchanges, verified wallets — committed in a Merkle tree of trusted addresses. The proof certifies 'all inputs to this transaction came from approved sources' without revealing which exchange or wallet was the specific source.",
              },
            ].map(({ num, title, color, body }) => (
              <div
                key={num}
                style={{
                  background: "#0a0a12",
                  border: "1px solid #1a1a2e",
                  borderRadius: "14px",
                  padding: "24px",
                  display: "flex",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    minWidth: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    border: `2px solid ${color}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "monospace",
                    fontSize: "13px",
                    color,
                    fontWeight: 700,
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  {num}
                </div>
                <div>
                  <p style={{ fontSize: "16px", fontWeight: 600, color: "#f8fafc", marginBottom: "10px" }}>{title}</p>
                  <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#94a3b8", margin: 0 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Merkle non-membership code block */}
          <div style={{ background: "#0a0a12", border: "1px solid #1a1a2e", borderRadius: "14px", overflow: "hidden", marginBottom: "32px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", borderBottom: "1px solid #1a1a2e" }}>
              <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em" }}>Circom — Sanctions Non-Membership Circuit (simplified)</span>
              <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#14b8a6" }}>CIRCUIT DESIGN</span>
            </div>
            <pre style={{ padding: "20px", margin: 0, fontSize: "12px", fontFamily: "monospace", color: "#e2e8f0", lineHeight: 1.75, overflowX: "auto" }}>
{`pragma circom 2.1.0;
include "circomlib/circuits/poseidon.circom";
include "circomlib/circuits/merkleProof.circom";

// Proves: address is NOT in the sanctions Merkle tree
// Public:  sanctions_root (committed on-chain)
// Private: address, merkle_path, path_indices

template SanctionsExclusion(tree_depth) {
    // Public inputs
    signal input sanctions_root;

    // Private inputs (never revealed)
    signal input address;
    signal input merkle_path[tree_depth];
    signal input path_indices[tree_depth];

    // 1. Hash the address to a leaf
    component hasher = Poseidon(1);
    hasher.inputs[0] <== address;
    signal leaf <== hasher.out;

    // 2. Compute the Merkle root for this leaf using the provided path
    component merkleCheck = MerkleProof(tree_depth);
    merkleCheck.leaf <== leaf;
    merkleCheck.pathElements <== merkle_path;
    merkleCheck.pathIndices <== path_indices;
    signal computed_root <== merkleCheck.root;

    // 3. CONSTRAINT: computed root must NOT equal sanctions root
    //    (enforce non-membership — if address IS in tree, proof fails)
    component neq = IsZero();
    neq.in <== computed_root - sanctions_root;
    neq.out === 0;  // Must be zero diff = ZERO, i.e. NOT in tree
    // NOTE: full non-membership requires Sparse Merkle Tree (SMT)
    //       with ordered leaves and boundary proof — see iden3/go-merkletree
}`}
            </pre>
          </div>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "20px" }}>
            In production, Sparse Merkle Trees (SMTs) replace standard Merkle trees for non-membership proofs.
            An SMT assigns a canonical position to every possible leaf; a non-membership proof
            demonstrates that the path from root to the expected position is empty.
            The iden3 team's <code style={{ background: "#0a0a12", padding: "2px 6px", borderRadius: "4px", fontSize: "13px", color: "#14b8a6" }}>go-merkletree-sql</code> library
            and Aztec's <code style={{ background: "#0a0a12", padding: "2px 6px", borderRadius: "4px", fontSize: "13px", color: "#14b8a6" }}>indexed-merkle-tree</code> are
            the two most production-ready implementations.
          </p>
        </section>

        {/* ── SECTION 5: PROOF SYSTEM SELECTION ────────────────────────── */}
        <section id="proof-systems" style={{ marginBottom: "72px" }}>
          <p style={{ fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase", color: "#64748b", marginBottom: "8px" }}>
            Section 05
          </p>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: "#f8fafc", marginBottom: "24px", letterSpacing: "-0.01em" }}>
            Proof System Selection: Groth16, PLONK &amp; STARKs
          </h2>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "24px" }}>
            Choosing a proof system is an engineering trade-off between setup trust requirements,
            proof size, verification cost, prover efficiency, and cryptographic assumption strength.
            For financial applications where on-chain verification gas cost and proof reusability matter,
            the choice typically narrows to three systems:
          </p>

          <div style={{ overflowX: "auto", marginBottom: "12px" }}>
            <table style={{ width: "100%", fontSize: "13px", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #1a1a2e" }}>
                  {["Property", "Groth16", "PLONK / FFLONK", "STARKs"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "12px 14px", color: "#64748b", fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Trusted setup", "Per-circuit (toxic waste risk)", "Universal (one ceremony)", "None required"],
                  ["Proof size", "~192 bytes ✓✓", "~768 bytes ✓", "~100–500 KB ✗"],
                  ["Verification gas (EVM)", "~250k gas ✓", "~300–400k gas ✓", "Not native (requires L2)"],
                  ["Prover time (10k constraints)", "~1–2s mobile", "~3–5s mobile", "~5–15s mobile"],
                  ["Recursion/aggregation", "Possible (Halo2, SnarkPack)", "Native (UltraPLONK)", "Native (FRI-based)"],
                  ["Post-quantum security", "No (ECDLP)", "No (ECDLP)", "Yes (hash-based)"],
                  ["Circuit languages", "Circom, Bellman", "Halo2, PLONKY2", "Cairo, Starknet"],
                  ["Best for", "On-chain KYC gates, gas-critical", "Multi-circuit compliance suites", "Rollup proofs, L2 settlement"],
                ].map(([prop, g, p, s], i) => (
                  <tr
                    key={i}
                    style={{ borderBottom: "1px solid #1a1a2e" }}
                  >
                    <td style={{ padding: "10px 14px", color: "#f8fafc", fontWeight: 500, fontSize: "13px" }}>{prop}</td>
                    <td style={{ padding: "10px 14px", color: "#14b8a6", fontSize: "13px" }}>{g}</td>
                    <td style={{ padding: "10px 14px", color: "#3b82f6", fontSize: "13px" }}>{p}</td>
                    <td style={{ padding: "10px 14px", color: "#a855f7", fontSize: "13px" }}>{s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "12px", fontFamily: "monospace", color: "#64748b", marginBottom: "32px" }}>
            Table 2: ZK proof system comparison for financial compliance applications
          </p>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "20px" }}>
            For most early-stage ZK-KYC deployments, <strong style={{ color: "#f8fafc" }}>Groth16 remains the pragmatic choice</strong>:
            the smallest on-chain footprint, the most audited circuit libraries (Circom ecosystem),
            and the widest toolchain support (snarkjs, circom, Hardhat plugins).
            The per-circuit trusted setup is a real risk — mitigated by running a large multi-party
            computation (MPC) ceremony where even one honest participant guarantees security.
            Zcash's Sapling ceremony (90 participants) and the Tornado Cash ceremony (1,114 contributions)
            are the reference implementations. For production deployments serving regulated institutions,
            running a ceremony with 50+ independent participants across multiple jurisdictions is the minimum bar.
          </p>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "20px" }}>
            <strong style={{ color: "#f8fafc" }}>PLONK/FFLONK</strong> becomes attractive when a compliance system needs many circuit variants
            (different claim types, jurisdiction-specific rule sets) because the universal setup amortises
            across all circuits. Aztec's Noir language and Halo2 from the Zcash Foundation
            are production-grade PLONK-family implementations with active financial application development.
          </p>

          {/* Pull quote */}
          <blockquote
            style={{
              borderLeft: "3px solid #3b82f6",
              paddingLeft: "24px",
              margin: "36px 0",
              fontStyle: "italic",
              fontSize: "18px",
              color: "#cbd5e1",
              lineHeight: 1.65,
              position: "relative",
            }}
          >
            <span style={{ position: "absolute", top: "-10px", left: "16px", fontSize: "60px", color: "rgba(59,130,246,0.15)", fontFamily: "Georgia, serif", lineHeight: 1 }}>"</span>
            Post-quantum resistance matters for long-lived compliance records. A sanctions non-membership
            proof stored on-chain today might be computationally broken in 15 years. STARKs, whose
            security rests on hash functions rather than elliptic curve assumptions, provide a durable
            guarantee. For most active transaction verification, the quantum threat is distant — but for
            permanent on-chain identity anchors, it deserves consideration in system design.
          </blockquote>
        </section>

        {/* ── SECTION 6: PRODUCTION SYSTEMS ────────────────────────────── */}
        <section id="production-systems" style={{ marginBottom: "72px" }}>
          <p style={{ fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase", color: "#64748b", marginBottom: "8px" }}>
            Section 06
          </p>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: "#f8fafc", marginBottom: "24px", letterSpacing: "-0.01em" }}>
            Production Systems: Polygon ID (Privado), Verite, Aztec &amp; Billions Network
          </h2>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "20px" }}>
            Four ecosystems have reached production deployment for ZK-based identity in financial applications:
          </p>

          {/* System cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "36px" }}>
            {[
              {
                name: "Privado ID (formerly Polygon ID)",
                badge: "PRODUCTION",
                badgeColor: "#10b981",
                tech: "iden3 protocol · Groth16 · Circom circuits · Sparse Merkle Tree state",
                desc: "Privado ID implements the iden3 identity protocol: identity trees, credential schema registry, and ZK query language. Identity providers issue W3C Verifiable Credentials to users; the Privado wallet generates Groth16 proofs in response to verifier queries. The on-chain component is a Polygon-native smart contract that validates proofs against committed identity state roots. Deployed in production by Fractal ID, Quadrata, and several Southeast Asian digital asset exchanges. Recently launched their Billions Network L2 for high-throughput ZK identity applications along with Billions token listed on Binance and other major exchanges.",
                links: ["iden3/circom", "0xPolygonID/js-sdk", "iden3/go-merkletree-sql"],
              },
              {
                name: "Verite (Circle / Centre)",
                badge: "PRODUCTION",
                badgeColor: "#10b981",
                tech: "W3C VCs · JWT/JWS presentation · EIP-712 on-chain attestations · issuer registry",
                desc: "Verite is a credential interchange standard for financial services, co-developed by Circle, Coinbase, and ConsenSys. Unlike Privado, Verite does not use ZK proofs natively — it uses signed Verifiable Presentations. A ZK extension (Verite + ZK) is in development, which would allow on-chain verification of Verite-issued KYC credentials without revealing underlying credential data. The existing framework is production-deployed for USDC institutional on-ramps.",
                links: ["circlefin/verite", "decentralized-identity/did-jwt-vc"],
              },
              {
                name: "Aztec Protocol (ZK-native L2)",
                badge: "MAINNET",
                badgeColor: "#14b8a6",
                tech: "PLONK (UltraPLONK) · Noir · Private note model · Proof aggregation",
                desc: "Aztec takes a different approach: rather than bolting ZK proofs onto existing public chains, it provides a ZK-native execution environment where all state is private by default. Transactions are encrypted; the contract logic proves validity without revealing inputs. For compliance, Aztec applications can expose selective disclosure hooks — revealing only what a regulator-approved circuit requires while keeping transaction details private. The Aztec compliance escrow pattern allows regulatory access under court order without creating a general surveillance capability.",
                links: ["AztecProtocol/aztec-packages", "noir-lang/noir"],
              },
            ].map(({ name, badge, badgeColor, tech, desc, links }) => (
              <div
                key={name}
                style={{
                  background: "#0a0a12",
                  border: "1px solid #1a1a2e",
                  borderRadius: "14px",
                  padding: "24px",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", marginBottom: "12px" }}>
                  <p style={{ fontSize: "17px", fontWeight: 700, color: "#f8fafc", margin: 0 }}>{name}</p>
                  <span style={{ fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.12em", padding: "4px 10px", borderRadius: "100px", background: `${badgeColor}18`, color: badgeColor, border: `1px solid ${badgeColor}30` }}>{badge}</span>
                </div>
                <p style={{ fontSize: "12px", fontFamily: "monospace", color: "#64748b", marginBottom: "12px" }}>{tech}</p>
                <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#94a3b8", marginBottom: "14px" }}>{desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {links.map((l) => (
                    <span key={l} style={{ fontSize: "11px", fontFamily: "monospace", background: "#14b8a608", border: "1px solid #14b8a620", borderRadius: "6px", padding: "3px 8px", color: "#14b8a6" }}>{l}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div style={{ overflowX: "auto", marginBottom: "12px" }}>
            <table style={{ width: "100%", fontSize: "13px", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #1a1a2e" }}>
                  {["System", "ZK Proof Type", "On-chain Verification", "Issuer Model", "Best Fit"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "11px 14px", color: "#64748b", fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Privado ID", "Groth16 (iden3)", "Polygon/EVM", "Licensed KYC providers", "Protocol-level gating"],
                  ["Verite", "Signed VP (ZK extension WIP)", "EIP-712 attestation", "Circle, licensed issuers", "Stablecoin compliance"],
                  ["Aztec", "PLONK (UltraPLONK)", "Aztec L2 native", "Self-sovereign + escrow", "Private DeFi, custody"],
                  ["Sismo", "Hydra-S1 (Groth16)", "Polygon, Gnosis", "On-chain data groups", "DAO gating, airdrops"],
                  ["Holonym", "Groth16 (custom)", "Ethereum, Optimism", "Holonym issuer network", "Sybil resistance"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{ borderBottom: "1px solid #1a1a2e" }}
                  >
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: "10px 14px", color: j === 0 ? "#f8fafc" : "#94a3b8", fontWeight: j === 0 ? 600 : 400, fontSize: "13px" }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "12px", fontFamily: "monospace", color: "#64748b", marginBottom: "32px" }}>
            Table 3: Production ZK identity systems comparison for financial applications
          </p>
        </section>

        {/* ── SECTION 7: CIRCUIT DESIGN ─────────────────────────────────── */}
        <section id="circuit-design" style={{ marginBottom: "72px" }}>
          <p style={{ fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase", color: "#64748b", marginBottom: "8px" }}>
            Section 07
          </p>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: "#f8fafc", marginBottom: "24px", letterSpacing: "-0.01em" }}>
            Circuit Design for Compliance Applications
          </h2>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "20px" }}>
            Writing a ZK circuit for compliance is more like writing a hardware specification than application code.
            Every operation must be expressed as a system of polynomial constraints over a prime field.
            Conditionals, comparisons, and data structures that feel trivial in normal programming
            become non-trivial constraint engineering challenges.
            The most common source of exploitable bugs in production ZK systems is
            <em style={{ color: "#ef4444" }}> underconstraint</em> — a variable that should be constrained
            to a specific range is left partially free, allowing an adversary to satisfy the circuit
            with a false witness.
          </p>

          <div style={{ background: "#0a0a12", border: "1px solid #1a1a2e", borderRadius: "14px", overflow: "hidden", marginBottom: "32px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", borderBottom: "1px solid #1a1a2e" }}>
              <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em" }}>Range Check — A Common Underconstraint Pitfall</span>
              <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#ef4444" }}>SECURITY CRITICAL</span>
            </div>
            <pre style={{ padding: "20px", margin: 0, fontSize: "12px", fontFamily: "monospace", color: "#e2e8f0", lineHeight: 1.75, overflowX: "auto" }}>
{`// INSECURE: This does NOT constrain 'age' to be >= 18
// An adversary can supply any field element that satisfies the comparison
template AgeCheck_INSECURE() {
    signal input age;
    signal input min_age;
    signal output valid;

    valid <== age - min_age;  // ← WRONG: not a boolean constraint
}

// SECURE: Use a bitwise range decomposition to enforce age is in [0, 2^8)
// then constrain comparison using Num2Bits + LessThan gadgets
template AgeCheck_SECURE() {
    signal input age;
    signal input min_age;  // public input

    // Decompose age into 8 bits — proves it's a valid 8-bit integer
    component bits = Num2Bits(8);
    bits.in <== age;

    // LessThan gadget with n=8 bits (range-constrained)
    component lt = LessThan(8);
    lt.in[0] <== min_age;   // min_age < age → valid
    lt.in[1] <== age;
    lt.out === 0;            // 0 means NOT (min_age < age), so age >= min_age
    // Or: use GreaterEqThan gadget from circomlib for clarity
}`}
            </pre>
          </div>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "20px" }}>
            The <code style={{ background: "#0a0a12", padding: "2px 6px", borderRadius: "4px", fontSize: "13px", color: "#14b8a6" }}>circomlib</code> library
            (maintained by iden3) provides audited gadgets for common operations:
            bitwise arithmetic, Poseidon hashing, EdDSA signature verification, Merkle path verification,
            and comparison operators. Never reimplement these — circuit bugs are not caught by testing
            the way application bugs are, because a circuit that generates valid proofs may still
            be exploitable through a carefully crafted false witness that satisfies underspecified constraints.
          </p>

          {/* Key circuit design rules */}
          <div style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)", borderRadius: "12px", padding: "20px 24px", marginBottom: "32px" }}>
            <p style={{ fontSize: "11px", fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#ef4444", marginBottom: "12px" }}>⚠ CIRCUIT SECURITY RULES</p>
            <ul style={{ margin: 0, padding: "0 0 0 20px", color: "#cbd5e1", fontSize: "14px", lineHeight: 2 }}>
              <li>All inputs that should be bounded (ages, timestamps, amounts) must pass through <code style={{ background: "#0a0a12", padding: "1px 5px", borderRadius: "3px", fontSize: "12px", color: "#14b8a6" }}>Num2Bits(n)</code> before use in arithmetic.</li>
              <li>Signal assignments use <code style={{ background: "#0a0a12", padding: "1px 5px", borderRadius: "3px", fontSize: "12px", color: "#14b8a6" }}>===</code> (constraint) not <code style={{ background: "#0a0a12", padding: "1px 5px", borderRadius: "3px", fontSize: "12px", color: "#14b8a6" }}>&lt;==</code> (assign) for outputs that must be enforced.</li>
              <li>Every signal that flows into a conditional must be boolean-constrained: <code style={{ background: "#0a0a12", padding: "1px 5px", borderRadius: "3px", fontSize: "12px", color: "#14b8a6" }}>b * (b - 1) === 0</code></li>
              <li>Use Poseidon hash, not SHA-256, inside circuits (SHA-256 requires ~25k constraints; Poseidon requires ~240).</li>
              <li>Formal verification (Ecne, ZKAP) should accompany any audit for production compliance circuits.</li>
            </ul>
          </div>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "20px" }}>
            For a production ZK-KYC system handling accredited investor verification, the circuit
            typically needs to verify: the issuer's EdDSA signature over the credential,
            the credential's expiry timestamp relative to the current block timestamp,
            the jurisdiction claim against a country allowlist (Merkle membership proof),
            and the specific attribute being queried (e.g., <code style={{ background: "#0a0a12", padding: "2px 6px", borderRadius: "4px", fontSize: "13px", color: "#14b8a6" }}>kyc_level &gt;= 2</code>).
            A well-designed circuit for this full check runs to approximately 35,000–55,000 constraints
            using circomlib gadgets — manageable for mobile proving in 2–5 seconds.
          </p>
        </section>

        {/* ── SECTION 8: PERFORMANCE ────────────────────────────────────── */}
        <section id="performance" style={{ marginBottom: "72px" }}>
          <p style={{ fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase", color: "#64748b", marginBottom: "8px" }}>
            Section 08
          </p>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: "#f8fafc", marginBottom: "24px", letterSpacing: "-0.01em" }}>
            Performance Engineering &amp; Gas Cost Analysis
          </h2>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "20px" }}>
            Performance has historically been ZK's Achilles heel. Proof generation for complex circuits
            was measured in minutes on desktop hardware as recently as 2022. The engineering progress
            since then has been significant — but understanding current bottlenecks is essential
            before designing a production system that relies on real-time compliance gating.
          </p>

          {/* Formula: proving cost model */}
          <div style={{ background: "#0a0a12", border: "1px solid #1a1a2e", borderRadius: "14px", overflow: "hidden", marginBottom: "32px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", borderBottom: "1px solid #1a1a2e" }}>
              <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em" }}>Proving Time Model</span>
              <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#14b8a6" }}>PERFORMANCE FORMULA</span>
            </div>
            <pre style={{ padding: "20px", margin: 0, fontSize: "13px", fontFamily: "monospace", color: "#e2e8f0", lineHeight: 1.75, overflowX: "auto" }}>
{`// Groth16 prover time (approximate):
T_prove ≈ k₁ · C · log(C) / CPU_threads   (for CPU proving)
T_prove ≈ k₂ · C / GPU_cores              (for GPU proving)

// Where:
//   C = number of constraints in the circuit
//   k₁ ≈ 40 ns per constraint·log-factor (Apple M2, snarkjs WASM)
//   k₂ ≈ 2 ns per constraint (RTX 3090, RapidSnark)

// Empirical benchmarks (2025 hardware, snarkjs WASM):
//   C =  10,000  → ~1.2s  (simple age + sanctions check)
//   C =  30,000  → ~4.1s  (full KYC claim + country allowlist)
//   C = 100,000  → ~16s   (complex AML volume circuit)
//   C = 500,000  → ~95s   (too slow for client-side; needs proving server)

// RapidSnark (native, M2):
//   C = 100,000  → ~0.8s  (GPU acceleration possible)
//   C = 500,000  → ~3.2s

// Rule of thumb: keep compliance circuits under 50,000 constraints
// for acceptable client-side proving on mid-range smartphones (2024+)`}
            </pre>
          </div>

          {/* Gas cost table */}
          <div style={{ overflowX: "auto", marginBottom: "12px" }}>
            <table style={{ width: "100%", fontSize: "13px", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #1a1a2e" }}>
                  {["Network", "Proof Type", "Verification Gas", "Cost @ 30 gwei", "Cost @ 0.5 gwei (L2)"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "11px 14px", color: "#64748b", fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Ethereum L1", "Groth16", "~260,000", "~$5.20", "—"],
                  ["Ethereum L1", "PLONK", "~380,000", "~$7.60", "—"],
                  ["Polygon PoS", "Groth16", "~260,000", "~$0.008", "—"],
                  ["Arbitrum One", "Groth16", "~260,000", "—", "~$0.04"],
                  ["zkSync Era", "Groth16", "~260,000", "—", "~$0.02"],
                  ["Aztec L2", "PLONK (native)", "~180,000", "—", "~$0.005"],
                  ["Polygon CDK (ZK L2)", "Groth16 (batched)", "~1,200 amortised", "—", "~$0.0001"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{ borderBottom: "1px solid #1a1a2e" }}
                  >
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: "10px 14px", color: j === 0 ? "#f8fafc" : "#94a3b8", fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "12px", fontFamily: "monospace", color: "#64748b", marginBottom: "32px" }}>
            Table 4: ZK proof verification gas costs across deployment targets (May 2026, ETH ~$2,800)
          </p>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "20px" }}>
            For high-throughput compliance applications (exchange login, per-transaction AML checks),
            the unit economics only work on L2 networks or through <em style={{ color: "#f8fafc" }}>proof aggregation</em>.
            Recursive proof aggregation — batching hundreds of individual compliance proofs into a
            single aggregate proof verified on-chain — reduces per-proof gas cost by 2–3 orders of magnitude.
            Polygon's zkEVM validium mode and Aztec's proof aggregation layer both support this pattern.
          </p>

          <div style={{ background: "rgba(20,184,166,0.06)", border: "1px solid rgba(20,184,166,0.15)", borderRadius: "12px", padding: "20px 24px", marginBottom: "32px" }}>
            <p style={{ fontSize: "11px", fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#14b8a6", marginBottom: "8px" }}>
              ◆ PROVING SERVER ARCHITECTURE
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#cbd5e1", margin: 0 }}>
              When circuits exceed ~50k constraints, delegate proof generation to a proving server.
              The user's wallet sends the encrypted witness to the server, which generates the proof
              and returns π. The server never learns plaintext witness values — encryption uses the
              circuit's public key, and the server processes it homomorphically. For maximum trust minimisation,
              use a decentralised proving network (Risc0 Bonsai, Gevulot, Succinct Labs)
              rather than a centralised API endpoint.
            </p>
          </div>
        </section>

        {/* ── SECTION 9: FATF TRAVEL RULE ───────────────────────────────── */}
        <section id="fatf-travel-rule" style={{ marginBottom: "72px" }}>
          <p style={{ fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase", color: "#64748b", marginBottom: "8px" }}>
            Section 09
          </p>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: "#f8fafc", marginBottom: "24px", letterSpacing: "-0.01em" }}>
            FATF Travel Rule: The ZK Approach
          </h2>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "20px" }}>
            FATF Recommendation 16 requires Virtual Asset Service Providers (VASPs) to collect and transmit
            originator and beneficiary information for transactions above the threshold (USD 1,000 / EUR 1,000 in most jurisdictions).
            This is the direct regulatory collision point for ZK privacy: the regulation explicitly requires data sharing
            between VASPs, which ZK is designed to avoid.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "20px" }}>
            The ZK-compatible Travel Rule architecture separates what the regulation requires from what the regulation
            forces. FATF requires that:
          </p>
          <ul style={{ color: "#94a3b8", fontSize: "16px", lineHeight: 2, paddingLeft: "24px", marginBottom: "24px" }}>
            <li>Originator VASP verifies originator identity (KYC obligation — satisfiable with ZK)</li>
            <li>Beneficiary VASP verifies that originator data is available if requested by authorities (data access obligation)</li>
            <li>Sanctions screening occurs on both sides (satisfiable with ZK non-membership proof)</li>
            <li>Data is retained for 5 years (storage obligation — requires encrypted off-chain escrow)</li>
          </ul>

          <div style={{ background: "#0a0a12", border: "1px solid #1a1a2e", borderRadius: "14px", overflow: "hidden", marginBottom: "32px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", borderBottom: "1px solid #1a1a2e" }}>
              <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.1em" }}>ZK Travel Rule Protocol</span>
              <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#14b8a6" }}>FLOW DESIGN</span>
            </div>
            <pre style={{ padding: "20px", margin: 0, fontSize: "12px", fontFamily: "monospace", color: "#e2e8f0", lineHeight: 1.75, overflowX: "auto" }}>
{`// ZK-compatible FATF Travel Rule flow:

1. ORIGINATOR VASP (Sender side):
   a. Perform standard KYC on originator
   b. Generate ZK credential: prove(originator_is_KYC_verified, not_sanctions_listed)
   c. Encrypt raw originator data → E_kyc (AES-256-GCM, key escrowed with regulator)
   d. Commit: H(E_kyc) → on-chain travel rule registry

2. TRANSACTION:
   a. Attach π_kyc (ZK proof of KYC) and H(E_kyc) (encrypted data commitment) to tx
   b. Beneficiary VASP receives π_kyc + H(E_kyc)

3. BENEFICIARY VASP (Receiver side):
   a. Verify π_kyc on-chain → confirms originator is KYC'd and sanctions-clear
   b. Perform own ZK sanctions check on beneficiary address
   c. Store H(E_kyc) in compliance log for 5 years
   d. Does NOT receive raw personal data — but can retrieve E_kyc on authority demand

4. ON AUTHORITY REQUEST (regulator subpoena):
   a. Originator VASP provides E_kyc decryption key to regulator
   b. Regulator decrypts → full originator data available
   c. On-chain H(E_kyc) provides tamper-proof audit trail of what was escrowed

// Result: Day-to-day operations use ZK proofs (privacy preserved)
//         Regulatory access preserved through escrow mechanism
//         No data shared between VASPs in normal operations`}
            </pre>
          </div>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "20px" }}>
            MAS (Singapore) published a Technology Risk Management Notice in late 2025 acknowledging
            ZK-based compliance architectures as "technically viable" for meeting Travel Rule requirements,
            provided that the encrypted data escrow is accessible to MAS within 48 hours of a legal demand.
            BNM (Malaysia) is expected to follow with similar guidance by Q3 2026.
            The EU's MiCA regulation and the DORA framework both permit ZK-based identity proofs
            in the context of regulated crypto-asset service providers, subject to supervisory inspection rights.
          </p>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "20px" }}>
            OpenVASP, Notabene, and TRM Labs are each developing ZK-native Travel Rule extensions
            to their existing inter-VASP messaging standards. The critical engineering challenge
            is not the ZK proof itself — it is the key management architecture for the encrypted escrow:
            who holds the decryption keys, how are they rotated, and how do you guarantee availability
            to authorities without creating a backdoor to the general public.
          </p>

          <div
            style={{
              background: "rgba(245,158,11,0.06)",
              border: "1px solid rgba(245,158,11,0.15)",
              borderRadius: "12px",
              padding: "20px 24px",
              marginBottom: "32px",
            }}
          >
            <p style={{ fontSize: "11px", fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#f59e0b", marginBottom: "8px" }}>⚡ REGULATORY WATCH</p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#cbd5e1", margin: 0 }}>
              The escrow key architecture is the political fault line. Threshold secret sharing (Shamir 3-of-5
              among originator VASP, beneficiary VASP, and three regulators) satisfies the multi-party
              interest without a single-authority backdoor. This design is being piloted by MAS FinTech
              Regulatory Sandbox participants as of Q1 2026. Do not ship a production ZK Travel Rule
              system without legal review in each operating jurisdiction — the regulatory text still has
              ambiguity around whether ZK proofs satisfy the explicit "transmit originator information" language.
            </p>
          </div>
        </section>

        {/* ── SECTION 10: FAILURE MODES ─────────────────────────────────── */}
        <section id="failure-modes" style={{ marginBottom: "72px" }}>
          <p style={{ fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase", color: "#64748b", marginBottom: "8px" }}>
            Section 10
          </p>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: "#f8fafc", marginBottom: "24px", letterSpacing: "-0.01em" }}>
            Failure Modes &amp; Attack Vectors
          </h2>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "24px" }}>
            ZK systems fail differently from traditional software — and often silently. A compromised
            trusted setup, an underconstrained circuit, or a corrupted credential issuer can
            produce a system that generates valid-looking proofs for false statements.
            Unlike a buffer overflow that crashes a process, a ZK exploit may operate undetected
            until forensic analysis catches an impossible state. Here are the vectors that matter.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
            {[
              {
                severity: "CRITICAL",
                color: "#ef4444",
                title: "Trusted Setup Compromise (Groth16)",
                body: "If the 'toxic waste' from a Groth16 setup ceremony is not destroyed, the holder can generate proofs for false statements that pass on-chain verification. Mitigation: multi-party ceremony with 50+ independent participants; require at least one adversarial contribution. Alternatively, use PLONK with a universal setup that does not require per-circuit ceremonies.",
              },
              {
                severity: "CRITICAL",
                color: "#ef4444",
                title: "Circuit Underconstraint Bugs",
                body: "A circuit that fails to fully constrain its signals allows an adversary to supply a witness that satisfies the R1CS/PLONK constraints without the underlying statement being true. The Tornado Cash contract had an underconstraint bug (fixed in v2) that allowed partial double-spending. Mitigation: formal verification using Ecne or ZKAP, independent audit by a ZK-specialised firm (Least Authority, Trail of Bits, ABDK).",
              },
              {
                severity: "HIGH",
                color: "#f59e0b",
                title: "Credential Issuer Oracle Risk",
                body: "A ZK proof is only as honest as the issuer who signed the credential. A compromised or colluding KYC provider can issue valid credentials for false identities — and the ZK proof will correctly prove that the credential is valid. Mitigation: issuer registry with multi-sig update rights, credential revocation lists committed on-chain, regulatory licensing requirements for issuers.",
              },
              {
                severity: "HIGH",
                color: "#f59e0b",
                title: "Prover Centralisation",
                body: "Delegating proof generation to a centralised proving API creates a censorship and availability risk: the proving service can refuse to generate proofs for certain users, or be compelled to do so by legal order. Mitigation: client-side proving for small circuits, decentralised proving networks (Gevulot, Risc0 Bonsai) for large circuits.",
              },
              {
                severity: "MEDIUM",
                color: "#14b8a6",
                title: "Nullifier Registry Spam / DoS",
                body: "An on-chain nullifier registry is a gas-burning target. An adversary who obtains a valid credential can generate large numbers of valid proofs with different nullifiers (by varying the verifier_id input) to inflate the registry and raise gas costs for legitimate users. Mitigation: rate-limiting at credential issuance, epoch-bounded nullifiers that expire, and spam fees collected at proof submission.",
              },
              {
                severity: "MEDIUM",
                color: "#14b8a6",
                title: "Regulatory Non-Recognition",
                body: "A technically valid ZK compliance system may not satisfy a regulator's interpretation of KYC/AML obligations. In many jurisdictions, KYC regulations were written assuming data transfer, not proof transfer. Deploying a ZK compliance system without regulatory pre-approval creates legal exposure if an examiner deems the proofs insufficient. Mitigation: engage regulators through sandbox programmes before production launch; obtain written guidance where possible.",
              },
              {
                severity: "LOW",
                color: "#64748b",
                title: "Proof Replay Across Epochs",
                body: "Without epoch binding in the circuit, a valid proof generated at time T remains valid at time T+N even if the underlying credential has been revoked. Mitigation: include block.timestamp or a sequencer-committed epoch value in the public inputs, forcing proof regeneration per session.",
              },
            ].map(({ severity, color, title, body }) => (
              <div
                key={title}
                style={{
                  background: "#0a0a12",
                  border: "1px solid #1a1a2e",
                  borderRadius: "12px",
                  padding: "18px 22px",
                  borderLeft: `3px solid ${color}`,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.12em", padding: "3px 8px", borderRadius: "4px", background: `${color}18`, color, border: `1px solid ${color}30` }}>{severity}</span>
                  <p style={{ fontSize: "15px", fontWeight: 600, color: "#f8fafc", margin: 0 }}>{title}</p>
                </div>
                <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#94a3b8", margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 11: DEPLOYMENT PHASES ────────────────────────────── */}
        <section id="deployment-phases" style={{ marginBottom: "72px" }}>
          <p style={{ fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase", color: "#64748b", marginBottom: "8px" }}>
            Section 11
          </p>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: "#f8fafc", marginBottom: "24px", letterSpacing: "-0.01em" }}>
            Deployment Playbook: Five Phases
          </h2>

          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#94a3b8", marginBottom: "32px" }}>
            A realistic ZK compliance deployment for a regulated financial application — exchange, lending protocol,
            or payment provider — follows five phases spanning 6–18 months depending on regulatory complexity.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "40px" }}>
            {[
              {
                phase: "01",
                title: "Regulatory Pre-Engagement",
                duration: "Month 1–2",
                color: "#14b8a6",
                steps: [
                  "Map ZK compliance approach to existing KYC/AML regulatory text in each operating jurisdiction",
                  "Engage MAS/BNM/FCA via FinTech sandbox or direct consultation — obtain written guidance on ZK proof acceptability",
                  "Define the compliance claims required (minimum viable KYC claims per regulatory obligation)",
                  "Retain ZK-specialised legal counsel familiar with FATF Recommendations 15 and 16",
                ],
              },
              {
                phase: "02",
                title: "Circuit Design &amp; Formal Verification",
                duration: "Month 2–5",
                color: "#3b82f6",
                steps: [
                  "Define credential schema with issuer (map to W3C VC standard, align with iden3 or Verite)",
                  "Write Circom/Noir circuits for required claim types; use circomlib gadgets exclusively for crypto primitives",
                  "Run Ecne formal verification to detect underconstrained signals before external audit",
                  "Commission ZK circuit audit (Least Authority, Trail of Bits, or ZKSecurity) — minimum 6-week engagement",
                  "Benchmark circuit performance on target device profiles (mid-range Android, iOS, proving server)",
                ],
              },
              {
                phase: "03",
                title: "Trusted Setup or PLONK Universal Setup",
                duration: "Month 5–6",
                color: "#a855f7",
                steps: [
                  "If Groth16: run Perpetual Powers of Tau ceremony contribution; contribute to Phase 2 per-circuit setup with 50+ participants",
                  "Coordinate with participants across independent jurisdictions — documented, public ceremony log",
                  "If PLONK/Halo2: use existing universal trusted setup (Hermez ceremony, Aztec Ignition) + circuit-specific contributions",
                  "Publish setup attestation reports and toxic waste destruction proofs (video evidence, multi-party attestation)",
                ],
              },
              {
                phase: "04",
                title: "Issuer Integration &amp; Testnet Deployment",
                duration: "Month 6–10",
                color: "#f59e0b",
                steps: [
                  "Integrate with licensed KYC issuer (Fractal ID, Synaps, Sumsub with Privado ID extension)",
                  "Deploy verifier smart contracts to testnet; integrate nullifier registry and Merkle root oracles",
                  "Build wallet SDK integration (Privado ID JS SDK or custom wallet flow for mobile)",
                  "Run end-to-end compliance simulation: issuance → proof generation → on-chain verification → nullifier check",
                  "Performance load test: 1,000 concurrent proof submissions, gas estimation at peak network conditions",
                ],
              },
              {
                phase: "05",
                title: "Mainnet Launch &amp; Monitoring",
                duration: "Month 10–18",
                color: "#10b981",
                steps: [
                  "Deploy to mainnet (target Polygon or L2 for gas economics; Ethereum for highest security guarantees)",
                  "Maintain on-chain sanctions Merkle root oracle — update within 24 hours of new OFAC/UN list publications",
                  "Implement revocation registry for compromised or expired credentials",
                  "Establish monitoring dashboards: proof failure rates, nullifier collision attempts, suspicious claim patterns",
                  "Schedule semi-annual circuit security reviews — ZK attack surface evolves rapidly",
                ],
              },
            ].map(({ phase, title, duration, color, steps }) => (
              <div
                key={phase}
                style={{
                  background: "#0a0a12",
                  border: "1px solid #1a1a2e",
                  borderRadius: "14px",
                  padding: "24px",
                  display: "flex",
                  gap: "20px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      border: `2px solid ${color}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "monospace",
                      fontSize: "14px",
                      color,
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {phase}
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
                    <p style={{ fontSize: "17px", fontWeight: 700, color: "#f8fafc", margin: 0 }} dangerouslySetInnerHTML={{ __html: title }} />
                    <span style={{ fontSize: "11px", fontFamily: "monospace", color, background: `${color}12`, border: `1px solid ${color}25`, borderRadius: "6px", padding: "3px 10px" }}>{duration}</span>
                  </div>
                  <ul style={{ margin: 0, padding: "0 0 0 18px", color: "#94a3b8", fontSize: "14px", lineHeight: 1.9 }}>
                    {steps.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Internal links callout */}
          <div style={{ background: "rgba(20,184,166,0.05)", border: "1px solid rgba(20,184,166,0.12)", borderRadius: "12px", padding: "20px 24px", marginBottom: "32px" }}>
            <p style={{ fontSize: "11px", fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#14b8a6", marginBottom: "12px" }}>
              ◆ RELATED INFRASTRUCTURE
            </p>
            <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#94a3b8", margin: 0 }}>
              ZK-KYC deployments are one layer of a broader compliance stack. See{" "}
              <a href="https://www.arrnaya.com/blog/institutional-custody-architecture" style={{ color: "#14b8a6", textDecoration: "none" }}>Institutional Custody Architecture</a>{" "}
              for key management infrastructure that secures the credential signing keys, and{" "}
              <a href="https://www.arrnaya.com/blog/cross-border-payments-blockchain" style={{ color: "#14b8a6", textDecoration: "none" }}>Cross-Border Payments on Blockchain</a>{" "}
              for how ZK-KYC integrates with stablecoin payment rails to satisfy Travel Rule requirements without exposing transaction data.
              The{" "}
              <a href="https://www.arrnaya.com/blog/stablecoin-architecture" style={{ color: "#14b8a6", textDecoration: "none" }}>Stablecoin Architecture</a>{" "}
              post covers the MiCA compliance layer where ZK attestations are now being explored as a reserve proof mechanism.
            </p>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section id="faq" style={{ marginBottom: "72px" }}>
          <p style={{ fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase", color: "#64748b", marginBottom: "8px" }}>
            Section 12
          </p>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: "#f8fafc", marginBottom: "32px", letterSpacing: "-0.01em" }}>
            Frequently Asked Questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {[
              {
                q: "What is ZK-KYC and how does it differ from traditional KYC?",
                a: "ZK-KYC allows a user to prove identity attributes — such as 'I am over 18' or 'I am not on a sanctions list' — to a counterparty without revealing the underlying data. Traditional KYC requires sharing raw documents (passport scans, utility bills) that are then stored in centralised databases. ZK-KYC replaces data transfer with cryptographic proof, eliminating the storage honeypot while satisfying the same regulatory intent.",
              },
              {
                q: "Which zero-knowledge proof system should I use for compliance applications?",
                a: "Groth16 offers the smallest proof size (~200 bytes) and fastest verification, making it ideal for on-chain verification. PLONK/FFLONK avoids the per-circuit trusted setup and is better for systems with many circuit variants. STARKs are post-quantum resistant and require no trusted setup but produce larger proofs (~100KB). For most financial compliance use cases where on-chain gas cost matters, Groth16 (with a well-audited multi-party setup ceremony) or PLONK is the practical choice.",
              },
              {
                q: "Does FATF's Travel Rule prevent ZK-KYC adoption?",
                a: "Not necessarily. FATF requires VASPs to transmit originator and beneficiary information for transfers above $1,000. ZK proofs can satisfy Travel Rule requirements by proving that the originator data exists, has been verified by a licensed provider, and the counterparty is not sanctions-listed — without transmitting raw personal data between VASPs. Regulators in Singapore (MAS) and the EU (MiCA) are actively exploring ZK-based Travel Rule compliance architectures.",
              },
              {
                q: "What is Polygon ID and how does it enable ZK-KYC?",
                a: "Polygon ID (now rebranded as Privado ID) is a self-sovereign identity system built on iden3 — a set of open-source ZK identity protocols. Identity providers issue verifiable credentials (VCs) to users, who store them in a sovereign identity wallet. When a service requires KYC, the user generates a ZK proof from their credentials proving specific claims, which the verifier checks on-chain without receiving raw personal data.",
              },
              {
                q: "What are the main failure modes of ZK compliance systems?",
                a: "Key risks include: (1) Trusted setup compromise — if Groth16's toxic waste is not properly destroyed, the prover can generate false proofs. (2) Circuit underconstraint bugs — a subtle error in constraint definition can allow false statements to produce valid proofs. (3) Credential oracle risk — ZK proofs are only as reliable as the issuer who signs the underlying data. (4) Prover centralisation — outsourcing proof generation to a third-party prover creates a trust and censorship point. (5) Regulatory non-recognition — producing a ZK proof does not guarantee a regulator will accept it as satisfying KYC obligations.",
              },
              {
                q: "How long does ZK proof generation take in production?",
                a: "Client-side proof generation for Groth16 with ~10k constraints takes 1–3 seconds on a modern smartphone. More complex circuits (50k+ constraints for full AML screening) can take 10–30 seconds client-side, or 200–500ms if delegated to a proving server. Hardware acceleration (GPUs, FPGAs) can reduce generation time by 10–50x for large circuits.",
              },
              {
                q: "What is the on-chain gas cost of ZK proof verification?",
                a: "Groth16 verification costs approximately 250,000–350,000 gas on EVM-compatible chains. At 30 gwei base fee on Ethereum mainnet, that's roughly $3–8 per verification. On Layer-2s like Polygon or zkEVMs, costs drop to $0.001–$0.05. For high-throughput compliance checking, proof aggregation using recursive SNARKs can batch hundreds of verifications into a single on-chain call, amortising fixed costs.",
              },
              {
                q: "How does ZK-AML work without seeing transaction data?",
                a: "ZK-AML circuits can prove properties about a transaction set without revealing individual transactions. For example: 'the total volume of this address in the last 30 days is below $10,000' or 'none of these transaction counterparties appear in a committed sanctions merkle tree'. The sanctions list is committed as a Merkle root on-chain; the user proves non-membership using a Merkle exclusion proof inside the ZK circuit, revealing only that the proof passed — not which entry was checked.",
              },
            ].map(({ q, a }, i) => (
              <details
                key={i}
                style={{
                  background: "#0a0a12",
                  border: "1px solid #1a1a2e",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <summary
                  style={{
                    padding: "18px 22px",
                    cursor: "pointer",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#f8fafc",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {q}
                  <span style={{ color: "#14b8a6", fontSize: "20px", fontWeight: 300, flexShrink: 0, marginLeft: "16px" }}>+</span>
                </summary>
                <div
                  style={{
                    padding: "0 22px 18px",
                    borderTop: "1px solid #1a1a2e",
                    paddingTop: "16px",
                    fontSize: "14px",
                    lineHeight: 1.8,
                    color: "#94a3b8",
                  }}
                >
                  {a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── CONCLUSION ───────────────────────────────────────────────── */}
        <section style={{ marginBottom: "48px" }}>
          <div
            style={{
              background: "#0a0a12",
              border: "1px solid #1a1a2e",
              borderRadius: "20px",
              padding: "40px",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase", color: "#64748b", marginBottom: "16px" }}>
              Final Verdict
            </p>
            <h3 style={{ fontSize: "clamp(20px, 2.5vw, 26px)", fontWeight: 700, color: "#f8fafc", marginBottom: "20px", letterSpacing: "-0.01em" }}>
              ZK Compliance Is an Engineering Problem, Not a Future Promise
            </h3>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#94a3b8", maxWidth: "620px", margin: "0 auto 28px" }}>
              The tools exist: audited circuit libraries, production identity systems, regulatory sandboxes actively
              engaging with ZK architectures, and Layer-2 networks that make per-proof gas costs commercially viable.
              The FATF Travel Rule collision is real but navigable through encrypted escrow architectures that
              preserve regulatory access without creating a surveillance channel.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#94a3b8", maxWidth: "620px", margin: "0 auto 32px" }}>
              What remains is the hardest part: deploying carefully. Underconstrained circuits do not crash —
              they silently enable fraud. Trusted setups done lazily become backdoors. Issuers who cut corners
              on KYC undermine the entire proof chain. ZK compliance amplifies both the best and worst practices
              in your identity stack. Get the foundations right, and you ship a system that is simultaneously
              more private than any traditional KYC implementation and more verifiable than most.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
              {["Groth16", "ZK-KYC", "Privado ID", "ZK-AML", "Circom", "FATF Travel Rule"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "12px",
                    fontFamily: "monospace",
                    background: "rgba(20,184,166,0.08)",
                    border: "1px solid rgba(20,184,166,0.20)",
                    borderRadius: "100px",
                    padding: "5px 14px",
                    color: "#14b8a6",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED READING ───────────────────────────────────────────── */}
        <section style={{ marginBottom: "48px" }}>
          <p style={{ fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.15em", textTransform: "uppercase", color: "#64748b", marginBottom: "20px" }}>
            Related Reading
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px" }}>
            {[
              { title: "Institutional Custody Architecture", href: "https://www.arrnaya.com/blog/institutional-custody-architecture", label: "Custody & Security" },
              { title: "Cross-Border Payments on Blockchain", href: "https://www.arrnaya.com/blog/cross-border-payments-blockchain", label: "Payments" },
              { title: "Stablecoin Architecture", href: "https://www.arrnaya.com/blog/stablecoin-architecture", label: "Stablecoins" },
              { title: "Tokenomics Engineering", href: "https://www.arrnaya.com/blog/tokenomics-engineering", label: "Tokenomics" },
              { title: "Crypto Debit Card Infrastructure", href: "https://www.arrnaya.com/blog/crypto-debit-card-infrastructure", label: "Payments & Cards" },
              { title: "RWA Tokenization Guide", href: "https://www.arrnaya.com/blog/rwa-tokenization", label: "Tokenization" },
            ].map(({ title, href, label }) => (
              <a
                key={href}
                href={href}
                style={{
                  background: "#0a0a12",
                  border: "1px solid #1a1a2e",
                  borderRadius: "10px",
                  padding: "16px",
                  textDecoration: "none",
                  display: "block",
                  transition: "border-color 0.15s",
                }}
              >
                <p style={{ fontSize: "11px", fontFamily: "monospace", color: "#64748b", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</p>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#f8fafc", margin: 0, lineHeight: 1.4 }}>{title}</p>
              </a>
            ))}
          </div>
        </section>

        {/* ── POST FOOTER ───────────────────────────────────────────────── */}
        <footer
          style={{
            borderTop: "1px solid #1a1a2e",
            paddingTop: "28px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
            fontSize: "12px",
            fontFamily: "monospace",
            color: "#64748b",
          }}
        >
          <span>arrnaya.com</span>
          <span>Zero-Knowledge Proofs in Financial Infrastructure · May 6, 2026</span>
          <span style={{ color: "#14b8a6" }}>ZK · Compliance · Cryptography</span>
        </footer>
      </main>

      <Footer />
    </div>
  );
}
