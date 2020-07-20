import { render } from 'react-dom';
import React, { Component } from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider, connect } from 'react-redux';

import store, {getPokemonsThunk} from './redux/store';

import Nav from './Components/Nav';
import Home from './Components/Home';
import Pokemon from './Components/Pokemon';


class _App extends Component{
  async componentDidMount(){
    this.props.getPokemons();
  }
  render(){
    return (
      <HashRouter>
        <Route path='/' component={Home} exact />
        <Route component={Nav} />
        <Route path='/pokemons' component={Pokemon} />
        {/* <Redirect path='/' exact /> */}
      </HashRouter>
    )
  }
}

const App = connect(null, (dispatch)=>{
  return {
    getPokemons: () => dispatch(getPokemonsThunk())
  }
})(_App)

render( <Provider store={store}><App /></Provider>, root);
