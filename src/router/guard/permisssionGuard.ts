import { Router, RouteRecordRaw } from 'vue-router';
import { PageEnum } from '/@/enums/pageEnum';
import { usePermissionStore } from '/@/store/modules/permisssion';
import { useUserStore } from '/@/store/modules/user';
// import { useUserStoreWithOut } from '/@/store/modules/user';

const LOGIN_PATH = PageEnum.BASE_LOGIN;
const whitePathList: PageEnum[] = [LOGIN_PATH];

export function createPermissionGuard(router: Router) {
  const userStore = useUserStore();
  const permissionStore = usePermissionStore();
  // userStore.getUserInfoAction();
  //   const userStore1 = useUserStoreWithOut();
  router.beforeEach(async (to, from, next) => {
    const token = userStore.getToken?.access_token;

    // 白名单
    if (whitePathList.includes(to.path as PageEnum)) {
      if (to.path === LOGIN_PATH && token) {
        try {
          await userStore.afterLoginAction();
          next((to.query?.redirect as string) || '/');
          return;
        } catch (e) {
          console.log(e);
        }
      }
      next();
      return;
    }

    // token不存在
    if (!token) {
      const redirectData: { path: string; replace: boolean; query?: Recordable<string> } = {
        path: LOGIN_PATH,
        replace: true,
      };
      if (to.path) {
        redirectData.query = {
          ...redirectData.query,
          redirect: to.path,
        };
        next(redirectData);
      }
    }

    const routes = await permissionStore.buildRoutesAction();

    routes.forEach((route) => {
      router.addRoute(route as unknown as RouteRecordRaw);
    });

    next();
  });
}
