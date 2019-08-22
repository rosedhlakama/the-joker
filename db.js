const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getJoke: getJoke,
  getJoker: getJoker,
  getJokesByJoker: getJokesByJoker,
  addJoke: addJoke
}

function getJoke(db = connection) {
  return db('jokes').select()
}

<<<<<<< HEAD

=======
>>>>>>> 1c55fc17ee36a56637817247b79c6871de570f36
function getJoker(id, db=connection){
  return db('jokers')
  .first()
  .select('joker')
  .where('id', id)
}

function getJokesByJoker(id, db = connection){
  return db('jokers')
    .select('joke', 'likes')
    .join('jokes', 'jokers.id', 'jokes.joker_id')
    .where('jokes.joker_id', id)
}
<<<<<<< HEAD
=======

>>>>>>> 1c55fc17ee36a56637817247b79c6871de570f36
function addJoke (joker, db = connection){ 
return db('jokes').insert(joker)
}
