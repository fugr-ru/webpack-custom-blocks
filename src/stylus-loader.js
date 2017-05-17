import {getFileType, fileTypePreConfig} from './util';

/*
 * Stylus loader.
 */
export default (options = {}) => {
    const {
        test = /\.(styl|stylus)$/,
        fileType = 'text/x-stylus',
        fileOptions,
        extractOptions,
        cssOptions,
        stylusOptions,
        ...rest,
    } = options;

    const stylusLoader = context => ({
        module: {
            rules: [
                {
                    ...rest,
                    test: getFileType(context, test, fileType),
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
