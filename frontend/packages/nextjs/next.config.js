// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  eslint: {
    ignoreDuringBuilds: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: ["skywalker.infura-ipfs.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "noun-api.com",
        port: "",
        pathname: "/beta/**",
      },
    ],
  },
};

module.exports = nextConfig;
