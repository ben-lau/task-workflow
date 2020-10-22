import { contextData } from './initialData';
export declare class Context {
    readonly env: {
        isCi: boolean;
    };
    static create: () => Context;
    private constructor();
    private _data;
    setData(data: Record<string, any>): void;
    getData(keyName: keyof typeof contextData): string;
}
export declare const context: Context;
