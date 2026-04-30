import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "umoqtoxwtyyuqwftdssx.supabase.co",
      },
    ],
  },
};

export default nextConfig;
