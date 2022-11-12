import React from "react";
import './TodosLoading.css'

function TodosLoading() {
  return (
    <div className="loadingTodo">
      <div className="LoadingTodo__container">
        <span></span>
        <p></p>
        <span></span>
      </div>
      <div className="LoadingTodo__container">
        <span></span>
        <p></p>
        <span></span>
      </div>
      <div className="LoadingTodo__container">
        <span></span>
        <p></p>
        <span></span>
      </div>
    </div>
  );
}

export { TodosLoading }