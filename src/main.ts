import '/@/design/index.less';

import './design/tailwind.css';

import { createApp } from 'vue';
import { setupRouter, router } from '/@/router';
import { setupStore } from '/@/store';
import { setupRouterGuard } from '/@/router/guard';
import App from './App.vue';

function bootstrap() {
  const app = createApp(App);

  // router
  setupRouter(app);

  // store
  setupStore(app);

  // 路由守卫
  setupRouterGuard(router);

  app.mount('#app');
}

bootstrap();
