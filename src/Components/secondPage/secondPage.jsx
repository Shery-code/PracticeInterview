import React, { useEffect, useState } from "react";

import { Container } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import Header from "../Header/Header";
import "../../index.js";
import "../../index.css";

import { useStyles } from "./styles";
import Form from "../Form/Form.jsx";

const LandingPage = () => {
  const classes = useStyles();
  const [data, setData] = useState();

  useEffect(async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json[1]));
  }, []);
  return (
    <div className={classes.upperDiv}>
      <Header
        title={data?.title}
        description={data?.body}
        image={"images/header-image-2.png"}
      />
      <Link className={classes.link} to="/">
        <a>Go back</a>
      </Link>
      <Container style={{ marginTop: "100px", marginBottom: "100px" }}>
        <Form />
      </Container>
    </div>
  );
};
export default LandingPage;
