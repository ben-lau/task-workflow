export declare const copyTo: ({ from, to }: {
    from: string;
    to: string;
}) => Promise<import("../utils/execute/promisify-spawn").PromisifySpawnLib.Result>;
export declare const entryDirectory: ({ dir }: {
    dir: string;
}) => Promise<import("../utils/execute/promisify-spawn").PromisifySpawnLib.Result>;
export declare const generateDir: ({ dir }: {
    dir: string;
}) => Promise<import("../utils/execute/promisify-spawn").PromisifySpawnLib.Result>;
