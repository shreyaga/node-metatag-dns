const config = require('./config.js');
const page = require('./page_service.js');
const server = require('./server.js');
const validator = require('./utils/validators.js');

const app = server.createServer(config.port);

app.get('/metatag', async (req, res) => {
    let obj = { 'result': '', 'error': '' };
    try {
        validator.validateInput(req.query, ['url', 'meta_name']);
        let data = await page.checkMetaTag(req.query.url, req.query.meta_name);
        obj.status = 200;
        obj.result = data !== undefined ? data : 'Metatag ' + req.query.meta_name + ' is not present';
        res.status(200);
    } catch (err) {
        obj.status = 400;
        obj.error = err.message;
        res.status(400);
    }
    res.send(obj);
});

app.get('/dns', async (req, res) => {
    let obj = { 'result': '', 'error': '' };
    try {
        validator.validateInput(req.query, ['url', 'dns_txt_rcd']);
        obj.result = await page.checkDNS(req.query.url, req.query.dns_txt_rcd);
        obj.status = 200;
        res.status(200);
    } catch (err) {
        obj.error = err.message;
        obj.status = 400
        res.status(400);
    }
    res.send(obj)
})
