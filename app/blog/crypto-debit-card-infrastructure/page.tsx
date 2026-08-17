import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";
import FaqSection from "../../components/FaqSection";
import RelatedReading from "../../components/RelatedReading";
import { blogPostingSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Crypto Debit Card Infrastructure: BIN Sponsorship, Card Networks & Programme Management | Arrnaya Blog",
  description:
    "A practitioner's guide to building crypto-linked debit card infrastructure — BIN sponsorship mechanics, four-party network architecture, programme management, FX settlement flows, spending controls, and compliance engineering.",
  keywords: [
    "crypto debit card infrastructure",
    "BIN sponsorship",
    "card programme management",
    "crypto card architecture",
    "Visa Mastercard card issuing",
    "stablecoin debit card",
    "card processor integration",
    "crypto payment rails",
    "fintech card issuing",
    "programme manager card",
    "crypto card compliance",
    "card settlement flow",
    "crypto card FX conversion",
    "card network architecture",
    "BIN sponsor bank",
  ],
  authors: [{ name: "Arrnaya" }],
  openGraph: {
    type: "article",
    title: "Crypto Debit Card Infrastructure: BIN Sponsorship, Card Networks & Programme Management",
    description:
      "BIN sponsorship mechanics, four-party network architecture, FX settlement flows, spending controls, and compliance engineering — the complete practitioner stack.",
    publishedTime: "2026-05-05",
    tags: [
      "Payments",
      "Card Infrastructure",
      "BIN Sponsorship",
      "Crypto Cards",
      "Fintech",
      "Card Networks",
      "Programme Management",
      "Stablecoin",
      "Compliance",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Debit Card Infrastructure: BIN Sponsorship, Card Networks & Programme Management",
    description:
      "BIN sponsorship mechanics, four-party network architecture, FX settlement flows, and compliance engineering — the complete practitioner stack.",
  },
};

const toc = [
  { id: "the-hidden-stack", label: "The Hidden Stack" },
  { id: "bin-sponsorship", label: "BIN Sponsorship Mechanics" },
  { id: "four-party-model", label: "Four-Party Network Architecture" },
  { id: "programme-manager", label: "Programme Manager: The Orchestrator" },
  { id: "authorization-flow", label: "Authorization Flow: 400ms to Approval" },
  { id: "fx-settlement", label: "FX Mechanics & Settlement" },
  { id: "compliance-engineering", label: "Compliance Engineering" },
  { id: "vendor-landscape", label: "Vendor Landscape & Build vs Buy" },
];

export default function BlogPost() {
  return (
    <>
      <JsonLd
        data={blogPostingSchema({
          headline:
            "Crypto Debit Card Infrastructure: BIN Sponsorship, Card Networks & Programme Management",
          description:
            "A practitioner's guide to building crypto-linked debit card infrastructure — BIN sponsorship mechanics, four-party network architecture, programme management, FX settlement flows, spending controls, and compliance engineering.",
          slug: "crypto-debit-card-infrastructure",
          datePublished: "2026-05-05",
          keywords: [
            "crypto debit card infrastructure",
            "BIN sponsorship",
            "card programme management",
            "crypto card architecture",
            "Visa Mastercard card issuing",
            "stablecoin debit card",
            "card processor integration",
            "crypto payment rails",
            "fintech card issuing",
            "programme manager card",
            "crypto card compliance",
            "card settlement flow",
            "crypto card FX conversion",
            "card network architecture",
            "BIN sponsor bank",
          ],
        })}
      />
      <Navbar />

      <article className="pt-20">
        {/* ── Hero ── */}
        <header className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[#ece1cc]" />
          {/* Gradient orbs — cyan/blue palette for Payments pillar */}
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#6f8fa3] opacity-15 blur-[130px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#6f8fa3] opacity-12 blur-[110px]" />
          <div className="absolute top-[30%] right-[20%] w-[35%] h-[35%] rounded-full bg-[#93aab8] opacity-10 blur-[90px]" />
          <div className="absolute top-[60%] left-[35%] w-[25%] h-[25%] rounded-full bg-[#c2703f] opacity-08 blur-[70px]" />
          {/* Sparkle overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 18% 25%, rgba(111,143,163,0.45) 0px, rgba(111,143,163,0.45) 1px, transparent 1px),
                                radial-gradient(circle at 72% 18%, rgba(111,143,163,0.35) 0px, rgba(111,143,163,0.35) 1.5px, transparent 1.5px),
                                radial-gradient(circle at 42% 68%, rgba(111,143,163,0.40) 0px, rgba(111,143,163,0.40) 1px, transparent 1px),
                                radial-gradient(circle at 82% 55%, rgba(147,170,184,0.30) 0px, rgba(147,170,184,0.30) 1px, transparent 1px),
                                radial-gradient(circle at 12% 78%, rgba(111,143,163,0.35) 0px, rgba(111,143,163,0.35) 1.5px, transparent 1.5px),
                                radial-gradient(circle at 58% 48%, rgba(111,143,163,0.25) 0px, rgba(111,143,163,0.25) 2px, transparent 2px),
                                radial-gradient(circle at 91% 82%, rgba(147,170,184,0.35) 0px, rgba(147,170,184,0.35) 1px, transparent 1px),
                                radial-gradient(circle at 33% 12%, rgba(111,143,163,0.22) 0px, rgba(111,143,163,0.22) 1px, transparent 1px)`,
              backgroundSize:
                "260px 260px, 310px 310px, 210px 210px, 360px 360px, 290px 290px, 410px 410px, 230px 230px, 330px 330px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f5efe2]" />

          <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-28 md:py-36">
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <span className="text-[11px] font-semibold tracking-wider uppercase px-4 py-2 rounded-full bg-[rgba(111,143,163,0.12)] text-[#6f8fa3] border border-[rgba(111,143,163,0.25)] backdrop-blur-sm">
                Payments &amp; Cards · Infrastructure · 2026
              </span>
              <span className="text-[11px] text-[#5c5644]">26 min read · Advanced</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-8 text-[#201c14]">
              Crypto Debit Card{" "}
              <span className="bg-gradient-to-r from-[#6f8fa3] to-[#93aab8] bg-clip-text text-transparent">
                Infrastructure
              </span>
              <br />
              BIN Sponsorship, Card Networks
              <br />
              &amp; Programme Management
            </h1>
            <p className="text-base md:text-lg text-[#5c5644] max-w-[720px] leading-relaxed mb-10">
              Every crypto card tap at a merchant travels through a stack most crypto firms never fully understand — BIN sponsors, card networks, processors, and settlement rails that predate blockchain by fifty years. This is what actually happens in the 400 milliseconds between tap and approval, and what it costs to get it right.
            </p>
            <div className="flex flex-wrap gap-6">
              {[
                { num: "400ms", label: "Typical authorisation round-trip from POS to issuer and back" },
                { num: "$50B+", label: "Projected crypto card spend volume by 2027 across major programmes" },
                { num: "6–8", label: "Distinct counterparties involved in a single card transaction" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-2xl md:text-3xl font-extrabold text-[#201c14]">{stat.num}</span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268] max-w-[240px]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* ── TOC ── */}
        <div className="bg-[#fbf7ee] border-b border-[#ddd0b2]">
          <div className="max-w-[1200px] mx-auto px-6 py-8">
            <div className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268] mb-4">Contents</div>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {toc.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-[#5c5644] hover:text-[#6f8fa3] transition-colors leading-relaxed flex items-start gap-3"
                  >
                    <span className="text-[10px] font-mono text-[#8a8268] mt-0.5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
          <div className="space-y-24">

            {/* ── Intro ── */}
            <div className="space-y-6">
              <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                There is a persistent belief in the crypto industry that building a debit card is a product problem — a UX challenge solved by a good app, a slick card design, and an API integration with a card-issuing platform. Firms that ship on that assumption routinely discover, at the worst possible moment, that what they built is a front-end for a regulatory and financial infrastructure that they do not control and do not fully understand.
              </p>
              <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                Crypto debit card infrastructure is, beneath the surface, the card industry&apos;s 50-year-old stack with a crypto liquidation engine bolted onto the front. <strong className="text-[#201c14]">The card rails — Visa, Mastercard, and their network of processors, BIN sponsors, and settlement banks — operate according to rules that were not designed with digital assets in mind.</strong> Every crypto-specific problem (real-time FX conversion, stablecoin liquidation, multi-asset spending, cross-border regulatory compliance) must be solved by building on top of, or fitting within, this pre-existing stack. Understanding that stack completely is not optional for anyone building a serious card programme.
              </p>
              <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                This analysis covers the full architecture: what a BIN is and who controls access to it, how the four-party card network model works at the protocol level, what a programme manager actually does, the precise sequence of an authorisation transaction from tap to approval, how FX conversion and settlement work in practice, and what the compliance engineering looks like when crypto assets meet card network rules.
              </p>
            </div>

            {/* ── Section 1: The Hidden Stack ── */}
            <section id="the-hidden-stack">
              <div className="mb-10 pb-6 border-b border-[#ddd0b2]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268] mb-3">01 · Context</div>
                <h2 className="font-display text-xl md:text-[26px] font-bold text-[#201c14] mb-4 leading-snug">
                  The Hidden Stack: What a Crypto Card Actually Is
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  A crypto debit card is not a blockchain product. It is a traditional debit card — issued under a card network licence, processed by a traditional card processor, settled through traditional banking rails — with a crypto asset management layer that converts digital assets to fiat at (or before) the moment of spend. The card network sees fiat. The merchant sees fiat. The only part of the transaction that touches crypto is upstream of the authorisation request, and the card network has no visibility into it.
                </p>
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  Understanding this architecture is critical for three reasons. First, it defines the regulatory perimeter: the crypto firm is regulated for the crypto asset management layer (custody, conversion, AML), while the bank/BIN sponsor is regulated for the card issuance layer (e-money, payment services). Second, it defines the failure modes: an outage in the card processor or BIN sponsor takes down the card programme regardless of the health of the crypto platform. Third, it defines the unit economics: interchange, scheme fees, BIN sponsor fees, and processor fees are set by counterparties the crypto firm cannot negotiate with from first principles — they must be understood and modelled before programme launch.
                </p>

                {/* Architecture diagram — terminal style */}
                <div className="bg-[#fbf7ee] border border-[#ddd0b2] rounded-xl overflow-hidden my-8">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-[#ddd0b2] bg-[rgba(32,28,20,0.02)]">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268]">Crypto Card Stack — Layer Map</span>
                  </div>
                  <pre className="p-5 text-[13px] leading-relaxed overflow-x-auto text-[#5c5644]">
{`┌────────────────────────────────────────────────────────────┐
│                   CARDHOLDER EXPERIENCE                    │  ← Mobile app, virtual/physical card
├────────────────────────────────────────────────────────────┤
│                PROGRAMME MANAGER (PM) LAYER                │  ← Controls card UX, limits, rewards
│   Card management · Spending controls · Customer service   │
├────────────────────────────────────────────────────────────┤
│           CRYPTO ASSET MANAGEMENT LAYER                    │  ← Crypto-specific, PM or separate
│   Custody · Real-time liquidation · FX conversion          │
│   Stablecoin/token balance · Compliance screening          │
├────────────────────────────────────────────────────────────┤
│        CARD ISSUER / BIN SPONSOR (Licensed Bank)           │  ← Holds Visa/MC membership
│   BIN ownership · Regulatory licence · Settlement accounts │
├────────────────────────────────────────────────────────────┤
│            CARD PROCESSOR / ISSUER PROCESSOR               │  ← Tech layer between bank & network
│   Authorisation decisions · Transaction routing            │
│   Ledger management · Network connectivity                 │
├────────────────────────────────────────────────────────────┤
│           CARD NETWORK (Visa / Mastercard)                 │  ← The rails
│   Network routing · Interchange rules · Scheme fees        │
│   Dispute resolution · Compliance enforcement              │
└────────────────────────────────────────────────────────────┘`}
                  </pre>
                </div>

                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  The crypto firm typically sits at the Programme Manager layer — or controls both the PM layer and the crypto asset management layer — but does not and cannot sit at the BIN sponsor or card network layer without either acquiring a bank charter or obtaining a principal membership in the card networks (which itself requires significant capital, compliance infrastructure, and processing volume). Most crypto card programmes work through a BIN sponsor relationship because direct network membership is unreachable for early-stage firms.
                </p>
              </div>
            </section>

            {/* ── Section 2: BIN Sponsorship ── */}
            <section id="bin-sponsorship">
              <div className="mb-10 pb-6 border-b border-[#ddd0b2]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268] mb-3">02 · Core Infrastructure</div>
                <h2 className="font-display text-xl md:text-[26px] font-bold text-[#201c14] mb-4 leading-snug">
                  BIN Sponsorship: The Gateway to Card Rails
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  A <strong className="text-[#201c14]">Bank Identification Number (BIN)</strong> — formally called an Issuer Identification Number (IIN) since 2017, when the standard expanded from 6 to 8 digits — is the first 6–8 digits of any card number. The BIN identifies the card network (Visa, Mastercard, Amex), the issuing bank, the card type (debit, credit, prepaid), and the product programme. Every card in existence traces back to a BIN, and every BIN is owned by a licensed bank that is a principal member of the relevant card network.
                </p>
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  Non-bank entities — including crypto firms — cannot directly own a BIN. To issue cards under a Visa or Mastercard BIN, a crypto firm must partner with a bank that holds principal membership and is willing to sponsor the programme. This sponsoring bank is the <strong className="text-[#201c14]">BIN sponsor</strong>.
                </p>

                <h3 className="text-lg font-bold text-[#201c14] mt-8 mb-4">What a BIN Sponsor Actually Does</h3>

                <div className="space-y-0 my-10">
                  {[
                    {
                      num: "①",
                      title: "Holds Regulatory Liability",
                      desc: "The BIN sponsor bank is legally the card issuer. It holds the e-money licence, payment institution licence, or bank charter required to issue cards in each jurisdiction. When a card programme is accused of enabling fraud, money laundering, or regulatory violations, the BIN sponsor faces regulatory action — not only the crypto firm. This is why BIN sponsors conduct extensive due diligence on programme managers before onboarding and maintain ongoing oversight of programme conduct."
                    },
                    {
                      num: "②",
                      title: "Maintains Card Network Membership",
                      desc: "The BIN sponsor maintains principal membership in Visa and/or Mastercard, paying annual membership fees, meeting capital requirements, and complying with network operating rules. This membership is what gives the cards their network acceptance. The crypto PM programme transacts under the BIN sponsor's membership, meaning the PM is subject to all the network rules the BIN sponsor has agreed to."
                    },
                    {
                      num: "③",
                      title: "Manages Settlement Accounts",
                      desc: "Card settlement occurs through the BIN sponsor's settlement accounts at the card networks. When a cardholder spends, the BIN sponsor's settlement account is debited by the network; when settlement is complete, the BIN sponsor debits the programme manager's prefunded account held at the sponsor bank. The crypto firm must maintain adequate prefunded balances to cover expected spend — insufficient prefunding triggers authorisation declines or, in the worst case, programme suspension."
                    },
                    {
                      num: "④",
                      title: "Sets Programme Parameters",
                      desc: "The BIN sponsor sets and enforces the programme's regulatory boundaries: maximum card limits, geographic restrictions, supported merchant categories (MCC restrictions), transaction velocity limits, and KYC requirements. These parameters flow from the BIN sponsor's own regulatory licence conditions and risk appetite. A BIN sponsor with a UK e-money licence cannot sponsor a card programme with unlimited spending in jurisdictions where it is not licensed — regardless of what the crypto PM wants to offer."
                    },
                    {
                      num: "⑤",
                      title: "Earns BIN Sponsorship Fees",
                      desc: "BIN sponsors charge programme-level fees for their services: typically a monthly fixed fee plus per-transaction and per-card fees. They also capture a portion of interchange revenue generated by the programme. This fee structure must be modelled into programme unit economics before launch — the margin between interchange earned and BIN sponsor fees charged is a primary determinant of whether the programme is financially viable at scale."
                    },
                  ].map((item) => (
                    <div key={item.num} className="flex gap-4 py-5 border-b border-[#ddd0b2]/60">
                      <span className="w-8 h-8 rounded-full border-2 border-[#6f8fa3] flex items-center justify-center text-xs font-bold text-[#6f8fa3] shrink-0 mt-0.5">{item.num}</span>
                      <div>
                        <strong className="text-[#201c14] block mb-1 text-sm">{item.title}</strong>
                        <p className="text-sm text-[#5c5644] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-[#201c14] mt-8 mb-4">Major BIN Sponsors in the Crypto Card Market</h3>

                <div className="overflow-x-auto my-10">
                  <table className="w-full text-[13px] border-collapse">
                    <thead>
                      <tr className="border-b border-[#ddd0b2]">
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#6f8fa3]">BIN Sponsor</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#6f8fa3]">Jurisdiction</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#6f8fa3]">Network(s)</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#6f8fa3]">Known Crypto PMs</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#6f8fa3]">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Sutton Bank", "USA (Ohio)", "Visa, Mastercard", "Coinbase Card, Various", "High crypto appetite; strong DDA/prepaid rails"],
                        ["Cross River Bank", "USA (New Jersey)", "Visa, Mastercard", "Gemini, Others", "Broad fintech BaaS platform; regulatory focus"],
                        ["Evolve Bank & Trust", "USA (Tennessee)", "Visa", "Multiple crypto PMs", "Developer-friendly; API-first approach"],
                        ["Moorwand / Paynetics", "UK / EU", "Visa, Mastercard", "European crypto programmes", "E-money licence; post-Brexit EU passporting"],
                        ["Railsbank / Railsr", "UK / EU / Asia", "Visa", "Crypto.com (historic), others", "Global reach; faced financial difficulties 2022"],
                        ["Griffin Bank", "UK", "Mastercard", "Web3 / DeFi startups", "UK banking licence; crypto-native focus"],
                        ["Nuvei / SafeCharge", "Canada / EU", "Visa, MC", "Various EU programmes", "Broader payments platform; acquiring + issuing"],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-[#ddd0b2]/60 hover:bg-[rgba(111,143,163,0.03)] transition-colors">
                          <td className="py-3 px-4 text-[#201c14] font-medium text-[13px]">{row[0]}</td>
                          <td className="py-3 px-4 text-[#5c5644]">{row[1]}</td>
                          <td className="py-3 px-4 text-[#5c5644]">{row[2]}</td>
                          <td className="py-3 px-4 text-[#5c5644]">{row[3]}</td>
                          <td className="py-3 px-4 text-[#8a8268] text-[12px]">{row[4]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Callout */}
                <div className="bg-[rgba(185,138,61,0.06)] border border-[rgba(185,138,61,0.15)] rounded-xl p-6 md:p-8">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#b98a3d] mb-3">Concentration Risk</div>
                  <p className="text-sm text-[#5c5644] leading-relaxed">
                    BIN sponsor concentration risk is underappreciated by crypto firms. When a BIN sponsor exits the market, faces regulatory action, or revokes a programme — as happened when Wirecard collapsed in 2020, taking down dozens of prepaid card programmes overnight — cards stop working immediately. Firms with a single BIN sponsor have no fallback. Multi-BIN sponsor strategies (with programme failover) are the resilience pattern used by mature card programmes, but require significantly more compliance and operational investment to maintain.
                  </p>
                </div>
              </div>
            </section>

            {/* ── Section 3: Four-Party Model ── */}
            <section id="four-party-model">
              <div className="mb-10 pb-6 border-b border-[#ddd0b2]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268] mb-3">03 · Network Architecture</div>
                <h2 className="font-display text-xl md:text-[26px] font-bold text-[#201c14] mb-4 leading-snug">
                  Four-Party Network Architecture: How Card Rails Actually Work
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  Visa and Mastercard operate <strong className="text-[#201c14]">four-party network models</strong>. Understanding this model is non-negotiable for anyone running a card programme because it defines who bears risk, who captures value, who sets rules, and what the contractual obligations are at each node.
                </p>

                <div className="overflow-x-auto my-10">
                  <table className="w-full text-[13px] border-collapse">
                    <thead>
                      <tr className="border-b border-[#ddd0b2]">
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#6f8fa3]">Party</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#6f8fa3]">Role</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#6f8fa3]">Revenue Stream</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#6f8fa3]">Risk Held</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Cardholder", "Initiates transaction by presenting card or credentials", "None (receives rewards/cashback)", "None at point of sale; potential for fraud losses"],
                        ["Issuer (BIN Sponsor)", "Issues the card; approves/declines authorisations; fronts funds to network", "Interchange fee (largest share, ~1.5–2% on credit)", "Credit risk, fraud losses, chargeback liability"],
                        ["Card Network (Visa/MC)", "Routes transaction messages; sets rules; manages clearing/settlement", "Network assessment fees (~0.14% of volume)", "Systemic risk; settlement guarantee in some programmes"],
                        ["Acquirer", "Accepts card payments on behalf of merchant; routes to network", "Acquirer margin (discount rate minus interchange)", "Merchant fraud and chargeback risk"],
                        ["Merchant", "Sells goods/services; receives settlement minus all fees", "None; pays total discount rate (interchange + acquirer + scheme)", "Fraud, chargebacks, card data security"],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-[#ddd0b2]/60 hover:bg-[rgba(111,143,163,0.03)] transition-colors">
                          <td className="py-3 px-4 text-[#201c14] font-medium text-[13px]">{row[0]}</td>
                          <td className="py-3 px-4 text-[#5c5644]">{row[1]}</td>
                          <td className="py-3 px-4 text-[#74805e]">{row[2]}</td>
                          <td className="py-3 px-4 text-[#b0432f]">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-bold text-[#201c14] mt-8 mb-4">Interchange: The Economics of Card Acceptance</h3>
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  Interchange is the fee paid by the acquirer to the issuer for each card transaction. It is set by the card network (not negotiated between the parties) and varies by card type, merchant category code (MCC), geography, and transaction method. In the US, Visa consumer debit interchange is regulated at a maximum of ~$0.21 + 0.05% plus a $0.01 fraud-prevention adjustment (Durbin Amendment). In the EU, interchange is capped at 0.2% for debit and 0.3% for credit (Interchange Fee Regulation). In markets without fee regulation — including most of Southeast Asia, UAE, and parts of Latin America — interchange can reach 1.5–2.5%.
                </p>

                {/* Formula Block */}
                <div className="bg-[#fbf7ee] border border-[#ddd0b2] rounded-xl overflow-hidden my-8">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-[#ddd0b2] bg-[rgba(32,28,20,0.02)]">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268]">Card Programme Unit Economics — Per Transaction</span>
                  </div>
                  <pre className="p-5 text-[13px] leading-relaxed overflow-x-auto text-[#5c5644]">
{`// Per-transaction P&L for a crypto debit card programme (illustrative)
// Assumptions: USD100 transaction, unregulated market, Visa debit

Revenue:
  Interchange_earned    = $100 × 1.50%            = $1.50
  FX_spread_revenue     = $100 × 0.50%            = $0.50   ← crypto→fiat spread
  Total_revenue                                   = $2.00

Costs:
  Scheme_fees           = $100 × 0.14%            = $0.14   ← Visa assessment
  BIN_sponsor_fee       = $0.15 (fixed per txn)   = $0.15
  Processor_fee         = $0.08 (fixed per txn)   = $0.08
  Network_access_fee    = $0.02                   = $0.02
  Crypto_liquidation    = $100 × 0.10%            = $0.10   ← DEX/OTC slippage
  Fraud_reserve         = $100 × 0.08%            = $0.08
  Total_cost                                      = $0.57

Gross_margin            = $2.00 − $0.57           = $1.43 (71.5%)
// Gross margin before: overhead, customer support, disputes, rewards

// Margin compression factors:
// → Regulated markets (EU/US): interchange cap → margin ~$0.50–0.70/txn
// → Rewards programmes: cashback typically 0.5–1.5% → can wipe entire margin
// → High chargeback rates: each dispute costs $15–35 in processing fees`}
                  </pre>
                </div>

                {/* Pull Quote */}
                <div className="my-10 pl-6 md:pl-8 border-l-[3px] border-[#6f8fa3] bg-[rgba(111,143,163,0.05)] rounded-r-lg p-6 md:p-8 relative">
                  <div className="absolute top-2 left-4 text-6xl text-[#6f8fa3] opacity-20 font-serif leading-none">&ldquo;</div>
                  <p className="text-base md:text-lg italic text-[#6f8fa3] leading-relaxed relative z-10 mb-3">
                    Crypto card firms that launch cashback rewards without modelling interchange against chargeback rates and processor fees routinely discover their reward liability exceeds their gross margin. The card is a customer acquisition cost, not a revenue line — until it scales.
                  </p>
                  <cite className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268] not-italic">— Card Programme Economics, First Principles</cite>
                </div>
              </div>
            </section>

            {/* ── Section 4: Programme Manager ── */}
            <section id="programme-manager">
              <div className="mb-10 pb-6 border-b border-[#ddd0b2]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268] mb-3">04 · Orchestration</div>
                <h2 className="font-display text-xl md:text-[26px] font-bold text-[#201c14] mb-4 leading-snug">
                  Programme Manager: The Invisible Orchestrator
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  The Programme Manager (PM) is the entity that designs, operates, and is commercially accountable for the card programme. In most crypto card deployments, the crypto firm is the PM — or uses a third-party PM platform (Marqeta, Galileo, i2c) that abstracts the BIN sponsor relationship while still requiring the crypto firm to operate as an agent of the programme. The PM role is simultaneously the most powerful and most constrained position in the card stack: maximum flexibility over the user experience, minimum control over the underlying rails.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
                  {[
                    {
                      title: "PM Controls Directly",
                      color: "#74805e",
                      items: [
                        "Card design, product name, and branding (within network guidelines)",
                        "Spending controls: daily limits, merchant category restrictions, geographic blocks",
                        "Customer experience: app, notifications, freeze/unfreeze, dispute filing",
                        "Rewards and incentives: cashback rates, crypto rewards, loyalty points",
                        "KYC/KYB policy and procedures (within BIN sponsor's minimum requirements)",
                        "Crypto asset management: which assets are spendable, conversion logic",
                        "Customer service tiers: dispute resolution, account management",
                        "Product pricing: subscription fees, foreign transaction fees, ATM fees",
                      ]
                    },
                    {
                      title: "PM Cannot Control",
                      color: "#b0432f",
                      items: [
                        "Interchange rates: set by card network, not negotiable by PM",
                        "Scheme fees: Visa/Mastercard assessment fees are fixed by network rules",
                        "Network acceptance rules: merchant category restrictions set by card networks",
                        "BIN sponsor regulatory limits: licence conditions cap what the programme can offer",
                        "Settlement timing: network settlement cycles are fixed (typically T+1 or T+2)",
                        "Chargeback timelines and rules: card network dispute rules govern all disputes",
                        "Fraud screening at network level: network-level fraud controls apply universally",
                        "Geographic acceptance: card network acceptance is not the PM's to determine",
                      ]
                    },
                  ].map((panel) => (
                    <div key={panel.title} className="bg-[#fbf7ee] border border-[#ddd0b2] rounded-xl overflow-hidden">
                      <div className="flex items-center gap-3 px-5 py-4 border-b border-[#ddd0b2] bg-[rgba(32,28,20,0.02)]">
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ background: panel.color }} />
                        <span className="text-sm font-bold text-[#201c14]">{panel.title}</span>
                      </div>
                      <ul className="p-5 space-y-3">
                        {panel.items.map((item, idx) => (
                          <li key={idx} className="text-[13px] text-[#5c5644] flex items-start gap-2">
                            <span style={{ color: panel.color }} className="mt-0.5 shrink-0">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-[#201c14] mt-8 mb-4">PM Platform APIs: The Technical Interface</h3>
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  Modern PM platforms expose REST APIs for the core card management operations. The crypto firm integrates against these APIs to issue cards, configure spending controls, and receive real-time transaction webhooks. The critical integration point for crypto-specific behaviour is the <strong className="text-[#201c14]">Just-In-Time (JIT) funding API</strong> — a webhook fired at authorisation time that allows the crypto firm to approve or reject the transaction and provide the exact fiat amount needed for settlement. JIT funding is the mechanism that enables real-time crypto liquidation on card spend.
                </p>

                {/* Code Block */}
                <div className="bg-[#fbf7ee] border border-[#ddd0b2] rounded-xl overflow-hidden my-8">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-[#ddd0b2] bg-[rgba(32,28,20,0.02)]">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268]">JIT Funding Webhook — Request/Response Pattern</span>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268]">Marqeta-style · Simplified</span>
                  </div>
                  <pre className="p-5 text-[13px] leading-relaxed overflow-x-auto text-[#5c5644]">
{`// JIT Funding webhook fires when cardholder taps card at POS
// Crypto PM has ~1500ms to respond before network timeout

// INCOMING REQUEST from PM Platform (webhook):
POST /jit-funding
{
  "token": "txn_9f3a2b...",
  "user_token": "usr_kk82...",
  "amount": 87.50,
  "currency_code": "USD",
  "merchant": {
    "name": "Whole Foods Market",
    "mcc": "5411",           // Grocery stores
    "city": "Singapore",
    "country": "SGD"
  },
  "type": "authorization",
  "card_token": "card_mn71..."
}

// CRYPTO PM INTERNAL PROCESSING (~200-400ms budget):
async function processJIT(request) {
  const user = await getUser(request.user_token);
  const balance = await getCryptoBalance(user.id);          // USDC balance
  const fxRate = await getFXRate("USDC", "USD");            // ~1.0 for USDC
  const usdcNeeded = request.amount / fxRate;
  const available = balance.usdc_balance * fxRate;

  // Spending controls check
  if (request.mcc in user.blocked_categories) {
    return { result: "DECLINED", memo: "Merchant category blocked" };
  }
  if (request.amount > user.daily_limit_remaining) {
    return { result: "DECLINED", memo: "Daily limit exceeded" };
  }
  if (available < request.amount) {
    return { result: "DECLINED", memo: "Insufficient balance" };
  }

  // Reserve the funds (do NOT liquidate yet — wait for capture)
  await reserveBalance(user.id, usdcNeeded);

  return { result: "APPROVED", amount: request.amount };
}

// OUTGOING RESPONSE to PM Platform:
{ "result": "APPROVED", "amount": 87.50, "memo": "JIT funded" }
// Response must arrive within 1500ms or the transaction auto-declines`}
                  </pre>
                </div>

                <div className="bg-[rgba(111,143,163,0.06)] border border-[rgba(111,143,163,0.15)] rounded-xl p-6 md:p-8">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#6f8fa3] mb-3">Engineering Note</div>
                  <p className="text-sm text-[#5c5644] leading-relaxed">
                    The JIT funding SLA is unforgiving. The card network typically allows 1,500–2,000ms for the full round-trip from authorisation request to response. A JIT webhook that times out causes an automatic decline — visible to the cardholder as a declined card. This means the crypto PM&apos;s JIT endpoint must have sub-200ms p99 response times, with balance checks and spending control evaluations cached or pre-computed. Teams that underestimate this latency requirement build products that embarrass their users at the point of sale.
                  </p>
                </div>
              </div>
            </section>

            {/* ── Section 5: Authorisation Flow ── */}
            <section id="authorization-flow">
              <div className="mb-10 pb-6 border-b border-[#ddd0b2]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268] mb-3">05 · Transaction Mechanics</div>
                <h2 className="font-display text-xl md:text-[26px] font-bold text-[#201c14] mb-4 leading-snug">
                  Authorization Flow: The 400ms Architecture
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  A card transaction that completes in under a second involves a sequence of network hops, protocol translations, authorisation decisions, and database writes that most end users never see. Understanding the authorisation flow is essential for engineering the crypto PM layer correctly — and for diagnosing the inevitable production incidents.
                </p>

                {/* Terminal flow */}
                <div className="bg-[#fbf7ee] border border-[#ddd0b2] rounded-xl overflow-hidden my-8">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-[#ddd0b2] bg-[rgba(32,28,20,0.02)]">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268]">Full Authorisation Flow — Chip &amp; PIN / Contactless</span>
                  </div>
                  <pre className="p-5 text-[13px] leading-relaxed overflow-x-auto text-[#5c5644]">
{`T+0ms    CARDHOLDER taps card / chip at merchant POS terminal

T+5ms    POS TERMINAL reads EMV chip data (card number, expiry,
         cryptogram) via NFC/contact interface

T+10ms   ACQUIRER PROCESSOR receives ISO 8583 authorisation request
         message from POS terminal; routes to Visa/Mastercard network
         based on BIN range

T+40ms   CARD NETWORK (Visa VisaNet / Mastercard Banknet) receives
         authorisation request; checks:
         ● BIN ownership → routes to issuer processor
         ● Basic network-level fraud rules (Visa Advanced Auth / MC Expert)
         ● EMV cryptogram validation (card present authentication)

T+60ms   ISSUER PROCESSOR (e.g., Marqeta, Galileo, i2c) receives
         authorisation request; fires JIT webhook to crypto PM layer

T+70ms   CRYPTO PM LAYER receives JIT webhook; checks:
         ● User balance (USDC / BTC / ETH)
         ● Spending controls (daily limit, MCC restrictions, geo blocks)
         ● AML transaction screening
         ● FX rate for conversion estimate
         ● Reserves/pre-funds fiat equivalent

T+250ms  CRYPTO PM responds to JIT webhook: APPROVED / DECLINED

T+270ms  ISSUER PROCESSOR receives JIT response; applies additional
         issuer-level fraud rules; forms ISO 8583 response message

T+290ms  CARD NETWORK receives issuer response; logs transaction;
         returns authorisation response to acquirer

T+310ms  ACQUIRER PROCESSOR receives network response; forwards
         to POS terminal

T+350ms  POS TERMINAL receives response; displays APPROVED or DECLINED
         to cardholder and merchant

────────────────────────────────────────────────────────────────
NOTE: Actual timings vary by region, terminal type, and network
      load. Contactless typically faster than chip+PIN.
      Online purchases (card-not-present) follow the same
      logical flow but without the EMV cryptogram step.`}
                  </pre>
                </div>

                <h3 className="text-lg font-bold text-[#201c14] mt-8 mb-4">Authorisation vs Clearing vs Settlement: Three Distinct Events</h3>
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  A card transaction is not a single event — it is three distinct events that can be separated by hours or days, and each has different implications for the crypto PM&apos;s balance management.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-10">
                  {[
                    { label: "Authorisation", color: "#6f8fa3", desc: "Real-time approval of the transaction. Funds are reserved but not yet moved. The crypto PM reserves (but does not liquidate) the asset equivalent. Duration: milliseconds." },
                    { label: "Clearing", color: "#93aab8", desc: "Merchant submits the completed transaction to the acquirer for processing (typically at end of business day). The amount may differ from authorisation (e.g., restaurant tips added post-auth). Duration: hours to 24 hours." },
                    { label: "Settlement", color: "#c2703f", desc: "The actual movement of funds between issuer and acquirer settlement accounts via the card network. The crypto PM's prefunded account at the BIN sponsor is debited. Crypto liquidation should occur at or before this point. Duration: T+1 or T+2 business days." },
                  ].map((card) => (
                    <div key={card.label} className="bg-[#fbf7ee] border border-[#ddd0b2] rounded-xl overflow-hidden">
                      <div className="px-5 py-4 border-b border-[#ddd0b2]" style={{ borderTopColor: card.color, borderTopWidth: 2 }}>
                        <span className="text-sm font-bold" style={{ color: card.color }}>{card.label}</span>
                      </div>
                      <div className="p-5">
                        <p className="text-[13px] text-[#5c5644] leading-relaxed">{card.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[rgba(176,67,47,0.06)] border border-[rgba(176,67,47,0.15)] rounded-xl p-6 md:p-8">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#b0432f] mb-3">Critical Risk: Auth-to-Settlement Gap</div>
                  <p className="text-sm text-[#5c5644] leading-relaxed">
                    The gap between authorisation (when crypto is reserved) and settlement (when fiat must be in the BIN sponsor account) exposes the crypto PM to FX risk. If BTC is reserved at authorisation at $65,000 and has fallen to $62,000 by settlement time, the PM must either absorb the difference or have pre-funded in stablecoins. Programmes running volatile asset spending need a clear treasury policy for the auth-to-settlement window: reserve stablecoins equal to auth amount immediately on JIT approval, or hold volatile assets and accept mark-to-market risk. Most mature programmes adopt the former.
                  </p>
                </div>
              </div>
            </section>

            {/* ── Section 6: FX & Settlement ── */}
            <section id="fx-settlement">
              <div className="mb-10 pb-6 border-b border-[#ddd0b2]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268] mb-3">06 · FX Architecture</div>
                <h2 className="font-display text-xl md:text-[26px] font-bold text-[#201c14] mb-4 leading-snug">
                  FX Mechanics &amp; Settlement: Pre-Fund vs Real-Time Conversion
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  The FX conversion architecture is where crypto card programmes diverge most significantly from traditional debit card programmes. Traditional debit draws from a fiat bank account — no conversion required. Crypto debit must convert digital assets to fiat in a window that is either tightly constrained (real-time conversion at authorisation) or designed to absorb conversion timing risk (pre-funding). Each approach has distinct trade-offs in latency, cost, complexity, and user experience.
                </p>

                <div className="overflow-x-auto my-10">
                  <table className="w-full text-[13px] border-collapse">
                    <thead>
                      <tr className="border-b border-[#ddd0b2]">
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#6f8fa3]">Conversion Model</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#6f8fa3]">When Conversion Occurs</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#6f8fa3]">FX Risk</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#6f8fa3]">Latency Impact</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#6f8fa3]">User Experience</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#6f8fa3]">Used By</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Real-Time Conversion", "JIT webhook (authorisation)", "Low — conversion matches spend", "High — adds 50–200ms to JIT", "Exact crypto deducted per spend", "Crypto.com (USDC mode)"],
                        ["Pre-Fund Stablecoin", "User-initiated top-up", "Minimal — stablecoin pegged to fiat", "None at auth — check balance only", "Fiat balance shown, crypto in background", "Coinbase Card (USDC)", ],
                        ["Pre-Fund Fiat", "User explicitly converts before spend", "None — fiat already held", "None — pure fiat debit", "Traditional debit UX", "Wirex, Revolut crypto"],
                        ["End-of-Day Batch", "Nightly batch liquidation", "High — hours of exposure on volatile assets", "None at auth", "Visible crypto balance until batch", "Legacy programmes only"],
                        ["Hybrid (Stable + Volatile)", "Stable: auth; Volatile: batch", "Moderate — volatile bucket batched", "Low — stable checks fast", "UX varies by asset type", "Nexo Card, Crypto.com"],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-[#ddd0b2]/60 hover:bg-[rgba(111,143,163,0.03)] transition-colors">
                          <td className="py-3 px-4 text-[#201c14] font-medium text-[13px]">{row[0]}</td>
                          <td className="py-3 px-4 text-[#5c5644]">{row[1]}</td>
                          <td className="py-3 px-4 text-[#5c5644]">{row[2]}</td>
                          <td className="py-3 px-4 text-[#5c5644]">{row[3]}</td>
                          <td className="py-3 px-4 text-[#5c5644]">{row[4]}</td>
                          <td className="py-3 px-4 text-[#8a8268] text-[12px]">{row[5]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-bold text-[#201c14] mt-8 mb-4">Settlement Pre-Funding: The Liquidity Mechanics</h3>

                {/* Formula Block */}
                <div className="bg-[#fbf7ee] border border-[#ddd0b2] rounded-xl overflow-hidden my-8">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-[#ddd0b2] bg-[rgba(32,28,20,0.02)]">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268]">Pre-Funding Buffer Calculation — Settlement Liquidity Model</span>
                  </div>
                  <pre className="p-5 text-[13px] leading-relaxed overflow-x-auto text-[#5c5644]">
{`// Pre-funding requirement at BIN sponsor settlement account
// Must maintain sufficient fiat to cover T+1 and T+2 settlement batches

daily_spend_avg   = Σ(authorised_amounts_per_day)
settlement_window = 2 days                         // T+2 settlement lag

base_prefund      = daily_spend_avg × settlement_window
volatility_buffer = daily_spend_avg × 0.30         // 30% buffer for spend spikes
dispute_reserve   = total_outstanding × 0.008      // 0.8% chargeback reserve

min_prefund_balance = base_prefund + volatility_buffer + dispute_reserve

// Example: $500k daily spend average
// base_prefund      = $500k × 2    = $1,000,000
// volatility_buffer = $500k × 0.30 = $150,000
// dispute_reserve   = $30m × 0.008 = $240,000
// min_prefund       ≈ $1,390,000

// This capital is idle — a direct cost of capital for the programme
// Programmes at $100M+ daily volume maintain $200M+ in prefunded fiat
// This is why large crypto card programmes require significant balance sheets`}
                  </pre>
                </div>

                <h3 className="text-lg font-bold text-[#201c14] mt-8 mb-4">Cross-Border FX: Currency Conversion at the Card Network Layer</h3>
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  When a cardholder spends in a currency different from the card&apos;s base currency (e.g., a USD-denominated card used at a EUR-priced merchant), a second layer of FX occurs at the card network level. Visa and Mastercard apply their own currency conversion rates — typically benchmarked to wholesale FX with a 1–3% margin added — and pass the converted amount to the issuer for settlement. The crypto PM must account for both the crypto-to-fiat conversion spread and the card-network FX markup when quoting foreign transaction fees to cardholders.
                </p>
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  Some programmes offer &ldquo;no foreign transaction fee&rdquo; by absorbing the network FX markup (monetising via wider crypto conversion spreads). Others charge explicit foreign transaction fees of 1–3%. The choice affects customer acquisition (no-FTF is a strong marketing claim) and programme economics (absorbing network FX markup compresses margin on every international transaction).
                </p>
              </div>
            </section>

            {/* ── Section 7: Compliance Engineering ── */}
            <section id="compliance-engineering">
              <div className="mb-10 pb-6 border-b border-[#ddd0b2]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268] mb-3">07 · Compliance</div>
                <h2 className="font-display text-xl md:text-[26px] font-bold text-[#201c14] mb-4 leading-snug">
                  Compliance Engineering: Where Card Rules Meet Crypto Rules
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  Crypto debit card programmes operate at the intersection of two regulatory regimes that were not designed to interact: traditional card network compliance requirements (PCI DSS, network operating rules, chargeback rules, anti-money laundering for card issuers) and crypto-specific regulatory requirements (VASP registration, travel rule compliance, DeFi exposure policies, on-chain transaction monitoring). Engineering both simultaneously — without violating either — is the most underestimated challenge in building a crypto card programme.
                </p>

                <h3 className="text-lg font-bold text-[#201c14] mt-8 mb-4">The Five Compliance Layers</h3>

                <div className="space-y-0 my-10">
                  {[
                    {
                      num: "1",
                      title: "KYC/KYB at Onboarding",
                      desc: "Card issuance requires full identity verification before the first transaction. The BIN sponsor sets minimum KYC requirements based on their regulatory licence conditions. For EU e-money licence programmes, this typically means: government ID verification, liveness check, PEP/sanctions screening, and adverse media check. For US programmes, CIP-compliant identity verification plus OFAC screening. Tiered KYC (lower limits before full verification) is possible in some jurisdictions but requires explicit BIN sponsor approval. Crypto-specific: on-chain wallet address verification and source-of-funds documentation may be required for users depositing large amounts of crypto."
                    },
                    {
                      num: "2",
                      title: "Transaction Monitoring — Fiat Layer",
                      desc: "All card transactions must be screened for AML red flags: unusual spend patterns, transaction velocity anomalies, geographic inconsistencies, high-risk MCC usage. The card processor typically provides baseline transaction monitoring; the crypto PM must implement supplementary monitoring calibrated to crypto-specific risks (e.g., cash-equivalent MCCs like money service businesses, casino MCCs, peer-to-peer payment services). Suspicious activity must be reported through standard SAR/STR mechanisms to the BIN sponsor's compliance function."
                    },
                    {
                      num: "3",
                      title: "On-Chain Transaction Monitoring",
                      desc: "For programmes that accept crypto deposits from external wallets, on-chain monitoring is mandatory. This means screening incoming TXID and sending address against VASP databases (Chainalysis, Elliptic, TRM Labs), identifying funds that have transited mixers, darknet markets, or sanctioned addresses, and blocking or flagging deposits accordingly. The Travel Rule (FATF Recommendation 16) applies to crypto transfers above applicable thresholds, requiring originator and beneficiary information to travel with the transfer — creating additional data collection obligations."
                    },
                    {
                      num: "4",
                      title: "Spending Controls for Regulatory Compliance",
                      desc: "Card network rules and regulatory requirements mandate certain spending controls: blocking of gambling MCCs in some jurisdictions (UK, Australia), blocking ATM withdrawals above daily limits, geographic blocks on sanctioned countries (OFAC SDN list countries cannot receive card services from US-regulated programmes), and MCC-level restrictions tied to the programme's licence scope. These controls must be implemented at the JIT funding layer (real-time, per transaction) and cannot rely on post-transaction correction."
                    },
                    {
                      num: "5",
                      title: "PCI DSS Compliance",
                      desc: "Handling cardholder data — card numbers, CVV, PINs, authorisation data — triggers PCI DSS obligations. The PM must certify at the appropriate PCI DSS level (1–4, determined by annual card transaction volume) and submit to annual QSA assessments or self-assessment questionnaires. For most crypto PM platforms, this means not storing PAN data directly — tokenising card numbers via the card processor's vault — and maintaining compliant API communication channels. PCI DSS non-compliance is a contract violation with the BIN sponsor and can result in programme termination."
                    },
                  ].map((item) => (
                    <div key={item.num} className="flex gap-4 py-5 border-b border-[#ddd0b2]/60">
                      <span className="w-9 h-9 rounded-full bg-[#fbf7ee] border-2 border-[#6f8fa3] flex items-center justify-center text-sm font-bold text-[#6f8fa3] shrink-0 mt-0.5">{item.num}</span>
                      <div>
                        <strong className="text-[#201c14] block mb-1 text-sm">{item.title}</strong>
                        <p className="text-sm text-[#5c5644] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Callout */}
                <div className="bg-[rgba(194,112,63,0.06)] border border-[rgba(194,112,63,0.15)] rounded-xl p-6 md:p-8">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#c2703f] mb-3">Regulatory Evolution</div>
                  <p className="text-sm text-[#5c5644] leading-relaxed">
                    The MiCA framework (Markets in Crypto-Assets Regulation), effective from 2024 in the EU, directly impacts crypto card programmes by classifying significant crypto-asset service providers as entities subject to enhanced regulatory obligations, including capital requirements and operational resilience standards. MAS in Singapore has published guidelines specifically addressing digital payment token service providers issuing cards. As card programmes mature, the regulatory surface area only expands — licensing requirements, travel rule obligations, and consumer protection rules are tightening in every major jurisdiction. Programmes that treat compliance as a launch checklist rather than an ongoing engineering discipline will fail regulatory examinations.
                  </p>
                </div>
              </div>
            </section>

            {/* ── Section 8: Vendor Landscape ── */}
            <section id="vendor-landscape">
              <div className="mb-10 pb-6 border-b border-[#ddd0b2]">
                <div className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268] mb-3">08 · Build vs Buy</div>
                <h2 className="font-display text-xl md:text-[26px] font-bold text-[#201c14] mb-4 leading-snug">
                  Vendor Landscape &amp; Build vs Buy Decision Framework
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-[#5c5644] leading-relaxed">
                  The card infrastructure market has consolidated significantly since 2018. A handful of platform providers now handle the BIN sponsorship, processing, and programme management layer for the majority of new fintech card programmes — including crypto programmes. The build vs buy decision at each layer is consequential: building too much creates regulatory exposure and operational overhead; buying too much creates vendor dependency that can constrain the programme at scale.
                </p>

                <div className="overflow-x-auto my-10">
                  <table className="w-full text-[13px] border-collapse">
                    <thead>
                      <tr className="border-b border-[#ddd0b2]">
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#6f8fa3]">Layer</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#6f8fa3]">Key Vendors</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#6f8fa3]">Build Case</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#6f8fa3]">Buy Case</th>
                        <th className="text-left py-3 px-4 text-[10px] font-mono tracking-widest uppercase text-[#6f8fa3]">Typical Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["BIN Sponsorship", "Sutton Bank, Cross River, Evolve, Griffin", "Only if you obtain a bank charter (3–7 years, $50M+ capital)", "Always — unless licensed bank", "$0.10–0.25/txn + monthly programme fee"],
                        ["Card Processing", "Marqeta, Galileo, i2c, Lithic, Moov", "At $5B+ annual volume where custom processing unlocks margin", "Early/mid stage — Marqeta offers best JIT SDK", "$0.05–0.12/txn + setup fee"],
                        ["Card Personalisation", "Valid Systems, CPI Card Group, Perfect Plastic", "Only if issuing >5M cards/year", "Always — physical production", "$2–8/card (materials + shipping)"],
                        ["KYC/Identity", "Jumio, Onfido, Persona, Veriff", "Rarely — high specialization required", "Almost always — provider switching via abstraction layer", "$0.50–2.50/verification"],
                        ["On-Chain Monitoring", "Chainalysis, Elliptic, TRM Labs", "Never — network effects require scale they have", "Always — critical compliance dependency", "$0.01–0.05/TXID screened"],
                        ["Card Management App", "Custom UI on PM platform APIs", "Always — core product differentiation", "Partial — use PM platform APIs, build the UX", "Engineering cost (3–9 months)"],
                        ["FX/Crypto Conversion", "Internal OTC desk, 1inch, Uniswap, Fireblocks", "At scale — internalising spread is high-margin", "Early stage — use aggregators", "0.1–0.5% per conversion"],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-[#ddd0b2]/60 hover:bg-[rgba(111,143,163,0.03)] transition-colors">
                          <td className="py-3 px-4 text-[#201c14] font-medium text-[13px]">{row[0]}</td>
                          <td className="py-3 px-4 text-[#5c5644]">{row[1]}</td>
                          <td className="py-3 px-4 text-[#5c5644]">{row[2]}</td>
                          <td className="py-3 px-4 text-[#5c5644]">{row[3]}</td>
                          <td className="py-3 px-4 text-[#6f8fa3] font-mono text-[12px]">{row[4]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-bold text-[#201c14] mt-8 mb-4">Programme Launch Phases: A Realistic Timeline</h3>

                <div className="space-y-0 my-10">
                  {[
                    { num: "1", title: "Phase 1: BIN Sponsor &amp; Legal (Months 1–3)", desc: "Engage BIN sponsor prospects; negotiate programme agreement terms; establish legal entity structure (the PM entity must satisfy BIN sponsor due diligence); draft card programme agreement, data processing agreement, and BIN sponsor oversight framework; obtain any required regulatory registrations (e-money agent, VASP registration, MSB registration). This phase takes longer than firms expect because BIN sponsor due diligence on crypto PMs is intensive — expect 3–6 months for full legal and compliance onboarding." },
                    { num: "2", title: "Phase 2: Platform Integration (Months 3–6)", desc: "Integrate with card processor platform (Marqeta/Galileo) APIs for card issuance, JIT funding, and transaction webhooks; build crypto asset management backend (balance tracking, spending controls, on-chain monitoring integration); implement KYC/identity verification pipeline; integrate on-chain transaction monitoring; develop card management mobile/web app against processor APIs. This phase is engineering-intensive and should not be underestimated — JIT SLA requirements are demanding." },
                    { num: "3", title: "Phase 3: Testing &amp; Certification (Months 6–8)", desc: "Conduct BIN sponsor programme review and sign-off; complete card network programme registration (Visa Commercial Ready / Mastercard Card Programme Registration); perform end-to-end payment testing across all supported transaction types (chip, contactless, CNP, ATM); complete PCI DSS SAQ or QSA assessment; conduct fraud and dispute simulation exercises; load test JIT endpoint against p99 SLA targets; conduct regulatory-mandated penetration testing on card platform." },
                    { num: "4", title: "Phase 4: Limited Launch &amp; Scale (Months 8+)", desc: "Beta launch to controlled cohort (employees, waitlist users); monitor JIT decline rates, authorisation success rates, and fraud rates; tune spending controls and fraud models based on production data; ramp card printing and fulfilment pipeline; launch public programme; begin reporting cadence to BIN sponsor; establish SAR/STR filing pipeline with BIN sponsor compliance team. Most programmes take 12–18 months from BIN sponsor selection to public launch." },
                  ].map((item) => (
                    <div key={item.num} className="flex gap-4 py-5 border-b border-[#ddd0b2]/60">
                      <span className="w-9 h-9 rounded-full bg-[#fbf7ee] border-2 border-[#6f8fa3] flex items-center justify-center text-sm font-bold text-[#6f8fa3] shrink-0 mt-0.5">{item.num}</span>
                      <div>
                        <strong className="text-[#201c14] block mb-1 text-sm" dangerouslySetInnerHTML={{ __html: item.title }} />
                        <p className="text-sm text-[#5c5644] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pull Quote */}
                <div className="my-10 pl-6 md:pl-8 border-l-[3px] border-[#6f8fa3] bg-[rgba(111,143,163,0.05)] rounded-r-lg p-6 md:p-8 relative">
                  <div className="absolute top-2 left-4 text-6xl text-[#6f8fa3] opacity-20 font-serif leading-none">&ldquo;</div>
                  <p className="text-base md:text-lg italic text-[#6f8fa3] leading-relaxed relative z-10 mb-3">
                    The firms that launch crypto card programmes in 18 months are not moving faster than the firms that take 24 months. They are starting the BIN sponsor legal process six months before they finish the product spec.
                  </p>
                  <cite className="text-[10px] font-mono tracking-widest uppercase text-[#8a8268] not-italic">— Practitioner Observation, Card Programme Launch Sequencing</cite>
                </div>
              </div>
            </section>

            {/* ── Conclusion ── */}
            <section className="bg-[#fbf7ee] border border-[#ddd0b2] rounded-2xl p-10 md:p-14 text-center">
              <div className="text-[10px] font-mono tracking-widest uppercase text-[#6f8fa3] mb-4">Synthesis</div>
              <h2 className="font-display text-xl md:text-[26px] font-bold text-[#201c14] mb-4">
                Cards Are Infrastructure. Treat Them That Way.
              </h2>
              <p className="text-sm text-[#5c5644] leading-relaxed max-w-[800px] mx-auto mb-6">
                Crypto debit card programmes look like product launches. They feel like marketing exercises — slick apps, metal cards, cashback in Bitcoin. Beneath the surface, they are infrastructure projects that require multi-year regulatory relationships, capital-intensive prefunding operations, sub-200ms JIT endpoints, and compliance programs that simultaneously satisfy card network rules, VASP regulations, and on-chain transaction monitoring obligations.
              </p>
              <p className="text-sm text-[#5c5644] leading-relaxed max-w-[800px] mx-auto mb-6">
                The BIN sponsor relationship is not a vendor contract — it is a regulated partnership where the sponsor takes on genuine regulatory liability for every card transaction the PM enables. The card network is not an API — it is a fifty-year-old infrastructure with operating rules, fee structures, and dispute mechanisms that predate the internet. The JIT funding webhook is not a webhook — it is a hard real-time system with a 1,500ms SLA that, if violated, declines a real cardholder at a real point of sale.
              </p>
              <p className="text-sm text-[#5c5644] leading-relaxed max-w-[800px] mx-auto">
                Firms that build crypto card programmes with this level of understanding — who plan the BIN sponsor negotiation before they hire the design agency, who model unit economics before they design the rewards programme, who instrument the JIT endpoint before they print the first card — build programmes that work. Those that treat the card as a marketing asset and the infrastructure as a vendor problem discover the hard way that in card payments, every failure mode is public, irreversible, and measured in microseconds.
              </p>
            </section>

          </div>
        </div>

        {/* ── FAQ ── */}
        <div className="max-w-[1200px] mx-auto px-6">
          <FaqSection
            headline="Crypto Debit Card Infrastructure"
            items={[
              {
                question: "What is a BIN sponsor and why do crypto companies need one?",
                answer: "A BIN (Bank Identification Number) sponsor is a licensed bank that holds principal membership in a card network (Visa, Mastercard) and sponsors non-bank entities to issue cards under its BIN. Crypto companies cannot directly own a BIN without a bank charter. The BIN sponsor provides the regulatory licence for card issuance, maintains card network membership, and manages settlement accounts. In exchange, the sponsor conducts due diligence on the crypto programme manager, sets programme parameters based on its own regulatory licence conditions, and collects sponsorship fees and a share of interchange revenue. Without a BIN sponsor, there is no card programme.",
              },
              {
                question: "What is JIT (Just-In-Time) funding and why does it matter for crypto cards?",
                answer: "JIT funding is a webhook mechanism used by card processor platforms (Marqeta, Galileo) that fires a real-time API call to the programme manager at the moment of card authorisation. The PM receives the transaction details and must respond within approximately 1,500ms with an APPROVE or DECLINE decision and the exact fiat amount to fund. For crypto cards, this is the mechanism that enables real-time balance checking, spending control enforcement, and (in some models) real-time crypto liquidation. JIT timing constraints are strict — sub-200ms p99 response times at the PM's JIT endpoint are required. Systems that miss the SLA cause declined transactions at the point of sale, which is the worst user experience in consumer payments.",
              },
              {
                question: "What is the difference between card authorisation, clearing, and settlement?",
                answer: "These are three distinct events in a card transaction lifecycle. Authorisation occurs in real time (milliseconds) at the point of sale — the card network routes a request to the issuer, who approves or declines. Funds are reserved but not moved. Clearing occurs hours later, when the merchant submits completed transaction data to their acquirer. Settlement occurs T+1 or T+2 business days after the transaction, when actual funds move between the issuer's settlement account and the acquirer's account via the card network. The crypto PM must maintain sufficient pre-funded fiat at the BIN sponsor's settlement account to cover the T+2 rolling settlement window — a significant capital requirement at scale.",
              },
              {
                question: "What is the unit economics of a crypto card programme?",
                answer: "The primary revenue line is interchange — the fee (typically 1–2% of transaction value in unregulated markets, capped at 0.2% in the EU and ~$0.21+0.05% in the US for debit) that flows from the merchant's acquirer to the card issuer on each transaction. The crypto PM captures a portion of this interchange (after the BIN sponsor takes its fee). Additional revenue comes from FX spread on crypto-to-fiat conversion and explicit foreign transaction fees. Costs include scheme fees (Visa/Mastercard assessment fees ~0.14% of volume), BIN sponsor fees, card processor fees, fraud reserves, and chargeback costs. Programmes offering cashback rewards must model reward liability against gross margin carefully — generous cashback on capped-interchange (EU) programmes typically produces negative unit economics.",
              },
              {
                question: "What are the main compliance obligations for a crypto debit card programme?",
                answer: "Crypto card programmes sit at the intersection of two regulatory regimes. From the card side: KYC/AML at onboarding (CIP for US, e-money AML for EU), ongoing transaction monitoring for suspicious activity, PCI DSS certification for cardholder data handling, and compliance with card network operating rules including MCC restrictions and spending limits. From the crypto side: VASP registration in applicable jurisdictions, Travel Rule compliance for crypto transfers above threshold amounts, on-chain transaction monitoring using blockchain analytics providers (Chainalysis, TRM Labs), and source-of-funds documentation for large crypto deposits. In jurisdictions covered by MiCA (EU from 2024) or equivalent frameworks, additional capital and operational resilience requirements apply.",
              },
              {
                question: "How does cross-border FX work on a crypto debit card?",
                answer: "Two layers of FX apply when a crypto cardholder spends in a foreign currency. First, the crypto-to-base-currency conversion (e.g., BTC to USD) — this is handled by the crypto PM's liquidation engine at or before authorisation, with the PM capturing a spread of typically 0.1–0.5%. Second, the base-to-spend-currency conversion (e.g., USD to EUR if the cardholder spends in Europe) — this is handled by the card network (Visa or Mastercard) at their published wholesale-benchmarked rate plus a network margin of 1–3%. The PM may absorb this network FX fee (marketing as 'no foreign transaction fee') or pass it to the cardholder as an explicit fee. Modelling total FX cost stack — crypto spread + network FX margin + any explicit cardholder FTF — is essential before announcing pricing.",
              },
              {
                question: "What is BIN sponsor concentration risk and how do programmes mitigate it?",
                answer: "BIN sponsor concentration risk is the risk that the programme's only BIN sponsor exits the market, faces regulatory action, or revokes the programme agreement — causing cards to immediately stop working. This risk materialised in 2020 when Wirecard's collapse instantly terminated dozens of prepaid card programmes. Mitigation requires a multi-BIN sponsor strategy: maintaining programme agreements with two or more BIN sponsors, with automated failover capability so that if one sponsor is unavailable, card authorisations route through the second sponsor's BIN. This requires duplicating the legal, compliance, and technical integration for each additional BIN sponsor, but is considered table-stakes resilience architecture for any programme handling significant card volume.",
              },
              {
                question: "How long does it realistically take to launch a crypto debit card programme?",
                answer: "Realistic timelines are 12–18 months from BIN sponsor selection to public launch. The typical phases are: legal and BIN sponsor onboarding (3–6 months — the most underestimated phase, as crypto PM due diligence is intensive), platform integration and crypto backend build (3–4 months), testing and card network certification (2–3 months), and limited beta before public launch (2–3 months). The critical sequencing lesson is to start the BIN sponsor negotiation and regulatory registration process before completing product design — the legal track is always on the critical path and cannot be compressed by engineering velocity. Programmes that start legal after completing the product build add 6–9 months to their launch timeline unnecessarily.",
              },
            ]}
          />
        </div>

        {/* ── Post Footer ── */}
        <div className="max-w-[1200px] mx-auto px-6 pb-12">
          <div className="border-t border-[#ddd0b2] pt-10 flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-[11px] font-mono text-[#8a8268] tracking-wider">
              Crypto Debit Card Infrastructure · Payments &amp; Cards · May 2026
            </p>
            <p className="text-[11px] font-mono text-[#8a8268] tracking-wider">
              For educational use · Not financial or legal advice
            </p>
          </div>
        </div>

        {/* ── Related Reading ── */}
        <div className="max-w-[1200px] mx-auto px-6 pb-24">
          <RelatedReading
            posts={[
              {
                slug: "stablecoin-architecture",
                title: "Designing Compliant Stablecoin Architectures",
                category: "Stablecoins",
                excerpt:
                  "Reserve design, smart contract architecture, and regulatory compliance frameworks for stablecoin systems — the infrastructure that powers crypto card spending.",
              },
              {
                slug: "institutional-custody-architecture",
                title: "Designing Institutional-Grade Custody Architecture",
                category: "Custody & Security",
                excerpt:
                  "MPC-CMP protocol design, HSM integration, and key management architecture — the custody layer that secures the crypto assets behind card programmes.",
              },
              {
                slug: "defi-banking-sea",
                title: "DeFi Banking in Southeast Asia",
                category: "DeFi",
                excerpt:
                  "Financial inclusion in SEA through DeFi rails — the market context for crypto card adoption across the region's underbanked population.",
              },
            ]}
          />
        </div>
      </article>

      <Footer />
    </>
  );
}
