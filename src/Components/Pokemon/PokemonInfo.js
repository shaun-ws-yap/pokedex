import React, { useEffect } from 'react';

import './Pokemon.scss';

export default function PokemonInfo(props) {
  const { selectedPokemon } = props;

  useEffect(() => {
    // body.scrollTo(0, 0);
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
    <div className="selected-pokemon-info">
      <div className="selected-pokemon-type">
        {/* Plurality type check */}
        <p>{ selectedPokemon.types.length > 1 ? 'Types: '  : `Type: ${selectedPokemon.types[0].type.name}` }</p>
        { selectedPokemon.types.length > 1 ? <ul className="pokemon-info types-list">{typeFormat}</ul>  : "" }
      </div>
      <div className="selected-pokemon-ability">
        <p>Abilities:</p>
        <ul className="pokemon-info abilities-list">
          {abilityFormat}
        </ul>
      </div>
      <div className="pokemon-info-height-weight">
        <label>Height: </label>
        <p>{selectedPokemon.height}</p>
      </div>
      <div className="pokemon-info-height-weight">
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