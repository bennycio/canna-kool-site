import React, { createContext, useEffect, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  useLocation,
} from "react-router-dom";
import { useList, useWindowScroll } from "react-use";

import "assets/scss/material-kit-pro-react.scss?v=1.9.0";
import "assets/scss/global.scss";

import { Header } from "@bennycio/material-ui-pro";
import styled from "styled-components";

import {
  ClickAwayListener,
  CssBaseline,
  Fade,
  List,
  ListItem,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";

import PageFooter from "components/PageFooter";

import useHamburger from "hooks/useHamburger";

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js";
import TimerPopup from "components/TimerPopup";

const Home = lazy(() => import("./views/Home"));
const Store = lazy(() => import("./views/Store"));
const AboutUs = lazy(() => import("./views/AboutUs"));
const Contact = lazy(() => import("./views/Contact"));

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
    <BrowserRouter>
      <ScrollToTop />
      <CssBaseline />
      <Navbar />
      <BigNavbar />
      <CartContext.Provider value={value}>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/store" component={Store} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <TimerPopup />
          <PageFooter />
        </Suspense>
      </CartContext.Provider>
    </BrowserRouter>
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
                    to="/blog"
                    onClick={unselectHamburger}
                  >
                    Blog
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
                <li>
                  <NavLink
                    className="nav-item"
                    to="/labresults"
                    onClick={unselectHamburger}
                  >
                    Lab Results
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

  const HeaderContainer = styled.div`
    width: 100%;
    height: 4rem;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    display: inline-flex;
    vertical-align: middle;
    color: white;
    background: #05c7f2;
    position: fixed;
    z-index: 10000;

    .list-item {
      margin: auto 0;
      font-size: 1.3rem;
    }
  `;

  return (
    isBig && (
      <Fade in={y > 350}>
        <div className="front">
          <HeaderContainer>
            <List className={classes.list + " " + classes.mlAuto}>
              <ListItem className={classes.listItem + " list-item"}>
                <NavLink to="/" style={{ color: "white" }}>
                  Home
                </NavLink>
              </ListItem>
              <ListItem className={classes.listItem + " list-item"}>
                <NavLink to="/store" style={{ color: "white" }}>
                  Store
                </NavLink>
              </ListItem>
              <ListItem className={classes.listItem + " list-item"}>
                <NavLink to="/aboutus" style={{ color: "white" }}>
                  About
                </NavLink>
              </ListItem>
              <ListItem className={classes.listItem + " list-item"}>
                <NavLink to="/blog" style={{ color: "white" }}>
                  Blog
                </NavLink>
              </ListItem>
              <ListItem className={classes.listItem + " list-item"}>
                <NavLink to="/labresults" style={{ color: "white" }}>
                  Lab Results
                </NavLink>
              </ListItem>
            </List>
          </HeaderContainer>
          {/* <Header
            brand="Canna Kool"
            color="primary"
            fixed
            style={{ width: "100%", alignItems: "center", textAlign: "center" }}
            links={
              <List className={classes.list + " " + classes.mlAuto}>
                <ListItem className={classes.listItem}>
                  <NavLink
                    to="/"
                    className={classes.textCenter}
                    style={{ color: "white" }}
                  >
                    Home
                  </NavLink>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <NavLink
                    to="/store"
                    className={classes.textCenter}
                    style={{ color: "white" }}
                  >
                    Store
                  </NavLink>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <NavLink
                    to="/aboutus"
                    className={classes.textCenter}
                    style={{ color: "white" }}
                  >
                    About
                  </NavLink>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <NavLink
                    to="/blog"
                    className={classes.textCenter}
                    style={{ color: "white" }}
                  >
                    Blog
                  </NavLink>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <NavLink
                    to="/labresults"
                    className={classes.textCenter}
                    style={{ color: "white" }}
                  >
                    Lab Results
                  </NavLink>
                </ListItem>
              </List>
            }
          /> */}
        </div>
      </Fade>
    )
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
