export declare namespace Environment {
    const setDebugMode: (isOn: boolean) => boolean;
    const getDebugMode: () => boolean;
    /**
     * 根目录
     */
    const DIR_ROOT: string;
    /**
     * 存储目录
     */
    const DIR_STORAGE: string;
    /**
     * 日志目录
     */
    const FILE_LOG: string;
    /**
     * 错误退出码
     */
    const ERROR_CODE = 10;
}
