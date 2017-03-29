/*
 * Webpack file watch.
 */
module.exports = (options = {}) => {
    const {
        watch = true,
        watchOptions,
    } = options;

    return () => ({
        watch,
        watchOptions,
    });
};
