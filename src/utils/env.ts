import type { GlobEnvConfig } from '/#/config';
export const getAppEnvConfig = () => {
  // console.log(import.meta);
  const ENV = import.meta.env as unknown as GlobEnvConfig;
  const { VITE_GLOB_APP_TITLE } = ENV;
  return {
    VITE_GLOB_APP_TITLE,
  };
};

export function getStorageShortName() {
  return '';
}
