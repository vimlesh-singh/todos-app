import React, { useState, useEffect } from 'react';
import classes from './TodoList.module.css';

export interface TodoListProps {
  todos: { task: string; isCompleted: boolean; id: number }[];
}
const tempTodos = [{ task: '', isCompleted: false, id: 0 }];
const TodoList: React.FC<TodoListProps> = (props: TodoListProps) => {
  const [completedTaskList, setCompletedTaskList] = useState(tempTodos);
  const [pendingTaskList, setpendingTaskList] = useState(tempTodos);
  useEffect(() => {
    // effect
    const newCompletedList: {
      task: string;
      isCompleted: boolean;
      id: number;
    }[] = [];
    const newPendingList: {
      task: string;
      isCompleted: boolean;
      id: number;
    }[] = [];
    props.todos.forEach(item => {
      if (item.isCompleted) {
        newCompletedList.push(item);
      } else {
        newPendingList.push(item);
      }
    });
    setCompletedTaskList(newCompletedList);
    setpendingTaskList(newPendingList);
  }, [props]);
  return (
    <div className={classes.todoListContainer} data-testid='todo-list'>
      <div className={classes.todoList}>
        <div className={classes.caption}>{`Pending Task`}</div>
        {pendingTaskList.map(todo => (
          <div key={todo.id} className={classes.todoItem}>
            {todo.task}
          </div>
        ))}
      </div>
      <div className={classes.todoList}>
        <div className={classes.caption}>{`Completed Task`}</div>
        {completedTaskList.map(todo => (
          <div
            key={todo.id}
            className={`${classes.todoItem} ${classes.completed}`}
          >
            {todo.task}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
