import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#030308] border-t border-[#1a1a2e]">
      <div className="max-w-[1280px] mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 no-underline mb-4">
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
            <p className="text-[13px] text-[#64748b] leading-relaxed max-w-[260px]">
              Building secure, compliant, and scalable financial infrastructure for a better future.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://linkedin.com/in/arrnaya" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 flex items-center justify-center rounded-md bg-[#0a0a12] border border-[#1a1a2e] text-[#94a3b8] hover:border-[#8b5cf6] hover:text-[#f8fafc] transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://x.com/arrnaya" target="_blank" rel="noopener noreferrer" aria-label="X" className="w-8 h-8 flex items-center justify-center rounded-md bg-[#0a0a12] border border-[#1a1a2e] text-[#94a3b8] hover:border-[#8b5cf6] hover:text-[#f8fafc] transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://github.com/arrnaya" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-8 h-8 flex items-center justify-center rounded-md bg-[#0a0a12] border border-[#1a1a2e] text-[#94a3b8] hover:border-[#8b5cf6] hover:text-[#f8fafc] transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-[#f8fafc] mb-5">Quick Links</h4>
            <ul className="list-none space-y-3">
              {["Home", "About", "Expertise", "Achievements", "Blog", "Speaking"].map((item) => (
                <li key={item}>
                  <Link href={item === "Home" ? "/" : `/#${item.toLowerCase()}`} className="text-[13px] text-[#64748b] hover:text-[#f8fafc] transition-colors no-underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="text-sm font-bold text-[#f8fafc] mb-5">Expertise</h4>
            <ul className="list-none space-y-3">
              {["Blockchain & DeFi", "Payments & Cards", "Tokenization", "Stablecoins", "Financial Inclusion", "Regulatory Innovation"].map((item) => (
                <li key={item}>
                  <span className="text-[13px] text-[#64748b]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-bold text-[#f8fafc] mb-5">Let&apos;s Connect</h4>
            <div className="space-y-3">
              <p className="text-[13px] text-[#64748b] flex items-start gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8b5cf6] shrink-0 mt-0.5"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                Available for partnerships, advisory, speaking engagements, and board roles.
              </p>
              <p className="text-[13px] text-[#64748b] flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8b5cf6] shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                arrnaya@gmail.com
              </p>
              <p className="text-[13px] text-[#64748b] flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8b5cf6] shrink-0"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                Southeast Asia • Global
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1a1a2e] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#64748b]">© 2024 Arrnaya. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-[#64748b] hover:text-[#f8fafc] transition-colors no-underline">Privacy Policy</Link>
            <Link href="#" className="text-xs text-[#64748b] hover:text-[#f8fafc] transition-colors no-underline">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
