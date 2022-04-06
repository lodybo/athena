import { setStencilDocJson, extractArgTypesFactory } from '@pxtrn/storybook-addon-docs-stencil';
import docJson from '../dist/docs.json';
if(docJson) setStencilDocJson(docJson);

import '../dist/core/core.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    hideNoControlsWarning: true
  },
  docs: {
    extractArgTypes: extractArgTypesFactory({ dashCase: true }),
  }
}
