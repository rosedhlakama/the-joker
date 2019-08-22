exports.up = (knex, Promise) => {
  return knex.schema.createTable('jokes', (table) => {
    table.increments('id')
    table.string('name')
    table.text('joke')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('jokes')
}
