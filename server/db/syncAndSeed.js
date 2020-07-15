const db = require('./db');

const Pokemon = require('./models/Pokemon');

const syncAndSeed = async () => {
  await db.sync({force: true});

  const pokemons = [
    {
      name: "Bulbasaure"
    },
    {
      name: "Charmander"
    },
    {
      name: "Squirtel"
    },
    {
      name: "Pikachu"
    },
    {
      name: "Mewtwo"
    }
  ]
  const [Bulbasaure, Charmander, Squirtel, Pikachu, Mewtwo] = await Promise.all(pokemons.map(pokemon => Pokemon.create(pokemon)));
};

syncAndSeed();

module.exports = syncAndSeed;
