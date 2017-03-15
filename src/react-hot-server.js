const {webpack} = require('@webpack-blocks/webpack2');
const pathNode = require('path');


/**
 * Webpack dev server with React HMR.
 */
module.exports = (options = {}) => {
    const {
        host = 'localhost',
        port = 3000,
        path = '',
    } = options;

    const reactHotServer = () => ({
        entry: [
            'react-hot-loader/patch',
            `webpack-dev-server/client?http://${host}:${port}`,
            'webpack/hot/only-dev-server',
        ],
        output: {
            path: pathNode.resolve(__dirname, path),
            publicPath: `http://${host}:${port}/${path}`,
        },
    });

    const postConfig = () => ({
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
        ],

        devServer: {
            host,
            port,
            historyApiFallback: true,
            hot: true,
        },
    });

    return Object.assign(
        reactHotServer,
        {
            post: postConfig,
        }
    );
};
