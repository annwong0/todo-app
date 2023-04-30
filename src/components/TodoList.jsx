import { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  Box,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "../css/TodoList.css";

function TodoList({ updateTodo, deleteTodo, todoList, isDelete }) {
  const [dialog, setDialog] = useState({
    isOpen: false,
    message: "",
    id: null,
  });

  const handleDialogOpen = (message, id = null) => {
    setDialog({ isOpen: true, message: message, id: id });
  };

  const handleDialogClose = () => {
    setDialog({ isOpen: false, message: "", id: null });
  };

  const handleDeleteButtonClick = (id) => {
    deleteTodo(id);
    handleDialogClose();
  };

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
        {todoList ? (
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
                <IconButton
                  onClick={() =>
                    handleDialogOpen(
                      "Are you sure you want to delete this todo?",
                      todo.id
                    )
                  }
                >
                  <DeleteOutlinedIcon />
                </IconButton>
              )}
            </div>
          ))
        ) : (
          <div>
            <small>There is no any completed todo.</small>
          </div>
        )}
      </Box>
      {isDelete && todoList.length > 0 && (
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
            onClick={() =>
              handleDialogOpen("Are you sure you want to delete all todos?")
            }
          >
            Delete All
          </Button>
        </Box>
      )}
      <Dialog open={dialog.isOpen} onClose={handleDialogClose}>
        <DialogContent>
          <DialogContent>
            <DialogContentText>{dialog.message}</DialogContentText>
          </DialogContent>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={() => handleDeleteButtonClick(dialog.id)}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default TodoList;
