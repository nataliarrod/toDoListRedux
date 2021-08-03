import React, { useState } from "react";
import {
  Checkbox,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import useStyles from "./styles";

const Task = ({ task }) => {
  const classes = useStyles();
  const [taskCompleted, setTaskCompleted] = useState(false);
  const labelId = `checkbox-task-list-${task.id}`;

  return (
    <ListItem key={`task-${task.id}`} className={classes.root}>
      <ListItemText
        id={labelId}
        primary={task.name}
        className={taskCompleted ? classes.strikeThrough : ""}
      />
      <ListItemSecondaryAction>
        <Checkbox
          edge="end"
          onChange={() => setTaskCompleted(!taskCompleted)}
          checked={taskCompleted}
          inputProps={{ "aria-labelledby": labelId }}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Task;