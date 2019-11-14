const db = require('../database/dbConfig.js');

module.exports = {
  find,
  findByDepartment,
  findById,
  add,
};

function find() {
  return db.table('users').select('id', 'username', 'department');
}

function findByDepartment(department) {
  return db
    .table('users')
    .where('department', '=', department)
    .select('id', 'username', 'department');
}

async function add(user) {
  const [id] = await db('users').insert(user);
  return findById(id);
}

async function findById(id) {
  return await db('users')
    .where({ id })
    .select('id', 'username', 'department')
    .first();
}
