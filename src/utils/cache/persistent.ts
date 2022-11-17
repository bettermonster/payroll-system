import { toRaw } from 'vue';
import { Memory } from './memory';
import { XIAO_YU_TOKEN, APP_SESSION_CACHE_KEY, ROLES_KEY, USER_INFO_KEY } from '/@/enums/cacheEnum';
import { DEFAULT_CACHE_TIME } from '/@/settings/encryptionSetting';

import { createSessionStorage } from '/@/utils/cache';

import type { Token } from '/@/store/modules/user';
import { RoleList } from '/@/store/modules/user';
import { UserInfo } from '/#/store';

interface BasicStore {
  [XIAO_YU_TOKEN]: Token;
  [ROLES_KEY]: RoleList[];
  [USER_INFO_KEY]: UserInfo;
}

export type SessionStore = BasicStore;

export type BasicKeys = keyof BasicStore;

type SessionKeys = keyof SessionStore;

const ss = createSessionStorage();

// 用Memory估计是生产环境加密，减少运算？
const sessionMemory = new Memory(DEFAULT_CACHE_TIME);

function initPersistentMemory() {
  const sessionCache = ss.get(APP_SESSION_CACHE_KEY);
  sessionCache && sessionMemory.resetCache(sessionCache);
}

export class Persistent {
  static setSession(key: SessionKeys, value: BasicStore[SessionKeys], immediate = false): void {
    sessionMemory.set(key, toRaw(value));
    immediate && ss.set(APP_SESSION_CACHE_KEY, sessionMemory.getCache);
  }

  static getSession<T>(key: keyof SessionStore) {
    return sessionMemory.get(key)?.value as Nullable<T>;
  }
}

initPersistentMemory();
