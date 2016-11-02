export function errorActionInstance(errorHandler, message) {
    const error = {};
    error.message = (message || '');
    error.errorHandler = errorHandler;
    error.prototype = Error.prototype;
    return error;
}
