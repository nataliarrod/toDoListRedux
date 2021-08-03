import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
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
      name,
      description
    };
    setTasks([...tasks, newTask]);
  };

  const handleCancel = () => {
    console.log("dsad");
    history.push("/");
  };

  return (
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
          onClick={() => handleSubmit()}
          variant="contained"
          className={classes.add}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
};

export default TaskForm;