import { RouteRecordRaw } from 'vue-router';
import { PageEnum } from '/@/enums/pageEnum';

import LAYOUT from '/@/layouts/default/index.vue';

// 根路由
export const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
};

export const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('/@/views/sys/login/Login.vue'),
  meta: {
    title: '登录',
  },
};

const routes: RouteRecordRaw = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: 'noRedirect',
  meta: {
    title: '仪表盘',
    title1: 'routes.dashboard.dashboard',
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('/@/views/dashboard/analysis/index.vue'),
      meta: {
        title: '分析',
        title1: 'routes.dashboard.analysis',
      },
    },
    {
      path: 'workbench',
      name: 'Workbench',
      component: () => import('/@/views/dashboard/workbench/index.vue'),
      meta: {
        title: '工作台',
        title1: 'routes.dashboard.workbench',
      },
    },
  ],
};

// Basic routing without permission
// 未经许可的基本路由
export const basicRoutes = [routes, LoginRoute, RootRoute];
