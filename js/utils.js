// ============ Utility Functions ============
function showToast(msg){
  const t=document.createElement('div');
  t.className='fixed top-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-4 py-2 rounded-lg shadow-lg z-50 fade-in';
  t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.remove(),2000);
}

function formatDate(){const d=new Date();return `${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}`}

function downloadFile(blob,filename){
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download=filename;
  a.click();
  URL.revokeObjectURL(a.href);
}
