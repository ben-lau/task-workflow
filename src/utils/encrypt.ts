import NodeRSA from 'node-rsa';
import { Key } from '../constants';

export const encrypt = (data: string, encode: NodeRSA.Encoding = 'base64') =>
  new NodeRSA(Key.publicKey, 'public').encrypt(data, encode);

export const decrypt = (data: string, encode: NodeRSA.Encoding = 'utf8') =>
  new NodeRSA(Key.privateKey, 'private').decrypt(data, encode);
