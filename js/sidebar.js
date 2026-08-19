// ============ Sidebar Collapse ============
let _sidebarCollapsed=false;

function toggleSidebar(){
  _sidebarCollapsed=!_sidebarCollapsed;
  const sb=document.getElementById('left-sidebar');
  sb.classList.toggle('collapsed',_sidebarCollapsed);
  if(_sidebarCollapsed)hideQuickNav();
  localStorage.setItem('jg_sidebar_collapsed',_sidebarCollapsed?'1':'0');
  updateExpandBtns();
}

function updateExpandBtns(){
  const filterBar=document.getElementById('filter-bar');
  const btnInBar=document.getElementById('sidebar-expand-btn');
  const btnAbs=document.getElementById('sidebar-expand-btn-abs');
  const filterHidden=filterBar.classList.contains('hidden');
  if(_sidebarCollapsed){
    btnInBar.classList.toggle('hidden',filterHidden);
    btnAbs.classList.toggle('hidden',!filterHidden);
  }else{
    btnInBar.classList.add('hidden');
    btnAbs.classList.add('hidden');
  }
}

// ============ Quick Nav Popup ============
let _quickNavTimer=null;
const QUICK_NAV_DELAY=400; // ms hover before showing

function showQuickNav(triggerBtn){
  if(!_sidebarCollapsed)return;
  clearTimeout(_quickNavTimer);
  _quickNavTimer=setTimeout(()=>{
    const popup=document.getElementById('quick-nav-popup');
    if(!popup||popup.classList.contains('show'))return;
    popup.innerHTML=buildQuickNavContent();
    popup.classList.remove('hidden');
    popup.classList.add('show');
    const btn=triggerBtn||document.getElementById('sidebar-expand-btn');
    if(btn){
      const r=btn.getBoundingClientRect();
      const topPos=r.bottom+4;
      popup.style.top=topPos+'px';
      popup.style.left=r.left+'px';
      popup.style.maxHeight='calc(100vh - '+topPos+'px - 10px)';
    }
  },QUICK_NAV_DELAY);
}

function scheduleHideQuickNav(){
  clearTimeout(_quickNavTimer);
  _quickNavTimer=setTimeout(hideQuickNav,200);
}

function cancelHideQuickNav(){clearTimeout(_quickNavTimer)}

function hideQuickNav(){
  clearTimeout(_quickNavTimer);
  const popup=document.getElementById('quick-nav-popup');
  if(popup){popup.classList.remove('show');popup.classList.add('hidden')}
}

function buildQuickNavContent(){
  let h='<div class="p-3 space-y-1">';
  h+='<div class="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-2">导航</div>';
  // Dashboard
  h+='<div class="sidebar-item rounded-lg px-3 py-2 cursor-pointer flex items-center gap-2 text-sm text-gray-600" onclick="showPage(\'dashboard\');setActiveSidebar(document.querySelector(\'#sidebar-nav .sidebar-item\'));hideQuickNav()"><svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4"/></svg><span>首页仪表盘</span></div>';
  // Exams
  h+='<div class="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-2 mt-2">题目来源</div>';
  h+='<div class="sidebar-item rounded-lg px-3 py-2 cursor-pointer flex items-center gap-2 text-sm text-gray-600" onclick="currentMode=\'exam\';document.getElementById(\'filter-year\').value=\'\';applyFilter();showPage(\'card\');hideQuickNav()"><span class="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0"></span>全部试题</div>';
  examData.forEach(e=>{
    const cnt=allQ.filter(q=>q.source===e.id).length;
    h+=`<div class="sidebar-item rounded-lg px-3 py-2 cursor-pointer flex items-center gap-2 text-sm text-gray-600 pl-6" onclick="currentMode='exam';document.getElementById('filter-year').value='${e.id}';applyFilter();showPage('card');hideQuickNav()"><span class="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0"></span><span class="flex-1 truncate">${e.name}</span><span class="tag bg-gray-100 text-gray-500">${cnt}</span></div>`;
  });
  // Personal
  h+='<div class="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-2 mt-2">个人中心</div>';
  h+='<div class="sidebar-item rounded-lg px-3 py-2 cursor-pointer flex items-center gap-2 text-sm text-gray-600" onclick="currentMode=\'fav\';applyFilter();showPage(\'card\');hideQuickNav()"><svg class="w-4 h-4 text-yellow-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg><span>收藏夹</span></div>';
  h+='<div class="sidebar-item rounded-lg px-3 py-2 cursor-pointer flex items-center gap-2 text-sm text-gray-600" onclick="currentMode=\'wrong\';applyFilter();showPage(\'card\');hideQuickNav()"><svg class="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/></svg><span>错题库</span></div>';
  h+='<div class="sidebar-item rounded-lg px-3 py-2 cursor-pointer flex items-center gap-2 text-sm text-gray-600" onclick="showPage(\'data\');hideQuickNav()"><svg class="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg><span>数据管理</span></div>';
  // Footer with exam date
  h+='<div class="mt-3 pt-3 border-t border-gray-100 px-3 space-y-1"><div class="flex items-center gap-2 text-xs text-gray-400"><span>考试日期</span><input id="exam-date-popup" type="date" class="text-xs border border-gray-200 rounded px-1.5 py-0.5 w-24" value="'+(S.examDate||'')+'" onchange="document.getElementById(\'exam-date\').value=this.value;saveExamDate();updateDashboard()"></div><div id="countdown-popup" class="text-sm font-semibold text-primary">'+document.getElementById('countdown').textContent+'</div></div>';
  h+='</div>';
  return h;
}
