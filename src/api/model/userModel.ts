export interface RoleInfo {
  roleName: string;
  value: string;
}

export interface LoginResultModel {
  userId: string | number;
  token: string;
  role: RoleInfo;
}
