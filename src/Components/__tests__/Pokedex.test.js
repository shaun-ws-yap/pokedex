import React from 'react';
import axios from 'axios';
import '@testing-library/jest-dom/extend-expect';

import { render, cleanup, fireEvent, waitForElement, getByText, prettyDOM, getAllByTestId, getByTestId, getByAltText, getByPlaceholderText, queryByText, getByDisplayValue, waitFor, screen, getElementsByClassName } from "@testing-library/react";

import Pokedex from '../../Components/Pokedex/Pokedex.js';
import RandomPokemon from '../../Components/RandomPokemon/RandomPokemon.js';

afterEach(cleanup);

describe("Pokedex loads", () => {

  it("Loads without crashing", () => {
    const { getByText } = render(<Pokedex />);

    expect(getByText("Search:")).toBeInTheDocument();
  })
})
