// storage的方法

export interface CreateStorageParams {
  hasEncrypt: boolean;
  storage: Storage;
  prefixKey: string;
  timeOut?: number | null;
}

// 如果要加密的话，还要传入 key和iv 所以 类型CreateStorageParams要继承 EncryptionParams
export const createStorage = ({
  hasEncrypt = true,
  prefixKey = '',
  storage = sessionStorage,
}: // timeOut = null,
Partial<CreateStorageParams> = {}) => {
  class webStorage {
    private storage: Storage;
    private prefixKey: string;
    private hasEncrypt: boolean;

    constructor() {
      this.storage = storage;
      this.prefixKey = prefixKey;
      this.hasEncrypt = hasEncrypt;
    }

    private getKey(key: string): string {
      return `${this.prefixKey}${key}`.toUpperCase();
    }

    //设置 storage
    set(key: string, value: any) {
      const stringValue = JSON.stringify({
        value,
        time: Date.now(),
      });
      this.storage.setItem(this.getKey(key), stringValue);
    }
    // 获取
    get(key: string, def: any = null): any {
      const val = this.storage.getItem(this.getKey(key));
      if (!val) return def;
      const data = JSON.parse(val as string);
      const { value } = data;
      console.log(value);
      return value;
    }
    // 删除
    remove(key: string) {
      this.storage.removeItem(this.getKey(key));
    }
    // 全部清理
    clear(): void {
      this.storage.clear();
    }
  }
  return new webStorage();
};
