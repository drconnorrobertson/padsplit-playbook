import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import {config,sitemap,rules} from './check-utility-consolidation.mjs';
const require=createRequire(import.meta.url);
const loadCustomRoutes=require('next/dist/lib/load-custom-routes').default;
const {defaultConfig}=require('next/dist/server/config-shared');
const {buildCustomRoute}=require('next/dist/lib/build-custom-route');
const {getPathMatch}=require('next/dist/shared/lib/router/utils/path-match');
const {compile}=require('next/dist/compiled/path-to-regexp');
assert.equal(config.skipTrailingSlashRedirect,true);
const loaded=await loadCustomRoutes({...defaultConfig,...config});
assert.equal(loaded.redirects.length,90);
assert.ok(loaded.redirects.every(rule=>!rule.internal),'No earlier automatic normalization rule');
assert.deepEqual(rules.at(-1),{source:'/:path+/',destination:'/:path+',permanent:true});
const compiled=loaded.redirects.map(rule=>({rule,built:buildCustomRoute('redirect',rule)}));
function destination(urlPath){
 for(const {rule,built}of compiled){
  const params=getPathMatch(rule.source,{strict:true,regexModifier:()=>built.regex})(urlPath);
  if(params)return {target:compile(rule.destination,{validate:false})(params),status:built.statusCode,source:rule.source};
 }
 return null;
}
for(const rule of rules.slice(0,-1))for(const slash of ['', '/']){
 const d=destination(rule.source+slash);assert.equal(d.target,rule.destination);assert.equal(d.status,308);assert.equal(d.source,rule.source);
 assert.equal(destination(d.target),null,'The destination itself must not redirect');
}
for(const page of sitemap){
 const route=new URL(page.url).pathname;assert.equal(destination(route),null,'Canonical must not redirect');
 if(route!=='/')assert.equal(destination(route+'/').target,route,'Published slash alias must normalize directly');
}
const root=path.resolve(import.meta.dirname,'..');
const files=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(dir,e.name)):[path.join(dir,e.name)]);
const assets=files(path.join(root,'public')).filter(p=>!p.endsWith('/index.html'));
for(const file of assets){const route='/'+path.relative(path.join(root,'public'),file).split(path.sep).join('/');assert.equal(destination(route),null,'Asset URL must not redirect');}
assert.equal(destination('/unpublished-route'),null);
assert.equal(destination('/unpublished-route/').target,'/unpublished-route','Preserve prior slash policy without redirecting unknown paths to a published owner');
console.log(JSON.stringify({compiledNextRedirects:compiled.length,retiredFormsDirectToFinal:178,canonicalPagesWithoutRedirect:sitemap.length,publishedSlashForms:sitemap.length-1,assetsWithoutRedirect:assets.length,scope:'Uses installed Next16.3.6 route loading, regex compilation and matching; platform responses still require live verification.'}));
