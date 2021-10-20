export declare namespace Commit {
    export const enum Types {
        feat = "feat",
        fix = "fix",
        build = "build",
        style = "style",
        refactor = "refactor",
        test = "test",
        chore = "chore",
        conflict = "conflict",
        merge = "merge",
        doc = "doc"
    }
    interface ITypesMap {
        [p: string]: {
            name: string;
            value: string;
        };
    }
    export const typesMap: ITypesMap;
    export const DEFAULT_MAX_CHANGES = 100;
    export {};
}
