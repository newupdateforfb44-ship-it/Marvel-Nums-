/* ── Developer credit bar ────────────────────────────────────────────────────
   One small, professional strip appended to the bottom of every public page:
   who built the site, the developer's GitHub handle, and a clear line telling
   anyone who wants to BUY the website to contact the admin / owner.

   Pure presentation — it injects itself once, after the page's own footer, and
   never interferes with any existing script. */
(function () {
  'use strict';
  if (window.__klsDevCredit) return;
  window.__klsDevCredit = true;

  var GITHUB = 'BADBOI-v1';
  var GITHUB_URL = 'https://github.com/BADBOI-v1';
  var OWNER_WHATSAPP = 'https://wa.me/2349065518402';

  function mount() {
    if (document.querySelector('.kls-devbar')) return;
    var bar = document.createElement('div');
    bar.className = 'kls-devbar';
    bar.innerHTML =
      '<div class="kls-devbar-inner">' +
        '<div class="kls-devbar-main">' +
          '<span class="kls-devbar-dot" aria-hidden="true"></span>' +
          '<span class="kls-devbar-txt">Designed &amp; engineered by a professional developer — GitHub ' +
            '<a href="' + GITHUB_URL + '" target="_blank" rel="noopener" class="kls-devbar-link">@' + GITHUB + '</a>' +
          '</span>' +
        '</div>' +
        '<div class="kls-devbar-buy">' +
          'Want to buy this website? <a href="' + OWNER_WHATSAPP + '" target="_blank" rel="noopener" class="kls-devbar-cta">Contact the admin / owner</a>' +
        '</div>' +
      '</div>';
    document.body.appendChild(bar);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
