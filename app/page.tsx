import Image from "next/image";
import Link from "next/link";

const principles = [
  ["01", "Demand before design", "Start with workforce demand, local rules, and the resident experience—not a bedroom-count target."],
  ["02", "Conservative underwriting", "Model vacancy, utilities, repairs, platform costs, turnover, and capex before celebrating gross revenue."],
  ["03", "Operations are the asset", "A shared home performs through clear standards, fast maintenance, thoughtful communication, and consistent inspection."],
];
const steps = [
  ["01", "Market", "Map employers, transit, room-rate alternatives, supply, and local housing rules."],
  ["02", "Property", "Screen layout, parking, life safety, utilities, renovation scope, and exit options."],
  ["03", "Model", "Underwrite per-room income against all-in operating cost and realistic stabilization."],
  ["04", "Make ready", "Build for durability, privacy, safety, efficient turns, and a dignified resident experience."],
  ["05", "Operate", "Manage the house as a hospitality-informed housing business—not passive rent collection."],
];
const articles = [
  ["Field guide", "What is PadSplit? A practical guide for property owners", "Understand how the marketplace fits into a room-rental operating model—and what remains the host’s responsibility.", "/padsplit-guide"],
  ["Underwriting", "The numbers that matter in a co-living pro forma", "A disciplined view of occupancy, utilities, maintenance, turns, reserves, and downside cases.", "/underwriting"],
  ["Operations", "Why the house rules are part of your product", "Shared housing depends on clarity. Turn expectations into repeatable systems before move-in.", "/operations"],
];
const diligence = [
  ["01", "Clear the address, not the concept", "Rules can turn on unrelated occupants, rooming-house definitions, parking, bedroom count, rental term, and life-safety systems. Platform eligibility is not local approval.", "Get address-specific zoning, building, fire, rental, insurance, lender, deed, and HOA answers before design money is committed."],
  ["02", "Define the resident before the room", "Employment access, transit, affordability, privacy, furnished needs, and lease flexibility shape demand more than a theoretical bedroom count.", "Interview local operators, map realistic commutes, and compare the complete monthly cost with credible housing alternatives."],
  ["03", "Design for daily coexistence", "Bathrooms, refrigerators, storage, laundry, sound control, parking, entries, and common-space circulation determine whether a full house remains a good home.", "Walk the plan as if every room is occupied and every resident keeps a different work schedule."],
  ["04", "Price collected revenue", "Maximum rooms multiplied by asking rent ignores vacancy, collection loss, concessions, platform charges, and the time required to stabilize a new property.", "Model monthly economic occupancy and actual collections under conservative, expected, and failure cases."],
  ["05", "Capture the operating load", "Utilities, internet, furniture, consumables, cleaning, turns, pest control, lawn care, maintenance, inspections, and resident coordination are not incidental costs.", "Build a cost per occupied room, a separate capital reserve, and a labor assumption for work that currently looks free."],
  ["06", "Engineer safety and privacy", "Egress, alarms, locks, electrical load, lighting, cameras, visitor policies, and emergency response must protect residents without making the home feel institutional.", "Use qualified local professionals to verify code, insurance, security, and accessibility requirements."],
  ["07", "Operate standards consistently", "Clear expectations, responsive maintenance, fair enforcement, documented communication, and respectful conflict handling protect retention and community stability.", "Write house standards that are specific, lawful, consistently applied, and understandable before move-in."],
  ["08", "Preserve the fallback", "Rules, platform terms, neighborhood conditions, and room demand can change. A fragile conversion may destroy the property’s conventional rental or resale value.", "Underwrite alternate use, reconfiguration cost, and exit liquidity before acquisition—not after the model disappoints."],
];
const questions = [
  ["Is shared housing legally a rooming house?", "The definition varies by jurisdiction and sometimes by occupancy, services, term, or building form. Use the local code and an address-specific determination rather than a label used by a platform or another city."],
  ["How many bedrooms create the strongest return?", "The economic answer depends on legal occupancy, bathroom ratio, common space, parking, utilities, incremental renovation cost, achievable room rent, and the resident experience. More rooms can reduce value when the whole system becomes less livable."],
  ["Which expense is easiest to underestimate?", "Management intensity and turnover work are frequently understated because the model creates more individual tenancies, communications, inspections, payment events, and move cycles than a conventional lease."],
  ["Should every suitable layout be converted?", "No. Weak transit, poor parking, difficult access, restrictive rules, expensive life-safety work, utility constraints, or an unattractive fallback can overwhelm higher gross revenue."],
  ["How should utilities be modeled?", "Use realistic occupancy-driven consumption, seasonal peaks, internet, common-area use, deposits, potential abuse, and a rate-increase buffer. Compare invoices from similar properties instead of relying on a conventional-rental average."],
  ["What protects long-term performance?", "Compliant design, durable local demand, prompt maintenance, fair resident operations, clean records, a reliable vendor network, and a property that still works if the platform or room-rental thesis changes."],
];

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">A Dr. Connor Robertson research project</p>
          <h1 className="display">The field guide to <em>co-living</em> that works.</h1>
          <p>Research, underwriting principles, and operating systems for property owners exploring the PadSplit model—built around resilient housing, clear-eyed analysis, and respect for the people who call it home.</p>
          <div className="hero-actions"><Link className="button" href="/padsplit-guide">Explore the model <span>↗</span></Link><Link className="text-link" href="/about">About Dr. Robertson</Link></div>
        </div>
        <aside className="hero-card"><p className="eyebrow">Core thesis</p><div className="number">01</div><h2>A room is revenue.<br/>A home is a system.</h2><div className="rule"/><p>The best shared-housing operators balance property economics with safety, dignity, compliance, and a consistent resident experience.</p></aside>
      </div>
      <div className="ticker"><span>Market selection</span><span>Property screening</span><span>Room-level underwriting</span><span>Compliance</span><span>Resident experience</span><span>Operating cadence</span></div>
    </section>
    <section className="stats" aria-label="Playbook scope">
      <div className="stat"><strong>5</strong><span>operating stages</span></div><div className="stat"><strong>3×</strong><span>underwriting scenarios</span></div><div className="stat"><strong>1</strong><span>resident-first standard</span></div><div className="stat"><strong>0</strong><span>promised returns</span></div>
    </section>
    <section className="section">
      <div className="intro-grid"><div><p className="eyebrow">The operating thesis</p><h2 className="section-title">More doors do not make a better deal.</h2></div><div><p className="big-copy">Co-living can turn underused square footage into attainable housing. But the model only holds when the property, municipality, economics, and operating team all agree.</p><p className="body-copy">This playbook separates the platform from the property business. PadSplit may provide discovery, screening infrastructure, payments, and host tools; owners still have to select responsibly, comply locally, prepare the asset, and operate the home well.</p></div></div>
      <div className="principles">{principles.map(([n,t,d])=><div className="principle" key={n}><div className="icon">{n}</div><h3>{t}</h3><p>{d}</p></div>)}</div>
    </section>
    <section className="section dark">
      <div className="framework-head"><div><p className="eyebrow">The five-part framework</p><h2 className="section-title">From zip code<br/>to operating cadence.</h2></div><p className="body-copy">Each stage earns the right to move to the next. A deal that fails the market, compliance, or downside test should not be rescued by optimistic revenue.</p></div>
      <div className="steps">{steps.map(([n,t,d])=><div className="step" key={n}><span className="n">{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div>
    </section>
    <section className="section"><p className="eyebrow">The working library</p><div className="framework-head"><h2 className="section-title">Start with the questions<br/>that can change the answer.</h2><p className="body-copy">Built for property owners, operators, and advisors who want a sober introduction—not a sales pitch.</p></div><div className="articles">{articles.map(([tag,title,desc,href])=><Link className="article-card" href={href} key={title}><span className="tag">{tag}</span><h3>{title}</h3><p>{desc}</p><span className="read">Read the briefing →</span></Link>)}</div></section>
    <section className="section diligence-section" id="diligence">
      <div className="intro-grid"><div><p className="eyebrow">Address-level diligence</p><h2 className="section-title">Eight decisions that earn the right to convert.</h2></div><div><p className="big-copy">Underwrite the house, the rules, and the resident experience as one operating system.</p><p className="body-copy">A room-by-room pro forma is only useful after the exact address, physical plan, demand pattern, service model, and fallback use survive independent review. Keep evidence beside every assumption so a partner, lender, insurer, contractor, or advisor can follow the decision.</p></div></div>
      <div className="diligence-grid">{diligence.map(([n,title,body,action])=><article className="diligence-card" key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p><strong>Operator checkpoint</strong><p>{action}</p></article>)}</div>
    </section>
    <section className="section question-section">
      <div className="framework-head"><div><p className="eyebrow">Questions before capital</p><h2 className="section-title">Resolve the hard parts in writing.</h2></div><p className="body-copy">Use these prompts to turn a promising property into a documented go, pause, or no-go decision. Educational material does not replace current local, legal, tax, insurance, lending, or construction advice.</p></div>
      <div className="question-grid">{questions.map(([question,answer])=><article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div>
      <div className="review-rhythm"><h3>A practical review rhythm</h3><p><strong>Diagnose.</strong> Record the address, proposed occupancy, governing rules, current layout, verified demand, and source for every number without trying to rescue the deal.</p><p><strong>Design.</strong> Compare the proposed conversion with a lighter renovation and a conventional-rental fallback. Assign the cost, responsibility, and deadline for every open diligence item.</p><p><strong>Operate.</strong> Set owners for leasing, maintenance, inspections, safety, resident communication, collections, turns, and vendor coverage. Define the leading indicators that will trigger a change before service or cash deteriorates.</p></div>
    </section>
    <section className="entity-path"><div><p className="eyebrow">Continue with the right entity</p><h2 className="section-title">Keep the research path clear.</h2><p>PadSplit is the housing marketplace discussed in this independent research project. BNB Accelerator is the related acquisition and operating education company; AE Tax Advisors publishes separate tax guides; Dr. Connor Robertson’s library connects the wider ownership curriculum.</p></div><div className="entity-links"><a href="https://www.bnbaccelerator.com/"><strong>BNB Accelerator</strong><span>Acquisition and operating education →</span></a><a href="https://www.therealestatetaxbook.com/"><strong>Real Estate Tax Playbook</strong><span>Tax topics for rental owners →</span></a><a href="https://www.drconnorrobertsonbooks.com/"><strong>Author library</strong><span>Ownership, acquisitions, and operations →</span></a></div></section>
    <section className="profile"><div className="profile-image"><Image src="https://miro.medium.com/v2/resize%3Afit%3A1024/1%2A3DXk-jy9iTCWal88FD9NVA%402x.jpeg" alt="Dr. Connor Robertson, entrepreneur and real estate educator" fill sizes="(max-width: 900px) 100vw, 50vw"/></div><div className="profile-copy"><p className="eyebrow">The editor</p><p className="quote">“Real estate should solve a real problem. The spreadsheet matters—but so does the person living inside it.”</p><p className="body-copy">Dr. Connor Robertson is an entrepreneur, real estate operator, and educator focused on the systems that turn complex assets into durable businesses. The PadSplit Playbook applies that operator’s lens to workforce co-living.</p><p className="signature">Connor Robertson</p><Link className="text-link" href="/about">Read the full profile →</Link></div></section>
    <section className="cta-band"><h2 className="section-title">Know the model.<br/>Pressure-test the property.</h2><Link href="/padsplit-guide" className="button">Open the field guide <span>↗</span></Link></section>
  </>;
}
