const error = require('../error_handler.js');

const urlValidator = (url) => {
    try {
        const url_obj = new URL(url);
        return url;
    } catch (err) {
        console.log(err);
        throw new error.URLValidationError('Only absolute URL\'s are supported')
    }
}

const validateInput = (params, required_fields) => {
    return required_fields.some(ob => {
        if (!params.hasOwnProperty(ob) || params[ob] === '') {
            throw new error.ParamerterValidationError('Missing paramter ' + ob);
        }
    })
}


module.exports = { validateInput, urlValidator }