"use client";

import JsonLd from "./JsonLd";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection({
  items,
  headline,
}: {
  items: FaqItem[];
  headline?: string;
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <section className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 md:p-12">
        <div className="text-[10px] font-mono tracking-widest uppercase text-[var(--accent)] mb-6">
          Frequently Asked Questions
        </div>
        <h2 className="font-display text-xl md:text-2xl font-bold text-[var(--text)] mb-10">
          {headline || "Common Questions"}
        </h2>
        <div className="space-y-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="border-b border-[var(--border)] pb-8 last:border-0 last:pb-0"
            >
              <h3 className="text-base font-bold text-[var(--text)] mb-3 leading-snug">
                {item.question}
              </h3>
              <p className="text-[13px] md:text-sm text-[var(--text-muted)] leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
