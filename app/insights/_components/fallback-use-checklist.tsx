import Link from "next/link";
import example from "@/lib/fallback-example.json";

export const fallbackTitle = "Co-Living Fallback Checklist: Test Rent, Transition Cash and Exit Evidence";
export const fallbackDescription = "Compare three fictional monthly cases, reconcile a $12,500 transition, and identify the permission, lending and sale evidence an alternate-use plan still needs.";
const anchorStyle = { scrollMarginTop: "120px" };
const money = (amount: number) => amount < 0 ? `−$${Math.abs(amount).toLocaleString("en-US")}` : `$${amount.toLocaleString("en-US")}`;

export default function FallbackUseChecklist() {
  return <>
    <header className="page-hero insight-hero">
      <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/insights">Insights</Link> / Fallback use</div>
      <p className="eyebrow">Fallback use · Worked checklist</p>
      <h1 className="display">Test the fallback.<br/><em>Fund the transition.</em></h1>
      <p className="lede">A conventional rental or sale is a separate plan with its own evidence, timing and cash needs. An attractive alternate rent does not establish that the property can reach it.</p>
      <div className="insight-meta"><span>Published September 23, 2026</span><span>Updated November 21, 2026</span><span>PadSplit Playbook editorial guide</span></div>
    </header>
    <div className="article-layout insight-article-layout">
      <aside className="toc"><b>On this page</b><a href="#define">Define the alternative</a><a href="#monthly">Compare monthly cash</a><a href="#transition">Fund the transition</a><a href="#permission">Resolve permission and financing</a><a href="#sale">Separate sale proceeds</a><a href="#decision">Set a review decision</a></aside>
      <article className="prose insight-prose" style={{ minWidth: 0 }}>
        <p className="article-intro">A fallback becomes useful when it can be examined independently of the preferred operating model. Keep the records that would let someone else explain the alternative, the work needed to reach it, and the assumptions that remain open. Do not count the same cash as both transition funding and an untouched reserve.</p>
        <p>Every amount, time period and property scenario below is fictional. These are teaching assumptions, not local rent estimates, contractor quotes, lending terms, approved uses or reported investment results. No address or operating permission is established by this example.</p>
        <h2 id="define" style={anchorStyle}>1. Define an alternate operation rather than a label</h2>
        <p>Write down what the property would become: the proposed household arrangement, lease structure, physical layout and services the owner would still provide. Identify the changes that would be retained, reversed or newly required. A phrase such as “rent it normally” leaves those decisions hidden.</p>
        <p>Attach dated comparable evidence for the actual proposed alternative. Record asking versus achieved rent, included services, condition, location and the time needed to find an occupant. Keep an unsupported rent as an assumption even if it makes the model balance. A listing for a different layout or lease arrangement does not answer the same question.</p>
        <p>For this illustration, the fallback is one conventional rental after an assumed two-month vacant transition. Its collections and service costs differ from the room-by-room proposal. The comparison holds the other monthly cost allowance and principal-and-interest payment constant to isolate those differences; actual insurance, taxes, management and financing could also change.</p>
        <h2 id="monthly" style={anchorStyle}>2. Compare a consistent monthly cash boundary</h2>
        <p>Subtract owner-paid services, other property cash costs and principal-and-interest payments from collected rent. The remainder below is a simplified cash figure. It is not net operating income, accounting profit, taxable income or a complete investment return. Capital replacements, transaction costs and additional reserves need their own treatment.</p>
        <p>Scroll horizontally on a narrow screen to read every column.</p>
        <div role="region" aria-label="Fictional fallback monthly cash comparison" tabIndex={0} style={{ overflowX: "auto" }}>
          <table><caption>Fictional monthly collections and outflows</caption><thead><tr><th scope="col">Case</th><th scope="col">Collections</th><th scope="col">Services</th><th scope="col">Other costs</th><th scope="col">Principal + interest</th><th scope="col">Cash remainder</th></tr></thead><tbody>
            {example.monthlyCases.map((row) => <tr key={row.name}><th scope="row">{row.name}</th><td>{money(row.grossCollections)}</td><td>{money(row.ownerPaidServices)}</td><td>{money(row.otherPropertyCosts)}</td><td>{money(row.principalAndInterest)}</td><td>{money(row.cashRemainder)}</td></tr>)}
          </tbody></table>
        </div>
        <p>The proposal leaves $1,800 under its assumptions. The conventional case leaves $250: $3,450 − $250 − $900 − $2,050. Reducing only its collections to $3,100 leaves a $100 monthly shortfall. The positive base case therefore does not establish that the fallback can absorb a lower rent or another expense.</p>
        <p>The $900 allowance groups assumed property taxes, insurance, maintenance and management costs. In this example those items are outside the $2,050 principal-and-interest line. The <a href="https://www.consumerfinance.gov/ask-cfpb/what-is-piti-en-152/">CFPB explanation of PITI</a> distinguishes principal, interest, taxes and insurance, including possible escrow payments. Read the actual payment breakdown so an escrowed cost is neither omitted nor counted twice.</p>
        <h2 id="transition" style={anchorStyle}>3. Reconcile cash before the alternate rent begins</h2>
        <p>The invented owner starts with $15,000 of available cash. During two vacant months, no rent is collected. Principal and interest remain $2,050 monthly, and assumed vacant-property costs are $700 monthly. The lower vacant-cost assumption must be replaced with actual evidence; vacancy does not make every expense disappear.</p>
        <div role="region" aria-label="Fictional transition cash bridge" tabIndex={0} style={{ overflowX: "auto" }}>
          <table><caption>Fictional two-month transition, separate from stabilized rent</caption><thead><tr><th scope="col">Item</th><th scope="col">Calculation</th><th scope="col">Cash amount</th></tr></thead><tbody>
            <tr><th scope="row">Vacant carrying cash</th><td>2 × ($2,050 + $700)</td><td>$5,500</td></tr>
            <tr><th scope="row">Work and leasing allowances</th><td>$6,000 + $1,000</td><td>$7,000</td></tr>
            <tr><th scope="row">Total transition need</th><td>$5,500 + $7,000</td><td>$12,500</td></tr>
            <tr><th scope="row">Cash left from starting funds</th><td>$15,000 − $12,500</td><td>$2,500</td></tr>
          </tbody></table>
        </div>
        <p>The $2,500 is the remainder after these assumed outflows, not a recommended reserve or evidence that the transition is adequately funded. One additional vacant month at the same $2,750 carrying amount would require $250 more than that remainder, before any other change. Replace allowances with scoped work, payment dates and realistic leasing timing.</p>
        <p>Keep refundable resident funds, restricted money and unavailable credit separate from funds the owner can actually spend. Record when each payment is due. A projected later receipt cannot fund an earlier invoice unless a real, documented source bridges that timing gap.</p>
        <h2 id="permission" style={anchorStyle}>4. Keep physical, use and financing questions open</h2>
        <p>A reconversion sketch is not permission to alter or occupy the property. Identify the exact jurisdiction and proposed work, and obtain the project-specific records and qualified advice required. The <a href="https://www.iccsafe.org/international-code-adoptions/">ICC code-adoption resource</a> directs users to confirm applicable editions, effective dates and amendments with the authority having jurisdiction. It does not approve this fictional fallback or supply a local occupancy rule.</p>
        <p>Review the actual loan, insurance and other governing documents for the intended alternative. Ask the relevant provider what changes, notices or approvals it requires, and preserve the written response. This model assumes an unchanged payment; it does not establish that the lender or insurer accepts the changed use. If a material answer is missing, label the fallback unresolved.</p>
        <h2 id="sale" style={anchorStyle}>5. Model a sale on its own cash timeline</h2>
        <p>A possible resale is different from a monthly rental alternative. Assemble an evidence-supported sale-price range, anticipated selling costs, loan payoff information, required work and carrying costs through an estimated closing. Keep asking price separate from a supported estimate of proceeds.</p>
        <p>Do not add the full property value to the rental model or treat future sale proceeds as cash already available. Reconcile the amount and timing of debts and costs against the expected receipt. No sale price, closing date, buyer demand or positive proceeds is assumed in the worked example.</p>
        <h2 id="decision" style={anchorStyle}>6. Make the next decision depend on the missing evidence</h2>
        <ol><li>Define the alternate layout, operation and lease arrangement.</li><li>Replace rent and cost assumptions with dated, relevant records.</li><li>Separate monthly operating cash, transition funding and possible sale proceeds.</li><li>Assign permission, financing and insurance questions to a named role and review date.</li><li>Pause or revise the plan when a required answer or funding source remains unresolved.</li></ol>
        <p><a href="/assets/fictional-fallback-cash-cases.csv" download>Download the fictional fallback cash comparison CSV</a>. It contains the three monthly cases and the same clearly labeled assumptions. The transition bridge above remains a separate use of starting cash.</p>
        <p>Use the <Link href="/insights/property-fit-checklist">property-fit checklist</Link> to trace the proposed layout, the <Link href="/insights/conversion-budget-field-guide">conversion-budget guide</Link> to develop scope and commitments, and the <Link href="/underwriting">underwriting guide</Link> to connect the broader model. A calculated remainder should follow the evidence, not substitute for it.</p>
        <p>Sources checked November 21, 2026. The cash cases and checklist are PadSplit Playbook&apos;s original educational analysis. PadSplit Playbook is independent of PadSplit, Inc. This guide is not a property approval, professional review or promised financial result.</p>
      </article>
    </div>
  </>;
}
