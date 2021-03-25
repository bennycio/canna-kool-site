import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Mail from "@material-ui/icons/Mail";

import {
  Button,
  GridContainer,
  GridItem,
  CustomInput,
  Footer,
} from "@bennycio/material-ui-pro";

import footerStyles from "assets/jss/material-kit-pro-react/views/componentsSections/footerStyle.js";

const useStylesFooter = makeStyles(footerStyles);

const PageFooter = () => {
  const classes = useStylesFooter();
  return (
    <>
      <Footer
        theme="dark"
        content={
          <div>
            <ul className={classes.socialButtons}>
              <li>
                <Button justIcon simple href="#pablo" color="twitter">
                  <i className="fab fa-twitter" />
                </Button>
              </li>
              <li>
                <Button justIcon simple href="#pablo" color="facebook">
                  <i className="fab fa-facebook-square" />
                </Button>
              </li>
              <li>
                <Button justIcon simple href="#pablo" color="youtube">
                  <i className="fab fa-youtube" />
                </Button>
              </li>
            </ul>
          </div>
        }
      >
        <div className={classes.footer}>
          <GridContainer>
            <GridItem xs={12} sm={3} md={3}>
              <a href="#pablo">
                <h5>Canna Kool</h5>
              </a>
              <p>
                CBD Products that are Lab Tested and Stronger than all our
                Competitors
              </p>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <h5>Index</h5>
              <ul className={classes.linksVertical}>
                <li>
                  <a href="#pablo">Store</a>
                </li>
                <li>
                  <a href="#pablo">About us</a>
                </li>
                <li>
                  <a href="#pablo">Info</a>
                </li>
                <li>
                  <a href="#pablo">Contact</a>
                </li>
                <li>
                  <a href="#pablo">Lab Results</a>
                </li>
              </ul>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <h5>Legal</h5>
              <ul className={classes.linksVertical}>
                <li>
                  <a href="#pablo">Transactions FAQ</a>
                </li>
                <li>
                  <a href="#pablo">Terms & conditions</a>
                </li>
                <li>
                  <a href="#pablo">Privacy</a>
                </li>
              </ul>
            </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <h5>Subscribe to Newsletter</h5>
              <p>
                Join our newsletter and get news in your inbox every week! We
                hate spam too, so no worries about this.
              </p>
              <form>
                <CustomInput
                  id="footeremail"
                  formControlProps={{
                    fullWidth: false,
                  }}
                  inputProps={{
                    placeholder: "Your Email...",
                  }}
                />
                <Button color="primary" justIcon>
                  <Mail />
                </Button>
              </form>
            </GridItem>
          </GridContainer>
        </div>
      </Footer>
    </>
  );
};
export default PageFooter;
