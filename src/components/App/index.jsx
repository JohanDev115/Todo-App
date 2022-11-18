import React from 'react';
import { useTodos } from '../../hooks/useTodos';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateItemButton } from '../CreateItemButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { NoResults } from '../NoResults';
import { ChangeAlertWithStorageListener } from '../ChangeAlert';
import './App.css';

function App() {
  const {
    loading,
    error,
    totalTodos,
    searchedTodos,
    completeTodos,
    deleteTodos,
    showCompletedTaskText,
    openModal,
    setOpenModal,
    lenCompletedTodos,
    searchValue, 
    setSearchValue,
    addTodos,
    sincronizeTodos
  } = useTodos();

  return (
    <div className='App'>
      <TodoHeader>
        <h1>Task Manager</h1>
        <TodoCounter 
          totalTodos={totalTodos} 
          lenCompletedTodos={lenCompletedTodos}
          loading={loading}
        />
        <TodoSearch 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
          loading={loading}
        />
      </TodoHeader>
      <TodoList 
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        showCompletedTaskText={showCompletedTaskText}

        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmpty={() => <EmptyTodos />}
        onNoResults={() => <NoResults />}

        render={todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
            complete={() => completeTodos(todo.text, !todo.completed)} 
            delete={() => deleteTodos(todo.text)}
          />
        )}
      />
      <ChangeAlertWithStorageListener sincronize={sincronizeTodos} />
      {!!openModal && (
        <Modal>
          <TodoForm addTodos={addTodos} setOpenModal={setOpenModal} searchedTodos={searchedTodos} />
        </Modal>
      )}
      <CreateItemButton setOpenModal={setOpenModal} />
      <p className='copy'>Created by <a href='https://johandev115.github.io/JohanDev115/index.html' target='_blank'>JohanDev</a></p>
    </div>
  )
}

export default App
