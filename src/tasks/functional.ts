import * as ActionsModules from './../actions';

type AnyFunction = (...params: any) => any;

interface IFunctionalTaskFactoryCreator {
  <T extends AnyFunction>(fn: T): IFunctionalTaskFactory<T>;
}

interface IFunctionalTaskFactory<T extends AnyFunction> {
  (...params: Parameters<T>): IFunctionalTask<T>;
  (params: (p?: any) => Parameters<T>): IFunctionalTask<T>;
}

interface IFunctionalTask<T extends AnyFunction> {
  (lastParams?: any): Promise<ReturnType<T>> | ReturnType<T>;
}

type ActionsModulesType = typeof ActionsModules;

type ActionsType = ActionsModulesType[keyof ActionsModulesType];

type TaskFactoriesModules<
  T extends Record<string, Record<string, AnyFunction>>
> = {
  [P in keyof T]: TaskFactoriesMap<T[P]>;
};

type TaskFactoriesMap<T extends Record<string, AnyFunction>> = {
  [P in keyof T]: IFunctionalTaskFactory<T[P]>;
};

/**
 * 将任务方法包装成统一的延迟执行函数，支持传入原任务参数或者函数获取任务参数
 * @param task 任务方法
 */
const createTaskFactory: IFunctionalTaskFactoryCreator = task => (
  ...params: any
) => async (p: any) =>
  task(...(typeof params[0] === 'function' ? await params[0](p) : params));

export const Tasks = Object.keys(ActionsModules).reduce(
  (previousMap, modulesKey) => {
    const module = ActionsModules[modulesKey as keyof ActionsModulesType];
    return {
      ...previousMap,
      [modulesKey]: Object.keys(module).reduce(
        (previous, key) => ({
          ...previous,
          [key]: createTaskFactory(module[key as keyof ActionsType]),
        }),
        {} as TaskFactoriesMap<ActionsType>
      ),
    };
  },
  {} as TaskFactoriesModules<ActionsModulesType>
);
