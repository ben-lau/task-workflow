/// <reference types="node" />
/**
 * 执行指令
 * @param cmd 字符串指令
 */
export declare const runCmd: ({ cmd }: {
    cmd: string;
}) => import("child_process").PromiseWithChild<{
    stdout: string;
    stderr: string;
}>;
