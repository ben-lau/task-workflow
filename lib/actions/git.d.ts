export declare namespace Git {
    /**
     * 提交操作
     */
    const commit: ({ message }: {
        message: string;
    }) => Promise<void>;
    const pull: () => Promise<void>;
    /**
     * 推送操作
     */
    const push: () => Promise<void>;
    /**
     * 切换分支
     */
    const checkout: ({ branch }: {
        branch: string;
    }) => Promise<undefined>;
    /**
     * 合并操作
     */
    const merge: ({ branch }: {
        branch: string;
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
     * 获取未推送远程的commit
     */
    const getToBePushed: () => Promise<string>;
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
    const getLastCommit: ({ branch }: {
        branch: string;
    }) => Promise<string>;
}
