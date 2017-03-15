const {getFileType, fileTypePreConfig} = require('./util/util');


/**
 * Image loader for HMR.
 */
module.exports = (options = {}) => {
    const {
        test,
        fileType = 'image',
        exclude,
        include,
        fileOptions = {},
    } = options;


    const imageHotLoader = context => ({
        module: {
            rules: [
                {
                    test: getFileType(context, test, fileType),
                    exclude,
                    include,
                    use: {
                        loader: 'file-loader',
                        options: fileOptions,
                    },
                }
            ],
        },
    });


    return Object.assign(
        imageHotLoader,
        {
            pre: fileTypePreConfig(test, fileType),
        }
    );
};
