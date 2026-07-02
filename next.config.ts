import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
   remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pb.portfoliothe.pics',
      },
    ],
  },
};

export default nextConfig;
