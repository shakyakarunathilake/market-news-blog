import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static2.finnhub.io",
        pathname: "/file/publicdatany/finnhubimage/**",
      },
      {
        protocol: "https",
        hostname: "image.cnbcfm.com",
        pathname: "/api/v1/image/**",
      },
      {
        protocol: "https",
        hostname: "data.bloomberglp.com",
        pathname: "/company/sites/**",
      },
    ],
  },
};

export default nextConfig;
