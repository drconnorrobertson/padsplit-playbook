import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {pathToFileURL} from 'node:url';
import ts from 'typescript';

const root = path.resolve(import.meta.dirname,'..');
const require = createRequire(import.meta.url);
function moduleURL(file, replacements={}) {
  let source = fs.readFileSync(path.join(root,file),'utf8');
  let output = ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022,jsx:ts.JsxEmit.ReactJSX}}).outputText;
  for (const [specifier, replacement] of Object.entries(replacements)) output=output.replaceAll(JSON.stringify(specifier),JSON.stringify(replacement));
  return 'data:text/javascript;base64,'+Buffer.from(output).toString('base64');
}
const canonicalURL = moduleURL('lib/utility-canonical.ts');
const canonical = await import(canonicalURL);
const maintenanceURL=moduleURL('lib/maintenance-canonical.ts');
const maintenance=await import(maintenanceURL);
const pricingURL=moduleURL('lib/pricing-canonical.ts');
const pricing=await import(pricingURL);
const designURL=moduleURL('lib/design-canonical.ts');
const design=await import(designURL);
const budgetURL=moduleURL('lib/budget-canonical.ts');
const budget=await import(budgetURL);
const residentURL=moduleURL('lib/resident-canonical.ts');
const resident=await import(residentURL);
const residentExample=JSON.parse(fs.readFileSync(path.join(root,'lib/resident-operations-example.json'),'utf8'));
const residentDataURL='data:text/javascript;base64,'+Buffer.from('export default '+JSON.stringify(residentExample)).toString('base64');
const propertyFitURL=moduleURL('lib/property-fit-canonical.ts');
const propertyFit=await import(propertyFitURL);
const propertyExample=JSON.parse(fs.readFileSync(path.join(root,'lib/property-fit-example.json'),'utf8'));
const propertyDataURL='data:text/javascript;base64,'+Buffer.from('export default '+JSON.stringify(propertyExample)).toString('base64');
const insightsURL = moduleURL('lib/insights.ts',{'./utility-canonical':canonicalURL,'./maintenance-canonical':maintenanceURL,'./pricing-canonical':pricingURL,'./design-canonical':designURL,'./budget-canonical':budgetURL,'./resident-canonical':residentURL,'./property-fit-canonical':propertyFitURL});
const {insights,getRelatedInsights} = await import(insightsURL);
const config = (await import(moduleURL('next.config.ts',{'./lib/utility-canonical':canonicalURL,'./lib/maintenance-canonical':maintenanceURL,'./lib/pricing-canonical':pricingURL,'./lib/design-canonical':designURL,'./lib/budget-canonical':budgetURL,'./lib/resident-canonical':residentURL,'./lib/property-fit-canonical':propertyFitURL}))).default;
const sitemap = (await import(moduleURL('app/sitemap.ts',{'@/lib/insights':insightsURL}))).default();
const clusters=[{slug:canonical.utilityCanonicalSlug,redirects:canonical.utilityRedirectSlugs,prefix:'utilities-'},{slug:maintenance.maintenanceCanonicalSlug,redirects:maintenance.maintenanceRedirectSlugs,prefix:'maintenance-'},{slug:pricing.pricingCanonicalSlug,redirects:pricing.pricingRedirectSlugs,prefix:'room-pricing-'},{slug:design.designCanonicalSlug,redirects:design.designRedirectSlugs,prefix:'room-design-',retainedCount:2,expectedRedirects:8},{slug:budget.budgetCanonicalSlug,redirects:budget.budgetRedirectSlugs,prefix:'conversion-budget-'},{slug:resident.residentCanonicalSlug,redirects:resident.residentRedirectSlugs,prefix:'resident-operations-'},{slug:propertyFit.propertyFitCanonicalSlug,redirects:propertyFit.propertyFitRedirectSlugs,prefix:'property-fit-'}];
const rules = await config.redirects();
assert.equal(insights.length,38);
assert.equal(rules.length,62);
assert.equal(new Set(rules.map(rule=>rule.source)).size,62);
for (const cluster of clusters) {
  const destination='/insights/'+cluster.slug;
  assert.equal(insights.filter(item=>item.slug.startsWith(cluster.prefix)).length,cluster.retainedCount||1);
  assert.ok(insights.some(item=>item.slug===cluster.slug));
  assert.equal(cluster.redirects.length,cluster.expectedRedirects||9);
  for (const slug of cluster.redirects) {
    assert.ok(!insights.some(item=>item.slug===slug),'Retired route excluded from cards and static params');
    const rule=rules.find(rule=>rule.source==='/insights/'+slug);
    assert.equal(rule.destination,destination);
    assert.equal(rule.permanent,true);
    assert.ok(!sitemap.some(item=>new URL(item.url).pathname==='/insights/'+slug),'Retired URL excluded from sitemap');
  }
  assert.equal(sitemap.find(item=>new URL(item.url).pathname===destination).lastModified,'2026-11-21');
}
assert.equal(sitemap.length,70);
assert.equal(new Set(sitemap.map(item=>item.url)).size,70);
assert.ok(insights.some(item=>item.slug==='room-design-mistakes'),'Keep the distinct worked-mistakes guide');
for (const item of insights) assert.equal(sitemap.find(entry=>new URL(entry.url).pathname==='/insights/'+item.slug).lastModified,'2026-11-21');
for (const item of insights) {
  const related=getRelatedInsights(item.slug);
  assert.equal(related.length,4);
  assert.equal(new Set(related.map(item=>item.slug)).size,4);
  for (const link of related) assert.ok(insights.includes(link) && link.slug!==item.slug);
}
assert.deepEqual(getRelatedInsights('not-a-guide'),[]);

// JSON-fed guides and legacy HTML must link directly to current destinations.
const retiredPaths=new Set(rules.map(rule=>rule.source));
function sourceFiles(dir) {
  return fs.readdirSync(dir,{withFileTypes:true}).flatMap(entry=>entry.isDirectory()?sourceFiles(path.join(dir,entry.name)):[path.join(dir,entry.name)]);
}
for (const dir of ['app','lib','public']) {
  for (const file of sourceFiles(path.join(root,dir)).filter(file=>/\.(tsx?|json|html)$/.test(file))) {
    const source=fs.readFileSync(file,'utf8');
    for (const match of source.matchAll(/["'`]((?:https:\/\/www\.padsplitplaybookbook\.com)?\/insights\/[^"'`?#\s]+)(?:[?#][^"'`]*)?["'`]/g)) {
      const pathname=match[1].replace('https://www.padsplitplaybookbook.com','').replace(/\/$/,'');
      assert.ok(!retiredPaths.has(pathname),`Internal source ${path.relative(root,file)} references retired ${pathname}`);
    }
  }
}

// Inspect the actual server component's JSX table content without a native compiler.
const jsxURL=pathToFileURL(require.resolve('react/jsx-runtime')).href;
const linkURL=pathToFileURL(require.resolve('next/link')).href;
// Exercise the actual route's metadata/static-params exports, including every
// specialized component's metadata constants, without loading a native compiler.
const pageImports={
  'react/jsx-runtime':jsxURL,
  'next/link':linkURL,
  'next/navigation':pathToFileURL(require.resolve('next/navigation')).href,
  '@/lib/insights':insightsURL,
};
for (const name of ['room-pricing-field-guide','room-design-guides','utilities-field-guide','maintenance-field-guide','conversion-budget-field-guide','resident-operations-field-guide','property-fit-field-guide']) {
  pageImports['../_components/'+name]=moduleURL('app/insights/_components/'+name+'.tsx',{'react/jsx-runtime':jsxURL,'next/link':linkURL,'@/lib/resident-operations-example.json':residentDataURL,'@/lib/property-fit-example.json':propertyDataURL});
}
const route=await import(moduleURL('app/insights/[slug]/page.tsx',pageImports));
assert.deepEqual(route.generateStaticParams(),insights.map(({slug})=>({slug})));
for (const item of insights) {
  const metadata=await route.generateMetadata({params:Promise.resolve({slug:item.slug})});
  assert.equal(metadata.alternates.canonical,'/insights/'+item.slug);
  assert.equal(metadata.twitter?.title,metadata.openGraph.title,'Per-article share title: '+item.slug);
  assert.equal(metadata.twitter?.description,metadata.description,'Per-article share description: '+item.slug);
  assert.equal(metadata.openGraph.description,metadata.description);
  assert.equal(metadata.openGraph.publishedTime,'2026-09-23');
  assert.equal(metadata.openGraph.modifiedTime,'2026-11-21');
  assert.equal(metadata.authors[0].name,'PadSplit Playbook');
}

const Guide=(await import(moduleURL('app/insights/_components/utilities-field-guide.tsx',{'react/jsx-runtime':jsxURL,'next/link':linkURL}))).default;
function text(node) {
  if (node==null || typeof node==='boolean') return '';
  if (typeof node==='string' || typeof node==='number') return String(node);
  if (Array.isArray(node)) return node.map(text).join(' ');
  return text(node.props?.children);
}
const content=text(Guide());
for (const value of ['$318.00','$364.80','$46.80','$342.00','$24.00','$2.12','$2.03']) assert.ok(content.includes(value),'Worked component contains checked figure '+value);
const centsA=1800*16+30*100, centsB=2080*16+32*100;
assert.equal(centsA,31800); assert.equal(centsB,36480);
assert.equal(centsB-centsA,4680);
assert.equal((2080/32)*30*16+30*100,34200);
assert.equal(34200-centsA,2400);
assert.equal(centsA/150,212);
assert.equal(Math.round(centsB/180),203);
assert.ok(content.includes('fictional') && content.includes('not utility tariffs'));
// Independent arithmetic and artifact checks for the fictional operating day.
const ResidentGuide=(await import(pageImports['../_components/resident-operations-field-guide'])).default;
const residentContent=text(ResidentGuide());
const minutes=value=>{assert.match(value,/^\d{2}:\d{2}$/);const [h,m]=value.split(':').map(Number);assert.ok(h<24&&m<60);return h*60+m;};
const issues=residentExample.issues;
assert.equal(residentExample.fictional,true);assert.equal(issues.length,6);
assert.equal(new Set(issues.map(issue=>issue.id)).size,6);
const intervals=issues.map(issue=>minutes(issue.acknowledged)-minutes(issue.received));
assert.deepEqual(intervals,[12,20,3,30,30,15]);
assert.equal(intervals.reduce((a,b)=>a+b,0),110);
assert.equal((intervals.reduce((a,b)=>a+b,0)/6).toFixed(1),'18.3');
assert.equal(intervals.filter(value=>value<=residentExample.routineAcknowledgmentTargetMinutes).length,4);
assert.equal((4/6*100).toFixed(1),'66.7');
assert.equal(issues.filter(issue=>issue.state==='Closed'&&issue.verifiedAt).length,2);
assert.equal((2/6*100).toFixed(1),'33.3');assert.equal(3/6*100,50);
assert.equal(issues.length+residentExample.additionalIncomingReports.length,9);
for(const report of residentExample.additionalIncomingReports)assert.ok(issues.some(issue=>issue.id===report.issue));
assert.equal(minutes(residentExample.lateUpdate.delivered)-minutes(residentExample.lateUpdate.promised),20);
assert.equal(12*60-Math.min(...issues.filter(issue=>!issue.verifiedAt).map(issue=>minutes(issue.received))),180);
const header=['fictional','issue_id','topic','first_report','acknowledged','accountable_role','state_at_12_00','verified_at','next_action'];
const csvCell=value=>/[",\r\n]/.test(String(value))?'"'+String(value).replaceAll('"','""')+'"':String(value);
const expectedCSV=[header,...issues.map(issue=>['true',issue.id,issue.topic,issue.received,issue.acknowledged,issue.owner,issue.state,issue.verifiedAt||'',issue.nextAction])].map(row=>row.map(csvCell).join(',')).join('\n')+'\n';
assert.equal(fs.readFileSync(path.join(root,'public/assets/fictional-resident-operations-handoff.csv'),'utf8').replaceAll('\r\n','\n'),expectedCSV);
for(const value of ['nine incoming reports','six underlying issues','66.7%','18.3 minutes','33.3%','50%','20 minutes late','three hours','fictional'])assert.ok(residentContent.includes(value),'Resident example contains checked explanation: '+value);
assert.ok(!fs.readFileSync(path.join(root,'app/insights/_components/resident-operations-field-guide.tsx'),'utf8').includes('use client'));
// The property-fit example checks arithmetic without inferring any approval.
const PropertyGuide=(await import(pageImports['../_components/property-fit-field-guide'])).default;
const propertyContent=text(PropertyGuide());
assert.equal(propertyExample.fictional,true);assert.equal(propertyExample.spaces.length,6);
assert.deepEqual(propertyExample.spaces.map(space=>space.id),['A','B','C','D','E','F']);
assert.equal(propertyExample.operatingUseApproval,'Not established for any candidate space');
assert.equal(propertyExample.spaces.filter(space=>space.status.endsWith('matched')).length,2);
assert.ok(propertyExample.spaces.every(space=>space.owner&&space.nextAction));
const area=propertyExample.areaIllustration;
assert.equal(area.widthFeet*area.lengthFeet,132);
const footprints=area.furniture.map(item=>item.widthFeet*item.lengthFeet);
assert.deepEqual(footprints,[19.5,6,8]);assert.equal(footprints.reduce((a,b)=>a+b,0),33.5);
assert.equal(area.widthFeet*area.lengthFeet-footprints.reduce((a,b)=>a+b,0),98.5);
function elements(node,type){
 if(node==null||typeof node!=='object')return [];
 if(Array.isArray(node))return node.flatMap(child=>elements(child,type));
 return [...(node.type===type?[node]:[]),...elements(node.props?.children,type)];
}
const propertyTables=elements(PropertyGuide(),'table');assert.equal(propertyTables.length,2);
const areaRows=elements(elements(propertyTables[1],'tbody')[0],'tr');
const actualAreaCells=areaRows.map(row=>text(elements(row,'td').at(-1)));
assert.deepEqual(actualAreaCells,[132,...footprints,33.5,98.5].map(value=>value+' sq ft'));
const propertyHeader=['fictional','candidate_id','label','available_record','status','accountable_role','next_action'];
const propertyCSV=[propertyHeader,...propertyExample.spaces.map(space=>['true',space.id,space.label,space.record,space.status,space.owner,space.nextAction])].map(row=>row.map(csvCell).join(',')).join('\n')+'\n';
assert.equal(fs.readFileSync(path.join(root,'public/assets/fictional-property-fit-review.csv'),'utf8').replaceAll('\r\n','\n'),propertyCSV);
for(const value of ['six candidate spaces','not six rentable rooms','132 square feet','33.5 sq ft','98.5-square-foot remainder','not a property-readiness percentage'])assert.ok(propertyContent.includes(value),'Property-fit explanation contains checked boundary: '+value);
console.log(JSON.stringify({insightConsolidation:'passed',canonicalGuides:38,permanentRedirects:62,sitemapOwners:70,relatedGuideSetsChecked:38,fictionalBillArithmetic:'passed',articleMetadataSetsChecked:38,residentIssueArithmetic:'passed',residentCsvRowsChecked:6,propertyAreaArithmetic:'passed',propertyCsvRowsChecked:6,scope:'Route/config/sitemap and server component checks; native Next build and live redirects still required.'}));
