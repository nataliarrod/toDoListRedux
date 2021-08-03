import React, { useState, useContext } from "react";
import {
  Checkbox,
  ListItem,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { TasksContext } from "../../App";
import useStyles from "./styles";

const Task = ({ task }) => {
  const classes = useStyles();
  const [taskCompleted, setTaskCompleted] = useState(false);
  const { tasks, setTasks } = useContext(TasksContext);
  const labelId = `checkbox-task-list-${task.id}`;

  const deleteTask = () => {
    const newTasks = tasks.filter(t => t.id !== task.id);
    setTasks(newTasks);
  };

  return (
    <ListItem key={`task-${task.id}`} className={classes.root}>
      <Checkbox
        edge="end"
        onChange={() => setTaskCompleted(!taskCompleted)}
        checked={taskCompleted}
        inputProps={{ "aria-labelledby": labelId }}
        className={classes.checkbox}
      />
      <ListItemText
        id={labelId}
        primary={task.description}
        className={taskCompleted ? classes.strikeThrough : ""}
      />
      <IconButton aria-label="delete" onClick={deleteTask}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default Task;