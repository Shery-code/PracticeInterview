import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  upperDiv: {
    [theme.breakpoints.up("md")]: {
      backgroundColor: "#F7FAFC",
    },
    [theme.breakpoints.down("md")]: {
      backgroundColor: "#253192",
      height: "400px",
    },
  },
  image1: {
    [theme.breakpoints.up("md")]: {
      width: "650px",
      position: "relative",
      float: "right",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  link: {
    [theme.breakpoints.up("md")]: {
      textDecoration: "none",
      color: "black",
      marginLeft: "60px",
      border: "1px solid black",
      borderRadius: "5px",
      padding: "10px",
    },
    [theme.breakpoints.down("md")]: {
      textDecoration: "none",
      color: "white",
      marginLeft: "20px",
      border: "1px solid white",
      borderRadius: "5px",
      padding: "10px",
    },
  },
}));
export { useStyles };
