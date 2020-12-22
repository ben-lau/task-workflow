export declare namespace Shell {
    interface IResultRunCommand extends Promise<{
        stdout: string;
        stderr: string;
    }> {
    }
    /**
     * 执行指令
     * @param cmd 字符串指令
     */
    export const run: ({ cmd }: {
        cmd: string;
    }) => IResultRunCommand;
    export {};
}
