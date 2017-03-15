const {getFileType, fileTypePreConfig} = require('./util/util');


/**
 * Font loader for production.
 */
module.exports = (options = {}) => {
    const {
        test,
        fileType = 'application/font',
        exclude,
        include,
        fileOptions = {},
    } = options;


    const fontLoader = context => ({
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
        fontLoader,
        {
            pre: fileTypePreConfig(test, fileType),
        }
    );
};
