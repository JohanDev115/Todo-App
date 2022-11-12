import React from "react";
import './EmptyTodos.css'

function EmptyTodos() {
  return (
    <div className="EmptyTodos">
      <h3>You have not created any task yet<p>＞﹏＜</p></h3>
      <p>Press the <b>"+"</b> symbol icon to create your first task</p>
    </div>
  );
}

export { EmptyTodos }