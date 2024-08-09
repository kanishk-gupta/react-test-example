import { render, screen } from '@testing-library/react';
import App from '../App';


describe('App test cases', () => {

  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders by test ID', () => {
    render(<App />);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});
