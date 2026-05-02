import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Arun Kumar Yadav — CTO • Blockchain Solutions Architect • Builder • Innovator | Blockchain & DeFi Leader",
  description:
    "CTO and Chief Business Officer building the future of finance with blockchain, DeFi, tokenization, and regulatory-aligned financial infrastructure across Southeast Asia.",
  keywords: [
    "Arrnaya",
    "Arun Kumar Yadav",
    "CTO",
    "Blockchain Solutions Architect",
    "Blockchain",
    "DeFi",
    "Web3",
    "Tokenization",
    "Stablecoins",
    "Crypto",
    "Financial Inclusion",
    "Layer-1",
    "MAALChain",
    "Fintech",
  ],
  authors: [{ name: "Arrnaya" }],
  creator: "Arrnaya",
  publisher: "Arrnaya",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.arrnaya.com/",
    siteName: "Arrnaya",
    title: "Arun Kumar Yadav — CTO • Blockchain Solutions Architect • Builder • Innovator | Blockchain & DeFi Leader",
    description:
      "Building the future of finance with Blockchain & DeFi. Real-world financial infrastructure that is scalable, compliant, and built for mass adoption.",
    images: [
      {
        url: "/new-bg.png",
        width: 1200,
        height: 630,
        alt: "Arun Kumar Yadav — CTO • Blockchain Solutions Architect • Builder • Innovator | Blockchain & DeFi Leader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arun Kumar Yadav — CTO • Blockchain Solutions Architect • Builder • Innovator | Blockchain & DeFi Leader",
    description:
      "Building the future of finance with Blockchain & DeFi. Real-world financial infrastructure that is scalable, compliant, and built for mass adoption.",
    images: ["/new-bg.png"],
    creator: "@arrnaya",
  },
  alternates: {
    canonical: "https://www.arrnaya.com/",
  },
  metadataBase: new URL("https://www.arrnaya.com/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
