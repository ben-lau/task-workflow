import { Transform, TransformCallback } from 'stream';

export class TranformStream extends Transform {
  private _cache: Array<Buffer> = [];

  get data() {
    const cache = Buffer.concat(this._cache);
    this.destroy();
    return cache.toString(this._encode);
  }

  constructor(private _encode: BufferEncoding = 'utf8') {
    super();
  }

  _transform(chunk: any, encode: BufferEncoding, next: TransformCallback) {
    const data = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk, encode);
    this._cache.push(data);
    next(null, data);
  }
}
