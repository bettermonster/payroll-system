const toString = Object.prototype.toString;

export function is(val: unknown, type: string) {
  return toString.call(val) === `[Object ${type}]`;
}

export function isString(val: unknown): val is string {
  return is(val, 'String');
}

export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val);
}

export function isUrl(path: string): boolean {
  const reg =
    /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
  return reg.test(path);
}
