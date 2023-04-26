import {
  Checkbox,
  FormControlLabel,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "../css/TodoList.css";

function TodoList({ updateTodo, deleteTodo, todoList, isDelete }) {
  return (
    <div>
      <Box
        sx={{
          overflowY: "scroll",
          overflowX: "hidden",
          maxHeight: "55vh",
          height: "fit-content",
        }}
      >
        {todoList &&
          todoList.map((todo) => (
            <div className="checkbox-container">
              <FormControlLabel
                key={todo.id}
                label={todo.text}
                control={
                  <Checkbox
                    defaultChecked={!todo.active}
                    onChange={(event) =>
                      updateTodo(event.target.checked, todo.id)
                    }
                  />
                }
              />
              {isDelete && deleteTodo && (
                <IconButton onClick={(event) => deleteTodo(todo.id)}>
                  <DeleteOutlinedIcon />
                </IconButton>
              )}
            </div>
          ))}
      </Box>
      {isDelete && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingTop: "15px",
          }}
        >
          <Button
            color="error"
            variant="contained"
            disableElevation
            startIcon={<DeleteOutlinedIcon />}
          >
            Delete All
          </Button>
        </Box>
      )}
    </div>
  );
}

export default TodoList;
