// ============ Pages ============
function showPage(name){
  ['dashboard','card','list','data'].forEach(p=>{
    const el=document.getElementById('page-'+p);
    if(el)el.classList.toggle('hidden',p!==name);
  });
  document.getElementById('empty-state').classList.add('hidden');
  // Hide filter bar on data page
  document.getElementById('filter-bar').classList.toggle('hidden',name==='data');
  updateExpandBtns();
  document.getElementById('view-card-btn').classList.toggle('bg-white',name==='card');
  document.getElementById('view-card-btn').classList.toggle('shadow-sm',name==='card');
  document.getElementById('view-card-btn').classList.toggle('text-primary',name==='card');
  document.getElementById('view-card-btn').classList.toggle('text-gray-500',name!=='card');
  document.getElementById('view-list-btn').classList.toggle('bg-white',name==='list');
  document.getElementById('view-list-btn').classList.toggle('shadow-sm',name==='list');
  document.getElementById('view-list-btn').classList.toggle('text-primary',name==='list');
  document.getElementById('view-list-btn').classList.toggle('text-gray-500',name!=='list');
  if(name==='dashboard')updateDashboard();
  if(name==='list')renderList();
  if(name==='card')renderQuestion();
  if(name==='data')initDataPage();
  checkQNavResponsive();
}

// ============ Init ============
function init(){
  document.getElementById('exam-date').value=S.examDate||'2027-01-15';
  // Restore sidebar state
  if(localStorage.getItem('jg_sidebar_collapsed')==='1'){_sidebarCollapsed=true;document.getElementById('left-sidebar').classList.add('collapsed');updateExpandBtns()}
  // Init sidebar exam items
  const sb=document.getElementById('sidebar-exams');
  const allItem=document.createElement('div');
  allItem.className='sidebar-item rounded-lg px-3 py-2.5 cursor-pointer flex items-center gap-2 text-sm';
  allItem.innerHTML='<svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg><span class="sidebar-label">全部试题</span>';
  allItem.dataset.examId='all';
  allItem.onclick=()=>{currentMode='exam';document.getElementById('filter-year').value='';setActiveSidebar(allItem);applyFilter();showPage('card')};
  sb.appendChild(allItem);
  examData.forEach(e=>{
    const it=document.createElement('div');
    it.className='sidebar-item rounded-lg px-3 py-2.5 cursor-pointer flex items-center gap-2 text-sm pl-6';
    const cnt=allQ.filter(q=>q.source===e.id).length;
    it.innerHTML=`<span class="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0"></span><span class="flex-1 truncate sidebar-label">${e.name} <span class="tag bg-gray-100 text-gray-500">${cnt}</span></span><button class="info-btn text-gray-400 hover:text-primary p-0.5 rounded transition sidebar-label" onclick="event.stopPropagation();showExamModal('${e.id}')" title="试卷详情"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></button>`;
    it.dataset.examId=e.id;
    it.onclick=()=>{currentMode='exam';document.getElementById('filter-year').value=e.id;setActiveSidebar(it);applyFilter();showPage('card')};
    sb.appendChild(it);
  });
  const ysel=document.getElementById('filter-year');
  examData.forEach(e=>{const o=document.createElement('option');o.value=e.id;o.textContent=e.name;ysel.appendChild(o)});
  updateBadges();updateDashboard();
  showPage('dashboard');
  checkQNavResponsive();
}

function setActiveSidebar(el){document.querySelectorAll('.sidebar-item').forEach(i=>i.classList.remove('active'));el.classList.add('active')}

function saveExamDate(){S.examDate=document.getElementById('exam-date').value;saveState(S)}
