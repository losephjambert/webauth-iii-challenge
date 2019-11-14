const router = require('express').Router();

const Users = require('./users-model.js');
const requiresAuth = require('../auth/requires-auth-middleware.js');

router.get('/', requiresAuth, async (req, res) => {
  const department = req.query.department;
  let users;
  try {
    if (department) {
      users = await Users.findByDepartment(department);
    } else {
      users = await Users.find();
    }
  } catch (error) {
    res.status(500).json({
      message: `Error retrieving usres from the db`,
      error,
    });
  } finally {
    res.status(200).json({ users });
  }
});

module.exports = router;
