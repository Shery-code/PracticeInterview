import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

const Header = (props) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <div className={classes.productdesigntext}>
          <Typography>
            <h1 style={{ marginBottom: "20px" }}>{props.title}</h1>
            <p style={{ color: "#B5B6BD" }}>{props.description}</p>
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <img className={classes.image1} src={props.image} />
      </Grid>
    </Grid>
  );
};

export default Header;
