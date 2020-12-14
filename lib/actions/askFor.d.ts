export declare namespace AskFor {
    /**
     * 询问提交信息文本
     */
    const commitMessage: () => Promise<string>;
    /**
     * 询问是否继续
     * @param message 提示信息
     */
    const shouldContinue: ({ message }: {
        message?: string | undefined;
    }) => Promise<boolean>;
}
