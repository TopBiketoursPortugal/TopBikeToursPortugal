import ReactCSSTransitionGroup from "react-transition-group";
import React, { useState } from "react";
import { Location } from "@reach/router";
import { Link } from "gatsby";
import { Menu, X } from "react-feather";
// import Img from "gatsby-image/withIEPolyfill";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// import Logo from "./Logo";

import "./Nav.scss";

const Navigation = (props) => {
  const [active, setActive] = useState(false);
  // const [activeSubNav, setActiveSubNav] = useState(false);
  const [currentPath] = useState(props.location.pathname);

  const handleMenuToggle = () => setActive(!active);

  // Only close nav if it is open
  const handleLinkClick = () => active && handleMenuToggle();

  // const toggleSubNav = (subNav) =>
  //   setActiveSubNav(activeSubNav === subNav ? false : subNav);

  const NavLink = ({ to, className, children, ...props }) => (
    <Link
      to={to}
      className={`NavLink ${to === currentPath ? "active" : ""} ${className}`}
      onClick={handleLinkClick}
      onKeyDown={handleLinkClick}
      {...props}
    >
      {children}
    </Link>
  );

  return (
    <nav className={`Nav ${active ? "Nav-active" : ""}`}>
      <div className="Nav--Container container-fluid">
        <Link
          to="/"
          onClick={handleLinkClick}
          onKeyDown={handleLinkClick}
          className="logo"
        >
          <GatsbyImage
            className="black"
            fluid={getImage(props.logo)}
            alt="Top Bike Tours Portugal"
          />
          <GatsbyImage
            className="white"
            image={getImage(props.logoWhite)}
            alt="Top Bike Tours Portugal"
          />
        </Link>
        <div className="Nav--Links">
          {props?.menu?.map((menuItem, index) => (
            <NavLink key={`mi${index}`} to={menuItem.link}>
              {menuItem.display}
            </NavLink>
          ))}
        </div>
        <button
          className="btn Button-blank Nav--MenuButton"
          onClick={handleMenuToggle}
          onKeyDown={handleMenuToggle}
        >
          {active ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

export default ({ subNav, menu, logo, logoWhite }) => (
  <Location>
    {(route) => (
      <Navigation
        logo={logo}
        logoWhite={logoWhite}
        menu={menu}
        subNav={subNav}
        {...route}
      />
    )}
  </Location>
);
