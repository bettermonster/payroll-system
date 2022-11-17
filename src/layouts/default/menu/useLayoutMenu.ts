import type { Menu } from '/@/router/types';
import { watch, ref } from 'vue';
import { getMenus } from '/@/router/menu';
import { usePermissionStore } from '/@/store/modules/permisssion';

export function useSplitMenu() {
  // Menu array
  const menusRef = ref<Menu[]>([]);
  const permissionStore = usePermissionStore();

  // Menu changes
  watch(
    [() => permissionStore.getBackMenuList],
    () => {
      genMenus();
    },
    {
      immediate: true,
    },
  );

  // get menus
  async function genMenus() {
    // normal mode
    menusRef.value = await getMenus();
    return;
  }

  return { menusRef };
}
