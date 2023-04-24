import { Checkbox, FormControlLabel, Box } from "@mui/material";

function TodoList({updateTodo, todoList}) {
    return (
        <div>
            <Box sx={{ padding: '10px 0'}}>
                {todoList && todoList.map(todo => (
                    <FormControlLabel 
                        key={todo.id} 
                        control={<Checkbox defaultChecked={!todo.active} onChange={event => updateTodo(todo.id)}/>} 
                        label={todo.text} 
                        sx={{width: '100%'}}
                    />
                ))}
            </Box>
        </div>
    )
}

export default TodoList;