import * as Actions from './../actions';
declare type AnyFunction = (...params: any) => any;
interface IFunctionalTaskFactory<T extends AnyFunction> {
    (...params: Parameters<T>): IFunctionalTask<T>;
    (params: (p?: any) => Parameters<T>): IFunctionalTask<T>;
}
interface IFunctionalTask<T extends AnyFunction> {
    (lastParams?: any): ReturnType<T>;
}
declare type TaskFactoriesMap<T extends Record<string, AnyFunction>> = {
    [P in keyof T]: IFunctionalTaskFactory<T[P]>;
};
export declare const Tasks: TaskFactoriesMap<typeof Actions>;
export {};
