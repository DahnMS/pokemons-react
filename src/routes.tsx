import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Pokemons from './pages/Pokemons';
import PokemonDetail from './pages/PokemonDetail';

const src: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Pokemons />
        </Route>
        <Route path="/pokemon/:name" exact>
          <PokemonDetail />
        </Route>
      </Switch>
    </Router>
  )
}

export default src;