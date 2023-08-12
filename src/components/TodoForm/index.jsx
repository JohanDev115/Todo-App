import React from "react";
import './TodoForm.css';
import { useNavigate } from "react-router-dom";

function TodoForm(props) {

  const navigate = useNavigate();

  const [newTodoValue, setNewTodoValue] = React.useState(props.currentValue);

  const change = (evt) => {
    setNewTodoValue(evt.target.value);
  }

  const cancel = () => {
    navigate('/')
  }

  const create = (evt) => {
    evt.preventDefault();
    props.submitEvent(newTodoValue);
    navigate('/')
  }

  return (
    <form className="TodoForm" onSubmit={create}>
      <h2>{props.title}</h2>
      <textarea autoFocus value={newTodoValue} onChange={change} cols="30" rows="8" placeholder="Follow JohanDev on github."></textarea>
      <div>
        <button className="button button--cancel" type="button" onClick={cancel}>Cancel</button>
        <button className="button button--create" type="submit" disabled={!newTodoValue}>{props.submitText}</button>
      </div>
    </form>
  );
}

export { TodoForm };