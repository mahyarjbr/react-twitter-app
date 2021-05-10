import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
  },
 
  mainPart: {
    flex: "1",
    backgroundColor:"yellow"
  },
  leftSideBar: {
    width: "25%",
  },
});

export default useStyles;
