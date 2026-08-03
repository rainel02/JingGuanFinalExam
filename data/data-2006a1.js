// 2006-2007第1学期A卷
(function(){
const exam = {
  id: "2006-2007-A1",
  name: "2006-2007第1学期A卷",
  year: "2006-2007",
  semester: "第1学期",
  paper: "A卷"
};
window.EXAM_DATA.push(exam);

const qs = [
  // ===== 填空题 =====
  {id:"2006A1-fill-1",question:"需求量与价格成________方向变动是需求规律。",answer:"反",type:"填空",explanation:"",source:"2006-2007-A1",options:[],url:[]},
  {id:"2006A1-fill-2",question:"某经济学教授年薪6万元，但他当公务员每年只能得到3万元工资，应聘在外企工作的年薪为10万元，则他当教授的机会成本是________。",answer:"10万元",type:"填空",explanation:"机会成本是放弃的最佳替代选择的收入",source:"2006-2007-A1",options:[],url:[]},
  {id:"2006A1-fill-3",question:"在科学管理阶段提出管理具有计划、组织、指挥、协调和控制基本职能的著名管理学者是________。",answer:"法约尔",type:"填空",explanation:"",source:"2006-2007-A1",options:[],url:[]},
  {id:"2006A1-fill-4",question:"\"薄利多销\"的含义是指通过降低价格，扩大销量，增加收入。但前提条件是该商品的需求价格弹性应满足________。",answer:"富有弹性",type:"填空",explanation:"",source:"2006-2007-A1",options:[],url:[]},
  {id:"2006A1-fill-5",question:"经济学的研究对象是解决资源的________与人的欲望的无限性之间矛盾的一门科学。",answer:"稀缺性",type:"填空",explanation:"",source:"2006-2007-A1",options:[],url:[]},
  {id:"2006A1-fill-6",question:"亚当·斯密是早期管理思想的代表人，其代表作是1776年发表的经济学著作________。",answer:"国富论",type:"填空",explanation:"《国民财富的性质和原因的研究》简称《国富论》",source:"2006-2007-A1",options:[],url:[]},
  {id:"2006A1-fill-7",question:"赫茨伯格的双因素包括________和激励因素。",answer:"保健因素",type:"填空",explanation:"",source:"2006-2007-A1",options:[],url:[]},
  {id:"2006A1-fill-8",question:"所谓\"系统\"，就是由相互作用和相互依赖的若干组成部分按照一定的规律合成，具有________的有机整体。",answer:"特定功能",type:"填空",explanation:"",source:"2006-2007-A1",options:[],url:[]},
  {id:"2006A1-fill-9",question:"美国贝尔研究所工程师、系统工程学者霍尔在1969年提出的系统工程三维结构包括时间维、________和知识维。",answer:"逻辑维",type:"填空",explanation:"",source:"2006-2007-A1",options:[],url:[]},
  {id:"2006A1-fill-10",question:"企业是指从事商品生产、流通及服务性活动，满足社会需要并获取利润，实行自主经营、________、自我发展、自我约束，具有法人资格的基本经营单位。",answer:"自负盈亏",type:"填空",explanation:"",source:"2006-2007-A1",options:[],url:[]},

  // ===== 单选题 =====
  {id:"2006A1-single-1",question:"厂商追求利润最大化遵循的条件是（  ）。",answer:"D",type:"单选",explanation:"利润最大化的条件是边际收益等于边际成本 MR=MC",source:"2006-2007-A1",options:["A. 边际收益等于平均成本","B. 边际收益等于总收益","C. 边际收益不等于边际成本","D. 边际收益等于边际成本"],url:[]},
  {id:"2006A1-single-2",question:"X、Y互为互补品，当X产品的价格大幅上升时，Y产品的需求量会（  ）。",answer:"B",type:"单选",explanation:"互补品价格上升→需求量下降→另一互补品需求也下降",source:"2006-2007-A1",options:["A. 上升","B. 下降","C. 不变","D. 难以判断"],url:[]},
  {id:"2006A1-single-3",question:"某产品的价格为15元，固定成本11万元，生产该产品的单位变动成本为4元，这个产品的盈亏平衡点为（  ）。",answer:"B",type:"单选",explanation:"Q*=FC/(P-VC)=110000/(15-4)=10000件",source:"2006-2007-A1",options:["A. 12100件","B. 10000件","C. 11000件","D. 15000件"],url:[]},
  {id:"2006A1-single-4",question:"在不确定性决策中，当决策者对未来比较乐观时可采用（  ）。",answer:"C",type:"单选",explanation:"乐观时采用最大最大收益值准则（Maximax）",source:"2006-2007-A1",options:["A. 最大最小后悔值标准","B. 最小最大后悔值标准","C. 最大最大收益值标准","D. 最大最小收益值标准"],url:[]},
  {id:"2006A1-single-5",question:"在网络计划中不消耗资源的网络要素是（  ）。",answer:"C",type:"单选",explanation:"结点（事件）不消耗时间和资源",source:"2006-2007-A1",options:["A. 活动","B. 非关键活动","C. 结点","D. 关键线路"],url:[]},
  {id:"2006A1-single-6",question:"当决策的状态空间有两个或两个以上，且各状态发生的概率已知，此时面对的决策问题属于（  ）。",answer:"C",type:"单选",explanation:"概率已知的决策属于风险型决策",source:"2006-2007-A1",options:["A. 确定型决策","B. 非程序决策","C. 风险型决策","D. 定性决策"],url:[]},
  {id:"2006A1-single-7",question:"流动资产将在一个生产周期中（  ）被消耗，其价值（  ）转移到产品成本中。",answer:"A",type:"单选",explanation:"流动资产一次性消耗，价值一次性转移",source:"2006-2007-A1",options:["A. 一次性；一次性","B. 一次性；逐渐","C. 逐渐；一次性","D. 逐渐；逐渐"],url:[]},
  {id:"2006A1-single-8",question:"某企业的生产函数为 \\(Q=10K^{0.7}L^{0.4}\\)，其中Q为产量，K为资本投入量，L为劳动投入量。据此可以判断出该企业的规模收益类型为（  ）。",answer:"A",type:"单选",explanation:"α+β=0.7+0.4=1.1>1，规模收益递增",source:"2006-2007-A1",options:["A. 递增","B. 递减","C. 不变","D. 先递增，后递减"],url:[]},
  {id:"2006A1-single-9",question:"某设备的价值为40000元，十年报废，采用双倍余额递减法计算折旧，则到第二年年末，该设备的净值为（  ）。",answer:"A",type:"单选",explanation:"双倍余额递减法：折旧率=2/10=20%\n第1年折旧=40000×20%=8000，净值=32000\n第2年折旧=32000×20%=6400，净值=25600",source:"2006-2007-A1",options:["A. 25600","B. 24000","C. 32000","D. 26400"],url:[]},
  {id:"2006A1-single-10",question:"提出\"以满意解代替最优解\"的决策原则的著名系统管理决策论代表人物是（  ）。",answer:"D",type:"单选",explanation:"西蒙（H.A.Simon）提出有限理性与满意解",source:"2006-2007-A1",options:["A. 泰罗","B. 法约尔","C. 梅约","D. 西蒙"],url:[]},

  // ===== 多选题 =====
  {id:"2006A1-multi-1",question:"泰罗创立了科学管理理论，被称之为\"科学管理之父\"，其代表作包括（  ）。",answer:"ABC",type:"多选",explanation:"",source:"2006-2007-A1",options:["A. 《计件工资制》","B. 《工厂管理》","C. 《科学管理原理》","D. 《工业管理与一般管理》"],url:[]},
  {id:"2006A1-multi-2",question:"行为科学学派从（  ）等方面研究如何提高工人的生产效率和责任心，从而形成了与Taylor几乎相反的学派。",answer:"ACD",type:"多选",explanation:"",source:"2006-2007-A1",options:["A. 心理学","B. 哲学","C. 生理学","D. 社会学"],url:[]},
  {id:"2006A1-multi-3",question:"产品品种决策的波斯顿咨询集团四方格法采用的计算指标包括（  ）。",answer:"AC",type:"多选",explanation:"",source:"2006-2007-A1",options:["A. 产品相对市场占有率","B. 产品市场占有率","C. 产品的行业销售增长率","D. 产品的销售增长率"],url:[]},
  {id:"2006A1-multi-4",question:"影响需求的因素主要包括（  ）。",answer:"ABD",type:"多选",explanation:"",source:"2006-2007-A1",options:["A. 商品价格","B. 消费者收入水平","C. 厂商对未来的预期","D. 社会收入分配的平均程度"],url:[]},
  {id:"2006A1-multi-5",question:"需求的交叉弹性为正值表明两种相关物品不是（  ）。",answer:"ABD",type:"多选",explanation:"交叉弹性为正→替代品，不是互补品、高级品、低级品",source:"2006-2007-A1",options:["A. 互补品","B. 高级品","C. 替代品","D. 低级品"],url:[]},

  // ===== 计算题 =====
  {id:"2006A1-calc-1",question:"某企业要投产一种新产品，投资方案有三个，不同经济形式下的利润如下表所示（单位：元）：\n方案S1：好=10，平=0，差=-1\n方案S2：好=25，平=10，差=5\n方案S3：好=50，平=0，差=-40\n用乐观系数准则（α=0.6）及后悔值准则进行决策。",answer:"详见解析",type:"计算",explanation:"乐观系数法：E(S1)=10×0.6+(-1)×0.4=5.6; E(S2)=25×0.6+5×0.4=17; E(S3)=50×0.6+(-40)×0.4=14\n所以选S2\n后悔值准则：S1 max=40; S2 max=25 min; S3 max=45\n所以选S2",source:"2006-2007-A1",options:[],url:[]},
  {id:"2006A1-calc-2",question:"某项目各工序与所需时间以及各工序的先后关系如下：\nA(2天)—; B(5天)—; C(3天)—; D(1天)紧前A,B; E(4天)紧前B; F(3天)紧前B; G(2天)紧前B,C; H(8天)紧前D,E; I(6天)紧前D,E; J(7天)紧前F,G; K(4天)紧前F,G; L(9天)紧前H,I,J; M(4天)紧前I,J; N(10天)紧前I,J,K\n要求：(1)绘制网络图；(2)计算工序I的ES、LS；(3)确定该项目的关键工序和项目的计划时间。",answer:"详见解析",type:"计算",explanation:"ES(I)=9, LS(I)=10; 关键路径：B→E→H→L; 项目计划时间=26天",source:"2006-2007-A1",options:[],url:[]},
  {id:"2006A1-calc-3",question:"某工厂计划安排生产A和B两种产品，已知生产单位产品所需的设备和原材料如下：设备A=4,B=3,可用12台时；原材料1：A=1,B=2,可用6kg；原材料2：A=1,B=0,可用2kg。每件A获利2元，B获利5元，求最大利润。",answer:"详见解析",type:"计算",explanation:"Max Z=2X₁+5X₂\n约束：4X₁+3X₂≤12, X₁+2X₂≤6, X₁≤2\n解：X₁=0, X₂=3, MaxZ=15元",source:"2006-2007-A1",options:[],url:[]},
  {id:"2006A1-calc-4",question:"某方案的现金流量如下（单位：万元），标准折现率为8%，以净现值（NPV）评价该方案是否可行。\n0年-240，1年-80，2年50，3年70，4年120，5年190。",answer:"详见解析",type:"计算",explanation:"NPV=-240-80/(1.08)+50/(1.08)²+70/(1.08)³+120/(1.08)⁴+190/(1.08)⁵\n≈18574万元>0，方案可行",source:"2006-2007-A1",options:[],url:[]},
  {id:"2006A1-calc-5",question:"考虑如下的等额年金现金流量图，若基准贴现率为i，推导其动态投资回收期公式，并说明Pi/A<1的经济意义。",answer:"详见解析",type:"计算",explanation:"设动态回收期为nd，则P=A(1+i)⁻¹+A(1+i)⁻²+...+A(1+i)⁻ⁿᵈ\nP(1+i)ⁿᵈ=[A(1+i)ⁿᵈ-A]/i\nnd=-lg(1-Pi/A)/lg(1+i)\nPi/A<1意味着贷款利息Pi小于每年收益A，否则永远无法回收投资",source:"2006-2007-A1",options:[],url:[]}
];

window.ALL_QUESTIONS.push(...qs);
})();
