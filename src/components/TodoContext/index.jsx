import React from "react";
import useLocalStorage from '../../hooks/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos, 
    saveItem: saveTodos, 
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const totalTodos = todos.length
  const lenCompletedTodos = todos.filter(todo => !!todo.completed).length;

  let searchedTodos = [];

  let showCompletedTaskText = lenCompletedTodos == 0;


  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    showCompletedTaskText = true;
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchedText = searchValue.toLowerCase();
      return todoText.includes(searchedText);
    })
  }

  const addTodos = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false
    })
    saveTodos(newTodos);
  }

  const completeTodos = (text, itemChecked) => {
    const todoIndex = todos.findIndex(todo => todo.text == text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = itemChecked;
    saveTodos(newTodos);
  }

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text == text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      lenCompletedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodos,
      completeTodos,
      deleteTodos,
      showCompletedTaskText,
      openModal,
      setOpenModal
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };