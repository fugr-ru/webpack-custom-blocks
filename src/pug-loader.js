const {getFileType, fileTypePreConfig} = require('./util/util');

/*
 * Pug/Jade loader.
 */
module.exports = (options = {}) => {
    const {
        test = /\.(pug|jade)$/,
        fileType = 'text/x-pug',
        exclude,
        include,
        fileOptions,
        extractOptions,
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
                            loader: 'extract-loader',
                            options: extractOptions,
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
