import {getFileType, fileTypePreConfig} from './util';

/*
 * Babel loader.
 */
export default (options = {}) => {
    const {test, fileType = 'application/javascript', babelOptions, ...rest} = options;

    const babelLoader = context => ({
        module: {
            rules: [
                {
                    ...rest,
                    test: getFileType(context, test, fileType),
                    use: {
                        loader: 'babel-loader',
                        options: babelOptions,
                    },
                },
            ],
        },
    });

    return Object.assign(babelLoader, {
        pre: fileTypePreConfig(test, fileType),
    });
};
