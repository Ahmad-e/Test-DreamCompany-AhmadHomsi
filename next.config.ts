import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'code.pixelstrap.net',
      },
    ],
  },
};

export default nextConfig;
