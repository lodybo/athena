import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import postcssJitProps from 'postcss-jit-props';
import OpenProps from 'open-props';


export const config: Config = {
  namespace: 'core',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-json',
      file: 'dist/docs.json'
    }
  ],
  plugins: [
    postcss({
      plugins: [
        postcssJitProps(OpenProps),
        autoprefixer(),
      ]
    })
  ],
  globalStyle: 'src/styles.css',
  devServer: {
    openBrowser: false,
  }
};
