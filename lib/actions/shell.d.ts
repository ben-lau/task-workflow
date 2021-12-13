import { EnumExecuteLevel } from '../utils/execute';
export declare namespace Shell {
    /**
     * 执行指令，但无法获取结果，只能返回成功失败
     */
    const run: ({ cmd, level, }: {
        cmd: string;
        level?: EnumExecuteLevel | undefined;
    }) => Promise<import("../utils/execute/promisify-spawn").PromisifySpawnLib.Result>;
    /**
     * 执行指令，可以获取结果，但是会丢失颜色等信息
     */
    const exec: ({ cmd, level, }: {
        cmd: string;
        level?: EnumExecuteLevel | undefined;
    }) => Promise<import("../utils/execute/promisify-spawn").PromisifySpawnLib.Result>;
}
