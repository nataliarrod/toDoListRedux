import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: "40%",
    minWidth: "400px",
    height: "340px",
    textAlign: "center",
    margin: "30px auto",
    backgroundColor: "white",
    boxShadow: "0 0 5px 0 gray",
    borderRadius: "10px",
    padding: "30px"
  },
  textArea: {
    height: "120px"
  },
  buttonsContainer: {
    marginTop: "10px"
  },
  cancel: {
    width: "90px",
    marginRight: "30px"
  },
  add: {
    width: "90px",
    backgroundColor: "#2468D3",
    color: "white",
    "&:hover": {
      backgroundColor: "#205EBF"
    }
  }
}));

export default useStyles;