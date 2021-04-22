import React, { createContext, useEffect, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  useLocation,
  Link,
} from "react-router-dom";
import { useList, useToggle, useWindowScroll } from "react-use";

import "assets/scss/material-kit-pro-react.scss?v=1.9.0";
import "assets/scss/global.scss";

import styled from "styled-components";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

import {
  ClickAwayListener,
  CssBaseline,
  Fade,
  List,
  ListItem,
  makeStyles,
  useMediaQuery,
  Menu,
  MenuItem,
} from "@material-ui/core";

import { GridItem, GridContainer } from "@bennycio/material-ui-pro";

import PageFooter from "components/PageFooter";

import useHamburger from "hooks/useHamburger";

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js";
import TimerPopup from "components/TimerPopup";
import Dropdown from "components/Dropdown";

const Home = lazy(() => import("./views/Home"));
const Store = lazy(() => import("./views/Store"));
const AboutUs = lazy(() => import("./views/AboutUs"));
const Contact = lazy(() => import("./views/Contact"));
const LabResults = lazy(() => import("./views/LabResults"));
const BlogPostInitial = lazy(() => import("./views/BlogPostInitial"));

export const CartContext = createContext({
  cart: [],
  set: () => {},
  push: () => {},
  updateAt: () => {},
  insertAt: () => {},
  update: () => {},
  updateFirst: () => {},
  upsert: () => {},
  sort: () => {},
  filter: () => {},
  removeAt: () => {},
  clear: () => {},
  reset: () => {},
});

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const isBig = useMediaQuery("(min-width: 600px)");

  return (
    <BrowserRouter>
      <ScrollToTop />
      <CssBaseline />
      {isBig ? (
        <>
          <Navbar />
          <BigNavbar /> <WebPageContent />
        </>
      ) : (
        <MobileView>
          <WebPageContent />
        </MobileView>
      )}
    </BrowserRouter>
  );
};

const WebPageContent = () => {
  const [
    cart,
    {
      set,
      push,
      updateAt,
      insertAt,
      update,
      updateFirst,
      upsert,
      sort,
      filter,
      removeAt,
      clear,
      reset,
    },
  ] = useList([]);

  const value = {
    cart,
    set,
    push,
    updateAt,
    insertAt,
    update,
    updateFirst,
    upsert,
    sort,
    filter,
    removeAt,
    clear,
    reset,
  };

  return (
    <CartContext.Provider value={value}>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/lab" component={LabResults} />
          <Route exact path="/blog/initial" component={BlogPostInitial} />
          <Route exact path="/blog/second" component={BlogPostInitial} />
          <Route exact path="/blog/third" component={BlogPostInitial} />
        </Switch>
        <TimerPopup />
        <PageFooter />
      </Suspense>
    </CartContext.Provider>
  );
};

const Navbar = () => {
  const unselectHamburger = () => {
    document.getElementById("hamburger").checked = false;
  };

  const isShown = useHamburger(350);

  return (
    <Fade in={isShown}>
      <div className="front">
        <ClickAwayListener onClickAway={unselectHamburger}>
          <div>
            <input id="hamburger" className="hamburger" type="checkbox" />
            <label className="hamburger" htmlFor="hamburger">
              <i />
              <div className="text">
                <p className="close">close</p>
                <p className="open">menu</p>
              </div>
            </label>
            <section className="drawer-list">
              <ul>
                <li>
                  <NavLink
                    className="nav-item"
                    to="/"
                    onClick={unselectHamburger}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-item"
                    to="/store"
                    onClick={unselectHamburger}
                  >
                    Store
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-item"
                    to="/aboutus"
                    onClick={unselectHamburger}
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-item"
                    to="/contact"
                    onClick={unselectHamburger}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </section>
          </div>
        </ClickAwayListener>
      </div>
    </Fade>
  );
};

const useStyles = makeStyles(headersStyle);
const BigNavbar = () => {
  const classes = useStyles();
  const isBig = useMediaQuery("(min-width: 600px)");
  const { x, y } = useWindowScroll();

  return (
    isBig && (
      <Fade in={y > 350}>
        <nav id="navigation">
          <Link to="/" class="logo">
            Canna Kool
          </Link>
          <ul class="links">
            <li>
              <Link to="/" class="top-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/store" class="top-link">
                Store
              </Link>
            </li>
            <li class="dropdown">
              <Link to="/about" class="trigger-drop top-link">
                About<i class="arrow"></i>
              </Link>
              <ul class="drop">
                <li>
                  <Link to="/lab" class="top-link">
                    Lab
                  </Link>
                </li>
                <li>
                  <Link to="/about" class="top-link">
                    Production
                  </Link>
                </li>
                <li>
                  <Link to="/about" class="top-link">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/" class="top-link">
                    ?
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/contact" class="top-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* <HeaderContainer>
            <GridContainer justify="space-around" align="center" spacing={10}>
              <GridItem
                sm={4}
                md={4}
                className={classes.listItem + " list-item"}
              >
                <NavLink to="/" style={{ color: "white" }}>
                  Home
                </NavLink>
              </GridItem>
              <GridItem
                sm={4}
                md={4}
                className={classes.listItem + " list-item"}
              >
                <NavLink to="/store" style={{ color: "white" }}>
                  Store
                </NavLink>
              </GridItem>
              <GridItem
                sm={4}
                md={4}
                className={classes.listItem + " list-item"}
                style={{ display: "inline" }}
              >
                <Dropdown
                  title="About"
                  links={[
                    ["/aboutus", "Why CannaKool?"],
                    ["/labresults", "Lab Results"],
                  ]}
                  style={{ display: "inline" }}
                />
              </GridItem>
              <GridItem
                sm={4}
                md={4}
                className={classes.listItem + " list-item"}
              >
                <NavLink to="/contact" style={{ color: "white" }}>
                  Contact
                </NavLink>
              </GridItem>
            </GridContainer>
          </HeaderContainer> */}
      </Fade>
    )
  );
};

const MobileView = ({ children }) => {
  function toggle(element, clazz) {
    document.getElementById(element).classList.toggle(clazz);
  }
  function remove(element, clazz) {
    document.getElementById(element).classList.remove(clazz);
  }

  function toggleScroll(canScroll) {
    const element = document.getElementById("mobile");
    if (element.classList.contains("navigation")) {
      disableBodyScroll(element);
    } else {
      enableBodyScroll(element);
    }
  }
  return (
    <div id="mobile">
      <div
        id="burgerBtn"
        onClick={() => {
          toggle("mobile", "navigation");
          toggleScroll(scroll);
        }}
      ></div>
      <ul id="nav">
        <li>
          <NavLink
            className="nav-item"
            to="/"
            onClick={() => {
              remove("mobile", "navigation");
              clearAllBodyScrollLocks();
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-item"
            to="/store"
            onClick={() => {
              remove("mobile", "navigation");
              clearAllBodyScrollLocks();
            }}
          >
            Store
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-item"
            to="/aboutus"
            onClick={() => {
              remove("mobile", "navigation");
              clearAllBodyScrollLocks();
            }}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-item"
            to="/contact"
            onClick={() => {
              remove("mobile", "navigation");
              clearAllBodyScrollLocks();
            }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div
        id="mobileBodyContent"
        onClick={() => {
          remove("mobile", "navigation");
          clearAllBodyScrollLocks();
        }}
      >
        {children}
      </div>
    </div>
  );
};

const Loading = () => {
  return (
    <div className="loading-content">
      <div className="loading">
        <p>loading</p>
        <span></span>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
