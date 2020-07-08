const axios = require('axios');
const cheerio = require('cheerio');
const dns = require('dns');
const string_utils = require('./utils/string_utils.js');
const validator = require('./utils/validators.js');
const error = require('./error_handler.js');

const checkMetaTag = async (url, name) => {
    url = validator.urlValidator(url);
    const rawHTML = (await axios.get(url)).data;
    const $ = cheerio.load(rawHTML);
    console.log($('meta[name="' + name + '"]').attr('content'));
    return $('meta[name="' + name + '"]').attr('content');
}

const checkDNS = async (reqUrl, dns_name) => {
    reqUrl = validator.urlValidator(reqUrl);
    const hostname = string_utils.getDomain(reqUrl);
    return new Promise((resolve, reject) => {
        dns.resolveTxt(hostname, (err, add) => {
            if (err)
                reject(new error.DNSRecordError('Error while resolving DNS Text records'));
            add = add.length > 0 ? add.reduce((acc, cur) => [...acc, ...cur]) : add;
            resolve(add.indexOf(dns_name) !== -1 ? add : []);
        });
    });
}

module.exports = { checkMetaTag, checkDNS }

