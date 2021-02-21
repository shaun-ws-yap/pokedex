import React, { useState, useEffect } from 'react';

import './Pokemon.scss';

export default function PokemonDisplay(props) {
  const { selectedPokemon } = props;
  const [ imageIndex, setImageIndex ] = useState(-1);

  const usableSpritesArray = Object.values(selectedPokemon.sprites).filter(sprite => sprite && typeof sprite != 'object');

  useEffect(() => {
    setImageIndex(-1);
  }, [selectedPokemon])

  const handleNext = () => {
    if (imageIndex < usableSpritesArray.length) {
      let currentIndex = imageIndex;
      setImageIndex(currentIndex+1);
    }
  }

  const handlePrev = () => {
    let currentIndex = imageIndex;
    setImageIndex(currentIndex-1);
  }

  return (
    <>
      { imageIndex === -1 && <img className="pokemon-display-image" src={selectedPokemon.sprites.front_default}></img> }
      { imageIndex !== - 1 && <img className="pokemon-display-image" src={usableSpritesArray[imageIndex]}></img> }
      <h4>ID: {selectedPokemon.id}</h4>
      { imageIndex > -1 && <button className="image-button previous" onClick={event => handlePrev()}><i className="fas fa-caret-left fa-2x"></i></button> }
      { imageIndex < usableSpritesArray.length - 1 && <button className="image-button next" onClick={event => handleNext()}><i className="fas fa-caret-right fa-2x"></i></button> }
    </>
  )
}