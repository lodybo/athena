module.exports = {
  staticDirs: ['../dist'],
  'stories': [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@pxtrn/storybook-addon-docs-stencil',
  ],
  'framework': '@storybook/html',
};
