import { App, Component } from 'vue';
import { RouteLocationNormalized, RouteRecordNormalized } from 'vue-router';

export function getRawRoute(route: RouteLocationNormalized): RouteLocationNormalized {
  if (!route) return route;
  const { matched, ...opt } = route;
  return {
    ...opt,
    matched: (matched
      ? matched.map((item) => ({
          meta: item.meta,
          name: item.name,
          path: item.path,
        }))
      : undefined) as RouteRecordNormalized[],
  };
}

// 注册组件
export const withInstall = <T extends Component>(component: T, alias?: string) => {
  const comp = component as any;
  comp.instll = (app: App) => {
    app.component(comp.name, component);
    // 设置别名
    if (alias) {
      app.config.globalProperties[alias] = component;
    }
  };

  return component;
};
