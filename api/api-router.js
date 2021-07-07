const router = require('express').Router()

const usersRouter = require('../users/users-router.js')
const authRouter = require('../auth/auth-router.js')

router.get('/', (req, res) => {
  res.status(200).json({ message: `api router up` });
});

router.use('/users', usersRouter)
router.use('/auth', authRouter)

module.exports = router