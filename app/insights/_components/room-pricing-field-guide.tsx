import Link from "next/link";

export const roomPricingTitle = "Room Pricing: Compare Offers and Reconcile Collections";
export const roomPricingDescription = "Use a fictional room-rate comparison and four-week collections bridge to separate asking prices, concessions, vacancy and owner-paid costs.";

export default function RoomPricingFieldGuide() {
  return <>
    <header className="page-hero insight-hero">
      <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/insights">Insights</Link> / Room pricing</div>
      <p className="eyebrow">Room pricing · Worked field guide</p>
      <h1 className="display">Compare the offer.<br/><em>Reconcile the cash.</em></h1>
      <p className="lede">An asking rate, an occupied room and a collected payment are three different inputs. Keep them separate before deciding what a room can support.</p>
      <div className="insight-meta"><span>Published September 23, 2026</span><span>Updated November 21, 2026</span><span>PadSplit Playbook editorial guide</span></div>
    </header>
    <div className="article-layout insight-article-layout">
      <aside className="toc"><b>On this page</b><a href="#offers">Compare offers</a><a href="#capacity">Calculate capacity</a><a href="#collections">Bridge to collections</a><a href="#costs">Separate costs</a><a href="#review">Review the evidence</a></aside>
      <article className="prose insight-prose">
        <p className="article-intro">A listing can ask $240 per week and still collect less over an initial stay than a $230 offer. A six-room home can report high occupancy while concessions and unpaid charges reduce cash. This guide works through both situations with an original fictional worksheet.</p>
        <p>Every price, room, collection amount and expense below is invented to explain the calculations. These are not market comparables, platform fees, actual property results or recommended rents. Replace the inputs with dated records for the specific property.</p>
        <h2 id="offers">1. Compare the entire offer over the same period</h2>
        <p>Capture the listing date, source link, room attributes, billing period, included services, advertised availability and any concession. Keep asking prices separate from documented signed terms and actual collections. A withdrawn listing does not prove that its asking price was achieved.</p>
        <p>Use a consistent comparison window. For the following fictional offers, assume a 12-week initial period, identical included services, no additional required charges and no payment loss. Offer A waives one of those 12 weeks; it does not add a thirteenth week.</p>
        <div style={{ overflowX: "auto" }}><table><caption>Fictional offers over the same 12-week period</caption><thead><tr><th scope="col">Offer</th><th scope="col">Advertised rate</th><th scope="col">Amount billed</th><th scope="col">Effective weekly amount</th></tr></thead><tbody>
          <tr><th scope="row">A: one week free</th><td>$240/week</td><td>11 × $240 = $2,640</td><td>$2,640 ÷ 12 = $220</td></tr>
          <tr><th scope="row">B: no concession</th><td>$230/week</td><td>12 × $230 = $2,760</td><td>$2,760 ÷ 12 = $230</td></tr>
        </tbody></table></div>
        <p>Offer B bills $120 more over that window, despite its lower headline rate. This comparison changes if the terms, included services or collected amounts differ. Record those differences rather than inventing an adjustment percentage to make two rooms appear equivalent.</p>
        <p>A useful comparable file includes room size, private or shared bath, furnishings, access, included utilities, required charges and the period covered. Mark unverified fields as unknown. Do not present an asking-price snapshot as proof of demand or occupancy.</p>
        <h2 id="capacity">2. Calculate room capacity without a four-week-month shortcut</h2>
        <p>Assume a fictional home has six rooms already confirmed as available for the intended use. The weekly rates are $180, $180, $190, $190, $200 and $210. Their sum is $1,150 per week. The rates are illustrative; the calculation establishes neither lawful occupancy nor achievable pricing.</p>
        <ul><li><strong>Four-week gross potential:</strong> $1,150 × 4 = $4,600.</li><li><strong>52-week planning year:</strong> $1,150 × 52 = $59,800.</li><li><strong>Average month on that annual convention:</strong> $59,800 ÷ 12 = $4,983.33.</li></ul>
        <p>Four weeks and an average calendar month are different windows. Multiplying a weekly rate by four for every month models only 48 weeks per year. For an actual ledger, reconcile the exact charge dates, stay dates and reporting cutoff instead of forcing every month into four weeks.</p>
        <h2 id="collections">3. Bridge potential charges to the cash collected</h2>
        <p>Now use exactly four weeks, with 24 available room-weeks. Assume two vacant room-weeks: one at $180 and one at $190. All remaining occupied charges belong to this period. Assume $50 of concessions and $30 of those net charges still unpaid at the cutoff. There are no opening balances, advance payments, refunds, deposits or other receipts in this simplified example.</p>
        <div style={{ overflowX: "auto" }}><table><caption>Fictional four-week revenue-to-cash bridge</caption><thead><tr><th scope="col">Step</th><th scope="col">Amount</th><th scope="col">Record to reconcile</th></tr></thead><tbody>
          <tr><th scope="row">Gross potential charges</th><td>$4,600</td><td>Six-room rate schedule × four weeks</td></tr>
          <tr><th scope="row">Less vacancy</th><td>−$370</td><td>One $180 and one $190 room-week</td></tr>
          <tr><th scope="row">Occupied scheduled charges</th><td>$4,230</td><td>Room and charge-date ledger</td></tr>
          <tr><th scope="row">Less concessions</th><td>−$50</td><td>Documented adjustments</td></tr>
          <tr><th scope="row">Net charges</th><td>$4,180</td><td>Charges after concessions</td></tr>
          <tr><th scope="row">Less unpaid at cutoff</th><td>−$30</td><td>Receivable balance for this period</td></tr>
          <tr><th scope="row">Collected for this period</th><td>$4,150</td><td>Matched receipts before operating costs</td></tr>
        </tbody></table></div>
        <p>Physical occupancy is 22 ÷ 24 = <strong>91.67%</strong>. Collections divided by gross potential are $4,150 ÷ $4,600 = <strong>90.22%</strong>. Those measures answer different questions. Label the numerator and denominator on your report instead of calling both simply “occupancy.”</p>
        <p>If a room was out of service, show those dates and the reason separately. Changing the denominator can change a percentage, but it does not recover missed receipts or pay for repairs. In a real ledger, also separate receipts for earlier balances and future periods before attributing cash to this window.</p>
        <h2 id="costs">4. Keep included services and operating costs visible</h2>
        <p>Assume the same four-week window has $600 of utilities and internet, $120 of supplies and $150 of documented platform or payment costs. These are fictional ledger amounts, not published platform terms. The remaining amount is $4,150 − $600 − $120 − $150 = <strong>$3,280</strong>.</p>
        <p>That is a partial contribution after only three expense categories. It excludes management, repairs, turns, insurance, property taxes, licensing, capital replacements, financing and income taxes. It is not net operating income, profit or money available for distribution. Use actual agreements and statements for charges instead of borrowing this example’s amounts.</p>
        <p>For an offer with owner-paid utilities, ask what evidence supports the allowance, which billing dates it covers and how seasonal usage changes the comparison. A price premium is not established merely because services are included.</p>
        <h2 id="review">5. Record what would change the pricing decision</h2>
        <ol><li><strong>Evidence:</strong> keep the dated offer capture, terms and observed outcome together. Do not mix an old premium listing with a current basic room without explaining the difference.</li><li><strong>Reconciliation:</strong> tie room availability to charges, adjustments, receivables and receipts. Investigate differences before changing the advertised rate.</li><li><strong>Operating reason:</strong> distinguish unavailable rooms, delayed turns, weak inquiry response and payment timing. A price change does not solve every vacancy cause.</li><li><strong>Review:</strong> name the next observation date and the evidence needed to reconsider. Preserve the previous version so the reasoning remains visible.</li></ol>
        <p>Continue with the <Link href="/underwriting">property underwriting guide</Link> for the broader cost model and the <Link href="/guides/maintenance-request-brief">maintenance-request brief</Link> for documenting an out-of-service room. The <Link href="/operations">operations guide</Link> connects the numbers to responsibilities.</p>
        <p>PadSplit Playbook is independent of PadSplit, Inc. This is original educational material, not platform policy, a market-rate survey or investment, legal, tax or housing-compliance advice.</p>
      </article>
    </div>
  </>;
}
