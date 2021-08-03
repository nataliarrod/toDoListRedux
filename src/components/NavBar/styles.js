import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    padding: "20px",
    backgroundColor: "#5F80B4",
    color: "white",
    textAlign: "center",
    fontSize: "24px",
    "& h1": {
      margin: 0,
      textTransform: "uppercase"
    },
    "@media only screen and (max-width: 768px)": {
      fontSize: "14px"
    }
  }
}));

export default useStyles;