import React from 'react';

import './RandomPokemon.scss';

export default function RandomPokemon(props) {
  const { randomPokemonsList, setPokemon } = props;

  const renderRandomPokemonsList = randomPokemonsList.map(pokemon => {
    const splitName = pokemon.name.split('-');

    return (
      <div 
        className="random-pokemon-item" 
        key={pokemon.id}
        onClick={event => setPokemon(pokemon)}
        data-testid="random"
      >
        <img src={pokemon.sprites.front_default} alt={`${pokemon.name} display image`}></img>
        <h3>{splitName[0]}</h3>
      </div>
    )
  })

  return (
    <>  
      {renderRandomPokemonsList}
    </>
  )
}