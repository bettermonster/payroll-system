import { Router } from 'vue-router';
import { setRouteChange } from '/@/logics/mitt/routeChange';
import { createPermissionGuard } from './permisssionGuard';

export function setupRouterGuard(router: Router) {
  createPageGuard(router);
  createPermissionGuard(router);
}

// 创建
function createPageGuard(router: Router) {
  router.beforeEach((to) => {
    // Notify routing changes
    setRouteChange(to);
    return true;
  });
}
