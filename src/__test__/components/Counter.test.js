import { render, screen, cleanup, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import { Counter } from '../../components';

afterEach(cleanup);


describe('Counter test cases', () => {

  test('increments counter after 0.5s', async () => {
    // ARRANGE
    render(<Counter />);

    // ACT
    const upBtn = screen.getByText(/Up/i);
    await userEvent.click(upBtn);
    const counter = await waitFor(() => screen.getByText('1')) 
    
    // ASSERT
    expect(counter).toHaveTextContent('1')
    // expect(upBtn).toHaveTextContent(/dark/i);
  });

});
