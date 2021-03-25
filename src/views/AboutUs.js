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
  Instruction,
} from "@bennycio/material-ui-pro";
// sections for this page
import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.js";

import teamStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/teamStyle.js";

import featuresStyle from "assets/jss/material-kit-pro-react/views/pricingSections/featuresStyle.js";

import pricingStyle from "assets/jss/material-kit-pro-react/views/pricingSections/pricingStyle.js";

import Troll from "assets/img/troll.png";
import Benny from "assets/img/Benny.jpg";
import FaceKendall from "assets/img/faces/kendall.jpg";
import FaceAvatar from "assets/img/faces/avatar.jpg";

import CardMembership from "@material-ui/icons/CardMembership";
import CardGiftCard from "@material-ui/icons/CardGiftcard";
import AttachMoney from "@material-ui/icons/AttachMoney";
import QuestionAnswer from "@material-ui/icons/QuestionAnswer";

const useStyles = makeStyles(aboutUsStyle);

const AboutUs = () => {
  const classes = useStyles();
  return (
    <>
      <Parallax image={require("assets/img/team.jpg")} filter="dark" small>
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
          <SectionPricing />
          <SectionFeatures />
        </div>
      </div>
    </>
  );
};


// TODO make this happen
const SectionProcess = () => {
  const classes = useStyles();
  return (
    <div>
      <h3 className={classes.textCenter}>From Farm to You</h3>
      <Instruction
        title="1. Farm the hemp"
        text={
          <span>
            We farm our hemp sustainably and with care and love so that each
            time we extract something from the hemp we get a little love with it
            too.
          </span>
        }
        image={Troll}
      />
    </div>
  );
};

const useTeamStyles = makeStyles(teamStyle);

const SectionTeam = () => {
  const classes = useTeamStyles();
  return (
    <div className={classes.team}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mrAuto,
            classes.mlAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>Meet The Team</h2>
          <h5 className={classes.description}>
            Our team works tirelessly every day to get you the pain relief you
            need.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img src={Troll} alt="profile-pic" className={classes.img} />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Jonathan BeVier</h4>
              <h6 className={classes.textMuted}>Big Man</h6>
              <p className={classes.cardDescription}>
                Jonathan is an experienced entrepreneur with a passion for being
                cool and also dogs. He has been desiging and producing premium
                hemp products since the beginning of time.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="twitter">
                <i className="fab fa-twitter" />
              </Button>
              <Button href="#pablo" justIcon simple color="facebook">
                <i className="fab fa-facebook" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img
                  src={FaceKendall}
                  alt="profile-pic"
                  className={classes.img}
                />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Jose</h4>
              <h6 className={classes.textMuted}>DESIGNER</h6>
              <p className={classes.cardDescription}>
                The imaginary designer that is feeding information to Benny so
                he can make a half-decent website
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="twitter">
                <i className="fab fa-twitter" />
              </Button>
              <Button href="#pablo" justIcon simple color="linkedin">
                <i className="fab fa-linkedin-in" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img src={Benny} alt="profile-pic" className={classes.img} />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Benny Conn</h4>
              <h6 className={classes.textMuted}>Small Monkey</h6>
              <p className={classes.cardDescription}>
                Benny is a software engineer with a passion for programming
                languages and is currently interested in the language, Golang.
                He is also a jazz musician and enjoys listening to artists like
                John Coltrane and Oscar Peterson.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="twitter">
                <i className="fab fa-twitter" />
              </Button>
              <Button href="#pablo" justIcon simple color="github">
                <i className="fab fa-github" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img
                  src={FaceAvatar}
                  alt="profile-pic"
                  className={classes.img}
                />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Asa Akira</h4>
              <h6 className={classes.textMuted}>Farmer</h6>
              <p className={classes.cardDescription}>
                I'm way too pretty to be farming but god damn do they pay well.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="facebook">
                <i className="fab fa-facebook" />
              </Button>
              <Button href="#pablo" justIcon simple color="twitter">
                <i className="fab fa-twitter" />
              </Button>
            </CardFooter>
          </Card>
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
                  <b>1</b> Project
                </li>
                <li>
                  <b>5</b> Team Members
                </li>
                <li>
                  <b>55</b> Personal Contacts
                </li>
                <li>
                  <b>5.000</b> Messages
                </li>
              </ul>
              <Button href="#pablo" color="white" round>
                Get started
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={4} sm={4}>
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
                  <b>500</b> Project
                </li>
                <li>
                  <b>50</b> Team Members
                </li>
                <li>
                  <b>125</b> Personal Contacts
                </li>
                <li>
                  <b>15.000</b> Messages
                </li>
              </ul>
              <Button href="#pablo" color="white" round>
                Get started
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={4} sm={4}>
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
                  <b>1000</b> Project
                </li>
                <li>
                  <b>100</b> Team Members
                </li>
                <li>
                  <b>550</b> Personal Contacts
                </li>
                <li>
                  <b>50.000</b> Messages
                </li>
              </ul>
              <Button href="#pablo" color="white" round>
                Get started
              </Button>
            </CardBody>
          </Card>
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
