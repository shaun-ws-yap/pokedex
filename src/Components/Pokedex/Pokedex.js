import React from 'react';

import './Pokedex.scss';

export default function Pokedex(props) {
  return (
    <div className="pokedex-container">
      <div className="pokedex">
        <div className="pokedex-left">
          <div className="pokedex-left-top">
            <div className="pokedex-sensor">
              <div className="pokedex-sensor-inner">
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
          <div className="pokedex-left-bottom">
            <div className="pokedex-left-display">

            </div>
          </div>
          <div className="pokedex-left-buttons">
            <div className="pokedex-buttons-left"></div>
            <div className="pokedex-buttons-screen"></div>
            <div className="pokedex-buttons-right"></div>
          </div>
        </div>
        <div className="pokedex-middle"></div>
        <div className="pokedex-right">
          <div className="pokedex-right-top">
            <div className="search-container">
              <label>Search: </label>
              <input className="pokedex-searchbar"></input>
            </div>
          </div>
          <div className="pokedex-right-bottom">
            <div className="pokedex-info-screen"></div>
            <div className="pokedex-random-pokemon">
              <h1 className="random-pokemon-header">Pokemon of the Day: </h1>
              <div className="random-pokemon-container"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  
}