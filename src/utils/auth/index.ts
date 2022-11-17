import { CacheTypeEnum, XIAO_YU_TOKEN } from '/@/enums/cacheEnum';
import projectSetting from '/@/settings/projectSetting';

import { Persistent, BasicKeys, SessionStore } from '/@/utils/cache/persistent';

const { premissionCacheType } = projectSetting;
const isLocal = premissionCacheType === CacheTypeEnum.LOCAL;

export function getToken() {
  return getAuthCache(XIAO_YU_TOKEN);
}

export function getAuthCache<T>(key: BasicKeys) {
  const fn = isLocal ? Persistent.getSession : Persistent.getSession;
  return fn(key) as T;
}

export function setAuthCache(key: BasicKeys, value: SessionStore[BasicKeys]) {
  // const fn = isLocal ? Persistent.setLocal : Persistent.setSession;
  const fn = isLocal ? Persistent.setSession : Persistent.setSession;
  return fn(key, value, true);
}
