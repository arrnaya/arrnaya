"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#expertise", label: "Expertise" },
    { href: "/blog", label: "Blog" },
    { href: "/#speaking", label: "Speaking" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled || mobileOpen
          ? "bg-[rgba(245,239,226,0.85)] backdrop-blur-[20px] border-[var(--border)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-9 h-9 bg-[var(--text)] rounded-md flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--bg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold text-[var(--text)] leading-tight font-display tracking-tight">ARRNAYA</span>
            <span className="text-[10px] text-[var(--text-dim)] leading-tight tracking-wide">CTO • CBO • BUILDER</span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[13px] font-semibold tracking-wide uppercase text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors no-underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-wide uppercase text-[var(--bg)] bg-[var(--text)] hover:bg-[var(--accent)] transition-all no-underline"
            >
              Read the Blog
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden bg-transparent border-none text-[var(--text)] cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileOpen ? (
              <><path d="M18 6L6 18"/><path d="M6 6l12 12"/></>
            ) : (
              <><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></>
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[var(--bg-card)] border-t border-[var(--border)] px-6 py-4">
          <ul className="flex flex-col gap-4 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-semibold uppercase tracking-wide text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors no-underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/blog"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold uppercase text-[var(--bg)] bg-[var(--text)] no-underline"
              >
                Read the Blog
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
