(function () {
  const path = location.pathname.split('/').pop() || 'index.html';
  const links = [
    { href: 'index.html',        label: 'Home' },
    { href: 'research.html',     label: 'Research' },
    { href: 'news.html',         label: 'News & Blog' },
    { href: 'publications.html', label: 'Publications' },
    { href: 'people.html',       label: 'People' },
    { href: 'contact.html',      label: 'Contact' },
  ];

  const navHTML = `
    <nav class="border-b border-slate-200 bg-slate-50/90 backdrop-blur sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <a href="index.html" class="font-serif text-xl">Neural Mechanisms of Decision Making and Cognition</a>
        <ul class="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          ${links.map(l => `
            <li><a href="${l.href}"
              class="${path === l.href ? 'text-blue-700 border-b border-blue-700' : 'text-slate-700 hover:text-blue-700'} pb-0.5">
              ${l.label}
            </a></li>`).join('')}
        </ul>
      </div>
    </nav>`;

  const footerHTML = `
    <footer class="border-t border-slate-200 mt-16">
      <div class="max-w-6xl mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-4 text-sm text-slate-500">
        <div>© ${new Date().getFullYear()} Lab of Neural Mechanisms of Decision Making and Cognition </div>
        <div class="font-serif italic">"Γνῶθι σεαυτόν — neuron by neuron"</div>
      </div>
    </footer>`;

  const navEl = document.getElementById('site-nav');
  const footEl = document.getElementById('site-footer');
  if (navEl) navEl.innerHTML = navHTML;
  if (footEl) footEl.innerHTML = footerHTML;
})();
