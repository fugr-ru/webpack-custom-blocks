const {webpack} = require('@webpack-blocks/webpack2');

/*
 * Sets environment variables with all possible ways.
 */
module.exports = (options = {}) => {
    const {
        nodeEnv,
        babelEnv,
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
