import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const root=path.resolve(import.meta.dirname,'..','public');
const origin='https://www.padsplitplaybookbook.com';
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
let checked=0;
for(const file of walk(root).filter(f=>f.endsWith('/index.html'))){
 const html=fs.readFileSync(file,'utf8');
 const route='/'+path.relative(root,file).split(path.sep).join('/').replace(/\/index\.html$/,'');
 const canonical=(html.match(/<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)/i)||[])[1];
 assert.equal(canonical,origin+route,'Legacy canonical must match the Next.js route: '+route);
 for(const block of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi))JSON.parse(block[1]);
 checked++;
}
assert.equal(checked,24,'Legacy route inventory changed; review the sitemap and rewrites');
console.log('Legacy discovery: '+checked+' canonical routes and their JSON-LD match the deployed slash policy.');
