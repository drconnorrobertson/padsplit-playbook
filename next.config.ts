import type { NextConfig } from "next";
import { utilityCanonicalSlug, utilityRedirectSlugs } from "./lib/utility-canonical";

import { maintenanceCanonicalSlug, maintenanceRedirectSlugs } from "./lib/maintenance-canonical";

const nextConfig: NextConfig = {
  async redirects() {
    return [...utilityRedirectSlugs.map((slug) => ({
      source: `/insights/${slug}`,
      destination: `/insights/${utilityCanonicalSlug}`,
      permanent: true,
    })), ...maintenanceRedirectSlugs.map((slug) => ({
      source: `/insights/${slug}`,
      destination: `/insights/${maintenanceCanonicalSlug}`,
      permanent: true,
    }))];
  },
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
