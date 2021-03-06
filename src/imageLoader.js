import {getFileType, fileTypePreConfig} from './util';

/*
 * Image loader with minification.
 */
export default (options = {}) => {
    const {
        test, fileType = 'image', fileOptions, imageOptions, ...rest
    } = options;

    const imageLoader = context => ({
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
                            loader: 'image-webpack-loader',
                            options: Object.assign(
                                {
                                    svgo: {
                                        plugins: [{removeEmptyAttrs: true}],
                                    },
                                    optipng: {
                                        optimizationLevel: 5,
                                    },
                                    mozjpeg: {
                                        quality: 80,
                                    },
                                },
                                imageOptions
                            ),
                        },
                    ],
                },
            ],
        },
    });

    return Object.assign(imageLoader, {
        pre: fileTypePreConfig(test, fileType),
    });
};
