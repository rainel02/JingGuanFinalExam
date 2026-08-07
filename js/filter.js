// ============ Filter ============
function onYearFilterChange(){
  const v=document.getElementById('filter-year').value;
  if(v==='__fav__'){currentMode='fav';applyFilter();showPage('card');return}
  if(v==='__wrong__'){currentMode='wrong';applyFilter();showPage('card');return}
  currentMode='exam';applyFilter();
}

function applyFilter(){
  const year=document.getElementById('filter-year').value;
  const type=document.getElementById('filter-type').value;
  const kw=document.getElementById('search-input').value.trim().toLowerCase();
  // Sync dropdown with current mode
  if(currentMode==='fav')document.getElementById('filter-year').value='__fav__';
  else if(currentMode==='wrong')document.getElementById('filter-year').value='__wrong__';
  else if(currentMode==='exam'&&year==='__fav__'){currentMode='fav';document.getElementById('filter-year').value='__fav__'}
  else if(currentMode==='exam'&&year==='__wrong__'){currentMode='wrong';document.getElementById('filter-year').value='__wrong__'}
  let qs=[];
  if(currentMode==='fav')qs=allQ.filter(q=>S.favorites.includes(q.id));
  else if(currentMode==='wrong')qs=allQ.filter(q=>S.wrongBook.includes(q.id));
  else{qs=allQ;const yv=document.getElementById('filter-year').value;if(yv&&yv!=='__fav__'&&yv!=='__wrong__')qs=qs.filter(q=>q.source===yv)}
  if(type)qs=qs.filter(q=>q.type===type);
  if(kw)qs=qs.filter(q=>q.question.toLowerCase().includes(kw)||(q.answer&&q.answer.toLowerCase().includes(kw)));
  filteredQ=qs;
  // Auto-jump to first unanswered question
  if(currentMode==='exam'){
    const yv=document.getElementById('filter-year').value;
    if(yv&&yv!=='__fav__'&&yv!=='__wrong__'){
      const firstUnanswered=qs.findIndex(q=>!S.answered[q.id]);
      currentIdx=firstUnanswered>=0?firstUnanswered:0;
    }else{currentIdx=0}
  }else{
    currentIdx=0;
  }
  document.getElementById('filtered-count').textContent=qs.length;
  if(!document.getElementById('page-card').classList.contains('hidden'))renderQuestion();
  if(!document.getElementById('page-list').classList.contains('hidden'))renderList();
  renderQGrid();
}

function resetFilter(){
  document.getElementById('filter-year').value='';
  document.getElementById('filter-type').value='';
  document.getElementById('search-input').value='';
  currentMode='exam';
  const first=document.querySelector('#sidebar-exams .sidebar-item');
  if(first)setActiveSidebar(first);
  applyFilter();
}
