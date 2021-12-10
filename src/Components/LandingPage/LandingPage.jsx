import React, { useEffect, useState } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "../../index.js";
import "../../index.css";

import { useStyles } from "./styles";

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
        title={"Product Design"}
        description={
          "Our multifaceted apps are custom built and developed to support multiple platforms, including both android and IOS, making apps accessible for all"
        }
        image={"images/ProductDesign.png"}
      />
      <Link className={classes.link} to="/secondPage">
        <a>Second Page</a>
      </Link>
      <div style={{ backgroundColor: "#F7FAFC" }}>
        <Grid container style={{ marginTop: "100px" }}>
          <Grid item xs={12} md={6}>
            <center>
              <img className={classes.image2} src="images/morethanvisual.png" />
            </center>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography className={classes.section2text}>
              <h2 style={{ marginLeft: "10px", marginBottom: "20px" }}>
                More than visual design, more <br /> than interactions
              </h2>
              <p style={{ margin: "10px", color: "#B5B6BD" }}>
                We take pride in our craft, drawing on our deep expertise in
                design our product design team cares for user's experience over
                the entire customer journey at every touchpoint with your
                company
              </p>{" "}
              <br />
              <p style={{ margin: "10px", color: "#B5B6BD" }}>
                We shephered your product through the entire design process.
              </p>{" "}
              <br />
              <p style={{ margin: "10px", color: "#B5B6BD" }}>
                We also collaborate with our software engineering team to ensure
                our designs are technically feasible within the comstraints of
                the project. At the same time we are watching for innovative new
                technologies that can make the experience more seamless.
              </p>
            </Typography>
          </Grid>
        </Grid>
        <Typography style={{ marginTop: "100px" }}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Our Design Process
          </h2>
          <p style={{ textAlign: "center", color: "#B5B6BD", margin: "20px" }}>
            Every decision we make is informed and goal oriented with users
            journey in mind.
          </p>
        </Typography>
        <div style={{ marginTop: "50px" }}>
          <Grid container>
            <Grid className={classes.icongrids} item xs={12} md={12}>
              <a>
                <img
                  className={classes.circlularicon1}
                  src="images/discovery.svg"
                />
              </a>
              <br />
              <h3 style={{ fontFamily: "poppins", marginTop: "10px" }}>
                1. Discovery
              </h3>
            </Grid>
            <Grid className={classes.icongrids} item xs={12} md={4}>
              <a>
                <img
                  className={classes.circlularicon2}
                  src="images/research-and-project-estimation.svg"
                />
              </a>
              <h3
                style={{ fontFamily: "poppins", marginTop: "10px" }}
                className={classes.h2}
              >
                2. Research + Project <br />
                Estimation
              </h3>
            </Grid>
            <Grid item xs={12} md={4}>
              <p
                className={classes.ourdesignpara}
                style={{ margin: "50px", color: "#A0A1A9" }}
              >
                We sit down with you to discuss your business goals and your
                target audience. We determine the problems you are trying to
                solve and together we define the key features of the
                app/software you are trying to build.
              </p>
            </Grid>
            <Grid className={classes.icongrids} item xs={12} md={4}>
              <a>
                <img
                  className={classes.circlularicon3}
                  src="images/wireframe.svg"
                />
              </a>
              <h3
                style={{ fontFamily: "poppins", marginTop: "10px" }}
                className={classes.h3}
              >
                3. UX wireframes
              </h3>
            </Grid>
            <Grid
              className={classes.icongrids}
              style={{ textAlign: "center" }}
              item
              xs={12}
              md={12}
            >
              <a>
                <img className={classes.circlularicon4} src="images/ui.svg" />
              </a>
              <h3 style={{ fontFamily: "poppins", marginTop: "10px" }}>
                4. UI application
              </h3>
            </Grid>
          </Grid>
        </div>
        <div style={{ backgroundColor: "#46C8E0", marginTop: "50px" }}>
          <Typography>
            <h2
              style={{
                textAlign: "center",
                color: "white",
                paddingTop: "50px",
              }}
            >
              Product Design Services
            </h2>
          </Typography>
          <Grid className={classes.buttonGrid} item xs={12} md={12}>
            <Button className={classes.productButtons} variant="contained">
              User Experience Design
            </Button>
            <Button className={classes.productButtons} variant="contained">
              Visual Design
            </Button>
            <Button className={classes.productButtons} variant="contained">
              Prototyping
            </Button>
            <Button className={classes.productButtons} variant="contained">
              Content Design
            </Button>
            <Button className={classes.productButtons} variant="contained">
              Design Systems
            </Button>
            <Button className={classes.productButtons} variant="contained">
              Multimodal UI
            </Button>
          </Grid>
        </div>
        <div style={{ marginTop: "100px" }}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography className={classes.section3text}>
                <h2
                  style={{
                    marginTop: "30px",
                    marginLeft: "10px",
                    marginBottom: "20px",
                  }}
                >
                  User Experience Design
                </h2>
                <p style={{ margin: "10px", color: "#B5B6BD" }}>
                  Even after the product strategy phase, we maintain a
                  relentless focus on our business goals. Our product design
                  team ensures the product will solve your challenge while
                  meeting your user's need.
                </p>{" "}
                <br />
                <h3
                  style={{
                    marginLeft: "10px",
                    marginBottom: "20px",
                    color: "#5F606A",
                  }}
                >
                  Tactics
                </h3>
                <Grid style={{ marginLeft: "10px" }} container>
                  <Grid
                    style={{ marginTop: "20px", color: "#B5B6BD" }}
                    item
                    xs={12}
                    md={6}
                  >
                    Behavioral Data Analytics
                  </Grid>
                  <Grid
                    style={{ marginTop: "20px", color: "#B5B6BD" }}
                    xs={12}
                    item
                    md={6}
                  >
                    Wireframe
                  </Grid>
                  <Grid
                    style={{ marginTop: "20px", color: "#B5B6BD" }}
                    xs={12}
                    item
                    md={6}
                  >
                    Personalization Architecture
                  </Grid>
                  <Grid
                    style={{ marginTop: "20px", color: "#B5B6BD" }}
                    xs={12}
                    item
                    md={6}
                  >
                    User Flow
                  </Grid>
                </Grid>
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <center>
                <img
                  className={classes.image3}
                  src="images/userexperience.svg"
                />
              </center>
            </Grid>
          </Grid>
        </div>
        <Grid container style={{ marginTop: "50px" }}>
          <Grid item xs={12} md={6}>
            <center>
              <img className={classes.image2} src="images/visual-design.svg" />
            </center>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography className={classes.section2text}>
              <h2
                style={{
                  marginTop: "30px",
                  marginLeft: "10px",
                  marginBottom: "20px",
                }}
              >
                Visual Design
              </h2>
              <p style={{ margin: "10px", color: "#B5B6BD" }}>
                Yes, we make your software product beautiful. We also make it
                easy-to-use, compelling and delightful
              </p>{" "}
              <br />
              <h3
                style={{
                  marginLeft: "10px",
                  marginBottom: "20px",
                  color: "#5F606A",
                }}
              >
                Tactics
              </h3>
              <Grid style={{ marginLeft: "10px" }} container>
                <Grid
                  style={{ marginTop: "20px", color: "#B5B6BD" }}
                  item
                  xs={12}
                  md={6}
                >
                  Design Workshop
                </Grid>
                <Grid
                  style={{ marginTop: "20px", color: "#B5B6BD" }}
                  xs={12}
                  item
                  md={6}
                >
                  Custom Iconography
                </Grid>
                <Grid
                  style={{ marginTop: "20px", color: "#B5B6BD" }}
                  xs={12}
                  item
                  md={6}
                >
                  Virtual design element
                </Grid>
                <Grid
                  style={{ marginTop: "20px", color: "#B5B6BD" }}
                  xs={12}
                  item
                  md={6}
                >
                  UI element
                </Grid>
                <Grid
                  style={{ marginTop: "20px", color: "#B5B6BD" }}
                  xs={12}
                  item
                  md={6}
                >
                  Typography system
                </Grid>
                <Grid
                  style={{ marginTop: "20px", color: "#B5B6BD" }}
                  xs={12}
                  item
                  md={6}
                >
                  Style guide
                </Grid>
              </Grid>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default LandingPage;
