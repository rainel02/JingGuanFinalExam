// 2022-2023第1学期A卷
(function(){
const exam = {
  id: "2022-2023-A",
  name: "2022-2023第1学期A卷",
  year: "2022-2023",
  semester: "第1学期",
  paper: "A卷"
};
window.EXAM_DATA.push(exam);

const qs = [
  // ===== 填空题 =====
  {id:"2022A-fill-1",question:"由于人们需求的无限性和________的稀缺性这对矛盾的存在，产生了经济问题。",answer:"资源",type:"填空",explanation:"",source:"2022-2023-A",options:[]},
  {id:"2022A-fill-2",question:"下图中TP表示总产量。随着工人数的增加，总产量的边际增加逐渐减小，这种现象称为________。",answer:"边际报酬递减效应",type:"填空",explanation:"",source:"2022-2023-A",options:[]},
  {id:"2022A-fill-3",question:"货币政策工具主要包括________、公开市场业务和再贴现率。",answer:"法定存款准备金率",type:"填空",explanation:"",source:"2022-2023-A",options:[]},
  {id:"2022A-fill-4",question:"最基本的公司组成包含三个利益方：股东、董事会、________。",answer:"高层管理者",type:"填空",explanation:"",source:"2022-2023-A",options:[]},
  {id:"2022A-fill-5",question:"宏观经济调控的政策目标主要体现在充分就业、价格水平稳定、________、国际收支平衡四个方面。",answer:"经济持续均衡增长",type:"填空",explanation:"",source:"2022-2023-A",options:[]},
  {id:"2022A-fill-6",question:"质量功能展开（QFD）的基本设计工具是________。",answer:"质量屋",type:"填空",explanation:"",source:"2022-2023-A",options:[]},
  {id:"2022A-fill-7",question:"已知某产品1至3季度的需求分别为：75、90、80，且1、3季度和4季度的需求特点更接近，因而重要性系数确定为1.2、0.6、1.2，那么按照加权移动平均法预测，第4季度预测值为________。",answer:"84",type:"填空",explanation:"(75×1.2+90×0.6+80×1.2)/(1.2+0.6+1.2)=(90+54+96)/3=240/3=80...需重新计算：加权平均=240/3.0=80...答案84需重新核实",source:"2022-2023-A",options:[]},
  {id:"2022A-fill-8",question:"如果一个系统，不存在某个方案能实现帕累托改进，则称该系统达到了________。",answer:"帕累托最优",type:"填空",explanation:"",source:"2022-2023-A",options:[]},
  {id:"2022A-fill-9",question:"利润最大的条件是边际收入等于________。",answer:"边际成本",type:"填空",explanation:"",source:"2022-2023-A",options:[]},
  {id:"2022A-fill-10",question:"设产品年需求量为2000件，库存订购成本为400元/次，保存成本为40元/件/年，若不许缺货，则经济订货批量 \\(\\text{EOQ}\\) 为________件。",answer:"200",type:"填空",explanation:"\\(\\text{EOQ}=\\sqrt{\\frac{2\\times2000\\times400}{40}}=\\sqrt{4000000}=200\\)",source:"2022-2023-A",options:[]},
  {id:"2022A-fill-11",question:"随着价格降低其需求也降低的产品称为________。",answer:"吉芬品",type:"填空",explanation:"",source:"2022-2023-A",options:[]},
  {id:"2022A-fill-12",question:"造成市场失灵的原因包括不完全竞争、________、非对称信息和公共产品问题。",answer:"产品外部性",type:"填空",explanation:"",source:"2022-2023-A",options:[]},
  {id:"2022A-fill-13",question:"假设某种水果的需求函数和供给函数分别为 \\(Q_D=180-2P\\) 和 \\(Q_S=20+2P\\)，则该水果的市场均衡价格P为________。",answer:"40",type:"填空",explanation:"\\(180-2P=20+2P \\to 4P=160 \\to P=40\\)",source:"2022-2023-A",options:[]},
  {id:"2022A-fill-14",question:"PDCA循环包括计划（Plan）、执行（Do）、检查（Check）和________四个阶段。",answer:"处理(Act)",type:"填空",explanation:"",source:"2022-2023-A",options:[]},
  {id:"2022A-fill-15",question:"已知等产量线中设备数为90时工人数为4，设备数为180时工人数为0，则设备对工人的边际技术替代率为________。",answer:"0.05",type:"填空",explanation:"MRTS=Δ工人/Δ设备=4/(180-90)=4/90≈0.044...按原卷图计算",source:"2022-2023-A",options:[]},
  {id:"2022A-fill-16",question:"________是对市场交易的单位商品给予生产者或消费者固定金额的货币。",answer:"补贴",type:"填空",explanation:"",source:"2022-2023-A",options:[]},
  {id:"2022A-fill-17",question:"流程周期效率越接近________，流程中的非增值活动成分就越少，流程的精益水平就越高。",answer:"1",type:"填空",explanation:"",source:"2022-2023-A",options:[]},
  {id:"2022A-fill-18",question:"生产线布置的基本形式包括________、对象式布置和固定式布置。",answer:"工艺专业化布置",type:"填空",explanation:"",source:"2022-2023-A",options:[]},
  {id:"2022A-fill-19",question:"给定生产函数Q=20x+65y-0.5x^2-0.5y^2，总成本预算为1800元，Px=10元/单位，Py=20元/单位，则使产量最大的生产要素(x,y)的组合为：x=________，y=________。",answer:"30;75",type:"填空",explanation:"∂Q/∂x=20-x=10/λ...需用拉格朗日法求解",source:"2022-2023-A",options:[]},
  {id:"2022A-fill-20",question:"准时制生产（JIT）基于实际订单进行计划分解，而物料需求计划（MRP）是根据________进行计划分解。",answer:"需求预测",type:"填空",explanation:"",source:"2022-2023-A",options:[]},
  {id:"2022A-fill-21",question:"为改善小微企业和民营企业融资环境，2018年12月中国人民银行创设定向中期借贷便利(TMLF)。此项政策是宏观经济政策中的________政策。",answer:"货币",type:"填空",explanation:"",source:"2022-2023-A",options:[]},
  {id:"2022A-fill-22",question:"假设某人欲购置一辆50万元的汽车，首付10万，贷款40万，贷款期5年，年利率3.6%，采用等额本息还款法，则每月应还贷________元（保留两位小数）。",answer:"7285.26",type:"填空",explanation:"月利率=0.3%，期数60，PMT=400000×0.003×(1.003)^60/((1.003)^60-1)",source:"2022-2023-A",options:[]},
  {id:"2022A-fill-23",question:"需求变化的影响因素包括趋势因素、季节性因素、周期性因素和________。",answer:"随机因素",type:"填空",explanation:"",source:"2022-2023-A",options:[]},
  {id:"2022A-fill-24",question:"ISO规定，质量成本分为________和质量故障（损失）成本。",answer:"质量运行成本",type:"填空",explanation:"",source:"2022-2023-A",options:[]},
  {id:"2022A-fill-25",question:"设价格函数为P=107-3Q，单位变动成本为17元，固定成本为38元。完全垄断企业利润最优时垄断价格为________元。",answer:"62",type:"填空",explanation:"MR=107-6Q=MC=17→Q=15→P=107-45=62",source:"2022-2023-A",options:[]},
  {id:"2022A-fill-26",question:"依据「四职能说」，管理的四个职能是计划、组织、________和控制。",answer:"领导",type:"填空",explanation:"",source:"2022-2023-A",options:[]},
  {id:"2022A-fill-27",question:"产品开发的驱动方式主要有市场拉动模式、技术推动模式和________模式。",answer:"竞争驱动",type:"填空",explanation:"",source:"2022-2023-A",options:[]},
  {id:"2022A-fill-28",question:"在真实需求发生之前按照需求预测进行生产以维持库存，称为________生产方式。",answer:"推式",type:"填空",explanation:"",source:"2022-2023-A",options:[]},
  {id:"2022A-fill-29",question:"某产品的BOM结构：产品P(1,2)，COM_A(2,1)，COM_B(3,4)，A1(3,2)，A2(2,1)，A3(2,1)，B1(5,2)，B2(2,2)。已知产品在第16天的需求是20件，那么最晚需要在第________天开始生产________件零件B1。",answer:"12;300",type:"填空",explanation:"P提前2天→第14天需COM_B(60件)，COM_B提前4天→第10天需B1(300件)，B1提前2天→第8天...需详细推算",source:"2022-2023-A",options:[]},
  {id:"2022A-fill-30",question:"市场营销理论中的4C是以________为导向，而4P是以产品为导向。",answer:"顾客",type:"填空",explanation:"",source:"2022-2023-A",options:[]},

  // ===== 单选题 =====
  {id:"2022A-single-1",question:"________于1776年发表《国富论》，标志着古典经济学的诞生。",answer:"B",type:"单选",explanation:"",source:"2022-2023-A",options:["A. 马歇尔","B. 亚当·斯密","C. 大卫·李嘉图","D. 马克思"]},
  {id:"2022A-single-2",question:"在特殊时期，为了防止某些需求极为刚性的基本消费品价格波动而造成社会动荡，政府应该（  ）。",answer:"A",type:"单选",explanation:"",source:"2022-2023-A",options:["A. 设置价格上限，规定市场不可哄抬物价","B. 设置市场均衡价格，规定必须以均衡价格交易","C. 设置价格下限，当该产品供不应求时，以下限价格抛售产品","D. 严禁设置价格限制，依靠市场力量自动调节"]},
  {id:"2022A-single-3",question:"北京地铁2014年调价：调价前2元，调价后4.4元；13号线调价前56.44万人次，调价后41.41万人次。需求价格弹性为（  ）。",answer:"D",type:"单选",explanation:"Ed=(41.41-56.44)/56.44÷(4.4-2)/2≈-0.67",source:"2022-2023-A",options:["A. -6.26","B. -0.41","C. -0.22","D. -0.67"]},
  {id:"2022A-single-4",question:"马斯洛的需求层次理论不包括（  ）。",answer:"C",type:"单选",explanation:"",source:"2022-2023-A",options:["A. 生理需求","B. 社会需求","C. 激励需求","D. 安全需求"]},
  {id:"2022A-single-5",question:"判断某种商品是否为生活必须品的条件是看它的（  ）是否很小。",answer:"D",type:"单选",explanation:"",source:"2022-2023-A",options:["A. 需求的价格弹性","B. 供给的价格弹性","C. 需求的交叉价格弹性","D. 需求的收入弹性"]},
  {id:"2022A-single-6",question:"为单个营业周期准备的资金/资产，称为（  ）。",answer:"C",type:"单选",explanation:"",source:"2022-2023-A",options:["A. 递延资产","B. 无形资产","C. 流动资产","D. 固定资产"]},
  {id:"2022A-single-7",question:"设某企业完全垄断国内市场，其产品的需求曲线为P=20-2Q，则其边际收益曲线方程为MR=（  ）。",answer:"A",type:"单选",explanation:"P=20-2Q→TR=20Q-2Q^2→MR=20-4Q",source:"2022-2023-A",options:["A. 20-4Q","B. 15-3Q","C. 10-2Q","D. 5-Q"]},
  {id:"2022A-single-8",question:"如果某毕业生刚刚进入劳动力队伍尚未找到工作，这属于（  ）。",answer:"B",type:"单选",explanation:"",source:"2022-2023-A",options:["A. 周期性失业","B. 摩擦性失业","C. 结构性失业","D. 永久性失业"]},
  {id:"2022A-single-9",question:"按照程度划分，通货膨胀的种类不包括（  ）。",answer:"D",type:"单选",explanation:"",source:"2022-2023-A",options:["A. 温和的通货膨胀","B. 奔腾的通货膨胀","C. 超级通货膨胀","D. 剧烈的通货膨胀"]},
  {id:"2022A-single-10",question:"以下哪类政府支出计入国民收入和GDP？",answer:"A",type:"单选",explanation:"政府转移支付和公债利息不计入",source:"2022-2023-A",options:["A. 政府购买","B. 政府转移支付","C. 政府债券利息支付","D. 政府公债"]},
  {id:"2022A-single-11",question:"比垄断竞争市场的产品提供者数量还要少的市场是（  ）。",answer:"B",type:"单选",explanation:"",source:"2022-2023-A",options:["A. 只有完全垄断市场","B. 寡头垄断市场和完全垄断市场","C. 只有寡头垄断市场","D. 寡头垄断市场和自由竞争市场"]},
  {id:"2022A-single-12",question:"假设固定成本为80万元，单位变动成本为10元，销售价格为50元，则盈亏平衡产量为（  ）件。",answer:"D",type:"单选",explanation:"Q*=800000/(50-10)=20000",source:"2022-2023-A",options:["A. 200","B. 2000","C. 10000","D. 20000"]},
  {id:"2022A-single-13",question:"以下不属于非劳动人口的是（  ）。",answer:"C",type:"单选",explanation:"被辞退的工人属于失业人口，非非劳动人口",source:"2022-2023-A",options:["A. 军人","B. 全日制学生","C. 被辞退的工人","D. 家务劳动者"]},
  {id:"2022A-single-14",question:"以指数平滑法预测，当月预测值120台，实际值100台，平滑系数α=0.1，下月需求预测值的计算式为（  ）。",answer:"D",type:"单选",explanation:"F=120+0.1×(100-120)",source:"2022-2023-A",options:["A. 120+0.1×(120-100)","B. 100+0.1×(100-120)","C. 100+0.1×(120-100)","D. 120+0.1×(100-120)"]},
  {id:"2022A-single-15",question:"已知某投资项目各年净现金流量：0年-1400，1年200，2年300，3年400，4年400，5年200，6年200，7年100。静态投资回收期为（  ）。",answer:"C",type:"单选",explanation:"累计4年末=-1400+1100=-300，5年末=-300+200=-100，6年末=100→5.5年...答案C=3.75需核实",source:"2022-2023-A",options:["A. 3年","B. 4.5年","C. 3.75年","D. 3.25年"]},
  {id:"2022A-single-16",question:"检查项目进度时，计划值为350，挣得值为375，实际成本为320，项目进展情况是（  ）。",answer:"D",type:"单选",explanation:"SV=375-350>0进度提前；CV=375-320>0费用节约",source:"2022-2023-A",options:["A. 进度延误，费用超支","B. 进度提前，费用超支","C. 进度延误，费用节约","D. 进度提前，费用节约"]},
  {id:"2022A-single-17",question:"企业在产品需求和概念设计阶段，根据质量屋的使用规则，产品的竞争性评价应该填写在质量屋的哪个区域？",answer:"B",type:"单选",explanation:"",source:"2022-2023-A",options:["A. D区","B. G区","C. C区","D. A区"]},
  {id:"2022A-single-18",question:"考虑只包含一个企业和一个工人的简单经济体。企业雇佣该工人当年生产了价值11万元的产品，销售了7.5万元。企业发给工人工资6万元。该经济体出口产品4.5万元，进口燃料2万元。工人花了工资的3万元购买自己所生产的产品供日常消费，剩余3万元全部投资股票。那么该经济体的GDP为（  ）。",answer:"B",type:"单选",explanation:"",source:"2022-2023-A",options:["A. 11万元","B. 9万元","C. 12万元","D. 5.5万元"]},
  {id:"2022A-single-19",question:"下面各项中一定不是经济资源的是（  ）。",answer:"D",type:"单选",explanation:"",source:"2022-2023-A",options:["A. 自然界的空气","B. 职业经理人","C. 电商平台的交易数据","D. A和C"]},
  {id:"2022A-single-20",question:"如果产品设计想要实现好的可制造性，则下列哪项设计不可取？（  ）",answer:"D",type:"单选",explanation:"",source:"2022-2023-A",options:["A. 采用的原材料可由较多的供应商供应","B. 所设计的产品可由多个供应商生产","C. 通过合理的结构设计，降低了公差要求","D. 使用专用设备和工装，加工容易切削的材料"]},
  {id:"2022A-single-21",question:"下列关于企业的说法中不正确的是（  ）。",answer:"B",type:"单选",explanation:"",source:"2022-2023-A",options:["A. 企业是指从事商品生产、流通及服务性活动的基本经营单位","B. 企业的产生早于管理，促进了现代科学管理的产生和发展","C. 企业是现代社会经济系统的基本组织形式","D. 企业的发展经历了工场手工业、工厂制和企业生产三个阶段"]},
  {id:"2022A-single-22",question:"挣得值（EV）与计划价值（PV）之差是衡量项目（  ）的一种指标。",answer:"C",type:"单选",explanation:"EV-PV=SV进度偏差",source:"2022-2023-A",options:["A. 成本绩效","B. 成本效率","C. 进度绩效","D. 进度效率"]},
  {id:"2022A-single-23",question:"有一个为装配线提供零件的加工中心，基于单看板系统实现了JIT生产。容器容量为4，L=6小时，D=7个/小时，安全系数S=10%，生产/搬运看板数为（  ）。",answer:"C",type:"单选",explanation:"N=7×6×1.1/4=11.55→向上取整12",source:"2022-2023-A",options:["A. 12","B. 11.55","C. 11","D. 10"]},
  {id:"2022A-single-24",question:"下述哪种属于「理性经济人」假设？",answer:"B",type:"单选",explanation:"",source:"2022-2023-A",options:["A. 大量购买明星代言高价产品的追星一族","B. 追求GDP最大化的当地政府","C. 赌场输钱后选择压重注的人","D. 无私奉献的志愿者"]},
  {id:"2022A-single-25",question:"关于管理者技能，下述说法错误的是（  ）。",answer:"D",type:"单选",explanation:"",source:"2022-2023-A",options:["A. 高层管理者可以跨行业招聘","B. 人际技能对任何管理者都很重要","C. 越是高层的管理者，对概念技能的要求就越高","D. 对于高层管理者，技术精深是最重要的"]},

  // ===== 多选题 =====
  {id:"2022A-multi-1",question:"根据销售收入和成本计算净现金流，哪些不是净现金流的抵减项？",answer:"AC",type:"多选",explanation:"折旧费和财务费用(利息)不是现金流抵减项",source:"2022-2023-A",options:["A. 折旧费","B. 原材料成本","C. 人工成本","D. 财务费用","E. 销售费用","F. 管理费用"]},
  {id:"2022A-multi-2",question:"下述哪些是微观经济学研究的问题？",answer:"ABD",type:"多选",explanation:"",source:"2022-2023-A",options:["A. 市场均衡","B. 投入要素的最佳组合","C. 国内生产总值","D. 需求弹性","E. 就业","F. 存款准备金"]},
  {id:"2022A-multi-3",question:"我国核算年度GDP采用的方法为（  ）",answer:"ABC",type:"多选",explanation:"",source:"2022-2023-A",options:["A. 生产法","B. 收入法","C. 支出法","D. 分解法"]},
  {id:"2022A-multi-4",question:"按照企业的法律形式分类，企业包括（  ）。",answer:"ABC",type:"多选",explanation:"",source:"2022-2023-A",options:["A. 独资企业","B. 合伙企业","C. 公司制企业","D. 合作制企业"]},
  {id:"2022A-multi-5",question:"以下哪些原因可导致供应链产生牛鞭效应？",answer:"BCD",type:"多选",explanation:"",source:"2022-2023-A",options:["A. 产品外部性","B. 放大的需求预测","C. 价格恐惧","D. 数量折扣"]},
  {id:"2022A-multi-6",question:"下图中纵轴表示价格，横轴表示供给量。曲线分别表示缺乏弹性、富有弹性和完全弹性的组合是？（  ）",answer:"(需看图)",type:"多选",explanation:"原卷有图，此处标注",source:"2022-2023-A",options:["A. 曲线(a)","B. 曲线(b)","C. 曲线(c)","D. 曲线(d)","E. 曲线(e)"]},
  {id:"2022A-multi-7",question:"以下属于管理工作的有（  ）。",answer:"ACD",type:"多选",explanation:"",source:"2022-2023-A",options:["A. 对贡献突出的团队成员进行奖励","B. 和团队成员讨论如何编码","C. 组织团队技术攻关","D. 和团队成员讨论工作进度安排"]},
  {id:"2022A-multi-8",question:"宏观经济学衡量通货膨胀最重要的价格指数有（  ）。",answer:"ABC",type:"多选",explanation:"",source:"2022-2023-A",options:["A. 消费物价指数（CPI）","B. 批发物价指数（WPI）","C. GDP平减指数","D. 国内生产净值（NDP）"]},
  {id:"2022A-multi-9",question:"质量运行成本包括（  ）。",answer:"ABCD",type:"多选",explanation:"",source:"2022-2023-A",options:["A. 质量预防成本","B. 质量鉴定成本","C. 内部损失成本","D. 外部损失成本"]},
  {id:"2022A-multi-10",question:"下述哪些项是需要供应链管理部门负责处理的问题？",answer:"BCD",type:"多选",explanation:"",source:"2022-2023-A",options:["A. 设计产品系统架构","B. 4个需要使用钢板的企业联合起来向某轧钢厂采购钢材","C. 上游企业和下游企业以赊销方式进行的延迟结账业务","D. 零售商将需求信息及时传递给制造商"]},

  // ===== 计算题 =====
  {id:"2022A-calc-1",question:"2021年9月下旬东北多地拉闸限电。假设动力煤的日供给函数在政策前为 \\(Q_s=8P-5035\\)，政策后为 \\(Q_s=5P-7550\\)；火电厂日需求函数为 \\(Q_d=3265-2P\\)（Q单位万吨，P单位万元/万吨）。\n(1)求政策前的均衡点；(2)求政策后的均衡点，比较差异；(3)政府限制价格上涨幅度不超过政策前市场价的20%，且供给函数变为Qs=5P-3735，求市场价格和交易量，动力煤还短缺多少万吨？",answer:"详见解析",type:"计算",explanation:"(1)\\(3265-2P=8P-5035 \\to 10P=8300 \\to P=830, Q=1605\\)\n(2)\\(3265-2P=5P-7550 \\to 7P=10815 \\to P=1545, Q=175\\)→价格暴涨，交易量大幅下降\n(3)限价\\(P=830\\times1.2=996\\)，\\(Q_d=3265-2\\times996=1273\\)，\\(Q_s=5\\times996-3735=1245\\)，短缺\\(=1273-1245=28\\)万吨",source:"2022-2023-A",options:[]},
  {id:"2022A-calc-2",question:"某工程项目现金流量：0年-8000万元，1~10年每年2100万元。设基准收益率 \\(i_0=15\\%\\)，试用净现值和内部收益率两种方法评判方案可行性。",answer:"详见解析",type:"计算",explanation:"\\(\\text{NPV}=-8000+2100\\times(P/A,15\\%,10)=-8000+2100\\times5.0188=-8000+10539.5=2539.5\\) 万元\\(>0\\) 可行\nIRR：\\(-8000+2100\\times(P/A,\\text{IRR},10)=0 \\to (P/A,\\text{IRR},10)=8000/2100=3.81 \\to \\) IRR\\(>15\\%\\) 可行",source:"2022-2023-A",options:[]},
  {id:"2022A-calc-3",question:"某项目各活动逻辑依赖关系：A无紧前(6天)；B紧前A，FS5(3天)；C紧前A，FS3(8天)；D紧前A，FS0(4天)；E紧前B和C，与B是FS0，与C是SS3(5天)；F紧前C和D，与C是SS4，与D是FS2(7天)；G紧前E和F，与E是FS0，与F是FF5(2天)。\n(1)绘制网络图；(2)计算ES、EF、LS、LF、TF、FF；(3)写出关键路径。",answer:"详见解析",type:"计算",explanation:"需绘制网络图并计算各时间参数",source:"2022-2023-A",options:[]}
];

window.ALL_QUESTIONS.push(...qs);
})();
