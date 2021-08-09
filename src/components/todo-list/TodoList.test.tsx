import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';
const data = [
  { task: 'walk dog', id: 1, isCompleted: false },
  { task: 'playing game', id: 4, isCompleted: true },
  { task: 'Tidy room', id: 6, isCompleted: false }
];
test('renders todolist', () => {
  render(<TodoList todos={data} edit={(id) => { }} />);
  const element = screen.getByTestId('todo-list');
  expect(element).toBeInTheDocument();
});
