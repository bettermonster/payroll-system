import { GlobConfig } from '/#/config';
import { getAppEnvConfig } from '/@/utils/env';

export const useGlobSetting = () => {
  // 从配置文件中获取全局配置
  const { VITE_GLOB_APP_TITLE } = getAppEnvConfig();

  const glob: Readonly<GlobConfig> = {
    title: VITE_GLOB_APP_TITLE,
  };
  return glob;
};
