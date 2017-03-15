const {getFileType, fileTypePreConfig} = require('./util/util');


/**
 * Font loader for HMR.
 */
module.exports = (options = {}) => {
    const {
        test,
        fileType = 'application/font',
        exclude,
        include,
        fileOptions = {},
    } = options;


    const fontHotLoader = context => ({
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
        fontHotLoader,
        {
            pre: fileTypePreConfig(test, fileType),
        }
    );
};
