import React from 'react';

import './RandomPokemon.scss';

export default function RandomPokemon(props) {
  const { randomPokemonsList, setPokemon } = props;

  const renderRandomPokemonsList = randomPokemonsList.map(pokemon => {
    return (
      <div 
        className="random-pokemon-item" 
        key={pokemon.id}
        onClick={event => setPokemon(pokemon)}
      >
        <img src={pokemon.sprites.front_default}></img>
        <h3>{pokemon.name}</h3>
      </div>
    )
  })

  return (
    <>  
      {renderRandomPokemonsList}
    </>
  )
}