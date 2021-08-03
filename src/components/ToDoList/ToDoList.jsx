import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Grid, List, IconButton, Link } from "@material-ui/core";
import { AddBox } from "@material-ui/icons";
import { TasksContext } from "../../App";
import { createTaskRoute } from "../../utils/constants";
import Task from "../Task";
import useStyles from "./styles";

const ToDoList = () => {
  const classes = useStyles();
  
  const { tasks } = useContext(TasksContext);
  const history = useHistory();

  const addTask = () => {
    history.push(createTaskRoute);
  };

  return (
    <Grid container className={classes.root}>
      <Grid
        item
        align="left"
        onClick={() => addTask()}
        className={classes.addActionContainer}
      >
        <IconButton aria-label="add task">
          <AddBox />
        </IconButton>
        <Link component="button" variant="body2">
          add task
        </Link>
      </Grid>
      <Grid item xs={12} align="center">
        <List>
          {tasks.map((task) => {
            return <Task task={task} />;
          })}
        </List>
      </Grid>
    </Grid>
  );
};

export default ToDoList;