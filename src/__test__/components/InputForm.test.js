import { render, screen, cleanup, waitFor, fireEvent } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import { InputForm } from '../../components';

// afterEach(cleanup);
afterEach(() => ( document.body.innerHTML = `` ))

const setup = () => {
  const utils = render(<InputForm />)
  const input = screen.getByPlaceholderText('Enter text');
  const submitBtn = screen.getByText('Submit');

  return {
    input,
    submitBtn,
    ...utils,
  }
}



describe('InputForm test cases', () => {

  test('Input field value is set', async () => {
    // ARRANGE
    const { input, submitBtn } = setup();

    // ACT
    fireEvent.change(input, { target: { value: "Hello World" } });
    
    // ASSERT
    expect(input.value).toBe('Hello World');

  });

  test('On Submit', async () => {
    // ARRANGE
    const { input, submitBtn } = setup();

    // ACT
    expect(input.value).toBe('') // empty before
    fireEvent.change(input, { target: { value: "Hello World" } });  
    await userEvent.click(submitBtn);

    // ASSERT
    const spanElement = await screen.getByText(/hello world/i);
    expect(spanElement).toBeInTheDocument();
  });

});
