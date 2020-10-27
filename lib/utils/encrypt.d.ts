import NodeRSA from 'node-rsa';
export declare const encrypt: (data: string, encode?: NodeRSA.Encoding) => string;
export declare const decrypt: (data: string, encode?: NodeRSA.Encoding) => string;
