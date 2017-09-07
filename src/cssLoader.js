import {getFileType, fileTypePreConfig} from './util';

/*
 * CSS loader.
 */
export default (options = {}) => {
    const {
        test, fileType = 'text/css', loaders = [], styleOptions, cssOptions, ...rest
    } = options;

    const cssLoader = (context) => {
        let use = [
            {
                loader: 'style-loader',
                options: styleOptions,
            },
            {
                loader: 'css-loader',
                options: cssOptions,
            },
        ];

        if (Array.isArray(loaders)) {
            use = use.concat(loaders);
        }

        return {
            module: {
                rules: [
                    {
                        ...rest,
                        test: getFileType(context, test, fileType),
                        use,
                    },
                ],
            },
        };
    };

    return Object.assign(cssLoader, {
        pre: fileTypePreConfig(test, fileType),
    });
};
