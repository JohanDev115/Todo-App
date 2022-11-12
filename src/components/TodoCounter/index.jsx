import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos, lenCompletedTodos } = React.useContext(TodoContext);
  return (
    <h2 className='TodoCounter'>You have completed {lenCompletedTodos} of {totalTodos} Tasks</h2>
  )
}

export { TodoCounter };