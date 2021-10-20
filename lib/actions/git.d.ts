export declare namespace Git {
    /**
     * 初始化it
     */
    const init: () => Promise<import("../utils/execute/promisify-spawn").PromisifySpawnLib.Result>;
    /**
     * 配置git
     */
    const config: ({ name, email, }?: {
        name?: string | undefined;
        email?: string | undefined;
    }) => Promise<void>;
    /**
     * 提交操作
     */
    const commit: ({ message, maxChanges, }: {
        message: string;
        maxChanges?: number | undefined;
    }) => Promise<void>;
    const pull: () => Promise<undefined>;
    /**
     * 推送操作
     */
    const push: () => Promise<void>;
    /**
     * 强推至远程分支【危险操作】
     */
    const pushForceDangerously: ({ url, branch, }: {
        url: string;
        branch: string;
    }) => Promise<undefined>;
    /**
     * 切换分支
     */
    const checkout: ({ branch }: {
        branch: string;
    }) => Promise<undefined>;
    /**
     * 合并操作
     */
    const merge: ({ branch, message, fastForward, }: {
        branch: string;
        message?: string | undefined;
        fastForward?: boolean | undefined;
    }) => Promise<undefined>;
    /**
     * 克隆仓库
     */
    const clone: ({ url, branch, path, }: {
        url: string;
        branch?: string | undefined;
        path?: string | undefined;
    }) => Promise<void>;
    /**
     * 获取当前分支名
     */
    const getCurrentBranchName: () => Promise<string>;
    /**
     * 获取本地分支是否存在
     */
    const getIsExistLocalBranch: ({ branch, }: {
        branch: string;
    }) => Promise<boolean>;
    /**
     * 获取分支上游分支名
     */
    const getUpstreamBranchName: ({ branch, }: {
        branch: string;
    }) => Promise<string>;
    /**
     * 获取是否存在还在工作区的更改
     */
    const getToBeCommit: () => Promise<boolean>;
    /**
     * 获取还在工作区更改数
     */
    const getCountOfToBeCommit: () => Promise<number>;
    /**
     * 获取未推送远程的commit
     */
    const getToBePushed: () => Promise<boolean>;
    /**
     * 等待冲突处理
     * 当无冲突则返回true；
     * 有冲突会询问是否解决完毕，如果不继续则返回false，如果继续则递归。
     */
    const waitForDealWithConflict: () => Promise<boolean>;
    /**
     * 获取远程url
     */
    const getRemoteUrl: () => Promise<string>;
    /**
     * 获取分支上一次提交记录
     */
    const getLastCommitMessage: ({ branch, }: {
        branch: string;
    }) => Promise<string>;
    /**
     * 获取分支上一次提交记录主体
     */
    const getLastCommitBody: ({ branch }: {
        branch: string;
    }) => Promise<string>;
    /**
     * 获取分支上一次提交记录哈希
     */
    const getLastCommitHash: ({ branch }: {
        branch: string;
    }) => Promise<string>;
    /**
     * 获取git配置
     */
    const getConfig: ({ key }: {
        key: string;
    }) => Promise<string>;
    /**
     * 检查是否有冲突
     */
    const getIsHasConflict: ({ message }: {
        message: string;
    }) => Promise<boolean>;
}
