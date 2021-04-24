import React, {
  createContext,
  useEffect,
  lazy,
  Suspense,
  useState,
} from "react";
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

import { StyledOffCanvas, Menu, Overlay } from "styled-off-canvas";

import {
  ClickAwayListener,
  CssBaseline,
  Fade,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import styled from "styled-components";

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
          {/* <Navbar /> */}
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
                    to="/about"
                    onClick={unselectHamburger}
                  >
                    About
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
      <nav id="navigation">
        <Link to="/" className="logo">
          Canna Kool
        </Link>
        <ul className="links">
          <li>
            <Link to="/" className="top-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/store" className="top-link">
              Store
            </Link>
          </li>
          <li className="dropdown">
            <Link to="/about" className="trigger-drop top-link">
              About<i className="arrow"></i>
            </Link>
            <ul className="drop">
              <li>
                <Link to="/lab" className="top-link">
                  Lab
                </Link>
              </li>
              <li>
                <Link to="/about" className="top-link">
                  Production
                </Link>
              </li>
              <li>
                <Link to="/about" className="top-link">
                  FAQ
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/contact" className="top-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  );
};

const MobileWrapper = styled.div`
  transform: ${(props) =>
    props.isNav ? "scale(0.7) translateX(-50%) translateY(-14%)" : "unset"};
  width: ${(props) => (props.isNav ? "100vw" : "unset")};
  height: ${(props) => (props.isNav ? "100vh" : "unset")};
  transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
`;

const MobileView = ({ children }) => {
  const [isNav, toggleNav] = useToggle(false);

  return (
    <div id="outer-wrapper">
      <label className="menu">
        <input
          type="checkbox"
          checked={!isNav}
          value={isNav}
          onChange={toggleNav}
        />
        <div>
          <span></span>
          <span></span>
        </div>
      </label>
      <MobileWrapper isNav={isNav} id="content-wrapper">
        {children}
      </MobileWrapper>
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
