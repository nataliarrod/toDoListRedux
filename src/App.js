import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { createContext, useState } from "react";
import ToDoList from "./pages/ToDoList";
import CreateTask from "./pages/CreateTask";
import NavBar from "./components/NavBar";
import { toDoListRoute, createTaskRoute } from "./utils/constants";
import "./styles.css";

export const TasksContext = createContext();

export default function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <Router>
      <TasksContext.Provider
        value={{
          tasks,
          setTasks
        }}
      >
        <NavBar />
        <Switch>
          <Route exact path={toDoListRoute}>
            <ToDoList />
          </Route>
          <Route exact path={createTaskRoute}>
            <CreateTask />
          </Route>
        </Switch>
      </TasksContext.Provider>
    </Router>
  );
}
