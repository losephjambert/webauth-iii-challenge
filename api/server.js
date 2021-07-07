const express = require('express');

const apiRouter = require('./api-router.js');

const configureMiddleware = require('./configure-middleware.js');

const server = express();

configureMiddleware(server);

server.use('/api', apiRouter);

server.get('/', (req, res) => {
  res.status(200).json({ message: `api is up` });
});

module.exports = server;
