import React from "react";
import useLocalStorage from './useLocalStorage';

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V2', []);
  const [searchValue, setSearchValue] = React.useState('');

  const totalTodos = todos.length;
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
    const id = crypto.randomUUID();
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
      id,
    })
    saveTodos(newTodos);
  }

  const getTodo = (id) => {
    return todos.find(todo => todo.id == id);
  }

  const completeTodos = (id, itemChecked) => {
    const todoIndex = todos.findIndex(todo => todo.id == id);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = itemChecked;
    saveTodos(newTodos);
  }

  const deleteTodos = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id == id);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  const editTodos = (id, newText) => {
    const todoIndex = todos.findIndex(todo => todo.id == id);

    const newTodos = [...todos];
    newTodos[todoIndex].text = newText;
    saveTodos(newTodos);
  }

  return {
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
    editTodos,
    getTodo,
    showCompletedTaskText,
    sincronizeTodos
  }
}

export { useTodos };