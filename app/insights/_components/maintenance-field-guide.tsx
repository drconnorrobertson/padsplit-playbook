import Link from "next/link";

export const maintenanceTitle = "Maintenance Systems: Track Work Orders Through Verified Closure";
export const maintenanceDescription = "Reconcile maintenance reports, distinct jobs, contractor completion and verified closure with a fictional eight-job example and an auditable follow-up record.";
const anchorStyle = { scrollMarginTop: "120px" };

export default function MaintenanceFieldGuide() {
  return <>
    <header className="page-hero insight-hero">
      <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/insights">Insights</Link> / Maintenance systems</div>
      <p className="eyebrow">Maintenance systems · Worked field guide</p>
      <h1 className="display">Track the issue.<br/><em>Verify the closure.</em></h1>
      <p className="lede">A resident report, a contractor visit and a verified resolution are different events. Keep them connected without counting them as three completed jobs.</p>
      <div className="insight-meta"><span>Published September 23, 2026</span><span>Updated November 21, 2026</span><span>PadSplit Playbook editorial guide</span></div>
    </header>
    <div className="article-layout insight-article-layout">
      <aside className="toc"><b>On this page</b><a href="#reports">Identify the job</a><a href="#states">Reconcile the states</a><a href="#reopened">Track reopened work</a><a href="#scope">Control scope and cost</a><a href="#review">Review the record</a></aside>
      <article className="prose insight-prose">
        <p className="article-intro">A maintenance system should explain what was reported, who owns the next action and what evidence supports closure. A low invoice total or a full calendar of vendor visits cannot answer those questions by itself.</p>
        <p>The reports, job counts and prices below are fictional. They are not actual property results, required response times, repair instructions or PadSplit platform policies. This guide concerns operating records. Use the appropriate emergency channel for urgent danger and qualified professionals for diagnosis and work; a routine tracking queue is not an emergency response.</p>
        <h2 id="reports" style={anchorStyle}>1. Give the underlying issue a stable reference</h2>
        <p>Record a job ID, property and location, reported symptom, report time, contact channel and responsible operator. Describe what was observed without turning a resident&apos;s description into a technical diagnosis. Keep resident identities, access credentials and private photographs in the authorized system rather than a public spreadsheet.</p>
        <p>Suppose eleven messages concern eight distinct maintenance jobs. Three messages are additional reports about issues already in the queue. Link them to the relevant job without deleting their timestamps or communication obligations. Eleven reports do not mean eleven separate repair scopes, and linking duplicates does not mean an issue has been resolved.</p>
        <p>Keep scheduled preventive work identifiable too. A planned service task and an unplanned failure may involve the same asset but different scopes. Use the equipment documentation and qualified provider&apos;s guidance to establish the service plan; this example supplies no universal inspection interval.</p>
        <h2 id="states" style={anchorStyle}>2. Reconcile the eight-job cohort</h2>
        <p>Use one mutually exclusive current state per job, supported by an event history. In this illustration, a contractor reports completing work on six of the eight jobs. The operator has verified five; the sixth awaits the agreed verification step. Two jobs remain assigned and unfinished. No new jobs enter this cohort during the example.</p>
        <div role="region" aria-label="Fictional maintenance job states" tabIndex={0} style={{ overflowX: "auto" }}>
          <table><caption>First review: eight distinct jobs, not eleven messages</caption><thead><tr><th scope="col">Current state</th><th scope="col">Count</th><th scope="col">Meaning</th></tr></thead><tbody>
            <tr><th scope="row">Verified closed</th><td>5</td><td>Completion evidence has passed the agreed review.</td></tr>
            <tr><th scope="row">Awaiting verification</th><td>1</td><td>Work is reported complete; review remains open.</td></tr>
            <tr><th scope="row">Assigned, unfinished</th><td>2</td><td>An owner is assigned; the job is not complete.</td></tr>
            <tr><th scope="row">Total distinct jobs</th><td>8</td><td>Every job appears in exactly one current state.</td></tr>
          </tbody></table>
        </div>
        <p>Reported completion is 6 ÷ 8 = 75%. Verified closure is 5 ÷ 8 = 62.5%. Both describe the same file, but they answer different questions. Label the numerator and denominator instead of reporting an unexplained completion percentage. These invented percentages are not service benchmarks or evidence that conditions are safe.</p>
        <p>Define verification before dispatch: the approved scope, appropriate completion evidence and the person authorized to accept it. A photograph, resident follow-up, test result or specialist report can answer different questions. A paid invoice does not establish that every required check occurred. If verification requires technical judgment, assign it to a qualified person.</p>
        <h2 id="reopened" style={anchorStyle}>3. Reopen the record without erasing its history</h2>
        <p>At the next review, one of the five verified jobs has the same reported symptom again. Reopen it and retain the original closure date, evidence and reason for reopening. The current state counts become four verified closed, one awaiting verification, two assigned unfinished and one reopened: 4 + 1 + 2 + 1 = 8.</p>
        <p>Current verified closure is now 4 ÷ 8 = 50%. The cohort has also had one reopening among five jobs previously verified, or 1 ÷ 5 = 20%. That historical reopening measure has a different denominator from current closure. It does not prove why the symptom returned or establish contractor fault. Request diagnosis and compare the new finding with the original scope before deciding on another repair.</p>
        <p>For timing measures, retain report, acknowledgement, assignment, appointment, reported completion and verification timestamps separately. Note paused access or parts dependencies with an owner and next update. An acknowledgement is not a dispatch, and a dispatch is not resolution. Report the agreed timing definition rather than silently switching between calendar time and working hours.</p>
        <h2 id="scope" style={anchorStyle}>4. Keep the approved scope beside the invoice</h2>
        <p>In a separate fictional cost check, a job starts with a $300 written quote. An approved $80 change brings the authorized amount to $380. A $420 invoice is $40 above that authorization and $120 above the original quote. Those are different comparisons. Record the unexplained $40 for review; do not assume it was approved or paid.</p>
        <p>The <a href="https://consumer.ftc.gov/articles/how-avoid-home-improvement-scam">Federal Trade Commission&apos;s home-improvement guidance</a> recommends checking contractor credentials and obtaining written estimates describing scope and price. Its consumer guidance is useful background for documenting a vendor decision; it does not set this property&apos;s contract terms or replace local requirements.</p>
        <p>Keep the estimate, approved changes, invoice, payment record and completion evidence linked to the job. Record any warranty or follow-up commitment in the actual agreement. Avoid counting an invoice and its later payment as two separate maintenance costs in an operating review.</p>
        <h2 id="review" style={anchorStyle}>5. Close each review with an owner and a next step</h2>
        <ul><li>Reconcile reports to distinct jobs, preserving duplicate-report references.</li><li>Account for every job in one current state and retain its earlier events.</li><li>Assign unresolved verification, parts, access and scope questions to a responsible person.</li><li>Compare approved amounts, invoices and payments without combining their meanings.</li><li>Set the next communication and review point; reopen the record when new evidence changes it.</li></ul>
        <p>Use the <Link href="/guides/maintenance-request-brief">maintenance-request brief and fictional worksheet</Link> to document an observation. Use this guide to reconcile the operator&apos;s work-order queue, and the <Link href="/operations">operations guide</Link> to connect it with the broader house routine. The <Link href="/insights/utilities-field-guide">utility bill reconciliation guide</Link> helps distinguish a billing change from an issue that still needs investigation.</p>
        <p><strong>Publisher boundary:</strong> PadSplit Playbook is independent of PadSplit, Inc. Confirm current platform procedures, property obligations and specialist responsibilities for the actual operation.</p>
      </article>
    </div>
  </>;
}
