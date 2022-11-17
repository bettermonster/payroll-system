import { LoginApiParams, LoginResultModel, GetVerifyCodeImageParams } from './model/userModel';
import { defHttp } from '/@/utils/http/axios';
import backend from '../service';
import { ContentTypeEnum } from '/@/enums/httpEnum';

enum Api {
  Login = '/oauth/token',
  getVerifyCodeImage = '/api/codeImage/verifyCodeImage',
  GetUserInfo = '/api/session/info',
  getLogicsyskv = '/api/adminsmlogicsys/logicsyskv',
  getMenuandcontrFn = '/api/account/menuandcontr',
}

export function loginApi(params: LoginApiParams, mode: any) {
  console.log(mode);
  return defHttp.post<LoginResultModel>({
    url: backend.uaaService + Api.Login,
    withToken: false,
    data: params,
    headers: {
      'Content-Type': ContentTypeEnum.FORM_URLENCODED,
      Authorization: 'Basic d2ViX2FwcDo=',
    },
  });
}

/**
 * 校验验证码
 * @returns
 */
export function getVerifyCodeImages(params: GetVerifyCodeImageParams) {
  return defHttp.post<any>({
    url: backend.uaaService + Api.getVerifyCodeImage,
    data: params,
    withToken: false,
  });
}

/**
 * 逻辑系统获取？
 * @returns
 */
export function getLogicsyskv() {
  return defHttp.get({
    url: backend.appOcaService + Api.getLogicsyskv,
    withToken: false,
  });
}

export function getUserInfo() {
  return defHttp.get({
    url: backend.appOcaService + Api.GetUserInfo,
    method: 'get',
  });
}

export function getMenuandcontrFn(params?: any) {
  return defHttp.get({
    url: backend.appOcaService + Api.getMenuandcontrFn,
    params,
  });
}
