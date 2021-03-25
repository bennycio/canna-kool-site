import React, { createContext, useEffect, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
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

import PageFooter from "components/PageFooter";
import {
  ClickAwayListener,
  CssBaseline,
  Fade,
  List,
  ListItem,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";

import Header from "components/Header/Header";
import Button from "components/CustomButtons/Button";
import navbarsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/navbarsStyle.js";
import useHamburger from "hooks/useHamburger";

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

  const isShown = useHamburger(700);

  return (
    <Fade in={isShown}>
      <div className="front">
        <ClickAwayListener onClickAway={unselectHamburger}>
          <div>
            <input id="hamburger" class="hamburger" type="checkbox" />
            <label class="hamburger" for="hamburger">
              <i />
              <text>
                <close>close</close>
                <open>menu</open>
              </text>
            </label>
            <section class="drawer-list">
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

const useStylesNavbar = makeStyles(navbarsStyle);

const BigNavbar = () => {
  const classes = useStylesNavbar();
  const isBig = useMediaQuery("(min-width: 600px)");
  const { x, y } = useWindowScroll();

  useEffect(() => {
    console.log(x, y);
  }, [y]);

  return (
    isBig && (
      <Fade in={y > 700}>
        <div className="front">
          <Header
            brand="Canna Kool"
            color="primary"
            fixed
            style={{ width: "100%" }}
            links={
              <List className={classes.list + " " + classes.mlAuto}>
                <ListItem className={classes.listItem}>
                  <NavLink
                    to="/"
                    className={classes.navLink}
                    style={{ color: "white" }}
                  >
                    Home
                  </NavLink>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <NavLink to="/store" className={classes.navLink} style={{ color: "white" }}>
                    Store
                  </NavLink>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <NavLink
                    to="/aboutus"
                    className={classes.navLink}
                    style={{ color: "white" }}
                  >
                    About
                  </NavLink>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <NavLink
                    to="/blog"
                    className={classes.navLink}
                    style={{ color: "white" }}
                  >
                    Blog
                  </NavLink>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <NavLink
                    to="/labresults"
                    className={classes.navLink}
                    style={{ color: "white" }}
                  >
                    Lab Results
                  </NavLink>
                </ListItem>
              </List>
            }
          />
        </div>
      </Fade>
    )
  );
};

const Loading = () => {
  return (
    <div class="loading-content">
      <div class="loading">
        <p>loading</p>
        <span></span>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
