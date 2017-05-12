import {getFileType, fileTypePreConfig} from './util';

/*
 * Babel loader.
 */
export default (options = {}) => {
    const {test, fileType = 'application/javascript', exclude, include, babelOptions} = options;

    const babelLoader = context => ({
        module: {
            rules: [
                {
                    test: getFileType(context, test, fileType),
                    exclude,
                    include,
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
