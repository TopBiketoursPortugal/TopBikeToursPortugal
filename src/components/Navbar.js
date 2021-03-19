import React, { useEffect } from "react";
// import PropTypes from "prop-types";
import LanguageSwitcher from "./LanguageSwitcher";
// import _filter from "lodash/filter";
// import _first from "lodash/first";

import { graphql, useStaticQuery } from "gatsby";
// import { Button } from "styled-button-component";
import { Facebook } from "@styled-icons/boxicons-logos/Facebook";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Youtube } from "@styled-icons/boxicons-logos/Youtube";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Tripadvisor } from "@styled-icons/fa-brands/Tripadvisor";
// import { AlternateEmail } from "@styled-icons/material/AlternateEmail";
import { PhoneAlt } from "@styled-icons/fa-solid/PhoneAlt";
import Nav from "./Nav";
import "./Navbar.scss";

const icons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  youtube: Youtube,
  tripadvisor: Tripadvisor
};

const NavbarComponent = ({ menu }) => {
  // const [hidden, setHidden] = useState(false);
  // const [stickyNav, setStickyNav] = useState(false);
  const { settings, logo_white, logo_black } = useStaticQuery(query);

  // console.log(JSON.stringify(logo_black));

  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;
    const handleScroll = () => {
      lastScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (lastScrollY > 10) {
            // setStickyNav(true);
            document.body.classList.add("fixed-nav");
          } else {
            // setStickyNav(false);
            document.body.classList.remove("fixed-nav");
          }
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
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
          {settings?.socialNetworks?.map((social, index) => {
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
          <LanguageSwitcher />
        </div>
      </div>
      <Nav
        logoBlack={logo_black}
        logoWhite={logo_white}
        menu={menu}
        // className={stickyNav ? "sticky" : ""}
      />
    </div>
  );
};

const query = graphql`
  query LogoQuery {
    logo_black: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 129
          placeholder: NONE
          pngOptions: { quality: 8 }
          webpOptions: { quality: 8 }
          formats: [WEBP, PNG]
        )
      }
    }
    logo_white: file(relativePath: { eq: "logo_white.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 129
          placeholder: NONE
          pngOptions: { quality: 8 }
          webpOptions: { quality: 8 }
          formats: [WEBP, PNG]
        )
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
`;

export default NavbarComponent;
