// ============ State ============
let allQ=window.ALL_QUESTIONS, examData=window.EXAM_DATA;
let filteredQ=[], currentIdx=0, currentMode='exam';

function loadState(){return JSON.parse(localStorage.getItem('jg_quiz_v2')||'{"favorites":[],"wrongBook":[],"answered":{},"correctCount":0,"totalCount":0,"examDate":"2027-01-15"}')}
function saveState(s){localStorage.setItem('jg_quiz_v2',JSON.stringify(s))}
let S=loadState();
