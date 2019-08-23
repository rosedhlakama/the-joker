const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getJoke: getJoke,
  addJoke: addJoke,
  addLike: addLike,
  getJoker: getJoker,
  getJokesByJoker: getJokesByJoker,
  addJoke: addJoke
}

function getJoke(db = connection) {
  return db('jokes').select()
  .orderBy('likes', 'desc')
}

function getJoker(id, db=connection){
  return db('jokers')
  .first()
  .select('id', 'joker', 'about')
  .where('id', id)
}

function getJokesByJoker(id, db = connection){
  return db('jokes')
    .select('joker', 'about','joke', 'likes')
    .join('jokers', 'jokers.id', 'jokes.joker_id')
    .where('jokes.joker_id', id)
}

function addJoke (joker, db = connection){ 
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