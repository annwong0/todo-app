import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function ActivePanel({ createTodo, todoList, updateTodo }) {
  return (
    <div>
      <AddTodo createTodo={createTodo} />
      <TodoList todoList={todoList} updateTodo={updateTodo} />
    </div>
  );
}

export default ActivePanel;
