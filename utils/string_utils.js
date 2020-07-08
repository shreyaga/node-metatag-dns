const extractDomain = require('extract-domain');

const getDomain = (url) => {
    return extractDomain(url);
}

module.exports = {
    getDomain
}