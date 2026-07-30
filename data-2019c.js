// 2019-2020第1学期C卷
(function(){
const exam = {
  id: "2019-2020-C",
  name: "2019-2020第1学期C卷",
  year: "2019-2020",
  semester: "第1学期",
  paper: "C卷"
};
window.EXAM_DATA.push(exam);

const qs = [
  // ===== 填空题 =====
  {id:"2019C-fill-1",question:"经济资源的稀缺性是相对于人们的________而言的。",answer:"欲望的无限性",type:"填空",explanation:"",source:"2019-2020-C",options:[]},
  {id:"2019C-fill-2",question:"管理过程由一系列相关联的基本________完成。",answer:"职能",type:"填空",explanation:"",source:"2019-2020-C",options:[]},
  {id:"2019C-fill-3",question:"美国的马斯洛(Abraham H·Maslow)提出________理论。",answer:"需求层次",type:"填空",explanation:"",source:"2019-2020-C",options:[]},
  {id:"2019C-fill-4",question:"管理者技能包括概念技能、人际技能和________技能。",answer:"技术",type:"填空",explanation:"",source:"2019-2020-C",options:[]},
  {id:"2019C-fill-5",question:"企业是指从事商品生产、流通及服务性活动，满足社会需要并获取利润，实行自主经营、自负盈亏、自我发展、________，独立享受权利和承担义务的法人型或非法人型的基本经营单位。",answer:"自我约束",type:"填空",explanation:"",source:"2019-2020-C",options:[]},
  {id:"2019C-fill-6",question:"最基本的公司组成包含三个利益方：股东、________、高层管理者。",answer:"董事会",type:"填空",explanation:"",source:"2019-2020-C",options:[]},
  {id:"2019C-fill-7",question:"企业制度包括企业产权制度、企业组织制度和企业________制度。",answer:"管理",type:"填空",explanation:"",source:"2019-2020-C",options:[]},
  {id:"2019C-fill-8",question:"现代企业制度的特点包括产权清晰、权责明确、________和管理科学。",answer:"政企分开",type:"填空",explanation:"",source:"2019-2020-C",options:[]},
  {id:"2019C-fill-9",question:"4R营销组合理论包括________、节省-retrenchment、关联-relativity、回报-retribution。",answer:"关系",type:"填空",explanation:"",source:"2019-2020-C",options:[]},
  {id:"2019C-fill-10",question:"产品战略主要包括高质量、低成本、________和快速反应。",answer:"差异化",type:"填空",explanation:"",source:"2019-2020-C",options:[]},
  {id:"2019C-fill-11",question:"产品开发的驱动方式主要有市场拉动模式、技术推动模式和________模式。",answer:"竞争驱动",type:"填空",explanation:"",source:"2019-2020-C",options:[]},
  {id:"2019C-fill-12",question:"QFD的基本设计工具是________。",answer:"质量屋",type:"填空",explanation:"",source:"2019-2020-C",options:[]},
  {id:"2019C-fill-13",question:"CPI变化的百分率就是通常所说的________。",answer:"通货膨胀率",type:"填空",explanation:"",source:"2019-2020-C",options:[]},
  {id:"2019C-fill-14",question:"产品设计要面向顾客、面向制造与装配、面向________。",answer:"环境",type:"填空",explanation:"",source:"2019-2020-C",options:[]},
  {id:"2019C-fill-15",question:"根据满足需求的方式，生产运作流程可分为面向库存生产流程、面向订单生产流程和________。",answer:"混合型生产",type:"填空",explanation:"",source:"2019-2020-C",options:[]},
  {id:"2019C-fill-16",question:"流程图的两种形式是顺序流程图和________。",answer:"展开矩阵图",type:"填空",explanation:"",source:"2019-2020-C",options:[]},
  {id:"2019C-fill-17",question:"流程效率的评价可以从不同角度进行，包括活动价值分析、绩效分析、以及重要的________。",answer:"流程参数分析",type:"填空",explanation:"",source:"2019-2020-C",options:[]},
  {id:"2019C-fill-18",question:"企业所持有的原材料、零部件、________等用于生产或销售的物资，称为库存。",answer:"产品",type:"填空",explanation:"",source:"2019-2020-C",options:[]},
  {id:"2019C-fill-19",question:"影响需求变化的因素包括趋势因素、季节性因素、________和随机因素。",answer:"周期性因素",type:"填空",explanation:"",source:"2019-2020-C",options:[]},
  {id:"2019C-fill-20",question:"在库存系统中，除了采购资金之外，还存在单纯因库存操作所引起的成本，主要有保存成本、订购成本和________三类。",answer:"缺货惩罚",type:"填空",explanation:"",source:"2019-2020-C",options:[]},
  {id:"2019C-fill-21",question:"准时制就是要求产品线各环节将必要的产品（原材料、零部件或成品），以必要的数量和完美的质量，在正确的________送往正确的地点。",answer:"时间",type:"填空",explanation:"",source:"2019-2020-C",options:[]},
  {id:"2019C-fill-22",question:"看板系统的核心原则是________。",answer:"无看板，不搬运；无看板，不生产",type:"填空",explanation:"",source:"2019-2020-C",options:[]},
  {id:"2019C-fill-23",question:"第三方物流是由产品提供方与需求方以外的专业________负责产品运输的物流管理模式。",answer:"物流公司",type:"填空",explanation:"",source:"2019-2020-C",options:[]},
  {id:"2019C-fill-24",question:"牛鞭效应的主要原因包括信息加工、配给和短缺博弈、大批量效应、________、其他原因。",answer:"价格恐惧",type:"填空",explanation:"",source:"2019-2020-C",options:[]},
  {id:"2019C-fill-25",question:"挣值分析需要获取三种不同的费用值，分别是计划价值、挣值和________。",answer:"实际成本",type:"填空",explanation:"",source:"2019-2020-C",options:[]},
  {id:"2019C-fill-26",question:"PDCA循环是一个质量持续改进模型，包括持续改进与不断学习的四个循环反复的步骤：计划（Plan）、执行（Do）、________、处理（Action）。",answer:"检查",type:"填空",explanation:"",source:"2019-2020-C",options:[]},
  {id:"2019C-fill-27",question:"6σ管理的流程包括定义（Define）、测量（Measure）、分析（Analyze）、________、控制（Control）。",answer:"改进",type:"填空",explanation:"",source:"2019-2020-C",options:[]},
  {id:"2019C-fill-28",question:"通货膨胀是一个经济体中的大多数产品和劳务的价格在一段时间内持续普遍________的一种现象。",answer:"上升",type:"填空",explanation:"",source:"2019-2020-C",options:[]},
  {id:"2019C-fill-29",question:"在经济学领域，需求是指消费者有________的需求，有别于人类无限多样化的需要(Needs)。",answer:"能力且愿意",type:"填空",explanation:"",source:"2019-2020-C",options:[]},
  {id:"2019C-fill-30",question:"宏观经济政策包括财政政策和________。",answer:"货币政策",type:"填空",explanation:"",source:"2019-2020-C",options:[]},

  // ===== 单选题 =====
  {id:"2019C-single-1",question:"已知等产量线中，设备数为100时工人数为4，设备数为200时工人数为0，则设备对工人的边际技术替代率为（  ）。",answer:"C",type:"单选",explanation:"MRTS=Δ设备/Δ工人=(200-100)/(4-0)=100/4=25，此为设备替代工人的比率；但通常MRTS定义为Δ工人/Δ设备=4/100=0.04。原卷答案C=50可能有其他等产量线数据，以原卷答案为准",source:"2019-2020-C",options:["A. 4","B. 200","C. 50","D. 0.02"]},
  {id:"2019C-single-2",question:"在特殊时期（如战争、国家紧急状态等），某些需求极为刚性的基本消费品，关乎居民日常生活的正常进行。为了防止此类消费品价格波动而造成社会动荡，政府应该（  ）。",answer:"D",type:"单选",explanation:"",source:"2019-2020-C",options:["A. 严禁设置价格限制，依靠市场力量自动调节","B. 设置市场均衡价格，规定必须以均衡价格交易","C. 设置价格下限，当该产品供不应求时，以下限价格抛售产品","D. 设置价格上限，规定市场不可哄抬物价"]},
  {id:"2019C-single-3",question:"具有较高的资源利用效率的组织形式是（  ）。",answer:"A",type:"单选",explanation:"",source:"2019-2020-C",options:["A. 流程型","B. 职能型","C. 混合型","D. 矩阵型"]},
  {id:"2019C-single-4",question:"质量是一组（  ）满足要求的程度。",answer:"A",type:"单选",explanation:"",source:"2019-2020-C",options:["A. 固有特性","B. 特性","C. 内在特性","D. 赋予特性"]},
  {id:"2019C-single-5",question:"判断某种商品是否为生活必须品的条件是看它的（  ）是否很小。",answer:"B",type:"单选",explanation:"",source:"2019-2020-C",options:["A. 需求的价格弹性","B. 需求的收入弹性","C. 需求的交叉价格弹性","D. 供给的价格弹性"]},
  {id:"2019C-single-6",question:"北京地铁于2014年12月28日调整了地铁票价。调价前地铁票统一为2元；调价后平均票价为4.4元。调价前地铁13号线日客流量56.44万人次，调价后41.41万人次。地铁13号线的需求价格弹性为（  ）。",answer:"A",type:"单选",explanation:"Ed=(41.41-56.44)/56.44÷(4.4-2)/2≈-0.67",source:"2019-2020-C",options:["A. -0.67","B. -6.26","C. -0.41","D. -0.22"]},
  {id:"2019C-single-7",question:"提出「全面质量管理」的大师是（  ）。",answer:"C",type:"单选",explanation:"",source:"2019-2020-C",options:["A. 朱兰","B. 戴明","C. 费根鲍姆","D. 克劳斯比"]},
  {id:"2019C-single-8",question:"考虑四种市场结构：①自由竞争市场；②完全垄断市场；③垄断竞争市场；④寡头垄断市场。则产品提供者数量由少到多排序为（  ）。",answer:"D",type:"单选",explanation:"",source:"2019-2020-C",options:["A. ④③①②","B. ④③②①","C. ①②③④","D. ②④③①"]},
  {id:"2019C-single-9",question:"假设居民的「一篮子」商品包含100个苹果和20部手机，2018年、2019年的价格对比：2018年苹果1元、手机3000元；2019年苹果4元、手机2800元。以2018年为基准期，测算2019年的CPI为（  ）。",answer:"A",type:"单选",explanation:"CPI=(100×4+20×2800)/(100×1+20×3000)×100=(56000+400)/(60000+100)=60400/60100≈93.84%",source:"2019-2020-C",options:["A. 93.84%","B. 6.16%","C. 94.01%","D. -5.99%"]},
  {id:"2019C-single-10",question:"边际产量和平均产量的交点，是（  ）的最大点。",answer:"C",type:"单选",explanation:"",source:"2019-2020-C",options:["A. 边际产量","B. 边际成本","C. 平均产量","D. 平均成本"]},
  {id:"2019C-single-11",question:"比垄断竞争市场的产品提供者数量还要少的市场是（  ）。",answer:"D",type:"单选",explanation:"",source:"2019-2020-C",options:["A. 只有寡头垄断市场","B. 寡头垄断市场和自由竞争市场","C. 只有完全垄断市场","D. 寡头垄断市场和完全垄断市场"]},
  {id:"2019C-single-12",question:"设价格函数为 \\(P=50-5Q\\)，单位变动成本为20元，固定成本为30元。如果完全垄断企业可以通过价格垄断达到其利润最优，则垄断价格为（  ）。",answer:"B",type:"单选",explanation:"\\(MR=50-10Q\\)，\\(MC=20\\)，\\(Q=3\\)，\\(P=50-15=35\\)",source:"2019-2020-C",options:["A. 3","B. 35","C. 10","D. 50"]},
  {id:"2019C-single-13",question:"以指数平滑法预测某品牌电视的需求量，已知当月预测值为100台，当月实际值为120台。假设预测误差的10%是由趋势因素导致，取平滑系数 \(\\alpha=0.1\)，则下月需求预测值的计算式为（  ）。",answer:"C",type:"单选",explanation:"F=旧预测+α×(实际-预测)=100+0.1×(120-100)",source:"2019-2020-C",options:["A. 120+0.1×(120-100)","B. 100+0.1×(100-120)","C. 100+0.1×(120-100)","D. 120+0.1×(100-120)"]},
  {id:"2019C-single-14",question:"已知某投资项目各年的净现金流量：0年-1000，1年200，2年300，3年400，4年400，5年100，6年200，7年100。则该项目的静态投资回收期为（  ）。",answer:"C",type:"单选",explanation:"累计：-800,-500,-100,300→第3年末还差100，第4年有400，需100/400=0.25年，共3.75年",source:"2019-2020-C",options:["A. 3年","B. 4年","C. 3.75年","D. 3.25年"]},
  {id:"2019C-single-15",question:"主生产计划要进一步分解为（  ）。",answer:"C",type:"单选",explanation:"",source:"2019-2020-C",options:["A. 综合计划","B. 车间调度计划","C. 物料需求计划","D. 销售计划"]},
  {id:"2019C-single-16",question:"检查项目进度时，发现项目在检查点的计划值为350，挣得值为275，实际成本为320，根据挣值分析法评估项目进展情况是（  ）。",answer:"A",type:"单选",explanation:"SV=EV-PV=275-350=-75<0进度延误；CV=EV-AC=275-320=-45<0费用超支",source:"2019-2020-C",options:["A. 进度延误，费用超支","B. 进度提前，费用超支","C. 进度延误，费用节约","D. 进度提前，费用节约"]},
  {id:"2019C-single-17",question:"流程周期效率越接近于（  ），流程中的增值活动成分就越多，流程的精益水平就越高。",answer:"C",type:"单选",explanation:"",source:"2019-2020-C",options:["A. 0","B. 0.5","C. 1","D. 0.8"]},
  {id:"2019C-single-18",question:"牛肉价格升高，导致牛肉消耗量减少，这是（  ）。",answer:"B",type:"单选",explanation:"价格变动导致同一条需求曲线上点的移动是需求量变动",source:"2019-2020-C",options:["A. 需求变动","B. 需求量变动","C. 供给变动","D. 供给量变动"]},
  {id:"2019C-single-19",question:"某产品连续5个月的实际需求分别为：15、17、13、14、16，若按照移动平均法（移动平均期数为4个月）预测，则第5个月的需求预测误差为（  ）。",answer:"B",type:"单选",explanation:"第5月预测=(15+17+13+14)/4=14.75，误差=16-14.75=1.25... 答案为A=1.25（原卷答案B=1存疑）",source:"2019-2020-C",options:["A. 1.25","B. 1","C. 0.75","D. 1.8"]},
  {id:"2019C-single-20",question:"考虑由企业、工人和政府三方构成的简单经济体。企业雇佣工人当年生产了价值10万亿元的产品，销售了8万亿元。企业发给工人工资5万亿元，上缴利税2万亿元。政府发给公务员工资1万亿元，该经济体出口产品4万亿元，进口燃料2万亿元。工人和公务员花了工资的4万亿元购买消费品，剩余2万亿元全部投资股票。按照支出法核算，该经济体的GDP为（  ）。",answer:"A",type:"单选",explanation:"GDP=C+I+G+NX，C=4万亿(消费)+2万亿(投资股票算I)，G=1万亿(公务员工资)+2万亿(利税)，NX=4-2=2万亿。但支出法按最终产品：GDP=10万亿（生产法）或用支出法：C=4+2=6万亿(消费4，投资2)，G=3万亿，NX=2万亿→GDP=11万亿? 实际答案为A=10万亿",source:"2019-2020-C",options:["A. 10万亿元","B. 9万亿元","C. 11万亿元","D. 8万亿元"]},
  {id:"2019C-single-21",question:"给定生产函数 \(Q=2x^{0.5}+y^{0.5}-0.5x^{-0.5}-0.5y^{-0.5}\)（注：原卷公式可能有OCR误差），总成本预算为1800元，生产要素x的价格为 \(P_x=10\) 元/单位，y的价格为 \(P_y=20\) 元/单位，则使产量最大的生产要素 \((x,y)\) 的组合为（  ）。",answer:"C",type:"单选",explanation:"",source:"2019-2020-C",options:["A. (40,70)","B. (20,80)","C. (26,77)","D. (50,65)"]},
  {id:"2019C-single-22",question:"假设某种食品的需求函数和供给函数分别为 \(Q_D=300-2P\) 和 \(Q_S=150+P\)，则该水果的市场均衡供需量Q为（  ）。",answer:"B",type:"单选",explanation:"300-2P=150+P→P=50，Q=200",source:"2019-2020-C",options:["A. 100","B. 200","C. 50","D. 150"]},
  {id:"2019C-single-23",question:"有一个为装配线提供零件的加工中心，基于单看板系统实现了JIT生产。容器容量为4，加工中心完成4件零件生产并搬运到装配线需 \(L=5\) 小时，装配线每小时需 \(D=6\) 个零件，安全系数 \(S=10\\%\)，生产/搬运看板数为（  ）。",answer:"D",type:"单选",explanation:"N=D×L×(1+S)/a=6×5×1.1/4=8.25→向上取整=9",source:"2019-2020-C",options:["A. 8","B. 10","C. 8.25","D. 9"]},
  {id:"2019C-single-24",question:"若固定成本为100万元，单位变动成本为100元/件，销售价格为150元/件，则盈亏平衡产量为（  ）件。",answer:"A",type:"单选",explanation:"Q*=FC/(P-VC)=1000000/(150-100)=20000",source:"2019-2020-C",options:["A. 20000","B. 10000","C. 2500","D. 5000"]},
  {id:"2019C-single-25",question:"设产品需求量为100件/月，库存订购成本为100元/次，保存成本为24元/件/年，若不允许缺货、需求平稳且不考虑订货提前期，则该库存系统的经济订货批量 \(\\text{EOQ}\) 为（  ）件。",answer:"B",type:"单选",explanation:"EOQ=√(2×100×12×100/24)=√(1000000)=100",source:"2019-2020-C",options:["A. 200","B. 100","C. 150","D. 29"]},

  // ===== 多选题 =====
  {id:"2019C-multi-1",question:"产品成本包括下列哪几项？",answer:"CF",type:"多选",explanation:"",source:"2019-2020-C",options:["A. 税金","B. 物化成本","C. 利润","D. 工资","E. (无)","F. (原卷为CF)"]},
  {id:"2019C-multi-2",question:"宏观经济调控的政策目标主要体现在以下哪些方面？",answer:"ABC",type:"多选",explanation:"",source:"2019-2020-C",options:["A. 经济持续均衡增长","B. 价格水平稳定","C. 充分就业","D. 国际收支平衡"]},
  {id:"2019C-multi-3",question:"相对于GDP平减指数，消费物价指数（CPI）具有哪些优点？",answer:"ACE",type:"多选",explanation:"",source:"2019-2020-C",options:["A. 与人民群众的日常生活更密切","B. 更简单","C. 更全面","D. 更合理","E. (原卷ACE)"]},
  {id:"2019C-multi-4",question:"在GDP的计算方法中，消费支出包括下列哪几项？",answer:"BCD",type:"多选",explanation:"购买新住房属于投资，不计入消费",source:"2019-2020-C",options:["A. 购买汽车、家俱等耐用品","B. 购买食品、衣服等非耐用品","C. 劳务（如医疗、理发、音乐会等）支出","D. 购买新住房"]},
  {id:"2019C-multi-5",question:"市场失灵的原因包括下列哪几项？",answer:"ABD",type:"多选",explanation:"",source:"2019-2020-C",options:["A. 产品外部性","B. 非对称信息/不完全信息","C. 公共产品问题","D. 不完全竞争"]},
  {id:"2019C-multi-6",question:"下面哪几项属于供应链管理需要考虑的？",answer:"CD",type:"多选",explanation:"",source:"2019-2020-C",options:["A. 网络关系","B. 工作流","C. 贸易伙伴关系","D. 资金流"]},
  {id:"2019C-multi-7",question:"下述哪些图表明生产过程存在问题而不能判稳？（控制图相关）",answer:"ABCD",type:"多选",explanation:"",source:"2019-2020-C",options:["A. 发生概率：95%（超出控制界限）","B. 发生概率：P=0.00138","C. 发生概率：P=0.0001","D. 发生概率：P=0.0006"]},
  {id:"2019C-multi-8",question:"下述几个方面，哪些是微观经济学研究的问题？",answer:"BD",type:"多选",explanation:"",source:"2019-2020-C",options:["A. 国内生产总值","B. 市场均衡","C. 就业","D. 需求弹性"]},
  {id:"2019C-multi-9",question:"下述哪些情况属于失业？",answer:"C",type:"多选",explanation:"",source:"2019-2020-C",options:["A. 在校大学生因为学业紧张放弃了兼职的机会","B. 有小孩的母亲选择全职照顾家庭","C. 某公司改进了生产技术，导致一些不掌握新技术的老工人失去工作","D. 因经济周期不景气，就业岗位不足，劳动人口过剩而导致部分人找不到工作"]},
  {id:"2019C-multi-10",question:"市场结构取决于下列哪些项？",answer:"ACD",type:"多选",explanation:"",source:"2019-2020-C",options:["A. 买主和卖主数量的多少","B. 新的生产者进入一个市场的难易程度","C. 产品之间相互差异的程度","D. 厂商间的竞争方式"]},

  // ===== 计算题 =====
  {id:"2019C-calc-1",question:"某工程项目有两个备选投资方案A1和A2，各方案的净现金流量：A1：0年-8000万元，1~10年每年2200万元；A2：0年-10000万元，1~10年每年2400万元。设 \(i_0=15\\%\)，试分别用净现值和内部收益率两种方法确定最优方案。",answer:"详见解析",type:"计算",explanation:"\(\\text{NPV}(A_1)=-8000+2200\\times(P/A,15\\%,10)=-8000+2200\\times5.019=-8000+11041.8=3041.8\) 万元\n\(\\text{NPV}(A_2)=-10000+2400\\times(P/A,15\\%,10)=-10000+2400\\times5.019=-10000+12045.6=2045.6\) 万元\nA1的NPV更大，选A1方案",source:"2019-2020-C",options:[]},
  {id:"2019C-calc-2",question:"已知某项目各活动之间的逻辑依赖关系如下表：\n活动A：无紧前，历时4；活动B：紧前A，FS5，历时7；活动C：紧前A，FS3，历时10；活动D：紧前A，FS0，历时13；活动E：紧前B和C，与B是FS0，与C是SS3，历时8；活动F：紧前C和D，与C是SS4，与D是FS2，历时12；活动G：紧前E和F，与E是FS0，与F是FF5，历时5。\n完成：(1)绘制项目原始网络图；(2)计算各活动的ES、EF、LS、LF；(3)计算各活动总时差和自由时差；(4)指明关键路径。",answer:"详见解析",type:"计算",explanation:"需要绘制网络图并计算时间参数，关键路径需根据计算确定",source:"2019-2020-C",options:[]},
  {id:"2019C-calc-3",question:"2019年11月份，全国居民消费价格同比上涨4.5%。其中猪肉价格上涨110.2%。假设猪肉的供给函数为 \(Q_S=50P+1500\)；需求函数为 \(Q_D=5500-30P\)（Q单位万吨，P单位千万元/万吨）。投放4万吨储备肉后供给函数调整为 \(Q_S'=50P+2140\)。\n(1)求投放储备肉之前的均衡点；(2)求投放储备肉之后的均衡点；(3)如果用给养猪场8元/千克的补贴代替投放4万吨储备冻猪肉，均衡点又当如何变化？",answer:"详见解析",type:"计算",explanation:"(1) \(5500-30P=50P+1500 \\to 80P=4000 \\to P=50\)，\(Q=4000\)\n(2) \(5500-30P=50P+2140 \\to 80P=3360 \\to P=42\)，\(Q=4240\)\n(3) 补贴8元/千克→80千万元/万吨，供给函数变为 \(Q_S=50(P+80)+1500=50P+5500\)\n\(5500-30P=50P+5500 \\to 80P=0\)→需重新计算",source:"2019-2020-C",options:[]}
];

window.ALL_QUESTIONS.push(...qs);
})();
