import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { createContext} from "react";
import ToDoList from "./pages/ToDoList";
import CreateTask from "./pages/CreateTask";
import NavBar from "./components/NavBar";
import { toDoListRoute, createTaskRoute } from "./utils/constants";
import "./styles.css";

export const TasksContext = createContext();

export default function App() {

  return (
    <Router>
        <NavBar />
        <Switch>
          <Route exact path={toDoListRoute}>
            <ToDoList />
          </Route>
          <Route exact path={createTaskRoute}>
            <CreateTask />
          </Route>
        </Switch>
    </Router>
  );
}
