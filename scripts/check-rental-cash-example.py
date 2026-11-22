"""Reconcile the public fictional CSV independently and check its HTML cash bridge."""
import csv
import json
import re
from decimal import Decimal, ROUND_HALF_UP
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
D = Decimal
CENT = D('0.01')
def money(value):
    return value.quantize(CENT, rounding=ROUND_HALF_UP)

class Table(HTMLParser):
    def __init__(self):
        super().__init__(); self.rows = []; self.row = None; self.cell = None
    def handle_starttag(self, tag, attrs):
        if tag == 'tr': self.row = []
        if tag in ('td', 'th'): self.cell = ''
    def handle_data(self, text):
        if self.cell is not None: self.cell += text
    def handle_endtag(self, tag):
        if tag in ('td', 'th') and self.cell is not None:
            self.row.append(self.cell.strip()); self.cell = None
        if tag == 'tr' and self.row is not None:
            self.rows.append(self.row); self.row = None

rows = list(csv.DictReader((ROOT/'public/assets/fictional-rental-cash-comparison.csv').open()))
assert len(rows) == 3
expected = [('traditional','11082.24','923.52'), ('shared-base','18149.00','1512.42'), ('shared-downside','8215.37','684.61')]
for row, (name, after, monthly) in zip(rows, expected):
    assert row['fictional'] == 'true' and row['case'] == name
    shared = name != 'traditional'
    potential = D(5)*D(195)*D(52) if shared else D(1800)*D(12)
    collected = potential*D(row['collectionShare'])
    booking = money(D(row['chargedFullTenDayStarts'])*D(195)/D(7)*D(10)) if shared else D(0)
    fee = money((collected-booking)*D('.08'))
    costs = sum(D(row[k]) for k in ('taxInsurance','repairs','utilities','internet','cleaning','localManagement'))
    before = collected-booking-fee-costs
    remainder = before-D(row['replacementReserveAllocation'])
    for key, value in [('potentialAnnualHostBaseRent',potential),('collectedHostBaseRent',collected),('bookingFees',booking),('managementOrServiceFee',fee),('otherOperatingOutflows',costs),('cashBeforeReserveDebtTax',before),('cashAfterReserveBeforeDebtTax',remainder),('monthlyEquivalentAfterReserve',money(remainder/D(12)))]:
        assert D(row[key]) == value, (name,key,row[key],value)
    assert remainder == D(after) and money(remainder/D(12)) == D(monthly)
    assert D(row['oneTimeSharedConversionBudgetExcluded']) == (D(25000) if shared else D(0))
assert D(rows[2]['cashAfterReserveBeforeDebtTax']) < D(rows[0]['cashAfterReserveBeforeDebtTax']) < D(rows[1]['cashAfterReserveBeforeDebtTax'])
source = (ROOT/'public/blog/room-by-room-rental-math/index.html').read_text()
table = Table(); table.feed(source); assert len(table.rows) == 11
keys = ['potentialAnnualHostBaseRent','collectedHostBaseRent','chargedFullTenDayStarts','bookingFees','managementOrServiceFee','otherOperatingOutflows','cashBeforeReserveDebtTax','replacementReserveAllocation','cashAfterReserveBeforeDebtTax','monthlyEquivalentAfterReserve']
for cells, key in zip(table.rows[1:], keys):
    assert len(cells) == 4
    assert [D(c.replace('$','').replace(',','')) for c in cells[1:]] == [D(row[key]) for row in rows]
for required in ('fictional teaching examples','combined stress test','not standardized NOI','not a member','not an excerpt from the book','tabindex="0"','scope="row"','/assets/fictional-rental-cash-comparison.csv'):
    assert required in source, required
schema = json.loads(re.search(r'<script type="application/ld\+json">(.*?)</script>', source, re.S)[1])
assert schema['datePublished'] == '2026-05-05'
assert schema['dateModified'] == '2026-11-21'
assert schema['headline'] in source
assert 'superior cash flow' not in source
print(json.dumps({'fictionalCases':3,'independentDecimalReconciliation':'passed','renderedTableCells':30,'csvAndTableAgreement':'passed','downsideBelowTraditional':True,'publicationDatePreserved':True}))
