import ora from 'ora';
declare class Tips {
    private loading;
    showLoading(message: string): ora.Ora;
    hideLoading(): ora.Ora;
    succeed(message: string): ora.Ora;
    log(message: string): void;
    info(message: string): void;
    warn(message: string): ora.Ora;
    error(message: string): Promise<never>;
}
export declare const tips: Tips;
export {};
