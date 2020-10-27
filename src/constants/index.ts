import path from 'path';

export namespace Environment {
  /**
   * 调试模式
   */
  export const DEBUG_MODE = false;

  /**
   * 根目录
   */
  export const DIR_HOME = process.env.HOME!;

  /**
   * 存储目录
   */
  export const DIR_STORAGE = path.resolve(DIR_HOME, '.ik-gz');

  /**
   * 用户账号
   */
  export const FILE_USER_ACCOUNT = path.resolve(DIR_STORAGE, 'user_account');
}

export namespace Key {
  export const publicKey =
    'MFswDQYJKoZIhvcNAQEBBQADSgAwRwJAddqe+u8H6xslXHwcRKaf4AU+hTsSSFi99E0wba+YcXmpr4b/uMSUTRKWYDsj2nTB2LUMdV/Kq1XInvh2i03oswIDAQAB';

  export const privateKey =
    'MIIBOQIBAAJAddqe+u8H6xslXHwcRKaf4AU+hTsSSFi99E0wba+YcXmpr4b/uMSUTRKWYDsj2nTB2LUMdV/Kq1XInvh2i03oswIDAQABAkBN+piEilIf8rc2yXvexK02CeJDP0GqkuUk10n62VuxgJu0Cpkwk8cPwOfq1D9/COjEC43CZ1vHrkIvHLG6YF4pAiEArq7X5V/fhmpSp3DrLcgWK8cNBksHgtbIRgp7CltuPgcCIQCst2f2aqWvxEBtoPPElGysaiBmkoCT7BWhoAnG5WwU9QIgMEzGA3VL7/WsHwI49PKzNq2WK1xJmmLbA4rYVJfNVrcCIG1Tuw8T+sUDqPS8CRHKEfAhTVkgKxt3OUoRj57C4mNxAiEAkKY41iA6efs8LGUG7/OO+YfpBGRQXCf1T1F7BbMmSy4=';
}
