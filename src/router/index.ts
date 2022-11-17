import type { App } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';
import { basicRoutes } from './routes';

export const router = createRouter({
  history: createWebHistory(),
  routes: basicRoutes, // `routes: routes` 的缩写
});

//  配置路由器
export function setupRouter(app: App) {
  app.use(router);
}
