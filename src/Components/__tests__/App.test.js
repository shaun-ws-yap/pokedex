import React from 'react';
import axios from 'axios';
import '@testing-library/jest-dom/extend-expect';

import { render, cleanup, fireEvent, getByText, prettyDOM, getAllByTestId, getByAltText, getByPlaceholderText, queryByText, getByDisplayValue, waitFor } from "@testing-library/react";

import App from '../../App';

afterEach(cleanup);

describe("App Starts", () => {
  it("Loads without crashing", () => {
    const { getByText } = render(<App />);

    expect(getByText("Pokemon of the Day:")).toBeInTheDocument();
  })
})

