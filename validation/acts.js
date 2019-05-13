const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateTweetInput(data) {
    let errors = {};
    
    data.name = validText(data.name) ? data.name : '';

    if(Validator.isEmpty(data.name)) {
        errors.name = 'Name of act is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};
