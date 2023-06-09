import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function AllPanel({ todoList, createTodo, updateTodo, isLoading }) {
  return (
    <div>
      <AddTodo createTodo={createTodo} isLoading={isLoading} />
      <TodoList todoList={todoList} updateTodo={updateTodo} />
    </div>
  );
}

export default AllPanel;
