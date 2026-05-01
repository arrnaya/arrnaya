"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#expertise", label: "Expertise" },
    { href: "/#achievements", label: "Achievements" },
    { href: "/blog", label: "Blog" },
    { href: "/#speaking", label: "Speaking" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(3,3,8,0.8)] backdrop-blur-[20px] border-b border-[#1a1a2e]">
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-9 h-9 bg-gradient-to-br from-[#7c3aed] to-[#a855f7] rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold text-[#f8fafc] leading-tight">Arrnaya</span>
            <span className="text-[11px] text-[#64748b] leading-tight">CTO • CBO • Builder • Innovator</span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] transition-colors no-underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-br from-[#7c3aed] to-[#a855f7] shadow-[0_4px_20px_rgba(124,58,237,0.3)] hover:shadow-[0_6px_28px_rgba(124,58,237,0.4)] hover:-translate-y-0.5 transition-all no-underline"
            >
              Read My Blog
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden bg-transparent border-none text-[#f8fafc] cursor-pointer"
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
        <div className="md:hidden bg-[#0a0a12] border-t border-[#1a1a2e] px-6 py-4">
          <ul className="flex flex-col gap-4 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] transition-colors no-underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/blog"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-br from-[#7c3aed] to-[#a855f7] no-underline"
              >
                Read My Blog
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
