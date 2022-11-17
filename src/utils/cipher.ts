// JSEncrypt
import JSEncrypt from 'jsencrypt';

interface JSEncryptParams {
  key: string;
}

export class RasEncryption {
  private key;

  constructor(opt: Partial<JSEncryptParams> = {}) {
    this.key = opt.key || '';
  }

  // 加密
  encrypt(ciperText: string) {
    const encryptor = new JSEncrypt();
    encryptor.setPublicKey(this.key);
    return encryptor.encrypt(ciperText);
  }

  // 解密
  decrypt(ciperText: string) {
    const encryptor = new JSEncrypt();
    console.log(encryptor.encrypt(ciperText));
    return encryptor.decrypt(ciperText);
  }
}
