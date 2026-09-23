import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getInsight, insights } from "@/lib/insights";

const base = "https://padsplit-playbook.vercel.app";
export const dynamicParams = false;
export function generateStaticParams() { return insights.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getInsight(slug);
  if (!item) return {};
  const description = `${item.lens} for ${item.label.toLowerCase()}: evidence, risks, questions, downside tests, and implementation steps for co-living operators.`;
  return { title: `${item.label}: ${item.lens}`, description, alternates: { canonical: `/insights/${item.slug}` }, openGraph: { type: "article", title: `${item.label}: ${item.lens}`, description, url: `/insights/${item.slug}` } };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getInsight(slug);
  if (!item) notFound();
  const related = [insights[item.number % 100], insights[(item.number + 9) % 100], insights[(item.number + 36) % 100], insights[(item.number + 72) % 100]];
  const questions = [
    `What fact would cause us to change the current conclusion about ${item.label.toLowerCase()}?`,
    "Which source is primary, who prepared it, and how current is it?",
    "Who owns implementation, and what capacity does that person actually have?",
    "How does the conclusion change under a slower, costlier, or less favorable case?",
    "What should be preserved so the reasoning remains understandable six months later?",
  ];
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", headline: `${item.label}: ${item.lens}`, datePublished: "2026-09-23", dateModified: "2026-09-23", mainEntityOfPage: `${base}/insights/${item.slug}`, author: { "@type": "Person", name: "Dr. Connor Robertson", url: "https://www.drconnorrobertson.com" }, publisher: { "@type": "Organization", name: "PadSplit Playbook", url: base }, about: item.label },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: base }, { "@type": "ListItem", position: 2, name: "Insights", item: `${base}/insights` }, { "@type": "ListItem", position: 3, name: `${item.label}: ${item.lens}`, item: `${base}/insights/${item.slug}` }] },
    { "@type": "FAQPage", mainEntity: questions.slice(0, 3).map((question) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: "Use current source records, identify the decision owner, document the downside case, and consult a qualified local professional where the answer is fact-specific." } })) },
  ] };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replaceAll("<", "\\u003c") }} />
    <header className="page-hero insight-hero">
      <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/insights">Insights</Link> / {item.label}</div>
      <p className="eyebrow">Guide {String(item.number).padStart(3, "0")} · {item.lens}</p>
      <h1 className="display">{item.label}: <em>{item.lens}</em></h1>
      <p className="lede">A practical decision brief to {item.goal}.</p>
      <div className="insight-meta"><span>Reviewed September 23, 2026</span><span>By Dr. Connor Robertson</span><span>8 minute read</span></div>
    </header>
    <div className="article-layout insight-article-layout">
      <aside className="toc"><b>On this page</b><a href="#frame">Frame the decision</a><a href="#evidence">Build the file</a><a href="#economics">Test the downside</a><a href="#implementation">Implement and review</a><Link href="/insights">All 100 guides</Link></aside>
      <article className="prose insight-prose">
        <p className="article-intro">A promising room-by-room opportunity can still be the wrong property when {item.label.toLowerCase()} is supported only by an optimistic assumption. Treat the first answer as a hypothesis, identify the source, and decide what would disprove it.</p>
        <p>The central discipline is to {item.focus}. This guide is for property owners and operators evaluating workforce co-living. It organizes better diligence; it does not replace current local legal, lending, insurance, construction, tax, or safety advice.</p>
        <div className="decision-strip"><div><b>Decision</b><span>Define what this topic must prove before the property proceeds.</span></div><div><b>Evidence</b><span>{item.evidence}.</span></div><div><b>Primary risk</b><span>{item.risk}.</span></div></div>
        <h2 id="frame">Frame the decision before collecting answers</h2>
        <p>Write the decision in one sentence. State the current belief, the action that belief would support, and the deadline for deciding. This keeps research from expanding without a stopping rule and exposes whether the team is answering a property question or merely gathering interesting information.</p>
        <p>Separate facts, estimates, and preferences. Facts should point to source material. Estimates need an owner, method, and range. Preferences—such as target timing, operating distance, or acceptable complexity—should be named because they can influence the conclusion as much as the pro forma.</p>
        <h2 id="evidence">Build an evidence file another person can audit</h2>
        <p>A reliable file lets a partner, lender, insurer, contractor, local advisor, or future operator reproduce the reasoning without relying on memory. For {item.label.toLowerCase()}, begin with {item.evidence}. Record the source date, the exact address or operating entity covered, and any exclusions.</p>
        <p>Do not treat a polished summary as stronger than its underlying record. If two sources disagree, preserve the difference and assign a verification step. The inconsistency may be the most important finding in the review.</p>
        <blockquote>{item.risk.charAt(0).toUpperCase() + item.risk.slice(1)}. Price the uncertainty where possible; pause when the missing answer could invalidate the use.</blockquote>
        <h2 id="economics">Connect the conclusion to economics and operations</h2>
        <p>The answer should change something tangible: acquisition price, conversion scope, reserves, schedule, staffing, house standards, or the willingness to proceed. Model a base case and at least one less favorable case. A useful downside case is specific enough to assign a cost or operating response and simple enough that decision makers can see why the outcome changed.</p>
        <p>For example, test what happens if the relevant benefit arrives later, costs 10 percent more, or requires another approval cycle. Ten percent is not a universal safety margin. The exercise reveals whether a modest miss creates a manageable adjustment or breaks the plan.</p>
        <h3>Five questions for the working session</h3><ol>{questions.map((question) => <li key={question}>{question}</li>)}</ol>
        <h2 id="implementation">Turn the decision into an operating record</h2>
        <p>Give every follow-up one accountable owner, one deliverable, and one date. Store source material with the task rather than in an archive operators may never see. Add a post-implementation review so the team can compare the original assumption with the actual result.</p>
        <p>The feedback loop turns {item.label.toLowerCase()} work into an operating asset. Actual outcomes improve future estimates, reveal which sources are dependable, and show where the team repeatedly underestimates effort. Without the review, even a good decision produces little institutional learning.</p>
        <div className="callout"><h3>Completion standard</h3><p>Preserve the one-sentence decision, material evidence, unresolved issues, base and downside cases, specialist conclusions, final approval, implementation owners, and next review date.</p></div>
        <p><strong>Important:</strong> PadSplit Playbook is independent of PadSplit, Inc. This page is educational and is not investment, legal, tax, lending, insurance, construction, or safety advice.</p>
        <section className="related-insights"><p className="eyebrow">Continue the library</p><h2>Related decision guides</h2><div className="insight-grid">{related.map((guide) => <Link className="insight-card" href={`/insights/${guide.slug}`} key={guide.slug}><span>{guide.lens}</span><h3>{guide.label}: {guide.lens}</h3><b>Open the guide →</b></Link>)}</div></section>
      </article>
    </div>
  </>;
}
