// ============ Data Management ============
function initDataPage(){
  const sel=document.getElementById('export-exam-select');
  if(!sel.options.length){
    examData.forEach(e=>{const o=document.createElement('option');o.value=e.id;o.textContent=e.name;sel.appendChild(o)});
  }
  // Drag & drop
  const dz=document.getElementById('import-drop-zone');
  dz.ondragover=e=>{e.preventDefault();dz.classList.add('border-primary','bg-indigo-50')};
  dz.ondragleave=()=>{dz.classList.remove('border-primary','bg-indigo-50')};
  dz.ondrop=e=>{e.preventDefault();dz.classList.remove('border-primary','bg-indigo-50');if(e.dataTransfer.files.length)handleImportFileObj(e.dataTransfer.files[0])};
}

// ---- Export JSON ----
function buildExportData(scope){
  const examId=scope==='exam'?document.getElementById('export-exam-select').value:null;
  const data={version:2,exportDate:new Date().toISOString(),scope:scope};
  if(scope==='all'){
    data.favorites=[...S.favorites];
    data.wrongBook=[...S.wrongBook];
    data.answered=JSON.parse(JSON.stringify(S.answered));
  }else if(scope==='fav'){
    data.favorites=[...S.favorites];
    data.questions=S.favorites.map(id=>allQ.find(q=>q.id===id)).filter(Boolean).map(q=>({id:q.id,question:q.question,answer:q.answer,type:q.type,source:q.source}));
  }else if(scope==='wrong'){
    data.wrongBook=[...S.wrongBook];
    data.questions=S.wrongBook.map(id=>{const q=allQ.find(q=>q.id===id);const r=S.answered[id];return q?{id:q.id,question:q.question,answer:q.answer,type:q.type,source:q.source,userAnswer:r?.userAnswer||'',isCorrect:r?.isCorrect}:null}).filter(Boolean);
  }else if(scope==='answered'){
    data.answered=JSON.parse(JSON.stringify(S.answered));
    data.questions=Object.keys(S.answered).map(id=>{const q=allQ.find(q=>q.id===id);const r=S.answered[id];return q?{id:q.id,question:q.question,answer:q.answer,type:q.type,source:q.source,userAnswer:r?.userAnswer||'',isCorrect:r?.isCorrect}:null}).filter(Boolean);
  }else if(scope==='exam'){
    data.examId=examId;
    const examName=examData.find(e=>e.id===examId)?.name||examId;
    data.examName=examName;
    const examQs=allQ.filter(q=>q.source===examId);
    data.answered={};
    Object.keys(S.answered).forEach(id=>{if(examQs.find(q=>q.id===id))data.answered[id]=S.answered[id]});
    data.questions=examQs.map(q=>{const r=S.answered[q.id];return{id:q.id,question:q.question,answer:q.answer,type:q.type,source:q.source,userAnswer:r?.userAnswer||'',isCorrect:r?.isCorrect}});
    data.favorites=S.favorites.filter(id=>examQs.find(q=>q.id===id));
    data.wrongBook=S.wrongBook.filter(id=>examQs.find(q=>q.id===id));
  }
  return data;
}

function exportJSON(scope){
  const data=buildExportData(scope);
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const suffix={all:'全部数据',fav:'收藏夹',wrong:'错题库',answered:'答题记录',exam:data.examName||'试卷'}[scope];
  downloadFile(blob,`经管刷题_${suffix}_${formatDate()}.json`);
  showToast(`已导出 ${suffix} (JSON)`);
}

// ---- Export Markdown ----
function exportMD(scope){
  const data=buildExportData(scope);
  const title={all:'全部数据',fav:'收藏夹',wrong:'错题库',answered:'答题记录',exam:data.examName||'试卷'}[scope];
  let md=`# 📚 经管刷题系统 — ${title}\n\n`;
  md+=`> 📅 导出时间：${new Date().toLocaleString('zh-CN')}\n\n`;
  // Summary
  md+=`## 📊 概览\n\n`;
  if(data.favorites)md+=`- ⭐ 收藏题目：**${data.favorites.length}** 题\n`;
  if(data.wrongBook)md+=`- ❌ 错题：**${data.wrongBook.length}** 题\n`;
  if(data.answered){
    const total=Object.keys(data.answered).length;
    const correct=Object.values(data.answered).filter(r=>r.isCorrect===true).length;
    const wrong=Object.values(data.answered).filter(r=>r.isCorrect===false).length;
    const viewed=Object.values(data.answered).filter(r=>r.isCorrect===null).length;
    md+=`- ✍️ 已做题：**${total}** 题\n`;
    if(total>0){
      md+=`  - ✅ 正确：${correct} 题\n`;
      md+=`  - ❌ 错误：${wrong} 题\n`;
      md+=`  - 📖 查看答案：${viewed} 题\n`;
      md+=`  - 🎯 正确率：**${Math.round(correct/total*100)}%**\n`;
    }
  }
  md+='\n---\n\n';
  // Question details
  if(data.questions&&data.questions.length>0){
    const bySource={};
    data.questions.forEach(q=>{if(!bySource[q.source])bySource[q.source]=[];bySource[q.source].push(q)});
    const srcOrder=examData.map(e=>e.id);
    const sortedSrc=Object.keys(bySource).sort((a,b)=>srcOrder.indexOf(a)-srcOrder.indexOf(b));
    const typeLabels={填空:'✏️ 填空题',单选:'🔘 单选题',多选:'☑️ 多选题',判断:'⚖️ 判断题',计算:'🧮 计算题'};
    const typeOrder=['填空','单选','多选','判断','计算'];
    sortedSrc.forEach(srcId=>{
      const srcName=examData.find(e=>e.id===srcId)?.name||srcId;
      md+=`## 📋 ${srcName}\n\n`;
      const qs=bySource[srcId];
      const byType={};
      qs.forEach(q=>{if(!byType[q.type])byType[q.type]=[];byType[q.type].push(q)});
      typeOrder.forEach(type=>{
        if(!byType[type])return;
        md+=`### ${typeLabels[type]||type}\n\n`;
        byType[type].forEach((q,i)=>{
          md+=`**${i+1}.** ${q.question}\n\n`;
          if(q.options&&q.options.length>0){
            q.options.forEach(opt=>{
              const letter=q.type==='判断'?opt:opt.charAt(0);
              const isCorrect=q.type==='判断'?q.answer===opt:q.answer.includes(letter);
              const isUser=q.userAnswer&&(q.type==='判断'?q.userAnswer===opt:q.userAnswer.includes(letter));
              let marker='⬜';
              if(isCorrect&&isUser)marker='✅';
              else if(isCorrect)marker='✅';
              else if(isUser&&!isCorrect)marker='❌';
              md+=`- ${marker} ${opt}\n`;
            });
            md+='\n';
          }
          md+=`- ✅ **正确答案：** ${q.answer}\n`;
          if(q.userAnswer!==undefined&&q.userAnswer!==''){
            const label=q.isCorrect===true?'✅ 回答正确':q.isCorrect===false?'❌ 回答错误':'📖 查看答案';
            md+=`- ${label.split(' ')[0]} **你的答案：** ${q.userAnswer}\n`;
          }
          if(q.explanation&&q.explanation.trim()){
            md+=`- 💡 **解析：** ${q.explanation}\n`;
          }
          if(q.url&&q.url.length>0){
            md+=`- 🖼️ **题目图片：**\n`;
            q.url.forEach(u=>{md+=`  - ![](${u})\n`});
          }
          md+='\n---\n\n';
        });
      });
    });
  }
  // Fav/wrong summary for "all" scope
  if(scope==='all'){
    if(data.favorites&&data.favorites.length>0){
      md+=`## ⭐ 收藏夹题目\n\n`;
      data.favorites.forEach(id=>{
        const q=allQ.find(q=>q.id===id);
        if(q)md+=`- **[${q.type}]** ${q.question.substring(0,80)}${q.question.length>80?'...':''}\n`;
      });
      md+='\n';
    }
    if(data.wrongBook&&data.wrongBook.length>0){
      md+=`## ❌ 错题库题目\n\n`;
      data.wrongBook.forEach(id=>{
        const q=allQ.find(q=>q.id===id);
        if(q)md+=`- **[${q.type}]** ${q.question.substring(0,80)}${q.question.length>80?'...':''}\n`;
      });
      md+='\n';
    }
  }
  const blob=new Blob([md],{type:'text/markdown;charset=utf-8'});
  downloadFile(blob,`经管刷题_${title}_${formatDate()}.md`);
  showToast(`已导出 ${title} (Markdown)`);
}

// ---- Import JSON ----
function handleImportFile(e){if(e.target.files.length)handleImportFileObj(e.target.files[0])}
function handleImportFileObj(file){
  if(!file.name.endsWith('.json')){showToast('仅支持 .json 文件');return}
  const reader=new FileReader();
  reader.onload=function(e){
    try{
      const data=JSON.parse(e.target.result);
      if(!data.version||!data.scope){showToast('文件格式不正确，请使用本系统导出的 JSON');return}
      applyImportData(data);
    }catch(err){showToast('JSON 解析失败：'+err.message)}
  };
  reader.readAsText(file);
}
function applyImportData(data){
  let msg='';
  if(data.favorites&&Array.isArray(data.favorites)){
    const added=data.favorites.filter(id=>!S.favorites.includes(id));
    S.favorites.push(...added);
    msg+=`收藏 +${added}；`;
  }
  if(data.wrongBook&&Array.isArray(data.wrongBook)){
    const added=data.wrongBook.filter(id=>!S.wrongBook.includes(id));
    S.wrongBook.push(...added);
    msg+=`错题 +${added}；`;
  }
  if(data.answered&&typeof data.answered==='object'){
    let addedCount=0;
    Object.keys(data.answered).forEach(id=>{
      if(!S.answered[id]){S.answered[id]=data.answered[id];addedCount++}
    });
    msg+=`记录 +${addedCount}；`;
  }
  const answeredIds=Object.keys(S.answered);
  S.totalCount=answeredIds.length;
  S.correctCount=answeredIds.filter(id=>S.answered[id].isCorrect===true).length;
  saveState(S);
  updateBadges();
  updateDashboard();
  showToast('导入完成：'+msg);
}
