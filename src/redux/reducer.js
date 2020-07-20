import { combineReducers } from 'redux';

import {
  GET_POKEMONS
} from './actions.js';

const pokemonReducer = (state=[], action) => {
  if(action.type === GET_POKEMONS){
    return action.pokemons
  }
  return state
}

const reducer = combineReducers({
  pokemons: pokemonReducer
});

export { reducer }
