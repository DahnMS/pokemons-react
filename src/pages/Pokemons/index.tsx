import React, { useState, useEffect } from 'react';
import IPokemon from '../../interfaces/IPokemon';
import api from '../../services/api';

const Pokemons: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([] as IPokemon[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('pokemon').then(response => {
      if (response.status !== 200 || !response.data) return;
      
      setPokemons(response.data.results);
    })
    .finally(() => setLoading(false));
  }, [])

  if(loading) return <h2>Carregando Pokemons</h2>;

  if(!pokemons && !loading) return <h2>Não tem Pokemons</h2>;

  return (
    <ul>
      { 
        pokemons && pokemons.map(pokemon => (
          <li key={pokemon.name}>{ pokemon.name }</li>
        )) 
      }
    </ul>
  );
}

export default Pokemons;