import { PromisifySpawnLib } from './promisify-spawn';
interface GitMethods {
    (...args: Array<string>): Promise<PromisifySpawnLib.Result>;
}
/**
 * git方法，报错即退出
 */
export declare const git: GitMethods;
/**
 * git方法，错误仅仅打印提示
 */
export declare const gitWithoutBreak: GitMethods;
/**
 * git方法，错误也无提示
 */
export declare const gitInSilent: GitMethods;
export {};
