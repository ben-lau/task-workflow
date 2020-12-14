import { PromisifySpawnLib } from './promisify-spawn';
interface ExecuteOptions extends PromisifySpawnLib.Options {
    /**
     * 错误等级
     */
    level?: EnumExecuteLevel;
}
/**
 * 错误等级枚举
 */
export declare enum EnumExecuteLevel {
    /**
     * 不报错
     */
    None = 0,
    /**
     * 仅显示报错信息
     */
    Warn = 1,
    /**
     * 报错并退出当前进程
     */
    Fatal = 2
}
/**
 * 执行命令，并且按照错误等级在错误时作出不同反应
 * @param command 命令
 * @param argumentList 参数列表
 * @param options  配置
 */
export declare const execute: (command: string, argumentList: Array<string>, options?: ExecuteOptions) => Promise<PromisifySpawnLib.Result>;
export {};
