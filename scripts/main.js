(() => {
  const $ = sel => document.querySelector(sel);
  const $$ = sel => Array.from(document.querySelectorAll(sel));

  const state = {
    projects: [],
    localProjects: [],
    q: '',
    topics: new Set(),
    countries: new Set(),
    start: null,
    end: null,
    sort: 'relevance'
  };

  function formatMoney(n){
    return new Intl.NumberFormat(undefined,{ style:'currency', currency:'USD', maximumFractionDigits:0 }).format(n);
  }

  function byId(id){ return state.projects.find(p => p.id === id) }

  function readLocalProjects(){
    try{
      const raw = localStorage.getItem('digfunding_local_projects');
      if(!raw) return [];
      const list = JSON.parse(raw);
      // Normalize objects to match schema
      return list.map((p,i) => ({
        id: p.id || 'local-' + (p.title||'p').toLowerCase().replace(/[^a-z0-9]+/g,'-') + '-' + i,
        title: p.title,
        shortDescription: p.shortDescription || p.title,
        fullDescription: p.fullDescription || p.shortDescription || '',
        country: p.country,
        locationDetail: p.locationDetail,
        topics: p.topics,
        startDate: p.startDate,
        endDate: p.endDate,
        leadResearcher: p.leadResearcher,
        organization: p.organization,
        coverImage: 'assets/covers/local-default.svg',
        profileImage: 'assets/profiles/local-default.svg',
        fundingGoalUSD: p.goal,
        amountRaisedUSD: 0,
        rewards: p.rewards && p.rewards.length ? p.rewards : [
          { amount: 10, label: 'Trailhead', perks: 'Access to updates' },
          { amount: 40, label: 'Surveyor', perks: 'Video diary + updates' },
          { amount: 100, label: 'Excavator', perks: 'Digital poster + prior' }
        ],
        exclusiveUpdates: [
          { title:'Welcome!', content:'Thanks for backing this locally created project.', locked:false, date: new Date().toISOString().slice(0,10) }
        ]
      }));
    }catch(e){ console.warn('local projects parse failed',e); return [] }
  }

  function enrich(p){
    const daysLeft = Math.max(0, Math.ceil((new Date(p.endDate) - new Date()) / (1000*60*60*24)));
    const pledgedExtra = readMyBackings()[p.id] || 0;
    const raised = (p.amountRaisedUSD || 0) + pledgedExtra;
    const pct = Math.max(0, Math.min(100, Math.round(raised / p.fundingGoalUSD * 100)));
    return { ...p, daysLeft, raised, pct }
  }

  function readMyBackings(){
    try { return JSON.parse(localStorage.getItem('digfunding_my_backings') || '{}'); }
    catch { return {}; }
  }

  function unique(sortedArray){
    return Array.from(new Set(sortedArray));
  }

  function populateFilters(projects){
    const topicSet = new Set();
    const countrySet = new Set();
    projects.forEach(p => { (p.topics||[]).forEach(t => topicSet.add(t)); countrySet.add(p.country) });
    const topicSel = $('#topic');
    const locSel = $('#location');
    topicSel.innerHTML = unique(Array.from(topicSet)).sort().map(t=>`<option value="${t}">${t}</option>`).join('');
    locSel.innerHTML = unique(Array.from(countrySet)).sort().map(c=>`<option value="${c}">${c}</option>`).join('');
  }

  function matches(p){
    // text
    const q = state.q.trim().toLowerCase();
    if(q){
      const hay = [p.title, p.leadResearcher, p.organization].join(' ').toLowerCase();
      if(!hay.includes(q)) return false;
    }
    // topic
    if(state.topics.size){
      if(!(p.topics||[]).some(t => state.topics.has(t))) return false;
    }
    // country
    if(state.countries.size){
      if(!state.countries.has(p.country)) return false;
    }
    // dates overlap with [start, end]
    if(state.start || state.end){
      const a = new Date(p.startDate);
      const b = new Date(p.endDate);
      if(state.start && b < state.start) return false;
      if(state.end && a > state.end) return false;
    }
    return true;
  }

  function sortProjects(a,b){
    switch(state.sort){
      case 'newest':
        return new Date(b.startDate) - new Date(a.startDate);
      case 'endingSoon':
        return new Date(a.endDate) - new Date(b.endDate);
      case 'mostFunded':
        return b.raised/b.fundingGoalUSD - a.raised/a.fundingGoalUSD;
      default: // relevance (heuristic)
        let score = 0;
        const q = state.q.trim().toLowerCase();
        if(q){
          if(a.title.toLowerCase().includes(q)) score -= 1;
          if(b.title.toLowerCase().includes(q)) score += 1;
        }
        return score;
    }
  }

  function renderCards(list){
    const el = $('#cards');
    el.setAttribute('aria-busy','true');
    el.innerHTML = list.map(p => {
      const topics = (p.topics||[]).slice(0,3).map(t=>`<span class="tag">${t}</span>`).join('');
      return `
        <article class="card">
          <img class="cover" src="${p.coverImage}" alt="Cover for ${p.title}"/>
          <div class="pad">
            <h3>${p.title}</h3>
            <div class="meta-row"><img src="assets/icons/pin.svg" width="16" height="16" alt=""/> ${p.locationDetail}, ${p.country}</div>
            <div class="tags">${topics}</div>
            <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${p.pct}"><div class="bar" style="width:${p.pct}%"></div></div>
            <div class="progress-meta"><div>${formatMoney(p.raised)}</div><div>of ${formatMoney(p.fundingGoalUSD)}</div></div>
          </div>
          <div class="footer">
            <div class="meta-row"><img class="avatar" src="${p.profileImage}" alt="Profile"/> <span>${p.leadResearcher}</span></div>
            <a class="btn" href="project.html?id=${encodeURIComponent(p.id)}">View</a>
          </div>
        </article>
      `;
    }).join('');
    el.removeAttribute('aria-busy');
    $('#results-stats').textContent = `${list.length} project${list.length===1?'':'s'} shown`;
  }

  function readSelections(selectEl){
    return Array.from(selectEl.selectedOptions).map(o=>o.value);
  }

  function applyFilters(){
    const enrichAll = state.projects.map(enrich);
    const filtered = enrichAll.filter(matches).sort(sortProjects);
    renderCards(filtered);
  }

  function initEvents(){
    $('#year').textContent = new Date().getFullYear();

    $('#q').addEventListener('input', e => { state.q = e.target.value; applyFilters(); });
    $('#topic').addEventListener('change', e => {
      state.topics = new Set(readSelections(e.target));
      applyFilters();
    });
    $('#location').addEventListener('change', e => {
      state.countries = new Set(readSelections(e.target));
      applyFilters();
    });
    $('#start').addEventListener('change', e => {
      state.start = e.target.value ? new Date(e.target.value) : null; applyFilters();
    });
    $('#end').addEventListener('change', e => {
      state.end = e.target.value ? new Date(e.target.value) : null; applyFilters();
    });
    $('#sort').addEventListener('change', e => { state.sort = e.target.value; applyFilters(); });

    $('#clear').addEventListener('click', () => {
      state.q=''; state.topics.clear(); state.countries.clear(); state.start=null; state.end=null; state.sort='relevance';
      $('#q').value=''; $$('#topic option').forEach(o=>o.selected=false); $$('#location option').forEach(o=>o.selected=false);
      $('#start').value=''; $('#end').value=''; $('#sort').value='relevance';
      applyFilters();
    });

    // "My Backing" link shows total backed
    const backings = readMyBackings();
    const total = Object.values(backings).reduce((a,b)=>a+b,0);
    const link = $('#my-backing-link');
    link.textContent = total ? `My Backing (${formatMoney(total)})` : 'My Backing';
    link.addEventListener('click', (e)=>{
      e.preventDefault();
      alert(total ? `Total pledged on this device: ${formatMoney(total)}` : 'No pledges yet on this device.');
    });
  }

  async function init(){
    initEvents();
    // Load from JSON
    try{
      const res = await fetch('data/projects.json', { cache: 'no-store' });
      const data = await res.json();
      const fromJson = data.projects || [];
      // Local projects
      const local = readLocalProjects();
      state.projects = [...fromJson, ...local];
      // Ensure placeholder assets exist for locals
      ensureLocalSVGs();
      populateFilters(state.projects);
      applyFilters();
    }catch(e){
      console.error(e);
      $('#cards').innerHTML = '<p>Failed to load projects.</p>';
    }
  }

  function ensureLocalSVGs(){
    // Fallback inline SVGs for local items (since we can't write files from the browser)
    const cover = 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="320" height="180" viewBox="0 0 320 180"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8E7D5E"/><stop offset="1" stop-color="#A4572B"/></linearGradient></defs><rect width="320" height="180" fill="url(#g)"/><text x="16" y="36" font-size="18" fill="#F5E6C8" font-family="Georgia,serif">Your Local Project</text></svg>`);
    const avatar = 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 100 100"><rect width="100" height="100" fill="#A67C52"/><g transform="translate(50,58)" fill="#2E4E3F"><circle cx="0" cy="-18" r="12"/><path d="M-22 18c4-14 40-14 44 0v10h-44z"/></g></svg>`);
    state.projects = state.projects.map(p => p.id.startsWith('local-') ? { ...p, coverImage: cover, profileImage: avatar } : p);
  }

  init();
})();
