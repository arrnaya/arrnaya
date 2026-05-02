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
    <section className="border-t border-[#1a1a2e] pt-16">
      <div className="text-[10px] font-mono tracking-widest uppercase text-[#64748b] mb-8">
        Related Reading
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col bg-[#0a0a12] border border-[#1a1a2e] rounded-xl p-6 hover:border-[#252542] hover:-translate-y-1 transition-all no-underline"
          >
            <span className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-[rgba(124,58,237,0.1)] text-[#8b5cf6] border border-[rgba(124,58,237,0.2)] w-fit mb-4">
              {post.category}
            </span>
            <h3 className="text-sm font-bold text-[#f8fafc] mb-2 group-hover:text-[#a855f7] transition-colors leading-snug">
              {post.title}
            </h3>
            <p className="text-[12px] text-[#64748b] leading-relaxed flex-1">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#8b5cf6] mt-4 pt-4 border-t border-[#1a1a2e]">
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
