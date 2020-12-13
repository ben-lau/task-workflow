import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: path.resolve(__dirname, './src/index.ts'),
  output: {
    file: path.resolve(__dirname, './lib/index.js'),
    // dir: './lib',
    format: 'cjs',
  },
  plugins: [
    typescript({
      tsconfig: path.resolve(__dirname, './tsconfig.json'),
    }),
    uglify(),
  ],
};
