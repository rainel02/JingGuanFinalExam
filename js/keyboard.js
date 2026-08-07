// ============ Keyboard Shortcuts ============
document.addEventListener('keydown',e=>{
  // ---- Esc: blur input or close modal ----
  if(e.key==='Escape'){
    if(_currentModalExamId){closeExamModal();return}
    const ae=document.activeElement;
    if(ae&&(ae.tagName==='INPUT'||ae.tagName==='SELECT'||ae.tagName==='TEXTAREA')){ae.blur();return}
    return;
  }
  // ---- Tab: toggle card/list ----
  if(e.key==='Tab'){
    const ae=document.activeElement;
    if(ae && (ae.tagName==='INPUT'||ae.tagName==='SELECT'||ae.tagName==='TEXTAREA'))return;
    e.preventDefault();
    const isCard=!document.getElementById('page-card').classList.contains('hidden');
    showPage(isCard?'list':'card');
    return;
  }
  const isList=!document.getElementById('page-list').classList.contains('hidden');
  const isCard=!document.getElementById('page-card').classList.contains('hidden');
  const inInput=document.activeElement&&(document.activeElement.tagName==='INPUT'||document.activeElement.tagName==='SELECT'||document.activeElement.tagName==='TEXTAREA');
  // ---- Single-key shortcuts (only outside input) ----
  if(!inInput){
    if(e.key==='l'||e.key==='L'){
      currentMode='fav';applyFilter();showPage('card');
      const sb=document.querySelectorAll('#sidebar-exams .sidebar-item');sb.forEach(i=>i.classList.remove('active'));
      const favItem=document.querySelector('.sidebar-item[onclick*="currentMode=\'fav\'"]');if(favItem)setActiveSidebar(favItem);
      return;
    }
    if(e.key==='w'||e.key==='W'){
      currentMode='wrong';applyFilter();showPage('card');
      const sb=document.querySelectorAll('#sidebar-exams .sidebar-item');sb.forEach(i=>i.classList.remove('active'));
      const wrongItem=document.querySelector('.sidebar-item[onclick*="currentMode=\'wrong\'"]');if(wrongItem)setActiveSidebar(wrongItem);
      return;
    }
    if(e.key==='m'||e.key==='M'){
      showPage('data');
      const dataItem=document.querySelector('.sidebar-item[onclick*="showPage(\'data\')"]');if(dataItem)setActiveSidebar(dataItem);
      return;
    }
    if(e.key==='i'||e.key==='I'){
      if(_currentModalExamId){closeExamModal();return}
      const q=filteredQ[currentIdx];
      if(q&&q.source)showExamModal(q.source);
      return;
    }
  }
  // ---- Shift+Up/Down: switch exam paper ----
  if(e.shiftKey&&(e.key==='ArrowUp'||e.key==='ArrowDown')){
    if(currentMode==='fav'||currentMode==='wrong'){
      // In fav/wrong mode, Shift+Down goes to first exam; Shift+Up does nothing
      if(e.key==='ArrowDown'&&examData.length>0){
        e.preventDefault();startExam(examData[0].id);
        showToast('切换到: '+examData[0].name);
      }
      return;
    }
    const curYear=document.getElementById('filter-year').value;
    let curIdx=-1; // -1 means "all exams"
    if(curYear)curIdx=examData.findIndex(ex=>ex.id===curYear);
    if(e.key==='ArrowUp'){
      if(curIdx===-1){
        // Already at "all", wrap to last exam
        if(examData.length>0){e.preventDefault();startExam(examData[examData.length-1].id);showToast('切换到: '+examData[examData.length-1].name)}
      }else if(curIdx>0){
        e.preventDefault();startExam(examData[curIdx-1].id);showToast('切换到: '+examData[curIdx-1].name);
      }else{
        // At first exam, go to "all exams"
        e.preventDefault();currentMode='exam';document.getElementById('filter-year').value='';
        const allItem=document.querySelector('.sidebar-item[data-exam-id="all"]');
        if(allItem)setActiveSidebar(allItem);
        applyFilter();showPage('card');showToast('切换到: 全部试题');
      }
    }else{ // ArrowDown
      if(curIdx===-1){
        // "All exams" → first exam
        if(examData.length>0){e.preventDefault();startExam(examData[0].id);showToast('切换到: '+examData[0].name)}
      }else if(curIdx<examData.length-1){
        e.preventDefault();startExam(examData[curIdx+1].id);showToast('切换到: '+examData[curIdx+1].name);
      }else{
        // At last exam, wrap to "all exams"
        e.preventDefault();currentMode='exam';document.getElementById('filter-year').value='';
        const allItem=document.querySelector('.sidebar-item[data-exam-id="all"]');
        if(allItem)setActiveSidebar(allItem);
        applyFilter();showPage('card');showToast('切换到: 全部试题');
      }
    }
    return;
  }
  // ---- List view: arrows navigate rows, Enter jumps to detail ----
  if(isList){
    if(e.key==='ArrowUp'||e.key==='ArrowLeft'){
      if(currentIdx>0){e.preventDefault();currentIdx--;updateListHighlight();scrollListToCurrent()}
    }else if(e.key==='ArrowDown'||e.key==='ArrowRight'){
      if(currentIdx<filteredQ.length-1){e.preventDefault();currentIdx++;updateListHighlight();scrollListToCurrent()}
    }else if(e.key==='Enter'){
      e.preventDefault();jumpToQ(currentIdx);
    }
    return;
  }
  // ---- Card view: grid-based navigation ----
  if(isCard){
    const COLS=4;
    if(e.key==='ArrowLeft'){
      e.preventDefault();prevQ();
    }else if(e.key==='ArrowRight'){
      e.preventDefault();nextQ();
    }else if(e.key==='ArrowUp'){
      const target=currentIdx-COLS;
      if(target>=0){e.preventDefault();currentIdx=target;renderQuestion();renderQGrid();scrollQToTop()}
    }else if(e.key==='ArrowDown'){
      const target=currentIdx+COLS;
      if(target<filteredQ.length){e.preventDefault();currentIdx=target;renderQuestion();renderQGrid();scrollQToTop()}
    }
  }
  if(e.key==='Enter'){
    const q=filteredQ[currentIdx];
    if(!q)return;
    if(document.activeElement===document.getElementById('fill-input')){
      if(!S.answered[q.id])submitAnswer();
      return;
    }
    if(!S.answered[q.id])submitAnswer();
  }
  else if(e.key==='Shift'){
    const q=filteredQ[currentIdx];
    if(!q||S.answered[q.id])return;
    showAnswerDirectly();
  }
  else if(e.key==='1'){
    const q=filteredQ[currentIdx];
    if(q&&S.answered[q.id])redoQuestion();
  }
  else if(e.key==='2'){
    const q=filteredQ[currentIdx];
    if(q&&S.answered[q.id])toggleFavorite();
  }
  else if(e.key==='3'){
    const q=filteredQ[currentIdx];
    if(q&&S.answered[q.id])toggleWrongBook();
  }
  else if(e.key==='4'){
    if(document.activeElement===document.getElementById('fill-input'))return;
    const q=filteredQ[currentIdx];
    if(q&&S.answered[q.id])nextQ();
  }
  else if(/^[a-fA-F]$/.test(e.key)){
    const q=filteredQ[currentIdx];
    if(!q||S.answered[q.id])return;
    if(q.type!=='单选'&&q.type!=='多选'&&q.type!=='判断')return;
    if(document.activeElement===document.getElementById('fill-input'))return;
    const key=e.key.toUpperCase();
    const isM=q.type==='多选';
    const btns=document.querySelectorAll('#q-options .option-btn');
    let targetVal=key;
    if(q.type==='判断'){targetVal=key==='A'?'对':(key==='B'?'错':null)}
    const targetBtn=[...btns].find(b=>b.dataset.value===targetVal);
    if(targetBtn){
      if(!isM&&targetBtn.classList.contains('selected')){
        targetBtn.classList.remove('selected');
        const ind=targetBtn.querySelector('.opt-indicator');ind.classList.remove('bg-primary','border-primary');ind.textContent='';
      }else{
        selectOpt(targetBtn,isM);
      }
    }
  }
});
