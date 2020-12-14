export declare namespace File {
    /**
     * 复制文件
     * @param from 起始目录
     * @param to 终点目录
     */
    const copyTo: ({ from, to }: {
        from: string;
        to: string;
    }) => Promise<import("../utils/execute/promisify-spawn").PromisifySpawnLib.Result>;
    /**
     * 进入文件夹
     * @param dir 文件夹路径
     */
    const entryDirectory: ({ dir }: {
        dir: string;
    }) => Promise<import("../utils/execute/promisify-spawn").PromisifySpawnLib.Result>;
    /**
     * 确认文件夹存在（不存在则创建）
     * @param dir 文件夹路径
     */
    const generateDir: ({ dir }: {
        dir: string;
    }) => Promise<import("../utils/execute/promisify-spawn").PromisifySpawnLib.Result>;
}
