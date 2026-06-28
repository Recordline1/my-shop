import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: ['pb.portfoliothe.pics'],
  },
};

export default nextConfig;
