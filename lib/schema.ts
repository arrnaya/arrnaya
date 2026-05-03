const BASE_URL = "https://www.arrnaya.com";
const OG_IMAGE = `${BASE_URL}/new-bg.png`;

export function blogPostingSchema(params: {
  headline: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  keywords: string[];
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: params.headline,
    description: params.description,
    url: `${BASE_URL}/blog/${params.slug}`,
    datePublished: params.datePublished,
    dateModified: params.dateModified || params.datePublished,
    author: {
      "@type": "Person",
      name: "Arrnaya",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Arrnaya",
      logo: {
        "@type": "ImageObject",
        url: OG_IMAGE,
        width: 1200,
        height: 630,
      },
    },
    image: {
      "@type": "ImageObject",
      url: params.image || OG_IMAGE,
      width: 1200,
      height: 630,
    },
    keywords: params.keywords.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${params.slug}`,
    },
    articleSection: "Blockchain & Finance",
    inLanguage: "en-US",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Arrnaya",
    url: BASE_URL,
    description:
      "CTO and Chief Business Officer building the future of finance with blockchain, DeFi, tokenization, and regulatory-aligned financial infrastructure.",
    publisher: {
      "@type": "Organization",
      name: "Arrnaya",
      logo: {
        "@type": "ImageObject",
        url: OG_IMAGE,
        width: 1200,
        height: 630,
      },
    },
    inLanguage: "en-US",
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Arrnaya",
    url: BASE_URL,
    jobTitle: "CTO & Chief Business Officer",
    worksFor: {
      "@type": "Organization",
      name: "Arrnaya",
    },
    knowsAbout: [
      "Blockchain Infrastructure",
      "DeFi Protocol Design",
      "Stablecoin Architecture",
      "Real-World Asset Tokenization",
      "CBDC Policy",
      "AI in Finance",
      "Regulatory Strategy",
      "Financial Inclusion",
      "Tokenomics Engineering",
      "Mechanism Design",
      "Game Theory in Crypto",
    ],
    sameAs: [
      "https://github.com/arrnaya",
      "https://linkedin.com/in/arrnaya",
      "https://x.com/arrnaya",
    ],
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
