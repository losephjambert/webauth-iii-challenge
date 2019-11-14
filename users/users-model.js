const db = require('../database/dbConfig.js')

module.exports = {
  find,
  findByDepartment
}

function find() {
  return db.table('users').select('id', 'username', 'department')
}

function findByDepartment(department) {
  return db.table('users').where('department', '=', department).select('id', 'username', 'department')
}