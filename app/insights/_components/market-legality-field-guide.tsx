import Link from "next/link";
import example from "@/lib/market-legality-example.json";

export const marketTitle = "Co-Living Permission Review: Match the Address, Use and Approval Records";
export const marketDescription = "Review a fictional six-room proposal, distinguish zoning and occupancy records from platform interest, and build an evidence register for unresolved permissions.";
const anchorStyle = { scrollMarginTop: "120px" };

export default function MarketLegalityFieldGuide() {
  return <>
    <header className="page-hero insight-hero">
      <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/insights">Insights</Link> / Market legality</div>
      <p className="eyebrow">Market legality · Document review</p>
      <h1 className="display">Co-living permission.<br/><em>Address by address.</em></h1>
      <p className="lede">A city name, a map color and a platform invitation answer different questions. Review the actual address and proposed operation before treating a market as available.</p>
      <div className="insight-meta"><span>Published September 23, 2026</span><span>Updated November 21, 2026</span><span>PadSplit Playbook editorial guide</span></div>
    </header>
    <div className="article-layout insight-article-layout">
      <aside className="toc"><b>On this page</b><a href="#proposal">Describe the proposal</a><a href="#packet">Compare three records</a><a href="#documents">Distinguish document types</a><a href="#request">Write a useful request</a><a href="#decision">Record the next decision</a><a href="#register">Download the register</a></aside>
      <article className="prose insight-prose" style={{ minWidth: 0 }}>
        <p className="article-intro">The useful question is not whether co-living exists somewhere in a city. It is whether the proposed operation at this property is covered by the applicable rules, documents and agreements, and which unresolved conditions still prevent a reliable conclusion.</p>
        <p>This is a method for organizing a review, not a finding that any property or six-room arrangement is permitted. The packet below is entirely fictional. The municipal sources illustrate document boundaries in Pittsburgh; they do not establish rules for another jurisdiction or an approval for this example.</p>
        <h2 id="proposal" style={anchorStyle}>1. Describe the operation someone must classify</h2>
        <p>Start with an address and parcel identifier, then describe the existing and proposed arrangements separately. Record the number of intended residents and rooms, how spaces would be rented, owner or manager presence, shared kitchens and bathrooms, parking, services and any physical changes. Include intended length of stay and a plan showing the spaces under discussion.</p>
        <p>Use plain facts before choosing a legal label. “Six bedrooms,” “six occupants,” “six leases” and “six dwelling units” are not interchangeable descriptions. Ask the responsible local office or qualified local advisor how the complete proposal is classified. A listing category or the operator’s preferred terminology cannot settle that classification.</p>
        <p>Preserve the exact version sent for review. If a later plan adds rooms, changes access or introduces another service, reconnect it to the earlier response instead of assuming the old answer covers the change. Record both the proposal date and the date of the source relied on.</p>
        <h2 id="packet" style={anchorStyle}>2. Compare what the supplied records actually cover</h2>
        <p>In this invented packet, an owner proposes six separately rented rooms in an existing house. There is no real address, jurisdictional determination or approved plan. The owner has three records, but none is a substitute for resolving the proposed use. Three documents received is a file count, not a readiness percentage.</p>
        <div role="region" aria-label="Fictional permission review packet" tabIndex={0} style={{ overflowX: "auto" }}>
          <table><caption>Three fictional records with different scopes</caption><thead><tr><th scope="col">Record</th><th scope="col">What is on hand</th><th scope="col">What remains unresolved</th></tr></thead><tbody>
            {example.records.map(row => <tr key={row.id}><th scope="row">{row.record}</th><td>{row.scope}</td><td>{row.limit}</td></tr>)}
          </tbody></table>
        </div>
        <p>The map helps locate a district; it does not answer every rule that applies to a particular proposal. The prior occupancy record needs its full scope and associated plans. The platform email describes an opportunity to discuss participation. Neither the map nor the email turns the earlier occupancy document into an approval of the new arrangement.</p>
        <p>Keep the three open items separate. A useful response identifies the relevant proposal and explains what is covered, what further review is needed and what remains outside the responder’s authority. A reply about one concern should not silently close the other two.</p>
        <h2 id="documents" style={anchorStyle}>3. Distinguish a search, a certification and an approval</h2>
        <p>Pittsburgh’s <a href="https://www.pittsburghpa.gov/Business-Development/City-Planning/Zoning/Planning-Applications-and-Processes/Property-Certification">Property Certification explanation</a> says its certificate does not replace a certificate of occupancy or a record of zoning approval. That is a concrete example of why a document’s formal title and stated scope matter more than a broad description such as “the zoning paperwork.”</p>
        <p>The City’s <a href="https://www.pittsburghpa.gov/Business-Development/Permits-Licenses-and-Inspections/References-Resources-and-Forms/Online-Occupancy-Search">Online Occupancy Search guidance</a> explains that certificates reflect the applicable codes when issued. It also notes that some existing single-family homes may have no certificate because earlier rules did not require one, and directs people to the records office when a certificate cannot be found. An unsuccessful online search therefore calls for records follow-up, rather than an automatic conclusion about the property.</p>
        <p>For a property elsewhere, identify that jurisdiction’s own record types and responsible offices. Confirm what a document authorizes, the portion of the property it covers, any conditions, and whether the proposed operation differs. Preserve attachments and written qualifications. Do not export Pittsburgh’s process names or an older code edition into another market.</p>
        <h2 id="request" style={anchorStyle}>4. Ask a question the right decision-maker can answer</h2>
        <p>Send a consistent description of the actual proposal with the records you have. Ask which use classification applies, which zoning and building reviews are relevant, what additional material is required and which office determines the outstanding questions. Ask for the basis and scope of the response, not a one-word assurance that a business model is “fine.”</p>
        <p>A draft request for the fictional packet could read: “We are evaluating the attached room-rental proposal and have retained the map and prior occupancy document. Please identify the records and review path needed to determine whether this proposed use is covered. Please distinguish the current authorized use, proposed changes and matters requiring another office’s review.” Replace this broad draft with the facts and questions for the actual location.</p>
        <p>Track private and commercial constraints separately: recorded restrictions, association rules, lease terms where relevant, financing conditions, insurance scope and platform eligibility. Obtain answers from the responsible parties and local advisors. A municipal answer cannot be assumed to resolve every agreement, and an insurer or platform response does not grant government permission.</p>
        <h2 id="decision" style={anchorStyle}>5. Leave an unresolved gate visible</h2>
        <p>For this example, the supported output is a request list. The invented record packet does not establish that the six-room proposal can proceed. Do not promote “submitted,” “received” or “discussed” to “approved.” If an actual response is conditional, retain its conditions, responsible party and evidence needed for completion.</p>
        <p>Distinguish a records search, a professional opinion, an application, a decision and completed conditions. Record who issued each item and who can resolve an exception. A missing attachment or a response covering a different property should remain an open item even if the overall project schedule is under pressure.</p>
        <p>Use the result to inform the next commitment: continue the investigation, revise the proposal, seek the required review or reconsider the property. Set that decision with the appropriate local advisors and parties. A revenue forecast does not cure a permission gap, and a strong document file does not independently establish physical safety.</p>
        <h2 id="register" style={anchorStyle}>6. Carry the evidence into the next review</h2>
        <p><a href="/assets/fictional-market-permission-register.csv" download>Download the fictional permission evidence register (CSV)</a>. It contains the three example records, their scope limits, the next request, an accountable role and an unresolved status. Copy the format for your own review; replace the invented entries and retain the underlying records outside the register.</p>
        <p>Keep sensitive property and personal information in your own appropriate records system. This download is a static example, not an application, legal clearance or platform submission. Revisit the file when the proposal, rules or decision conditions change.</p>
        <p>Continue with the <Link href="/insights/property-fit-checklist">property-fit review</Link>, the <Link href="/insights/conversion-budget-field-guide">conversion budget</Link> and the <Link href="/blog/zoning-occupancy-laws-coliving-rentals">zoning and occupancy background guide</Link>. Those answer adjacent questions; none replaces an address-specific permission review.</p>
      </article>
    </div>
  </>;
}
