import { DEFAULT_CACHE_TIME } from '/@/settings/encryptionSetting';
import type { CreateStorageParams } from './storageCache';
import { createStorage } from './storageCache';
import { getStorageShortName } from '/@/utils/env';

type Option = Partial<CreateStorageParams>;

const createOptions = (storage: Storage, options: Option): CreateStorageParams => {
  return {
    hasEncrypt: false, //是否加密
    storage,
    prefixKey: getStorageShortName(), //前缀
    ...options,
  };
};

const createStorages = (storage: Storage, options: Option = {}) => {
  return createStorage(createOptions(storage, options));
};

export const createSessionStorage = (options: Option = {}) => {
  return createStorages(sessionStorage, { ...options, timeOut: DEFAULT_CACHE_TIME });
};
