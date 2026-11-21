import Link from "next/link";

export const utilitiesTitle = "Utility Management: Reconcile Bills, Usage and Occupancy";
export const utilitiesDescription = "Compare fictional utility bills across billing days and occupied room-nights, separate usage from charges, and document operating follow-up.";
const anchorStyle = { scrollMarginTop: "120px" };

export default function UtilitiesFieldGuide() {
  return <>
    <header className="page-hero insight-hero">
      <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/insights">Insights</Link> / Utility management</div>
      <p className="eyebrow">Utility management · Worked field guide</p>
      <h1 className="display">Read the bill.<br/><em>Explain the change.</em></h1>
      <p className="lede">A larger bill, higher daily usage and lower cost per occupied room-night can occur together. Define the period and denominator before deciding what changed.</p>
      <div className="insight-meta"><span>Published September 23, 2026</span><span>Updated November 21, 2026</span><span>PadSplit Playbook editorial guide</span></div>
    </header>
    <div className="article-layout insight-article-layout">
      <aside className="toc"><b>On this page</b><a href="#bill">Build the bill record</a><a href="#days">Compare billing days</a><a href="#occupancy">Check the denominator</a><a href="#response">Investigate the change</a><a href="#record">Keep a review record</a></aside>
      <article className="prose insight-prose">
        <p className="article-intro">Owner-paid utilities are an operating service and a cost to reconcile. Start with the bill and the property record, then decide whether a difference needs a provider question, maintenance work, a budget revision or more evidence.</p>
        <p>Every amount, usage figure and occupancy count in this guide is fictional. These are not utility tariffs, market benchmarks, actual property results or PadSplit platform terms. The example does not establish permitted housing capacity or a recommended charge to residents.</p>
        <h2 id="bill" style={anchorStyle}>1. Make each bill an identifiable record</h2>
        <p>Record the service address, meter or service reference, billing start and end dates, billed days, units consumed, rate components and total. Note whether the reading is actual or estimated and whether the statement includes a prior balance, credit or adjustment. Store full account records privately; use non-sensitive references in a shared working log.</p>
        <p>Distinguish current-period service cost from a payment made this month. A payment can settle an earlier balance, while a current bill can include credits for another period. Reconcile the service dates and adjustments before treating a bank withdrawal as the cost of that month&apos;s occupancy.</p>
        <p>The <a href="https://www.energy.gov/cmei/femp/evaluating-your-utility-rate-options">Department of Energy&apos;s utility-rate guide</a> explains that electricity bills can contain energy, demand and fixed charges. Read the actual rate schedule and ask the provider what applies. The simplified arithmetic below uses only an invented energy rate and daily charge; it is not a complete model of a real tariff.</p>
        <h2 id="days" style={anchorStyle}>2. Compare billing days before comparing totals</h2>
        <p>Assume Period A covers 30 days and 1,800 kWh. Period B covers 32 days and 2,080 kWh. Both use an invented $0.16 per kWh energy rate plus $1 per billed day. There are no other charges, taxes, credits or prior balances. One kWh measures energy consumed; this example does not model peak demand charges in kW.</p>
        <div role="region" aria-label="Fictional utility bill comparison" tabIndex={0} style={{ overflowX: "auto" }}>
          <table><caption>Fictional electricity bills with the same rate assumptions</caption><thead><tr><th scope="col">Measure</th><th scope="col">Period A</th><th scope="col">Period B</th></tr></thead><tbody>
            <tr><th scope="row">Billed days</th><td>30</td><td>32</td></tr>
            <tr><th scope="row">Energy consumed</th><td>1,800 kWh</td><td>2,080 kWh</td></tr>
            <tr><th scope="row">Daily energy use</th><td>1,800 ÷ 30 = 60 kWh/day</td><td>2,080 ÷ 32 = 65 kWh/day</td></tr>
            <tr><th scope="row">Energy charge</th><td>1,800 × $0.16 = $288.00</td><td>2,080 × $0.16 = $332.80</td></tr>
            <tr><th scope="row">Daily fixed charge</th><td>30 × $1 = $30.00</td><td>32 × $1 = $32.00</td></tr>
            <tr><th scope="row">Total modeled bill</th><td>$318.00</td><td>$364.80</td></tr>
          </tbody></table>
        </div>
        <p>The bill rises by $46.80. Part of that change comes from two additional billed days, and part comes from higher average daily use. Holding Period B&apos;s daily usage and charge assumptions constant over 30 days gives 65 × 30 = 1,950 kWh and a modeled cost of $342.00. That is $24.00 above Period A on an equal-day convention.</p>
        <p>This is a billing-day comparison, not weather normalization or proof of waste. Temperature, equipment, occupancy, vacancies, estimated readings and other conditions can differ. Tiered rates, demand charges and time-of-use pricing require their actual billing rules; simply scaling the total bill by days may not reproduce them.</p>
        <h2 id="occupancy" style={anchorStyle}>3. Label the occupancy denominator</h2>
        <p>Now assume a fictional six-room home has 150 occupied room-nights during Period A and 180 during Period B. For this example only, each occupied room has one resident. The counts come from a room/date record, not advertised beds or a full-occupancy assumption.</p>
        <div role="region" aria-label="Fictional occupied room-night comparison" tabIndex={0} style={{ overflowX: "auto" }}>
          <table><caption>Different denominators can tell different stories</caption><thead><tr><th scope="col">Measure</th><th scope="col">Period A</th><th scope="col">Period B</th></tr></thead><tbody>
            <tr><th scope="row">Available room-nights</th><td>6 × 30 = 180</td><td>6 × 32 = 192</td></tr>
            <tr><th scope="row">Occupied room-nights</th><td>150</td><td>180</td></tr>
            <tr><th scope="row">Bill per occupied room-night</th><td>$318 ÷ 150 = $2.12</td><td>$364.80 ÷ 180 ≈ $2.03</td></tr>
          </tbody></table>
        </div>
        <p>Cost per occupied room-night falls while daily energy use rises. Neither measure alone proves efficiency improved or deteriorated. Some equipment runs when rooms are vacant, and an occupancy count does not identify which conditions changed. Preserve both measures rather than selecting the one that makes the report look better.</p>
        <p>Room-nights and resident-nights are different if a room has more than one resident. Record the actual counting convention and separately identify out-of-service rooms. A denominator is a reporting choice, not permission to increase occupancy.</p>
        <h2 id="response" style={anchorStyle}>4. Assign a response to the evidence</h2>
        <ul>
          <li><strong>Billing question:</strong> reconcile service dates, meter references, readings, rates and adjustments with the provider. Preserve the explanation and any corrected statement.</li>
          <li><strong>Equipment question:</strong> describe the observed condition, timing and relevant readings in a maintenance request. Have qualified people assess equipment and safe operation; a bill alone does not diagnose a fault.</li>
          <li><strong>Budget question:</strong> compare a full seasonal record and known changes to the forecast. Keep one-time adjustments separate from recurring assumptions.</li>
          <li><strong>Service question:</strong> document resident-reported comfort or connectivity needs and the operating response. Keep service quality visible alongside cost.</li>
        </ul>
        <p>For water, gas, electricity and internet, use the appropriate units and contract. Internet service cost is not a kWh measure, and a water reading is not interchangeable with an electricity reading. Do not combine unlike physical units into one usage total.</p>
        <h2 id="record" style={anchorStyle}>5. Close the loop with a review record</h2>
        <ol><li>Identify the property, service, billing window and non-sensitive source reference.</li><li>Record current-period cost, physical usage, billed days and the occupancy convention.</li><li>Explain known changes and leave unresolved differences visible.</li><li>Assign one owner, next action and review date; retain the response or completion evidence.</li><li>Compare the next matched period with the original assumption before calling an action successful.</li></ol>
        <p>Continue with the <Link href="/insights/room-pricing-field-guide">room-pricing and collections guide</Link> to separate receipts from included services, the <Link href="/guides/maintenance-request-brief">maintenance-request brief</Link> to document a suspected equipment issue, and the <Link href="/operations">operations guide</Link> for responsibilities.</p>
        <p>PadSplit Playbook is independent of PadSplit, Inc. This original educational guide is not platform policy, an energy audit, an engineering diagnosis, or investment, legal or housing-compliance advice.</p>
      </article>
    </div>
  </>;
}
