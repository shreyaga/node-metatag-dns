
class URLValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'URLValidationError';
    }
}

class ParamerterValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ParamerterValidationError';
    }
}

class DNSRecordError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DNSRecordError';
    }
}

module.exports = {
    URLValidationError, ParamerterValidationError, DNSRecordError
}