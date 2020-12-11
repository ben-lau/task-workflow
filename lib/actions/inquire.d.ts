/**
 * 询问提交信息文本
 */
export declare const inquireCommitDetails: () => Promise<string>;
/**
 * 询问是否继续
 * @param message 提示信息
 */
export declare const inquireContinue: ({ message }: {
    message?: string | undefined;
}) => Promise<boolean>;
