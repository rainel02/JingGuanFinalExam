// 2013-2014 A卷(部分回忆版)
(function(){
const exam = {
  id: "2013-2014-A",
  name: "2013-2014 A卷(部分)",
  year: "2013-2014",
  semester: "",
  paper: "A卷(部分)"
};
window.EXAM_DATA.push(exam);

const qs = [
  // ===== 填空题 =====
  {id:"2013A-fill-1",question:"经济学的定义，欲望无限和资源________这对矛盾。",answer:"稀缺性",type:"填空",explanation:"",source:"2013-2014-A",options:[],url:["images/2013a/001.png"]},
  {id:"2013A-fill-2",question:"X、Y互为替代品，X价格下降，Y需求如何变化？",answer:"减少",type:"填空",explanation:"X价格下降→X需求增加→Y作为替代品需求减少",source:"2013-2014-A",options:[],url:[]},
  {id:"2013A-fill-3",question:"组织管理跨度越宽，则层次？",answer:"越少",type:"填空",explanation:"",source:"2013-2014-A",options:[],url:[]},
  {id:"2013A-fill-4",question:"产量相等生产要素曲线叫________。",answer:"等产量线",type:"填空",explanation:"",source:"2013-2014-A",options:[],url:[]},
  {id:"2013A-fill-5",question:"宏观经济政策包括财政政策和________。",answer:"货币政策",type:"填空",explanation:"",source:"2013-2014-A",options:[],url:[]},
  {id:"2013A-fill-6",question:"企业战略三层次：企业战略、经营战略、________。",answer:"职能战略",type:"填空",explanation:"",source:"2013-2014-A",options:[],url:[]},
  {id:"2013A-fill-7",question:"4PS：产品、价格、促销、________。",answer:"渠道(Place)",type:"填空",explanation:"",source:"2013-2014-A",options:[],url:[]},
  {id:"2013A-fill-8",question:"集成化强调各环节________。",answer:"并行/共同参与",type:"填空",explanation:"",source:"2013-2014-A",options:[],url:[]},
  {id:"2013A-fill-9",question:"年需求量1000件，订购成本100元/次，保存成本20元/件/年，不许缺货EOQ为________。",answer:"100",type:"填空",explanation:"EOQ=√(2×1000×100/20)=√(1000000)=100",source:"2013-2014-A",options:[],url:[]},
  {id:"2013A-fill-10",question:"在真实需求发生前按需求预测生产以维持库存，称为________。",answer:"推式生产",type:"填空",explanation:"",source:"2013-2014-A",options:[],url:[]},
  {id:"2013A-fill-11",question:"客户需求变化大，推/拉结合点距离销售终端________。",answer:"远",type:"填空",explanation:"",source:"2013-2014-A",options:[],url:[]},
  {id:"2013A-fill-12",question:"PDCA循环包括：计划、执行、________、处理。",answer:"检查",type:"填空",explanation:"",source:"2013-2014-A",options:[],url:[]},
  {id:"2013A-fill-13",question:"项目管理团队采用：计划、________、领导和控制。",answer:"组织",type:"填空",explanation:"",source:"2013-2014-A",options:[],url:[]},
  {id:"2013A-fill-14",question:"项目生命周期一般分为启动、________、实施和收尾四个阶段。",answer:"规划/计划",type:"填空",explanation:"",source:"2013-2014-A",options:[],url:[]},
  {id:"2013A-fill-15",question:"某产品BOM结构P(1,3),COM_A(2,1),A1(3,2),A2(2,1),A3(2,1),COM_B(1,4),B1(5,2),B2(2,2)，第20天需34件，在________天开始生产204件零件A1。",answer:"17",type:"填空",explanation:"",source:"2013-2014-A",options:[],url:[]},
  {id:"2013A-fill-16",question:"项目期初投200万，第1-3年每年年末净现金流量60万元，第4年后每年净现金流量为50万元，则静态回收期为________年。",answer:"3.4",type:"填空",explanation:"3年回收180万，第4年需20万/50万=0.4年→3.4年",source:"2013-2014-A",options:[],url:[]},
  {id:"2013A-fill-17",question:"折现率16%，净现值30元；折现率18%，净现值-20。插值法，则内部收益率为________。",answer:"17.2%",type:"填空",explanation:"IRR=16%+(30/(30+20))×(18%-16%)=16%+1.2%=17.2%",source:"2013-2014-A",options:[],url:[]},
  {id:"2013A-fill-18",question:"泰勒被称为________之父。",answer:"科学管理",type:"填空",explanation:"",source:"2013-2014-A",options:[],url:[]},
  {id:"2013A-fill-19",question:"Q=2x^0.5+y^0.5，总成本预算18000元，Px=10,Py=20，最佳组合x=1600，y=________。",answer:"200",type:"填空",explanation:"",source:"2013-2014-A",options:[],url:[]},
  {id:"2013A-fill-20",question:"不考虑公差中心偏移，保证产品质量合格率99.73%，过程控制图上下限控制应涵括________个方差。",answer:"6",type:"填空",explanation:"3σ控制，上下限共6个标准差",source:"2013-2014-A",options:[],url:[]},

  // ===== 选择题 =====
  {id:"2013A-single-1",question:"一定不是经济资源的是",answer:"D",type:"单选",explanation:"",source:"2013-2014-A",options:["A. 人力资源","B. 资本资源","C. 信息资源","D. 自由资源"],url:[]},
  {id:"2013A-single-2",question:"价格上升6%，需求增加9%，需求价格弹性为",answer:"A",type:"单选",explanation:"Ed=9%/6%=1.5",source:"2013-2014-A",options:["A. 1.5","B. 0.54","C. 3","D. 0.67"],url:[]},
  {id:"2013A-single-3",question:"管理四大职能，下面哪一项不属于控制职能？",answer:"D",type:"单选",explanation:"",source:"2013-2014-A",options:["A. 绩效评价","B. 财务报表审核","C. 库存控制","D. 产量计划"],url:[]},
  {id:"2013A-single-4",question:"人力畜力两种生产要素的边际技术替代率（沿等产量线移动时）",answer:"C",type:"单选",explanation:"随着人力增加，边际技术替代率递减",source:"2013-2014-A",options:["A. 保持不变","B. 增加","C. 减少","D. 无法确知"],url:[]},
  {id:"2013A-single-5",question:"管理的计划职能错误的是",answer:"A",type:"单选",explanation:"计划不能完全独立于其他管理职能",source:"2013-2014-A",options:["A. 计划完全独立于其他管理职能","B. (其他选项)"],url:[]},
  {id:"2013A-single-6",question:"判断是否为生活必需品看什么弹性？",answer:"需求的收入弹性",type:"单选",explanation:"",source:"2013-2014-A",options:["A. 需求的价格弹性","B. 需求的收入弹性","C. 需求的交叉价格弹性","D. 供给的价格弹性"],url:[]},
  {id:"2013A-single-7",question:"不可计入国民生产总值的是",answer:"拍卖齐白石作品的收入",type:"单选",explanation:"二手艺术品拍卖是资产转移，不计入GDP",source:"2013-2014-A",options:["A. 拍卖齐白石作品的收入","B. (其他选项)"],url:[]},
  {id:"2013A-single-8",question:"PV=350，EV=275，AC=300，则进度（  ），费用（  ）",answer:"进度延误，费用超支",type:"单选",explanation:"SV=275-350<0；CV=275-300<0",source:"2013-2014-A",options:["A. 进度提前，费用节约","B. 进度延误，费用超支","C. 进度提前，费用超支","D. 进度延误，费用节约"],url:[]},
  {id:"2013A-single-9",question:"从营销观点出发，产品价值由哪项决定？",answer:"",type:"单选",explanation:"（原卷回忆版，答案不完整）",source:"2013-2014-A",options:[],url:[]},
  {id:"2013A-single-10",question:"满足顾客需求，较低成本获得相同或更好性能的方法是（  ）",answer:"B",type:"单选",explanation:"",source:"2013-2014-A",options:["A. 质量屋","B. 价值分析","C. 集成化开发","D. 模块化"],url:[]},
  {id:"2013A-single-11",question:"较高资源利用效率的组织形式",answer:"A",type:"单选",explanation:"",source:"2013-2014-A",options:["A. 流程型","B. 混合型","C. 职能型","D. 矩阵型"],url:[]},
  {id:"2013A-single-12",question:"离散装配型企业采用生产类型？",answer:"A",type:"单选",explanation:"",source:"2013-2014-A",options:["A. 单件小批量","B. 装配型","C. 对象型","D. 连续流程"],url:[]},
  {id:"2013A-single-14",question:"企业集中做好自己擅长业务，与其他企业合作，整合整条链上资源，什么经营模式？",answer:"A",type:"单选",explanation:"",source:"2013-2014-A",options:["A. 纵向一体化","B. 横向一体化","C. 多元化","D. 系统管理"],url:[]},
  {id:"2013A-single-15",question:"除物流信息流，还考虑供应链中",answer:"D",type:"单选",explanation:"",source:"2013-2014-A",options:["A. 资金流","B. 工作流","C. 贸易伙伴关系","D. 以上都是"],url:[]},
  {id:"2013A-single-18",question:"关键路线计算",answer:"",type:"单选",explanation:"（原卷回忆版，需看具体图）",source:"2013-2014-A",options:[],url:[]}
];

window.ALL_QUESTIONS.push(...qs);
})();
