// ============ Card View ============
function renderQuestion(){
  const area=document.getElementById('page-card');
  const empty=document.getElementById('empty-state');
  if(filteredQ.length===0){area.classList.add('hidden');empty.classList.remove('hidden');return}
  area.classList.remove('hidden');empty.classList.add('hidden');
  const q=filteredQ[currentIdx];
  document.getElementById('q-type-badge').textContent=q.type;
  document.getElementById('q-source-badge').textContent=examData.find(e=>e.id===q.source)?.name||q.source;
  document.getElementById('q-index').textContent=`第 ${currentIdx+1} / ${filteredQ.length} 题`;
  const qText=document.getElementById('q-text');
  qText.textContent=q.question;
  // Render KaTeX
  try{renderMathInElement(qText,{delimiters:[{left:'\\(',right:'\\)',display:false},{left:'\\[',right:'\\]',display:true}],throwOnError:false})}catch(e){}
  // Images (url array)
  const imgArea=document.getElementById('q-image');
  const urls=q.url||[];
  if(urls.length>0){imgArea.classList.remove('hidden');imgArea.innerHTML=urls.map(u=>`<img src="${u}" class="max-w-full rounded-lg border border-gray-100 mb-2" alt="题目图片" onerror="this.style.display='none'">`).join('')}
  else{imgArea.classList.add('hidden');imgArea.innerHTML=''}
  // Reset all interaction areas
  ['q-options','q-fill','q-calc','q-submit','q-result','q-last-record','q-review-actions'].forEach(id=>document.getElementById(id).classList.add('hidden'));
  document.getElementById('q-options').innerHTML='';
  document.getElementById('fill-input').value='';

  const prev=S.answered[q.id];
  const isReviewMode=(currentMode==='fav'||currentMode==='wrong');

  if(prev&&!isReviewMode){
    if(q.type==='单选'||q.type==='多选'||q.type==='判断'){
      renderOptionsWithResult(q,prev);
    }
    showLastRecord(q,prev);
    document.getElementById('q-review-actions').classList.remove('hidden');
    updateFavWrongBtns2(q);
  }else{
    if(q.type==='单选'||q.type==='多选'||q.type==='判断')renderOptions(q);
    else if(q.type==='填空'){document.getElementById('q-fill').classList.remove('hidden');document.getElementById('q-submit').classList.remove('hidden');setTimeout(()=>document.getElementById('fill-input').focus(),50)}
    else if(q.type==='计算')document.getElementById('q-calc').classList.remove('hidden');
  }
  // Nav
  document.getElementById('current-idx').textContent=currentIdx+1;
  document.getElementById('total-idx').textContent=filteredQ.length;
  document.getElementById('prev-btn').disabled=currentIdx===0;
  document.getElementById('next-btn').disabled=currentIdx===filteredQ.length-1;
  document.getElementById('prev-btn').classList.toggle('opacity-30',currentIdx===0);
  document.getElementById('next-btn').classList.toggle('opacity-30',currentIdx===filteredQ.length-1);
  renderQGrid();
}

// Render options for a fresh question (no result shown)
function renderOptions(q){
  const c=document.getElementById('q-options');c.classList.remove('hidden');
  document.getElementById('q-submit').classList.remove('hidden');
  let opts=q.options||[];
  if(q.type==='判断')opts=['对','错'];
  const isM=q.type==='多选';
  opts.forEach(opt=>{
    let val=q.type!=='判断'?opt.charAt(0):opt;
    const d=document.createElement('div');
    d.className='option-btn border border-gray-200 rounded-lg px-4 py-3 cursor-pointer text-sm flex items-center gap-3';
    d.dataset.value=val;
    const rc=q.type==='判断'?'rounded-full':(isM?'rounded':'rounded-full');
    d.innerHTML=`<span class="opt-indicator w-5 h-5 flex-shrink-0 ${rc} border-2 border-gray-300 flex items-center justify-center text-xs font-bold text-white transition-all"></span><span class="opt-label flex-1">${opt}</span>`;
    d.onclick=()=>selectOpt(d,isM);
    c.appendChild(d);
  });
}

// Render options with result highlighting
function renderOptionsWithResult(q,r){
  const c=document.getElementById('q-options');c.classList.remove('hidden');
  let opts=q.options||[];
  if(q.type==='判断')opts=['对','错'];
  const ansC=q.type==='判断'?[q.answer]:q.answer.split('');
  opts.forEach(opt=>{
    let val=q.type!=='判断'?opt.charAt(0):opt;
    const d=document.createElement('div');
    let cls='option-btn border rounded-lg px-4 py-3 text-sm flex items-center gap-3 cursor-default';
    if(ansC.includes(val))cls+=' correct border-green-300';
    else if(r.userAnswer&&r.userAnswer.includes(val)&&!ansC.includes(val))cls+=' wrong border-red-300';
    else cls+=' border-gray-200';
    d.className=cls;
    d.dataset.value=val;
    const rc=q.type==='判断'?'rounded-full':'rounded-full';
    let indCls='opt-indicator w-5 h-5 flex-shrink-0 '+rc+' border-2 flex items-center justify-center text-xs font-bold text-white transition-all';
    if(ansC.includes(val))indCls+=' bg-green-500 border-green-500';
    else if(r.userAnswer&&r.userAnswer.includes(val))indCls+=' bg-red-500 border-red-500';
    else indCls+=' border-gray-300';
    d.innerHTML=`<span class="${indCls}">${ansC.includes(val)?'✓':(r.userAnswer&&r.userAnswer.includes(val)?'✗':'')}</span><span class="opt-label flex-1">${opt}</span>`;
    c.appendChild(d);
  });
}

function selectOpt(btn,isM){
  if(isM){
    btn.classList.toggle('selected');
    const ind=btn.querySelector('.opt-indicator');
    if(btn.classList.contains('selected')){ind.classList.add('bg-primary','border-primary');ind.textContent='✓'}
    else{ind.classList.remove('bg-primary','border-primary');ind.textContent=''}
  }else{
    document.querySelectorAll('.option-btn').forEach(b=>{b.classList.remove('selected');const i=b.querySelector('.opt-indicator');i.classList.remove('bg-primary','border-primary');i.textContent=''});
    btn.classList.add('selected');
    const ind=btn.querySelector('.opt-indicator');ind.classList.add('bg-primary','border-primary');ind.textContent='●';
  }
}

// Show last answer record panel
function showLastRecord(q,r){
  const panel=document.getElementById('q-last-record');
  panel.classList.remove('hidden');
  const badge=document.getElementById('last-result-badge');
  if(r.isCorrect===true){badge.textContent='✓ 正确';badge.className='text-xs font-semibold px-2 py-0.5 rounded bg-green-100 text-green-700'}
  else if(r.isCorrect===false){badge.textContent='✗ 错误';badge.className='text-xs font-semibold px-2 py-0.5 rounded bg-red-100 text-red-700'}
  else{badge.textContent='查看答案';badge.className='text-xs font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-600'}
  const uaEl=document.getElementById('last-user-answer');
  uaEl.textContent=r.userAnswer||'--';
  const ansEl=document.getElementById('last-correct-answer');
  ansEl.textContent=q.answer||'暂无答案';
  try{renderMathInElement(ansEl,{delimiters:[{left:'\\(',right:'\\)',display:false}],throwOnError:false})}catch(e){}
  if(q.explanation){document.getElementById('last-explanation-area').classList.remove('hidden');const lexEl=document.getElementById('last-explanation-text');lexEl.textContent=q.explanation;try{renderMathInElement(lexEl,{delimiters:[{left:'\\(',right:'\\)',display:false},{left:'\\[',right:'\\]',display:true}],throwOnError:false})}catch(e){}}
  else document.getElementById('last-explanation-area').classList.add('hidden');
}

// ============ Submit / Answer ============
function submitAnswer(){
  const q=filteredQ[currentIdx];
  const isReviewMode=(currentMode==='fav'||currentMode==='wrong');
  if(S.answered[q.id]&&!isReviewMode)return;
  let ua='';
  if(q.type==='单选'||q.type==='多选'||q.type==='判断'){
    const sel=document.querySelectorAll('.option-btn.selected');
    if(!sel.length){showToast('请先选择答案');return}
    ua=Array.from(sel).map(b=>b.dataset.value).join('');
  }else if(q.type==='填空'){
    ua=document.getElementById('fill-input').value.trim();
    if(!ua){showToast('请先输入答案');return}
  }
  let ok=false;
  if(q.type==='判断')ok=ua===q.answer;
  else if(q.type==='单选')ok=ua===q.answer;
  else if(q.type==='多选'){const su=ua.split('').sort().join(''),sa=q.answer.split('').sort().join('');ok=su===sa}
  else if(q.type==='填空'){const ca=q.answer.split(/[;；,，、\/]/).map(a=>a.trim());ok=ca.some(a=>a&&(ua.includes(a)||a.includes(ua)))}
  const r={userAnswer:ua,isCorrect:ok};
  S.answered[q.id]=r;S.totalCount++;if(ok)S.correctCount++;
  if(!ok&&!S.wrongBook.includes(q.id))S.wrongBook.push(q.id);
  else if(ok&&S.wrongBook.includes(q.id))S.wrongBook=S.wrongBook.filter(id=>id!==q.id);
  saveState(S);showResult(q,r);updateBadges();renderQGrid();
}

function showAnswerDirectly(){
  const q=filteredQ[currentIdx];
  const isReviewMode=(currentMode==='fav'||currentMode==='wrong');
  if(S.answered[q.id]&&!isReviewMode)return;
  const r={userAnswer:'(查看答案)',isCorrect:null};
  S.answered[q.id]=r;S.totalCount++;saveState(S);showResult(q,r);updateBadges();renderQGrid();
}

function showCalcAnswer(){
  const q=filteredQ[currentIdx];
  if(S.answered[q.id]){showResult(q,S.answered[q.id]);return}
  const r={userAnswer:'(计算题查看答案)',isCorrect:null};
  S.answered[q.id]=r;S.totalCount++;saveState(S);showResult(q,r);updateBadges();renderQGrid();
}

function showResult(q,r){
  document.getElementById('q-result').classList.remove('hidden');
  if(q.type==='单选'||q.type==='多选'||q.type==='判断'){
    const ansC=q.type==='判断'?[q.answer]:q.answer.split('');
    document.querySelectorAll('.option-btn').forEach(b=>{
      const v=b.dataset.value;
      if(ansC.includes(v))b.classList.add('correct');
      else if(r.userAnswer&&r.userAnswer.includes(v)&&!ansC.includes(v))b.classList.add('wrong');
    });
  }
  const icon=document.getElementById('result-icon'),text=document.getElementById('result-text');
  if(r.isCorrect===true){icon.textContent='✅';text.textContent='回答正确！';text.className='text-sm font-semibold text-green-600'}
  else if(r.isCorrect===false){icon.textContent='❌';text.textContent='回答错误';text.className='text-sm font-semibold text-red-600'}
  else{icon.textContent='📖';text.textContent='查看答案';text.className='text-sm font-semibold text-gray-500'}
  document.getElementById('result-user-answer').textContent=r.userAnswer||'--';
  const ansEl=document.getElementById('answer-text');
  ansEl.textContent=q.answer||'暂无答案';
  try{renderMathInElement(ansEl,{delimiters:[{left:'\\(',right:'\\)',display:false}],throwOnError:false})}catch(e){}
  if(q.explanation){document.getElementById('explanation-area').classList.remove('hidden');const exEl=document.getElementById('explanation-text');exEl.textContent=q.explanation;try{renderMathInElement(exEl,{delimiters:[{left:'\\(',right:'\\)',display:false},{left:'\\[',right:'\\]',display:true}],throwOnError:false})}catch(e){}}
  else document.getElementById('explanation-area').classList.add('hidden');
  document.getElementById('q-submit').classList.add('hidden');
  if(q.type==='计算')document.getElementById('q-calc').classList.add('hidden');
  if(q.type==='填空')document.getElementById('q-fill').classList.add('hidden');
  updateFavWrongBtns(q);
}

// ============ Redo ============
function redoQuestion(){
  const q=filteredQ[currentIdx];
  const prev=S.answered[q.id];
  if(prev){
    S.totalCount=Math.max(0,S.totalCount-1);
    if(prev.isCorrect===true)S.correctCount=Math.max(0,S.correctCount-1);
  }
  delete S.answered[q.id];
  saveState(S);
  renderQuestion();
  showToast('题目已重置，可以重新作答');
  updateBadges();
}

// ============ Favorites & Wrong Book ============
function toggleFavorite(){
  const q=filteredQ[currentIdx];
  const idx=S.favorites.indexOf(q.id);
  if(idx>=0)S.favorites.splice(idx,1);else S.favorites.push(q.id);
  saveState(S);
  updateFavWrongBtns(q);
  updateFavWrongBtns2(q);
  updateBadges();
}

function toggleWrongBook(){
  const q=filteredQ[currentIdx];
  const idx=S.wrongBook.indexOf(q.id);
  if(idx>=0)S.wrongBook.splice(idx,1);else S.wrongBook.push(q.id);
  saveState(S);
  updateFavWrongBtns(q);
  updateFavWrongBtns2(q);
  updateBadges();
}

function updateFavWrongBtns(q){
  const f=S.favorites.includes(q.id),w=S.wrongBook.includes(q.id);
  document.getElementById('fav-icon').setAttribute('fill',f?'currentColor':'none');
  document.getElementById('fav-icon').classList.toggle('text-yellow-500',f);
  document.getElementById('fav-text').textContent=f?'取消收藏':'收藏';
  document.getElementById('wrong-icon').classList.toggle('text-red-500',w);
  document.getElementById('wrong-text').textContent=w?'移出错题':'加入错题';
  document.getElementById('wrong-btn').classList.toggle('border-red-400',w);
  document.getElementById('wrong-btn').classList.toggle('bg-red-50',w);
}

function updateFavWrongBtns2(q){
  const f=S.favorites.includes(q.id),w=S.wrongBook.includes(q.id);
  document.getElementById('fav-icon-2').setAttribute('fill',f?'currentColor':'none');
  document.getElementById('fav-icon-2').classList.toggle('text-yellow-500',f);
  document.getElementById('fav-text-2').textContent=f?'取消收藏':'收藏';
  document.getElementById('wrong-icon-2').classList.toggle('text-red-500',w);
  document.getElementById('wrong-text-2').textContent=w?'移出错题':'加入错题';
  document.getElementById('wrong-btn-2').classList.toggle('border-red-400',w);
  document.getElementById('wrong-btn-2').classList.toggle('bg-red-50',w);
}

function updateBadges(){
  document.getElementById('fav-count').textContent=S.favorites.length;
  document.getElementById('wrong-count').textContent=S.wrongBook.length;
}

// ============ Progress Reset ============
function resetProgress(){
  if(!confirm('确定要清空所有答题记录、收藏和错题吗？此操作不可恢复！'))return;
  S={favorites:[],wrongBook:[],answered:{},correctCount:0,totalCount:0,examDate:S.examDate};
  saveState(S);updateBadges();updateDashboard();renderQuestion();
  showToast('已清空所有进度');
}

// ============ Navigation ============
function startExam(examId){
  currentMode='exam';
  document.getElementById('filter-year').value=examId;
  document.querySelectorAll('.sidebar-item').forEach(item=>item.classList.remove('active'));
  const match=document.querySelector(`.sidebar-item[data-exam-id="${examId}"]`);
  if(match)match.classList.add('active');
  applyFilter();
  showPage('card');
}

function prevQ(){if(currentIdx>0){currentIdx--;renderQuestion()}}
function nextQ(){if(currentIdx<filteredQ.length-1){currentIdx++;renderQuestion()}}

function scrollQToTop(){
  const scroller=document.querySelector('main > .flex-1.overflow-y-auto');
  if(scroller)scroller.scrollTo({top:0,behavior:'smooth'});
}
