import { contextData } from './initialData';

let instance: Context;

export class Context {
  readonly env = {
    isCi: process.env.CI === 'true',
  };

  static create = () => instance ?? (instance = new Context());

  private constructor() {}

  private _data = contextData;

  setData(data: Record<string, any>) {
    this._data = {
      ...this._data,
      ...data,
    };
  }

  getData(keyName: keyof typeof contextData) {
    return this._data[keyName];
  }
}

export const context = Context.create();
