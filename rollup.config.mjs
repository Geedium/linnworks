import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from "@rollup/plugin-terser";
import json from "@rollup/plugin-json";

import bundleSize from 'rollup-plugin-bundle-size';
import dts from "rollup-plugin-dts";

export default [{
  input: './types/dist/index.d.ts',
  output: {
    file: 'dist/index.d.ts',
    format: 'es',
  },
  plugins: [
    dts(),
    bundleSize(),
  ],
}, {
  input: './src/index.ts',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.esm.js',
      format: 'es',
    }
  ],
  plugins: [
    resolve(),
    commonjs({
      esmExternals: true
    }),
    json(),
    typescript(),
    terser({
      keep_fnames: true,
    }),
    bundleSize(),
  ],
}];
