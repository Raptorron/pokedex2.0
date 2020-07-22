import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const _Pokemons = ({pokemons}) => {
  return (
    <div>
      <div className='ordering' >
        {
          pokemons.map( pokemon => <div key={pokemon.id} className='spacing' >
            <img src={pokemon.image} width='100px' height='100px' />
            <br/>
            {pokemon.name}
            <br/>
            Type 1: {pokemon.type1}
            <br/>
            Type 2: {pokemon.type2}
          </div>)
        }
      </div>
    </div>
  )
}

const Pokemon = connect(({pokemons})=>{
  return {
    pokemons
  }
})(_Pokemons)

export default Pokemon
