const express = require('express');
const router = express.Router();
const { Pokemon } = require('./db');

router.get('/api/users', (req, res, next)=> {
  Pokemon.findAll()
    .then(item => res.send(item))
    .catch(next)
});

module.exports = router;
