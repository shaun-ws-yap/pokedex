import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData(props) {
  const GET_MAX_POKEMON_INDEX = `https://pokeapi.co/api/v2/pokemon-species/?limit=0`;
  const GET_RANDOM_POKEMONS = `https://pokeapi.co/api/v2/pokemon/`;
  const GET_POKEMON_INFO = `https://pokeapi.co/api/v2/pokemon/`;
  const GET_ALL_POKEMON = `https://pokeapi.co/api/v2/pokemon-species/?limit=-1`;

  const [state, setState] = useState({
    randomPokemonsList: [],
    selectedPokemon: {},
    searchedPokemon: {},
    allPokemons: [],
  }) 

  const setPokemon = pokemon => setState({...state, selectedPokemon: pokemon});

  // Upon load, get the maximum index of Pokemon to generate random data
  useEffect(() => {
    Promise.all([
      axios.get(GET_MAX_POKEMON_INDEX)
      .then(res => {
        // Randomly generates 3 pokemon data
        let randomPokemons = [];
        for (let i = 0; i < 3; i++) {
          const randomIndex = Math.round(Math.random() * Math.floor(res.data.count));
          axios.get(GET_RANDOM_POKEMONS + randomIndex)
          .then(res => {
            // Sets 3 randomly generated pokemon to state
            setState(prev => ({...prev, randomPokemonsList: [...prev.randomPokemonsList, res.data]}));
          })
        }
      }),
      axios.get(GET_ALL_POKEMON)
    ]).then(data => {
      setState(prev => ({...prev, allPokemons: data[1].data.results}));
    })
  }, [])

  const searchAutocomplete = (searchInput) => {
    return state.allPokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchInput.toLowerCase()));
  }

  const setFromSearch = (pokemon) => {
    axios.get(GET_POKEMON_INFO + pokemon.name)
    .then(res => {
      console.log(res.data);
      setPokemon(res.data);
    });
  }

  // Returns and saves search results to state
  const getSearchedPokemon = (pokemon) => {
    axios.get(GET_POKEMON_INFO + pokemon)
    .then(res => {
      setState(prev => ({...prev, selectedPokemon: res.data}))
    })
    .catch();
  }


  return { state, setPokemon, getSearchedPokemon, searchAutocomplete, setFromSearch };
}