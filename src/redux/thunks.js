import axios from 'axios';

import {
  getPokemons
} from './actions.js';

const getPokemonsThunk = () => {
  return async (dispatch) => {
    const response = (await axios.get('/api/pokemons')).data
    dispatch(getPokemons(response))
  }
}

export {
  getPokemonsThunk
}
