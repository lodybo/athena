import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';

import pkg from './package.json';

const targets = {
  main: pkg.main,
  module: pkg.module,
  browser: pkg.browser,
};

const globals = {
  react: 'React',
};

export default [
  {
    input: 'src/index.ts',
    plugins: [
      del({
        targets: [pkg.distributionDirectory]
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.declarations.json'
      }),
      postcss({
        extract: 'styles.css',
        modules: true,
        minimize: true,
        config: {
          path: 'postcss.config.js',
        },
      })
    ],
    external: Object.keys(pkg.dependencies),
    output: [
      { file: targets.main, format: 'cjs', globals },
      { file: targets.module, format: 'es', globals },
      { file: targets.browser, format: 'umd', globals, name: 'Athena' },
    ]
  }
];
