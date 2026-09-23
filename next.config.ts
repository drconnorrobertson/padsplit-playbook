import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "miro.medium.com", pathname: "/**" },
    ],
  },
  async rewrites() {
    return [
      { source: "/blog", destination: "/blog/index.html" },
      { source: "/blog/:slug", destination: "/blog/:slug/index.html" },
      { source: "/chapters", destination: "/chapters/index.html" },
      { source: "/contact", destination: "/contact/index.html" },
      { source: "/resources", destination: "/resources/index.html" },
      { source: "/author", destination: "/author/index.html" },
    ];
  },
};

export default nextConfig;
