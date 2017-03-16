const {getFileType, fileTypePreConfig} = require('./util/util');

/**
 * Pug/Jade loader.
 */
module.exports = (options = {}) => {
    const {
        test = /\.(pug|jade)$/,
        fileType = 'text/x-pug',
        exclude,
        include,
        fileOptions,
        pugOptions,
    } = options;

    const pugLoader = context => ({
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
                            loader: 'pug-loader',
                            options: pugOptions,
                        },
                    ],
                },
            ],
        },
    });

    return Object.assign(pugLoader, {
        pre: fileTypePreConfig(test, fileType),
    });
};
