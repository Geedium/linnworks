import dts from 'rollup-plugin-dts';

export default {
  input: './types/dist/index.d.ts', // Entry point for declaration files
  output: {
    file: './dist/index.d.ts', // Output bundled .d.ts file
    format: 'es',
  },
  plugins: [dts()],
};
