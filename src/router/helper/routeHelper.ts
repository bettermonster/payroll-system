import { RouteRecordRaw } from 'vue-router';
import { UpMenu } from '../types';
import { cloneDeep } from 'lodash-es';
import { LAYOUT } from '../constant';

// 将menu 对象转化为路由
export function transformObjToRoute(menus: UpMenu[]): RouteRecordRaw[] {
  // 虽然 menus没啥用了，但是还是使用深拷贝 防止出问题
  const cloneMenus = cloneDeep(menus);
  const routeList: RouteRecordRaw[] = [];
  const cloneMenusMap = new Map();
  cloneMenus.forEach((item) => {
    cloneMenusMap.set(item.menuId, item);
  });
  //
  cloneMenus.forEach((item) => {
    const menuId = item.menuId;
    const upMenuId = item.upMenuId;

    // 转为route对象
    const route = getRouteData(item);
    if (cloneMenusMap.has(upMenuId)) {
      const pNode = cloneMenusMap.get(upMenuId);
      pNode.children = pNode.children || [];
      pNode.children.push(route);
    } else {
      routeList.push(route);
    }
    cloneMenusMap.set(menuId, route);
  });
  // console.log(menus);
  return routeList;
}

export function getRouteData(MenuItem: UpMenu): RouteRecordRaw {
  const { menuId, menuName, menuIcon, funcId, funcUrl, children, upMenuId } = MenuItem;
  // const path = '/' + (funcUrl || menuId);
  //   可能带有参数
  const route: RouteRecordRaw = {
    path: '',
    name: menuId,
    component: undefined,
    meta: {
      id: menuId,
      title: menuName,
      pid: upMenuId,
      icon: menuIcon,
      routeId: funcId,
    },
    children: children || [],
  };

  // const externalLink = /^https?:\/\//;
  // 外链（iframe方式打开）匹配正则
  // const iframeLink = /^iframelink=https?/;
  if (funcUrl) {
    route.path = '/' + funcUrl;
    route.component = () => import('/@/pages/workflow/bench/todo/todo.vue');
    // 存在即表示叶子节点
    // if (externalLink.test(path)) {
    //   route.component = () => import('/@/views/sys/login/login.vue');
    // } else if (iframeLink.test(path)) {
    //   route.component = () => import('/@/views/sys/login/login.vue');
    // } else {
    //   route.component = () => import('/@/views/sys/login/login.vue');
    // }
  } else {
    route.path = '/' + menuId;
    route.component = LAYOUT;
  }
  return route;
}
