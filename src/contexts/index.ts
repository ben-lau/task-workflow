export class Context<T> {
  readonly env = {
    isCi: process.env.CI === 'true',
  };

  constructor(private _data: T) {}

  setData(data: Partial<T>) {
    this._data = {
      ...this._data,
      ...data,
    };
  }

  getData(keyName: keyof T) {
    return this._data[keyName];
  }
}
