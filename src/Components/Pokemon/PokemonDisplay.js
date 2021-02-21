import React, { useState, useEffect } from 'react';

import './Pokemon.scss';

export default function PokemonDisplay(props) {
  const { selectedPokemon } = props;
  const [ imageIndex, setImageIndex ] = useState(-1);

  // Reduces API sprites result to a usable array, removing null and undefined KVPs
  const usableSpritesArray = Object.values(selectedPokemon.sprites).filter(sprite => sprite && typeof sprite != 'object');

  // Reset image display pagination index to 0 upon selection change
  useEffect(() => {
    setImageIndex(-1);
  }, [selectedPokemon])

  // Increments image index to show next image
  const handleNext = () => {
    if (imageIndex < usableSpritesArray.length) {
      let currentIndex = imageIndex;
      setImageIndex(currentIndex+1);
    }
  }

  // Decrements image index to go back by 1
  const handlePrev = () => {
    let currentIndex = imageIndex;
    setImageIndex(currentIndex-1);
  }

  return (
    <>
      { imageIndex === -1 && usableSpritesArray.length > 0 && <img className="pokemon-display-image" src={selectedPokemon.sprites.front_default}></img> }
      { imageIndex !== - 1 && usableSpritesArray.length > 0 && <img className="pokemon-display-image" src={usableSpritesArray[imageIndex]}></img> }
      { usableSpritesArray.length === 0 && <img className="pokemon-display-image" src="https://demofree.sirv.com/nope-not-here.jpg"></img>}
      <h4>ID: {selectedPokemon.id}</h4>
      { imageIndex > -1 && <button className="image-button previous" onClick={event => handlePrev()}><i className="fas fa-caret-left fa-2x"></i></button> }
      { imageIndex < usableSpritesArray.length - 1 && <button className="image-button next" onClick={event => handleNext()}><i className="fas fa-caret-right fa-2x"></i></button> }
    </>
  )
}