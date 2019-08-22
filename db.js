const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getJoke: getJoke,
  addJoke: addJoke
}

function getJoke(db = connection) {
  return db('jokes').select()
}

function addJoke (joker, db = connection){ 
return db('jokes').insert(joker)
}
