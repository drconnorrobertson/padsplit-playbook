export const topics = [
  { slug: "market-legality", label: "Market Legality", focus: "verify whether the exact address and intended occupancy model can operate under current local rules", evidence: "ordinances, zoning maps, permit records, occupancy classifications, enforcement history, and written professional guidance", risk: "a revenue model cannot repair an illegal or uninsurable use" },
  { slug: "property-fit", label: "Property Fit", focus: "test circulation, bathrooms, parking, privacy, egress, mechanical capacity, and credible alternate use", evidence: "plans, measurements, inspection findings, utility capacity, parking rules, and contractor observations", risk: "headline bedroom count can hide a layout that performs poorly for residents and operators" },
  { slug: "conversion-budget", label: "Conversion Budget", focus: "connect every scope item to a quantity, price, contingency, owner, and approval path", evidence: "trade bids, permit fees, material allowances, schedule assumptions, and a change-order log", risk: "small omitted scopes can combine into a material capital and timing miss" },
  { slug: "room-design", label: "Room Design", focus: "balance rentable space with safety, storage, acoustics, shared circulation, and resident dignity", evidence: "dimensioned layouts, furnishing plans, egress review, door and lock schedules, and resident-use scenarios", risk: "an extra room can reduce the quality and durability of the entire shared home" },
  { slug: "room-pricing", label: "Room Pricing", focus: "underwrite achievable room rates from current comparable supply rather than platform asking prices alone", evidence: "dated comparable rooms, concessions, time-on-market, included utilities, and neighborhood-level demand notes", risk: "a small pricing miss is multiplied across rooms and can distort the apparent advantage of co-living" },
  { slug: "utilities", label: "Utility Management", focus: "forecast, monitor, and govern owner-paid services without degrading the resident experience", evidence: "historical bills, rate schedules, equipment age, occupancy scenarios, internet requirements, and exception alerts", risk: "unbounded utilities can turn full occupancy into disappointing contribution margin" },
  { slug: "resident-operations", label: "Resident Operations", focus: "define communication, house standards, issue ownership, escalation, and respectful enforcement before move-in", evidence: "service standards, response logs, house rules, escalation paths, and anonymized recurring-issue categories", risk: "unclear operating expectations create friction that no underwriting spreadsheet captures" },
  { slug: "safety-compliance", label: "Safety and Compliance", focus: "treat life safety, inspections, documentation, and corrective action as recurring operating systems", evidence: "inspection records, detector and extinguisher logs, egress checks, vendor reports, and remediation dates", risk: "a passed inspection is a point-in-time result, not a permanent safety condition" },
  { slug: "maintenance", label: "Maintenance Systems", focus: "design preventive work, triage, vendor coverage, access, and closure verification for a higher-contact property", evidence: "asset registers, preventive schedules, work orders, vendor agreements, completion photos, and repeat-failure reports", risk: "room-by-room housing can increase the frequency and coordination cost of ordinary maintenance" },
  { slug: "fallback-use", label: "Fallback Use", focus: "compare the specialized plan with realistic long-term rental, resale, or other permitted alternatives", evidence: "conventional rent comps, resale data, reconversion scope, financing constraints, and time-to-stabilize assumptions", risk: "an investment becomes fragile when the only viable outcome depends on one operating model" },
] as const;

export const lenses = [
  { slug: "field-guide", label: "Field Guide", goal: "build a working understanding before committing capital" },
  { slug: "checklist", label: "Due-Diligence Checklist", goal: "turn a broad question into verifiable checks" },
  { slug: "mistakes", label: "Common Mistakes", goal: "spot assumptions that often survive until they become expensive" },
  { slug: "questions", label: "Questions to Ask", goal: "improve conversations with local professionals, vendors, lenders, and operators" },
  { slug: "example", label: "Worked Example", goal: "trace a hypothetical decision without pretending one case fits every property" },
  { slug: "scorecard", label: "Decision Scorecard", goal: "compare evidence consistently instead of relying on excitement" },
  { slug: "red-flags", label: "Red Flags", goal: "identify conditions that warrant a pause, specialist, or different plan" },
  { slug: "implementation", label: "Implementation Plan", goal: "translate analysis into owners, records, dates, and review points" },
  { slug: "advanced", label: "Advanced Considerations", goal: "connect second-order operating and financial effects" },
  { slug: "faq", label: "Practical FAQ", goal: "answer recurring questions that appear before a property decision" },
] as const;

export const insights = topics.flatMap((topic, topicIndex) => lenses.map((lens, lensIndex) => ({
  ...topic,
  lensSlug: lens.slug,
  lens: lens.label,
  goal: lens.goal,
  slug: `${topic.slug}-${lens.slug}`,
  number: topicIndex * lenses.length + lensIndex + 1,
})));

export type Insight = (typeof insights)[number];
export const getInsight = (slug: string) => insights.find((item) => item.slug === slug);
