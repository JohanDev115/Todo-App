import { useLocation, useParams } from "react-router-dom";
import { TodoForm } from "../../Components/TodoForm";
import { useTodos } from "../../Hooks/useTodos";

function EditTodo() {

  const location = useLocation();
  const { id } = useParams();

  const { loading, editTodos, getTodo } = useTodos();

  let currentTodo;

  if (location.state?.todo) {
    currentTodo = location.state.todo;
  } else if (loading) {
    return <p>loading</p>
  } else {
    currentTodo = getTodo(id);
  }

  return (
    <TodoForm title="Edit Task" submitText="Edit" currentValue={currentTodo.text} submitEvent={(newTextValue) => editTodos(id, newTextValue)} />
  )
}

export { EditTodo }