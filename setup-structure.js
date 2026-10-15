// setup-structure.js — puts a flat GitHub upload back into its real folders.
// GitHub's phone uploader drops folder names, so lib/, public/, public/css/ ...
// all end up in the repo root. Run this BEFORE npm install:
//     node setup-structure.js && npm install --legacy-peer-deps
// It only copies; it never deletes, and it skips anything already in place.
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;
const MANIFEST = [
 {
  "dest": "docs/API.md",
  "size": 1587
 },
 {
  "dest": "docs/BOOST_API.md",
  "size": 11700
 },
 {
  "dest": "docs/BOOST_SETUP.md",
  "size": 3964
 },
 {
  "dest": "docs/CLONE-AND-SETUP.md",
  "size": 2596
 },
 {
  "dest": "docs/MARKETPLACE2_SETUP.md",
  "size": 1140
 },
 {
  "dest": "lib/boost.js",
  "size": 94289
 },
 {
  "dest": "lib/campaigns.js",
  "size": 39424
 },
 {
  "dest": "lib/countries.data.json",
  "size": 12722
 },
 {
  "dest": "lib/countries.js",
  "size": 4398
 },
 {
  "dest": "lib/engagement.js",
  "size": 20811
 },
 {
  "dest": "lib/flw-methods.js",
  "size": 3306
 },
 {
  "dest": "lib/fx.js",
  "size": 4304
 },
 {
  "dest": "lib/geo.js",
  "size": 3481
 },
 {
  "dest": "lib/global-payments.js",
  "size": 8592
 },
 {
  "dest": "lib/mailer.js",
  "size": 13091
 },
 {
  "dest": "lib/market2.js",
  "size": 24474
 },
 {
  "dest": "lib/minipdf.js",
  "size": 4971
 },
 {
  "dest": "lib/platform.js",
  "size": 40156
 },
 {
  "dest": "lib/restock-notify.js",
  "size": 6202
 },
 {
  "dest": "lib/settings.js",
  "size": 5041
 },
 {
  "dest": "public/admin.html",
  "size": 451102
 },
 {
  "dest": "public/apidocs.html",
  "size": 97711
 },
 {
  "dest": "public/boost-all-services.html",
  "size": 6772
 },
 {
  "dest": "public/boost-history.html",
  "size": 35567
 },
 {
  "dest": "public/boost-services.html",
  "size": 35218
 },
 {
  "dest": "public/boost.html",
  "size": 41532
 },
 {
  "dest": "public/buy-number.html",
  "size": 128982
 },
 {
  "dest": "public/buy-number.js",
  "size": 9578
 },
 {
  "dest": "public/chat.html",
  "size": 39492
 },
 {
  "dest": "public/css/admin-pro.css",
  "size": 6876
 },
 {
  "dest": "public/css/announce.css",
  "size": 4413
 },
 {
  "dest": "public/css/app-shell.css",
  "size": 34313
 },
 {
  "dest": "public/css/app-structure.css",
  "size": 2481
 },
 {
  "dest": "public/css/boost-redesign.css",
  "size": 717
 },
 {
  "dest": "public/css/boost-wizard.css",
  "size": 3655
 },
 {
  "dest": "public/css/boost.css",
  "size": 14127
 },
 {
  "dest": "public/css/fix-pack.css",
  "size": 2950
 },
 {
  "dest": "public/css/layout-polish.css",
  "size": 17212
 },
 {
  "dest": "public/css/marketplace-standard.css",
  "size": 5195
 },
 {
  "dest": "public/css/mobile-fix.css",
  "size": 1976
 },
 {
  "dest": "public/css/numbers-redesign.css",
  "size": 2862
 },
 {
  "dest": "public/css/pro-polish.css",
  "size": 5685
 },
 {
  "dest": "public/css/redesign.css",
  "size": 9927
 },
 {
  "dest": "public/dashboard.html",
  "size": 51889
 },
 {
  "dest": "public/data-bill.html",
  "size": 5996
 },
 {
  "dest": "public/deposit.html",
  "size": 44141
 },
 {
  "dest": "public/favicon.ico.HEIC",
  "size": 199945
 },
 {
  "dest": "public/favicon.png",
  "size": 1528
 },
 {
  "dest": "public/game.html",
  "size": 30286
 },
 {
  "dest": "public/game.js",
  "size": 38945
 },
 {
  "dest": "public/giveaway.html",
  "size": 32617
 },
 {
  "dest": "public/groups.html",
  "size": 37068
 },
 {
  "dest": "public/index.html",
  "size": 111406
 },
 {
  "dest": "public/js/announcements.js",
  "size": 10105
 },
 {
  "dest": "public/js/app-guide.js",
  "size": 9986
 },
 {
  "dest": "public/js/app-shell.js",
  "size": 19221
 },
 {
  "dest": "public/js/auth-keeper.js",
  "size": 2096
 },
 {
  "dest": "public/js/boost-history.js",
  "size": 9047
 },
 {
  "dest": "public/js/boost-services.js",
  "size": 5655
 },
 {
  "dest": "public/js/boost-wizard.js",
  "size": 6710
 },
 {
  "dest": "public/js/boost.js",
  "size": 28163
 },
 {
  "dest": "public/js/country-select.js",
  "size": 10248
 },
 {
  "dest": "public/js/dashboard.js",
  "size": 6017
 },
 {
  "dest": "public/js/dev-credit.js",
  "size": 1770
 },
 {
  "dest": "public/js/global-pay.js",
  "size": 4114
 },
 {
  "dest": "public/js/i18n.js",
  "size": 39341
 },
 {
  "dest": "public/js/live-support.js",
  "size": 5322
 },
 {
  "dest": "public/js/money.js",
  "size": 6090
 },
 {
  "dest": "public/js/wallet.js",
  "size": 14210
 },
 {
  "dest": "public/manifest.json",
  "size": 981
 },
 {
  "dest": "public/market2.js",
  "size": 8525,
  "names": [
   "public-market2.js"
  ]
 },
 {
  "dest": "public/marketplace.html",
  "size": 39372
 },
 {
  "dest": "public/marketplace.js",
  "size": 7757
 },
 {
  "dest": "public/marketplace2.html",
  "size": 38498
 },
 {
  "dest": "public/messages.html",
  "size": 36492
 },
 {
  "dest": "public/number-history.html",
  "size": 43417
 },
 {
  "dest": "public/order-status.html",
  "size": 15761
 },
 {
  "dest": "public/purchases.html",
  "size": 34009
 },
 {
  "dest": "public/referrals-fragment.html",
  "size": 3114
 },
 {
  "dest": "public/referrals.html",
  "size": 33870
 },
 {
  "dest": "public/robots.txt",
  "size": 98
 },
 {
  "dest": "public/script.js",
  "size": 237625
 },
 {
  "dest": "public/settings.html",
  "size": 44056
 },
 {
  "dest": "public/style.css",
  "size": 87946
 },
 {
  "dest": "public/support.html",
  "size": 37594
 },
 {
  "dest": "public/theme.css",
  "size": 12705
 },
 {
  "dest": "public/tools.html",
  "size": 37826
 },
 {
  "dest": "public/tools.js",
  "size": 6999
 },
 {
  "dest": "public/transactions.html",
  "size": 34577
 },
 {
  "dest": "public/virtual-account.html",
  "size": 42420
 }
];

const norm = n => n.replace(/ \(\d+\)(?=\.[^.]+$)/, '');
const rootFiles = fs.readdirSync(ROOT).filter(n => fs.statSync(path.join(ROOT, n)).isFile());
const used = new Set();
let placed = 0, skipped = 0;
const missing = [];

for (const e of MANIFEST) {
  const dest = path.join(ROOT, e.dest);
  if (fs.existsSync(dest)) { skipped++; continue; }
  const wanted = e.names || [path.basename(e.dest)];
  let cands = rootFiles.filter(n => wanted.includes(norm(n)) && !used.has(n));
  if (cands.length > 1) {
    const bySize = cands.filter(n => fs.statSync(path.join(ROOT, n)).size === e.size);
    if (bySize.length) cands = bySize;
  }
  if (!cands.length) { missing.push(e.dest); continue; }
  // when several candidates share a name, prefer the one whose size matches
  const pick = cands.find(n => fs.statSync(path.join(ROOT, n)).size === e.size) || cands[0];
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(path.join(ROOT, pick), dest);
  used.add(pick);
  placed++;
}
for (const d of ['public/uploads', 'public/files', 'public/receipts']) {
  const p = path.join(ROOT, d);
  try { if (fs.existsSync(p) && !fs.statSync(p).isDirectory()) fs.unlinkSync(p); fs.mkdirSync(p, { recursive: true }); } catch (err) {}
}
console.log('[setup-structure] placed ' + placed + ' files, ' + skipped + ' already in place');
if (missing.length) { console.log('[setup-structure] STILL MISSING (upload these to GitHub):'); missing.forEach(m => console.log('   - ' + m)); }
