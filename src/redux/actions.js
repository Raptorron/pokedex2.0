const GET_POKEMONS = 'GET_POKEMONS';

//action creator

const getPokemons = (pokemons) => ({type: GET_POKEMONS, pokemons});

export {
  GET_POKEMONS,
  getPokemons
}
