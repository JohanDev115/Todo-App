import React from "react";
import './TodoItem.css';
import trashIcon from '../../assets/basura.svg';
import editIcon from '../../assets/editar.png';

function TodoItem(props) {
  return (
    <li className={`TodoItem ${props.completed ? 'TodoItem--checked' : undefined}`}>
      <div className="wrapper" onClick={(evt) => {props.complete(evt.target.checked);}}>
        <input type="checkbox" name="check" id="completed" />
        <label></label>
      </div>
      <p>{props.text}</p>
      <span onClick={props.edit}><img src={editIcon} alt="Edit task" /></span>
      <span onClick={props.delete}><img src={trashIcon} alt="Delete task" /></span>
    </li>
  );
}

export { TodoItem };