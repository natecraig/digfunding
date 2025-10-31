(() => {
  const $ = sel => document.querySelector(sel);
  const $$ = sel => Array.from(document.querySelectorAll(sel));

  function formatMoney(n){
    return new Intl.NumberFormat(undefined,{ style:'currency', currency:'USD', maximumFractionDigits:0 }).format(n);
  }
  function qs(key){
    const u = new URL(location.href);
    return u.searchParams.get(key);
  }
  function readMyBackings(){
    try { return JSON.parse(localStorage.getItem('digfunding_my_backings') || '{}'); }
    catch { return {}; }
  }
  function writeMyBackings(obj){
    localStorage.setItem('digfunding_my_backings', JSON.stringify(obj));
  }

  async function loadProjects(){
    const res = await fetch('data/projects.json', { cache: 'no-store' });
    const data = await res.json();
    const locals = (function(){
      try{
        const raw = localStorage.getItem('digfunding_local_projects');
        if(!raw) return [];
        const list = JSON.parse(raw);
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
          coverImage: 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="320" height="180" viewBox="0 0 320 180"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8E7D5E"/><stop offset="1" stop-color="#A4572B"/></linearGradient></defs><rect width="320" height="180" fill="url(#g)"/><text x="16" y="36" font-size="18" fill="#F5E6C8" font-family="Georgia,serif">Your Local Project</text></svg>`),
          profileImage: 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 100 100"><rect width="100" height="100" fill="#A67C52"/><g transform="translate(50,58)" fill="#2E4E3F"><circle cx="0" cy="-18" r="12"/><path d="M-22 18c4-14 40-14 44 0v10h-44z"/></g></svg>`),
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
      }catch(e){ return [] }
    })();
    return [...(data.projects||[]), ...locals];
  }

  function enrich(p){
    const backings = readMyBackings();
    const pledgedExtra = backings[p.id] || 0;
    const raised = (p.amountRaisedUSD || 0) + pledgedExtra;
    const pct = Math.max(0, Math.min(100, Math.round(raised / p.fundingGoalUSD * 100)));
    const daysLeft = Math.max(0, Math.ceil((new Date(p.endDate) - new Date()) / (1000*60*60*24)));
    return { ...p, raised, pct, daysLeft };
  }

  function render(p){
    $('#coverImage').src = p.coverImage;
    $('#title').textContent = p.title;
    $('#subtitle').textContent = `${p.locationDetail}, ${p.country}`;
    $('#profileImage').src = p.profileImage;
    $('#leadResearcher').textContent = p.leadResearcher;
    $('#organization').textContent = p.organization;
    $('#fullDescription').innerHTML = `<p>${p.fullDescription}</p>`;
    $('#tags').innerHTML = (p.topics||[]).map(t=>`<span class="tag">${t}</span>`).join('');
    $('#location').textContent = `${p.locationDetail}, ${p.country}`;
    $('#dates').textContent = `${new Date(p.startDate).toLocaleDateString()} – ${new Date(p.endDate).toLocaleDateString()}`;
    $('#progressBar').style.width = p.pct + '%';
    $('#amountRaised').textContent = formatMoney(p.raised);
    $('#fundingGoal').textContent = formatMoney(p.fundingGoalUSD);
    $('#daysLeft').textContent = `${p.daysLeft} day${p.daysLeft===1?'':'s'} to go`;

    $('#rewardsList').innerHTML = (p.rewards||[]).map(r => `
      <div class="reward">
        <div><span class="amt">${formatMoney(r.amount)}</span> — <strong>${r.label}</strong><br/><span class="muted">${r.perks}</span></div>
        <button class="btn pledge-btn" data-amt="${r.amount}">Select</button>
      </div>`).join('');

    const backings = readMyBackings();
    const isBacker = !!backings[p.id];

    const updatesHTML = (p.exclusiveUpdates||[]).map(u => {
      const locked = u.locked && !isBacker;
      const lockIcon = locked ? `<img src="assets/icons/lock.svg" width="14" height="14" alt=""/> ` : '';
      return `<article class="update">
        <h4>${lockIcon}${u.title} <span class="muted">(${new Date(u.date).toLocaleDateString()})</span></h4>
        ${locked ? '<p class="muted">Exclusive for backers</p>' : `<p>${u.content}</p>`}
      </article>`;
    }).join('');
    $('#updates').innerHTML = updatesHTML;
    $('#lockHint').classList.toggle('hidden', isBacker);
  }

  function openModal(){ $('#pledgeModal').classList.remove('hidden'); }
  function closeModal(){ $('#pledgeModal').classList.add('hidden'); }

  function initPledgeHandlers(p){
    $('#backBtn').addEventListener('click', openModal);
    $('#closeModal').addEventListener('click', closeModal);
    $$('#rewardsList .pledge-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        $('#customAmount').value = btn.getAttribute('data-amt');
        openModal();
      });
    });
    $('#confirmPledge').addEventListener('click', () => {
      let amt = parseInt($('#customAmount').value, 10);
      if(!(amt>0)) { alert('Enter a valid amount'); return; }
      const backings = readMyBackings();
      backings[p.id] = (backings[p.id]||0) + amt;
      writeMyBackings(backings);
      closeModal();
      location.reload();
    });
  }

  async function init(){
    $('#year').textContent = new Date().getFullYear();
    const id = qs('id');
    const all = await loadProjects();
    const target = all.find(x => x.id === id) || all[0];
    if(!target){ document.body.innerHTML = '<p>Project not found.</p>'; return; }
    const enriched = enrich(target);
    render(enriched);
    initPledgeHandlers(enriched);

    // "My Backing" link
    const backings = readMyBackings();
    const total = Object.values(backings).reduce((a,b)=>a+b,0);
    const link = $('#my-backing-link');
    link.textContent = total ? `My Backing (${formatMoney(total)})` : 'My Backing';
    link.addEventListener('click', (e)=>{
      e.preventDefault();
      alert(total ? `Total pledged on this device: ${formatMoney(total)}` : 'No pledges yet on this device.');
    });
  }
  init();
})();
