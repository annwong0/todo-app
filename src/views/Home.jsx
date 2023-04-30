import { useEffect, useState } from "react";
import { Grid, Tabs, Tab, Box, Snackbar, Alert } from "@mui/material";
import moment from "moment/moment";
import AllPanel from "../components/AllPanel";
import ActivePanel from "../components/ActivePanel";
import CompletedPanel from "../components/CompletedPanel";
import Footer from "../components/Footer";
import "../css/Home.css";

function Home() {
  const [tabValue, setTabValue] = useState(0);
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({
    isOpen: false,
    message: "",
    severity: "",
  });

  useEffect(() => {
    readTodoList();
  }, []);

  useEffect(() => {
    readTodoList();
  }, [tabValue]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  /**
   * read todo list
   */
  const readTodoList = () => {
    setIsLoading(true);
    let curTodoList = JSON.parse(localStorage.getItem("todo"));
    if (!curTodoList) {
      localStorage.setItem("todo", JSON.stringify([]));
    }
    setTodoList(curTodoList ? curTodoList : []);
    setIsLoading(false);
  };
  /**
   * create todo by reading text
   * @param {String} text
   */
  const createTodo = (text) => {
    setIsLoading(true);
    const todoObj = {
      id: moment().format(),
      text: text,
      active: true,
    };
    let oldTodoList = JSON.parse(localStorage.getItem("todo"));
    if (oldTodoList.length > 0) {
      localStorage.setItem("todo", JSON.stringify([todoObj, ...oldTodoList]));
    } else {
      localStorage.setItem("todo", JSON.stringify([todoObj]));
    }
    setIsLoading(false);
    setToast({
      isOpen: true,
      message: "A todo is successfully created",
      severity: "success",
    });
    readTodoList();
  };
  /**
   * update a todo
   * @param {*} event
   * @param {String} id
   */
  const updateTodo = (checked, id) => {
    setIsLoading(true);
    let oldTodoList = JSON.parse(localStorage.getItem("todo"));
    let todoUpdated = oldTodoList.filter((todo) => todo.id === id)[0];
    oldTodoList = oldTodoList.filter((todo) => todo.id !== id);
    todoUpdated.active = !checked;
    if (checked) {
      localStorage.setItem(
        "todo",
        JSON.stringify([...oldTodoList, todoUpdated])
      );
    } else {
      localStorage.setItem(
        "todo",
        JSON.stringify([todoUpdated, ...oldTodoList])
      );
    }
    setIsLoading(false);
    setToast({
      isOpen: true,
      message: "The todo is successfully updated",
      severity: "success",
    });
    readTodoList();
  };

  /**
   * delete a todo
   */
  const deleteTodo = (id) => {
    // TODO
    console.log(id);
    setIsLoading(true);

    if (id) {
      let oldTodoList = JSON.parse(localStorage.getItem("todo"));
      localStorage.setItem(
        "todo",
        JSON.stringify(oldTodoList.filter((todo) => todo.id !== id))
      );
    } else {
      localStorage.removeItem("todo");
    }
    setIsLoading(false);
    setToast({
      isOpen: true,
      message: "The todo is successfully deleted",
      severity: "success",
    });
    readTodoList();
  };
  /**
   * close a toast
   */
  const handleToastClose = () => {
    setToast({ isOpen: false, message: "", severity: "" });
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <div>
      <Grid container>
        <Grid item xs={0} md={3}></Grid>
        <Grid item xs={12} md={6}>
          <div className="header">#todo</div>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={tabValue} onChange={handleTabChange} centered>
              <Tab label="All" id="tab-0" />
              <Tab label="Active" id="tab-1" />
              <Tab label="Completed" id="tab-2" />
            </Tabs>
            <div id="tab-0" hidden={tabValue !== 0} className="content">
              <AllPanel
                todoList={todoList}
                createTodo={createTodo}
                updateTodo={updateTodo}
                isLoading={isLoading}
              />
            </div>
            <div id="tab-1" hidden={tabValue !== 1} className="content">
              <ActivePanel
                todoList={todoList.filter((todo) => todo.active === true)}
                updateTodo={updateTodo}
                isLoading={isLoading}
              />
            </div>
            <div id="tab-2" hidden={tabValue !== 2} className="content">
              <CompletedPanel
                todoList={todoList.filter((todo) => todo.active === false)}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
              />
            </div>
          </Box>
        </Grid>
        <Grid item xs={0} md={3}></Grid>
      </Grid>
      <Footer />
      <Snackbar
        open={toast.isOpen}
        onClose={handleToastClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={3000}
        sx={{ bottom: "60px !importmant" }}
      >
        <Alert severity={toast.severity} sx={{ width: "100%" }}>
          {toast.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Home;
