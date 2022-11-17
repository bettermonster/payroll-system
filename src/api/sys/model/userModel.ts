export interface RoleInfo {
  roleName: string;
  value: string;
}

export interface LoginApiParams {
  password: string;
  username: string;
  imageCode: number;
  clientId: number;
  grant_type: string;
  passwordType: string;
  sysId: string;
  mode: string;
}

export interface LoginResultModel {
  access_token?: string;
  refresh_token?: string;
  expires_in?: string;
}

export interface GetVerifyCodeImageParams {
  clientId: string | number;
  imageCode?: number;
}
