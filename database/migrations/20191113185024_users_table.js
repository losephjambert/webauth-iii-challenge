
exports.up = function (knex) {
  return knex.schema.createTable('users', table => {
    table.increments()

    table.string('username', 128).notNullable().unique()
    table.string('password', 255).notNullable()
    table.string('department', 128).notNullable()
  })
};

exports.down = function (knex) {
  knex.schema.dropTableIfExists('users')
};
