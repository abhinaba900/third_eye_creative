import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,

  // next.config.js
  transpilePackages: ["gsap", "three", "ogl", "matter-js", "postprocessing"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [new URL("https://images.unsplash.com")],
  },
};

export default nextConfig;
