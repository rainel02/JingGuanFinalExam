// ============ Responsive Q-Nav Float ============
let _qNavFloatExpanded=false;
let _qNavAnimating=false;
const Q_NAV_BREAKPOINT=900; // px

function toggleQNavFloat(){
  if(_qNavAnimating)return;
  _qNavFloatExpanded=!_qNavFloatExpanded;
  if(_qNavFloatExpanded)_qNavAnimating=true;
  updateQNavFloatUI();
  if(_qNavFloatExpanded)setTimeout(()=>{_qNavAnimating=false},400);
}

function updateQNavFloatUI(){
  const fl=document.getElementById('q-nav-float');
  if(!fl)return;
  if(_qNavFloatExpanded){
    // Collapse the minimized circle, then expand the panel
    fl.classList.add('anim-collapse');
    setTimeout(()=>{
      fl.className='expanded bg-white border border-gray-200 shadow-xl overflow-hidden flex flex-col anim-expand';
      fl.onclick=null;
      fl.innerHTML=`
      <div class="flex items-center justify-between px-3 py-2 border-b border-gray-100 bg-gray-50 flex-shrink-0">
        <h3 class="text-xs font-semibold text-gray-600">题目导航</h3>
        <button onclick="event.stopPropagation();toggleQNavFloat()" class="text-gray-400 hover:text-gray-600 p-0.5"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button>
      </div>
      <div class="flex items-center gap-2 px-3 py-1.5 text-[10px] text-gray-400 flex-shrink-0">
        <span class="flex items-center gap-1"><span class="w-3 h-3 rounded-sm bg-green-500 inline-block"></span>对</span>
        <span class="flex items-center gap-1"><span class="w-3 h-3 rounded-sm bg-red-500 inline-block"></span>错</span>
        <span class="flex items-center gap-1"><span class="w-3 h-3 rounded-sm bg-gray-200 inline-block"></span>未做</span>
      </div>
      <div id="q-grid-float" class="overflow-y-auto scrollbar-thin px-2 py-1 flex-1"><div id="q-grid-float-inner" class="grid grid-cols-4 gap-x-2 gap-y-2"></div></div>`;
      // Copy grid content
      const src=document.getElementById('q-grid-inner');
      const dst=document.getElementById('q-grid-float-inner');
      if(src&&dst)dst.innerHTML=src.innerHTML;
    },160);
  }else{
    // Collapse panel, then show minimized circle
    fl.classList.add('anim-collapse');
    setTimeout(()=>{
      fl.className='minimized bg-primary text-white shadow-lg cursor-pointer flex items-center justify-center anim-expand';
      fl.onclick=toggleQNavFloat;
      fl.innerHTML='<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>';
    },160);
  }
}

function checkQNavResponsive(){
  const isCard=!document.getElementById('page-card').classList.contains('hidden');
  const staticNav=document.getElementById('q-nav-static');
  const floatNav=document.getElementById('q-nav-float');
  if(!isCard){floatNav.classList.add('hidden');return}
  const w=window.innerWidth;
  const narrow=w<Q_NAV_BREAKPOINT;
  if(narrow){
    staticNav.classList.add('hidden');
    floatNav.classList.remove('hidden');
    if(!_qNavFloatExpanded)updateQNavFloatUI();
  }else{
    staticNav.classList.remove('hidden');
    floatNav.classList.add('hidden');
    _qNavFloatExpanded=false;
  }
}
window.addEventListener('resize',checkQNavResponsive);

// ============ Right Sidebar: Question Grid ============
function renderQGrid(){
  const grid=document.getElementById('q-grid');
  if(filteredQ.length===0){grid.innerHTML='<div class="text-center text-xs text-gray-400 py-4">暂无题目</div>';return}
  let inner=document.getElementById('q-grid-inner');
  if(!inner){
    inner=document.createElement('div');
    inner.id='q-grid-inner';
    inner.className='grid grid-cols-4 gap-x-2 gap-y-3';
    grid.appendChild(inner);
  }
  inner.innerHTML=filteredQ.map((q,i)=>{
    const r=S.answered[q.id];
    let cls='bg-gray-200 text-gray-500'; // unanswered
    if(r){
      if(r.isCorrect===true)cls='bg-green-500 text-white';
      else if(r.isCorrect===false)cls='bg-red-500 text-white';
      else cls='bg-gray-400 text-white'; // viewed answer
    }
    const isCurrent=i===currentIdx;
    return `<div class="q-cell ${cls} ${isCurrent?'current':''} w-8 h-8 rounded flex items-center justify-center text-[10px] font-semibold" onclick="jumpToQ(${i})" title="${q.type} #${i+1}">${i+1}</div>`;
  }).join('');
  // Sync float grid
  const fInner=document.getElementById('q-grid-float-inner');
  if(fInner&&_qNavFloatExpanded)fInner.innerHTML=inner.innerHTML;
}
