import { Header } from "../components";
import { Menu } from "../components";
import { useStaticQuery } from "gatsby";

import { graphql } from "gatsby";

import PropTypes from "prop-types";
import React from "react";

// Global application wrapper

const AppLayout = ({ children, pageContext }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Menu />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0
        }}
      >
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}, Built with Gatsby</footer>
      </div>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppLayout;
