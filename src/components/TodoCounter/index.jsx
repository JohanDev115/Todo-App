import React from 'react';
import './TodoCounter.css';

function TodoCounter({totalTodos, lenCompletedTodos, loading}) {
  return (
    <h2 className={`TodoCounter ${loading ? 'TodoCounter--loading' : undefined}`} >You have completed {lenCompletedTodos} of {totalTodos} Tasks</h2>
  )
}

export { TodoCounter };