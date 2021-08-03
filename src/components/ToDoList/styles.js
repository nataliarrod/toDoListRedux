import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: "40%",
    minWidth: "400px",
    margin: "20px auto",
    '& .MuiListItem-container': {
      margin: '20px',
    },
  },
  addActionContainer: {
    cursor: "pointer"
  }
}));

export default useStyles;