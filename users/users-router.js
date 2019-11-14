const router = require('express').Router()

const Users = require('./users-model.js')

router.get('/', async (req, res) => {
  try {
    const users = await Users.find()
    res.status(200).json({ users })
  } catch (error) {
    res.status(500).json({
      message: `Error retrieving usres from the db`,
      error
    })
  }
})

module.exports = router