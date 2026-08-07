// 2005-2006第2学期B卷
(function(){
const exam = {
  id: "2005-2006-B2",
  name: "2005-2006第2学期B卷",
  year: "2005-2006",
  semester: "第2学期",
  paper: "B卷"
};
window.EXAM_DATA.push(exam);

const qs = [
  // ===== 填空题 =====
  {id:"2005B2-fill-1",question:"由企业全体人员、全体部门参与，在企业活动全过程实行的质量管理称为________。",answer:"全面质量管理",type:"填空",explanation:"",source:"2005-2006-B2",options:[],url:[]},
  {id:"2005B2-fill-2",question:"需求量与价格成________方向变动是需求规律。",answer:"反",type:"填空",explanation:"",source:"2005-2006-B2",options:[],url:[]},
  {id:"2005B2-fill-3",question:"行为科学管理学派主要关注人际关系、积极性及创造性等问题，而科学管理学派主要关注________等问题。",answer:"制度、方法及效率",type:"填空",explanation:"",source:"2005-2006-B2",options:[],url:[]},
  {id:"2005B2-fill-4",question:"X、Y互为互补品，当X产品的价格大幅下降时，Y产品的需求量会________。",answer:"增加",type:"填空",explanation:"互补品价格下降→需求量增加→另一互补品需求也增加",source:"2005-2006-B2",options:[],url:[]},
  {id:"2005B2-fill-5",question:"系统工程的基本特征之一是追求系统全局________。",answer:"最优化",type:"填空",explanation:"",source:"2005-2006-B2",options:[],url:[]},

  // ===== 单选题 =====
  {id:"2005B2-single-1",question:"下列管理学家被后人称为\"科学管理之父\"的是（  ）。",answer:"D",type:"单选",explanation:"泰罗（Frederick W. Taylor）被称为\"科学管理之父\"",source:"2005-2006-B2",options:["A. 法约尔","B. 麦格雷戈","C. 马斯洛","D. 泰罗"],url:[]},
  {id:"2005B2-single-2",question:"生产系统空间组织的工艺专业化原则最适合于（  ）。",answer:"A",type:"单选",explanation:"工艺专业化原则适合多品种小批量生产",source:"2005-2006-B2",options:["A. 多品种小批量生产","B. 多品种大批量生产","C. 单一品种大批量生产","D. 单一品种小批量生产"],url:[]},
  {id:"2005B2-single-3",question:"某公司经过研究已知其某种商品的需求价格弹性为-1.2。现欲提高其价格，预计以后总收入将会（  ）。",answer:"B",type:"单选",explanation:"需求价格弹性|Ed|=1.2>1（富有弹性），提价后需求量下降幅度大于价格上升幅度，总收入降低",source:"2005-2006-B2",options:["A. 提高","B. 降低","C. 提高而后会降低","D. 降低而后会提高"],url:[]},
  {id:"2005B2-single-4",question:"马斯洛提出的\"需求层次理论\"，最高层次的需求是（  ）。",answer:"B",type:"单选",explanation:"马斯洛需求层次从低到高：生理→安全→社交→尊重→自我实现，最高层次为自我实现需求",source:"2005-2006-B2",options:["A. 尊重的需求","B. 自我实现的需求","C. 社交的需求","D. 生理需求"],url:[]},
  {id:"2005B2-single-5",question:"总时差是指在不影响总工期，即不影响其紧后作业________时间的前提下，作业可推迟开始的一段时间。",answer:"A",type:"单选",explanation:"总时差以不影响紧后作业的最迟开始时间为前提",source:"2005-2006-B2",options:["A. 最迟开始","B. 最迟结束","C. 最早开始","D. 最早结束"],url:[]},

  // ===== 判断题 =====
  {id:"2005B2-judge-1",question:"赫兹伯格提出了\"X—Y理论\"并主张在管理中从Y理论出发认识管理中的人。",answer:"错",type:"判断",explanation:"X-Y理论由麦格雷戈提出，赫兹伯格提出的是双因素理论（保健因素和激励因素）",source:"2005-2006-B2",options:[],url:[]},
  {id:"2005B2-judge-2",question:"以NPV和NPVR评价两个投资方案，NPV大的方案，NPVR一定也大，因而评价结论一定一致。",answer:"错",type:"判断",explanation:"NPV大不代表NPVR也大，两者评价结论可能不一致",source:"2005-2006-B2",options:[],url:[]},
  {id:"2005B2-judge-3",question:"工作专门化可以提高工作效率，并使员工获得良好的自我实现机会。",answer:"错",type:"判断",explanation:"工作专门化虽可提高效率，但过度专门化会使工作单调，不利于员工自我实现",source:"2005-2006-B2",options:[],url:[]},
  {id:"2005B2-judge-4",question:"股份有限公司的股东按其认购股份数对公司的债务负有限清偿责任。",answer:"对",type:"判断",explanation:"股份有限公司的核心特征就是股东有限责任",source:"2005-2006-B2",options:[],url:[]},
  {id:"2005B2-judge-5",question:"不确定型决策问题根据所选择的决策准则不同，决策的结果有可能不同。",answer:"对",type:"判断",explanation:"不同决策准则（乐观、悲观、后悔值等）可能得出不同结论",source:"2005-2006-B2",options:[],url:[]},

  // ===== 计算题 =====
  {id:"2005B2-calc-1",question:"设某决策问题的决策收益（元/单位）如下表所示：\n（1）请用乐观准则和最小遗憾准则两种方法进行决策。\n（2）若四种状态概率分别为0.2、0.3、0.3、0.2，以收益期望值法决策方案。",answer:"课外内容，暂无答案",type:"计算",explanation:"(1)乐观准则：Max{7,9,7,8,5}=9→最佳方案A2\n(2)最小遗憾准则：后悔值表A1={1,2,0,2},A2={3,3,0,0},A3={0,0,3,4},A4={2,2,0,1},A5={2,2,1,4}；Max{2,3,4,2,4}，Min=2→方案A1和A4\n(3)期望值：E(A1)=5.5, E(A2)=5.5, E(A3)=5.0, E(A4)=5.5, E(A5)=4.6→方案A1和A4",source:"2005-2006-B2",options:[],url:["images/2005b2/001.png"]},
  {id:"2005B2-calc-2",question:"某工程各工序的逻辑关系及作业时间如表所示：\n要求：(1)绘制网络图；(2)计算工序I的\\(T_{ES}, T_{LS}\\)；(3)确定该项目的关键工序和项目的计划时间。",answer:"详见解析",type:"计算",explanation:"ES(I)=18, LS(I)=18; 关键路径：A→D→H→I; 项目计划时间=1+7+9+4=21天",source:"2005-2006-B2",options:[],url:["images/2005b2/002.png"]},
  {id:"2005B2-calc-3",question:"某工厂计划安排生产A 和B两种产品，已知生产单位产品所需的设备和原材料如下表所示。该工厂每生产一件A产品，可获利2元，每生产一件B产品可获利3元，问应该如何安排生产，可使工厂的获利最多？",answer:"详见解析",type:"计算",explanation:"线性规划：Max Z=2X₁+3X₂\n约束：X₁+2X₂≤8, 4X₁≤16, 4X₂≤12\n解：X₁=4, X₂=2, MaxZ=14元",source:"2005-2006-B2",options:[],url:["images/2005b2/003.png"]},
  {id:"2005B2-calc-4",question:"某项目方案净现金流量如下表所示，设基准收益率10%，用内部收益率确定方案是否可行。（用内插法求解，i₁=12%）",answer:"详见解析",type:"计算",explanation:"i₁=12%时NPV₁=21万元；i₂=14%时NPV₂=-91万元\nIRR=12%+21/(21+91)×2%=12.4%\n因为IRR=12.4%>i₀=10%，方案可行",source:"2005-2006-B2",options:[],url:["images/2005b2/004.png"]}
];

window.ALL_QUESTIONS.push(...qs);
})();
