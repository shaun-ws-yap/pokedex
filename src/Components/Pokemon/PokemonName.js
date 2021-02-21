import React from 'react';

import './Pokemon.scss';

export default function PokemonName(props) {
  const {selectedPokemon} = props;

  return (
    <h3 className="pokemon-name">{selectedPokemon.name}</h3>
  )
}