import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import { GridContainer, GridItem, Quote } from "@bennycio/material-ui-pro";

import blog4 from "assets/img/examples/blog4.jpg";
import blog3 from "assets/img/examples/blog3.jpg";
import blog1 from "assets/img/examples/blog1.jpg";

import sectionTextStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionTextStyle.js";

const useStyles = makeStyles(sectionTextStyle);

const BlogText = ({
  content,
  images,
  quote,
  subheader,
  quoter,
  secondaryContent,
}) => {
  const classes = useStyles();
  const imgClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>{subheader}</h3>
          <p>{content}</p>
          <Quote
            textClassName={classes.quoteText}
            text={"“" + quote + "”"}
            author={quoter}
          />
        </GridItem>
        <GridItem xs={12} sm={10} md={10} className={classes.section}>
          <GridContainer>
            {images.map((img) => {
              return (
                <GridItem
                  key={img}
                  xs={12}
                  sm={12 / images.length}
                  md={12 / images.length}
                >
                  <img src={img} alt={subheader} className={imgClasses} />
                </GridItem>
              );
            })}
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={8} md={8}>
          <p style={{ paddingTop: "25px" }}>{secondaryContent}</p>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default BlogText;
