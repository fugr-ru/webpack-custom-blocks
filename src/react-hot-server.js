import {webpack} from '@webpack-blocks/webpack2';
import path from 'path';

/*
 * Webpack dev server with React HMR.
 */
export default (options = {}) => {
    const {host = 'localhost', port = 8080, publicPath = '/', names = [], ...rest} = options;

    if (!Array.isArray(names)) {
        throw new TypeError('webpack-custom-blocks/reactHotServer: "names" must be an array of strings');
    }

    /* eslint-disable no-underscore-dangle */
    const _url = `http://${host}:${port}`;
    const _path = path.resolve(__dirname, `.${publicPath}`);
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

        if (typeof config.entry === 'string' || Array.isArray(config.entry)) {
            config.entry = devServerEntry.concat(config.entry);
        }
        else {
            names.forEach((chunkName) => {
                config.entry[chunkName] = devServerEntry.concat(config.entry[chunkName]);
            });
        }
    }

    return Object.assign(reactHotServer, {
        post: postConfig,
    });
};
