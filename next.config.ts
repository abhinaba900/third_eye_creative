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
    remotePatterns: [new URL("https://images.unsplash.com"), new URL("https://picsum.photos")],
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
