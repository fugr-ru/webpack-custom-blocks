webpack-custom-blocks · [![npm](https://img.shields.io/npm/v/@futuregroup/webpack-custom-blocks.svg)](https://www.npmjs.com/package/@futuregroup/webpack-custom-blocks)
=====================

A set of well-thought 📦[webpack-blocks](https://github.com/andywer/webpack-blocks) for real-world projects.

## Table of Content
- [API](#api)
  - [`setEnv([options])`](#setenvoptions)
  - [`watch([options])`](#watchoptions)
  - [`reactHotServer([options])`](#reacthotserveroptions)
  - [`babelLoader([options])`](#babelloaderoptions)
  - [`cssLoader([options])`](#cssloaderoptions)
  - [`stylusLoader([options])`](#stylusloaderoptions)
  - [`pugLoader([options])`](#pugloaderoptions)
  - [`imageLoader([options])`](#imageloaderoptions)
  - [`fontLoader([options])`](#fontloaderoptions)

## API

### `setEnv([options])`
Sets environmental variables to `process.env` and [EnvironmentPlugin](https://webpack.js.org/plugins/environment-plugin/).

__Arguments__
- `[options]` _(Object)_: Any enumerable properties.

__Example__
```js
setEnv({
    NODE_ENV: 'development',
    HOT: true,
    // Any other variables.
})
```

---

### `watch([options])`
Watch mode. 

__Arguments__
- `[options]` _(Object)_: See [watchOptions](https://webpack.js.org/configuration/watch/#watchoptions) for available properties.

---

### `reactHotServer([options])`
Built on top of [`webpack-dev-server`](https://webpack.js.org/configuration/dev-server/) and [`react-hot-loader@3`](https://github.com/gaearon/react-hot-loader).

__Arguments__
- `[options]` _(Object)_: Available properties:
  - `[host]` _(String)_: Defaults to `localhost`.
  - `[port]` _(Number|String)_: Defaults to `8080`.
  - `[publicPath]` _(String|Number)_: Defaults to `'/'`. The final `output.publicPath` will be `http://${host}:${port}${path}`.
  - `[names]` _(Array)_: Defaults to `[]`. If entry is an object, only chunks with these names will be extended with `react-hot-loader`.
  - `[...rest]` _(*)_: Any valid [`devServer`](https://webpack.js.org/configuration/dev-server/) properties.

__Example__
```js
const {createConfig, entryPoint, setOutput, customConfig} = require('@webpack-blocks/webpack2');
const {setEnv, reactHotServer, babelLoader} = require('@futuregroup/webpack-custom-blocks');

module.exports = createConfig([
    setEnv({
        NODE_ENV: 'development',
    }),

    entryPoint({
        all: './src/index.js',
    }),

    setOutput({
        filename: 'js/[name].js',
    }),
    
    reactHotServer({
        port: 3000,
        publicPath: '/build/',
        names: ['all'],
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    }),

    customConfig({
        target: 'web',
        devtool: 'eval',
    }),

    babelLoader({
        exclude: /node_modules/,
        babelOptions: {
            presets: ['latest', 'react'],
              plugins: ['react-hot-loader/babel'],
        },
    }),
]);
```

---

### `babelLoader([options])`
Built on top of [babel-loader](https://github.com/babel/babel-loader).

__Arguments__
- `[options]` _(Object)_: Available properties:
  - `[test]` _(*)_
  - `[fileType]` _(*)_: Defaults to `application/javascript`. If `test` is also set, then it adds a new fileType, else uses it as an existing one.
  - `[babelOptions]` _(Object)_: `babel-loader` options.
  - `[...rest]` _(*)_: [Rule options](https://webpack.js.org/configuration/module/#rule).

---

### `cssLoader([options])`
Built on top of `style-loader` and `css-loader`.

__Arguments__
- `[options]` _(Object)_: Available properties:
  - `[test]` _(*)_
  - `[fileType]` _(*)_: Defaults to `text/css`. If `test` is also set, then it adds a new fileType, else uses it as an existing one.
  - `[loaders]` _(Array)_: Defaults to `[]`. Additional loaders that go after `css-loader`.
  - `[styleOptions]` _(Object)_: `style-loader` options.
  - `[cssOptions]` _(Object)_: `css-loader` options.
  - `[...rest]` _(*)_: [Rule options](https://webpack.js.org/configuration/module/#rule).

---

### `stylusLoader([options])`
Built on top of [stylus-loader](https://github.com/shama/stylus-loader) and `extract-loader`.

__Arguments__
- `[options]` _(Object)_: Available properties:
  - `[test]` _(*)_: Defaults to `/\.(styl|stylus)$/`.
  - `[fileType]` _(*)_: Defaults to `text/x-stylus`.
  - `[fileOptions]` _(Object)_
  - `[extractOptions]` _(Object)_
  - `[cssOptions]` _(Object)_
  - `[stylusOptions]` _(Object)_
  - `[...rest]` _(*)_: [Rule options](https://webpack.js.org/configuration/module/#rule).

---

### `pugLoader([options])`
Build on top of `pug-html-loader`.

__Arguments__
- `[options]` _(Object)_: Available properties:
  - `[test]` _(*)_: Defaults to `/\.(pug|jade)$/`.
  - `[fileType]` _(*)_: Defaults to `text/x-pug`.
  - `[fileOptions]` _(Object)_
  - `[pugOptions]` _(Object)_
  - `[...rest]` _(*)_: [Rule options](https://webpack.js.org/configuration/module/#rule).

---

### `imageLoader([options])`
Build on top of `image-webpack-loader`.

__Arguments__
- `[options]` _(Object)_: Available properties:
  - `[test]` _(*)_
  - `[fileType]` _(*)_: Defaults to `image`.
  - `[fileOptions]` _(Object)_
  - `[imageOptions]` _(Object)_
  - `[...rest]` _(*)_: [Rule options](https://webpack.js.org/configuration/module/#rule).

---

### `fontLoader([options])`

__Arguments__
- `[options]` _(Object)_: Available properties:
  - `[test]` _(*)_
  - `[fileType]` _(*)_: Defaults to `application/font`.
  - `[fileOptions]` _(Object)_
  - `[...rest]` _(*)_: [Rule options](https://webpack.js.org/configuration/module/#rule).

---
