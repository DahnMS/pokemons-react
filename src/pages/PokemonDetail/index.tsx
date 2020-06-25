import React from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail: React.FC = () => {
  const { name } = useParams();

  return (<h1>{ name }</h1>);
}

export default PokemonDetail;