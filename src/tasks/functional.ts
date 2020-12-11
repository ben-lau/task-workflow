import * as Actions from './../actions';

type AnyFunction = (...params: any) => any;

interface IFunctionalTaskFactoryCreator {
  <T extends AnyFunction>(fn: T): IFunctionalTaskFactory<T>;
}

interface IFunctionalTaskFactory<T extends AnyFunction> {
  (...params: Parameters<T>): IFunctionalTask<T>;
  (params: (p?: any) => Parameters<T>): IFunctionalTask<T>;
}

interface IFunctionalTask<T extends AnyFunction> {
  (lastParams?: any): ReturnType<T>;
}

/**
 * 将任务方法包装成统一的延迟执行函数，支持传入原任务参数或者函数获取任务参数
 * @param task 任务方法
 */
const createTaskFactory: IFunctionalTaskFactoryCreator = task => (
  ...params: any
) => (p: any) =>
  task(...(typeof params[0] === 'function' ? params[0](p) : params));

type ActionsType = typeof Actions;

type TaskFactoriesMap<T extends Record<string, AnyFunction>> = {
  [P in keyof T]: IFunctionalTaskFactory<T[P]>;
};

export const Tasks = Object.keys(Actions).reduce(
  (previous, key) => ({
    ...previous,
    [key]: createTaskFactory(Actions[key as keyof ActionsType]),
  }),
  {} as TaskFactoriesMap<ActionsType>
);
