import type { Metadata } from "next";
import Link from "next/link";
import guide from "@/lib/shared-kitchen-guide.json";

const route = "/guides/shared-kitchen-setup";
const url = `https://www.padsplitplaybookbook.com${route}`;
export const metadata: Metadata = {
  title: guide.title,
  description: guide.description,
  alternates: { canonical: route },
  openGraph: { type: "article", title: guide.title, description: guide.description, url, publishedTime: "2026-10-25", modifiedTime: "2026-10-25" },
  twitter: { card: "summary", title: guide.title, description: guide.description },
};
const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: guide.title,
  description: guide.description,
  datePublished: "2026-10-25",
  dateModified: "2026-10-25",
  mainEntityOfPage: url,
  wordCount: guide.wordCount,
  publisher: { "@type": "Organization", name: "PadSplit Playbook", url: "https://www.padsplitplaybookbook.com" },
};
export default function SharedKitchenGuide() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <header className="page-hero">
      <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/operations">Operations</Link> / Shared kitchen</div>
      <p className="eyebrow">Independent practical guide · October 25, 2026</p>
      <h1 className="display">{guide.title}</h1>
    </header>
    <div className="article-layout">
      <aside className="toc"><b>Use this guide</b><a href="#editorial-body">Setup and worked example</a><a href="#sources">Sources</a><a href="#next-steps">Related work</a></aside>
      <article className="prose">
        <div id="editorial-body">{guide.blocks.map((block, index) => block.type === "h2" ? <h2 key={index}>{block.text}</h2> : block.type === "h3" ? <h3 key={index}>{block.text}</h3> : <p key={index}>{block.text}</p>)}</div>
        <section id="sources"><h2>Primary sources and scope</h2><p>Sources checked October 25, 2026. The setup method and fictional example are independent editorial guidance.</p><ul>{guide.sources.map(source => <li key={source.url}><a href={source.url}>{source.label}</a></li>)}</ul></section>
        <section id="next-steps"><h2>Practical next steps</h2><p><a href="/assets/longform-batch06/shared-kitchen.csv">Download the fictional kitchen planning worksheet (CSV)</a></p><ul>{guide.related.map(item => <li key={item.url}><a href={item.url}>{item.label}</a></li>)}</ul></section>
      </article>
    </div>
  </>;
}
