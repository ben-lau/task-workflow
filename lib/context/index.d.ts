import { contextData } from './initialData';
declare type AnyObject = Record<string, any>;
export declare class Context {
    private _data;
    readonly env: {
        isCi: boolean;
    };
    static create: (initialData: AnyObject) => Context;
    private constructor();
    setData(data: AnyObject): void;
    getData(keyName: keyof typeof contextData): any;
}
export {};
