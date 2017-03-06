const {webpack} = require('@webpack-blocks/webpack2');


/**
 * setEnv
 *
 * @param options {object}
 * @returns {function}
 */
module.exports = (options = {}) => {
    const {
        nodeEnv = 'development',
        babelEnv = 'development',
    } = options;

    process.env.NODE_ENV = nodeEnv;
    process.env.BABEL_ENV = babelEnv;

    return () => ({
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(nodeEnv),
                    BABEL_ENV: JSON.stringify(babelEnv),
                },
            }),

            new webpack.EnvironmentPlugin(['NODE_ENV', 'BABEL_ENV']),
        ],
    });
};
