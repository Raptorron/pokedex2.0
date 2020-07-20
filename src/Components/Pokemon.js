import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const _Pokemons = ({pokemons}) => {
  return (
    <div>
      <ul>
        {
          pokemons.map( pokemon => <li key={pokemon.id}>
            {pokemon.name}
          </li>)
        }
      </ul>
    </div>
  )
}

const Pokemon = connect(({pokemons})=>{
  return {
    pokemons
  }
})(_Pokemons)

export default Pokemon
