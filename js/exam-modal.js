// ============ Exam Detail Modal ============

// ---- Exam File Map ----
const EXAM_FILES={
  '2019-2020-C':{doc:'往届期末试题/2019-2020经管期末试题1.pdf',ans:'往届期末试题/2019-2020经管期末答案2_部分.pdf'},
  '2019-2020-A':{doc:'往届期末试题/2019-2020经管期末试题2.pdf',ans:'往届期末试题/2019-2020经管期末答案2_部分.pdf'},
  '2021-2022-A':{doc:'往届期末试题/2021-2022经管期末试题.pdf',ans:'往届期末试题/2021-2022经管期末答案.pdf'},
  '2022-2023-A':{doc:'往届期末试题/2022-2023经管期末试题.pdf'},
  '2013-2014-A':{doc:'往届期末试题/2013-2014经管A卷填空选择_部分1.pdf'},
  '2007-2008-B2':{doc:'往届期末试题/2007-2008第2学期北航经济管理概论试题与解答B卷1.doc'},
  '2007-2008-A2':{doc:'往届期末试题/2007-2008第2学期北航经济管理概论试题与解答A卷1.doc'},
  '2006-2007-B2':{doc:'往届期末试题/2006-2007第2学期北航经济管理概论试题与解答B卷1.doc'},
  '2006-2007-A2':{doc:'往届期末试题/2006-2007第2学期北航经济管理概论试题与解答A卷1.doc'},
  '2006-2007-A1':{doc:'往届期末试题/2006-2007第1学期北航经济管理概论试题与解答A卷1.doc'},
  '2005-2006-B2':{doc:'往届期末试题/2005-2006第2学期北航经济管理概论试题与解答B卷1.doc'},
  '200n-A1':{doc:'往届期末试题/200n-200m第1学期北航经济管理概论试题A卷1.doc',ans:'往届期末试题/200n-200m第1学期北航经济管理概论解答A卷1.doc'}
};

let _currentModalExamId=null;

function showExamModal(examId){
  _currentModalExamId=examId;
  const e=examData.find(x=>x.id===examId);
  if(!e)return;
  document.getElementById('modal-exam-title').textContent=e.name;
  // Exam Info
  const qs=allQ.filter(q=>q.source===examId);
  const types={};
  qs.forEach(q=>{types[q.type]=(types[q.type]||0)+1});
  let infoHtml=`<div class="flex justify-between"><span class="text-gray-500">学年</span><span class="font-medium">${e.year}</span></div>`;
  infoHtml+=`<div class="flex justify-between"><span class="text-gray-500">学期</span><span class="font-medium">${e.semester}</span></div>`;
  infoHtml+=`<div class="flex justify-between"><span class="text-gray-500">试卷</span><span class="font-medium">${e.paper}</span></div>`;
  infoHtml+=`<div class="flex justify-between"><span class="text-gray-500">总题量</span><span class="font-medium">${qs.length} 题</span></div>`;
  infoHtml+=`<div class="flex justify-between"><span class="text-gray-500">题型分布</span><span class="font-medium">${Object.entries(types).map(([t,c])=>`${t}${c}题`).join(' / ')}</span></div>`;
  document.getElementById('modal-exam-info').innerHTML=infoHtml;
  // Progress Stats
  const done=qs.filter(q=>S.answered[q.id]).length;
  const correct=qs.filter(q=>S.answered[q.id]&&S.answered[q.id].isCorrect===true).length;
  const wrong=qs.filter(q=>S.answered[q.id]&&S.answered[q.id].isCorrect===false).length;
  const fav=qs.filter(q=>S.favorites.includes(q.id)).length;
  const pct=qs.length>0?Math.round(done/qs.length*100):0;
  const accPct=done>0?Math.round(correct/done*100):0;
  let pHtml=`<div class="flex justify-between"><span class="text-gray-500">已做题</span><span class="font-medium">${done} / ${qs.length} (${pct}%)</span></div>`;
  pHtml+=`<div class="flex justify-between"><span class="text-gray-500">正确</span><span class="font-medium text-green-600">${correct}</span></div>`;
  pHtml+=`<div class="flex justify-between"><span class="text-gray-500">错误</span><span class="font-medium text-red-600">${wrong}</span></div>`;
  pHtml+=`<div class="flex justify-between"><span class="text-gray-500">正确率</span><span class="font-medium">${accPct}%</span></div>`;
  pHtml+=`<div class="flex justify-between"><span class="text-gray-500">收藏</span><span class="font-medium text-yellow-600">${fav}</span></div>`;
  pHtml+=`<div class="mt-2"><div class="bg-gray-200 rounded-full h-3"><div class="bg-primary rounded-full h-3 transition-all" style="width:${pct}%"></div></div></div>`;
  document.getElementById('modal-exam-progress').innerHTML=pHtml;
  // Download
  const files=EXAM_FILES[examId];
  let dlHtml='';
  if(files){
    if(files.doc)dlHtml+=`<a href="${files.doc}" download class="inline-flex items-center gap-2 bg-indigo-50 text-primary px-4 py-2 rounded-lg hover:bg-indigo-100 transition text-sm"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>下载试题</a>`;
    if(files.ans)dlHtml+=` <a href="${files.ans}" download class="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg hover:bg-green-100 transition text-sm"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>下载答案</a>`;
  }else{
    dlHtml='<span class="text-gray-400">暂无试卷文件</span>';
  }
  document.getElementById('modal-exam-download').innerHTML=dlHtml;
  document.getElementById('exam-modal').classList.remove('hidden');
}

function closeExamModal(){
  document.getElementById('exam-modal').classList.add('hidden');
  _currentModalExamId=null;
}

function exportExamFromModal(fmt){
  if(!_currentModalExamId)return;
  const origSel=document.getElementById('export-exam-select').value;
  document.getElementById('export-exam-select').value=_currentModalExamId;
  if(fmt==='json')exportJSON('exam');else exportMD('exam');
  document.getElementById('export-exam-select').value=origSel;
}

function triggerImportExam(){
  document.getElementById('import-exam-file').click();
}

function handleImportExamFile(ev){
  const file=ev.target.files[0];
  if(!file)return;
  const reader=new FileReader();
  reader.onload=e=>{
    try{
      const data=JSON.parse(e.target.result);
      if(!data.version||!data.scope){showToast('文件格式不正确');return}
      if(data.scope!=='exam'||!data.examId){showToast('请使用试卷导出的 JSON 文件');return}
      applyImportData(data);
      if(_currentModalExamId)showExamModal(_currentModalExamId);
      showToast('导入完成');
    }catch(err){showToast('导入失败：文件格式错误')}
  };
  reader.readAsText(file);
  ev.target.value='';
}
