// 2021-2022第2学期A卷
(function(){
const exam = {
  id: "2021-2022-A",
  name: "2021-2022第2学期A卷",
  year: "2021-2022",
  semester: "第2学期",
  paper: "A卷"
};
window.EXAM_DATA.push(exam);

const qs = [
  // ===== 填空题 =====
  {id:"2021A-fill-1",question:"在真实需求发生之前按照需求预测进行生产以维持库存，称为________生产方式。",answer:"推式",type:"填空",explanation:"",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-fill-2",question:"宏观经济调控的政策目标主要体现在________、价格水平稳定、经济持续均衡增长、国际收支平衡四个方面。",answer:"充分就业",type:"填空",explanation:"",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-fill-3",question:"假设某种水果的需求函数和供给函数分别为 \\(Q_D=140-2P\\) 和 \\(Q_S=20+P\\)，则该水果的市场均衡价格P为________。",answer:"40",type:"填空",explanation:"\\(140-2P=20+P \\to 3P=120 \\to P=40\\)",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-fill-4",question:"随着价格降低其需求也降低的产品称为________。",answer:"吉芬品",type:"填空",explanation:"",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-fill-5",question:"新古典经济学的奠基者是________。",answer:"马歇尔",type:"填空",explanation:"",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-fill-6",question:"在供应链上，若当期需求增加，企业会更多预期下期也增加，人为抬高了需求预测值，从而会引起上游制造商、供应商等所获信息的剧烈变化，这种现象称为________。",answer:"牛鞭效应",type:"填空",explanation:"",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-fill-7",question:"质量管理大师石川馨发明的________可以形象地表示探讨问题的思维过程。",answer:"鱼刺图",type:"填空",explanation:"",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-fill-8",question:"设产品年需求量为2000件，单价10元/件，库存订购成本为100元/次，保存成本为40元/件/年，若不许缺货，则经济订货批量 \\(\\text{EOQ}\\) 为________件。",answer:"100",type:"填空",explanation:"\\(\\text{EOQ}=\\sqrt{\\frac{2\\times2000\\times100}{40}}=\\sqrt{1000000}=100\\)",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-fill-9",question:"利润最大的条件是边际收入等于________。",answer:"边际成本",type:"填空",explanation:"",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-fill-10",question:"项目具有独特性和________的特征。",answer:"临时性",type:"填空",explanation:"",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-fill-11",question:"假设固定成本为100万元，单位变动成本为10元，销售价格为50元，则盈亏平衡产量为________件。",answer:"25000",type:"填空",explanation:"\(Q^*=\frac{1000000}{50-10}=25000\)",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-fill-12",question:"下图中TP表示总产量。随着工人数的增加，总产量的边际增加逐渐减小，这种现象称为________。",answer:"边际报酬递减效应",type:"填空",explanation:"",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-fill-13",question:"给定生产函数 \(Q=2x^{0.5}+y^{0.5}\)，总成本预算为18000元，\(P_x=10\) 元/单位，\(P_y=20\) 元/单位，则使产量最大的生产要素 \((x,y)\) 的组合为：\(x=\)________，\(y=\)________。",answer:"1600;200",type:"填空",explanation:"由拉格朗日法：10x=2√(x)，20y=√(y)...18000=10x+20y，x=1600,y=200",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-fill-14",question:"某产品的BOM结构：产品P(1,3)，COM_A(2,1)，COM_B(1,4)，A1(3,2)，A2(2,1)，A3(2,1)，B1(5,2)，B2(2,2)。已知该产品在第20天的需求是50件，那么最晚需要在第________天开始生产________件零件A1。",answer:"17;300",type:"填空",explanation:"P提前3天→第17天需COM_A(100件)，COM_A提前1天→第16天需A1(300件)，A1提前2天→第14天...按答案为第17天300件",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-fill-15",question:"PDCA循环包括________、执行（Do）、检查（Check）和处理（Act）等四个阶段。",answer:"计划(Plan)",type:"填空",explanation:"",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-fill-16",question:"造成市场失灵的原因包括不完全竞争、________、公共产品和非对称信息。",answer:"产品外部性",type:"填空",explanation:"",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-fill-17",question:"客户需求变化越大，供应链的推/拉结合点距离销售终端应该越________。",answer:"远",type:"填空",explanation:"",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-fill-18",question:"按照支出法，GDP等于消费、投资、政府购买和________之和。",answer:"净出口",type:"填空",explanation:"",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-fill-19",question:"一种资源用于某种用途而放弃用于其他用途所丧失的最大利益称为________。",answer:"机会成本",type:"填空",explanation:"",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-fill-20",question:"产品设计要面向顾客、面向制造与装配、面向________。",answer:"环境",type:"填空",explanation:"",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-fill-21",question:"对于产品需求变动的影响因素，除________因素、周期因素和季节因素之外的因素，都归为随机因素。",answer:"趋势",type:"填空",explanation:"",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-fill-22",question:"________是指固定资产由于使用磨损或陈旧等因素的价值降低，是固定资产投资的回收方式。",answer:"折旧",type:"填空",explanation:"",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-fill-23",question:"经济学的定义大都是围绕着人们欲望的无限性和资源的________这对矛盾来阐述的。",answer:"稀缺性",type:"填空",explanation:"",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-fill-24",question:"企业制度包括企业产权制度、企业组织制度和企业________制度。",answer:"管理",type:"填空",explanation:"",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-fill-25",question:"现代企业制度的特点包括产权清晰、权责明确、________和管理科学。",answer:"政企分开",type:"填空",explanation:"",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-fill-26",question:"4R营销组合理论包括________、节省-retrenchment、关联-relativity、回报-retribution。",answer:"关系",type:"填空",explanation:"",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-fill-27",question:"产品开发的驱动方式主要有________模式、技术推动模式和竞争驱动模式。",answer:"市场拉动",type:"填空",explanation:"",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-fill-28",question:"流程效率的评价可以从不同角度进行，包括活动价值分析、绩效分析、以及重要的________。",answer:"流程参数分析",type:"填空",explanation:"",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-fill-29",question:"6σ管理的流程包括定义（Define）、测量（Measure）、分析（Analyze）、________、控制（Control）。",answer:"改进(Improve)",type:"填空",explanation:"",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-fill-30",question:"宏观经济政策包括财政政策和________。",answer:"货币政策",type:"填空",explanation:"",source:"2021-2022-A",options:[],url:[]},

  // ===== 单选题 =====
  {id:"2021A-single-1",question:"已知等产量线中设备数为100时工人数为4，设备数为200时工人数为0，则设备对工人的边际技术替代率为（  ）。",answer:"D",type:"单选",explanation:"MRTS=Δ设备/Δ工人（此处需看原卷图）",source:"2021-2022-A",options:["A. 4","B. 200","C. 50","D. 0.02"],url:[]},
  {id:"2021A-single-2",question:"在特殊时期（如战争、国家紧急状态等），某些需求极为刚性的基本消费品，关乎居民日常生活的正常进行。为了防止此类消费品价格波动而造成社会动荡，政府应该（  ）。",answer:"D",type:"单选",explanation:"",source:"2021-2022-A",options:["A. 严禁设置价格限制，依靠市场力量自动调节","B. 设置市场均衡价格，规定必须以均衡价格交易","C. 设置价格下限，当该产品供不应求时，以下限价格抛售产品","D. 设置价格上限，规定市场不可哄抬物价"],url:[]},
  {id:"2021A-single-3",question:"具有较高的资源利用效率的组织形式是（  ）。",answer:"A",type:"单选",explanation:"",source:"2021-2022-A",options:["A. 流程型","B. 职能型","C. 混合型","D. 矩阵型"],url:[]},
  {id:"2021A-single-4",question:"质量是一组（  ）满足要求的程度。",answer:"A",type:"单选",explanation:"",source:"2021-2022-A",options:["A. 固有特性","B. 特性","C. 内在特性","D. 赋予特性"],url:[]},
  {id:"2021A-single-5",question:"判断某种商品是否为生活必须品的条件是看它的（  ）是否很小。",answer:"B",type:"单选",explanation:"",source:"2021-2022-A",options:["A. 需求的价格弹性","B. 需求的收入弹性","C. 需求的交叉价格弹性","D. 供给的价格弹性"],url:[]},
  {id:"2021A-single-6",question:"收入弹性为负值的商品是（  ）。",answer:"C",type:"单选",explanation:"",source:"2021-2022-A",options:["A. 正常品","B. 奢侈品","C. 低档品","D. 必需品"],url:[]},
  {id:"2021A-single-7",question:"某产品连续5个月的实际需求分别为：45、47、43、44、46，若按照移动平均法（移动平均期数为4个月）预测，则第5个月的需求预测误差为（  ）。",answer:"C",type:"单选",explanation:"预测=(45+47+43+44)/4=44.75，误差=46-44.75=1.25...原卷答案C=0.75存疑",source:"2021-2022-A",options:["A. 1.25","B. 1","C. 0.75","D. 1.8"],url:[]},
  {id:"2021A-single-8",question:"企业在产品需求和概念设计阶段，根据质量屋的使用规则，产品的用户需求应该填写在质量屋的哪个区域？",answer:"D",type:"单选",explanation:"",source:"2021-2022-A",options:["A. D区","B. G区","C. C区","D. A区"],url:[]},
  {id:"2021A-single-9",question:"下列管理学家被后人称为「科学管理之父」的是（  ）。",answer:"D",type:"单选",explanation:"",source:"2021-2022-A",options:["A. 法约尔","B. 麦格雷戈","C. 马斯洛","D. 泰勒"],url:[]},
  {id:"2021A-single-10",question:"边际产量和平均产量的交点，是（  ）的最大点。",answer:"C",type:"单选",explanation:"",source:"2021-2022-A",options:["A. 边际产量","B. 边际成本","C. 平均产量","D. 平均成本"],url:[]},
  {id:"2021A-single-11",question:"比垄断竞争市场的产品提供者数量还要少的市场是（  ）。",answer:"D",type:"单选",explanation:"",source:"2021-2022-A",options:["A. 只有寡头垄断市场","B. 寡头垄断市场和自由竞争市场","C. 只有完全垄断市场","D. 寡头垄断市场和完全垄断市场"],url:[]},
  {id:"2021A-single-12",question:"设价格函数为 \(P=50-5Q\)，单位变动成本为20元，固定成本为30元。完全垄断企业利润最优时的垄断价格为（  ）元。",answer:"B",type:"单选",explanation:"\(MR=50-10Q=MC=20 \to Q=3 \to P=35\)",source:"2021-2022-A",options:["A. 3","B. 35","C. 10","D. 50"],url:[]},
  {id:"2021A-single-13",question:"以指数平滑法预测某品牌电视需求量，当月预测值100台，实际值120台，平滑系数 \(\\alpha=0.1\)，下月需求预测值的计算式为（  ）。",answer:"C",type:"单选",explanation:"\\(F=100+0.1\\times(120-100)\\)",source:"2021-2022-A",options:["A. \\(120+0.1\\times(120-100)\\)","B. \\(100+0.1\\times(100-120)\\)","C. \\(100+0.1\\times(120-100)\\)","D. \\(120+0.1\\times(100-120)\\)"],url:[]},
  {id:"2021A-single-14",question:"已知某投资项目各年净现金流量：0年-1000，1年200，2年300，3年400，4年400，5年100，6年200，7年100。静态投资回收期为（  ）。",answer:"C",type:"单选",explanation:"累计3年末=-100，4年末=300，需100/400=0.25年→3.75年",source:"2021-2022-A",options:["A. 3年","B. 4年","C. 3.75年","D. 3.25年"],url:[]},
  {id:"2021A-single-15",question:"主生产计划要进一步分解为（  ）。",answer:"C",type:"单选",explanation:"",source:"2021-2022-A",options:["A. 综合计划","B. 车间调度计划","C. 物料需求计划","D. 销售计划"],url:[]},
  {id:"2021A-single-16",question:"检查项目进度时，计划值为350，挣得值为275，实际成本为320，项目进展情况是（  ）。",answer:"A",type:"单选",explanation:"SV=275-350<0进度延误；CV=275-320<0费用超支",source:"2021-2022-A",options:["A. 进度延误，费用超支","B. 进度提前，费用超支","C. 进度延误，费用节约","D. 进度提前，费用节约"],url:[]},
  {id:"2021A-single-17",question:"流程周期效率越接近于（  ），流程中的增值活动成分就越多，精益水平就越高。",answer:"C",type:"单选",explanation:"",source:"2021-2022-A",options:["A. 0","B. 0.5","C. 1","D. 0.8"],url:[]},
  {id:"2021A-single-18",question:"牛肉价格升高，导致牛肉消耗量减少，这是（  ）。",answer:"B",type:"单选",explanation:"",source:"2021-2022-A",options:["A. 需求变动","B. 需求量变动","C. 供给变动","D. 供给量变动"],url:[]},
  {id:"2021A-single-19",question:"厂商追求利润最大化遵循的条件是（  ）。",answer:"D",type:"单选",explanation:"",source:"2021-2022-A",options:["A. 边际收益等于平均成本","B. 边际收益等于总收益","C. 边际收益等于单位固定成本","D. 边际收益等于边际成本"],url:[]},
  {id:"2021A-single-20",question:"考虑由企业、工人和政府三方构成的简单经济体。企业雇佣工人当年生产了价值10万亿元的产品，销售了8万亿元。企业发给工人工资5万亿元，上缴利税2万亿元。政府发给公务员工资1万亿元，出口4万亿元，进口2万亿元。工人和公务员花了4万亿消费，2万亿投资股票。按支出法核算GDP为（  ）。",answer:"A",type:"单选",explanation:"",source:"2021-2022-A",options:["A. 10万亿元","B. 9万亿元","C. 11万亿元","D. 8万亿元"],url:[]},
  {id:"2021A-single-21",question:"不同层次管理者对管理技能的要求也不同，越是高层次的管理者，对（  ）的要求就越高。",answer:"D",type:"单选",explanation:"",source:"2021-2022-A",options:["A. 人际技能","B. 技术技能","C. 写作技能","D. 概念技能"],url:[]},
  {id:"2021A-single-22",question:"企业制度是指以（  ）为基础的企业组织和管理制度。",answer:"A",type:"单选",explanation:"",source:"2021-2022-A",options:["A. 产权","B. 组织","C. 人事","D. 管理"],url:[]},
  {id:"2021A-single-23",question:"有一个为装配线提供零件的加工中心，基于单看板系统实现了JIT生产。容器容量为4，L=5小时，D=6个/小时，安全系数S=10%，生产/搬运看板数为（  ）。",answer:"D",type:"单选",explanation:"N=6×5×1.1/4=8.25→向上取整9",source:"2021-2022-A",options:["A. 8","B. 7","C. 8.25","D. 9"],url:[]},
  {id:"2021A-single-24",question:"下述哪种属于「理性经济人」假设？",answer:"C",type:"单选",explanation:"",source:"2021-2022-A",options:["A. 大量购买明星代言高价产品的追星一族","B. 捡到现金后去用现金消费的人","C. 追求地区GDP最大化的当地政府","D. 无私奉献的志愿者"],url:[]},
  {id:"2021A-single-25",question:"库存保管成本的高低和（  ）呈正相关关系。",answer:"A",type:"单选",explanation:"",source:"2021-2022-A",options:["A. 订货批量","B. 订货次数","C. 缺货成本","D. 订货成本"],url:[]},

  // ===== 多选题 =====
  {id:"2021A-multi-1",question:"下述哪些措施可以消除JIT生产系统所定义的「浪费」？",answer:"BD",type:"多选",explanation:"",source:"2021-2022-A",options:["A. 工人甲单位时间内生产出了比计划产量更多的产品","B. 将需求信息及时传递给生产部门以加快订单交付","C. 为了遏制同行竞争，某彩电企业囤积了大量彩色显像管","D. 工人乙将更换机床刀具的时间由4小时降低到了1分钟"],url:[]},
  {id:"2021A-multi-2",question:"某民用无人机制造商运用价值工程分析提高顾客价值，下述方案中可行的是（  ）。",answer:"BD",type:"多选",explanation:"",source:"2021-2022-A",options:["A. 增大发动机推力，大幅提高价格","B. 减少非标准化的零件，降低价格","C. 提供某些增值服务，收取超额服务费","D. 减少不必要的功能，降低价格"],url:[]},
  {id:"2021A-multi-3",question:"宏观经济调控的政策目标主要体现在以下哪些方面？",answer:"ABCD",type:"多选",explanation:"",source:"2021-2022-A",options:["A. 经济持续均衡增长","B. 价格水平稳定","C. 充分就业","D. 国际收支平衡"],url:[]},
  {id:"2021A-multi-4",question:"在GDP的计算方法中，消费支出包括下列哪几项？",answer:"ABC",type:"多选",explanation:"购买新住房属于投资",source:"2021-2022-A",options:["A. 购买汽车、家俱等耐用品","B. 购买食品、衣服等非耐用品","C. 劳务支出","D. 购买新住房"],url:[]},
  {id:"2021A-multi-5",question:"市场失灵的原因包括下列哪几项？",answer:"ABCD",type:"多选",explanation:"",source:"2021-2022-A",options:["A. 产品外部性","B. 非对称信息/不完全信息","C. 公共产品问题","D. 不完全竞争"],url:[]},
  {id:"2021A-multi-6",question:"下面哪几项属于供应链管理需要考虑的？",answer:"ABCD",type:"多选",explanation:"",source:"2021-2022-A",options:["A. 网络关系","B. 工作流","C. 贸易伙伴关系","D. 资金流"],url:[]},
  {id:"2021A-multi-7",question:"以下哪些原因可导致供应链产生牛鞭效应？",answer:"ABC",type:"多选",explanation:"",source:"2021-2022-A",options:["A. 数量折扣","B. 放大的需求预测","C. 价格恐惧","D. 产品外部性"],url:[]},
  {id:"2021A-multi-8",question:"下述哪些是微观经济学研究的问题？",answer:"BD",type:"多选",explanation:"",source:"2021-2022-A",options:["A. 国内生产总值","B. 市场均衡","C. 就业","D. 需求弹性"],url:[]},
  {id:"2021A-multi-9",question:"下述哪些情况属于失业？",answer:"CD",type:"多选",explanation:"",source:"2021-2022-A",options:["A. 在校大学生因为学业紧张放弃了兼职的机会","B. 有小孩的母亲选择全职照顾家庭","C. 某公司改进了生产技术，导致一些不掌握新技术的老工人失去工作","D. 因经济周期不景气，就业岗位不足，劳动人口过剩而导致部分人找不到工作"],url:[]},
  {id:"2021A-multi-10",question:"市场结构取决于下列哪些项？",answer:"ABCD",type:"多选",explanation:"",source:"2021-2022-A",options:["A. 买主和卖主数量的多少","B. 新的生产者进入一个市场的难易程度","C. 产品之间相互差异的程度","D. 厂商间的竞争方式"],url:[]},

  // ===== 计算题 =====
  {id:"2021A-calc-1",question:"2021年9月下旬，沈阳等地拉闸限电。假设动力煤的日供给函数在能耗双控政策前为 \\(Q_s=8P-5050\\)，政策后为 \\(Q_s=5P-7450\\)；火电厂日需求函数为 \\(Q_d=3050-2P\\)（Q单位万吨，P单位万元/万吨）。\n(1)求政策前的均衡点；(2)求政策后的均衡点，比较差异；(3)政府限制价格上涨幅度不超过政策前市场价的20%，且供给函数变为Qs=5P-3810，求市场价格和交易量，动力煤还短缺多少万吨？",answer:"详见解析",type:"计算",explanation:"(1)\\(3050-2P=8P-5050 \\to 10P=8100 \\to P=810, Q=1430\\)\n(2)\\(3050-2P=5P-7450 \\to 7P=10500 \\to P=1500, Q=50\\)→均衡价格大幅上涨，交易量大幅下降\n(3)限价\\(P=810\\times1.2=972\\)，\\(Q_d=3050-2\\times972=1106\\)，\\(Q_s=5\\times972-3810=1050\\)，短缺\\(=1106-1050=56\\)万吨",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-calc-2",question:"某工程项目的现金流量：0年-6000万元，1~10年每年1500万元。设基准收益率 \\(i_0=10\\%\\)，试用净现值和内部收益率两种方法评判方案的可行性。",answer:"详见解析",type:"计算",explanation:"\\(\\text{NPV}=-6000+1500\\times(P/A,10\\%,10)=-6000+1500\\times6.1445=3216.75\\) 万元\\(>0\\)，方案可行\nIRR：\\(-6000+1500\\times(P/A,\\text{IRR},10)=0 \\to (P/A,\\text{IRR},10)=4 \\to \\) 查表\\(\\text{IRR}\\approx22\\%>10\\%\\)，可行",source:"2021-2022-A",options:[],url:[]},
  {id:"2021A-calc-3",question:"某项目各活动之间的逻辑依赖关系：A无紧前(4天)；B紧前A，FS5(7天)；C紧前A，FS3(10天)；D紧前A，FS0(13天)；E紧前B和C，与B是FS0，与C是SS3(8天)；F紧前C和D，与C是SS4，与D是FS2(12天)；G紧前E和F，与E是FS0，与F是FF5(5天)。\n(1)绘制网络图；(2)计算ES、EF、LS、LF、TF、FF；(3)写出关键路径。",answer:"详见解析",type:"计算",explanation:"需绘制网络图并计算各时间参数",source:"2021-2022-A",options:[],url:[]}
];

window.ALL_QUESTIONS.push(...qs);
})();
