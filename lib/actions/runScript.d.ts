/// <reference types="node" />
export declare const runScript: (script: string) => import("child_process").PromiseWithChild<{
    stdout: string;
    stderr: string;
}>;
