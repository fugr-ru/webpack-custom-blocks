# webpack-custom-blocks
A set of well-thought 📦webpack-blocks for real-world projects

### setEnv
Sets environmental variables with all possible ways.

Name | Default | Description
--- | --- | ---
`nodeEnv` | `undefined` |
`babelEnv` | `undefined` |

### babelLoader
Built on top of [babel-loader](https://github.com/babel/babel-loader).

Name | Default | Description
--- | --- | ---
`test` | `undefined` |
`fileType` | `application/javascript` | If `test` is also set, then it adds a new fileType, else uses it as an existing one.
`exclude` | `undefined` |
`include` | `undefined` |
`babelOptions` | `{}` | `babel-loader` options.

### cssLoader
Built on top of `style-loader` and `css-loader`.

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
Built on top of [stylus-loader](https://github.com/shama/stylus-loader) and `extract-loader`.

Name | Default | Description
--- | --- | ---
`test` | <code>/\.(styl&#124;stylus)$/</code> |
`fileType` | `text/x-stylus` |
`exclude` | `undefined` |
`include` | `undefined` |
`fileOptions` | `{}` |
`extractOptions` | `{}` |
`cssOptions` | `{}` |
`stylusOptions` | `{}` |

### pugLoader
Build on top of `pug-loader`.

Name | Default | Description
--- | --- | ---
`test` | <code>/\.(pug|jade)$/</code> |
`fileType` | `text/x-pug` |
`exclude` | `undefined` |
`include` | `undefined` |
`fileOptions` | `{}` |
`pugOptions` | `{}` |

### imageLoader
Build on top of `image-webpack-loader`.

Name | Default | Description
--- | --- | ---
`test` | `undeifned` |
`fileType` | `image` |
`exclude` | `undefined` |
`include` | `undefined` |
`fileOptions` | `{}` |
`imageOptions` | `{}` |

### fontLoader
Name | Default | Description
--- | --- | ---
`test` | `undeifned` |
`fileType` | `application/font` |
`exclude` | `undefined` |
`include` | `undefined` |
`fileOptions` | `{}` |

### reactHotServer
Built on top of webpack-dev-server@2 and react-hot-loader@3.

Name | Default | Description
--- | --- | ---
`host` | `localhost` |
`port` | `3000` |
`path` | `static/` | The final output.publicPath will be `http://${host}:${port}/${path}`.
