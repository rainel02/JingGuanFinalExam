// 200n-200m第1学期A卷（年份不详，题目与2006-2007第1学期A卷高度相似）
(function(){
const exam = {
  id: "200n-A1",
  name: "200n-200m第1学期A卷",
  year: "200n-200m",
  semester: "第1学期",
  paper: "A卷"
};
window.EXAM_DATA.push(exam);

const qs = [
  // ===== 填空题 =====
  {id:"200nA1-fill-1",question:"引起经济问题的基本事实是________，必然的结果是人们必须作出选择。",answer:"稀缺",type:"填空",explanation:"",source:"200n-A1",options:[],url:[]},
  {id:"200nA1-fill-2",question:"内部收益率IRR是指使________为零的折现率。",answer:"净现值(NPV)",type:"填空",explanation:"",source:"200n-A1",options:[],url:[]},
  {id:"200nA1-fill-3",question:"\"薄利多销\"的含义是指通过降低价格，扩大销量，增加收入。但前提条件是该商品的需求价格弹性应满足________。",answer:"富有弹性(弹性绝对值大于1)",type:"填空",explanation:"",source:"200n-A1",options:[],url:[]},
  {id:"200nA1-fill-4",question:"线性规划问题的最优解一定可以在________上获得。",answer:"可行域顶点",type:"填空",explanation:"",source:"200n-A1",options:[],url:[]},
  {id:"200nA1-fill-5",question:"X、Y互为替代品，当X产品的价格大幅下降时，Y产品的需求量会________。",answer:"下降",type:"填空",explanation:"",source:"200n-A1",options:[],url:[]},
  {id:"200nA1-fill-6",question:"需求量与价格成________方向变动是需求规律。",answer:"反",type:"填空",explanation:"",source:"200n-A1",options:[],url:[]},
  {id:"200nA1-fill-7",question:"在科学管理阶段提出管理具有计划、组织、指挥、协调和控制基本职能的著名管理学者是________。",answer:"法约尔",type:"填空",explanation:"",source:"200n-A1",options:[],url:[]},
  {id:"200nA1-fill-8",question:"亚当·斯密是早期管理思想的代表人，其代表作是1776年发表的经济学著作________。",answer:"国富论",type:"填空",explanation:"",source:"200n-A1",options:[],url:[]},
  {id:"200nA1-fill-9",question:"赫茨伯格的双因素包括________和激励因素。",answer:"保健因素",type:"填空",explanation:"",source:"200n-A1",options:[],url:[]},
  {id:"200nA1-fill-10",question:"所谓\"系统\"，就是由相互作用和相互依赖的若干组成部分按照一定的规律合成，具有________的有机整体。",answer:"特定功能",type:"填空",explanation:"",source:"200n-A1",options:[],url:[]},

  // ===== 判断题 =====
  {id:"200nA1-judge-1",question:"泰罗提出了管理的十四项原则。",answer:"错",type:"判断",explanation:"十四项原则由法约尔提出",source:"200n-A1",options:[],url:[]},
  {id:"200nA1-judge-2",question:"霍桑实验说明了\"经济人\"假设的正确性。",answer:"错",type:"判断",explanation:"霍桑实验证明人是\"社会人\"",source:"200n-A1",options:[],url:[]},
  {id:"200nA1-judge-3",question:"矩阵制组织适用于大批量稳定生产型企业。",answer:"错",type:"判断",explanation:"",source:"200n-A1",options:[],url:[]},
  {id:"200nA1-judge-4",question:"在组织设计中，管理幅度越窄，越易控制，管理人员的费用也越低。",answer:"错",type:"判断",explanation:"",source:"200n-A1",options:[],url:[]},
  {id:"200nA1-judge-5",question:"工艺专业化原则与对象专业化原则相比，在管理上形成的运输路线短、节省运输费用。",answer:"错",type:"判断",explanation:"",source:"200n-A1",options:[],url:[]},

  // ===== 单选题 =====
  {id:"200nA1-single-1",question:"若其他条件不变，某商品价格上升10%，能使购买者总支出增加4%，则这种情况下商品的需求价格弹性为（  ）。",answer:"C",type:"单选",explanation:"Ed=ΔQ/Q÷ΔP/P；总收入增加4%意味着需求量下降约6%\nEd≈6%/10%=0.6<1",source:"200n-A1",options:["A. 大于1","B. 等于0.4","C. 小于1","D. 等于2.5"],url:[]},
  {id:"200nA1-single-2",question:"一个管理者所处的层次越高，面临的问题越复杂，越无先例可循，就越需要（  ）。",answer:"C",type:"单选",explanation:"高层管理者最需要概念技能",source:"200n-A1",options:["A. 领导技能","B. 组织技能","C. 概念技能","D. 人事技能"],url:[]},
  {id:"200nA1-single-3",question:"提出\"以满意解代替最优解\"的决策原则的著名系统管理决策论代表人物是（  ）。",answer:"D",type:"单选",explanation:"西蒙提出有限理性与满意解",source:"200n-A1",options:["A. 泰罗","B. 法约尔","C. 梅约","D. 西蒙"],url:[]},
  {id:"200nA1-single-4",question:"某产品的价格为15元，固定成本11万元，生产该产品的单位变动成本为4元，这个产品的盈亏平衡点为（  ）。",answer:"B",type:"单选",explanation:"Q*=110000/(15-4)=10000件",source:"200n-A1",options:["A. 12100件","B. 10000件","C. 11000件","D. 15000件"],url:[]},
  {id:"200nA1-single-5",question:"在不确定性决策中，当决策者对未来比较乐观时可采用（  ）。",answer:"C",type:"单选",explanation:"乐观时采用最大最大收益值准则",source:"200n-A1",options:["A. 最大最小后悔值标准","B. 最小最大后悔值标准","C. 最大最大收益值标准","D. 最大最小收益值标准"],url:[]},

  // ===== 计算题 =====
  {id:"200nA1-calc-1",question:"某企业要投产一种新产品，投资方案有三个，不同经济形式下的利润如下表所示（单位：元）：\n方案S1：好=10，平=0，差=-1\n方案S2：好=25，平=10，差=5\n方案S3：好=50，平=0，差=-40\n用乐观系数准则（α=0.6，β=0.4）及后悔值准则进行决策。",answer:"详见解析",type:"计算",explanation:"乐观系数法：E(S1)=5.6; E(S2)=17; E(S3)=14→选S2\n后悔值准则：S1 max=40; S2 max=25 min; S3 max=45→选S2",source:"200n-A1",options:[],url:[]},
  {id:"200nA1-calc-2",question:"用图解法求解线性规划问题，并指出问题是具有唯一最优解、无穷最优解还是无界解。",answer:"详见解析",type:"计算",explanation:"需根据具体约束条件求解",source:"200n-A1",options:[],url:[]},
  {id:"200nA1-calc-3",question:"某项目净现金流量如下表（单位：万元）：1年末-90，2年末30，3年末40，4年末40，5年末40。当基准收益率i₀=20%时，试计算该项目的净现值和内部收益率，并判断该项目的经济性。",answer:"详见解析",type:"计算",explanation:"NPV(i=20%)>0; IRR≈23.02%>i₀=20%，项目可行",source:"200n-A1",options:[],url:[]},
  {id:"200nA1-calc-4",question:"某项目各工序与所需时间以及各工序的先后关系如下：\nA(2天)—; B(5天)—; C(3天)—; D(1天)紧前A,B; E(4天)紧前B; F(3天)紧前B; G(2天)紧前B,C; H(8天)紧前D,E; I(6天)紧前D,E; J(7天)紧前F,G; K(4天)紧前F,G; L(9天)紧前H,I,J; M(4天)紧前I,J; N(10天)紧前I,J,K\n要求：(1)绘制网络图；(2)计算工序I的ES、LS；(3)确定该项目的关键工序和项目的计划时间。",answer:"详见解析",type:"计算",explanation:"ES(I)=9, LS(I)=10; 关键路径：B→E→H→L; 项目计划时间=26天",source:"200n-A1",options:[],url:[]},
  {id:"200nA1-calc-5",question:"默多克拥有的《伦敦时报》是世界上的顶尖报纸之一。1993年9月起，《伦敦时报》把它的价格从45便士降到了30便士，而它的竞争对手的价格都保持不变。《伦敦时报》在1993年8月的销售量为355000份，假设报纸的需求价格弹性为0.93。求该报纸1994年5月的销售量。仅从报纸销售来看，降价是有利可图的吗？",answer:"详见解析",type:"计算",explanation:"价格变动%=-33.3%，需求量变动%≈31%\n销售量≈465050份\n原收入=15975000便士，新收入≈13951500便士\n收入下降，降价不利",source:"200n-A1",options:[],url:[]}
];

window.ALL_QUESTIONS.push(...qs);
})();
