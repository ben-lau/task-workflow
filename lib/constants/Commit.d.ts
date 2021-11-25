export declare namespace Commit {
    export const enum Types {
        feat = "feat",
        fix = "fix",
        build = "build",
        style = "style",
        refactor = "refactor",
        test = "test",
        chore = "chore",
        doc = "doc",
        conflict = "conflict",
        merge = "merge"
    }
    type ITypesMap = Record<Types, {
        name: string;
        value: Types;
    }>;
    export const typesMap: ITypesMap;
    export const DEFAULT_MAX_CHANGES = 100;
    export {};
}
