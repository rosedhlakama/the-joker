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

router.post('/', (req,res)=>{
  let id = req.body.jokeId
  db.addLike(id)
  .then(()=> {
  res.redirect('/')
  })
})


router.get('/profile/:id', (req, res) =>{
  db.getJoker(req.params.id)
    .then(joker =>{
      db.getJokesByJoker(req.params.id)
      .then(jokes =>{
        res.render('profile',{
          id: jokers.id,
          joker: jokers.name,
          jokes: jokes,
        })
      })
      .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
      })
    })
})

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
