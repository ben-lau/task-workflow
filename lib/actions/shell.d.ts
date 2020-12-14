/// <reference types="node" />
export declare namespace Shell {
    /**
     * 执行指令
     * @param cmd 字符串指令
     */
    const run: ({ cmd }: {
        cmd: string;
    }) => import("child_process").PromiseWithChild<{
        stdout: string;
        stderr: string;
    }>;
}
