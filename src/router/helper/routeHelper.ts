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
  const path = '/' + (funcUrl || menuId);
  //   可能带有参数
  const route: RouteRecordRaw = {
    path: path,
    name: menuId,
    component: funcUrl ? LAYOUT : LAYOUT,
    meta: {
      id: menuId,
      title: menuName,
      pid: upMenuId,
      icon: menuIcon,
      routeId: funcId,
    },
    children: children || [],
  };

  return route;
}

// // 是否对象中
// function looseEqual(t, r) {
//   if (t === r) return !0;
//   var e = isObject(t),
//     n = isObject(r);
//   if (!e || !n) return !e && !n && String(t) === String(r);
//   try {
//     var i = Array.isArray(t),
//       o = Array.isArray(r);
//     if (i && o)
//       return (
//         t.length === r.length &&
//         t.every(function (e, t) {
//           return looseEqual(e, r[t]);
//         })
//       );
//     if (i || o) return !1;
//     var a = Object.keys(t),
//       s = Object.keys(r);
//     return (
//       a.length === s.length &&
//       a.every(function (e) {
//         return looseEqual(t[e], r[e]);
//       })
//     );
//   } catch (e) {
//     return !1;
//   }
// }
