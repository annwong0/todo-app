import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function AllPanel({ todoList, createTodo, updateTodo }) {
  return (
    <div>
      <AddTodo todoList={todoList} createTodo={createTodo} />
      <TodoList todoList={todoList} updateTodo={updateTodo} />
    </div>
  );
}

export default AllPanel;
