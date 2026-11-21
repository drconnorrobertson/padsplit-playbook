import Link from "next/link";

export const budgetTitle = "Conversion Budget: Reconcile Scope, Allowances and Remaining Cash";
export const budgetDescription = "Work through a fictional conversion scope, a replaced allowance and a cash-to-complete bridge. Download the baseline CSV and keep held reserve separate from committed cost.";
const anchorStyle = { scrollMarginTop: "120px" };
const moneyStyle = { whiteSpace: "nowrap", textAlign: "right" } as const;

export default function ConversionBudgetFieldGuide() {
  return <>
    <header className="page-hero insight-hero">
      <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/insights">Insights</Link> / Conversion budget</div>
      <p className="eyebrow">Conversion budget · Worked field guide</p>
      <h1 className="display">Price the scope.<br/><em>Protect the remainder.</em></h1>
      <p className="lede">A quote, an allowance, a held reserve and cash already paid describe different parts of a budget. Reconcile them before treating an unspent bank balance as available money.</p>
      <div className="insight-meta"><span>Published September 23, 2026</span><span>Updated November 21, 2026</span><span>PadSplit Playbook editorial guide</span></div>
    </header>
    <div className="article-layout insight-article-layout">
      <aside className="toc"><b>On this page</b><a href="#scope">Define the scope</a><a href="#baseline">Build the baseline</a><a href="#changes">Replace allowances</a><a href="#cash">Reconcile cash</a><a href="#handoff">Keep the handoff</a></aside>
      <article className="prose insight-prose">
        <p className="article-intro">A project can stay within its funding cap while using up much of the reserve intended for unresolved work. The useful question is not just what has been paid. It is what remains committed, what is still estimated and what funding is genuinely unallocated.</p>
        <p>Every quantity, price and payment in this guide is fictional. These are not contractor rates, required fees, a complete conversion estimate or actual property results. The example does not establish that a proposed housing use, layout or scope is permitted. Keep the property-specific professional and approval questions in the file.</p>
        <h2 id="scope" style={anchorStyle}>1. Make the quantity and scope identifiable</h2>
        <p>Give each budget row an item, quantity, unit, pricing source, scope version and status. A painting quantity might describe quoted wall and ceiling area; a flooring quantity describes a different measured surface. Do not reuse the building&apos;s floor area as every trade&apos;s quantity. Record inclusions, preparation, disposal, delivery and exclusions rather than assuming the same unit price covers them all.</p>
        <p>The <a href="https://consumer.ftc.gov/articles/how-avoid-home-improvement-scam">Federal Trade Commission&apos;s home-improvement guidance</a> recommends written estimates describing the work, materials, completion date and price. Use that consumer guidance as background for documenting a quote. Confirm the actual contract, provider credentials and local requirements for your project; the fictional table supplies none of those approvals.</p>
        <p>When comparing bids, align the included work first. A lower total with preparation or disposal excluded is not automatically the cheaper version of the same job. Ask for the missing scope or keep it visibly unresolved. A blank estimate is not evidence of zero cost.</p>
        <h2 id="baseline" style={anchorStyle}>2. Separate defined scope, an allowance and held reserve</h2>
        <p>Assume the following six scope rows have illustrative written quotes on a consistent basis. The painting and flooring quantities are already the agreed quoted quantities; no additional waste factor is added here. The storage assemblies are a purchasing example, not a room-design recommendation. The remaining fixed packages are simply invented amounts for this exercise.</p>
        <div role="region" aria-label="Fictional conversion budget baseline" tabIndex={0} style={{ overflowX: "auto" }}>
          <table><caption>Fictional baseline: funding held is not all committed cost</caption><thead><tr><th scope="col">Scope or bucket</th><th scope="col">Basis</th><th scope="col">Amount</th></tr></thead><tbody>
            <tr><th scope="row">Painting</th><td>1,200 sq ft × $2.50</td><td style={moneyStyle}>$3,000</td></tr>
            <tr><th scope="row">Flooring</th><td>600 sq ft × $5</td><td style={moneyStyle}>$3,000</td></tr>
            <tr><th scope="row">Storage assemblies</th><td>4 × $450</td><td style={moneyStyle}>$1,800</td></tr>
            <tr><th scope="row">Coordination</th><td>Fixed package</td><td style={moneyStyle}>$900</td></tr>
            <tr><th scope="row">Delivery and haul-away</th><td>Fixed package</td><td style={moneyStyle}>$600</td></tr>
            <tr><th scope="row">Furnishing package</th><td>Fixed package</td><td style={moneyStyle}>$2,600</td></tr>
            <tr><th scope="row">Defined-scope subtotal</th><td>Six quoted rows</td><td style={moneyStyle}>$11,900</td></tr>
            <tr><th scope="row">Lighting allowance</th><td>Placeholder pending quote</td><td style={moneyStyle}>$1,200</td></tr>
            <tr><th scope="row">Scope plus allowance</th><td>Before held reserve</td><td style={moneyStyle}>$13,100</td></tr>
            <tr><th scope="row">Held reserve</th><td>Uncommitted funding</td><td style={moneyStyle}>$2,000</td></tr>
            <tr><th scope="row">Funding cap</th><td>Scope, allowance and reserve</td><td style={moneyStyle}>$15,100</td></tr>
          </tbody></table>
        </div>
        <p>The $1,200 allowance is an unresolved estimate for identified work. The $2,000 reserve is funding held back for uncertainty; it is not a vendor quote or an expense already incurred. Neither amount is a recommended reserve percentage. The owner must still identify excluded work and decide whether the available funding addresses the actual risks.</p>
        <p>This limited work budget excludes acquisition, financing, operating carry, taxes and any work or approvals not listed. Ask which additional categories apply to the actual project. Do not use the $15,100 illustration as a complete capital requirement.</p>
        <h2 id="changes" style={anchorStyle}>3. Replace the allowance instead of adding the quote twice</h2>
        <p>Now assume a lighting quote of $1,850 replaces the $1,200 allowance. The increase is $650, not $1,850 on top of the placeholder. A separately approved flooring scope change adds $400. Keep that change and its authorization reference with the original scope.</p>
        <p>The revised scope amount is $11,900 + $1,850 + $400 = $14,150. Equivalently, the original $13,100 scope-plus-allowance amount increases by $650 + $400 = $1,050. Both paths reconcile to the same revised amount.</p>
        <div role="region" aria-label="Fictional remaining reserve comparison" tabIndex={0} style={{ overflowX: "auto" }}>
          <table><caption>Two different funding decisions after the same scope changes</caption><thead><tr><th scope="col">Decision</th><th scope="col">Revised scope</th><th scope="col">Held reserve</th><th scope="col">Funding needed</th></tr></thead><tbody>
            <tr><th scope="row">Keep the original cap</th><td style={moneyStyle}>$14,150</td><td style={moneyStyle}>$950</td><td style={moneyStyle}>$15,100</td></tr>
            <tr><th scope="row">Restore the original reserve</th><td style={moneyStyle}>$14,150</td><td style={moneyStyle}>$2,000</td><td style={moneyStyle}>$16,150</td></tr>
          </tbody></table>
        </div>
        <p>Keeping the cap uses $1,050 of the originally held reserve. Restoring the reserve requires $1,050 of additional funding. Keeping both the original cap and the original reserve while accepting the revised scope would leave the file unreconciled. A positive $950 remainder does not prove the remaining risks are adequately funded.</p>
        <h2 id="cash" style={anchorStyle}>4. Distinguish cash unspent from cash unallocated</h2>
        <p>For this next illustration, assume the revised $14,150 scope is now fully authorized and committed, $5,000 has been paid against it, and the full $15,100 funding cap was available in cash. There are no refunds, retained amounts, outside payments or other receipts in this simplified bridge.</p>
        <ul><li><strong>Cash unspent:</strong> $15,100 − $5,000 = $10,100.</li><li><strong>Committed scope still unpaid:</strong> $14,150 − $5,000 = $9,150.</li><li><strong>Unallocated funding:</strong> $10,100 − $9,150 = $950.</li></ul>
        <p>The bank balance is not a second reserve. Much of that balance is already needed for unpaid commitments. If a quoted scope is not yet authorized, label it as proposed rather than silently treating it as a signed commitment. Keep payment dates and conditions in a separate cash schedule; this bridge does not establish when an invoice is due or when any outside funding becomes available.</p>
        <h2 id="handoff" style={anchorStyle}>5. Preserve a budget another person can reconcile</h2>
        <ol><li>Keep the baseline scope, quote inclusions, quantities and unresolved categories together.</li><li>Record each approved change once, showing what it replaces and who authorized it.</li><li>Reconcile the current scope, held reserve and funding cap after every change.</li><li>Match invoices and payments to the relevant commitment without counting the payment as a second cost.</li><li>Assign unresolved estimates and funding gaps to an owner and next review date.</li></ol>
        <p><a href="/assets/fictional-conversion-budget-baseline.csv" download>Download the fictional baseline budget CSV</a>. Its eight rows contain the initial six quoted scopes, lighting allowance and held reserve. It does not include the later changes or cash-paid scenario. Keep those versions separate when adapting the example.</p>
        <p>Use the <Link href="/insights/room-design-checklist">pre-furnishing room-design checklist</Link> to document the proposal behind the purchasing scope. The <Link href="/underwriting">underwriting guide</Link> addresses the broader property model, while the <Link href="/insights/maintenance-field-guide">maintenance work-order guide</Link> concerns ongoing operating jobs.</p>
        <p>PadSplit Playbook is independent of PadSplit, Inc. This is an educational planning example, not a construction estimate, professional approval, platform policy or promised investment outcome.</p>
      </article>
    </div>
  </>;
}
