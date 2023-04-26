import TodoList from "./TodoList";

function CompletedPanel({ todoList, updateTodo, deleteTodo }) {
  return (
    <div>
      <TodoList
        todoList={todoList}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        isDelete={true}
      />
    </div>
  );
}

export default CompletedPanel;
