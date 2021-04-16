import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
import Favorite from "@material-ui/icons/Favorite";

import {
  Header,
  HeaderLinks,
  Parallax,
  GridContainer,
  GridItem,
  Button,
  Paper,
} from "@bennycio/material-ui-pro";
// sections for this page
import BlogPostText from "components/BlogPostText";
import BlogPostSimilar from "components/BlogPostSimilar";

import blogPostPageStyle from "assets/jss/material-kit-pro-react/views/blogPostPageStyle.js";

import Troll from "assets/img/troll.png";
import blog4 from "assets/img/examples/blog4.jpg";
import blog3 from "assets/img/examples/blog3.jpg";
import blog1 from "assets/img/examples/blog1.jpg";

const useStyles = makeStyles(blogPostPageStyle);

const BlogPostInitial = () => {
  const images = [blog4, blog3, blog1];
  const quote = "Yeah this is the real stuff right here, I'm telling you";
  const quoter = "Kanye West";
  const subheader = "Get it right, the first time...";
  const content =
    "akshdaushdoaiuhdaoisuhdaiushdiauhs diauh sisudhaoisdh aoiushdioahsdioah sdio hishiauhsdoiashio i hiuhdiouah sdiah ioashd iauhdioahsdoa oiu  ius dhai ushdio ashdo iuhdiauhsdoa sd iuh diaushdoia  ioauhsdoiua sdoi hdoi ahdoiahs hdoiadoia hoiahsodiasd aid hdoaiud sdi shu sdiadhioa doi a uashd oiuahdoi auhsd oiasdoiash ouahs oiuah sdoiah soidh asod ho";
  const secondaryContent =
    "alkso asodajo sdjoa sjdoias doasjd oas oas doas doawij doawi djowaid jaowd jaowid jaowid joaw owai djaow doaw jdoaiw oawi jowa jdoawi djaoi oaw jowai awoi djaoi djoaw jao jdaow joawi jdoaw jdoaw djoawij doaj doawij oawj doajd oawi oawj oaw dowai doawjd oajd oaijw doawij oaj oawj doaw oawid joaiwjd oaijs skj daosjd owijd aoi djo";
  const classes = useStyles();
  return (
    <div>
      <Parallax image={Troll} filter="dark">
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem md={8} className={classes.textCenter}>
              <h1 className={classes.title}>
                How Our Product Changes the Market
              </h1>
              <h4 className={classes.subtitle}>
                Yeah you heard me right, changes EVERYTHING!
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Paper>
        <div className={classes.container}>
          <BlogPostText
            quote={quote}
            quoter={quoter}
            images={images}
            content={content}
            secondaryContent={secondaryContent}
            subheader={subheader}
          />
        </div>
        <BlogPostSimilar />
      </Paper>
    </div>
  );
};

export default BlogPostInitial;
