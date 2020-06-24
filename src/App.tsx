import React from 'react';

import Header from './components/Header';

import Pokemons from './pages/Pokemons';

const App: React.FC = () => {
  return (
    <>
      <Header title="Meus Pokemons" />
      <Pokemons />
    </>
  );
}

export default App;
