import { resolve } from 'path';
import { defineConfig } from 'vite';
import { createVitePlugins } from './build/vite/plugin';
import { generateModifyVars } from './build/generate/generateModifyVars';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

export default defineConfig({
  resolve: {
    alias: [
      { find: /\/@\//, replacement: pathResolve('src') + '/' },
      { find: /\/#\//, replacement: pathResolve('types') + '/' },
    ],
  },
  server: {
    port: 8089,
    proxy: {
      '/basic-api': {
        target: 'http://119.45.103.189:15008',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(new RegExp('/basic-api'), ''),
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: generateModifyVars(),
        javascriptEnabled: true,
      },
    },
  },
  plugins: createVitePlugins(),
});
