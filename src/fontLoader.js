import {getFileType, fileTypePreConfig} from './util';

/*
 * Font loader.
 */
export default (options = {}) => {
    const {
        test, fileType = 'application/font', fileOptions, ...rest
    } = options;

    const fontLoader = context => ({
        module: {
            rules: [
                {
                    ...rest,
                    test: getFileType(context, test, fileType),
                    use: {
                        loader: 'file-loader',
                        options: fileOptions,
                    },
                },
            ],
        },
    });

    return Object.assign(fontLoader, {
        pre: fileTypePreConfig(test, fileType),
    });
};
