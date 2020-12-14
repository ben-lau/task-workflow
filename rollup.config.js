import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';

const getPath = _path => path.resolve(__dirname, _path);

export default {
  input: getPath('./src/index.ts'),
  output: {
    file: getPath(pkg.main),
    format: 'cjs',
  },
  plugins: [
    typescript({
      tsconfig: getPath('./tsconfig.json'),
    }),
    uglify(),
  ],
};
