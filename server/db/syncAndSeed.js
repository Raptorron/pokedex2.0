const db = require('./db');

const Pokemon = require('./models/Pokemon');

const syncAndSeed = async () => {
  await db.sync({force: true});

  const pokemons = [
    {
      name: "Bulbasaure", type1: 'GRASS', type2: 'POISON', image: 'https://cws.auburn.edu/shared/Assets/Images/no-picture-available-yet.png'
    },
    {
      name: "Charmander", type1: 'FIRE', type2: 'NONE', image: 'https://cws.auburn.edu/shared/Assets/Images/no-picture-available-yet.png'
    },
    {
      name: "Squirtle", type1: 'WATER', type2: 'NONE', image: 'https://cws.auburn.edu/shared/Assets/Images/no-picture-available-yet.png'
    },
    {
      name: "Pikachu", type1: 'ELECTRIC', type2: 'NONE', image: 'https://cws.auburn.edu/shared/Assets/Images/no-picture-available-yet.png'
    },
    {
      name: "Mewtwo", type1: 'PSYCHIC', type2: 'NONE', image: 'https://cws.auburn.edu/shared/Assets/Images/no-picture-available-yet.png'
    }
  ]
  const [Bulbasaure, Charmander, Squirtel, Pikachu, Mewtwo] = await Promise.all(pokemons.map(pokemon => Pokemon.create(pokemon)));
};

syncAndSeed();

module.exports = syncAndSeed;
