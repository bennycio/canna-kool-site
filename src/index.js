import React, {
  createContext,
  useEffect,
  lazy,
  Suspense,
  useContext,
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
import { useList, useToggle } from "react-use";

import "assets/scss/material-kit-pro-react.scss?v=1.9.0";
import "assets/scss/global.scss";

import {
  ClickAwayListener,
  CssBaseline,
  useMediaQuery,
} from "@material-ui/core";
import styled, { keyframes } from "styled-components";

import PageFooter from "components/PageFooter";

import TimerPopup from "components/TimerPopup";
import useScrollStop from "hooks/useScrollStop";

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

export const ViewContext = createContext(true);

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
    <ViewContext.Provider value={isBig}>
      <BrowserRouter>
        <ScrollToTop />
        <CssBaseline />
        {isBig ? (
          <>
            <BigNavbar /> <SiteContent />
          </>
        ) : (
          <MobileView>
            <SiteContent />
          </MobileView>
        )}
      </BrowserRouter>
    </ViewContext.Provider>
  );
};

const SiteContent = () => {
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

  const cartValue = {
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
    <CartContext.Provider value={cartValue}>
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

// const Navbar = () => {
//   const unselectHamburger = () => {
//     document.getElementById("hamburger").checked = false;
//   };

//   const isShown = useHamburger(350);

//   return (
//     <Fade in={isShown}>
//       <div className="front">
//         <ClickAwayListener onClickAway={unselectHamburger}>
//           <div>
//             <input id="hamburger" className="hamburger" type="checkbox" />
//             <label className="hamburger" htmlFor="hamburger">
//               <i />
//               <div className="text">
//                 <p className="close">close</p>
//                 <p className="open">menu</p>
//               </div>
//             </label>
//             <section className="drawer-list">
//               <ul>
//                 <li>
//                   <NavLink
//                     className="nav-item"
//                     to="/"
//                     onClick={unselectHamburger}
//                   >
//                     Home
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     className="nav-item"
//                     to="/store"
//                     onClick={unselectHamburger}
//                   >
//                     Store
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     className="nav-item"
//                     to="/about"
//                     onClick={unselectHamburger}
//                   >
//                     About
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     className="nav-item"
//                     to="/contact"
//                     onClick={unselectHamburger}
//                   >
//                     Contact
//                   </NavLink>
//                 </li>
//               </ul>
//             </section>
//           </div>
//         </ClickAwayListener>
//       </div>
//     </Fade>
//   );
// };

const BigNavbar = () => {
  const isBig = useContext(ViewContext);

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
  background: white;
  -moz-transform: ${(props) =>
    props.isNav ? "translate3d(-75%, 0, -100px)" : "unset"};
  -ms-transform: ${(props) =>
    props.isNav ? "translate3d(-75%, 0, -100px)" : "unset"};
  -o-transform: ${(props) =>
    props.isNav ? " translate3d(-75%, 0, -100px)" : "unset"};
  -webkit-transform: ${(props) =>
    props.isNav ? "translate3d(-75%, 0, -100px)" : "unset"};
  transform: ${(props) =>
    props.isNav ? "translate3d(-75%, 0, -100px)" : "unset"};
  transform-origin: 100%;
  box-shadow: ${(props) => (props.isNav ? "5px 10px 12px grey" : "unset")};
  transition: all 0.6s ease-in-out;
  -webkit-transition: all 0.6s ease-in-out;
  -moz-transition: all 0.6s ease-in-out;
  -o-transition: all 0.6s ease-in-out;
  -ms-transition: all 0.6s ease-in-out;
`;

const OuterWrapper = styled.div`
  background: hsla(0, 0%, 87%, 0.664);
`;

const slideLeft = keyframes`

  from {
    margin-left: 100%;
    width: 300%;
  }
  to {
    margin-left: 0%;
    width: 100%;
  }

`;

const MobileMenu = styled.ul`
  display: ${(props) => (props.isNav ? "unset" : "none")};
  position: fixed;
  z-index: 10000;
  top: 12%;
  right: 0;
  text-align: right;
  color: white;
  margin-right: 5%;
  list-style: none;
  width: 100%;
  overflow: hidden;
  transition: all 1s ease-in-out;
  span {
    font-size: 1.8rem;
    color: hsl(0, 0%, 15%);
  }
`;

const MobileMenuItem = styled.li`
  animation: ${slideLeft} 1s;
  margin: 5% 0;
  color: blue;
  transition: all 1s ease-in-out;
  }
`;

const DropdownContent = styled.ul`
  overflow: hidden;
  max-height: ${(props) => (props.isDrop ? "100vh" : "0")};
  list-style: none;
  transition: all 1s ease-in-out;
`;

const Dropdown = styled.li`
  animation: ${slideLeft} 1s;
`;

const DropdownItem = styled.li`
  margin-right: 7%;
  span {
    font-size: 1.4rem;
  }
  transition: all 1s ease-in-out;
`;

const MobileView = ({ children }) => {
  const [isNav, toggleNav] = useToggle(false);
  const [isDropdown, toggleDropdown] = useToggle(false);

  useScrollStop(isNav);

  return (
    <OuterWrapper isNav={isNav} id="outer-wrapper">
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
      <MobileMenu isNav={isNav}>
        <MobileMenuItem>
          <Link to="/" onClick={toggleNav}>
            <span>Home</span>
          </Link>
        </MobileMenuItem>
        <MobileMenuItem>
          <Link to="/store" onClick={toggleNav}>
            <span>Store</span>
          </Link>
        </MobileMenuItem>
        <Dropdown>
          <span onClick={toggleDropdown}>About</span>
          <DropdownContent isDrop={isDropdown}>
            <DropdownItem>
              <Link to="/about" onClick={toggleNav}>
                <span>Production</span>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/about#faq" onClick={toggleNav}>
                <span>FAQ</span>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/lab" onClick={toggleNav}>
                <span>Lab Results</span>
              </Link>
            </DropdownItem>
          </DropdownContent>
        </Dropdown>
        <MobileMenuItem>
          <Link to="/contact" onClick={toggleNav}>
            <span>Contact</span>
          </Link>
        </MobileMenuItem>
      </MobileMenu>
      <MobileWrapper isNav={isNav} id="content-wrapper">
        {children}
      </MobileWrapper>
    </OuterWrapper>
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
