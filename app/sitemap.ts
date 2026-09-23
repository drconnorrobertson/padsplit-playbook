import type { MetadataRoute } from "next";

const legacyRoutes = [
  "/blog", "/chapters", "/contact", "/resources", "/author",
  "/blog/what-is-padsplit", "/blog/room-by-room-rental-math",
  "/blog/convert-single-family-to-padsplit", "/blog/affordable-housing-co-living-solution",
  "/blog/padsplit-vs-traditional-rental", "/blog/section-8-padsplit-workforce-housing",
  "/blog/scaling-padsplit-portfolio", "/blog/padsplit-room-pricing-strategy",
  "/blog/financing-padsplit-property", "/blog/reducing-padsplit-vacancy",
  "/blog/padsplit-utilities-management", "/blog/padsplit-market-neighborhood-selection",
  "/blog/padsplit-member-management", "/blog/padsplit-property-insurance",
  "/blog/padsplit-tax-strategy-depreciation", "/blog/padsplit-maintenance-systems",
  "/blog/zoning-occupancy-laws-coliving-rentals",
  "/blog/padsplit-member-screening-approval-process", "/blog/furnishing-padsplit-rooms",
];

export default function sitemap():MetadataRoute.Sitemap {
  const base = "https://padsplitplaybookbook.com";
  const routes = ["", "/padsplit-guide", "/underwriting", "/operations", "/insights", "/about", ...legacyRoutes];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/blog/") ? 0.75 : 0.85,
  }));
}
