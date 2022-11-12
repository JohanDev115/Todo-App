import React from "react";
import './TodoItem.css';
import trashIcon from '../../assets/basura.svg';

function TodoItem(props) {

  return (
    <li className={`TodoItem ${props.completed ? 'TodoItem--checked' : undefined}`}>
      <div className="wrapper" onClick={(evt) => {props.complete(evt.target.checked);}}>
        <input type="checkbox" name="check" id="completed" />
        <label></label>
      </div>
      <p>{props.text}</p>
      <span onClick={props.delete}><img src={trashIcon} alt="Delete task" /></span>
    </li>
  );
}

export { TodoItem };