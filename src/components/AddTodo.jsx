import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import '../css/AddTodo.css';
import { useState } from "react";

function AddTodo({createTodo}) {
    const [todoText, setTodoText] = useState('');
    
    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={9}>
                <TextField 
                    label="Add details" 
                    variant="outlined" 
                    size="small" 
                    sx={{ width: '100%'}}
                    autoComplete="off"
                    onChange={(e) => setTodoText(e.target.value)}
                />
                </Grid>
                <Grid item xs={3}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        disableElevation 
                        className="add-btn" 
                        sx={{ width: '100%'}}
                        onClick={event => createTodo(todoText)}
                    >Add</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default AddTodo;