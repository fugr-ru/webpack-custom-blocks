# webpack-custom-blocks
A set of well-thought 📦webpack-blocks for real-world projects

## generic
### setEnv
#### Options
Name | Default | Description
--- | --- | ---
`nodeEnv` | `undefined` |
`babelEnv` | `undefined` |

## basic loaders
### babelLoader
Built on top of [babel-loader](https://github.com/babel/babel-loader).

#### Options
Name | Default | Description
--- | --- | ---
`test` | `undefined` |
`fileType` | `application/javascript` | If `test` is also set, then it adds a new fileType, else uses it as an existing one.
`exclude` | `undefined` |
`include` | `undefined` |
`babelOptions` | `{}` | `babel-loader` options.

### cssLoader
Built on top of style-loader and css-loader.

#### Options
Name | Default | Description
--- | --- | ---
`test` | `undefined` |
`fileType` | `text/css` | If `test` is also set, then it adds a new fileType, else uses it as an existing one.
`exclude` | `undefined` |
`include` | `undefined` |
`loaders` | `[]` | Additional loaders that go after `css-loader`.
`styleOptions` | `{}` | `style-loader` options.
`cssOptions` | `{}` | `css-loader` options.

### stylusLoader
Built on top of [stylus-loader](https://github.com/shama/stylus-loader), extract-text-webpack-plugin@2 and autoprefixer-stylus.

#### Options]
Name | Default | Description
--- | --- | ---
`filename` | `[name].css` |
`stylusOptions` | `{}` |

## hot loaders
### stylusHotLoader
#### Options

### reactHotServer
Built on top of webpack-dev-server@2 and react-hot-loader@3.

#### Options
Name | Default | Description
--- | --- | ---
`host` | `localhost` |
`port` | `3000` |
`path` | `static/` | The final output.publicPath will be `http://${host}:${port}/${path}`.
