import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateItemButton } from '../CreateItemButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import './App.css';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

function AppUI() {
  const {
    loading,
    error,
    totalTodos,
    searchedTodos,
    completeTodos,
    deleteTodos,
    showCompletedTaskText,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <div className='App'>
      <h1>Task Manager</h1>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {(!loading && !totalTodos) && <EmptyTodos />}
        {error && <TodosError error={error}/>}
        {loading && <TodosLoading />}
        {searchedTodos.filter(todo => !todo.completed).map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} complete={() => completeTodos(todo.text, true)} delete={() => deleteTodos(todo.text)} />
        ))}
        <h2 className={showCompletedTaskText ? 'completedTasks--show' : undefined}>Completed Tasks</h2>
        {searchedTodos.filter(todo => todo.completed).map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} complete={() => completeTodos(todo.text, false)} delete={() => deleteTodos(todo.text)} />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateItemButton setOpenModal={setOpenModal} />
      <p className='copy'>Created by <a href='https://johandev115.github.io/JohanDev115/index.html' target='_blank'>JohanDev</a></p>
    </div>
  )
}

export { AppUI };