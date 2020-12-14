/**
 * 等待
 */
export declare const wait: (delay?: number) => Promise<void>;
/**
 * 计时器
 */
export declare const timer: {
    start(key: string): void;
    end(key: string): number;
};
