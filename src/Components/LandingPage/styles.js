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
  image2: {
    [theme.breakpoints.up("md")]: {
      marginTop: "30px",
      marginLeft: "100px",
      width: "500px",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "50px",
      marginBottom: "50px",
      width: "300px",
    },
  },
  image3: {
    [theme.breakpoints.up("md")]: {
      marginTop: "30px",
      marginRight: "100px",
      width: "500px",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "50px",
      marginBottom: "50px",
      width: "300px",
    },
  },
  productdesigntext: {
    [theme.breakpoints.up("md")]: {
      margin: "60px",
      marginTop: "250px",
    },
    [theme.breakpoints.down("md")]: {
      margin: "20px",
      marginTop: "120px",
      color: "white",
    },
  },
  section2text: {
    [theme.breakpoints.up("md")]: {
      marginRight: "150px",
    },
  },
  section3text: {
    [theme.breakpoints.up("md")]: {
      marginLeft: "150px",
    },
  },
  circlularicon1: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: "20px",
  },
  circlularicon2: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: "20px",
    [theme.breakpoints.up("md")]: {
      marginLeft: "250px",
    },
  },
  circlularicon3: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: "20px",
    [theme.breakpoints.up("md")]: {
      marginRight: "250px",
    },
  },
  circlularicon4: {
    backgroundColor: "white",
    borderRadius: "50px",
    padding: "20px",
  },
  h2: {
    [theme.breakpoints.up("md")]: {
      fontFamily: "poppins",
      marginTop: "10px",
      marginLeft: "250px",
    },
  },
  h3: {
    [theme.breakpoints.up("md")]: {
      fontFamily: "poppins",
      marginTop: "10px",
      marginRight: "250px",
    },
  },
  ourdesignpara: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  icongrids: {
    textAlign: "center",
    marginBottom: "20px",
  },
  productButtons: {
    marginTop: "30px",
    width: "250px",
    margin: "3px",
    backgroundColor: "white",
    color: "black",
    borderRadius: "5px",
  },
  buttonGrid: {
    paddingBottom: "50px",
    [theme.breakpoints.up("md")]: {
      marginLeft: "150px",
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
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
