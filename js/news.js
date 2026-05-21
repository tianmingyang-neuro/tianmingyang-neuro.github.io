function fmtDate(s) {
  const d = new Date(s);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function categoryBadge(cat) {
  const colors = {
    'research-news': 'bg-blue-50 text-blue-800 border border-blue-200',
    'lab-news':      'bg-emerald-50 text-emerald-800 border border-emerald-200',
    'blog':          'bg-sky-50 text-sky-800 border border-sky-200',
    'commentary':    'bg-rose-50 text-rose-800 border border-rose-200'
  };
  const label = (NEWS_CATEGORIES[cat] || { label: cat }).label;
  return `<span class="text-xs px-2 py-0.5 rounded ${colors[cat] || 'bg-slate-100 text-slate-700'}">${label}</span>`;
}

function postLink(p) {
  if (p.externalUrl) return p.externalUrl;
  return `post.html?id=${encodeURIComponent(p.id)}`;
}

function renderNewsList(filter = 'all') {
  const list = document.getElementById('news-list');
  if (!list) return;

  const sorted = [...NEWS_POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));
  const filtered = filter === 'all' ? sorted : sorted.filter(p => p.category === filter);

  if (filtered.length === 0) {
    list.innerHTML = `<p class="text-slate-500">No posts in this category yet.</p>`;
    return;
  }

  list.innerHTML = filtered.map(p => `
    <a href="${postLink(p)}" ${p.externalUrl ? 'target="_blank" rel="noopener"' : ''}
       class="card block p-6 md:p-8 rounded">
      <div class="flex flex-wrap items-center gap-3 mb-2 text-sm">
        <span class="text-slate-500">${fmtDate(p.date)}</span>
        ${categoryBadge(p.category)}
      </div>
      <h2 class="font-serif text-2xl mb-2 text-slate-900">${p.title}</h2>
      <p class="text-slate-600">${p.excerpt}</p>
      ${p.tags ? `<div class="flex gap-2 flex-wrap mt-4 text-xs">${p.tags.map(t => `<span class="px-2 py-1 bg-slate-100 text-slate-700 rounded">${t}</span>`).join('')}</div>` : ''}
    </a>
  `).join('');
}

function renderNewsFilters() {
  const el = document.getElementById('news-filters');
  if (!el) return;
  el.innerHTML = Object.entries(NEWS_CATEGORIES).map(([key, v]) => `
    <button data-cat="${key}" class="filter-btn text-sm px-3 py-1.5 rounded">${v.label}</button>
  `).join('');

  el.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      el.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderNewsList(btn.dataset.cat);
    });
  });
  const first = el.querySelector('.filter-btn');
  if (first) first.classList.add('active');
}

async function renderPost() {
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const target = document.getElementById('post-content');
  if (!target) return;

  const post = NEWS_POSTS.find(p => p.id === id);
  if (!post) {
    target.innerHTML = `<p class="text-slate-500">Post not found.</p>`;
    return;
  }
  document.title = `${post.title} — T. Yang Lab`;

  const header = `
    <div class="flex flex-wrap items-center gap-3 mb-4 text-sm">
      <span class="text-slate-500">${fmtDate(post.date)}</span>
      ${categoryBadge(post.category)}
    </div>
    <h1 class="font-serif text-4xl md:text-5xl leading-tight mb-6 text-slate-900">${post.title}</h1>
    <p class="text-xl text-slate-600 mb-8">${post.excerpt}</p>`;

  const tagsBlock = post.tags ? `
    <div class="flex gap-2 flex-wrap mt-10 pt-6 border-t border-slate-200 text-xs">
      ${post.tags.map(t => `<span class="px-2 py-1 bg-slate-100 text-slate-700 rounded">${t}</span>`).join('')}
    </div>` : '';

  target.innerHTML = header + `<div class="prose-post"><p class="text-slate-500 italic">Loading post…</p></div>` + tagsBlock;

  try {
    const res = await fetch(`posts/${post.id}.md`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const md = await res.text();
    const bodyHTML = marked.parse(md);
    target.innerHTML = header + `<div class="prose-post">${bodyHTML}</div>` + tagsBlock;
  } catch (err) {
    target.innerHTML = header + `
      <div class="prose-post">
        <p class="text-rose-700">Could not load <code>posts/${post.id}.md</code>.</p>
        <p class="text-slate-500 text-sm">${err.message}</p>
      </div>` + tagsBlock;
  }
}

if (document.getElementById('news-list')) {
  renderNewsFilters();
  renderNewsList('all');
}
