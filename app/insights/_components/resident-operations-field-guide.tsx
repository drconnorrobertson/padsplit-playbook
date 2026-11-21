import Link from "next/link";
import example from "@/lib/resident-operations-example.json";

export const residentTitle = "Resident Operations: Own the Issue, Update the Resident, Verify Closure";
export const residentDescription = "Work through nine fictional reports and six underlying issues. Separate acknowledgment from resolution, keep update promises visible and download the six-issue handoff CSV.";
const anchorStyle = { scrollMarginTop: "120px" };

export default function ResidentOperationsFieldGuide() {
  return <>
    <header className="page-hero insight-hero">
      <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/insights">Insights</Link> / Resident operations</div>
      <p className="eyebrow">Resident operations · Worked field guide</p>
      <h1 className="display">Own the issue.<br/><em>Keep the next promise.</em></h1>
      <p className="lede">A prompt reply is useful, but it does not mean an issue has been resolved. Give each underlying issue an owner, a next update and a closure check that another person can understand.</p>
      <div className="insight-meta"><span>Published September 23, 2026</span><span>Updated November 21, 2026</span><span>PadSplit Playbook editorial guide</span></div>
    </header>
    <div className="article-layout insight-article-layout">
      <aside className="toc"><b>On this page</b><a href="#intake">Identify the issue</a><a href="#example">Read the handoff</a><a href="#measurement">Measure the right event</a><a href="#updates">Keep update promises</a><a href="#privacy">Protect private requests</a><a href="#closure">Verify closure</a></aside>
      <article className="prose insight-prose" style={{ minWidth: 0 }}>
        <p className="article-intro">The person reporting a shared-home problem needs to know who is handling it and what happens next. A busy message channel can look responsive while the underlying issue remains unowned. Build the operating record around the issue, then attach the messages that help explain it.</p>
        <p>All reports, times, roles and outcomes below are fictional. The example is a routine communication exercise, not actual resident data, a PadSplit service standard or a promised response time. Emergency or immediate safety concerns need the established emergency route and emergency services when appropriate; the routine queue below is not an emergency-response procedure.</p>
        <h2 id="intake" style={anchorStyle}>1. Link repeat reports without losing their context</h2>
        <p>Capture the first report time, the concern in the reporter&apos;s words, the location needed to investigate, an accountable owner and the next action. Keep observations separate from conclusions. A report that a shared service is unavailable does not yet establish its cause, and a complaint about conduct does not by itself establish misconduct.</p>
        <p>In this invented day, nine incoming reports arrive between 09:00 and 09:40. Six introduce separate issues. Two additional reports at 09:14 and 09:18 concern the same internet interruption, and one at 09:28 concerns the already reported refrigerator drawer. The nine reports therefore map to six underlying issues. Operator replies are excluded from this incoming-report count.</p>
        <p>Link those extra reports to R03 and R04 while retaining their timestamps and any new observations. Do not create three additional jobs just to match the message count, or delete a report because it concerns a known issue. A later report may change the understood scope or priority even when it belongs to the same case.</p>
        <h2 id="example" style={anchorStyle}>2. Make the noon handoff explicit</h2>
        <p>All times use the same clock on one fictional operating day. The owner is a role, not a resident&apos;s name. At 12:00, two issues have confirmed answers, one reported restock awaits verification, and three other issues remain open. The next action describes a commitment that can be checked.</p>
        <div role="region" aria-label="Fictional resident-operations noon handoff" tabIndex={0} style={{ overflowX: "auto" }}>
          <table><caption>Six underlying issues at the fictional 12:00 snapshot</caption><thead><tr><th scope="col">Issue</th><th scope="col">First report → acknowledgment</th><th scope="col">Accountable role</th><th scope="col">State</th><th scope="col">Next action or closure record</th></tr></thead><tbody>
            {example.issues.map((issue) => <tr key={issue.id}><th scope="row">{issue.id}: {issue.topic}</th><td>{issue.received} → {issue.acknowledged}</td><td>{issue.owner}</td><td>{issue.state}</td><td>{issue.nextAction}{issue.verifiedAt ? ` (${issue.verifiedAt})` : ""}</td></tr>)}
          </tbody></table>
        </div>
        <p>The supply coordinator has reported the R01 restock complete at 11:30, but the quantity has not yet been checked. R04 is assigned; no completed visit is claimed. R06 needs clarification; that does not remove the house coordinator&apos;s responsibility to follow up. Keep the original issue owner accountable for the next update when work is handed to another role or vendor.</p>
        <h2 id="measurement" style={anchorStyle}>3. Measure acknowledgment and closure separately</h2>
        <p>For this exercise only, the operator chose a routine acknowledgment target of 20 minutes. The six acknowledgment intervals are 12, 20, 3, 30, 30 and 15 minutes. Four of six issues meet that invented target, including the one acknowledged at exactly 20 minutes: 4 ÷ 6 = 66.7%. All six were acknowledged by noon; that is a different measure.</p>
        <p>The total acknowledgment time is 110 minutes, giving a mean of 110 ÷ 6 = 18.3 minutes. That mean sits below the target while two individual cases took 30 minutes. Review the individual misses rather than describing the average as proof that every issue met the target. Count the six first reports once each; using all nine incoming reports as the denominator would measure a different event.</p>
        <p>Only R02 and R05 are verified closed at noon: 2 ÷ 6 = 33.3%. Counting the unverified R01 restock as closed would make the apparent rate 3 ÷ 6 = 50%. Neither an acknowledgment nor a vendor assignment is closure. The longest-open issue is R01, first reported three hours before the snapshot; its quick initial reply does not erase that elapsed time.</p>
        <h2 id="updates" style={anchorStyle}>4. Promise an update you can deliver</h2>
        <p>An acknowledgment should identify the issue, the responsible role, the immediate next action and when an update will arrive. It can say that a cause or completion time is still unknown. An invented example for R03 is: “We have linked your report to the internet interruption. The service coordinator is contacting the provider. We will update you by 10:00, even if there is no confirmed restoration time.”</p>
        <p>In this example, that update arrives at 10:20: it is 20 minutes late. The first acknowledgment took only three minutes, but the later communication promise was missed. Record both events. Explain the current position, set the next update at 12:30 and assign a backup if the responsible role will be unavailable. Do not reset the original report time when a new person takes over.</p>
        <p>Send shared-service updates to the affected audience using the approved channel. Keep individual circumstances out of the shared message. If the scope changes, update the record and the audience rather than quietly treating an earlier reply as a complete response.</p>
        <h2 id="privacy" style={anchorStyle}>5. Keep private requests out of the shared log</h2>
        <p>The <a href="https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business">FTC&apos;s business information-security guide</a> recommends limiting collected information and access to what is needed. Apply that principle by keeping the shared operational summary brief and placing sensitive supporting material in an appropriately restricted record. A general house update does not need personal financial, health or identity details.</p>
        <p>Accommodation concerns need their appropriate housing process, rather than a vote in a house chat or a routine issue score. The <a href="https://www.justice.gov/crt/us-department-housing-and-urban-development">HUD/DOJ joint statement on reasonable accommodations</a> is primary background for that separate process. Use qualified advice for the actual request, applicable requirements and privacy handling; this invented queue does not determine anyone&apos;s rights or eligibility.</p>
        <h2 id="closure" style={anchorStyle}>6. Close the issue with a reproducible check</h2>
        <ol><li>State what was answered or completed and link the relevant record.</li><li>Record how and when the result was checked; keep reported completion distinct from verification.</li><li>Tell the affected person what changed and how to report a continuing problem.</li><li>If the same problem persists, reopen the existing issue with the new observation and preserve the prior chronology.</li><li>At handoff, name the owner and next update for every issue still open.</li></ol>
        <p>A missing resident reply alone is not proof that a problem was resolved. Record an alternative check where appropriate and keep uncertainty visible. Review recurring categories using suitably limited, anonymized information so the team can improve the process without turning private resident circumstances into public examples.</p>
        <p><a href="/assets/fictional-resident-operations-handoff.csv" download>Download the fictional six-issue handoff CSV</a>. It contains the noon snapshot, first report and acknowledgment times, responsible roles, states and next actions. It is not a complete message archive, an emergency procedure or a file of real resident information.</p>
        <p>For a physical job, the <Link href="/insights/maintenance-field-guide">maintenance work-order guide</Link> follows assignment through completion checks. The <Link href="/insights/room-design-checklist">room-design checklist</Link> helps document the underlying space, while the <Link href="/insights/utilities-field-guide">utility guide</Link> separates service usage from a billing assumption.</p>
        <p>PadSplit Playbook is independent of PadSplit, Inc. This educational workflow does not establish platform policy, legal compliance or actual operating results.</p>
      </article>
    </div>
  </>;
}
