import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "white",
    boxShadow: "0 0 5px 0 gray",
    borderRadius: "10px",
    marginLeft: "13px",
    padding: "10px 0px 15px 15px",
  },
  strikeThrough: {
    textDecoration: "line-through"
  }
}));

export default useStyles;