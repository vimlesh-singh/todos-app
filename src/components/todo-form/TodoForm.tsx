import { useState } from 'react';
import classes from './TodoForm.module.css';
export interface TodoFormProps {
  onAdd: (task: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = (props: TodoFormProps) => {
  const [task, setTask] = useState('');
  const handleChange = (e: any) => {
    e.preventDefault();
    setTask(e.target.value);
  };
  const handleSubmit = () => {
    props.onAdd(task);
    setTask('');
  };

  return (
    <form
      onSubmit={e => e.preventDefault()}
      className={classes.form}
      data-testid='todo-form'>
      <input
        className={classes.input}
        type='text'
        onChange={handleChange}
        value={task}
      />
      <button
        className={classes.button}
        disabled={task.trim() === ''}
        onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
};

export default TodoForm;
