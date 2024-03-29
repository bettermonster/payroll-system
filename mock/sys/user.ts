import { MockMethod } from 'vite-plugin-mock';
import type { requestParams } from '../_util';
import { resultError, resultSuccess, getRequestToken } from '../_util';

export function createFakeUserList() {
  return [
    // {
    //   userId: '1',
    //   username: 'vben',
    //   realName: 'Vben Admin',
    //   avatar: 'https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640',
    //   desc: 'manager',
    //   password: '123456',
    //   token: 'fakeToken1',
    //   homePath: '/dashboard/analysis',
    //   roles: [
    //     {
    //       roleName: 'Super Admin',
    //       value: 'super',
    //     },
    //   ],
    // },
    {
      username: 'superAdmin',
      password: '123456',
      token: 'fakeToken1',
      id: '1265476890672672808',
      account: 'superAdmin',
      nickName: '超级管理员',
      name: '超级管理员',
      avatar: '1427216638708658178',
      birthday: '2020-03-18 08:00:00.000',
      sex: 1,
      email: 'superAdmin@qq.com',
      phone: '4008863710',
      tel: '1234567890',
      adminType: 1,
      lastLoginIp: '127.0.0.1',
      lastLoginTime: '2022-09-20 10:28:41',
      lastLoginAddress: '-',
      lastLoginBrowser: 'Chrome',
      lastLoginOs: 'Windows 10 or Windows Server 2016',
      loginEmpInfo: { jobNum: null, orgId: null, orgName: null, extOrgPos: [], positions: [] },
      apps: [
        { code: 'team', name: '营销系统', active: true },
        { code: 'system', name: '系统应用', active: false },
        { code: 'systool', name: '系统工具', active: false },
        { code: 'car_manager', name: '车辆出入库', active: false },
        { code: 'finance', name: '财务核算', active: false },
      ],
      roles: [{ id: '1371746059660480513', code: 'common_user', name: '普通用户' }],
      permissions: [
        'require:delete',
        'require:page',
        'require:edit',
        'require:add',
        'require:index',
        'require:detail',
      ],
      menus: [
        {
          code: 'team',
          value: [
            {
              id: '1404971528310607873',
              parentId: '0',
              title: '门店管理',
              value: 'javascript:;',
              icon: 'layui-icon-app',
              weight: 1,
              children: [
                {
                  id: '1405064092874416130',
                  parentId: '1404971528310607873',
                  title: '门店列表',
                  value: '/storefront/index',
                  icon: 'layui-icon-app',
                  weight: 1,
                  children: [],
                  pid: '1404971528310607873',
                },
              ],
              pid: '0',
            },
            {
              id: '1405786100453027842',
              parentId: '0',
              title: '商机管理',
              value: 'javascript:;',
              icon: 'layui-icon-face-surprised',
              weight: 2,
              children: [
                {
                  id: '1405786360504070145',
                  parentId: '1405786100453027842',
                  title: '客户需求',
                  value: '/intent/index',
                  icon: 'layui-icon-app',
                  weight: 1,
                  children: [],
                  pid: '1405786100453027842',
                },
                {
                  id: '1417018076262522882',
                  parentId: '1405786100453027842',
                  title: '商机指派',
                  value: '/intentAssign/index',
                  icon: 'layui-icon-app',
                  weight: 2,
                  children: [],
                  pid: '1405786100453027842',
                },
              ],
              pid: '0',
            },
            {
              id: '1407272705793687553',
              parentId: '0',
              title: '小程序配置',
              value: 'javascript:;',
              icon: 'layui-icon-app',
              weight: 3,
              children: [
                {
                  id: '1408008567750754306',
                  parentId: '1407272705793687553',
                  title: '首页轮播',
                  value: '/carousel/index',
                  icon: 'layui-icon-app',
                  weight: 1,
                  children: [],
                  pid: '1407272705793687553',
                },
                {
                  id: '1407962325028081666',
                  parentId: '1407272705793687553',
                  title: '首页公示',
                  value: '/bannerNotice/index',
                  icon: 'layui-icon-app',
                  weight: 2,
                  children: [],
                  pid: '1407272705793687553',
                },
                {
                  id: '1407272977584586754',
                  parentId: '1407272705793687553',
                  title: '资讯管理',
                  value: '/news/index',
                  icon: 'layui-icon-app',
                  weight: 3,
                  children: [],
                  pid: '1407272705793687553',
                },
                {
                  id: '1412713502034829313',
                  parentId: '1407272705793687553',
                  title: '业务类型',
                  value: '/pawnItemType/index',
                  icon: 'layui-icon-app',
                  weight: 4,
                  children: [],
                  pid: '1407272705793687553',
                },
              ],
              pid: '0',
            },
            {
              id: '1435784937254871042',
              parentId: '0',
              title: '网站配置',
              value: 'javascript:;',
              icon: 'layui-icon-templeate-1',
              weight: 4,
              children: [
                {
                  id: '1435785421449519106',
                  parentId: '1435784937254871042',
                  title: '网站资讯管理',
                  value: '/newsWebsite/index',
                  icon: 'layui-icon-app',
                  weight: 1,
                  children: [],
                  pid: '1435784937254871042',
                },
                {
                  id: '1435907090021347329',
                  parentId: '1435784937254871042',
                  title: '网站轮播管理',
                  value: '/carouselWebsite/index',
                  icon: 'layui-icon-app',
                  weight: 2,
                  children: [],
                  pid: '1435784937254871042',
                },
                {
                  id: '1436213476819120130',
                  parentId: '1435784937254871042',
                  title: '网站参数配置',
                  value: '/configWebsite/index',
                  icon: 'layui-icon-app',
                  weight: 4,
                  children: [],
                  pid: '1435784937254871042',
                },
                {
                  id: '1437242813190172673',
                  parentId: '1435784937254871042',
                  title: '招聘信息',
                  value: '/recruit/index',
                  icon: 'layui-icon-app',
                  weight: 5,
                  children: [],
                  pid: '1435784937254871042',
                },
                {
                  id: '1437715589436936193',
                  parentId: '1435784937254871042',
                  title: '常见问题',
                  value: '/faq/index',
                  icon: 'layui-icon-app',
                  weight: 8,
                  children: [],
                  pid: '1435784937254871042',
                },
                {
                  id: '1437949711128371201',
                  parentId: '1435784937254871042',
                  title: '问题标签',
                  value: '/lable/index',
                  icon: 'layui-icon-app',
                  weight: 8,
                  children: [],
                  pid: '1435784937254871042',
                },
              ],
              pid: '0',
            },
            {
              id: '1442660871316676610',
              parentId: '0',
              title: '优惠券管理',
              value: 'javascript:;',
              icon: 'layui-icon-dollar',
              weight: 9,
              children: [
                {
                  id: '1442661059288604673',
                  parentId: '1442660871316676610',
                  title: '发放记录',
                  value: '/coupon/index',
                  icon: 'layui-icon-app',
                  weight: 1,
                  children: [],
                  pid: '1442660871316676610',
                },
                {
                  id: '1468401779916742658',
                  parentId: '1442660871316676610',
                  title: '赠送记录',
                  value: '/couponDonate/index',
                  icon: 'layui-icon-app',
                  weight: 1,
                  children: [],
                  pid: '1442660871316676610',
                },
              ],
              pid: '0',
            },
            {
              id: '1372841591476764673',
              parentId: '0',
              title: '客户管理',
              value: 'javascript:;',
              icon: 'layui-icon-username',
              weight: 11,
              children: [
                {
                  id: '1400708170688151553',
                  parentId: '1372841591476764673',
                  title: '客户信息',
                  value: '/tabUser/index',
                  icon: 'layui-icon-app',
                  weight: 1,
                  children: [],
                  pid: '1372841591476764673',
                },
                {
                  id: '1372841908360626178',
                  parentId: '1372841591476764673',
                  title: '渠道客户',
                  value: '/channelUser/index',
                  icon: 'layui-icon-app',
                  weight: 2,
                  children: [],
                  pid: '1372841591476764673',
                },
                {
                  id: '1372842117115330562',
                  parentId: '1372841591476764673',
                  title: '微信客户',
                  value: '/webchatUser/index',
                  icon: 'layui-icon-app',
                  weight: 3,
                  children: [],
                  pid: '1372841591476764673',
                },
              ],
              pid: '0',
            },
            {
              id: '1413406718388269058',
              parentId: '0',
              title: '营销统计',
              value: 'javascript:;',
              icon: 'layui-icon-app',
              weight: 100,
              children: [
                {
                  id: '1413406995120058369',
                  parentId: '1413406718388269058',
                  title: '推荐用户',
                  value: '/webchatUser/recommendIndex',
                  icon: 'layui-icon-app',
                  weight: 1,
                  children: [],
                  pid: '1413406718388269058',
                },
              ],
              pid: '0',
            },
          ],
        },
        {
          code: 'system',
          value: [
            {
              id: '1264622039642255311',
              parentId: '0',
              title: '主控面板',
              value: 'javascript:;',
              icon: 'layui-icon-home',
              weight: 1,
              children: [
                {
                  id: '1264622039642255321',
                  parentId: '1264622039642255311',
                  title: '分析页',
                  value: '/other/dashboardHtml',
                  icon: null,
                  weight: 1,
                  children: [],
                  pid: '1264622039642255311',
                },
                {
                  id: '1264622039642255331',
                  parentId: '1264622039642255311',
                  title: '工作台',
                  value: '/other/workplaceHtml',
                  icon: null,
                  weight: 2,
                  children: [],
                  pid: '1264622039642255311',
                },
                {
                  id: '1264622039642255332',
                  parentId: '1264622039642255311',
                  title: '控制台',
                  value: '/other/consoleHtml',
                  icon: null,
                  weight: 3,
                  children: [],
                  pid: '1264622039642255311',
                },
              ],
              pid: '0',
            },
            {
              id: '1264622039642255341',
              parentId: '0',
              title: '组织架构',
              value: 'javascript:;',
              icon: 'layui-icon-user',
              weight: 2,
              children: [
                {
                  id: '1264622039642255351',
                  parentId: '1264622039642255341',
                  title: '用户管理',
                  value: '/sysUser/index',
                  icon: null,
                  weight: 3,
                  children: [],
                  pid: '1264622039642255341',
                },
                {
                  id: '1264622039642255521',
                  parentId: '1264622039642255341',
                  title: '机构管理',
                  value: '/sysOrg/index',
                  icon: null,
                  weight: 4,
                  children: [],
                  pid: '1264622039642255341',
                },
                {
                  id: '1264622039642255601',
                  parentId: '1264622039642255341',
                  title: '职位管理',
                  value: '/sysPos/index',
                  icon: null,
                  weight: 5,
                  children: [],
                  pid: '1264622039642255341',
                },
              ],
              pid: '0',
            },
            {
              id: '1264622039642255671',
              parentId: '0',
              title: '权限管理',
              value: 'javascript:;',
              icon: 'layui-icon-auz',
              weight: 3,
              children: [
                {
                  id: '1264622039642255681',
                  parentId: '1264622039642255671',
                  title: '应用管理',
                  value: '/sysApp/index',
                  icon: null,
                  weight: 6,
                  children: [],
                  pid: '1264622039642255671',
                },
                {
                  id: '1264622039642255761',
                  parentId: '1264622039642255671',
                  title: '菜单管理',
                  value: '/sysMenu/index',
                  icon: null,
                  weight: 7,
                  children: [],
                  pid: '1264622039642255671',
                },
                {
                  id: '1264622039642255851',
                  parentId: '1264622039642255671',
                  title: '角色管理',
                  value: '/sysRole/index',
                  icon: null,
                  weight: 8,
                  children: [],
                  pid: '1264622039642255671',
                },
              ],
              pid: '0',
            },
            {
              id: '1264622039642255961',
              parentId: '0',
              title: '开发管理',
              value: 'javascript:;',
              icon: 'layui-icon-code-circle',
              weight: 4,
              children: [
                {
                  id: '1264622039642255971',
                  parentId: '1264622039642255961',
                  title: '系统配置',
                  value: '/sysConfig/index',
                  icon: null,
                  weight: 9,
                  children: [],
                  pid: '1264622039642255961',
                },
                {
                  id: '1264622039642256041',
                  parentId: '1264622039642255961',
                  title: '邮件发送',
                  value: '/sysEmail/index',
                  icon: null,
                  weight: 10,
                  children: [],
                  pid: '1264622039642255961',
                },
                {
                  id: '1264622039642256071',
                  parentId: '1264622039642255961',
                  title: '短信管理',
                  value: '/sysSms/index',
                  icon: null,
                  weight: 11,
                  children: [],
                  pid: '1264622039642255961',
                },
                {
                  id: '1264622039642256111',
                  parentId: '1264622039642255961',
                  title: '字典管理',
                  value: '/sysDictType/index',
                  icon: null,
                  weight: 12,
                  children: [],
                  pid: '1264622039642255961',
                },
                {
                  id: '1264622039642256271',
                  parentId: '1264622039642255961',
                  title: '接口文档',
                  value: '/doc.html',
                  icon: null,
                  weight: 13,
                  children: [],
                  pid: '1264622039642255961',
                },
              ],
              pid: '0',
            },
            {
              id: '1264622039642256281',
              parentId: '0',
              title: '日志管理',
              value: 'javascript:;',
              icon: 'layui-icon-log',
              weight: 5,
              children: [
                {
                  id: '1264622039642256291',
                  parentId: '1264622039642256281',
                  title: '访问日志',
                  value: '/sysVisLog/index',
                  icon: null,
                  weight: 14,
                  children: [],
                  pid: '1264622039642256281',
                },
                {
                  id: '1264622039642256321',
                  parentId: '1264622039642256281',
                  title: '操作日志',
                  value: '/sysOpLog/index',
                  icon: null,
                  weight: 15,
                  children: [],
                  pid: '1264622039642256281',
                },
              ],
              pid: '0',
            },
            {
              id: '1264622039642256351',
              parentId: '0',
              title: '系统监控',
              value: 'javascript:;',
              icon: 'layui-icon-chart-screen',
              weight: 6,
              children: [
                {
                  id: '1264622039642256361',
                  parentId: '1264622039642256351',
                  title: '服务监控',
                  value: '/sysMachine/index',
                  icon: null,
                  weight: 16,
                  children: [],
                  pid: '1264622039642256351',
                },
                {
                  id: '1264622039642256381',
                  parentId: '1264622039642256351',
                  title: '在线用户',
                  value: '/sysOnlineUser/index',
                  icon: null,
                  weight: 17,
                  children: [],
                  pid: '1264622039642256351',
                },
                {
                  id: '1264622039642256411',
                  parentId: '1264622039642256351',
                  title: '数据监控',
                  value: '/druid/login.html',
                  icon: null,
                  weight: 18,
                  children: [],
                  pid: '1264622039642256351',
                },
              ],
              pid: '0',
            },
            {
              id: '1264622039642256421',
              parentId: '0',
              title: '通知公告',
              value: 'javascript:;',
              icon: 'layui-icon-speaker',
              weight: 7,
              children: [
                {
                  id: '1264622039642256431',
                  parentId: '1264622039642256421',
                  title: '公告管理',
                  value: '/sysNotice/index',
                  icon: null,
                  weight: 19,
                  children: [],
                  pid: '1264622039642256421',
                },
                {
                  id: '1264622039642256501',
                  parentId: '1264622039642256421',
                  title: '已收公告',
                  value: '/sysNotice/receivedPage',
                  icon: null,
                  weight: 20,
                  children: [],
                  pid: '1264622039642256421',
                },
              ],
              pid: '0',
            },
            {
              id: '1264622039642256521',
              parentId: '0',
              title: '文件管理',
              value: 'javascript:;',
              icon: 'layui-icon-file',
              weight: 8,
              children: [
                {
                  id: '1264622039642256531',
                  parentId: '1264622039642256521',
                  title: '系统文件',
                  value: '/sysFileInfo/index',
                  icon: null,
                  weight: 21,
                  children: [],
                  pid: '1264622039642256521',
                },
              ],
              pid: '0',
            },
            {
              id: '1371999588010582017',
              parentId: '0',
              title: '内部需求',
              value: 'javascript:;',
              icon: 'layui-icon-survey',
              weight: 10,
              children: [
                {
                  id: '1372000006144942082',
                  parentId: '1371999588010582017',
                  title: '需求提交',
                  value: '/require/index',
                  icon: 'layui-icon-app',
                  weight: 1,
                  children: [],
                  pid: '1371999588010582017',
                },
              ],
              pid: '0',
            },
            {
              id: '1264622039642256611',
              parentId: '0',
              title: '定时任务',
              value: 'javascript:;',
              icon: 'layui-icon-console',
              weight: 100,
              children: [
                {
                  id: '1264622039642256621',
                  parentId: '1264622039642256611',
                  title: '任务管理',
                  value: '/sysTimers/index',
                  icon: null,
                  weight: 22,
                  children: [],
                  pid: '1264622039642256611',
                },
              ],
              pid: '0',
            },
          ],
        },
        {
          code: 'systool',
          value: [
            {
              id: '1338864007892807681',
              parentId: '0',
              title: '代码生成',
              value: '/codeGenerate/index',
              icon: 'layui-icon-app',
              weight: 1,
              children: [],
              pid: '0',
            },
          ],
        },
        {
          code: 'car_manager',
          value: [
            {
              id: '1415573428303142913',
              parentId: '0',
              title: '车库管理',
              value: 'javascript:;',
              icon: 'layui-icon-app',
              weight: 1,
              children: [
                {
                  id: '1415574904970780673',
                  parentId: '1415573428303142913',
                  title: '车库信息',
                  value: '/parking/index',
                  icon: 'layui-icon-app',
                  weight: 1,
                  children: [],
                  pid: '1415573428303142913',
                },
                {
                  id: '1415575491732938753',
                  parentId: '1415573428303142913',
                  title: '车位信息',
                  value: '/carPlace/index',
                  icon: 'layui-icon-app',
                  weight: 2,
                  children: [],
                  pid: '1415573428303142913',
                },
              ],
              pid: '0',
            },
            {
              id: '1415926263632068610',
              parentId: '0',
              title: '车辆管理',
              value: 'javascript:;',
              icon: 'layui-icon-tabs',
              weight: 3,
              children: [
                {
                  id: '1415926654297931777',
                  parentId: '1415926263632068610',
                  title: '车辆登记',
                  value: '/carInfo/index',
                  icon: 'layui-icon-app',
                  weight: 1,
                  children: [],
                  pid: '1415926263632068610',
                },
                {
                  id: '1425353985290534913',
                  parentId: '1415926263632068610',
                  title: '出库登记',
                  value: '/inoroutParking/carOutParkingIndex',
                  icon: 'layui-icon-app',
                  weight: 2,
                  children: [],
                  pid: '1415926263632068610',
                },
                {
                  id: '1415950458378215426',
                  parentId: '1415926263632068610',
                  title: '出入记录',
                  value: '/carInfo/inOutIndex',
                  icon: 'layui-icon-app',
                  weight: 3,
                  children: [],
                  pid: '1415926263632068610',
                },
                {
                  id: '1423117884408635394',
                  parentId: '1415926263632068610',
                  title: '定期检查',
                  value: '/carRegCheck/index',
                  icon: 'layui-icon-app',
                  weight: 4,
                  children: [],
                  pid: '1415926263632068610',
                },
              ],
              pid: '0',
            },
            {
              id: '1421035930477617153',
              parentId: '0',
              title: '出入库审核',
              value: 'javascript:;',
              icon: 'layui-icon-release',
              weight: 4,
              children: [
                {
                  id: '1421032614365298689',
                  parentId: '1421035930477617153',
                  title: '入库审核',
                  value: '/inoroutParking/inParkingIndex',
                  icon: 'layui-icon-app',
                  weight: 2,
                  children: [],
                  pid: '1421035930477617153',
                },
                {
                  id: '1421035629808934913',
                  parentId: '1421035930477617153',
                  title: '出库审核',
                  value: '/inoroutParking/outParkingIndex',
                  icon: 'layui-icon-app',
                  weight: 3,
                  children: [],
                  pid: '1421035930477617153',
                },
                {
                  id: '1423123012624752641',
                  parentId: '1421035930477617153',
                  title: '审核记录',
                  value: '/inoroutParking/inOutParkingRecordIndex',
                  icon: 'layui-icon-app',
                  weight: 5,
                  children: [],
                  pid: '1421035930477617153',
                },
              ],
              pid: '0',
            },
            {
              id: '1422137683046526978',
              parentId: '0',
              title: '统计分析',
              value: 'javascript:;',
              icon: 'layui-icon-chart',
              weight: 5,
              children: [
                {
                  id: '1422137914983149569',
                  parentId: '1422137683046526978',
                  title: '在库统计',
                  value: '/inoroutParking/carStatisticsIndex',
                  icon: 'layui-icon-app',
                  weight: 1,
                  children: [],
                  pid: '1422137683046526978',
                },
                {
                  id: '1428527608310452226',
                  parentId: '1422137683046526978',
                  title: '车辆统计',
                  value: '/inoroutParking/carStatisticsByOrgIndex',
                  icon: 'layui-icon-app',
                  weight: 2,
                  children: [],
                  pid: '1422137683046526978',
                },
              ],
              pid: '0',
            },
          ],
        },
        { code: 'finance', value: [] },
      ],
      dataScopes: [],
      tenants: null,
      inviteCode: 'kKLVeXZg',
      orCodeId: '1413389205832204289',
      accountNonLocked: true,
      credentialsNonExpired: true,
      accountNonExpired: true,
      enabled: true,
      authorities: [{ authority: '普通用户' }],
    },
    {
      userId: '2',
      username: 'test',
      password: '123456',
      realName: 'test user',
      avatar: 'https://q1.qlogo.cn/g?b=qq&nk=339449197&s=640',
      desc: 'tester',
      token: 'fakeToken2',
      homePath: '/dashboard/workbench',
      roles: [
        {
          roleName: 'Tester',
          value: 'test',
        },
      ],
    },
  ];
}

export default [
  {
    url: '/basic-api/login',
    timeout: 200,
    method: 'post',
    response: ({ body }: any) => {
      const { username, password } = body;
      const checkUser = createFakeUserList().find(
        (item) => item.username === username && password === item.password,
      );
      if (!checkUser) {
        return resultError('Incorrect account or password！');
      }
      const { userId, username: _username, token, realName, desc, roles } = checkUser;
      return resultSuccess({
        roles,
        userId,
        username: _username,
        token,
        realName,
        desc,
      });
    },
  },
  {
    url: '/basic-api/getUserInfo',
    method: 'get',
    response: (request: requestParams) => {
      console.log(request);
      const token = getRequestToken(request);
      if (!token) return resultError('Invalid token');
      const checkUser = createFakeUserList().find((item) => item.token === token);
      if (!checkUser) {
        return resultError('The corresponding user information was not obtained!');
      }
      return resultSuccess(checkUser);
    },
  },
  {
    url: '/api/text',
    method: 'post',
    rawResponse: async (req, res) => {
      let reqbody = '';
      await new Promise((resolve) => {
        req.on('data', (chunk) => {
          reqbody += chunk;
        });
        req.on('end', () => resolve(undefined));
      });
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 200;
      res.end(`hello, ${reqbody}`);
    },
  },
] as MockMethod[];
