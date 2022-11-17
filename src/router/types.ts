import { Component } from 'vue';
import { RouteMeta, RouteRecordRaw } from 'vue-router';

export interface Menu {
  name: string;

  icon?: string;

  path: string;

  // path contains param, auto assignment.
  paramPath?: string;

  disabled?: boolean;

  children?: Menu[];

  orderNo?: number;

  roles?: any;

  meta?: any;

  tag?: any;

  hideMenu?: boolean;
}

export interface UpMenu {
  details: Nullable<string>;
  funcId: string;
  funcUrl: Nullable<string>;
  funcUrlCss: Nullable<string>;
  funcUrlJs: Nullable<string>;
  i18nKey: Nullable<string>;
  menuIcon: string;
  menuId: string;
  menuName: string;
  menuOrder: number;
  sysId: string;
  upMenuId: string;
  children?: any;
}

//@ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string;
  meta: RouteMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[];
  props?: Recordable;
  fullPath?: string;
}

export type AppRouteModule = AppRouteRecordRaw;
