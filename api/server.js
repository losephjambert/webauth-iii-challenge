const express = require('express')

const apiRouter = require('./api-router.js')

const server = express()

server.use('/api', apiRouter)

server.get('/', (req, res) => {
  res.status(200).json({ message: `api is up` })
})

module.exports = server