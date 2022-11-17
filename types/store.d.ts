import { RoleList } from '/@/store/modules/user';

export interface UserInfo {
  userId: string | number;
  username: string;
  userCode: string;
  userAvatar: string;
  details?: string;
  roles: RoleList[];
  org: null; // 机构Object
}
