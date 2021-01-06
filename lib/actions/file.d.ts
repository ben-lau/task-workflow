export declare namespace File {
    /**
     * 复制文件
     * @param {string | Array<string>} from 目标文件或者文件夹
     * @param to 终点目录
     */
    const copyTo: ({ from, to, }: {
        from: string | Array<string>;
        to: string;
    }) => Promise<import("../utils/execute/promisify-spawn").PromisifySpawnLib.Result>;
    /**
     * 进入文件夹
     * @param dir 文件夹路径
     */
    const entryDirectory: ({ dir }: {
        dir: string;
    }) => Promise<void>;
    /**
     * 确认文件夹存在（不存在则创建）
     * @param dir 文件夹路径
     */
    const generateDir: ({ dir }: {
        dir: string;
    }) => Promise<import("../utils/execute/promisify-spawn").PromisifySpawnLib.Result>;
    /**
     * 获取文件夹下所有文件名
     * @param dir 文件夹路径
     */
    const getList: ({ dir }?: {
        dir?: string | undefined;
    }) => Promise<string[]>;
}
