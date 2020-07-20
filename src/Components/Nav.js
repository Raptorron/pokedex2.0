import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const _Nav = ({pokemons}) => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/pokemons'>Pokemon</NavLink>
    </nav>
  )
}

const Nav = connect(({pokemons})=> {
  return {
    pokemons
  }
})(_Nav)

export default Nav
