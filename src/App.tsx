import React, { useState, useEffect } from 'react';
import TodoForm from './components/todo-form/TodoForm';
import TodoList from './components/todo-list/TodoList';
import './App.css';

const data = [{ task: '', id: -1, isCompleted: false }];

function App() {
  const [todos, setTodos] = useState(data);
  const [isLoading, setIsLoading] = useState(true);
  const handleTodoAdd = (task: string) => {
    const data = { task };
    fetch('http://localhost:3005/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(resData => {
        setTodos(resData);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    fetch('http://localhost:3005/api/todos')
      .then(resp => resp.json())
      .then(data => {
        setTodos(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className='App' data-testid='main-app'>
      <header className='App-header'>
        <p>My to-dos list</p>
      </header>
      <main>
        <TodoForm onAdd={handleTodoAdd} />
        {isLoading ? (
          <div className='loading'>Loading ......</div>
        ) : (
          <TodoList todos={todos} />
        )}
      </main>
    </div>
  );
}

export default App;
