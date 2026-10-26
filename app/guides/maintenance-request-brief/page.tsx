import type { Metadata } from "next";
import Link from "next/link";
import guide from "@/lib/maintenance-request-guide.json";

const route = "/guides/maintenance-request-brief";
const url = `https://www.padsplitplaybookbook.com${route}`;
const date = "2026-10-26";
export const metadata: Metadata = {
  title: guide.title,
  description: guide.description,
  alternates: { canonical: route },
  openGraph: { type: "article", title: guide.title, description: guide.description, url, publishedTime: date, modifiedTime: date },
  twitter: { card: "summary", title: guide.title, description: guide.description },
};
const schemas = [{
  "@context": "https://schema.org", "@type": "Article",
  headline: guide.title, description: guide.description,
  datePublished: date, dateModified: date, mainEntityOfPage: url,
  wordCount: guide.wordCount,
  author: { "@type": "Organization", name: "PadSplit Playbook website editorial" },
  publisher: { "@type": "Organization", name: "PadSplit Playbook", url: "https://www.padsplitplaybookbook.com" },
}, {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: guide.faqs.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
}];
export default function MaintenanceRequestGuide() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replace(/</g, "\\u003c") }} />
    <header className="page-hero">
      <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/operations">Operations</Link> / Maintenance request</div>
      <p className="eyebrow">Independent practical guide · October 26, 2026</p>
      <h1 className="display">{guide.title}</h1>
    </header>
    <div className="article-layout">
      <aside className="toc"><b>Use this guide</b><a href="#editorial-body">Reporting and fictional example</a><a href="#sources">Sources</a><a href="#next-steps">Related work</a></aside>
      <article className="prose">
        <p>AI-assisted website editorial content with a fictional communication example and checked primary-source references. No named professional review, repair assessment or client outcome is asserted.</p>
        <div id="editorial-body">{guide.blocks.map((block, index) => block.type === "h2" ? <h2 key={index}>{block.text}</h2> : block.type === "h3" ? <h3 key={index}>{block.text}</h3> : <p key={index}>{block.text}</p>)}</div>
        <section id="sources"><h2>Primary sources and scope</h2><p>Sources checked October 26, 2026. The request method and example are independent editorial guidance.</p><ul>{guide.sources.map(source => <li key={source.url}><a href={source.url}>{source.label}</a></li>)}</ul></section>
        <section id="next-steps"><h2>Practical next steps</h2><p><a href="/assets/longform-batch13/maintenance-request.csv" download>Download the fictional maintenance-request worksheet (CSV)</a>. This contains invented information, no real resident records or entry credentials, and is not a reporting channel.</p><ul>{guide.related.map(item => <li key={item.url}><a href={item.url}>{item.label}</a></li>)}</ul></section>
      </article>
    </div>
  </>;
}
