import React from "react";
import './TodosError.css';

function TodosError(props) {
  return (
    <p className="error">{props.error}</p>
  );
}

export { TodosError }