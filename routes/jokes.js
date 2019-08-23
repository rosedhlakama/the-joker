const express = require('express')

const db = require('../db')

const router = express.Router()

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
