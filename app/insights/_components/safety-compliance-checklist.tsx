import Link from "next/link";
import example from "@/lib/safety-review-example.json";

export const safetyTitle = "Co-Living Safety Records: Alarms, Escape Plans and Follow-Up";
export const safetyDescription = "Use primary fire-safety guidance and three fictional record gaps to organize alarm checks, escape-plan reviews, vendor evidence and accountable follow-up.";
const anchorStyle = { scrollMarginTop: "120px" };

export default function SafetyComplianceChecklist() {
  return <>
    <header className="page-hero insight-hero">
      <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/insights">Insights</Link> / Safety records</div>
      <p className="eyebrow">Safety and compliance · Evidence checklist</p>
      <h1 className="display">Co-living safety records.<br/><em>Keep the gaps visible.</em></h1>
      <p className="lede">Connect the device, location, report, responsible person and verification result. A completed task label cannot establish the condition of an entire shared home.</p>
      <div className="insight-meta"><span>Published September 23, 2026</span><span>Updated November 21, 2026</span><span>PadSplit Playbook editorial guide</span></div>
    </header>
    <div className="article-layout insight-article-layout">
      <aside className="toc"><b>On this page</b><a href="#emergency">Emergency response first</a><a href="#inventory">Match devices and instructions</a><a href="#packet">Review three record gaps</a><a href="#closure">Check the completion evidence</a><a href="#residents">Keep the plan usable</a><a href="#register">Download the register</a></aside>
      <article className="prose insight-prose" style={{ minWidth: 0 }}>
        <p className="article-intro">An operating file should help the next responsible person find the exact open issue and the evidence needed to address it. Keep a missing record, a reported defect and a verified result distinguishable. None of the fictional examples below establishes that a property is safe or compliant.</p>
        <h2 id="emergency" style={anchorStyle}>1. Keep emergency response ahead of administration</h2>
        <p>An active alarm, smoke or fire is not an ordinary work-order queue. For a fire, get out and stay out and call 911 from outside; <a href="https://www.usfa.fema.gov/prevention/home-fires/prepare-for-fire/fire-extinguishers/">USFA guidance prioritizes leaving and calling for help when a fire is beyond safe extinguisher use</a>. If you cannot escape, the <a href="https://www.usfa.fema.gov/prevention/fief/index.html">U.S. Fire Administration advises getting behind a closed door and calling 911</a>. Tell responders where you are. Do not wait for a manager or vendor to acknowledge a message before seeking emergency help.</p>
        <p>If a carbon monoxide alarm sounds, <a href="https://www.cpsc.gov/safety-education/safety-guides/carbon-monoxide/carbon-monoxide-fact-sheet">CPSC guidance</a> says to move outside to fresh air, call emergency services or 911, account for everyone and stay out until emergency responders permit reentry. Do not try to locate the CO source yourself. The record-review method below is for follow-up; it does not replace emergency instructions.</p>
        <h2 id="inventory" style={anchorStyle}>2. Match each device to the applicable instructions</h2>
        <p>Give each alarm a location and a stable identifier. Retain its model, manufacture date where available, power arrangement, manufacturer instructions, required service information and the person responsible for checking it. Keep smoke and CO functions identifiable, including when one product combines them.</p>
        <p>The <a href="https://www.usfa.fema.gov/prevention/home-fires/prepare-for-fire/smoke-alarms/">USFA home smoke-alarm guidance</a> recommends monthly testing and explains the importance of replacement age, measured from manufacture. It also directs readers to manufacturer instructions and the local fire marshal about alarm requirements. Build the actual schedule around the installed product and applicable local requirements; this general guide does not determine the alarm system required for a particular occupancy.</p>
        <p>Record what a test actually establishes. CPSC explains that a CO alarm’s test button checks circuitry, not sensor accuracy, and directs consumers to the manufacturer’s instructions. A photograph of a device or a tick beside its name cannot fill in an undocumented test method, result or replacement decision.</p>
        <p>Ask the appropriate qualified professional and local authority to identify the reviews relevant to the actual use and building. Retain the scope and conditions of inspections. Do not assume that a general home checklist covers every shared-housing arrangement, installed system or required inspection.</p>
        <h2 id="packet" style={anchorStyle}>3. Keep three different record gaps separate</h2>
        <p>This entire packet is fictional. It describes incomplete documentation, not observations from a real house. A current hazard reported during a review still needs the appropriate immediate response; calling something a records gap does not make a reported defect safe to ignore.</p>
        <div role="region" aria-label="Fictional safety follow-up record packet" tabIndex={0} style={{ overflowX: "auto" }}>
          <table><caption>Three fictional issues; no property safety determination</caption><thead><tr><th scope="col">Record</th><th scope="col">Evidence supplied</th><th scope="col">Open question</th></tr></thead><tbody>
            {example.records.map(row => <tr key={row.id}><th scope="row">{row.record}</th><td>{row.available}</td><td>{row.gap}</td></tr>)}
          </tbody></table>
        </div>
        <p>For S1, the inventory helps identify devices but the dated results remain outstanding. For S2, resolve which plan represents the current arrangement and what review or changes are needed. For S3, connect the invoice to the actual reported issue and appropriate verification. One receipt cannot close all three questions.</p>
        <p>Keep the original report, later revisions and response together. If the location, device identifier or plan revision differs, retain the mismatch and assign the next request. Do not delete the disagreement to make a dashboard look complete.</p>
        <h2 id="closure" style={anchorStyle}>4. Check the outcome before closing the record</h2>
        <p>Separate assignment, work claimed complete and evidence reviewed. Each step needs an accountable person, date and stated scope. Record the item worked on, what was done, who performed the work, the relevant result and any remaining limitations. Use qualified people for the work and verification the issue requires.</p>
        <p>An invoice establishes a billing or completion claim within its stated scope. Obtain the relevant work report and verification rather than inferring a successful outcome from payment alone. A completion photo may help locate work while leaving its function, coverage or inspection status unresolved.</p>
        <p>Retain inspection conditions and any required follow-up by the issuing authority. A past inspection describes its scope and date; it is not an assurance about every future condition. If the same issue recurs, reopen the review and preserve the earlier history instead of silently treating the new report as already resolved.</p>
        <p>In this fictional register, the states are Evidence outstanding, Scope conflict and Completion claimed. None is a closed finding. The number of rows completed elsewhere should not become a property-readiness score or permission to rely on an open life-safety item.</p>
        <h2 id="residents" style={anchorStyle}>5. Keep escape information matched to the home</h2>
        <p><a href="https://www.usfa.fema.gov/prevention/home-fires/prepare-for-fire/home-fire-escape-plans/index.html">USFA escape-plan guidance</a> calls for identifying two ways out of each room, keeping doors and windows unblocked, choosing an outside meeting place and practicing with everyone in the home. Use the appropriate local review to address the actual building and residents’ needs.</p>
        <p>Connect the plan version to the arrangement being used. Review changes to rooms, access, furnishings or resident needs with the appropriate people. Make sure residents can find and understand the current emergency information and know how to report a concern. A document filed in an owner’s inbox is not evidence that everyone has received or understood it.</p>
        <p>Maintain a clear handoff when management or vendors change. Give the incoming responsible person the open items, device register, relevant instructions, current plan and contact routes. Identify who will obtain each outstanding record and when the next update is due. Keep emergency contact information separate from routine maintenance response targets.</p>
        <h2 id="register" style={anchorStyle}>6. Carry the open items into the next review</h2>
        <p><a href="/assets/fictional-safety-follow-up-register.csv" download>Download the fictional safety follow-up register (CSV)</a>. Its three entries retain the available evidence, missing scope, next action, accountable role and current state. Replace the examples with the records for your own review and keep the underlying evidence with the relevant item.</p>
        <p>This static register neither tests equipment nor issues an inspection result. It provides a way to keep unresolved work visible. Do not enter private resident or health information in a broadly shared task file; retain only the information needed by the appropriate people.</p>
        <p>Continue with <Link href="/insights/maintenance-field-guide">maintenance planning</Link>, <Link href="/insights/resident-operations-field-guide">resident communication and handoffs</Link> and the <Link href="/insights/market-legality-field-guide">address-specific permission review</Link>. Each has a separate scope; no financial forecast, platform listing or completed spreadsheet establishes the physical condition of a home.</p>
      </article>
    </div>
  </>;
}
