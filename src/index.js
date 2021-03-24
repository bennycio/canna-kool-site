/*!

=========================================================
* Material Kit PRO React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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
import { useList } from "react-use";

import "assets/scss/material-kit-pro-react.scss?v=1.9.0";
import "assets/scss/global.scss";

import PageFooter from "components/PageFooter";
import { ClickAwayListener, CssBaseline } from "@material-ui/core";

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
      <CartContext.Provider value={value}>
        <Suspense fallback={<div>Loading...</div>}>
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

  return (
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
                  to="/info"
                  onClick={unselectHamburger}
                >
                  Info
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
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
