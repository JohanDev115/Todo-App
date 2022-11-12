import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
  const [todoExist, setTodoExist] = React.useState(false);
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const { addTodos, setOpenModal, searchedTodos } = React.useContext(TodoContext);

  const change = (evt) => {
    setNewTodoValue(evt.target.value);
  }

  const cancel = () => {
    setOpenModal(false);
  }

  const create = (evt) => {
    evt.preventDefault();
    const exist = !!searchedTodos.filter(todo => todo.text.trim() == newTodoValue.trim()).length;
    if (exist) {
      setTodoExist(true);
    } else {
      addTodos(newTodoValue);
      setOpenModal(false);
    }
  }

  return (
    <form className="TodoForm" onSubmit={create}>
      <h2>Create task</h2>
      {(todoExist) && <p>This task already exist</p>}
      <textarea autoFocus value={newTodoValue} onChange={change} cols="30" rows="5" placeholder="Follow JohanDev on github."></textarea>
      <div>
        <button className="button button--cancel" type="button" onClick={cancel}>Cancel</button>
        <button className="button button--create" type="submit" disabled={!newTodoValue}>Create</button>
      </div>
    </form>
  );
}

export { TodoForm };