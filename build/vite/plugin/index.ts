import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { configStyleImportPlugin } from './styleImport';
// import { configMockServerPlugin } from './mockServer';
import PurgeIcons from 'vite-plugin-purge-icons';

export function createVitePlugins() {
  const isBuild = false;
  const vitePlugins = [vue(), vueJsx()];

  // vite-plugin-style-import
  vitePlugins.push(configStyleImportPlugin(isBuild));

  // mock-server
  // vitePlugins.push(configMockServerPlugin(isBuild));

  // PurgeIcons
  vitePlugins.push(PurgeIcons());

  return vitePlugins;
}
