// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';

import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    plugins: [
      del({
        targets: [pkg.distributionDirectory]
      }),
      // resolve(),
      // commonjs(),
      typescript(),
      postcss({
        extract: true,
        modules: true,
      })
    ],
    output: [
      { file: pkg.main, dir: pkg.distributionDirectory, format: 'cjs' },
      { file: pkg.module, dir: pkg.distributionDirectory, format: 'es' },
      { file: pkg.browser, dir: pkg.distributionDirectory, format: 'umd' },
    ]
  }
];
