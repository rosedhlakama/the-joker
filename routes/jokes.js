const express = require('express')

const db = require('../db')

const router = express.Router()

module.exports = router


router.get('/', (req, res) => {
  db.getJoke()
    .then(jokes => {
      res.render('index', {jokes: jokes})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/profile/:id', (req, res) =>{
  db.getJoker(req.params.id)
    .then(joker =>{
      db.getJokesByJoker(req.params.id)
      .then(jokes =>{
        res.render('profile',{
          id: user.id,
          joker: user.name,
          jokes: jokes,
        })
      })
      .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
      })
    })
})