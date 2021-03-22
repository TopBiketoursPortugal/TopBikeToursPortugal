// import ReactCSSTransitionGroup from "react-transition-group";
import React, { useState } from "react";
import { Location } from "@reach/router";
import { Link } from "gatsby";
import { Menu, X } from "react-feather";
// import Img from "gatsby-image/withIEPolyfill";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// import Logo from "./Logo";

import "./Nav.scss";

const Navigation = ({ logoBlack, logoWhite, location, menu }) => {
  const [active, setActive] = useState(false);
  // const [activeSubNav, setActiveSubNav] = useState(false);
  const [currentPath] = useState(location.pathname);

  const handleMenuToggle = () => setActive(!active);

  // Only close nav if it is open
  const handleLinkClick = () => active && handleMenuToggle();

  // const toggleSubNav = (subNav) =>
  //   setActiveSubNav(activeSubNav === subNav ? false : subNav);

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
            image={getImage(logoBlack)}
            alt="Top Bike Tours Portugal"
          />
          <GatsbyImage
            className="white"
            image={getImage(logoWhite)}
            alt="Top Bike Tours Portugal"
          />
        </Link>
        <div className="Nav--Links">
          {menu?.map((menuItem, index) => (
            <NavLink
              currentPath={currentPath}
              key={`mi${index}`}
              to={menuItem.link}
              handleLinkClick={handleLinkClick}
            >
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

const NavLink = ({
  to,
  handleLinkClick,
  currentPath,
  className,
  children,
  ...props
}) => (
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

export default ({ subNav, menu, logoBlack, logoWhite }) => (
  <Location>
    {(route) => (
      <Navigation
        logoBlack={logoBlack}
        logoWhite={logoWhite}
        menu={menu}
        subNav={subNav}
        {...route}
      />
    )}
  </Location>
);
