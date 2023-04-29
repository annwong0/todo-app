import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function ActivePanel({ createTodo, todoList, updateTodo, isLoading }) {
  return (
    <div>
      <AddTodo createTodo={createTodo} isLoading={isLoading} />
      <TodoList todoList={todoList} updateTodo={updateTodo} />
    </div>
  );
}

export default ActivePanel;
