import {getFileType, fileTypePreConfig} from './util';

/*
 * Pug/Jade loader.
 */
export default (options = {}) => {
    const {test = /\.(pug|jade)$/, fileType = 'text/x-pug', fileOptions, pugOptions, ...rest} = options;

    const pugLoader = context => ({
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
                            loader: 'pug-html-loader',
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
