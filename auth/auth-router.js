const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model.js');

router.get('/', (req, res) => {
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

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const [user] = await Users.findBy({ username });
    bcrypt.compare(password, user.password, function(err, match) {
      if (match) {
        const token = getJwtToken(user.username, user.department);
        console.log(token);
        res.status(200).json({ message: `Welcome back ${user.username}!`, token });
      } else {
        res.status(401).json({ message: `You shall not pass!` });
      }
    });
  } catch (error) {
    res.status(500).json({ message: `error retrieving user from db`, error });
  }
});

function getJwtToken(username, department) {
  const payload = {
    username,
    department,
  };
  const secret = process.env.JWT_SECRET;
  const options = {
    expiresIn: '1d',
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router;
