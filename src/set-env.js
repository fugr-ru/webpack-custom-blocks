import {webpack} from '@webpack-blocks/webpack2';

/*
 * Sets environment variables.
 */
export default (options = {}) => {
    const keys = Object.keys(options);

    keys.forEach((name) => {
        process.env[name] = options[name];
    });

    return {
        plugins: [new webpack.EnvironmentPlugin(keys)],
    };
};
