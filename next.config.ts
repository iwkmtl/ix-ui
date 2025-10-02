import type { NextConfig } from "next";

const isMobileBuild = process.env.MOBILE_BUILD === 'true';

const nextConfig: NextConfig = {
  ...(isMobileBuild && {
    output: 'export',
    distDir: 'out',
  }),
  images: {
    unoptimized: true
  }
};

export default nextConfig;
