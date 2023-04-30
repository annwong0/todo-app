import { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import "../css/AddTodo.css";

function AddTodo({ createTodo, isLoading }) {
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
          {!isLoading ? (
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
          ) : (
            <LoadingButton loading variant="outlined">
              Submit
            </LoadingButton>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default AddTodo;
