const {getFileType, fileTypePreConfig} = require('./util/util');


/**
 * imageLoader
 *
 * @param options {object}
 * @param options.filename {string}
 * @param options.stylusOptions {object}
 * @return {object}
 */
module.exports = (options = {}) => {
    const {
        test,
        fileType = 'image',
        exclude,
        include,
        fileOptions = {},
        imageOptions = {},
    } = options;


    const imageLoader = context => ({
        module: {
            rules: [
                {
                    test: getFileType(context, test, fileType),
                    exclude,
                    include,
                    use: [
                        {
                            loader: 'file-loader',
                            options: fileOptions,
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: Object.assign({
                                svgo: {
                                    plugins: [
                                        {removeEmptyAttrs: true},
                                    ],
                                },
                                optipng: {
                                    optimizationLevel: 5,
                                },
                                mozjpeg: {
                                    quality: 80,
                                },
                            }, imageOptions),
                        },
                    ],
                },
            ],
        },
    });


    return Object.assign(
        imageLoader,
        {
            pre: fileTypePreConfig(test, fileType),
        }
    );
};
