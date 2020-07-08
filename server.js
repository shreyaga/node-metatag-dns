const express = require('express');

const createServer = (port) => {
    const app = express();
    app.listen(port);
    return app;
}

module.exports = { createServer }