type AnyFunction = (...params: any) => any;

interface ITaskFactory<T extends AnyFunction> {
  (...params: Parameters<T>): () => ReturnType<T>;
}

interface ITaskFactoryCreator {
  <T extends AnyFunction>(fn: T): ITaskFactory<T>;
}

const createTaskFactory: ITaskFactoryCreator = task => (...p) => () =>
  task(...p);
