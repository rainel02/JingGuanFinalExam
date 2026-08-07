// ============ Dashboard ============
function updateDashboard(){
  const total=allQ.length, fav=S.favorites.length, wrong=S.wrongBook.length;
  const answeredIds=Object.keys(S.answered);
  const doneCount=answeredIds.length;
  const correctCount=answeredIds.filter(id=>S.answered[id].isCorrect===true).length;
  const acc=doneCount>0?Math.round(correctCount/doneCount*100)+'%':'--';
  // Countdown
  const examD=new Date(S.examDate);const today=new Date();today.setHours(0,0,0,0);
  const diff=Math.max(0,Math.ceil((examD-today)/(1000*60*60*24)));
  document.getElementById('countdown').textContent=diff>0?`距考试还有 ${diff} 天`:'考试日已到！';
  // Stat cards
  document.getElementById('stat-cards').innerHTML=[
    {label:'总题量',value:total,icon:'📚',textClass:'text-indigo-600'},
    {label:'已做题',value:doneCount,icon:'✍️',textClass:'text-blue-600'},
    {label:'正确率',value:acc,icon:'🎯',textClass:'text-green-600'},
    {label:'收藏/错题',value:`${fav}/${wrong}`,icon:'⭐',textClass:'text-amber-600'}
  ].map(c=>`<div class="stat-card bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
    <div class="text-2xl mb-1">${c.icon}</div>
    <div class="text-2xl font-bold ${c.textClass}">${c.value}</div>
    <div class="text-xs text-gray-400 mt-1">${c.label}</div></div>`).join('');
  // Exam progress - clickable to navigate to that exam's quiz
  document.getElementById('exam-progress').innerHTML=examData.map(e=>{
    const total=allQ.filter(q=>q.source===e.id).length;
    const done=allQ.filter(q=>q.source===e.id&&S.answered[q.id]).length;
    const pct=total>0?Math.round(done/total*100):0;
    return `<div class="flex items-center gap-3 text-sm cursor-pointer hover:bg-indigo-50 rounded-lg px-2 py-1.5 transition-colors" onclick="startExam('${e.id}')"><span class="w-36 text-gray-600 truncate">${e.name}</span>
      <div class="flex-1 bg-gray-100 rounded-full h-2"><div class="bg-primary rounded-full h-2" style="width:${pct}%"></div></div>
      <span class="text-gray-400 w-16 text-right">${done}/${total}</span></div>`;
  }).join('');
  // Type progress
  const types=['填空','单选','多选','判断','计算'];
  document.getElementById('type-progress').innerHTML=types.map(t=>{
    const total=allQ.filter(q=>q.type===t).length;
    const done=allQ.filter(q=>q.type===t&&S.answered[q.id]).length;
    const pct=total>0?Math.round(done/total*100):0;
    return `<div class="flex items-center gap-3 text-sm cursor-pointer hover:bg-indigo-50 rounded-lg px-2 py-1.5 transition-colors" onclick="currentMode='exam';document.getElementById('filter-type').value='${t}';applyFilter();showPage('card')"><span class="w-12 text-gray-600">${t}</span>
      <div class="flex-1 bg-gray-100 rounded-full h-2"><div class="bg-primary-light rounded-full h-2" style="width:${pct}%"></div></div>
      <span class="text-gray-400 w-16 text-right">${done}/${total}</span></div>`;
  }).join('');
  // Quick actions
  document.getElementById('quick-actions').innerHTML=[
    {label:'开始刷题',action:"currentMode='exam';applyFilter();showPage('card')",btnClass:'bg-primary text-white hover:opacity-90'},
    {label:'错题重练',action:"currentMode='wrong';applyFilter();showPage('card')",btnClass:'bg-red-50 text-red-700 hover:bg-red-100'},
    {label:'收藏复习',action:"currentMode='fav';applyFilter();showPage('card')",btnClass:'bg-yellow-50 text-yellow-700 hover:bg-yellow-100'},
    {label:'清空进度',action:"resetProgress()",btnClass:'bg-gray-50 text-gray-700 hover:bg-gray-100'}
  ].map(a=>`<button onclick="${a.action}" class="${a.btnClass} text-sm px-4 py-2 rounded-lg border border-gray-200 transition-colors">${a.label}</button>`).join('');
}
