"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import { websiteSchema, personSchema } from "@/lib/schema";

const challenges = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="18" height="14" x="3" y="5" rx="2" /><path d="M3 10h18" /></svg>
    ),
    title: "Blockchains and banks still speak different languages",
    desc: "Layer-1 architecture, DeFi protocols, and stablecoin rails only matter if they can settle against real banking infrastructure — most implementations stop at the whitepaper.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
    ),
    title: "Regulators are stakeholders, not obstacles",
    desc: "Tokenization and DeFi products that aren't designed with central banks and regulators at the table get built twice — once to ship, once to survive review.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    ),
    title: "The unbanked need rails, not slogans",
    desc: "Financial inclusion across Southeast Asia is a distribution and compliance problem before it's a technology problem — the architecture has to work for people without a credit history.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 2v20" /><path d="m15 19-3 3-3-3" /><path d="m19 9 3 3-3 3" /><path d="M2 12h20" /><path d="m5 9-3 3 3 3" /></svg>
    ),
    title: "AI and blockchain are converging faster than governance",
    desc: "Autonomous agents are already transacting on-chain. Infrastructure that doesn't account for verifiable identity, compliance, and policy-bound execution today is already behind.",
  },
];

const accordionItems = [
  {
    title: "Layer-1 & EVM Architecture",
    body: "Designing and shipping secure, scalable blockchain infrastructure — consensus, tokenomics, and EVM compatibility built for institutional throughput, not testnet demos.",
  },
  {
    title: "DeFi Banking & Payment Rails",
    body: "Architecting DeFi banking platforms and crypto-funded debit card programs, integrating 11+ BINs and traditional banking APIs into one settlement layer.",
  },
  {
    title: "Tokenization & Stablecoin Design",
    body: "Real-world asset tokenization and stablecoin architectures built for regulatory review from day one — not retrofitted after a compliance gap is found.",
  },
  {
    title: "AI-Augmented Web3 Infrastructure",
    body: "Bringing agentic AI onto blockchain rails responsibly — identity, verification, and policy-bound execution for autonomous systems that touch real capital.",
  },
  {
    title: "Regulatory & Institutional Alignment",
    body: "Presenting tokenization and DeFi use cases directly to central banking authorities, translating protocol design into language regulators and boards can act on.",
  },
];

export default function Home() {
  const [openAccordion, setOpenAccordion] = useState(0);

  return (
    <>
      <JsonLd data={[websiteSchema(), personSchema()]} />
      <Navbar />

      {/* HERO */}
      <section className="relative pt-16 overflow-hidden bg-[var(--bg)]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/from-blocks-to-blockchain-buiding-defi.png')" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, var(--bg) 0%, rgba(245,239,226,0.94) 32%, rgba(245,239,226,0.6) 55%, rgba(245,239,226,0.15) 78%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg)]" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-center lg:items-end">
            {/* Left: Text Content */}
            <div className="text-left">
              <div className="text-[11px] font-semibold tracking-[3px] uppercase text-[var(--accent)] mb-4">
                CTO · Chief Blockchain Officer
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.08] tracking-tight mb-6 text-[var(--text)]">
                Building the Future of Finance with{" "}
                <span className="bg-gradient-to-r from-[var(--accent)] via-[var(--accent-light)] to-[var(--dusty-blue)] bg-clip-text text-transparent">
                  Blockchain & DeFi
                </span>
              </h1>
              <p className="text-base md:text-lg text-[var(--text-muted)] max-w-[480px] mb-9 leading-relaxed">
                I build blockchain, DeFi, and tokenization infrastructure that unifies regulatory compliance, banking rails, and — increasingly — autonomous AI agents into systems built for real-world, mass-market adoption.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href="#work"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide text-[var(--bg)] bg-[var(--text)] hover:bg-[var(--accent)] transition-all no-underline"
                >
                  Explore My Work
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide text-[var(--text)] border border-[var(--border-light)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all no-underline"
                >
                  Read My Blog
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><path d="M15 3h6v6" /><path d="M10 14L21 3" /></svg>
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-5">
                <div className="flex items-center gap-2 text-[13px] text-[var(--text-muted)]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--accent)]"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  <strong className="text-[var(--text)] font-bold">1,950+</strong> Followers
                </div>
                <div className="flex gap-3">
                  {[
                    { label: "LinkedIn", href: "https://linkedin.com/in/arrnaya", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> },
                    { label: "X", href: "https://x.com/arrnaya", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
                    { label: "GitHub", href: "https://github.com/arrnaya", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg> },
                    { label: "Email", href: "mailto:arrnaya@gmail.com", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg> },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Portrait */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[280px] h-[187px] sm:w-[380px] sm:h-[253px] lg:w-[500px] lg:h-[333px] xl:w-[580px] xl:h-[387px]">
                <Image
                  src="/Arrnaya.png"
                  alt="Arun Kumar Yadav — CTO & Chief Blockchain Officer"
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-2xl"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, (max-width: 1280px) 500px, 580px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section id="achievements" className="relative z-10 bg-[var(--bg-alt)] border-y border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>,
              value: "1,950+", label: "LinkedIn Followers", desc: "Growing professional network of industry leaders",
            },
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
              value: "$20 Million+", label: "Revenue Generated", desc: "Led organization to $20M+ in revenue with stablecoin & card architectures",
            },
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>,
              value: "Stablecoin Funded", label: "Card Infrastructure", desc: "Integrated 11+ BINs for global crypto debit card programs",
            },
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>,
              value: "Regulatory Aligned", label: "Working with Major Banks", desc: "Presenting tokenization and DeFi use cases to authorities",
            },
            {
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
              value: "Southeast Asia", label: "Financial Inclusion", desc: "Building solutions for the underbanked and unbanked",
            },
          ].map((stat, i) => (
            <div key={i} className="text-center px-4 py-2">
              <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center bg-[var(--bg-card)] border border-[var(--border)] rounded-full text-[var(--accent)]">
                {stat.icon}
              </div>
              <div className="text-xl lg:text-[22px] font-bold text-[var(--text)] mb-1 font-display">{stat.value}</div>
              <div className="text-[13px] font-semibold text-[var(--text)] mb-1">{stat.label}</div>
              <div className="text-xs text-[var(--text-dim)] leading-relaxed">{stat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CHALLENGE / VALUE PROP LIST */}
      <section className="max-w-[1280px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-16">
          <div>
            <div className="text-[11px] font-semibold tracking-[3px] uppercase text-[var(--accent)] mb-4">The Problem</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-[1.1] tracking-tight text-[var(--text)]">
              Why Compliant Blockchain Infrastructure Is Still Rare
            </h2>
          </div>
          <div>
            {challenges.map((item, i) => (
              <div key={item.title} className={`flex gap-5 py-7 ${i !== 0 ? "border-t border-[var(--border)]" : ""}`}>
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-full bg-[var(--bg-card)] border border-[var(--border)] text-[var(--accent)]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--text)] mb-2 leading-snug">{item.title}</h3>
                  <p className="text-[14px] text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCORDION — INSIDE THE APPROACH */}
      <section id="expertise" className="bg-[var(--bg-alt)] border-y border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
            <div>
              <div className="text-[11px] font-semibold tracking-[3px] uppercase text-[var(--accent)] mb-4">Core Focus Areas</div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold leading-[1.1] tracking-tight text-[var(--text)] mb-6">
                Inside the Approach
              </h2>
              <p className="text-[14px] text-[var(--text-muted)] leading-relaxed max-w-[360px]">
                Five disciplines, one operating principle: infrastructure has to survive contact with regulators, banks, and real users — not just a testnet demo.
              </p>
            </div>
            <div>
              {accordionItems.map((item, i) => (
                <div key={item.title} className="border-b border-[var(--border-light)]">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === i ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 py-6 text-left bg-transparent border-none cursor-pointer"
                  >
                    <span className="text-[15px] sm:text-base font-bold text-[var(--text)]">{item.title}</span>
                    <span className="w-7 h-7 shrink-0 flex items-center justify-center rounded-full border border-[var(--border-light)] text-[var(--accent)] text-lg leading-none">
                      {openAccordion === i ? "−" : "+"}
                    </span>
                  </button>
                  {openAccordion === i && (
                    <p className="text-[14px] text-[var(--text-muted)] leading-relaxed pb-6 max-w-[560px]">{item.body}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-[1280px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="text-[11px] font-semibold tracking-[3px] uppercase text-[var(--accent)] mb-4">About Me</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-[var(--text)] mb-6">Who I Am</h2>
            <div className="text-[15px] text-[var(--text-muted)] leading-relaxed space-y-4">
              <p>I currently serve as CTO &amp; Chief Blockchain Officer at MAALChain, where I lead the design and execution of a Layer-1 blockchain, DeFi ecosystem, and tokenization initiatives — including regulatory-facing use cases presented to central banking authorities.</p>
              <p>In parallel, I am architecting a crypto-funded debit card and DeFi banking platform built on MAALChain, integrating traditional banking APIs and 11+ BINs to make digital finance accessible to underbanked and unbanked populations across Southeast Asia.</p>
              <p>My work sits at the intersection of blockchain &amp; DeFi, payments and banking infrastructure, regulatory-aligned innovation, and scalable technology.</p>
              <div className="flex gap-4 p-5 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl">
                <div className="w-9 h-9 shrink-0 bg-[var(--text)] rounded-full flex items-center justify-center text-[var(--bg)] text-lg font-bold font-display">&ldquo;</div>
                <p className="text-sm text-[var(--text-muted)] italic m-0">I build systems that are technically robust, compliance-aware, scalable across markets, and designed for mass adoption.</p>
              </div>
              <p>I collaborate closely with founders, boards, regulators, and financial institutions to translate complex technology into practical, investable, and deployable platforms.</p>
            </div>
          </div>

          <div>
            <div className="text-[11px] font-semibold tracking-[3px] uppercase text-[var(--accent)] mb-4">At a Glance</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
                  title: "CTO / CBO Leadership", desc: "Strategic technology and business leadership driving growth and innovation.",
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>,
                  title: "Layer-1 & EVM Architecture", desc: "Designing secure, scalable, and high-performance blockchain infrastructure.",
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>,
                  title: "DeFi Banking & Payments", desc: "Building DeFi banking platforms, payment rails, and card infrastructure.",
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 2v20" /><path d="m15 19-3 3-3-3" /><path d="m19 9 3 3-3 3" /><path d="M2 12h20" /><path d="m5 9-3 3 3 3" /></svg>,
                  title: "Tokenization & Stablecoins", desc: "Creating real-world asset tokenization and stablecoin architectures.",
                },
              ].map((card, i) => (
                <div key={i} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--accent)] hover:-translate-y-0.5 transition-all">
                  <div className="w-10 h-10 flex items-center justify-center bg-[var(--bg-alt)] rounded-full text-[var(--accent)] mb-3.5">
                    {card.icon}
                  </div>
                  <h4 className="text-[15px] font-bold text-[var(--text)] mb-1.5">{card.title}</h4>
                  <p className="text-[13px] text-[var(--text-dim)] leading-relaxed">{card.desc}</p>
                </div>
              ))}
              <div className="sm:col-span-2 bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--accent)] hover:-translate-y-0.5 transition-all">
                <div className="w-10 h-10 flex items-center justify-center bg-[var(--bg-alt)] rounded-full text-[var(--accent)] mb-3.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><path d="M16 3.128a4 4 0 0 1 0 7.744" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" /></svg>
                </div>
                <h4 className="text-[15px] font-bold text-[var(--text)] mb-1.5">Financial Inclusion with DeFi</h4>
                <p className="text-[13px] text-[var(--text-dim)] leading-relaxed">Leveraging blockchain to bring financial services to underbanked and unbanked communities across emerging markets.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENTO — WHAT I BUILD */}
      <section id="work" className="bg-[var(--bg-alt)] border-y border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <div className="text-[11px] font-semibold tracking-[3px] uppercase text-[var(--accent)] mb-4">What I Build</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-[var(--text)] mb-3">Innovative Solutions. Real-World Impact.</h2>
            <p className="text-[15px] text-[var(--text-muted)]">End-to-end financial infrastructure powered by blockchain</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>, title: "Layer-1 Blockchain", desc: "Consensus, tokenomics, and EVM-compatible infrastructure built for institutional throughput.", big: true },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>, title: "DeFi Ecosystem", desc: "Protocols and liquidity infrastructure designed for real capital." },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>, title: "Stablecoin Architecture", desc: "Reserve design and compliant issuance frameworks." },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>, title: "Crypto Debit Cards", desc: "BIN sponsorship and four-party network programme management." },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>, title: "Banking API Integrations", desc: "Traditional rails wired directly into on-chain settlement." },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>, title: "Tokenization Solutions", desc: "Real-world asset tokenization from legal structure to smart contract.", big: true },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-7 hover:border-[var(--accent)] hover:-translate-y-1 transition-all ${item.big ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[var(--bg-alt)] rounded-full text-[var(--accent)] mb-4">
                  {item.icon}
                </div>
                <h4 className="text-base font-bold text-[var(--text)] mb-2">{item.title}</h4>
                <p className="text-[13px] text-[var(--text-dim)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKING / RESOURCES */}
      <section id="speaking" className="max-w-[1280px] mx-auto px-6 py-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-[11px] font-semibold tracking-[3px] uppercase text-[var(--accent)] mb-4">Speaking</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-[var(--text)] mb-3">
              Tech Talks & Keynotes
            </h2>
            <p className="text-[15px] text-[var(--text-muted)] max-w-[560px] leading-relaxed">
              Sharing insights on blockchain, DeFi, and the future of financial infrastructure at leading tech events and communities.
            </p>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[var(--accent)] no-underline whitespace-nowrap">
            View All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              href: "https://www.linkedin.com/events/7465334273412214784/",
              tag: "LinkedIn Live",
              title: "AI-Augmented Web3 Infrastructure: Building Smarter Blockchains",
              desc: "How AI and Web3 infrastructure are evolving together, and what it takes to build scalable technologies for real-world adoption.",
            },
            {
              href: "https://www.linkedin.com/feed/update/urn:li:activity:7145328607689662464/",
              tag: "Tech Talk",
              title: "Blockchain for Good: Building Financial Infrastructure for the Underbanked",
              desc: "A deep dive into how blockchain and DeFi can drive financial inclusion across Southeast Asia.",
            },
            {
              href: "https://www.linkedin.com/posts/tech-dev-club_techfront2025-blockchainforgood-decentralization-activity-7340760664946233344-OD0c/",
              tag: "Keynote",
              title: "TechFront 2025: Decentralization & The Future of Finance",
              desc: "The convergence of traditional finance and decentralized systems — regulatory alignment, stablecoins, and adoption pathways.",
            },
          ].map((talk) => (
            <a
              key={talk.title}
              href={talk.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl overflow-hidden hover:border-[var(--accent)] hover:-translate-y-1 transition-all no-underline"
            >
              <div className="h-36 bg-[var(--bg-alt)] flex items-center justify-center shrink-0">
                <div className="w-12 h-12 flex items-center justify-center bg-[var(--bg-card)] border border-[var(--border)] rounded-full text-[var(--accent)] group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /></svg>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-[var(--accent-glow)] text-[var(--accent)] w-fit mb-3">{talk.tag}</span>
                <h3 className="text-base font-bold text-[var(--text)] mb-2 leading-snug group-hover:text-[var(--accent)] transition-colors">{talk.title}</h3>
                <p className="text-[13px] text-[var(--text-dim)] leading-relaxed flex-1">{talk.desc}</p>
                <div className="flex items-center gap-1.5 text-[13px] font-semibold text-[var(--accent)] mt-4 pt-4 border-t border-[var(--border)]">
                  Watch on LinkedIn
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="bg-[var(--bg-alt)] border-y border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[11px] font-semibold tracking-[3px] uppercase text-[var(--accent)] mb-4">Blog</div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-[var(--text)] mb-4">Ideas, Insights & Innovation</h2>
              <p className="text-[15px] text-[var(--text-muted)] leading-relaxed mb-6">
                Exploring the power of AI and Blockchain to transform industries, businesses, and everyday life. Practical insights for professionals across spheres.
              </p>
            </div>
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 flex items-center gap-6 hover:border-[var(--accent)] hover:-translate-y-0.5 transition-all">
              <div className="w-16 h-16 shrink-0 flex items-center justify-center bg-[var(--text)] rounded-2xl text-[var(--bg)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1.5 text-[var(--text)] font-display">Read My Blog</h4>
                <p className="text-[13px] text-[var(--text-dim)] leading-relaxed mb-4">In-depth articles on AI, Blockchain, DeFi, Payments, Leadership, and the future of finance.</p>
                <Link href="/blog" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide text-[var(--bg)] bg-[var(--text)] hover:bg-[var(--accent)] transition-all no-underline">
                  Explore Blog Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="max-w-[1280px] mx-auto px-6 py-24">
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[28px] p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5 flex-wrap justify-center lg:justify-start">
            <div className="w-14 h-14 flex items-center justify-center bg-[var(--text)] rounded-full text-[var(--bg)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M22 2 11 13" /><path d="m22 2-7 20-4-9-9-4 20-7z" /></svg>
            </div>
            <div>
              <h3 className="text-xl sm:text-[22px] font-bold mb-1.5 text-[var(--text)] font-display">Let&apos;s Build the Future of Finance Together</h3>
              <p className="text-sm text-[var(--text-muted)]">Open to collaborations with founders, investors, regulators, and institutions building impactful solutions.</p>
            </div>
          </div>
          <a
            href="https://linkedin.com/in/arrnaya"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide text-[var(--bg)] bg-[var(--text)] hover:bg-[var(--accent)] transition-all whitespace-nowrap no-underline"
          >
            Get In Touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
