// import { createStyleImportPlugin, AndDesignVueResolve } from 'vite-plugin-style-import';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
export function configStyleImportPlugin(_isBuild: boolean) {
  const styleImportPlugin = Components({
    dts: true, // enabled by default if `typescript` is installed
    resolvers: [AntDesignVueResolver()],
    // libs: [
    //   {
    //     libraryName: 'ant-design-vue',
    //     esModule: true,
    //     resolveStyle: (name) => {
    //       return `ant-design-vue/es/${name}/style/index`;
    //     },
    //   },
    // ],
  });

  return styleImportPlugin;
}
