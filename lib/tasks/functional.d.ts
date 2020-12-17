import * as ActionsModules from './../actions';
declare type AnyFunction = (...params: any) => any;
interface IFunctionalTaskFactory<T extends AnyFunction> {
    (...params: Parameters<T>): IFunctionalTask<T>;
    (params: (p?: any) => Parameters<T>): IFunctionalTask<T>;
}
interface IFunctionalTask<T extends AnyFunction> {
    (lastParams?: any): Promise<ReturnType<T>> | ReturnType<T>;
}
declare type TaskFactoriesModules<T extends Record<string, Record<string, AnyFunction>>> = {
    [P in keyof T]: TaskFactoriesMap<T[P]>;
};
declare type TaskFactoriesMap<T extends Record<string, AnyFunction>> = {
    [P in keyof T]: IFunctionalTaskFactory<T[P]>;
};
export declare const Tasks: TaskFactoriesModules<typeof ActionsModules>;
export {};
