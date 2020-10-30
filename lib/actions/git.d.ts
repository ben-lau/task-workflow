/**
 * 提交操作
 * @param message 提交信息
 */
export declare const gitCommit: (message: string) => Promise<void>;
export declare const gitPull: () => Promise<void>;
/**
 * 推送操作
 */
export declare const gitPush: () => Promise<void>;
/**
 * 切换分支
 * @param targetBranch 目标分支
 */
export declare const gitCheckout: (targetBranch: string) => Promise<undefined>;
/**
 * 合并操作
 * @param targetBranch
 */
export declare const gitMerge: (targetBranch: string) => Promise<void>;
/**
 * 获取当前分支名
 */
export declare const getCurrentBranchName: () => Promise<string>;
/**
 * 获取分支上游分支名
 * @param branchName
 */
export declare const getUpstreamBranchName: (branchName: string) => Promise<string>;
/**
 * 获取未推送远程的commit
 */
export declare const getToBePushed: () => Promise<string>;
/**
 * 等待冲突处理
 * 当无冲突则返回true；
 * 有冲突会询问是否解决完毕，如果不继续则返回false，如果继续则递归。
 */
export declare const waitForDealWithConflict: () => Promise<boolean>;
