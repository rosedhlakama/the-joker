
exports.up = function(knex, Promise) {
    return knex.schema.table('jokes', (table) => {
               table.integer('joker_id')
               table.integer('likes')
    })
}
exports.down = function(knex, Promise) {
    return knex.schema.dropColumn('jokes')
}
