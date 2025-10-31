(() => {
  const $ = sel => document.querySelector(sel);
  function uid(){ return 'local-' + Math.random().toString(36).slice(2,8); }

  function readLocalProjects(){
    try { return JSON.parse(localStorage.getItem('digfunding_local_projects') || '[]'); }
    catch { return []; }
  }
  function writeLocalProjects(list){
    localStorage.setItem('digfunding_local_projects', JSON.stringify(list));
  }

  function addRewardInput(){
    const c = document.getElementById('rewardsInputs');
    const idx = c.children.length + 1;
    const wrap = document.createElement('div');
    wrap.innerHTML = `
      <div class="row">
        <label>Amount <input type="number" min="1" name="reward_amount_${idx}" placeholder="e.g., 50"/></label>
        <label>Label <input type="text" name="reward_label_${idx}" placeholder="e.g., Excavator"/></label>
      </div>
      <label>Perks <input type="text" name="reward_perks_${idx}" placeholder="Short description of perks"/></label>
    `;
    c.appendChild(wrap);
  }

  function init(){
    $('#year').textContent = new Date().getFullYear();
    $('#addReward').addEventListener('click', addRewardInput);

    $('#createForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const topics = (fd.get('topics')||'').split(',').map(s=>s.trim()).filter(Boolean);

      // collect rewards
      const rewards = [];
      const inputs = document.querySelectorAll('#rewardsInputs input[name^="reward_amount_"]');
      inputs.forEach(inp => {
        const idx = inp.name.split('_').pop();
        const amt = parseInt(fd.get('reward_amount_'+idx),10);
        const label = fd.get('reward_label_'+idx);
        const perks = fd.get('reward_perks_'+idx);
        if(amt && label && perks){
          rewards.push({ amount: amt, label, perks });
        }
      });

      const project = {
        id: uid(),
        title: fd.get('title'),
        leadResearcher: fd.get('leadResearcher'),
        organization: fd.get('organization'),
        country: fd.get('country'),
        locationDetail: fd.get('locationDetail'),
        topics,
        startDate: fd.get('startDate'),
        endDate: fd.get('endDate'),
        goal: parseInt(fd.get('goal'), 10),
        shortDescription: fd.get('shortDescription'),
        fullDescription: fd.get('fullDescription'),
        rewards
      };

      const list = readLocalProjects();
      list.push(project);
      writeLocalProjects(list);

      $('#createSuccess').classList.remove('hidden');
      e.target.reset();
      document.getElementById('rewardsInputs').innerHTML = '';
    });

    // "My Backing" visual
    const backings = (function(){
      try { return JSON.parse(localStorage.getItem('digfunding_my_backings') || '{}'); }
      catch { return {}; }
    })();
    const total = Object.values(backings).reduce((a,b)=>a+b,0);
    const link = document.getElementById('my-backing-link');
    link.textContent = total ? `My Backing (${new Intl.NumberFormat(undefined,{ style:'currency', currency:'USD', maximumFractionDigits:0 }).format(total)})` : 'My Backing';
    link.addEventListener('click', (e)=>{
      e.preventDefault();
      alert(total ? `Total pledged on this device: ${new Intl.NumberFormat(undefined,{ style:'currency', currency:'USD', maximumFractionDigits:0 }).format(total)}` : 'No pledges yet on this device.');
    });
  }
  init();
})();
