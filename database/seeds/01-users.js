const bcrypt = require('bcryptjs');

exports.seed = function (knex) {
  // Inserts seed entries
  return knex('users').insert([
    { id: 1, username: 'Kate', password: bcrypt.hashSync('password', 8), department: 'diagnostics' },
    { id: 2, username: 'Joe', password: bcrypt.hashSync('password', 8), department: 'diagnostics' },
    { id: 3, username: 'Luis', password: bcrypt.hashSync('password', 8), department: 'oncology' },
    { id: 4, username: 'Ron', password: bcrypt.hashSync('password', 8), department: 'oncology' },
    { id: 5, username: 'Susan', password: bcrypt.hashSync('password', 8), department: 'radiology' },
    { id: 6, username: 'Christine', password: bcrypt.hashSync('password', 8), department: 'radiology' },
  ]);
};
