import {getFileType, fileTypePreConfig} from './util';

/*
 * Stylus loader.
 */
export default (options = {}) => {
    const {
        test = /\.(styl|stylus)$/,
        fileType = 'text/x-stylus',
        exclude,
        include,
        fileOptions,
        extractOptions,
        cssOptions,
        stylusOptions,
    } = options;

    const stylusLoader = context => ({
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
                            loader: 'css-loader',
                            options: cssOptions,
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
                    ],
                },
            ],
        },
    });

    return Object.assign(stylusLoader, {
        pre: fileTypePreConfig(test, fileType),
    });
};
