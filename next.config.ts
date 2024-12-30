import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: process.env.NODE_ENV === 'production',
};

export default nextConfig;
