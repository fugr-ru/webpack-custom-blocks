const {webpack} = require('@webpack-blocks/webpack2');
const path = require('path');

/*
 * Webpack dev server with React HMR.
 */
module.exports = (options = {}) => {
    const {host = 'localhost', port = 8080, publicPath = '/', ...rest} = options;

    /* eslint-disable no-underscore-dangle */
    const _url = `http://${host}:${port}`;
    const _path = path.resolve(__dirname, publicPath);
    const _publicPath = `${_url}${publicPath}`;
    /* eslint-enable no-underscore-dangle */

    const reactHotServer = () => ({
        output: {
            path: _path,
            publicPath: _publicPath,
        },

        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
        ],

        devServer: {
            host,
            port,
            contentBase: _path,
            publicPath: _publicPath,
            historyApiFallback: true,
            hot: true,
            ...rest,
        },
    });

    function postConfig(context, config) {
        const devServerEntry = [
            'react-hot-loader/patch',
            `webpack-dev-server/client?${_url}`,
            'webpack/hot/only-dev-server',
        ];

        const presentEntry = config.entry || '';

        let entry = {};

        if (typeof presentEntry === 'string' || Array.isArray(presentEntry)) {
            entry = devServerEntry.concat(presentEntry);
        }
        else {
            Object.keys(presentEntry).forEach((chunkName) => {
                entry[chunkName] = devServerEntry.concat(presentEntry[chunkName]);
            });
        }

        return {entry};
    }

    return Object.assign(reactHotServer, {
        post: postConfig,
    });
};
