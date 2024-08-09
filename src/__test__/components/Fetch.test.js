// import dependencies
import React from 'react'

import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// import userEvent from "@testing-library/user-event";

import Fetch from '../../components/Fetch';

const server = setupServer(
  http.get('https://api.agify.io/?name=meelad', () => {
    return HttpResponse.json({
      count: 21,
      name: "Kanishk",
      age: 34
    });
  })
);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


describe('Fetch test cases', () => {

  test('loads and displays greeting', async () => {
    // ARRANGE
    render(<Fetch />);

    // ACT
    fireEvent.click(screen.getByText('Load Greeting'));
    await screen.findByRole('heading');


    // ASSERT
    expect(screen.getByRole('heading')).toHaveTextContent(/kanishk/i);
    expect(screen.getByRole('button')).toBeDisabled();
  });

});
