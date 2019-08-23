
exports.up = function(knex, Promise) {
    return knex.schema.table('jokes', (table) => {
               table.integer('joker_id')
               table.integer('likes').default('0')
    })
}
exports.down = function(knex, Promise) {
    return knex.schema.table('jokes', (table) => {
        table.dropColumn('joker_id')
        table.dropColumn('likes')
    })
}
