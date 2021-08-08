import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const element = screen.getByTestId('main-app');
  expect(element).toBeInTheDocument();
});
