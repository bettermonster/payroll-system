import { App } from 'vue';
import { createPinia } from 'pinia';

const store = createPinia();
export function setupStore(app: App) {
  app.use(createPinia());
}

export { store };
