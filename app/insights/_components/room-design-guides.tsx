import Link from "next/link";

export const roomDesignPages = {
  "room-design-checklist": { title: "Room Design Checklist: Verify the Layout Before Furnishing", description: "Build a room-by-room record of measurements, furnishings, shared circulation and unresolved review items before ordering or installing furniture." },
  "room-design-mistakes": { title: "Room Design Mistakes: Resolve Conflicting Plans Before Installation", description: "Follow a fictional shared-home plan discrepancy from discovery to a documented revision, installation check and handoff without assuming a room is approved." },
} as const;
export type RoomDesignSlug = keyof typeof roomDesignPages;

const anchorStyle = { scrollMarginTop: "120px" };

function Checklist() {
  return <>
    <p className="article-intro">A furniture list is easier to price than a room is to verify. Before ordering, connect the actual room, the current plan and the proposed furnishings. The output should explain what was measured, which version was used and what still needs qualified review.</p>
    <p>This original checklist organizes a furnishing review. It is not a building inspection, an accessibility assessment, an occupancy determination or a source of universal room dimensions. Record questions for the relevant professional rather than using the checklist as approval.</p>
    <h2 id="records" style={anchorStyle}>Start with a versioned room file</h2>
    <p>Give each room a stable identifier that appears on the plan, inventory and photographs. Store the existing approved records available to you separately from a proposed furnishing sketch. Put the survey date, preparer, plan revision and measurement method on the working copy. A drawing downloaded from a listing should not silently become the current measured plan.</p>
    <p>List records that are missing or inconsistent. For example, if a plan shows a door where the site photograph shows a fixed opening, document the difference. Do not erase it by choosing whichever record makes the furniture arrangement easier.</p>
    <h2 id="room" style={anchorStyle}>Check the room against the actual furnishing proposal</h2>
    <ol>
      <li><strong>Measure what the decision depends on.</strong> Record the dimensions used to select furniture, including features that change the usable shape. Note who measured, when and any area that could not be checked. Identify observations separately from assumptions.</li>
      <li><strong>Use the actual product dimensions.</strong> Record the proposed bed, desk and storage dimensions and their source. Include the parts relevant to use, such as a drawer or door opening, instead of treating every item as a closed rectangle.</li>
      <li><strong>Draw normal use.</strong> Mark how a person enters, reaches storage, uses the desk and moves between the room and shared facilities. Keep questions about access, egress, accessibility and required clearances for the qualified review appropriate to the property.</li>
      <li><strong>Locate existing features.</strong> Show doors, windows, outlets, controls, heating/cooling equipment and other fixed features relevant to the layout. Record conflicts instead of assuming a service, door or piece of equipment can be moved.</li>
      <li><strong>Review delivery and assembly.</strong> Compare packaged and assembled dimensions with the delivery path and installation plan. Assign responsibility for checking the route and the sequence before the order is released.</li>
      <li><strong>Separate appearance from condition.</strong> Photograph existing finishes and visible concerns, and route maintenance or specialist questions to the appropriate reviewer. A new furnishing scheme does not resolve an underlying defect.</li>
    </ol>
    <h2 id="shared" style={anchorStyle}>Carry the check into the shared home</h2>
    <p>A room that looks workable in isolation may still conflict with the wider plan. Walk the intended ordinary route to shared kitchen, bathroom, storage and entry areas. Record pinch points, competing uses and questions needing design or building review. Do not create extra storage in a shared route simply because it was missing from the room inventory.</p>
    <p>Use the same version of the room schedule when ordering shared supplies and furnishings. Identify who maintains shared items and where replacement stock belongs. The <Link href="/guides/shared-kitchen-setup">shared-kitchen setup guide</Link> provides a separate operating checklist for that common area.</p>
    <h2 id="handoff" style={anchorStyle}>Hand off a clear decision record</h2>
    <div role="region" aria-label="Room furnishing review record" tabIndex={0} style={{ overflowX: "auto" }}><table><caption>Suggested room-file status fields</caption><thead><tr><th scope="col">Field</th><th scope="col">Example of what to record</th></tr></thead><tbody>
      <tr><th scope="row">Room and revision</th><td>Room identifier, drawing revision and inspection date</td></tr>
      <tr><th scope="row">Evidence</th><td>Measurement sheet, labeled photograph and product specification</td></tr>
      <tr><th scope="row">Open issue</th><td>Specific conflict, unanswered question or missing record</td></tr>
      <tr><th scope="row">Next action</th><td>Responsible reviewer, requested answer and due date</td></tr>
      <tr><th scope="row">Release record</th><td>What was reviewed, by whom, under which assumptions</td></tr>
      <tr><th scope="row">Installation check</th><td>Actual item, placement, variance and follow-up record</td></tr>
    </tbody></table></div>
    <p>Use “not checked,” “question open” and “documented response received” deliberately. A blank cell should not be interpreted as acceptance. Keep the response itself beside the status rather than leaving a reviewer’s name as the only evidence.</p>
    <p>Before handoff, reconcile the plan and order list one more time. After installation, compare the result with the reviewed version and record substitutions. If a change affects the assumptions used in a professional review, obtain the appropriate follow-up instead of transferring an earlier conclusion to a changed layout.</p>
    <p>For an example of this process going wrong, read <Link href="/insights/room-design-mistakes">how to resolve conflicting room plans</Link>. Keep the <Link href="/blog/zoning-occupancy-laws-coliving-rentals">zoning and occupancy file</Link> separate: a furnished room is not proof of an authorized sleeping unit.</p>
  </>;
}

function Mistakes() {
  return <>
    <p className="article-intro">Room-design mistakes often begin with two reasonable-looking documents that describe different rooms. A quote, an old plan and an installer’s sketch can each be internally consistent while disagreeing with the property. The correction is a traceable decision, not a cleaner rendering.</p>
    <p>The following scenario is invented. It demonstrates record control and handoff; it provides no code dimensions, construction instructions or finding that a room is lawful, accessible or safe.</p>
    <h2 id="records" style={anchorStyle}>The fictional discrepancy: three versions, no release record</h2>
    <p>An owner labels a room “R3.” Plan A shows the existing room. Sketch B adds a desk and changes the bed orientation. Order C substitutes a wider desk after the originally selected item becomes unavailable. The installer receives Plan A and Order C, while the owner reviews a photograph of Sketch B.</p>
    <p>No single file shows the actual proposed arrangement. An attractive picture of B does not establish that C fits A. The first useful entry in the issue log is specific: “R3 desk substitution has not been checked against the current room record.”</p>
    <h2 id="room" style={anchorStyle}>Mistake 1: solving a conflict by changing the evidence</h2>
    <p>Suppose the room’s recorded measurements and the older drawing disagree. Resizing furniture symbols on the drawing until they fit conceals the discrepancy. Keep both records, identify which dimensions affect the decision and assign a site verification. Record the method and date of the correction.</p>
    <p>Do not assume the oldest drawing is approved, the newest sketch is measured, or a photograph establishes dimensions. Label each source for what it actually proves. This also lets the next reviewer see why an earlier arrangement was rejected.</p>
    <h2 id="shared" style={anchorStyle}>Mistake 2: treating a product substitution as an administrative change</h2>
    <p>A substitute desk can change storage access, ordinary circulation, delivery or assembly. In this fictional case, the owner requests the manufacturer’s dimensions and updates the room sketch with the proposed item. Any questions affecting a qualified professional’s earlier conclusions are returned for the appropriate review.</p>
    <p>The purchase log should say whether the substitute is still proposed, reviewed or released. A supplier’s availability email is evidence that the item can be ordered; it is not evidence that the revised layout has been reviewed.</p>
    <h2 id="handoff" style={anchorStyle}>Mistake 3: repairing the plan without repairing the handoff</h2>
    <p>Assume a revised Plan D is prepared after the discrepancy is resolved. If the installer still uses A, the review has not reached the work. Identify the released version, withdraw superseded working copies from the active installation packet and tell each responsible person what changed. Retain older versions in the history so the decision can be reconstructed.</p>
    <div role="region" aria-label="Fictional room discrepancy log" tabIndex={0} style={{ overflowX: "auto" }}><table><caption>Fictional R3 discrepancy log</caption><thead><tr><th scope="col">Observation</th><th scope="col">Action</th><th scope="col">Closure evidence</th></tr></thead><tbody>
      <tr><th scope="row">A and B describe different arrangements</th><td>Reconcile the room and proposed layout</td><td>Dated record identifying the verified facts and remaining questions</td></tr>
      <tr><th scope="row">C substitutes a different desk</th><td>Review actual specifications against the revised layout</td><td>Product specification and documented response to affected questions</td></tr>
      <tr><th scope="row">Installer has an earlier packet</th><td>Issue a versioned release packet</td><td>Revision identifier and acknowledgement of the change</td></tr>
      <tr><th scope="row">Installation may differ from the packet</th><td>Compare actual placement and items with the released version</td><td>Labeled completion photos and an exceptions list</td></tr>
    </tbody></table></div>
    <p>This log does not certify the room. It shows the documentary steps needed to know whether the intended review and the delivered work refer to the same proposal.</p>
    <h2>What a useful completion check preserves</h2>
    <p>Keep the final room record, product specifications, applicable professional responses, release packet and installation observations together. Name unresolved exceptions and the person responsible for them. An invoice marked paid and a photograph of an assembled desk are not substitutes for the missing review.</p>
    <p>If the room changes again, start from that record rather than a remembered description. The purpose is to reduce repeated uncertainty: which room, which item, which revision and which conclusion?</p>
    <p>Use the <Link href="/insights/room-design-checklist">pre-furnishing room-design checklist</Link> to prevent the same omissions on the next room. Use the <Link href="/guides/maintenance-request-brief">maintenance-request brief</Link> when an installation check identifies an operational issue, and the <Link href="/operations">operations guide</Link> to assign follow-up responsibilities.</p>
  </>;
}

export default function RoomDesignGuide({ slug }: { slug: RoomDesignSlug }) {
  const page = roomDesignPages[slug];
  return <>
    <header className="page-hero insight-hero">
      <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/insights">Insights</Link> / Room design</div>
      <p className="eyebrow">Room design · {slug === "room-design-checklist" ? "Furnishing checklist" : "Worked discrepancy review"}</p>
      <h1 className="display">{page.title}</h1><p className="lede">{page.description}</p>
      <div className="insight-meta"><span>Published September 23, 2026</span><span>Updated November 21, 2026</span><span>PadSplit Playbook editorial guide</span></div>
    </header>
    <div className="article-layout insight-article-layout"><aside className="toc"><b>On this page</b><a href="#records">Records and versions</a><a href="#room">Room review</a><a href="#shared">Changes and shared use</a><a href="#handoff">Handoff and closure</a></aside><article className="prose insight-prose">{slug === "room-design-checklist" ? <Checklist /> : <Mistakes />}<p>PadSplit Playbook is independent of PadSplit, Inc. This is original educational material, not professional design, building, accessibility, legal or safety approval.</p></article></div>
  </>;
}
