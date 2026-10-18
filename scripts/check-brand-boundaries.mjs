import fs from 'node:fs';
import path from 'node:path';
const blocked = /(?:aetaxadvisors|taxstrategistdirectory|stratumcostsegregation|costsegbook|therealestatetaxbook|partnershiptaxbook|thescorptaxbook|ccorptaxbook|bnbaccelerator|mybnbdesign|investinshorttermrentals|shorttermrentalforsale|taxfreeinvestors|shorttermrentalsecrets|theshorttermrentalblog|shorttermrentalvendors)\.(?:com|co|org|io|net)/i;
let checked = 0;
function walk(dir) {
  for (const e of fs.readdirSync(dir, {withFileTypes:true})) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(?:tsx?|jsx?|html|json|xml|txt|md|mdx)$/.test(p)) {
      checked++;
      if (blocked.test(fs.readFileSync(p, 'utf8'))) throw new Error('Tax or BnB brand crossover in author asset: ' + p);
    }
  }
}
for (const dir of ['app','lib','public']) if (fs.existsSync(dir)) walk(dir);
console.log('Author/book brand boundaries passed for ' + checked + ' source files.');
