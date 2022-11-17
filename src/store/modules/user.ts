import { defineStore } from 'pinia';
import { router } from '/@/router';
import { store } from '/@/store';
import { isArray } from '/@/utils/is';

// 常量
import { PageEnum } from '/@/enums/pageEnum';

import { loginApi, getUserInfo } from '/@/api/sys/user';
import { XIAO_YU_TOKEN, USER_INFO_KEY } from '/@/enums/cacheEnum';

import { PAGE_NOT_FOUND_ROUTE } from '/@/router/routes/basic';

import { getAuthCache, setAuthCache } from '/@/utils/auth';
import { UserInfo } from '/#/store';
import { usePermissionStore } from './permisssion';
import { RouteRecordRaw } from 'vue-router';

interface UserState {
  userInfo: Nullable<UserInfo>;
  token?: Token;
  roleList: RoleList[];
  sessionTimeout?: boolean;
  lastUpdateTime: number;
}

export interface Token {
  access_token?: string;
  refresh_token?: string;
  expires_in?: string;
}

export interface RoleList {
  code: string;
  details: Nullable<string>;
  id: string;
  name: string;
}

export const useUserStore = defineStore('app-user', {
  state(): UserState {
    return {
      userInfo: null,
      token: undefined,
      roleList: [],
      sessionTimeout: false,
      lastUpdateTime: 0,
    };
  },
  getters: {
    getToken(): Token {
      return this.token || getAuthCache<Token>(XIAO_YU_TOKEN);
    },
  },
  actions: {
    setToken(token: Token) {
      this.token = token ? token : {};
      // 存储到sessionstrange中
      setAuthCache(XIAO_YU_TOKEN, token);
    },
    setRoleList(roleList: RoleList[]) {
      this.roleList = roleList;
    },
    setUserInfo(info: UserInfo) {
      this.userInfo = info;
      setAuthCache(USER_INFO_KEY, info);
    },
    setSessionTimeout(flag: boolean) {
      this.sessionTimeout = flag;
    },
    async login(params: any) {
      try {
        const { goHome = true, mode, ...loginParams } = params;
        const data = await loginApi(loginParams, mode);
        console.log(data);
        const { access_token, refresh_token, expires_in } = data;
        this.setToken({
          access_token,
          refresh_token,
          expires_in,
        });
        return this.afterLoginAction(goHome);
      } catch (error) {
        return Promise.reject(error);
      }
    },
    // 登录后动作
    async afterLoginAction(goHome?: boolean) {
      // 是否有token
      if (!this.getToken) return null;
      // 获取userInfo
      const userInfo = await this.getUserInfoAction();

      const sessionTimeout = this.sessionTimeout;
      if (sessionTimeout) {
        this.setSessionTimeout(false);
      } else {
        const permissionStore = usePermissionStore();
        if (!permissionStore.isDynamicAddedRoute) {
          const routes = await permissionStore.buildRoutesAction();
          routes.forEach((route: RouteRecordRaw) => {
            router.addRoute(route);
          });
          router.addRoute(PAGE_NOT_FOUND_ROUTE);
          permissionStore.setDynamicAddedRoute(true);
        }
        console.log('goHome' + goHome);
        goHome && (await router.replace(userInfo?.homePath || PageEnum.BASE_HOME));
      }
      return userInfo;
    },
    // 获取userInfo方法
    async getUserInfoAction(): Promise<any> {
      if (!this.getToken) return null;
      const userInfo = await getUserInfo();
      console.log(userInfo);
      // 单独把 roleList 拿出来
      const { roles = [] } = userInfo;
      if (isArray(roles)) {
        const roleList = roles.map((item) => item.value) as RoleList[];
        this.setRoleList(roleList);
      } else {
        userInfo.roles = [];
        this.setRoleList([]);
      }
      this.setUserInfo(userInfo);
      return userInfo;
    },
  },
});

// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store);
}
