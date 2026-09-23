import type { Metadata } from "next";
import Link from "next/link";
import { insights, topics } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Co-Living Learning Library",
  description: "Explore 100 evidence-led guides to PadSplit property selection, underwriting, conversion, compliance, resident operations, and fallback planning.",
  alternates: { canonical: "/insights" },
};

export default function Insights() {
  return <>
    <header className="page-hero">
      <div className="breadcrumb"><Link href="/">Home</Link> / Insights</div>
      <p className="eyebrow">100 guides · 10 topic clusters</p>
      <h1 className="display">The co-living <em>decision</em> library.</h1>
      <p className="lede">Evidence-led field notes for testing the address, conversion, economics, safety, resident experience, and fallback plan before capital is committed.</p>
    </header>
    <section className="section insight-library">
      {topics.map((topic) => <section className="insight-cluster" id={topic.slug} key={topic.slug}>
        <div className="cluster-heading"><p className="eyebrow">Topic cluster</p><h2 className="section-title">{topic.label}</h2><p>{topic.focus}.</p></div>
        <div className="insight-grid">{insights.filter((item) => item.slug.startsWith(`${topic.slug}-`)).map((item) =>
          <Link className="insight-card" href={`/insights/${item.slug}`} key={item.slug}>
            <span>{String(item.number).padStart(3, "0")} · {item.lens}</span><h3>{item.label}: {item.lens}</h3><p>{item.goal}.</p><b>Open the guide →</b>
          </Link>)}</div>
      </section>)}
    </section>
  </>;
}
