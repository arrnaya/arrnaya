import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import JsonLd from "../../components/JsonLd";
import { blogPostingSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI for the Modern CA — 30-Day Roadmap | Arrnaya Blog",
  description:
    "A structured 30-day learning roadmap for practising Chartered Accountants in India — covering AI foundations, audit automation, tax technology, and advisory transformation.",
  keywords: [
    "AI for CA",
    "Chartered Accountant",
    "AI Roadmap",
    "Audit Automation",
    "Tax Technology",
    "ICAI",
    "Indian CA",
    "AI Tools",
    "Machine Learning Finance",
  ],
  authors: [{ name: "Arrnaya" }],
  openGraph: {
    type: "article",
    title: "AI for the Modern CA — 30-Day Roadmap",
    description:
      "A structured 30-day learning roadmap for practising Chartered Accountants in India — covering AI foundations, audit automation, tax technology, and advisory transformation.",
    publishedTime: "2026-04-30",
    tags: ["AI", "Chartered Accountant", "India", "Roadmap", "Finance"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for the Modern CA — 30-Day Roadmap",
    description:
      "A structured 30-day learning roadmap for practising Chartered Accountants in India.",
  },
  // JSON-LD rendered via component
};

const phases = [
  {
    num: "I",
    tag: "Days 1–6 · Foundations",
    title: "Understanding AI & Its Relevance to CA Practice",
    desc: "Build conceptual clarity on AI, machine learning, and automation — grounded in the Indian accounting context.",
    color: "#1a4a6b",
    days: [
      { day: "01", title: "What Is AI? A CA's Orientation", items: ["AI vs ML vs Automation — what differs", "How AI processes unstructured financial data", "Current AI adoption in Big 4 India firms"], output: "Write a 1-page note on 3 AI use cases in your own practice area" },
      { day: "02", title: "The Indian Regulatory Landscape & AI", items: ["ICAI's stance on AI and technology in assurance", "MCA21 v3, Faceless Assessment — government AI", "DPDP Act 2023 and data implications for CAs"], output: "DPDP compliance checklist for client data handled by AI tools" },
      { day: "03", title: "Large Language Models for Finance Professionals", items: ["How ChatGPT / Claude work (non-technical)", "Hallucination risk and verification protocols", "Prompt engineering basics for finance queries"], output: "Draft 10 useful prompts for GST research and audit documentation" },
      { day: "04", title: "Data Literacy for the AI-Ready CA", items: ["Structured vs unstructured financial data", "Excel to Python/SQL — where to start", "Understanding APIs and data pipelines"], output: "Clean and analyze a sample trial balance CSV using Excel AI features" },
      { day: "05", title: "AI in Indian Accounting Software", items: ["Tally Prime AI features and auto-reconciliation", "Zoho Books intelligence & anomaly detection", "ClearTax AI, Karvy, CAMSonline integrations"], output: "Comparison table of AI features across 4 Indian accounting platforms" },
      { day: "06", title: "Week 1 Consolidation & Self-Assessment", items: ["Map AI maturity of your current practice", "Identify top 3 pain points AI can address", "Set personal 30-day AI adoption goals"], output: "Personal AI readiness scorecard for your firm" },
    ],
  },
  {
    num: "II",
    tag: "Days 7–13 · AI Tools in Practice",
    title: "Hands-On Tools for Daily CA Workflows",
    desc: "Practical application of AI tools that a working CA can deploy immediately — document analysis, research, drafting.",
    color: "#c8500a",
    days: [
      { day: "07", title: "AI-Powered Document Review", items: ["Upload & interrogate financial statements with AI", "Contract review using Claude / ChatGPT", "Extracting data from scanned PDFs (OCR + AI)"], output: "Review a client P&L using AI — note discrepancies found" },
      { day: "08", title: "AI for GST & Income Tax Research", items: ["Querying AI on circular interpretations and case law", "Using Perplexity / Claude for CBDT notification research", "Cross-verifying AI output with IncomeTaxIndia.gov.in"], output: "AI-assisted research note on a recent GST AAR ruling" },
      { day: "09", title: "Drafting & Communication with AI", items: ["Management letters, board reports, engagement letters", "Crafting client advisory memos using AI", "Structured prompts for ICAI-compliant language"], output: "Draft a management representation letter using an AI tool" },
      { day: "10", title: "Spreadsheet Intelligence & Excel Copilot", items: ["Microsoft 365 Copilot for financial workbooks", "AI formula generation and data cleaning", "Variance analysis automation with natural language"], output: "Automate a monthly MIS report using Copilot or AI formulas" },
      { day: "11", title: "Workflow Automation — Zapier, Make & n8n", items: ["Automate client document collection workflows", "Email-to-task automation for compliance deadlines", "WhatsApp/email reminders for GST due dates"], output: "Build a no-code workflow for GST return due date reminders" },
      { day: "12", title: "AI in Practice Management Software", items: ["ERPCA, Marg, and Practice Ignition AI features", "Client onboarding automation with AI forms", "AI-driven billing and time tracking"], output: "Map current practice management gaps vs AI-enabled alternatives" },
      { day: "13", title: "Building Your AI Toolkit — Week 2 Review", items: ["Curate your personal AI tool stack", "Cost-benefit assessment of paid AI tools", "Team rollout and client confidentiality safeguards"], output: "Firm AI Tool Policy — 1-page internal document" },
    ],
  },
  {
    num: "III",
    tag: "Days 14–20 · Audit & Assurance",
    title: "AI-Augmented Audit in the Indian Context",
    desc: "Transform your audit methodology — from risk assessment to report drafting — using AI and data analytics aligned with SA Standards.",
    color: "#b8962e",
    days: [
      { day: "14", title: "AI-Based Risk Assessment", items: ["Using AI to identify anomalies in trial balances", "Benford's Law automation for fraud detection", "Linking SA 315 risk factors to AI screening"], output: "Run Benford's Law analysis on a sample dataset; document findings" },
      { day: "15", title: "Continuous Auditing & Real-Time Monitoring", items: ["Concept of continuous assurance vs periodic audit", "SAP/Oracle built-in audit analytics tools", "CAAT tools — ACL (Galvanize), IDEA for Indian CAs"], output: "Design a continuous monitoring checklist for a manufacturing client" },
      { day: "16", title: "Data Analytics for Substantive Testing", items: ["100% population testing vs traditional sampling", "Journal entry testing with AI pattern detection", "Related party transaction screening using network graphs"], output: "Build a journal entry testing template in Excel/Python" },
      { day: "17", title: "AI in Inventory & Fixed Asset Verification", items: ["Drone + computer vision for physical stock counts", "AI image recognition for asset tagging", "Reconciling AI counts with books — SOP design"], output: "Draft an SOP for AI-assisted inventory verification for an MSME client" },
      { day: "18", title: "AI-Assisted Audit Documentation", items: ["Auto-generating working papers from data outputs", "SA 230 documentation compliance using AI", "Review notes and query drafting via LLMs"], output: "Generate a draft audit working paper using an AI tool" },
      { day: "19", title: "Statutory Audit in the MCA21 v3 Era", items: ["AI parsing of XBRL-tagged financial data", "MCA data analytics for peer benchmarking", "CARO 2020 AI checklist automation"], output: "Build a CARO 2020 AI-assisted checklist template" },
      { day: "20", title: "Audit Quality & Peer Review in the AI Age", items: ["ICAI Quality Review Board expectations on AI use", "Documenting AI reliance in audit files", "Managing AI errors and professional skepticism"], output: "AI Audit Disclosure Statement template for engagement files" },
    ],
  },
  {
    num: "IV",
    tag: "Days 21–26 · Taxation",
    title: "AI in Indian Taxation — GST, Income Tax & Transfer Pricing",
    desc: "Leverage AI to navigate India's complex and frequently changing tax landscape with speed and accuracy.",
    color: "#4a7c59",
    days: [
      { day: "21", title: "GST Compliance Automation", items: ["AI-powered GSTR-2B reconciliation tools", "ITC mismatch detection using ClearTax/GSTN Analytics", "E-invoice AI validation and IRN auto-generation"], output: "Perform a mock GSTR-2A vs 2B reconciliation using an AI tool" },
      { day: "22", title: "Faceless Assessment & AI Tax Filing", items: ["How income tax faceless system uses AI for scrutiny", "AI-assisted ITR preparation and AIS reconciliation", "Responding to AI-generated notices effectively"], output: "Draft a response template to a faceless assessment notice" },
      { day: "23", title: "TDS Compliance & Automation", items: ["AI tools for TDS rate classification (26AS / AIS)", "Automated 26Q/24Q filing with AI reconciliation", "Lower deduction certificate tracking systems"], output: "Build a TDS compliance tracker with AI-assisted rate lookup" },
      { day: "24", title: "Transfer Pricing & International Tax", items: ["AI tools for benchmarking comparable searches (TNMM)", "Country-by-country report analysis automation", "BEPS Pillar Two — India's GMT implications"], output: "Use AI to identify comparables for a software services company TP study" },
      { day: "25", title: "Tax Litigation Support with AI", items: ["Case law research with Taxmann AI, SCC Online AI", "AI drafting of grounds of appeal and written submissions", "Mapping dispute resolution under Vivad se Vishwas 2.0"], output: "Draft grounds of appeal for a mock addition under Section 68" },
      { day: "26", title: "Predictive Tax Planning with AI", items: ["AI-based tax optimization scenario modelling", "Budget impact analysis using LLMs", "Proactive client advisory using AI-generated tax summaries"], output: "Build a tax planning scenario model for a HNI client using AI" },
    ],
  },
  {
    num: "V",
    tag: "Days 27–30 · Advisory, Ethics & Future",
    title: "Positioning as an AI-Enabled Advisor",
    desc: "Synthesize your learning, address ethical obligations, and build a strategy for long-term AI integration in your CA practice.",
    color: "#7c4a7c",
    days: [
      { day: "27", title: "CFO Advisory & FP&A with AI", items: ["AI-powered forecasting and cash flow modelling", "Real-time dashboards for finance leadership (Power BI AI)", "Offering Virtual CFO services enhanced by AI"], output: "Build a 12-month AI-assisted cash flow forecast for a sample MSME" },
      { day: "28", title: "Ethics, Liability & Professional Standards", items: ["ICAI Code of Ethics — AI disclosure obligations", "Who is liable when AI gives wrong tax advice?", "Client consent, data privacy, and AI tool agreements"], output: "Draft an AI disclosure clause for client engagement letters" },
      { day: "29", title: "Emerging Tech — Blockchain, GenAI & the Next Frontier", items: ["Blockchain audit trails and smart contract assurance", "CBDC implications for Indian CA practice", "Agentic AI — autonomous finance agents in 2025+"], output: "Write a client briefing note on CBDC and its accounting implications" },
      { day: "30", title: "Your AI-Enabled Practice — 90-Day Plan", items: ["Consolidate your 30-day learnings into an action plan", "Staff training roadmap for your firm", "Define your AI-differentiated service offerings"], output: "Complete Firm AI Transformation Roadmap — 90-day document" },
    ],
  },
];

const tools = [
  { name: "Claude / ChatGPT", use: "Research, drafting, document Q&A" },
  { name: "ClearTax AI", use: "GST reconciliation, ITR e-filing" },
  { name: "Tally Prime 5.0", use: "AI-assisted accounting & reports" },
  { name: "Taxmann AI", use: "Tax research, case law, circulars" },
  { name: "Microsoft Copilot", use: "Excel/Word AI for working papers" },
  { name: "Power BI + AI", use: "MIS dashboards, anomaly alerts" },
  { name: "IDEA / ACL", use: "CAAT audit analytics" },
  { name: "Perplexity Pro", use: "Real-time finance research" },
  { name: "Zoho Books AI", use: "Bookkeeping automation, anomaly" },
  { name: "n8n / Make", use: "Workflow & compliance automation" },
];

export default function BlogPost() {
  return (
    <>
      <JsonLd data={blogPostingSchema({
        headline: "AI for the Modern CA — 30-Day Roadmap",
        description:
          "A structured 30-day learning roadmap for practising Chartered Accountants in India — covering AI foundations, audit automation, tax technology, and advisory transformation.",
        slug: "ca-ai-roadmap",
        datePublished: "2026-04-30",
        keywords: [
          "AI for CA",
          "Chartered Accountant",
          "AI Roadmap",
          "Audit Automation",
          "Tax Technology",
          "ICAI",
          "Indian CA",
          "AI Tools",
          "Machine Learning Finance",
        ],
      })} />
      <Navbar />

      {/* Post Header — Purple Sparkling Background */}
      <article className="pt-20">
        <header className="relative py-20 overflow-hidden">
          {/* Deep purple base */}
          <div className="absolute inset-0 bg-[#0f0524]" />
          {/* Purple glow spots */}
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#7c3aed] opacity-20 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#a855f7] opacity-15 blur-[100px]" />
          <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] rounded-full bg-[#3b82f6] opacity-10 blur-[80px]" />
          {/* Sparkle dots */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(168,85,247,0.4) 0px, rgba(168,85,247,0.4) 1px, transparent 1px),
                              radial-gradient(circle at 70% 20%, rgba(124,58,237,0.3) 0px, rgba(124,58,237,0.3) 1.5px, transparent 1.5px),
                              radial-gradient(circle at 40% 70%, rgba(168,85,247,0.35) 0px, rgba(168,85,247,0.35) 1px, transparent 1px),
                              radial-gradient(circle at 80% 60%, rgba(59,130,246,0.25) 0px, rgba(59,130,246,0.25) 1px, transparent 1px),
                              radial-gradient(circle at 15% 80%, rgba(124,58,237,0.3) 0px, rgba(124,58,237,0.3) 1.5px, transparent 1.5px),
                              radial-gradient(circle at 60% 50%, rgba(168,85,247,0.2) 0px, rgba(168,85,247,0.2) 2px, transparent 2px),
                              radial-gradient(circle at 90% 85%, rgba(124,58,237,0.3) 0px, rgba(124,58,237,0.3) 1px, transparent 1px),
                              radial-gradient(circle at 35% 15%, rgba(59,130,246,0.2) 0px, rgba(59,130,246,0.2) 1px, transparent 1px)`,
            backgroundSize: '250px 250px, 300px 300px, 200px 200px, 350px 350px, 280px 280px, 400px 400px, 220px 220px, 320px 320px'
          }} />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030308]" />

          <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-28 md:py-36">
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <span className="text-[11px] font-semibold tracking-wider uppercase px-4 py-2 rounded-full bg-[rgba(124,58,237,0.15)] text-[#a855f7] border border-[rgba(168,85,247,0.25)] backdrop-blur-sm">
                India · Chartered Accountancy · 2026
              </span>
              <span className="text-[11px] text-[#94a3b8]">30 Days · 5 Phases · ICAI Aligned</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-8">
              AI for the<br />
              <span className="bg-gradient-to-r from-[#a855f7] to-[#3b82f6] bg-clip-text text-transparent">
                Modern CA
              </span>
            </h1>
            <p className="text-base md:text-lg text-[#94a3b8] max-w-[600px] leading-relaxed mb-10">
              A structured 30-day learning roadmap for practising Chartered Accountants in India — covering AI foundations, audit automation, tax technology, and advisory transformation.
            </p>
            <div className="flex flex-wrap gap-3">
              {["30 Days", "5 Phases", "India-Specific", "ICAI Aligned"].map((badge) => (
                <span
                  key={badge}
                  className="text-[10px] font-mono tracking-widest uppercase border border-[rgba(168,85,247,0.25)] text-[#94a3b8] px-4 py-2 rounded-sm bg-[rgba(124,58,237,0.05)]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Legend */}
        <div className="bg-[#0a0a12] border-b border-[#1a1a2e]">
          <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-wrap items-center gap-4 md:gap-6">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748b]">Track</span>
            {[
              { color: "#1a4a6b", label: "Foundations" },
              { color: "#c8500a", label: "AI Tools" },
              { color: "#b8962e", label: "Audit & Assurance" },
              { color: "#4a7c59", label: "Taxation" },
              { color: "#7c4a7c", label: "Advisory & Ethics" },
            ].map((track) => (
              <div key={track.label} className="flex items-center gap-2 text-xs text-[#64748b]">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: track.color }} />
                {track.label}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
          <div className="space-y-32">
            {phases.map((phase) => (
              <section key={phase.num}>
                {/* Phase Header */}
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start mb-16 pb-10 py-10 border-b-2 border-[#1a1a2e]">
                  <span className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-none text-[#1a1a2e] shrink-0 select-none">
                    {phase.num}
                  </span>
                  <div className="min-w-0 pt-1">
                    <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-3">
                      {phase.tag}
                    </div>
                    <h2 className="text-xl md:text-[26px] font-bold text-[#f8fafc] mb-4 leading-snug">
                      {phase.title}
                    </h2>
                    <p className="text-sm text-[#64748b] max-w-[600px] leading-relaxed">{phase.desc}</p>
                  </div>
                </div>

                {/* Day Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {phase.days.map((day) => (
                    <div
                      key={day.day}
                      className="bg-[#0a0a12] border border-[#1a1a2e] rounded-xl p-8 relative overflow-hidden hover:border-[#252542] hover:-translate-y-1 transition-all duration-300 group"
                    >
                      <div
                        className="absolute top-0 left-0 w-[3px] h-full"
                        style={{ background: phase.color }}
                      />
                      <div className="text-[11px] font-mono tracking-widest uppercase text-[#64748b] mb-5">
                        Day {day.day}
                      </div>
                      <h3 className="text-base font-bold text-[#f8fafc] mb-5 leading-snug">
                        {day.title}
                      </h3>
                      <ul className="list-none space-y-3 mb-6">
                        {day.items.map((item, i) => (
                          <li key={i} className="text-sm text-[#94a3b8] pl-5 relative leading-relaxed">
                            <span className="absolute left-0 top-[5px] text-[10px] text-[#64748b]">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="text-[11px] font-mono bg-[rgba(124,58,237,0.06)] px-4 py-3 rounded-md text-[#64748b] border-l-[3px] border-[#1a1a2e] leading-relaxed">
                        <strong className="text-[#f8fafc] font-medium">Output:</strong> {day.output}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {/* Tools Section */}
            <section className="bg-[#0a0a12] border border-[#1a1a2e] rounded-2xl p-10 md:p-14">
              <h2 className="text-xl md:text-[26px] font-bold text-[#a855f7] mb-3">
                Essential AI Tools for Indian CAs
              </h2>
              <p className="text-sm text-[#64748b] mb-10 leading-relaxed">
                Curated stack — free to paid tier, India-context validated
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="border border-[rgba(200,180,100,0.12)] rounded-lg p-4 hover:border-[rgba(200,180,100,0.3)] transition-colors bg-[rgba(255,255,255,0.01)]"
                  >
                    <div className="text-xs font-mono font-medium text-[#a855f7] mb-2">
                      {tool.name}
                    </div>
                    <div className="text-xs text-[#64748b] leading-relaxed">{tool.use}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* ICAI Note */}
            <div className="bg-[#0a0a12] border border-[#1a1a2e] rounded-xl p-8 md:p-10 flex gap-6">
              <div className="w-1 rounded bg-[#1a4a6b] shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-[#f8fafc] mb-4">
                  ICAI & Continuing Education
                </h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed">
                  The Institute of Chartered Accountants of India (ICAI) has been actively incorporating technology and AI into its curriculum. Refer to{" "}
                  <a
                    href="https://www.icai.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3b82f6] font-medium hover:underline"
                  >
                    icai.org
                  </a>{" "}
                  for ICAI&apos;s Digital Transformation Committee publications, the <em>Journal of the ICAI</em> tech editions, and upcoming CPE seminars on Data Analytics & AI. ICAI&apos;s Ind AS Board publications and the <em>Guidance Note on Audit of Internal Financial Controls</em> are relevant reference points for Days 14–20.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Post Footer */}
        <div className="max-w-[1200px] mx-auto px-6 pb-24">
          <div className="border-t border-[#1a1a2e] pt-10 flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-[11px] font-mono text-[#64748b] tracking-wider">
              30-Day AI Roadmap for Indian Chartered Accountants · 6
            </p>
            <p className="text-[11px] font-mono text-[#64748b] tracking-wider">
              For educational use · Verify regulatory content with ICAI / CBDT / GSTN
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
