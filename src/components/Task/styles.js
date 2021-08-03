import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "white",
    boxShadow: "0 0 5px 0 gray",
    borderRadius: "10px",
    marginLeft: "13px",
    marginTop:"16px",
    padding: "10px 8px 15px 15px",
    '& .MuiListItemText-root': {
      marginLeft: "16px",
    },
  },
  strikeThrough: {
    textDecoration: "line-through"
  },
  w100: {
    width: "100%",
  },
}));

export default useStyles;