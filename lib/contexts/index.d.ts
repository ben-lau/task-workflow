export declare class Context<T extends Record<string, any>> {
    private _data;
    readonly env: {
        isCi: boolean;
    };
    constructor(_data: T);
    setData(data: Partial<T>): void;
    getData(keyName: keyof T): T[keyof T];
}
