import {getFileType, fileTypePreConfig} from './util';

/*
 * CSS loader.
 */
export default (options = {}) => {
    const {test, fileType = 'text/css', exclude, include, loaders = [], styleOptions, cssOptions} = options;

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
                        test: getFileType(context, test, fileType),
                        exclude,
                        include,
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
