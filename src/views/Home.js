import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js";

import headerBg from "assets/img/home.jpg";

// @material-ui/icons
import LocalPharmacyIcon from "@material-ui/icons/LocalPharmacy";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import PeopleIcon from "@material-ui/icons/People";
import EcoIcon from "@material-ui/icons/Eco";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { FaBone, FaHeart } from "react-icons/fa";
import { GiWaterFountain, GiBackPain, GiHealthNormal } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";
// core components
import InfoArea from "components/InfoArea/InfoArea.js";
import InputAdornment from "@material-ui/core/InputAdornment";
import CustomInput from "components/CustomInput/CustomInput.js";
import Mail from "@material-ui/icons/Mail";

import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.js";

import homegrown from "assets/img/homegrown.jpg";
import strongman from "assets/img/strongman.jpg";

import Star from "@material-ui/icons/Star";
// core components
import CardAvatar from "components/Card/CardAvatar.js";
import Muted from "components/Typography/Muted.js";
import Warning from "components/Typography/Warning.js";

import testimonialsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/testimonialsStyle.js";

import cardProfile1Square from "assets/img/faces/card-profile1-square.jpg";
import cardProfile4Square from "assets/img/faces/card-profile4-square.jpg";
import cardProfile6Square from "assets/img/faces/card-profile6-square.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import christian from "assets/img/faces/christian.jpg";
import { Fade, Paper } from "@material-ui/core";

import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.js";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
import office2 from "assets/img/examples/office2.jpg";
import blog8 from "assets/img/examples/blog8.jpg";
import cardProject6 from "assets/img/examples/card-project6.jpg";

import sectionPillsStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionPillsStyle.js";
import LazyLoad from "react-lazyload";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeFeatures />
      <HomeTestamonials />
    </>
  );
};

const useStylesHeader = makeStyles(headersStyle);

const HomeHeader = () => {
  const classes = useStylesHeader();
  return (
    <>
      <div
        className={classes.pageHeader}
        style={{ backgroundImage: `url("${headerBg}")` }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={8} md={8}>
              <h1 className={classes.title} style={{ fontSize: "4.5em" }}>
                Find your peace again with Canna Kool
              </h1>
              <br />
              <Button
                color="primary"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel=""
              >
                <i className="fas fa-ticket-alt" />
                Buy Now
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </>
  );
};

const useStylesFeatures = makeStyles(featuresStyle);
const useStylesImages = makeStyles(imagesStyles);
const useStylesPills = makeStyles(sectionPillsStyle);

const HomeFeatures = () => {
  const classes = useStylesFeatures();
  const imageClasses = useStylesImages();
  const pillsClasses = useStylesPills();
  return (
    <>
      <div className={classes.features1}>
        <GridContainer>
          <GridItem
            xs={12}
            sm={8}
            md={8}
            className={classes.mlAuto + " " + classes.mrAuto}
          >
            <h2 className={classes.title}>Introducing Canna Kool</h2>
            <h3 className={classes.description}>
              An all natural solution that makes it easy <br />
              to get the relief that you need.
            </h3>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              vertical
              icon={LocalPharmacyIcon}
              title="Lab Tested"
              description="Developed sustainably with 100% natural ingredients and proven
              refinery techniques to provide a safe and satisfying experience."
              iconColor="info"
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              vertical
              icon={MonetizationOnIcon}
              title="Wallet Friendly"
              description="Never overpay again for the relief that you deserve. Achieve
              ultimate relaxation at a bargain with our product."
              iconColor="success"
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              vertical
              icon={DirectionsRunIcon}
              title="Powerful Results"
              description="Over 100x stronger than the average CBD Roll-on and designed
              with hard workers in mind, you won't find a more powerful relief
              solution."
              iconColor="danger"
            />
          </GridItem>
        </GridContainer>
      </div>
      <div className={classes.subscribeContainer}>
        <GridContainer>
          <GridItem
            xs={12}
            sm={6}
            md={6}
            className={classNames(classes.mlAuto, classes.mrAuto)}
          >
            <div className={classes.textCenter}>
              <h3 className={classes.title}>
                Subscribe to our Newsletter for <br /> weekly discounts on all
                products!
              </h3>
            </div>
            <Card raised>
              <CardBody>
                <form>
                  <GridContainer>
                    <GridItem xs={12} sm={6} md={6} lg={8}>
                      <CustomInput
                        id="emailPreFooter"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Mail />
                            </InputAdornment>
                          ),
                          placeholder: "Your Email...",
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6} lg={4}>
                      <Button
                        color="rose"
                        block
                        className={classes.subscribeButton}
                      >
                        subscribe
                      </Button>
                    </GridItem>
                  </GridContainer>
                </form>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
      <div className={classes.container} style={{ marginTop: "3%" }}>
        <Paper elevation={3} className={classes.textCenter}>
          <GridContainer
            justify="center"
            alignItems="center"
            style={{ padding: "0 5% 0 5%" }}
          >
            <GridItem xs={12} sm={4} md={4}>
              <Card style={{ height: "30rem" }}>
                <img
                style={{ height: "60%", width: "100%", display: "block" }}
                  className={imageClasses.imgCardTop}
                  src="https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80"
                  alt="Card-img-cap"
                />
                <CardBody>
                  <h3>Buy this one please</h3>
                  <Button color="primary">Buy Now</Button>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card style={{ height: "30rem" }}>
                <img
                  style={{ height: "60%", width: "100%", display: "block" }}
                  className={imageClasses.imgCardTop}
                  src="https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80"
                  alt="Card-img-cap"
                />
                <CardBody>
                  <h3>No buy this one instead</h3>
                  <Button color="primary">Buy Now</Button>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card style={{ height: "30rem" }}>
                <img
                  style={{ height: "60%", width: "100%", display: "block" }}
                  className={imageClasses.imgCardTop}
                  src="https://images.unsplash.com/photo-1517303650219-83c8b1788c4c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd4c162d27ea317ff8c67255e955e3c8&auto=format&fit=crop&w=2691&q=80"
                  alt="Card-img-cap"
                />
                <CardBody>
                  <h3>But wait, please pick me</h3>
                  <Button color="primary">Buy Now</Button>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </Paper>
      </div>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <Card
              raised
              background
              style={{ backgroundImage: "url(" + office2 + ")" }}
            >
              <CardBody background>
                <h6 className={pillsClasses.category}>HEALTH</h6>
                <a href="#pablo">
                  <h3 className={pillsClasses.cardTitle}>
                    Hemp gives you wings
                  </h3>
                </a>
                <p className={pillsClasses.category}>
                  This stuff really gives you wings, the kind of wings that make
                  you fly.
                </p>
                <Button round href="#pablo" color="danger">
                  <FormatAlignLeft className={pillsClasses.icons} /> Read Story
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card
              raised
              background
              style={{ backgroundImage: "url(" + blog8 + ")" }}
            >
              <CardBody background>
                <h6 className={pillsClasses.category}>SAFETY</h6>
                <a href="#pablo">
                  <h3 className={pillsClasses.cardTitle}>
                    Hemp is super safe... and surprisingly chill
                  </h3>
                </a>
                <p className={pillsClasses.category}>
                  Don{"'"}t be scared of the truth and don't be scared of hemp
                  because both are very safe and very chill
                </p>
                <Button round href="#pablo" color="primary">
                  <FormatAlignLeft className={pillsClasses.icons} /> Read Story
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Card
              raised
              background
              style={{ backgroundImage: "url(" + cardProject6 + ")" }}
            >
              <CardBody background>
                <h6 className={pillsClasses.category}>EXERCISE</h6>
                <a href="#pablo">
                  <h3 className={pillsClasses.cardTitle}>
                    Make big gains with Hemp
                  </h3>
                </a>
                <p className={pillsClasses.category}>
                  Hear the story of a man who made big gains because of Canna
                  Kool.
                </p>
                <Button round href="#pablo" color="warning">
                  <FormatAlignLeft className={pillsClasses.icons} /> Read Story
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
      <div className={classes.features3}>
        <GridContainer justify="center" alignItems="center">
          <GridItem xs={12} sm={6} md={6}>
            <div className={classes.imgContainer}>
              <LazyLoad>
                <img src={homegrown} alt="..." />
              </LazyLoad>
            </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <h2 className={classes.title}>Homegrown, Homeowned</h2>
            <InfoArea
              className={classes.infoArea}
              icon={PeopleIcon}
              title="We Help People Help People"
              description="No corpos running this business. Only the self-made, hardworking,
              pragmatic cannabis farmers, distributors, scientists, and
              entreprenuers."
              iconColor="primary"
            />
            <InfoArea
              className={classes.infoArea}
              icon={EcoIcon}
              title="Eco-Friendly"
              description="There are no factories producing the CBD in Canna Kool products. Our products are farmed sustainably and with the consumer in mind."
              iconColor="primary"
            />
          </GridItem>
        </GridContainer>
      </div>
      <div className={classes.features3}>
        <GridContainer justify="center" alignItems="center">
          <GridItem className={classes.alternate} xs={12} sm={6} md={6}>
            <h2 className={classes.title}>Potent Solution</h2>
            <InfoArea
              className={classes.infoArea}
              icon={FlashOnIcon}
              title="Over 9000"
              description="Designed for people who want a powerful solution to body pain at a
              price that makes it easy to feel good."
              iconColor="primary"
            />
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <div className={classes.imgContainer}>
              <LazyLoad>
                <img src={strongman} alt="..." />
              </LazyLoad>
            </div>
          </GridItem>
        </GridContainer>
      </div>
      <div className={classes.features5}>
        <GridContainer>
          <GridItem
            xs={12}
            sm={8}
            md={8}
            className={
              classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
            }
          >
            <h2 className={classes.title}>Why CBD?</h2>
          </GridItem>
          <div className={classes.container}>
            <GridContainer className={classes.gridContainer}>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={GiBackPain}
                  title="Pain Relief"
                  description={
                    <p>
                      Feel all of the pain from a hard day of work drift away
                      when you experience the cool relief of Canna Kool CBD
                    </p>
                  }
                  iconColor="info"
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={RiMentalHealthFill}
                  title="Calming Mind"
                  description={
                    <p>
                      Anxiety is no match for CBD, and with Canna Kool, the
                      anxiety relief is so strong that you won't have anxieties
                      when considering doing dangerous actions
                    </p>
                  }
                  iconColor="danger"
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={GiHealthNormal}
                  title="Cures Cancer"
                  description={<p>Enough said here.</p>}
                  iconColor="primary"
                />
              </GridItem>
            </GridContainer>
            <GridContainer className={classes.gridContainer}>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={GiWaterFountain}
                  title="Unlimited Life"
                  description={
                    <p>
                      You won't be dying for another five days for every day you
                      apply some Canna Kool. Use this to live forever.
                    </p>
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={FaHeart}
                  title="Heart Health"
                  description={
                    <p>
                      Turns your blood into a regenerative solution that can
                      heal your allies and burn your enemies. The bonus
                      side-effect is that your heart works better with the new
                      blood.
                    </p>
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={FaBone}
                  title="Strong Bones"
                  description={
                    <p>
                      When you use Canna Kool, your bones get stronger and
                      stronger until they just can't no more.
                    </p>
                  }
                />
              </GridItem>
            </GridContainer>
          </div>
        </GridContainer>
      </div>
    </>
  );
};

const useStylesTestamonials = makeStyles(testimonialsStyle);

const HomeTestamonials = () => {
  const classes = useStylesTestamonials();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <>
      <div className={classes.testimonials}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>What Do People Think?</h2>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card testimonial plain>
                <CardAvatar testimonial plain>
                  <img src={cardProfile1Square} alt="..." />
                </CardAvatar>
                <CardBody plain>
                  <h4 className={classes.title}>Jimmy Neutron</h4>
                  <Muted>
                    <h6>Child Scientist</h6>
                  </Muted>
                  <h5 className={classes.cardDescription}>
                    {'"'}This is the kind of stuff that really makes a hard day
                    of flying around on my rocket ship with my mechanical canine
                    saving the world.{'"'}
                  </h5>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card testimonial plain>
                <CardAvatar testimonial plain>
                  <img src={cardProfile4Square} alt="..." />
                </CardAvatar>
                <CardBody plain>
                  <h4 className={classes.title}>Sandy Cheeks</h4>
                  <Muted>
                    <h6>Underwater Squirrel</h6>
                  </Muted>
                  <h5 className={classes.cardDescription}>
                    {'"'}Y'all ain't got no idea what kind of strength this
                    stuff has, and even better, I tested it in my lab and can
                    confirm that these have been previously tested in another
                    lab.{'"'}
                  </h5>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card testimonial plain>
                <CardAvatar testimonial plain>
                  <img src={cardProfile6Square} alt="..." />
                </CardAvatar>
                <CardBody plain>
                  <h4 className={classes.title}>Lois Griffin</h4>
                  <Muted>
                    <h6>Not Single Mom</h6>
                  </Muted>
                  <h5 className={classes.cardDescription}>
                    {'"'}When Peter accidentally crushes my ribs in the middle
                    of the night, it only takes a small amount of Canna Kool to
                    get me back to myself in no time.{'"'}
                  </h5>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <div
        className={
          classes.testimonials +
          " " +
          classes.sectionDark +
          " " +
          classes.testimonial2
        }
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Carousel {...settings}>
                <div>
                  <Card testimonial plain className={classes.card2}>
                    <CardAvatar testimonial plain>
                      <img src={kendall} alt="..." />
                    </CardAvatar>
                    <CardBody plain>
                      <h5 className={classes.cardDescription}>
                        {'"'}I can't reveal my true identity or else I'd have to
                        close the internet but this pretty girl avatar
                        represents me well enough and shows how pretty I feel
                        when I take advantage of the unlimited life that Canna
                        Kool offers{'"'}
                      </h5>
                      <h4 className={classes.cardTitle}>Anonymous</h4>
                      <Muted>
                        <h6>Anonymous</h6>
                      </Muted>
                    </CardBody>
                    <div>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                    </div>
                  </Card>
                </div>
                <div>
                  <Card testimonial plain className={classes.card2}>
                    <CardAvatar testimonial plain>
                      <img src={christian} alt="..." />
                    </CardAvatar>
                    <CardBody plain>
                      <h5 className={classes.cardDescription}>
                        {'"'}Somehow my bones just keep getting stronger and
                        stronger, with enough Canna Kool I predict that in 300
                        years my bones will be dense enough to produce a
                        wormhole. Thanks Canna Kool!{'"'}
                      </h5>
                      <h4 className={classes.cardTitle}>Clark Kent</h4>
                      <Muted>
                        <h6>Superhero</h6>
                      </Muted>
                    </CardBody>
                    <div>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                    </div>
                  </Card>
                </div>
              </Carousel>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </>
  );
};

export default Home;
