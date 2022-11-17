import { defineStore } from 'pinia';

import { getMenuandcontrFn } from '/@/api/sys/user';
import { RouteRecordRaw } from 'vue-router';
import { transformObjToRoute } from '/@/router/helper/routeHelper';
import { Menu } from '/@/router/types';
import { transformRouteToMenu } from '/@/router/helper/menuHelper';
import { PAGE_NOT_FOUND_ROUTE } from '/@/router/routes/basic';

interface PermissionState {
  // 权限代码列表
  permCodeList: string[] | number[];
  // 路由是否动态添加
  isDynamicAddedRoute: boolean;
  // 触发菜单更新
  lastBuildMenuTime?: number;
  // 后台菜单列表
  backMenuList: any[];
}

export const usePermissionStore = defineStore({
  id: 'app-permission',
  state: (): PermissionState => ({
    // 权限代码列表
    permCodeList: [],
    // 路由是否动态添加
    isDynamicAddedRoute: false,
    // 后台菜单列表
    backMenuList: [],
  }),
  getters: {
    getPermCodeList(): string[] | number[] {
      return this.permCodeList;
    },
    getBackMenuList(): Menu[] {
      return this.backMenuList;
    },
    getIsDynamicAddedRoute(): boolean {
      return this.isDynamicAddedRoute;
    },
  },
  actions: {
    setDynamicAddedRoute(added: boolean) {
      this.isDynamicAddedRoute = added;
    },

    setBackMenuList(list: Menu[]) {
      this.backMenuList = list;
      // list?.length > 0 && this.setLastBuildMenuTime();
    },

    async buildRoutesAction() {
      let routeList: RouteRecordRaw[] = [];
      const menuAndContr = await getMenuandcontrFn();
      // console.log(menuAndContr);
      // 数组到路由结构
      routeList = transformObjToRoute(menuAndContr.menu);

      // 路由到菜单结构
      const backMenuList = transformRouteToMenu(routeList);
      this.setBackMenuList(backMenuList);

      routeList = [...routeList];
      // console.log(routeList);
      // console.log(backMenuList);
      return routeList;
    },
  },
});
