import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoForm from './TodoForm';

test('renders todo form', () => {
  render(<TodoForm onAdd={(task: string) => {}} />);
  const element = screen.getByTestId('todo-form');
  expect(element).toBeInTheDocument();
});
