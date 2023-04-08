import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function AllPanel({todo, handleAddTodo}) {
    return (
        <div>
            <AddTodo />
            <TodoList/>
        </div>
    )
}

export default AllPanel;