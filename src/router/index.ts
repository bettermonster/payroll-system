import type { App } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';
import LAYOUT from '/@/layouts/default/index.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('/@/views/sys/login/Login.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/',
    redirct: '/',
    component: () => import('/@/views/sys/login/Login.vue'),
    name: 'index',
    meta: {
      title: '首页',
    },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: LAYOUT,
    redirect: '/dashboard/analysis',
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
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});

//  配置路由器
export function setupRouter(app: App) {
  app.use(router);
}
