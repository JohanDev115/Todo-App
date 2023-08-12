import { TodoForm } from "../../Components/TodoForm";
import { useTodos } from "../../Hooks/useTodos";

function CreateTodo() {

  const { addTodos } = useTodos();

  return (
    <TodoForm title="Create Task" submitText="Create" currentValue="" submitEvent={(newTextValue) => addTodos(newTextValue)} />
  )
}

export { CreateTodo }