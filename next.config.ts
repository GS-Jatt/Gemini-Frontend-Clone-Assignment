import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  experimental: {},
  images: {
    domains: ["restcountries.com"],
  },
};

export default nextConfig;
