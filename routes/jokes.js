const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getJoke()
    .then(jokes => {
      res.render('index', {jokes: jokes})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/addJoke', (req, res) => {
  
})

module.exports = router
