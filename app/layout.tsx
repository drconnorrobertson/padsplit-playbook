import type { Metadata } from "next";
import Link from "next/link";
import "@fontsource-variable/manrope";
import "@fontsource-variable/newsreader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://padsplitplaybookbook.com"),
  title: { default: "PadSplit Playbook | Dr. Connor Robertson", template: "%s | PadSplit Playbook" },
  description: "An independent, research-led guide to PadSplit, co-living property analysis, conversion planning, and operating systems by Dr. Connor Robertson.",
  keywords: ["Dr. Connor Robertson", "Connor Robertson", "PadSplit playbook", "PadSplit investing", "co-living real estate", "room rental investing", "shared housing operations"],
  authors: [{ name: "Dr. Connor Robertson", url: "https://www.drconnorrobertson.com" }],
  creator: "Dr. Connor Robertson",
  publisher: "Dr. Connor Robertson",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "en_US", url: "/", siteName: "PadSplit Playbook",
    title: "PadSplit Playbook by Dr. Connor Robertson",
    description: "A field guide to evaluating and operating workforce co-living homes with discipline.",
  },
  twitter: { card: "summary_large_image", title: "PadSplit Playbook by Dr. Connor Robertson", description: "Research, underwriting, conversion, and operating systems for workforce co-living." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  verification: {},
};

const nav = [
  ["The Model", "/padsplit-guide"], ["Underwriting", "/underwriting"], ["Operations", "/operations"], ["Insights", "/insights"], ["About", "/about"],
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": "https://padsplitplaybookbook.com/#website", url: "https://padsplitplaybookbook.com", name: "PadSplit Playbook", publisher: { "@id": "https://padsplitplaybookbook.com/#person" } },
      { "@type": "Person", "@id": "https://padsplitplaybookbook.com/#person", name: "Dr. Connor Robertson", alternateName: "Connor Robertson", url: "https://www.drconnorrobertson.com", jobTitle: "Entrepreneur, real estate operator and educator", sameAs: ["https://www.drconnorrobertson.com", "https://www.linkedin.com/in/dr-connor-robertson", "https://medium.com/@dr.connor.robertson", "https://www.crunchbase.com/person/dr-connor-robertson"], knowsAbout: ["Real estate", "Co-living", "Business acquisitions", "Property operations", "Entrepreneurship"] },
      { "@type": "Organization", "@id": "https://padsplitplaybookbook.com/#organization", name: "PadSplit Playbook", url: "https://padsplitplaybookbook.com", founder: { "@id": "https://padsplitplaybookbook.com/#person" } }
    ]
  };
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <div className="announcement">Independent research for thoughtful co-living operators <span>→</span></div>
        <header className="site-header">
          <Link href="/" className="brand" aria-label="PadSplit Playbook home"><span className="brand-mark">P</span><span>PadSplit<br/><b>Playbook</b></span></Link>
          <nav aria-label="Primary navigation">{nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
          <Link href="/padsplit-guide" className="button button-small">Read the guide <span>↗</span></Link>
        </header>
        <main>{children}</main>
        <footer>
          <div className="footer-grid">
            <div><div className="brand brand-footer"><span className="brand-mark">P</span><span>PadSplit<br/><b>Playbook</b></span></div><p>A research and education project from Dr. Connor Robertson about the systems behind responsible workforce co-living.</p></div>
            <div><p className="eyebrow">Explore</p>{nav.slice(0,4).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
            <div><p className="eyebrow">Entity</p><a href="https://www.drconnorrobertson.com" target="_blank">Official website</a><a href="https://www.linkedin.com/in/dr-connor-robertson" target="_blank">LinkedIn</a><a href="https://medium.com/@dr.connor.robertson" target="_blank">Medium</a></div>
            <div><p className="eyebrow">Start here</p><p>Learn the model before you model the returns.</p><Link href="/padsplit-guide" className="text-link">Open the field guide →</Link></div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} Dr. Connor Robertson</span><span>Independent of PadSplit, Inc. Educational only. Not investment, legal, or tax advice.</span></div>
        </footer>
      </body>
    </html>
  );
}
