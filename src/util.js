/**
 *
 * @param context {*}
 * @param test {*}
 * @param fileType {string}
 */
export function getFileType(context, test, fileType) {
    let resultTest = context.fileType(fileType);

    if (test) {
        resultTest = test;
    }

    return resultTest;
}

/**
 *
 * @param test {*}
 * @param fileType {string}
 * @returns {function(*)}
 */
export function fileTypePreConfig(test, fileType) {
    return (context) => {
        if (test && fileType) {
            context.fileType.add(fileType, test);
        }
    };
}
