/// <reference types="node" />
import { Transform, TransformCallback } from 'stream';
export declare class TranformStream extends Transform {
    private _encode;
    private _cache;
    get data(): string;
    constructor(_encode?: BufferEncoding);
    _transform(chunk: any, encode: BufferEncoding, next: TransformCallback): void;
}
