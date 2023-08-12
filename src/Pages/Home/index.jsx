import React from 'react';
import { useTodos } from '../../Hooks/useTodos';
import { TodoHeader } from '../../Components/TodoHeader';
import { TodoCounter } from '../../Components/TodoCounter';
import { TodoSearch } from '../../Components/TodoSearch';
import { TodoList } from '../../Components/TodoList';
import { TodoItem } from '../../Components/TodoItem';
import { CreateItemButton } from '../../Components/CreateItemButton';
import { TodosError } from '../../Components/TodosError';
import { TodosLoading } from '../../Components/TodosLoading';
import { EmptyTodos } from '../../Components/EmptyTodos';
import { NoResults } from '../../Components/NoResults';
import { ChangeAlertWithStorageListener } from '../../Components/ChangeAlert';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  const {
    loading,
    error,
    totalTodos,
    searchedTodos,
    completeTodos,
    deleteTodos,
    showCompletedTaskText,
    lenCompletedTodos,
    searchValue,
    setSearchValue,
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
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            complete={() => completeTodos(todo.id, !todo.completed)}
            delete={() => deleteTodos(todo.id)}
            edit={() =>
              navigate('/edit/'+ todo.id,
                {
                  state: {todo}
                }
              )
            }
          />
        )}
      />
      <ChangeAlertWithStorageListener sincronize={sincronizeTodos} />
      <CreateItemButton />
      <p className='copy'>Created by <a href='https://johandev115.github.io/JohanDev115/index.html' target='_blank'>JohanDev</a></p>
    </div>
  )
}

export { Home }