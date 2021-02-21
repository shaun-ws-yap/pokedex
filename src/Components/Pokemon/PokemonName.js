import React from 'react';

import './Pokemon.scss';

export default function PokemonName(props) {
  const {selectedPokemon} = props;
  
  const splitName = selectedPokemon.name.split('-')

  return (
    <h3 className="pokemon-name">{splitName[0]}</h3>
  )
}