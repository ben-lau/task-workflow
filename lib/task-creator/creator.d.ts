declare type AnyFunction = (...params: any) => any;
interface ITaskFactory<T extends AnyFunction> {
    (...params: Parameters<T>): () => ReturnType<T>;
}
interface ITaskFactoryCreator {
    <T extends AnyFunction>(fn: T): ITaskFactory<T>;
}
declare const createTaskFactory: ITaskFactoryCreator;
