import axios, { AxiosResponse } from 'axios';
import type { AxiosRequestConfig } from 'axios';
import type { Result } from '/#/axios';
import { ContentTypeEnum, RequestEnum } from '/@/enums/httpEnum';
import { X_AUTHORIZATION } from '/@/enums/cacheEnum';
import qs from 'qs';
import { getToken } from '/@/utils/auth';
import { Token } from '/@/store/modules/user';

export class VAxios {
  private axiosInstance;
  private readonly options;

  constructor(options: any) {
    this.options = options;
    this.options['baseURL'] = '/basic-api';
    this.options['withToken'] = true;
    this.options['headers'] = { [X_AUTHORIZATION]: 'fakeToken1' };
    this.axiosInstance = axios.create(options);
    // 路由拦截器设置
    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
      console.log(config);
      const token = getToken() as Token;
      if (token && (config as Recordable)?.withToken !== false) {
        // jwt token
        (config as Recordable).headers[X_AUTHORIZATION] = 'Bearer ' + token.access_token;
      }
      return config;
    }, undefined);
  }

  // support form-data
  supportFormData(config: AxiosRequestConfig) {
    const headers = config.headers || this.options.headers;
    const contentType = headers?.['Content-Type'] || headers?.['content-type'];
    if (
      contentType !== ContentTypeEnum.FORM_URLENCODED ||
      !Reflect.has(config, 'data') ||
      config.method?.toUpperCase() === RequestEnum.GET
    ) {
      return config;
    }

    return {
      ...config,
      data: qs.stringify(config.data, { arrayFormat: 'brackets' }),
    };
    return config;
  }

  get<T = any>(config: any): Promise<T> {
    return this.request({ ...config, method: 'GET' });
  }

  post<T = any>(config: any): Promise<T> {
    return this.request({ ...config, method: 'POST' });
  }

  request<T = any>(config: any): Promise<T> {
    const conf = this.supportFormData(config);
    // console.log(conf);
    return new Promise((resolve, rejects) => {
      this.axiosInstance.request(conf).then((res: AxiosResponse<Result>) => {
        const ret: any = res;
        console.log(ret);
        try {
          if (ret.data['type'] === 'success') {
            resolve(ret.data.result);
          } else {
            resolve(ret.data);
          }
        } catch (err) {
          rejects(err || new Error('request error'));
        }
      });
    });
  }
}
