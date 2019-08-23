const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getJoke: getJoke,
  addJoke: addJoke,
  addLike: addLike
}

function getJoke(db = connection) {
  return db('jokes').select()
  .orderBy('likes', 'desc')
}

function addJoke(joker, db = connection) {
  return db('jokes').insert(joker)
}

function addLike(id, db = connection) {
  return db('jokes')
    .first()
    .where('jokes.id', id)
    .then((result) => {
      let count = result.likes + 1
      return db('jokes')
        .where('jokes.id', id)
        .update({ likes: count })
    })
}