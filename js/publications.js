function renderPubFilters() {
  const el = document.getElementById('pub-filters');
  el.innerHTML = Object.entries(PUB_TOPICS).map(([k, v]) => `
    <button data-topic="${k}" class="pub-filter text-sm px-3 py-1.5 border border-slate-300 hover:border-blue-700">${v}</button>
  `).join('');
  el.querySelectorAll('.pub-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      el.querySelectorAll('.pub-filter').forEach(b => b.classList.remove('bg-slate-900', 'text-white'));
      btn.classList.add('bg-slate-900', 'text-white');
      renderPubList(btn.dataset.topic);
    });
  });
  el.querySelector('.pub-filter').classList.add('bg-slate-900', 'text-white');
}

function renderPubList(topic = 'all') {
  const list = document.getElementById('pub-list');
  const sorted = [...PUBLICATIONS].sort((a, b) => b.year - a.year);
  const filtered = sorted.filter(p => {
    if (topic === 'all') return true;
    else return p.topic.includes(topic);
  });

  list.innerHTML = filtered.map(p => `
    <article class="p-6 md:p-8 hover:bg-slate-50 transition">
      <div class="flex flex-wrap gap-x-6 gap-y-2 items-baseline">
        <div class="font-serif text-2xl text-blue-700">${p.year}</div>
        <div class="flex-1 min-w-0">
          <h3 class="font-medium text-lg mb-1">
            ${p.url && p.url !== '#' ? `<a href="${p.url}" target="_blank" rel="noopener" class="hover:text-blue-700">${p.title}</a>` : p.title}
          </h3>
          <div class="text-slate-600 text-sm mb-1">${p.authors}</div>
          <div class="text-slate-500 text-sm italic">${p.journal}${p.journalType === '' ? '': ' · <span class="not-italic text-blue-700"> '+p.journalType+' </span>' }</div>
        </div>
      </div>
    </article>
  `).join('') || `<p class="p-8 text-slate-500">No publications match this filter.</p>`;
}

renderPubFilters();
renderPubList('all');
