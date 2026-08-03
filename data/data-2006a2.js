// 2006-2007第2学期A卷
(function(){
const exam = {
  id: "2006-2007-A2",
  name: "2006-2007第2学期A卷",
  year: "2006-2007",
  semester: "第2学期",
  paper: "A卷"
};
window.EXAM_DATA.push(exam);

const qs = [
  // ===== 填空题 =====
  {id:"2006A2-fill-1",question:"依据管理\"四职能说\"的观点，管理具有的四个职能是计划、组织、控制和________。",answer:"领导",type:"填空",explanation:"",source:"2006-2007-A2",options:[],url:[]},
  {id:"2006A2-fill-2",question:"内部收益率IRR是指使________为零的折现率。",answer:"净现值(NPV)",type:"填空",explanation:"",source:"2006-2007-A2",options:[],url:[]},
  {id:"2006A2-fill-3",question:"\"薄利多销\"的含义是指通过降低价格，扩大销量，增加收入。但前提条件是该商品的需求价格弹性应满足________。",answer:"富有弹性",type:"填空",explanation:"",source:"2006-2007-A2",options:[],url:[]},
  {id:"2006A2-fill-4",question:"线性规划问题的最优解一定可以在________上获得。",answer:"可行域顶点(基础可行解)",type:"填空",explanation:"",source:"2006-2007-A2",options:[],url:[]},
  {id:"2006A2-fill-5",question:"X、Y互为替代品，当X产品的价格大幅下降时，Y产品的需求量会________。",answer:"减少",type:"填空",explanation:"X降价→X需求增加→Y作为替代品需求减少",source:"2006-2007-A2",options:[],url:[]},

  // ===== 判断题 =====
  {id:"2006A2-judge-1",question:"泰罗提出了管理的十四项原则。",answer:"错",type:"判断",explanation:"管理的十四项原则由法约尔提出，泰罗是科学管理理论",source:"2006-2007-A2",options:[],url:[]},
  {id:"2006A2-judge-2",question:"霍桑实验说明了\"经济人\"假设的正确性。",answer:"错",type:"判断",explanation:"霍桑实验否定了\"经济人\"假设，证明人是\"社会人\"",source:"2006-2007-A2",options:[],url:[]},
  {id:"2006A2-judge-3",question:"矩阵制组织适用于大批量稳定生产型企业。",answer:"错",type:"判断",explanation:"矩阵制适合项目型、创新型企业，大批量稳定生产适用直线职能制",source:"2006-2007-A2",options:[],url:[]},
  {id:"2006A2-judge-4",question:"在组织设计中，管理幅度越窄，越易控制，管理人员的费用也越低。",answer:"错",type:"判断",explanation:"管理幅度越窄→层次越多→管理人员费用越高",source:"2006-2007-A2",options:[],url:[]},
  {id:"2006A2-judge-5",question:"工艺专业化原则与对象专业化原则相比，在管理上形成的运输路线短、节省运输费用。",answer:"错",type:"判断",explanation:"工艺专业化原则运输路线长、运输费用高；对象专业化原则运输路线短",source:"2006-2007-A2",options:[],url:[]},
  {id:"2006A2-judge-6",question:"目标市场定位的主要目的是确定产品销售的场所与地点。",answer:"错",type:"判断",explanation:"目标市场定位是确定产品在消费者心目中的位置，不是销售地点",source:"2006-2007-A2",options:[],url:[]},
  {id:"2006A2-judge-7",question:"质量控制是为了检验产品质量，把好产品进入市场的出厂关。",answer:"错",type:"判断",explanation:"质量控制是为了预防缺陷，不仅仅是检验出厂",source:"2006-2007-A2",options:[],url:[]},
  {id:"2006A2-judge-8",question:"在产品的生产批量很大时，应按生产工艺专业化原则布置工作场地。",answer:"错",type:"判断",explanation:"大批量生产应采用对象专业化原则布置",source:"2006-2007-A2",options:[],url:[]},
  {id:"2006A2-judge-9",question:"管理是面向集体的，不允许组织成员存在个性。",answer:"错",type:"判断",explanation:"管理要发挥组织成员的积极性和创造性，允许个性",source:"2006-2007-A2",options:[],url:[]},
  {id:"2006A2-judge-10",question:"X产品是Y产品的替代品，如果X产品价格上升会导致Y产品的需求量下降。",answer:"错",type:"判断",explanation:"替代品价格上升→替代品需求减少→Y产品需求增加",source:"2006-2007-A2",options:[],url:[]},

  // ===== 单选题 =====
  {id:"2006A2-single-1",question:"适用于产品种类多、能成为独立成本和利润核算中心、具有独立企业外部市场等特点的大型企业的组织结构形式是（  ）。",answer:"C",type:"单选",explanation:"事业部制适合多产品、独立核算、有外部市场的大型企业",source:"2006-2007-A2",options:["A. 直线制","B. 直线-职能制","C. 事业部制","D. 矩阵制"],url:[]},
  {id:"2006A2-single-2",question:"一个管理者所处的层次越高，面临的问题越复杂，越无先例可循，就越需要（  ）。",answer:"C",type:"单选",explanation:"高层管理者最需要概念技能",source:"2006-2007-A2",options:["A. 领导技能","B. 组织技能","C. 概念技能","D. 人事技能"],url:[]},
  {id:"2006A2-single-3",question:"提出\"以满意解代替最优解\"的决策原则的著名系统管理决策论代表人物是（  ）。",answer:"D",type:"单选",explanation:"西蒙（H.A.Simon）提出有限理性与满意解",source:"2006-2007-A2",options:["A. 泰罗","B. 法约尔","C. 梅约","D. 西蒙"],url:[]},
  {id:"2006A2-single-4",question:"某产品的价格为15元，固定成本11万元，生产该产品的单位变动成本为4元，这个产品的盈亏平衡点为（  ）。",answer:"B",type:"单选",explanation:"Q*=FC/(P-VC)=110000/(15-4)=10000件",source:"2006-2007-A2",options:["A. 12100件","B. 10000件","C. 11000件","D. 15000件"],url:[]},
  {id:"2006A2-single-5",question:"在不确定性决策中，当决策者对未来收益比较乐观时可采用（  ）。",answer:"C",type:"单选",explanation:"乐观时采用最大最大收益值准则（Maximax）",source:"2006-2007-A2",options:["A. 最大最小后悔值准则","B. 最小最大后悔值准则","C. 最大最大收益值准则","D. 最大最小收益值准则"],url:[]},

  // ===== 计算题 =====
  {id:"2006A2-calc-1",question:"某企业要投产一种新产品，投资方案有三个，不同经济形式下的利润如下表所示（单位：元）：\n方案S1：好=10，平=0，差=-1\n方案S2：好=25，平=10，差=5\n方案S3：好=50，平=0，差=-40\n用乐观系数准则（设乐观系数α=0.6）及后悔值准则进行决策。",answer:"详见解析",type:"计算",explanation:"乐观系数法：E(S1)=5.6; E(S2)=17; E(S3)=14\n选S2\n后悔值准则：S1 max=40; S2 max=25 min; S3 max=45\n选S2",source:"2006-2007-A2",options:[],url:[]},
  {id:"2006A2-calc-2",question:"用图解法求解线性规划问题，并指出问题是具有唯一最优解、无穷最优解还是无界解。",answer:"详见解析",type:"计算",explanation:"唯一最优解：X*=(2,3)ᵀ, maxZ=10",source:"2006-2007-A2",options:[],url:[]},
  {id:"2006A2-calc-3",question:"已知某工程项目的净现金流量情况如下表（单位：万元）：\n1年末-90，2年末30，3年末40，4年末40，5年末40。\n当基准收益率i₀=20%时，试计算该项目的净现值和内部收益率，并判断该项目的经济性。",answer:"详见解析",type:"计算",explanation:"NPV₁(i=20%)>0; IRR≈23.02%>i₀=20%，项目可行",source:"2006-2007-A2",options:[],url:[]},
  {id:"2006A2-calc-4",question:"某项目各工序与所需时间以及各工序的先后关系如下：\nA(2天)—; B(5天)—; C(3天)—; D(1天)紧前A,B; E(4天)紧前B; F(3天)紧前B; G(2天)紧前B,C; H(8天)紧前D,E; I(6天)紧前D,E; J(7天)紧前F,G; K(4天)紧前F,G; L(9天)紧前H,I,J; M(4天)紧前I,J; N(10天)紧前I,J,K\n要求：(1)绘制网络图；(2)计算工序I的ES、LS；(3)确定该项目的关键工序和项目的计划时间。",answer:"详见解析",type:"计算",explanation:"ES(I)=9, LS(I)=10; 关键路径：B→E→H→L; 项目计划时间=26天",source:"2006-2007-A2",options:[],url:[]},
  {id:"2006A2-calc-5",question:"默多克拥有的《伦敦时报》是世界上的顶尖报纸之一。《伦敦时报》在1993年8月的销售量为355000份，从1993年8月至1994年5月期间把它的价格从45便士降到了30便士，而它的竞争对手的价格始终都保持不变。假设报纸的需求价格弹性为0.93。求该报纸1994年5月的销售量。仅从报纸销售来分析，降价是有利可图的吗？为什么？",answer:"详见解析",type:"计算",explanation:"价格变动%=(30-45)/45=-33.3%\n需求量变动%=0.93×33.3%≈31%\n销售量=355000×(1+31%)≈465050份\n原收入=355000×45=15975000; 新收入≈465050×30=13951500\n收入下降，降价不利",source:"2006-2007-A2",options:[],url:[]}
];

window.ALL_QUESTIONS.push(...qs);
})();
