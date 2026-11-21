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
const insightsURL = moduleURL('lib/insights.ts',{'./utility-canonical':canonicalURL,'./maintenance-canonical':maintenanceURL,'./pricing-canonical':pricingURL,'./design-canonical':designURL});
const {insights,getRelatedInsights} = await import(insightsURL);
const config = (await import(moduleURL('next.config.ts',{'./lib/utility-canonical':canonicalURL,'./lib/maintenance-canonical':maintenanceURL,'./lib/pricing-canonical':pricingURL,'./lib/design-canonical':designURL}))).default;
const sitemap = (await import(moduleURL('app/sitemap.ts',{'@/lib/insights':insightsURL}))).default();
const clusters=[{slug:canonical.utilityCanonicalSlug,redirects:canonical.utilityRedirectSlugs,prefix:'utilities-'},{slug:maintenance.maintenanceCanonicalSlug,redirects:maintenance.maintenanceRedirectSlugs,prefix:'maintenance-'},{slug:pricing.pricingCanonicalSlug,redirects:pricing.pricingRedirectSlugs,prefix:'room-pricing-'},{slug:design.designCanonicalSlug,redirects:design.designRedirectSlugs,prefix:'room-design-',retainedCount:2,expectedRedirects:8}];
const rules = await config.redirects();
assert.equal(insights.length,65);
assert.equal(rules.length,35);
assert.equal(new Set(rules.map(rule=>rule.source)).size,35);
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
assert.equal(sitemap.length,97);
assert.equal(new Set(sitemap.map(item=>item.url)).size,97);
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
console.log(JSON.stringify({insightConsolidation:'passed',canonicalGuides:65,permanentRedirects:35,sitemapOwners:97,relatedGuideSetsChecked:65,fictionalBillArithmetic:'passed',scope:'Route/config/sitemap and server component checks; native Next build and live redirects still required.'}));
