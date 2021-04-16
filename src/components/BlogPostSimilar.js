import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
import {
  GridContainer,
  GridItem,
  Card,
  CardHeader,
  CardBody,
  Info,
  Success,
  Danger,
} from "@bennycio/material-ui-pro";

import blog6 from "assets/img/troll.png";
import blog8 from "assets/img/troll.png";
import blog7 from "assets/img/troll.png";

import sectionSimilarStoriesStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionSimilarStoriesStyle.js";

const useStyles = makeStyles(sectionSimilarStoriesStyle);

export default function SectionSimilarStories() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem md={12}>
            <h2 className={classes.title + " " + classes.textCenter}>
              More Stories
            </h2>
            <br />
            <GridContainer>
              <GridItem xs={12} sm={4} md={4}>
                <Card blog>
                  <CardHeader image>
                    <a href="#pablo">
                      <img src={blog6} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: "url(" + blog6 + ")",
                        opacity: "1",
                      }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Info>
                      <h6>Safety</h6>
                    </Info>
                    <h4 className={classes.cardTitle}>
                      <a href="#pablo">Blah Blah Blah Blah</a>
                    </h4>
                    <p className={classes.description}>
                      Hippity doo dah day bee bong bing bang zoo zom lippy lop
                      ze do bop de bop
                      <a href="#pablo"> Read More </a>
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <Card blog>
                  <CardHeader image>
                    <a href="#pablo">
                      <img src={blog6} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: "url(" + blog6 + ")",
                        opacity: "1",
                      }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Info>
                      <h6>Safety</h6>
                    </Info>
                    <h4 className={classes.cardTitle}>
                      <a href="#pablo">Blah Blah Blah Blah</a>
                    </h4>
                    <p className={classes.description}>
                      Hippity doo dah day bee bong bing bang zoo zom lippy lop
                      ze do bop de bop
                      <a href="#pablo"> Read More </a>
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                <Card blog>
                  <CardHeader image>
                    <a href="#pablo">
                      <img src={blog6} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: "url(" + blog6 + ")",
                        opacity: "1",
                      }}
                    />
                  </CardHeader>
                  <CardBody>
                    <Info>
                      <h6>Safety</h6>
                    </Info>
                    <h4 className={classes.cardTitle}>
                      <a href="#pablo">Blah Blah Blah Blah</a>
                    </h4>
                    <p className={classes.description}>
                      Hippity doo dah day bee bong bing bang zoo zom lippy lop
                      ze do bop de bop
                      <a href="#pablo"> Read More </a>
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
