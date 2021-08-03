import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import { Grid, TextField, Button } from "@material-ui/core";
import { TasksContext } from "../../App";
import useStyles from "./styles";

const TaskForm = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { tasks, setTasks } = useContext(TasksContext);
  const history = useHistory();

  const handleSubmit = () => {
    const newTask = {
      id: uuid(),
      name,
      description,
    };
    setTasks([...tasks, newTask]);
    history.push("/");
  };

  const handleCancel = () => {
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12}>
          <TextField
            name="taskName"
            fullWidth
            className={classes.textField}
            label="Task Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="taskDescription"
            multiline
            rows={5}
            fullWidth
            className={classes.textArea}
            label="Task Description"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} className={classes.buttonsContainer}>
          <Button
            onClick={() => handleCancel()}
            variant="contained"
            className={classes.cancel}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            className={classes.add}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TaskForm;