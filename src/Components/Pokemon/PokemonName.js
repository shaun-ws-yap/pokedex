import React from 'react';

export default function PokemonName(props) {
  const {selectedPokemon} = props;

  return (
    <h3>{selectedPokemon.name}</h3>
  )
}