const express = require('express')

const db = require('../db')

const router = express.Router()

module.exports = router


router.get('/', (req, res) => {
  let {saved} = req.query
  db.getJoke()
    .then(jokes => {
      res.render('index', {jokes, saved})
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
<<<<<<< HEAD
=======

>>>>>>> 1c55fc17ee36a56637817247b79c6871de570f36
router.get('/addJoke', (req, res) => {  
  res.render('./addJoke')
})
router.post('/addJoke', (req, res) => {  
  let {name, joke} = req.body
  let joker = {name, joke}
  db.addJoke(joker)
  .then(() => {
    res.redirect('/?saved=added')
  })
})

module.exports = router
