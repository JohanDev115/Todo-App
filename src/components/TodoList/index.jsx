import React from "react";
import './TodoList.css';

function TodoList(props) {
  return (
    <section className="TodoList">  
      {props.error && props.onError()};
      {props.loading && props.onLoading()};
      {(!props.loading && !props.totalTodos) && props.onEmpty()}
      {(!props.loading && !props.searchedTodos.length && props.totalTodos) && props.onNoResults()}

      {!props.loading && props.searchedTodos.filter(todo => !todo.completed).map(props.render || props.children)}

      <h2 className={props.showCompletedTaskText ? 'completedTasks--show' : undefined}>Completed Tasks</h2>
      
      {!props.loading && props.searchedTodos.filter(todo => todo.completed).map(props.render || props.children)}      
    </section>
  );
}

export { TodoList };