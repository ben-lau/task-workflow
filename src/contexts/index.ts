import { contextData } from './initialData';

type AnyObject = Record<string, any>;

let instance: Context;

export class Context {
  readonly env = {
    isCi: process.env.CI === 'true',
  };

  static create = (initialData: AnyObject) =>
    instance ?? (instance = new Context(initialData));

  private constructor(private _data: AnyObject) {}

  setData(data: AnyObject) {
    this._data = {
      ...this._data,
      ...data,
    };
  }

  getData(keyName: keyof typeof contextData) {
    return this._data[keyName];
  }
}

// export const context = Context.create();
