const cssLoader = require('./css-loader');


/**
 * stylusHotLoader
 *
 * @param options {object}
 * @param options.filename {string}
 * @return {object}
 */
module.exports = (options = {}) => {
    const {
        exclude,
        include,
        styleOptions = {},
        cssOptions = {},
        stylusOptions = {},
    } = options;

    const fileType = 'text/x-stylus';


    const stylusHotLoader = cssLoader({
        fileType,
        exclude,
        include,
        loaders: [{
            loader: 'stylus-loader',
            options: stylusOptions,
        }],
        styleOptions,
        cssOptions,
    });

    const preConfig = (context) => {
        context.fileType.add(fileType, /\.(styl|stylus)$/);
    };


    return Object.assign(
        stylusHotLoader,
        {
            pre: preConfig,
        }
    );
};
