webpack-custom-blocks · [![npm](https://img.shields.io/npm/v/@futuregroup/webpack-custom-blocks.svg)](https://www.npmjs.com/package/@futuregroup/webpack-custom-blocks)
=====================

A set of well-thought 📦[webpack-blocks](https://github.com/andywer/webpack-blocks) for real-world projects.

## API
- [`setEnv([options])`](#setenvoptions)
- [`watch([options])`](#watchoptions)
- [`reactHotServer([options])`](#reacthotserveroptions)
- [`babelLoader([options])`](#babelloaderoptions)
- [`cssLoader([options])`](#cssloaderoptions)
- [`stylusLoader([options])`](#stylusloaderoptions)
- [`pugLoader([options])`](#pugloaderoptions)
- [`imageLoader([options])`](#imageloaderoptions)
- [`fontLoader([options])`](#fontloaderoptions)

---

### `setEnv([options])`
Sets environmental variables to `process.env` and [EnvironmentPlugin](https://webpack.js.org/plugins/environment-plugin/).

__Arguments:__
- `[options]` _(Object)_: Any enumerable properties.

__Example:__
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

__Arguments:__
- `[options]` _(Object)_: See [watchOptions](https://webpack.js.org/configuration/watch/#watchoptions) for available properties.

---

### `reactHotServer([options])`
Built on top of [`webpack-dev-server`](https://webpack.js.org/configuration/dev-server/) and [`react-hot-loader@3`](https://github.com/gaearon/react-hot-loader).

__Arguments:__
- `[options]` _(Object)_: Available properties:
  - `[host]` _(String)_: Defaults to `localhost`.
  - `[port]` _(Number|String)_: Defaults to `8080`.
  - `[publicPath]` _(String|Number)_: Defaults to `'/'`. The final `output.publicPath` will be `http://${host}:${port}${path}`.
  - `...rest` _(*)_: Any valid [`devServer`](https://webpack.js.org/configuration/dev-server/) properties.

---

### `babelLoader([options])`
Built on top of [babel-loader](https://github.com/babel/babel-loader).

__Arguments:__
- `[options]` _(Object)_: Available properties:
  - `[test]` _(*)_
  - `[fileType]` _(*)_: Defaults to `application/javascript`. If `test` is also set, then it adds a new fileType, else uses it as an existing one.
  - `[exclude]` _(*)_
  - `[include]` _(*)_
  - `[babelOptions]` _(Object)_: `babel-loader` options.

---

### `cssLoader([options])`
Built on top of `style-loader` and `css-loader`.

__Arguments:__
- `[options]` _(Object)_: Available properties:
  - `[test]` _(*)_
  - `[fileType]` _(*)_: Defaults to `text/css`. If `test` is also set, then it adds a new fileType, else uses it as an existing one.
  - `[exclude]` _(*)_
  - `[include]` _(*)_
  - `[loaders]` _(Array)_: Defaults to `[]`. Additional loaders that go after `css-loader`.
  - `[styleOptions]` _(Object)_: `style-loader` options.
  - `[cssOptions]` _(Object)_: `css-loader` options.

---

### `stylusLoader([options])`
Built on top of [stylus-loader](https://github.com/shama/stylus-loader) and `extract-loader`.

__Arguments:__
- `[options]` _(Object)_: Available properties:
  - `[test]` _(*)_: Defaults to `/\.(styl|stylus)$/`.
  - `[fileType]` _(*)_: Defaults to `text/x-stylus`.
  - `[exclude]` _(*)_
  - `[include]` _(*)_
  - `[fileOptions]` _(Object)_
  - `[extractOptions]` _(Object)_
  - `[cssOptions]` _(Object)_
  - `[stylusOptions]` _(Object)_

---

### `pugLoader([options])`
Build on top of `pug-html-loader`.

__Arguments:__
- `[options]` _(Object)_: Available properties:
  - `[test]` _(*)_: Defaults to `/\.(pug|jade)$/`.
  - `[fileType]` _(*)_: Defaults to `text/x-pug`.
  - `[exclude]` _(*)_
  - `[include]` _(*)_
  - `[fileOptions]` _(Object)_
  - `[pugOptions]` _(Object)_

---

### `imageLoader([options])`
Build on top of `image-webpack-loader`.

__Arguments:__
- `[options]` _(Object)_: Available properties:
  - `[test]` _(*)_
  - `[fileType]` _(*)_: Defaults to `image`.
  - `[exclude]` _(*)_
  - `[include]` _(*)_
  - `[fileOptions]` _(Object)_
  - `[imageOptions]` _(Object)_

---

### `fontLoader([options])`

__Arguments:__
- `[options]` _(Object)_: Available properties:
  - `[test]` _(*)_
  - `[fileType]` _(*)_: Defaults to `application/font`.
  - `[exclude]` _(*)_
  - `[include]` _(*)_
  - `[fileOptions]` _(Object)_

---
