import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData(props) {
  const BASE_URL = 'https://pokeapi.co/api/v2/';
  const GET_MAX_POKEMON_INDEX = BASE_URL + "pokemon-species/?limit=0";
  const GET_POKEMON_INFO = BASE_URL + "pokemon/";
  const GET_ALL_POKEMON = BASE_URL + "pokemon-species/?limit=-1";

  const [state, setState] = useState({
    randomPokemonsList: [],
    selectedPokemon: {},
    searchedPokemon: {},
    allPokemons: [],
    error: undefined,
  }) 

  const setPokemon = (pokemon) => {
    setState({...state, error: undefined, selectedPokemon: pokemon});
  }

  // Upon load, get the maximum index of Pokemon to generate random data
  useEffect(() => {
    Promise.all([
      axios.get(GET_MAX_POKEMON_INDEX)
      .then(res => {
        // Randomly generates 3 pokemon data
        let randomPokemons = [];
        for (let i = 0; i < 3; i++) {
          const randomIndex = Math.round(Math.random() * Math.floor(res.data.count)) - 1;
          axios.get(GET_POKEMON_INFO + randomIndex)
          .then(res => {
            // Sets 3 randomly generated pokemon to state
            setState(prev => ({...prev, randomPokemonsList: [...prev.randomPokemonsList, res.data]}));
          })
          .catch(err => {
            console.log(err);
            setState(prev => ({...prev, error: err.response.data}));
          })
        }
      }),
      axios.get(GET_ALL_POKEMON)
    ])
    .then(data => {
      setState(prev => ({...prev, allPokemons: data[1].data.results}));
    })
    .catch(err => {
      setState(prev => ({...prev, error: err.response.data}));
    })
  }, [])

  // Reset displays to empty if error found
  useEffect(() => {
    if (state.error) {
      setState(prev => ({...prev, selectedPokemon: {}}))
    }
  }, [state.error])

  const searchAutocomplete = (searchInput) => {
    return state.allPokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchInput.toLowerCase()));
  }

  const setFromSearch = (pokemon) => {
    axios.get(GET_POKEMON_INFO + pokemon.name)
    .then(res => {
      setPokemon(res.data);
    })
    .catch(err => {
      setState(prev => ({...prev, error: err.response.data}));
    });
  }

  // Returns and saves search results to state
  const getSearchedPokemon = (pokemon) => {
    axios.get(GET_POKEMON_INFO + pokemon)
    .then(res => {
      setState(prev => ({...prev, selectedPokemon: res.data}))
    })
    .catch(err => {
      setState(prev => ({...prev, error: err.response.data}));
    });
  }

  return { state, setPokemon, getSearchedPokemon, searchAutocomplete, setFromSearch, setState };
}