import type { Ref } from 'vue';
import { InjectionKey, reactive, readonly as defineReadonly, provide, inject } from 'vue';
interface AppProviderContextProps {
  prefixCls: Ref<string>;
}
const key: InjectionKey<AppProviderContextProps> = Symbol();

export function creatAppProviderContext(context: AppProviderContextProps) {
  return createContext<AppProviderContextProps>(context, key);
}

export function useAppProviderContext() {
  return useContext<AppProviderContextProps>(key);
}

function createContext<T>(context: any, key: InjectionKey<T> = Symbol()) {
  const state = reactive(context);
  const provideData = defineReadonly(state);
  provide(key, provideData);
  return {
    state,
  };
}

// function useContext<T>(key: InjectionKey<T>, native?: boolean): T;

function useContext<T>(key: InjectionKey<T> = Symbol()) {
  return inject(key);
}
