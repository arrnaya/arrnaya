"use client";

import Link from "next/link";

interface RelatedPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
}

export default function RelatedReading({ posts }: { posts: RelatedPost[] }) {
  return (
    <section className="border-t border-[var(--border)] pt-16">
      <div className="text-[10px] font-mono tracking-widest uppercase text-[var(--text-dim)] mb-8">
        Related Reading
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 hover:border-[var(--accent)] hover:-translate-y-1 transition-all no-underline"
          >
            <span className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-[var(--accent-glow)] text-[var(--accent)] w-fit mb-4">
              {post.category}
            </span>
            <h3 className="text-sm font-bold text-[var(--text)] mb-2 group-hover:text-[var(--accent)] transition-colors leading-snug">
              {post.title}
            </h3>
            <p className="text-[12px] text-[var(--text-dim)] leading-relaxed flex-1">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[var(--accent)] mt-4 pt-4 border-t border-[var(--border)]">
              Read article
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
