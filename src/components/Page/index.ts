import { withInstall } from '/@/utils';

import pageWrapper from './src/PageWrapper.vue';

// 这个组件主要是针对页面包装 所有有几个用这种方式，统一暴露出来
export const PageWrapper = withInstall(pageWrapper);
