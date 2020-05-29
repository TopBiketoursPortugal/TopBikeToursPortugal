import React, { Component } from "react";
import { Location } from "@reach/router";
import { Link } from "gatsby";
import { Menu, X } from "react-feather";
// import Img from "gatsby-image";

// import Logo from "./Logo";

import "./Nav.scss";

export class Navigation extends Component {
  state = {
    active: false,
    activeSubNav: false,
    currentPath: false
  };

  componentDidMount = () =>
    this.setState({ currentPath: this.props.location.pathname });

  handleMenuToggle = () => this.setState({ active: !this.state.active });

  // Only close nav if it is open
  handleLinkClick = () => this.state.active && this.handleMenuToggle();

  toggleSubNav = subNav =>
    this.setState({
      activeSubNav: this.state.activeSubNav === subNav ? false : subNav
    });

  render() {
    const { active } = this.state,
      // { subNav, menu } = this.props,
      NavLink = ({ to, className, children, ...props }) => (
        <Link
          to={to}
          className={`NavLink ${
            to === this.state.currentPath ? "active" : ""
          } ${className}`}
          onClick={this.handleLinkClick}
          onKeyDown={this.handleLinkClick}
          {...props}
        >
          {children}
        </Link>
      );

    return (
      <nav className={`Nav ${active ? "Nav-active" : ""}`}>
        <div className="Nav--Container container-fluid">
          <Link to="/" onClick={this.handleLinkClick} onKeyDown={this.handleLinkClick} className="logo">
            <img
              className="white"
              src="/img/logo_white.png"
              alt="Top Bike Tours Portugal"
            />
            <img
              className="black"
              src="/img/logo.svg"
              alt="Top Bike Tours Portugal"
            />
          </Link>
          <div className="Nav--Links">
            {/* <div
              className={`Nav--Group ${
                this.state.activeSubNav === "posts" ? "active" : ""
              }`}
            >
              <span
                className={`NavLink Nav--GroupParent ${
                  this.props.location.pathname.includes("posts") ||
                  this.props.location.pathname.includes("blog") ||
                  this.props.location.pathname.includes("post-categories")
                    ? "active"
                    : ""
                }`}
                onClick={() => this.toggleSubNav("posts")}
              >
                Blog
              </span>
              <div className="Nav--GroupLinks">
                <NavLink to="/blog" className="Nav--GroupLink">
                  All Posts
                </NavLink>
                {subNav &&
                  subNav.posts &&
                  subNav.posts.map((link, index) => (
                    <NavLink
                      to={link.slug}
                      key={"posts-subnav-link-" + index}
                      className="Nav--GroupLink"
                    >
                      {link.title}
                    </NavLink>
                  ))}
              </div>
            </div> */}
            {this.props &&
              this.props.menu &&
              this.props.menu.map((menuItem, index) => (
                <NavLink key={`mi${index}`} to={menuItem.link}>
                  {menuItem.display}
                </NavLink>
              ))}
          </div>
          <button
            className="btn Button-blank Nav--MenuButton"
            onClick={this.handleMenuToggle}
            onKeyDown={this.handleMenuToggle}
          >
            {active ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    );
  }
}

export default ({ subNav, menu }) => (
  <Location>
    {route => <Navigation menu={menu} subNav={subNav} {...route} />}
  </Location>
);
