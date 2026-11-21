import Link from "next/link";
import example from "@/lib/property-fit-example.json";

export const propertyFitTitle = "Property Fit: Check the Layout Before Counting Co-Living Rooms";
export const propertyFitDescription = "Trace six fictional proposed spaces, separate measured observations from missing approvals, and test why leftover floor area does not prove a workable room. Download the review CSV.";
const anchorStyle = { scrollMarginTop: "120px" };

export default function PropertyFitFieldGuide() {
  return <>
    <header className="page-hero insight-hero">
      <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/insights">Insights</Link> / Property fit</div>
      <p className="eyebrow">Property fit · Worked field guide</p>
      <h1 className="display">Test the property.<br/><em>Trace each proposed room.</em></h1>
      <p className="lede">A marketing room count, a measured layout and permission for the intended use are different records. Reconcile them before relying on an income model or ordering a conversion.</p>
      <div className="insight-meta"><span>Published September 23, 2026</span><span>Updated November 21, 2026</span><span>PadSplit Playbook editorial guide</span></div>
    </header>
    <div className="article-layout insight-article-layout">
      <aside className="toc"><b>On this page</b><a href="#proposal">Identify the proposal</a><a href="#spaces">Trace the spaces</a><a href="#area">Test floor-area arithmetic</a><a href="#systems">Review the whole property</a><a href="#records">Match the right records</a><a href="#decision">Keep the decision open</a></aside>
      <article className="prose insight-prose" style={{ minWidth: 0 }}>
        <p className="article-intro">The useful output of a property-fit review is a documented arrangement with unresolved questions still visible. An attractive number of proposed rooms can hide a blocked route, displaced common function or unsupported change of use. Follow each proposed space back to the plan and the evidence behind it.</p>
        <p>Every space, observation, measurement and role below is fictional. None is an approved room, a code minimum, an inspection result or an actual property recommendation. The example does not establish an occupancy limit, a permitted housing use or eligibility to operate through a platform.</p>
        <h2 id="proposal" style={anchorStyle}>1. Give the proposal an identity</h2>
        <p>Record the exact property, intended operating model, proposed layout version, current use and source of the claimed room count. Preserve the original listing or proposal rather than replacing it with a revised count without explanation. Label existing conditions separately from proposed alterations.</p>
        <p>For the invented revision 2 sketch, the file contains six candidate spaces labeled A through F. That is an inventory of things to examine, not six rentable rooms. One is currently common space. The review tracks both an observation and the action needed before anyone can rely on it.</p>
        <p>Keep the underlying drawing at a stated scale where possible. Give measurements a date, unit and reference point. Show doors, windows, level changes, fixed equipment and the routes people actually use. An unlabeled rectangle cannot explain which opening is blocked when furniture moves.</p>
        <h2 id="spaces" style={anchorStyle}>2. Trace all six spaces through the evidence</h2>
        <p>Two rows have a matched observation: the measurement in A and the existing common function in F. Four rows retain a conflict or missing review. Those statuses describe this limited file; they do not make A or F approved, and they are not a property-readiness percentage.</p>
        <p>On narrow screens, scroll the table horizontally to read every column.</p>
        <div role="region" aria-label="Fictional six-space property-fit review" tabIndex={0} style={{ overflowX: "auto" }}>
          <table><caption>Fictional revision 2: candidate spaces are not approved rooms</caption><thead><tr><th scope="col">Candidate</th><th scope="col">Available observation or record</th><th scope="col">Current status</th><th scope="col">Accountable role and next action</th></tr></thead><tbody>
            {example.spaces.map((space) => <tr key={space.id}><th scope="row">{space.id}: {space.label}</th><td>{space.record}</td><td>{space.status}</td><td>{space.owner}: {space.nextAction}</td></tr>)}
          </tbody></table>
        </div>
        <p>B needs a revised layout and another physical test. C needs source records before the enclosure&apos;s history can be reconciled. D needs the actual circulation arrangement reviewed rather than an assumed alternative route. E needs a system review matched to the proposed use. F still serves a shared function; counting it as a rentable room would change the proposal that was examined.</p>
        <h2 id="area" style={anchorStyle}>3. Understand what the floor-area subtraction leaves out</h2>
        <p>Candidate A is modeled here as a simple 12-foot by 11-foot interior rectangle: 12 × 11 = 132 square feet. Three invented furniture footprints are listed below. They omit clearance around the objects and the operating space needed for doors, drawers, a chair and access.</p>
        <div role="region" aria-label="Fictional floor-area arithmetic" tabIndex={0} style={{ overflowX: "auto" }}>
          <table><caption>Footprints alone do not establish a usable arrangement</caption><thead><tr><th scope="col">Item</th><th scope="col">Illustrative footprint</th><th scope="col">Area</th></tr></thead><tbody>
            <tr><th scope="row">Interior rectangle</th><td>12 ft × 11 ft</td><td>132 sq ft</td></tr>
            <tr><th scope="row">Bed</th><td>3 ft × 6.5 ft</td><td>19.5 sq ft</td></tr>
            <tr><th scope="row">Wardrobe</th><td>2 ft × 3 ft</td><td>6 sq ft</td></tr>
            <tr><th scope="row">Desk</th><td>2 ft × 4 ft</td><td>8 sq ft</td></tr>
            <tr><th scope="row">Furniture subtotal</th><td>19.5 + 6 + 8</td><td>33.5 sq ft</td></tr>
            <tr><th scope="row">Arithmetic remainder</th><td>132 − 33.5</td><td>98.5 sq ft</td></tr>
          </tbody></table>
        </div>
        <p>The 98.5-square-foot remainder is not a verified clear route or a legal room-area measurement. It is only the difference between the simplified rectangle and three footprints. Two arrangements can have the same subtotal while one places the wardrobe in a doorway. Moving an object changes the route without changing its area.</p>
        <p>Test the furnished arrangement on a measured plan and, where appropriate, in the actual space. Open the doors and drawers, locate the chair in use and trace the relevant circulation. Have the appropriate professional address the applicable requirements. No clearance dimension, acceptable exit arrangement or room-size threshold is supplied by this illustration.</p>
        <h2 id="systems" style={anchorStyle}>4. Review the property beyond the candidate rooms</h2>
        <p>Map the shared functions that the proposal depends on: bathrooms, kitchen use, storage, laundry, circulation, service access and waste handling. Identify what is displaced when a common area is relabeled. A private-space count should not quietly assume that every existing shared function disappears without an alternative.</p>
        <p>Match the intended use to the systems and outside constraints that need review. Record the relevant electrical and mechanical information, plumbing observations, parking assumptions, maintenance access and professional findings. A contractor&apos;s observation about one component does not resolve every system or the overall use. Mark the missing scope rather than treating silence as a favorable result.</p>
        <p>For an alternate-use plan, preserve which changes would be retained, reversed or newly required. A proposed wall removal or reconversion still needs a defined scope, qualified review where relevant and a cost basis. The existence of a sketch does not establish that the fallback can be delivered.</p>
        <h2 id="records" style={anchorStyle}>5. Ask each record to answer its own question</h2>
        <p><a href="https://www.hud.gov/sites/dfiles/OCHCO/documents/92564-CN.pdf">HUD&apos;s home-inspection notice</a> explains that an appraisal estimates value for the lender and does not replace a home inspection. Use that distinction when assembling the file: a valuation is not a substitute for the condition investigation. Ask the inspector about the scope and limits of the actual inspection.</p>
        <p>The <a href="https://www.iccsafe.org/international-code-adoptions/">International Code Council&apos;s adoption resource</a> directs readers to confirm the applicable editions, effective dates and local amendments with the authority having jurisdiction. Identify the actual jurisdiction and project-specific requirements. A model-code reference or an example from another city does not establish permission for this proposal.</p>
        <p>Keep the relevant plan history, permits, inspection material and written responses tied to the address and layout version they cover. Where the intended use requires a separate determination, keep that question open until the appropriate evidence is obtained. A measured drawing, condition report and use determination should not be treated as interchangeable approvals.</p>
        <h2 id="decision" style={anchorStyle}>6. Make unresolved items change the decision</h2>
        <ol><li>Retain the original claim and give every candidate space a stable label.</li><li>Match the measured plan to the proposed furnishings and shared functions.</li><li>Assign every material conflict or missing record to an owner and review date.</li><li>Revise the proposal when a layout or use assumption changes; preserve the prior version.</li><li>Update the financial model only with clearly labeled assumptions, keeping unconfirmed use and capacity visible.</li></ol>
        <p><a href="/assets/fictional-property-fit-review.csv" download>Download the fictional six-space review CSV</a>. It contains the observations, statuses, accountable roles and open actions from the table. It contains no actual address or approval and does not turn the six candidates into an authorized room count.</p>
        <p>The <Link href="/insights/room-design-checklist">room-design checklist</Link> develops the furnishing review. The <Link href="/insights/conversion-budget-field-guide">conversion-budget guide</Link> separates proposed scope from committed cost, and the <Link href="/underwriting">underwriting guide</Link> explains the broader property model. Keep the physical and permission questions connected to those assumptions.</p>
        <p>PadSplit Playbook is independent of PadSplit, Inc. This is an educational review method, not a property inspection, professional approval, platform policy or promised investment result.</p>
      </article>
    </div>
  </>;
}
