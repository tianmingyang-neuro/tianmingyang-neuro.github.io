function renderPI() {
  document.getElementById('pi-block').innerHTML = `
    <div class="bg-white border border-slate-200 p-8 flex flex-col md:flex-row gap-6">
      <div class="w-24 h-24 rounded-full bg-slate-900 text-slate-50 flex items-center justify-center font-serif text-2xl shrink-0">
        ${PI.initials}
      </div>
      <div>
        <h3 class="font-serif text-2xl mb-1">${PI.name}</h3>
        <div class="text-blue-700 text-sm uppercase tracking-wider mb-3">${PI.role}</div>
        <p class="text-slate-600 leading-relaxed">${PI.bio}</p>
      </div>
    </div>`;
}

function renderMembers() {
  document.getElementById('members-grid').innerHTML = MEMBERS.map(m => `
    <div class="bg-white border border-slate-200 p-6">
      <div class="w-16 h-16 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-serif text-lg mb-4">${m.initials}</div>
      <div class="font-serif text-lg">${m.name}</div>
      <div class="text-blue-700 text-xs uppercase tracking-wider mb-2">${m.role}</div>
      ${m.blurb ? `<p class="text-slate-600 text-sm">${m.blurb}</p>` : ''}
      ${m.email ? `<a href="mailto:${m.email}" class="text-sm text-slate-500 hover:text-blue-700 mt-2 block">${m.email}</a>` : ''}
    </div>
  `).join('');
}

function renderAlumni() {
  document.getElementById('alumni-list').innerHTML = ALUMNI.map(a => `
    <div class="flex flex-wrap gap-x-4 gap-y-1 py-2 border-b border-slate-100">
      <span class="font-medium">${a.name}</span>
      <span class="text-slate-500 text-sm">${a.year}</span>
      <span class="text-slate-500 text-sm"> ${a.destination === '' ? '': ' '+a.destination}</span>
    </div>
  `).join('');
}

renderPI();
renderMembers();
renderAlumni();
