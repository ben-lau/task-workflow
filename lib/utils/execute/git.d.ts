import { PromisifySpawnLib } from './promisify-spawn';
interface GitMethods {
    (...args: Array<string>): Promise<PromisifySpawnLib.Result>;
}
export declare const git: GitMethods;
export declare const gitWithoutBreak: GitMethods;
export declare const gitInSilent: GitMethods;
export {};
