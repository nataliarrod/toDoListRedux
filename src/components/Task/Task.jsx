import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import {
  Checkbox,
  ListItem,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteTask } from '../../redux/actions/tasks.actions';
import useStyles from "./styles";

const Task = ({ task }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [taskCompleted, setTaskCompleted] = useState(false);
  const labelId = `checkbox-task-list-${task.id}`;

  const removeTask = (taskId) => {
    dispatch(deleteTask(taskId));
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
        primary={task.name}
        className={taskCompleted ? classes.strikeThrough : ""}
      />
      <IconButton aria-label="delete" onClick={() => removeTask(task.id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default Task;