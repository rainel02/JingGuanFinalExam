// ============ List View ============
function renderList(){
  const body=document.getElementById('question-list-body');
  if(filteredQ.length===0){body.innerHTML='<div class="text-center py-8 text-gray-400 text-sm">暂无题目</div>';return}
  body.innerHTML=filteredQ.map((q,i)=>{
    const r=S.answered[q.id];
    const fav=S.favorites.includes(q.id);
    const wrong=S.wrongBook.includes(q.id);
    const isCurrent=i===currentIdx;
    const trunc=q.question.substring(0,80)+(q.question.length>80?'...':'');
    const typeColors={填空:'bg-blue-100 text-blue-700',单选:'bg-indigo-100 text-indigo-700',多选:'bg-purple-100 text-purple-700',判断:'bg-amber-100 text-amber-700',计算:'bg-green-100 text-green-700'};
    const tc=typeColors[q.type]||'bg-gray-100 text-gray-700';
    const statusIcons=(r?(r.isCorrect===true?'✅':r.isCorrect===false?'❌':'📖'):'')+(fav?'⭐':'');
    return `<div class="q-row flex items-center px-5 py-2.5 cursor-pointer text-sm ${isCurrent?'current':''}" onclick="jumpToQ(${i})">
      <span class="w-8 text-gray-400 text-xs">${i+1}</span>
      <span class="w-16"><span class="tag ${tc}">${q.type}</span></span>
      <span class="flex-1 text-gray-700 truncate">${trunc.replace(/</g,'&lt;')}</span>
      <span class="w-10 text-center text-sm">${statusIcons}</span>
      <span class="w-20 text-center"><button class="text-xs text-primary hover:underline" onclick="event.stopPropagation();jumpToQ(${i})">查看</button></span>
    </div>`;
  }).join('');
}

function jumpToQ(idx){currentIdx=idx;showPage('card');if(_qNavFloatExpanded){_qNavFloatExpanded=false;updateQNavFloatUI()}}

function scrollListToCurrent(){
  const row=document.querySelector('#question-list-body .q-row.current');
  if(row)row.scrollIntoView({block:'nearest',behavior:'smooth'});
}

function updateListHighlight(){
  document.querySelectorAll('#question-list-body .q-row').forEach((r,i)=>{
    r.classList.toggle('current',i===currentIdx);
  });
}
