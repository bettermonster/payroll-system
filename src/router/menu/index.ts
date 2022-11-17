import { Menu } from '../types';
import { usePermissionStore } from '/@/store/modules/permisssion';

async function getAsyncMenus() {
  const permissionStore = usePermissionStore();
  return permissionStore.getBackMenuList;
}

export const getMenus = async (): Promise<Menu[]> => {
  const menus = await getAsyncMenus();
  console.log('777777777777');
  console.log(menus);
  //  这里做权限管控
  return menus;
};
