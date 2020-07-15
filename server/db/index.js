const db = require('./db');

const Pokemon = require('./models/Pokemon');

const syncAndSeed = require('./syncAndSeed');

module.exports = {
  syncAndSeed,
  db,
  Pokemon
}
