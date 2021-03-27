import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import {
  GridContainer,
  GridItem,
  Parallax,
  Card,
  CardAvatar,
  CardBody,
  CardFooter,
  Button,
  InfoArea,
} from "@bennycio/material-ui-pro";
// sections for this page
import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.js";

import featuresStyle from "assets/jss/material-kit-pro-react/views/pricingSections/featuresStyle.js";

import pricingStyle from "assets/jss/material-kit-pro-react/views/pricingSections/pricingStyle.js";

import processStyle from "assets/jss/material-kit-pro-react/views/processStyle.js";

import Troll from "assets/img/troll.png";
import Benny from "assets/img/Benny.jpg";
import FaceKendall from "assets/img/faces/kendall.jpg";
import FaceAvatar from "assets/img/faces/avatar.jpg";

import CardMembership from "@material-ui/icons/CardMembership";
import CardGiftCard from "@material-ui/icons/CardGiftcard";
import AttachMoney from "@material-ui/icons/AttachMoney";
import QuestionAnswer from "@material-ui/icons/QuestionAnswer";
import SmoothEntry from "components/SmoothEntry";

const useStyles = makeStyles(aboutUsStyle);

const AboutUs = () => {
  const classes = useStyles();
  return (
    <>
      <Parallax image={Troll} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>About Us</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionProcess />
          <SectionPricing />
          <SectionFeatures />
        </div>
      </div>
    </>
  );
};

const useStylesProcess = makeStyles(processStyle);

const SectionProcess = () => {
  const classes = useStylesProcess();
  return (
    <div style={{ paddingTop: "8%" }}>
      <h1 className={classes.textCenter}>From Farm to You</h1>
      <GridContainer>
        <GridItem xs={12} sm={6} md={6}>
          <InfoArea
            title="Farming"
            description="Farming is the most important part of the process because you need hemp to make a product that is designed around the effects of hemp extract."
            icon={AttachMoney}
            iconColor="success"
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <SmoothEntry>
            <img className={classes.image} src={Troll} alt="Farming" />
          </SmoothEntry>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <SmoothEntry>
            <img className={classes.image} src={Troll} alt="Farming" />
          </SmoothEntry>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <InfoArea
            title="Farming"
            description="Farming is the most important part of the process because you need hemp to make a product that is designed around the effects of hemp extract."
            icon={AttachMoney}
            iconColor="success"
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <InfoArea
            title="Farming"
            description="Farming is the most important part of the process because you need hemp to make a product that is designed around the effects of hemp extract."
            icon={AttachMoney}
            iconColor="success"
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <SmoothEntry>
            <img className={classes.image} src={Troll} alt="Farming" />
          </SmoothEntry>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <SmoothEntry>
            <img className={classes.image} src={Troll} alt="Farming" />
          </SmoothEntry>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <InfoArea
            title="Farming"
            description="Farming is the most important part of the process because you need hemp to make a product that is designed around the effects of hemp extract."
            icon={AttachMoney}
            iconColor="success"
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <InfoArea
            title="Farming"
            description="Farming is the most important part of the process because you need hemp to make a product that is designed around the effects of hemp extract."
            icon={AttachMoney}
            iconColor="success"
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <SmoothEntry>
            <img className={classes.image} src={Troll} alt="Farming" />
          </SmoothEntry>
        </GridItem>
      </GridContainer>
    </div>
  );
};

const useStylesPricing = makeStyles(pricingStyle);

function SectionPricing() {
  const classes = useStylesPricing();
  return (
    <div className={classes.pricingSection}>
      <h1 className={classes.textCenter}>Whats the Difference?</h1>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <SmoothEntry>
            <Card plain pricing color="primary">
              <CardBody pricing>
                <h4
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  Odorless
                </h4>
                <h1 className={classes.cardTitleWhite}>
                  <small>$</small>51 <small>.99</small>
                </h1>
                <ul>
                  <li>
                    <b>2/3</b> oz size
                  </li>
                  <li>
                    <b>No</b> odor
                  </li>
                  <li>
                    <b>Powerful</b> sensations
                  </li>
                  <li>
                    <b>Lab Tested</b> and Safe
                  </li>
                </ul>
                <Button href="#pablo" color="white" round>
                  Learn More
                </Button>
              </CardBody>
            </Card>
          </SmoothEntry>
        </GridItem>
        <GridItem md={4} sm={4}>
          <SmoothEntry>
            <Card raised pricing color="success">
              <CardBody pricing>
                <h4
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  Minty
                </h4>
                <h1 className={classes.cardTitleWhite}>
                  <small>$</small>55 <small>.99</small>
                </h1>
                <ul>
                  <li>
                    <b>2/3</b> oz size
                  </li>
                  <li>
                    <b>Minty Fresh</b> odor
                  </li>
                  <li>
                    <b>Powerful</b> sensations
                  </li>
                  <li>
                    <b>Lab Tested</b> and Safe
                  </li>
                </ul>
                <Button href="#pablo" color="white" round>
                  Learn More
                </Button>
              </CardBody>
            </Card>
          </SmoothEntry>
        </GridItem>
        <GridItem md={4} sm={4}>
          <SmoothEntry>
            <Card plain pricing color="danger">
              <CardBody pricing>
                <h4
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  Extreme
                </h4>
                <h1 className={classes.cardTitleWhite}>
                  <small>$</small>72 <small>.99</small>
                </h1>
                <ul>
                  <li>
                    <b>2/3</b> oz size
                  </li>
                  <li>
                    <b>Minty Fresh</b> odor
                  </li>
                  <li>
                    <b>Very Powerful</b> sensations
                  </li>
                  <li>
                    <b>Lab Tested</b> and Safe
                  </li>
                </ul>
                <Button href="#pablo" color="white" round>
                  Learn More
                </Button>
              </CardBody>
            </Card>
          </SmoothEntry>
        </GridItem>
      </GridContainer>
    </div>
  );
}

const useStylesFeatures = makeStyles(featuresStyle);

function SectionFeatures() {
  const classes = useStylesFeatures();
  return (
    <div className={classes.featuresSection}>
      <div className={classes.textCenter}>
        <h3 className={classes.title}>Frequently Asked Questions</h3>
      </div>
      <GridContainer>
        <GridItem md={4} sm={4} className={classes.mlAuto}>
          <InfoArea
            title="Is this safe to use?"
            description="Yes you and your little friends have nothing to worry about."
            icon={CardMembership}
            iconColor="info"
          />
        </GridItem>
        <GridItem md={4} sm={4} className={classes.mrAuto}>
          <InfoArea
            title="Are sensations local or entire body?"
            description="Our hemp extract is strong enough to extend to the nearest person alongside your entire body."
            icon={CardGiftCard}
            iconColor="success"
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4} className={classes.mlAuto}>
          <InfoArea
            title="How many uses does one bottle get me?"
            description="Well that depends on how much you use, some people like our product 
            so much they go through one bottle a day but an average 
            person can get probably 120 uses per bottle."
            icon={AttachMoney}
            iconColor="success"
          />
        </GridItem>
        <GridItem md={4} sm={4} className={classes.mrAuto}>
          <InfoArea
            title="I have some more questions, where do I ask?"
            description="Check out our contact page and send us a message with any questions you have 
            and we will get back to you as quick as possible."
            icon={QuestionAnswer}
            iconColor="rose"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default AboutUs;
