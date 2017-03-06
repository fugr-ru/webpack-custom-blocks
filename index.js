module.exports = {
    setEnv: require('./src/set-env'),

    babelLoader: require('./src/babel-loader'),
    cssLoader: require('./src/css-loader'),
    stylusLoader: require('./src/stylus-loader'),
    imageLoader: require('./src/image-loader'),
    fontLoader: require('./src/font-loader'),

    reactHotServer: require('./src/react-hot-server'),
    stylusHotLoader: require('./src/stylus-hot-loader'),
    imageHotLoader: require('./src/image-hot-loader'),
    fontHotLoader: require('./src/font-hot-loader'),
};
