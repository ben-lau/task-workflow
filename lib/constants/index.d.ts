export declare namespace Environment {
    /**
     * 调试模式
     */
    const DEBUG_MODE = false;
    /**
     * 根目录
     */
    const DIR_HOME: string;
    /**
     * 存储目录
     */
    const DIR_STORAGE: string;
    /**
     * 用户账号
     */
    const FILE_USER_ACCOUNT: string;
}
export declare namespace Commit {
    export enum EnumTypes {
        feat = "feat",
        fix = "fix",
        build = "build",
        style = "style",
        refactor = "refactor",
        test = "test",
        chore = "chore",
        conflict = "conflict",
        merge = "merge"
    }
    interface TypesMap {
        [p: string]: {
            name: string;
            value: string;
        };
    }
    export const typesMap: TypesMap;
    export {};
}
