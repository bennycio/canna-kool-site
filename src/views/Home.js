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

import bg12 from "assets/img/bg12.jpg";

// @material-ui/icons
import LocalPharmacyIcon from "@material-ui/icons/LocalPharmacy";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import PeopleIcon from "@material-ui/icons/People";
import EcoIcon from "@material-ui/icons/Eco";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { FaBone, FaHeart } from "react-icons/fa";
import FormatPaint from "@material-ui/icons/FormatPaint";
import Dashboard from "@material-ui/icons/Dashboard";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import { GiWaterFountain, GiBackPain, GiHealthNormal } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";
// core components
import InfoArea from "components/InfoArea/InfoArea.js";

import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.js";

import homegrown from "assets/img/homegrown.jpg";
import doctor from "assets/img/doctor.png";
import bg9 from "assets/img/bg9.jpg";

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
      <div
        className={classes.pageHeader}
        style={{ backgroundImage: `url("${bg12}")` }}
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
const HomeFeatures = () => {
  const classes = useStylesFeatures();
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
      <div className={classes.features3}>
        <GridContainer justify="center" alignItems="center">
          <GridItem xs={12} sm={6} md={6}>
            <div className={classes.imgContainer}>
              <img src={homegrown} alt="..." />
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
              <img src={homegrown} alt="..." />
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
