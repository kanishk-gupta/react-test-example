import { render, screen, cleanup } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import Theme from '../../components/Theme';

afterEach(cleanup);


describe('Theme test cases', () => {

  test('Theme', async () => {
    // ARRANGE
    render(<Theme />);

    // ACT
    const buttonEl = screen.getByText(/Current theme/i);
    await userEvent.click(buttonEl);

    // ASSERT
    expect(buttonEl).toHaveTextContent(/dark/i);
  });

  it('should take a snapshot', () => {
    const { asFragment } = render(<Theme />)
    
    expect(asFragment(<Theme />)).toMatchSnapshot();
  });

});
