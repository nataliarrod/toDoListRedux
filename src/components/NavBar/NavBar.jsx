import React from "react";
import useStyles from "./styles";

const NavBar = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <h1> to do app </h1>
    </header>
  );
};

export default NavBar;