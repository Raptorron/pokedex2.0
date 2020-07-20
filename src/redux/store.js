import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunks from 'redux-thunk';

import {
  getPokemonsThunk
} from './thunks.js';
import {
  getPokemons
} from './actions.js';
import { reducer } from './reducer.js';

const store = createStore(
  reducer,
  applyMiddleware(thunks)
);

export default store;
export {
  getPokemons,
  getPokemonsThunk
}
