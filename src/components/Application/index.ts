// 这里对一些基本组件注册
import appProvider from './src/AppProvider.vue';
import appLogo from './src/AppLogo.vue';
import { withInstall } from '../../utils/index';

export { useAppProviderContext } from './src/useAppContext';

export const AppProvider = withInstall(appProvider);
export const AppLogo = withInstall(appLogo);
