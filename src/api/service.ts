/**
 * @created by helin3 2019-04-06
 * @updated by
 * @description 全局后台API服务映射表
 * 使用方式：
 * 1) /src/api/* 可使用别名@
 * import backend from '@/config/constant/app.data.service'
 * 2) /mocks/* 请使用相对路径，否则可能出错
 * import backend from '../../../src/config/constant/app.data.service'
 * 3) 组件内部：$backend.xxx
 */
const serviceNameList = {
  mockExampleService: '/mock-example', // 通用Mock模拟示例服务,
  uaaService: '/yusp-uaa', // 用户认证微服务
  gatewayService: '/yusp-gateway', // 网关
  appCommonService: '/yusp-app-common', // 基础服务
  appOcaService: '/yusp-app-oca', // 组织机构、菜单权限微服务-kqf-lyq
  // appOcaService: '/sq', // 孙琦
  noticeService: '/yusp-app-notice', // 公告微服务
  messageService: '/yusp-app-message', // 消息中心微服务
  jobService: '/yusp-job-admin', // 分布式调度管理端
  fileService: '/yusp-file', // 文件微服务
  seqService: '/yusp-sequence', // 全局序列号微服务
  echainService: '/yusp-echain', // 工作流微服务
  remote: '192.168.251.173', // TODO 待修改
  example: '/ms-example-common', // 示例微服务
  actService: '/ms-tcc-service1', // TCC-示例原子微服务
  scoreService: '/ms-tcc-service2', // TCC-示例原子微服务
  compositeService: '/ms-tcc-composite', // TCC-示例聚合微服务
  mycatService: '/ms-example-mycat', // 示例分布式数据库 缓存
  msScriptsPSService: '/ms-scripts-public-security', // 剧本-公安信息
  msScriptsLimitService: '/ms-scripts-limit', // 剧本-公安信息
  msmFrontWebService: '/yusp-msm-front-web-server', // 前端监控与审计日志服务
  workflowService: '/yusp-flow', //新工作流微服务
  isSingleServer: false, // 服务端是否单机运行
  // 快速开发平台微服务
  // appocaservice: '/appocaservice', // 组织机构、菜单权限微服务
  product1service: '/product1service',
  quotacenter: '/yusys-quotacenter-cl',
  crdtlimtservice: '/yusys-quotacenter-cl',
  // custService: '/cust-wht',
  hcsService: 'ngi-hcs',
  zxyService: 'ngi-lcs-zxy',
  loanaService: 'loan_after', //贷后微服务
  //custService: '/ngi-ccs', // 客户中心
  // custService: '/cust-cxdyinli', // 客户中心-尹力
  // custService: '/cust-cxd', // 客户中心-旭东
  // custService: '/sq', // 客户中心-孙琦
  quotService: 'ngi-lcs', // 额度中心
  gtyService: 'ngi-lcs-gaoty',
  cmsSQService: '/sq',
  cmsWService: '/cust-wht',
  cmsGTYService: 'cust-gaoty',
  imagplfmService: '/yusp-app-oca-shengxiaobao',
  commonService: '/yuspcreditcomponent',
  downService: 'yusp-file',
  ngidis: '/ngi-dis', // 数据整合
  // fgcust: 'cust-smf',
  // crdtcxd: 'crdt-cxd',
  // cpsService: 'crdt-cxd', // 授信全流程
  cpsService: 'ngi-cps', // 授信全 流程
  // cpsService: '/gty', // 授信全流程
  // crdtsl: 'crdt_sl',
  // crdtjingf: 'crdt_jingf',
  // crdtgaoty: 'crdt_gaoty', // 高天宇
  // crdtWht: 'crdt-wht',
  // crdtCf: 'crdt_chenf',
  grteCterService: 'ngi-gcs', // 担保中心服务
  // grteCterService: 'ngi-gcsyinli', // 尹力
  // grteCterService: 'ngi-gcsccc', // 腊恒博
  crdtService: '/crdt-fhx', //授信额度中心
  pfsService: '/ngi-pcs', // 产品中心
  // pfsService: '/ngi-pcs-cf',
  indLib: 'ngi-crs', //评级中心
  webService: '/webService', // weboffice服务
  // webService: '/yusp-app-oca-shengxiaobao', // weboffice服务
  gaotyService: '/gty', // 额度授信
  chcpService: 'ngi-acs', // 核算中心服务
  testService: 'testcenter', //挡板中心
  netloanQueryService: '/yusp-netloan-centers', // 网贷中心查询服务
  netloanAutoflow: '/yusp-netloan-autoflow', // 审批服务
  netloanCont: '/yusp-netloan-cont', // 合同服务
  netloanNonunions: '/yusp-netloan-nonunions', // 自营服务
  netloanUnions: 'yusp-netloan-unions', // 助贷服务
  netloanBatch: 'yusp-netloan-batch', // 批量服务
  netloanLimit: 'yusp-netloan-limit', // 额度服务
  singleservice: '/data-view-single', //授信分析中心微服务
  bdpservice: '/business-data-provider', //授信分析中心微服务
  aiService: 'ngi-ai', // 智能组件微服务
  ngiAcsOnline: 'ngi-acs-online', //
  cenbscsService: 'yucsp-center-bscs', //业务支撑服务
  tacService: 'psi-tac', //银丰典当行-收当管理-贷前调查
  pacService: 'psi-pac', //银丰典当行-收当管理-当物列表
  custService: '/psi-cuc', // 客户中心
  baseService: '/psi-bsc', // 业务支撑中心
  archivesService: '/psi-tac', // 作业管理的微服务
};
export default serviceNameList;
