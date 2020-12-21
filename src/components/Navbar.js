import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import LanguageSwitcher from "./LanguageSwitcher";
// import _filter from "lodash/filter";
// import _first from "lodash/first";

import { StaticQuery, graphql } from "gatsby";
// import { Button } from "styled-button-component";
import styled from "styled-components";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Youtube } from "@styled-icons/boxicons-logos/Youtube";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Tripadvisor } from "@styled-icons/fa-brands/Tripadvisor";
// import { AlternateEmail } from "@styled-icons/material/AlternateEmail";
import { PhoneAlt } from "@styled-icons/fa-solid/PhoneAlt";
import Nav from "./Nav";
import "./Navbar.scss";
const StyledTripAdvisor = styled(Tripadvisor)`vertical-align: -0.3em;`;

let lastScrollY = 0;
let ticking = false;

const NavbarComponent = (props) => {
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(() => {
    function handleScroll() {
      lastScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (lastScrollY > 10) {
            setStickyNav(true);
            document.body.classList.add("fixed-nav");
          } else {
            setStickyNav(false);
            document.body.classList.remove("fixed-nav");
          }
          // this.navBar.current.style.top = `${lastScrollY}px`;
          ticking = false;
        });

        ticking = true;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const icons = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    youtube: Youtube,
    tripadvisor: StyledTripAdvisor,
  };

  // var hidden = this.state.hidden;
  return (
    <StaticQuery
      query={graphql`query LogoQuery {
          logo:file(relativePath: { eq: "logo_white.png" }) {
            childImageSharp {
              # Specify the image processing specifications right in the query.
              # Makes it trivial to update as your page's design changes.
              fixed(width: 148) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
          logoWhite:file(relativePath: { eq: "logo.png" }) {
            childImageSharp {
              # Specify the image processing specifications right in the query.
              # Makes it trivial to update as your page's design changes.
              fixed(width: 148) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
          settings: settingsYaml {
            socialNetworks {
              display
              icon
              link
            }
          }
        }
      `}
      render={(data) => (
        <div className="topContainer">
          <div className="languageSwitcherContainer d-none d-sm-flex">
            <div className="contactsContainer">
              <a href="/">
                <PhoneAlt size="18" /> (+351) 915 316 999​
              </a>
              <a href="mailto:info@topbiketoursportugal.com">
                {/* <AlternateEmail size="18" /> */}
                info@topbiketoursportugal.com
              </a>
            </div>
            <div>
              {data &&
                data.settings &&
                data.settings.socialNetworks &&
                data.settings.socialNetworks.map((social, index) => {
                  const SocialIcon = icons[social.icon];
                  return (
                    <a
                      rel="nofollow noopener noreferrer"
                      key={`sli${index}`}
                      href={social.link}
                      target="_blank"
                      title={social.display}
                    >
                      <SocialIcon size="18" title={social.display} />
                    </a>
                  );
                })}
              <LanguageSwitcher></LanguageSwitcher>
            </div>
          </div>
          <Nav
            menu={props.menu}
            logoWhite={data.logoWhite}
            logo={data.logo}
            className={stickyNav ? "sticky" : ""}
          ></Nav>
        </div>
      )}
    />
  );
};

export default NavbarComponent;
