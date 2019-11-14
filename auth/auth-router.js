const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');
const requiresAuth = require('./requires-auth-middleware.js');

router.get('/', requiresAuth, (req, res) => {
  res.status(200).json({ message: `auth router is up` });
});

router.post('/register', async (req, res) => {
  const { username, password, department } = req.body;
  try {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        const user = await Users.add({
          username,
          password: hash,
          department,
        });
        res.status(200).json(user);
      });
    });
  } catch (error) {
    res.status(500).json({ message: `error saving user to db`, error });
  }
});

module.exports = router;
