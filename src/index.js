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
            </ul>
          </li>
          <li>
            <NavLink to="/contact" class="top-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  );
};

const MobileView = ({ children }) => {
  const [menuVisible, setMenuVisible] = useToggle(false);

  useEffect(() => {
    const navExpand = [].slice.call(document.querySelectorAll(".nav-expand"));
    const backLink = `<li class="nav-item">
	<a class="nav-link nav-back-link" href="javascript:;">
		Back
	</a>
</li>`;

    navExpand.forEach((item) => {
      item
        .querySelector(".nav-expand-content")
        .insertAdjacentHTML("afterbegin", backLink);
      item
        .querySelector(".nav-link")
        .addEventListener("click", () => item.classList.add("active"));
      item
        .querySelector(".nav-back-link")
        .addEventListener("click", () => item.classList.remove("active"));
    });

    // ---------------------------------------
    // not-so-important stuff starts here

    const ham = document.getElementById("ham");
    ham.addEventListener("click", function () {
      document.body.classList.toggle("nav-is-toggled");
    });
  }, []);

  function toggleNav() {
    document.body.classList.toggle("nav-is-toggled");
  }

  return (
    <>
      <header class="nav-top">
        <span class="hamburger material-icons" id="ham">
          menu
        </span>
      </header>

      <nav class="nav-drill">
        <ul class="nav-items nav-level-1">
          <li class="nav-item">
            <Link class="nav-link" to="/" onClick={toggleNav}>
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/store" onClick={toggleNav}>
              Store
            </Link>
          </li>
          <li class="nav-item nav-expand">
            <a class="nav-link nav-expand-link" href="#">
              About <ArrowForwardIcon />
            </a>
            <ul class="nav-items nav-expand-content">
              <li class="nav-item">
                <Link class="nav-link" to="/lab" onClick={toggleNav}>
                  Lab Results
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  to="/about#production"
                  onClick={toggleNav}
                >
                  Production
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about#faq" onClick={toggleNav}>
                  FAQ
                </Link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/contact" onClick={toggleNav}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
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
