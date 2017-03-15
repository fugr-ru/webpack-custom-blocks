const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Stylus loader for production.
 */
module.exports = (options = {}) => {
    const {
        filename = '[name].css',
        exclude,
        include,
        rawOptions = {},
        stylusOptions = {},
    } = options;

    const stylusLoader = context => ({
        module: {
            rules: [
                {
                    test: context.fileType('text/x-stylus'),
                    exclude,
                    include,
                    use: ExtractTextPlugin.extract([
                        {
                            loader: 'raw-loader',
                            options: rawOptions,
                        },
                        {
                            loader: 'stylus-loader',
                            options: Object.assign(
                                {
                                    compress: true,
                                },
                                stylusOptions
                            ),
                        },
                    ]),
                },
            ],
        },
    });

    const preConfig = (context) => {
        context.fileType.add('text/x-stylus', /\.(styl|stylus)$/);
    };

    const postConfig = () => ({
        plugins: [new ExtractTextPlugin({filename})],
    });

    return Object.assign(stylusLoader, {
        pre: preConfig,
        post: postConfig,
    });
};
