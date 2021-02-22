import React, { useState, useEffect } from 'react';

import RandomPokemon from '../RandomPokemon/RandomPokemon';
import PokemonDisplay from '../Pokemon/PokemonDisplay';
import PokemonInfo from '../Pokemon/PokemonInfo';
import PokemonName from '../Pokemon/PokemonName';

import './Pokedex.scss';

import useApplicationData from '../../hooks/useApplicationData';

export default function Pokedex(props) {
  const { state, setPokemon, getSearchedPokemon, searchAutocomplete, setFromSearch, setState } = useApplicationData();
  const { randomPokemonsList, selectedPokemon, error } = state;

  // States Management
  const [ searchInput, setSearchInput ] = useState("");
  const [ searchPredictions, setSearchPredictions ] = useState({});
  const [ animate, setAnimate ] = useState(false);

  // Dynamically change border of pokedex display based on selected pokemon type 
  const dynamicBorderByType = selectedPokemon.id ? selectedPokemon.types[0].type.name : '';

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setState(prev => ({...prev, error: undefined}));
    getSearchedPokemon(searchInput.toLowerCase());
    setSearchInput("");
  }

  const handleSetPokemonFromSearchPredict = (event, pokemon) => {
    event.preventDefault();
    setFromSearch(pokemon);
    setSearchInput("");
  }

  // Set sensor animation to true and reset to false after 0.5s
  useEffect(() => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 500)
  }, [selectedPokemon])

  // Auto fills predictions as user types
  useEffect(() => {
    setSearchPredictions(searchAutocomplete(searchInput));
  }, [searchInput])

  if (searchInput) {
    var searchPredictionsList = searchPredictions.map(search => {
      return (
        <p key={search.name} className="search-prediction-results" onClick={event => handleSetPokemonFromSearchPredict(event, search)}>{search.name}</p>
      )
    }) 
  }
  
  return (
    <div className="pokedex-container">
      <div className="pokedex">
        <div className="pokedex-left">
          <div className="pokedex-left-top">
            <div className="pokedex-sensor">
              <div className={`pokedex-sensor-inner animate-${animate}`}>
                <div className="pokedex-sensor-bubble"></div>
              </div>
            </div>
            <div className="pokedex-lights">
              <div className="pokedex-lights-bulb red">
                <div className="pokedex-lights-bubble red-bubble"></div>
              </div>
              <div className="pokedex-lights-bulb yellow">
                <div className="pokedex-lights-bubble yellow-bubble"></div>
              </div>
              <div className="pokedex-lights-bulb green">
                <div className="pokedex-lights-bubble green-bubble"></div>
              </div>
            </div>
          </div>
          <div className={`pokedex-left-bottom  ${dynamicBorderByType}`}>
            <div className="pokedex-left-display">
              { selectedPokemon.id && <PokemonDisplay selectedPokemon={selectedPokemon} /> } 
            </div>
          </div>
          <div className="pokedex-left-buttons">
            <div className="pokedex-buttons-left"></div>
            <div className="pokedex-buttons-screen">
              { error && <h4>{error}</h4> }
              { selectedPokemon.id && <PokemonName selectedPokemon={selectedPokemon} /> } 
            </div>
            <div className="pokedex-buttons-right">
              <div className="pokedex-buttons-center-circle"></div>
              <div className="pokedex-buttons-vertical"></div>
              <div className="pokedex-buttons-horizontal"></div>
            </div>
          </div>
        </div>
        <div className="pokedex-middle"></div>
        <div className="pokedex-right">
          <div className="pokedex-right-top">
            <div className="search-container">
              <label>Search:</label>
              <form
                onSubmit={event => handleSearchSubmit(event)}
                className="pokedex-search-input"
              >
                <input 
                  className={`pokedex-searchbar predict-${searchInput && searchPredictionsList.length > 0 ? true : false}`}
                  autoComplete="off" 
                  spellCheck="false"
                  value={searchInput}
                  onChange={event => setSearchInput(event.target.value)}
                >
                </input>
                { searchInput && searchPredictionsList.length > 0 && (
                <div className="search-predict">
                  { searchPredictionsList }
                </div>
              )}
              </form>
             
      
            </div>
          </div>
          <div className="pokedex-right-bottom">
            <div className="pokedex-info-screen">
              { selectedPokemon.id && <PokemonInfo selectedPokemon={selectedPokemon} /> }
            </div>
            <div className="pokedex-random-pokemon">
              <h1 className="random-pokemon-header">Pokemon of the Day: </h1>
              <div className="random-pokemon-container">
                <RandomPokemon randomPokemonsList={randomPokemonsList} setPokemon={setPokemon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  
}