import React, { useEffect, useRef } from 'react';

import './Pokemon.scss';

export default function PokemonInfo(props) {
  const { selectedPokemon } = props;

  // Initialize ref to be used to scroll div to top
  const divRef = useRef(null);

  // Scroll to top of info display upon new pokemon selection
  useEffect(() => {
    divRef.current.scrollTo(0, 0);
  }, [selectedPokemon]);

  const typeFormat = selectedPokemon.types.map((type, index) => {
    return (
      <li key={type.slot} className="type-item">{type.type.name}</li>
    )
  })

  const abilityFormat = selectedPokemon.abilities.map(ability => {
    return (
      <li key={ability.slot} className="ability-item">{ability.ability.name}</li>
    )
  })

  const statsFormat = selectedPokemon.stats.map(stat => {
    return (
      <div key={stat.stat.name} className="stats-item">
        <li>{stat.stat.name}: </li>
        <p>{stat.base_stat}</p>
      </div>
    )
  })

  return (
    <div className="selected-pokemon-info" ref={divRef}>
      <div className="selected-pokemon-type">
        {/* Plurality type check */}
        { selectedPokemon.types.length === 1 && (
          <div className="pokemon-info-height-weight-type">
            <label>Type: </label>
            <p>{selectedPokemon.types[0].type.name}</p>
          </div>
        )} 
        { selectedPokemon.types.length > 1 && (
          <div className="pokemon-info-types">
            <label>Types: </label>
            <ul className="pokemon-info types-list">{typeFormat}</ul>
          </div>
        )}
      </div>
      <div className="selected-pokemon-ability">
        <p>Abilities:</p>
        <ul className="pokemon-info abilities-list">
          {abilityFormat}
        </ul>
      </div>
      <div className="pokemon-info-height-weight-type">
        <label>Height: </label>
        <p>{selectedPokemon.height}</p>
      </div>
      <div className="pokemon-info-height-weight-type">
        <label>Weight: </label>
        <p>{selectedPokemon.weight}</p>
      </div>    
      <div className="selected-pokemon-stats">
        <p>Base Stats:</p>
        <ul className="pokemon-info stats-list">
          {statsFormat}
        </ul>
      </div>
    </div>
  )
}