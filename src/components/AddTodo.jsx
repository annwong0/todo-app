import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import "../css/AddTodo.css";
import { useState } from "react";

function AddTodo({ createTodo }) {
  const [todoText, setTodoText] = useState("");

  const handleAddButtonClick = () => {
    createTodo(todoText);
    setTodoText("");
  };

  return (
    <div>
      <Grid container spacing={1} sx={{ marginBottom: "10px" }}>
        <Grid item xs={9}>
          <TextField
            label="Add details"
            variant="outlined"
            size="small"
            sx={{ width: "100%" }}
            autoComplete="off"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            className="add-btn"
            sx={{ width: "100%" }}
            onClick={(event) => handleAddButtonClick()}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default AddTodo;
