const router = require('express').Router();

const requiresAuth = require('./requires-auth-middleware.js');

router.get('/', requiresAuth, (req, res) => {
  res.status(200).json({ message: `auth router is up` });
});

module.exports = router;
