import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: "/Users/arrnaya/Documents/GitHub/BCarbon-base44/arrnaya",
  },
};

export default nextConfig;
