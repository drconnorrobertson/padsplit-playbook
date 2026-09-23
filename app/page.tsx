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
    <section className="profile"><div className="profile-image"><Image src="https://miro.medium.com/v2/resize%3Afit%3A1024/1%2A3DXk-jy9iTCWal88FD9NVA%402x.jpeg" alt="Dr. Connor Robertson, entrepreneur and real estate educator" fill sizes="(max-width: 900px) 100vw, 50vw"/></div><div className="profile-copy"><p className="eyebrow">The editor</p><p className="quote">“Real estate should solve a real problem. The spreadsheet matters—but so does the person living inside it.”</p><p className="body-copy">Dr. Connor Robertson is an entrepreneur, real estate operator, and educator focused on the systems that turn complex assets into durable businesses. The PadSplit Playbook applies that operator’s lens to workforce co-living.</p><p className="signature">Connor Robertson</p><Link className="text-link" href="/about">Read the full profile →</Link></div></section>
    <section className="cta-band"><h2 className="section-title">Know the model.<br/>Pressure-test the property.</h2><Link href="/padsplit-guide" className="button">Open the field guide <span>↗</span></Link></section>
  </>;
}
