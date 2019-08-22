
exports.up = function(knex, Promise) {
  return knex.schema.createTable('jokers', (table) => {
      table.increments('id')
      table.string('joker')
      table.text('about')    
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('jokers')
};
