import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import { websiteSchema, personSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <JsonLd data={[websiteSchema(), personSchema()]} />
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Full background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/new-bg.png')" }}
        />
        {/* Left-side overlay only — fades from dark to transparent */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, rgba(3,3,8,0.92) 0%, rgba(3,3,8,0.75) 35%, rgba(3,3,8,0.3) 60%, transparent 75%)"
          }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-64px)]">
            {/* Left: Text Content */}
            <div className="py-12 lg:py-0 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[rgba(124,58,237,0.1)] border border-[rgba(124,58,237,0.25)] rounded-full text-xs font-medium text-[#8b5cf6] mb-6">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                CTO & Blockchain Solutions Architect. Leader in Blockchain and DeFi Innovation
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold leading-[1.1] tracking-tight mb-5">
                Building the Future of Finance with{" "}
                <span className="bg-gradient-to-r from-[#a855f7] via-[#7c3aed] to-[#3b82f6] bg-clip-text text-transparent">
                  Blockchain & DeFi
                </span>
              </h1>
              <p className="text-base text-[#94a3b8] max-w-[480px] mb-8 leading-relaxed">
                CTO and blockchain expert focused on turning blockchain and DeFi into real-world financial infrastructure that is scalable, compliant, and built for mass adoption.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="#work"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-br from-[#7c3aed] to-[#a855f7] shadow-[0_4px_20px_rgba(124,58,237,0.3)] hover:shadow-[0_6px_28px_rgba(124,58,237,0.4)] hover:-translate-y-0.5 transition-all no-underline"
                >
                  Explore My Work
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-[#f8fafc] border border-[#252542] hover:border-[#8b5cf6] hover:bg-[rgba(124,58,237,0.15)] transition-all no-underline"
                >
                  Read My Blog
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg>
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-5">
                <div className="flex items-center gap-2 text-[13px] text-[#94a3b8]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  <strong className="text-[#f8fafc] font-bold">1,700+</strong> Followers
                </div>
                <div className="flex gap-3">
                  {[
                    { label: "LinkedIn", href: "https://linkedin.com/in/arrnaya", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                    { label: "X", href: "https://x.com/arrnaya", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                    { label: "GitHub", href: "https://github.com/arrnaya", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> },
                    { label: "Email", href: "mailto:arrnaya@gmail.com", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#0a0a12] border border-[#1a1a2e] text-[#94a3b8] hover:border-[#8b5cf6] hover:text-[#f8fafc] hover:bg-[rgba(124,58,237,0.15)] transition-all"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS */}
      <section id="achievements" className="relative z-10 bg-[#0a0a12] border-y border-[#1a1a2e]">
        <div className="max-w-[1280px] mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>,
              value: "1,700+", label: "LinkedIn Followers", desc: "Growing professional network of industry leaders",
            },
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
              value: "$20 Million+", label: "Revenue Generated", desc: "Led organization to $20M+ in revenue with stablecoin & card architectures",
            },
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>,
              value: "Stablecoin Funded", label: "Card Infrastructure", desc: "Integrated 11+ BINs for global crypto debit card programs",
            },
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>,
              value: "Regulatory Aligned", label: "Working with Major Banks", desc: "Presenting tokenization and DeFi use cases to authorities",
            },
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
              value: "Southeast Asia", label: "Financial Inclusion", desc: "Building solutions for the underbanked and unbanked",
            },
          ].map((stat, i) => (
            <div key={i} className="text-center px-4 py-2">
              <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center bg-[rgba(124,58,237,0.08)] rounded-[10px] text-[#8b5cf6]">
                {stat.icon}
              </div>
              <div className="text-xl lg:text-[22px] font-extrabold text-[#f8fafc] mb-1">{stat.value}</div>
              <div className="text-[13px] font-semibold text-[#f8fafc] mb-1">{stat.label}</div>
              <div className="text-xs text-[#64748b] leading-relaxed">{stat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="text-xs font-semibold tracking-[2px] uppercase text-[#8b5cf6] mb-3">About Me</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">Who I Am</h2>
            <div className="text-[15px] text-[#94a3b8] leading-relaxed space-y-4">
              <p>I currently serve as CTO & Chief Blockchain Officer at MAALChain, where I lead the design and execution of a Layer-1 blockchain, DeFi ecosystem, and tokenization initiatives—including regulatory-facing use cases presented to central banking authorities.</p>
              <p>In parallel, I am architecting a crypto-funded debit card and DeFi banking platform built on MAALChain, integrating traditional banking APIs and 11+ BINs to make digital finance accessible to underbanked and unbanked populations across Southeast Asia.</p>
              <p>My work sits at the intersection of blockchain & DeFi, payments and banking infrastructure, regulatory-aligned innovation, and scalable technology.</p>
              <div className="flex gap-4 p-5 bg-[#0a0a12] border border-[#1a1a2e] rounded-xl">
                <div className="w-9 h-9 shrink-0 bg-gradient-to-br from-[#7c3aed] to-[#a855f7] rounded-lg flex items-center justify-center text-white text-lg font-bold">&ldquo;</div>
                <p className="text-sm text-[#94a3b8] italic m-0">I build systems that are technically robust, compliance-aware, scalable across markets, and designed for mass adoption.</p>
              </div>
              <p>I collaborate closely with founders, boards, regulators, and financial institutions to translate complex technology into practical, investable, and deployable platforms.</p>
            </div>
          </div>

          <div id="expertise">
            <div className="text-xs font-semibold tracking-[2px] uppercase text-[#8b5cf6] mb-3">Core Focus Areas</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
                  title: "CTO / CBO Leadership", desc: "Strategic technology and business leadership driving growth and innovation.",
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>,
                  title: "Layer-1 & EVM Architecture", desc: "Designing secure, scalable, and high-performance blockchain infrastructure.",
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>,
                  title: "DeFi Banking & Payments", desc: "Building DeFi banking platforms, payment rails, and card infrastructure.",
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 2v20"/><path d="m15 19-3 3-3-3"/><path d="m19 9 3 3-3 3"/><path d="M2 12h20"/><path d="m5 9-3 3 3 3"/></svg>,
                  title: "Tokenization & Stablecoins", desc: "Creating real-world asset tokenization and stablecoin architectures.",
                },
              ].map((card, i) => (
                <div key={i} className="bg-[#0a0a12] border border-[#1a1a2e] rounded-xl p-6 hover:border-[#252542] hover:bg-[#0f0f1a] transition-all">
                  <div className="w-10 h-10 flex items-center justify-center bg-[rgba(124,58,237,0.08)] rounded-[10px] text-[#8b5cf6] mb-3.5">
                    {card.icon}
                  </div>
                  <h4 className="text-[15px] font-bold text-[#f8fafc] mb-1.5">{card.title}</h4>
                  <p className="text-[13px] text-[#64748b] leading-relaxed">{card.desc}</p>
                </div>
              ))}
              <div className="sm:col-span-2 bg-[#0a0a12] border border-[#1a1a2e] rounded-xl p-6 hover:border-[#252542] hover:bg-[#0f0f1a] transition-all">
                <div className="w-10 h-10 flex items-center justify-center bg-[rgba(124,58,237,0.08)] rounded-[10px] text-[#8b5cf6] mb-3.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>
                </div>
                <h4 className="text-[15px] font-bold text-[#f8fafc] mb-1.5">Financial Inclusion with DeFi</h4>
                <p className="text-[13px] text-[#64748b] leading-relaxed">Leveraging blockchain to bring financial services to underbanked and unbanked communities across emerging markets.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I BUILD */}
      <section id="work" className="bg-[#0a0a12] border-y border-[#1a1a2e]">
        <div className="max-w-[1280px] mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold tracking-[3px] uppercase text-[#64748b] mb-3">What I Build</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-2">Innovative Solutions. Real-World Impact.</h2>
            <p className="text-[15px] text-[#94a3b8]">End-to-end financial infrastructure powered by blockchain</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {[
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>, title: "Layer-1 Blockchain" },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>, title: "DeFi Ecosystem" },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, title: "Stablecoin Architecture" },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>, title: "Crypto Debit Cards" },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: "Banking API Integrations" },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>, title: "Tokenization Solutions" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 flex items-center justify-center bg-[rgba(124,58,237,0.08)] border border-[#1a1a2e] rounded-[14px] text-[#8b5cf6]">
                  {item.icon}
                </div>
                <h4 className="text-[13px] font-semibold text-[#f8fafc]">{item.title}</h4>
              </div>
            ))}
          </div>

          {/* <div className="text-center">
            <p className="text-xs text-[#64748b] mb-6">Trusted by partners, institutions, and communities across the world.</p>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              {[
                { name: "MAALChain", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg> },
                { name: "VISA", icon: null },
                { name: "Mastercard", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="7" cy="12" r="4"/><circle cx="17" cy="12" r="4"/></svg> },
                { name: "Binance Pay", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg> },
                { name: "CIRCLE", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg> },
                { name: "Fireblocks", icon: null },
              ].map((p, i) => (
                <div key={i} className="flex items-center gap-2 text-lg font-bold text-[#94a3b8] opacity-60 hover:opacity-100 transition-opacity cursor-default">
                  {p.icon}
                  <span>{p.name}</span>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      {/* SPEAKING */}
      <section id="speaking" className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold tracking-[2px] uppercase text-[#8b5cf6] mb-3">Speaking</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">Tech Talks & Keynotes</h2>
          <p className="text-[15px] text-[#94a3b8] max-w-[600px] mx-auto leading-relaxed">
            Sharing insights on blockchain, DeFi, and the future of financial infrastructure at leading tech events and communities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7145328607689662464/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-[#0a0a12] border border-[#1a1a2e] rounded-2xl p-8 hover:border-[#252542] hover:-translate-y-1 transition-all no-underline"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[rgba(124,58,237,0.08)] rounded-lg text-[#8b5cf6]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
              </div>
              <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-[rgba(124,58,237,0.1)] text-[#8b5cf6] border border-[rgba(124,58,237,0.2)]">Tech Talk</span>
            </div>
            <h3 className="text-lg font-bold text-[#f8fafc] mb-2 group-hover:text-[#a855f7] transition-colors leading-snug">
              Blockchain for Good: Building Financial Infrastructure for the Underbanked
            </h3>
            <p className="text-[13px] text-[#64748b] leading-relaxed mb-4">
              A deep dive into how blockchain and DeFi can drive financial inclusion across Southeast Asia — from Layer-1 architecture to real-world deployment.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-[#8b5cf6]">
              Watch on LinkedIn
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/posts/tech-dev-club_techfront2025-blockchainforgood-decentralization-activity-7340760664946233344-OD0c/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-[#0a0a12] border border-[#1a1a2e] rounded-2xl p-8 hover:border-[#252542] hover:-translate-y-1 transition-all no-underline"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[rgba(124,58,237,0.08)] rounded-lg text-[#8b5cf6]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
              </div>
              <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-[rgba(124,58,237,0.1)] text-[#8b5cf6] border border-[rgba(124,58,237,0.2)]">Keynote</span>
            </div>
            <h3 className="text-lg font-bold text-[#f8fafc] mb-2 group-hover:text-[#a855f7] transition-colors leading-snug">
              TechFront 2025: Decentralization & The Future of Finance
            </h3>
            <p className="text-[13px] text-[#64748b] leading-relaxed mb-4">
              Keynote on the convergence of traditional finance and decentralized systems — regulatory alignment, stablecoins, and mass adoption pathways.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-[#8b5cf6]">
              Watch on LinkedIn
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </div>
          </a>
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="max-w-[1280px] mx-auto px-6 py-20 bg-gradient-to-b from-[#030308] to-[rgba(30,27,75,0.15)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-semibold tracking-[2px] uppercase text-[#8b5cf6] mb-3">Blog</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">Ideas, Insights & Innovation</h2>
            <p className="text-[15px] text-[#94a3b8] leading-relaxed mb-6">
              Exploring the power of AI and Blockchain to transform industries, businesses, and everyday life. Practical insights for professionals across spheres.
            </p>
          </div>
          <div className="bg-[#0a0a12] border border-[#1a1a2e] rounded-2xl p-8 flex items-center gap-6 hover:border-[#252542] hover:-translate-y-0.5 transition-all">
            <div className="w-16 h-16 shrink-0 flex items-center justify-center bg-gradient-to-br from-[#7c3aed] to-[#a855f7] rounded-2xl text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1.5">Read My Blog</h4>
              <p className="text-[13px] text-[#64748b] leading-relaxed mb-4">In-depth articles on AI, Blockchain, DeFi, Payments, Leadership, and the future of finance.</p>
              <Link href="/blog" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-br from-[#7c3aed] to-[#a855f7] no-underline">
                Explore Blog Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-[#0a0a12] border-y border-[#1a1a2e]">
        <div className="max-w-[1280px] mx-auto px-6 py-20">
          <div className="bg-gradient-to-br from-[rgba(124,58,237,0.08)] to-[rgba(59,130,246,0.05)] border border-[#1a1a2e] rounded-2xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-5 flex-wrap justify-center lg:justify-start">
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#7c3aed] to-[#a855f7] rounded-[14px] text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M22 2 11 13"/><path d="m22 2-7 20-4-9-9-4 20-7z"/></svg>
              </div>
              <div>
                <h3 className="text-xl sm:text-[22px] font-bold mb-1.5">Let&apos;s Build the Future of Finance Together</h3>
                <p className="text-sm text-[#94a3b8]">Open to collaborations with founders, investors, regulators, and institutions building impactful solutions.</p>
              </div>
            </div>
            <a
              href="https://linkedin.com/in/arrnaya"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-br from-[#7c3aed] to-[#a855f7] shadow-[0_4px_20px_rgba(124,58,237,0.3)] hover:shadow-[0_6px_28px_rgba(124,58,237,0.4)] hover:-translate-y-0.5 transition-all whitespace-nowrap no-underline"
            >
              Get In Touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
