import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData(props) {
  const GET_MAX_POKEMON_INDEX = `https://pokeapi.co/api/v2/pokemon-species/?limit=0`;
  const GET_RANDOM_POKEMONS = `https://pokeapi.co/api/v2/pokemon/`;

  const [state, setState] = useState({
    randomPokemon: [],
    allPokemon: [],
    selectedPokemon: {},
  }) 

  const setPokemon = pokemon => setState({...state, setPokemon});

  // Upon load, get the maximum index of Pokemon to generate random data
  useEffect(() => {
    axios.get(GET_MAX_POKEMON_INDEX)
    .then(res => {
      for (let i = 0; i < 3; i++) {
        const getRandomIndex = Math.round(Math.random() * Math.floor(res.data.count));
        axios.get(GET_RANDOM_POKEMONS + getRandomIndex)
        .then()
      }
    })
  })

  return { state };

}