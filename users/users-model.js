const db = require('../database/dbConfig.js')

module.exports = {
  find,
}

function find() {
  return db.table('users').select('id', 'username', 'department')
}