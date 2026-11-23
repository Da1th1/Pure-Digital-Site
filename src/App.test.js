import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main heading and contact link', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/just pure/i);
  expect(screen.getByRole('link', { name: /get in touch/i })).toHaveAttribute('href', expect.stringMatching(/^mailto:/));
});
