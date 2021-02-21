import React from 'react';

import './Pokemon.scss';

export default function PokemonInfo(props) {
  const { selectedPokemon } = props;

  const typeFormat = selectedPokemon.types.map((type, index) => {
    return (
      <li key={type.slot}>{type.type.name}</li>
    )
  })

  const abilityFormat = selectedPokemon.abilities.map(ability => {
    return (
      <li key={ability.slot}>{ability.ability.name}</li>
    )
  })

  const statsFormat = selectedPokemon.stats.map(stat => {
    return (
      <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
    )
  })

  return (
    <div className="selected-pokemon-info">
      {/* could be multiple types here */}
      <div className="selected-pokemon-type">
        <p>{ selectedPokemon.types.length > 1 ? 'Types: '  : `Type: ${selectedPokemon.types[0].type.name}` }</p>
        { selectedPokemon.types.length > 1 ? <ul>{typeFormat}</ul>  : "" }
      </div>
      <div className="selected-pokemon-ability">
        <p>Abilities:</p>
        <ul>
          {abilityFormat}
        </ul>
      </div>
      <p>Height: {selectedPokemon.height}</p>
      <p>Weight: {selectedPokemon.weight}</p>
    
      <div className="selected-pokemon-stats">
        <p>Base Stats:</p>
        <ul>
          {statsFormat}
        </ul>
      </div>
    </div>
  )
}