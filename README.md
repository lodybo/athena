# Athena

Athena is my own design system based on React and Tailwind. It's currently in very active development and not quite ready for any use.

## Installation
Installing Athena is pretty straightforward
```shell
npm install @lodybo/athena
```

Then, load in Athena as part of your Tailwind preset:
```javascript
module.exports = {
  presets: [
    require('@lodybo/athena/tailwind.config.js'),
  ],
  // The rest of your config..
};
```

### Disable JIT mode
**IMPORTANT**: Some frameworks, like Gatsby, appear to have issues with JIT mode support in a preset.
If that's the case, you can it off by setting `mode` in your config to an empty string.

```javascript
module.exports = {
  presets: [
    require('@lodybo/athena/tailwind.config.js'),
  ],
  mode: '',
  // The rest of your config..
};
```

## Making use of the default theme
By default, Athena is configured to work out of the box with my personal theme. You do need some external dependencies though:
* Bungee font (normal and shade version)
* Roboto font (mono and slab version)
* FontAwesome and its React implementation

You can install them in one command
```shell
npm install @fontsource/bungee @fontsource/bungee-shade @fontsource/roboto-mono @fontsource/roboto-slab @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
```

Afterwards, import the fonts and icons into your project. This can be done in different ways, depending on how your project is structured.