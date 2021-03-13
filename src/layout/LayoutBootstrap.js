import React from "react";
import PropTypes from "prop-types";

import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import NavbarComponent from "../components/Navbar";
import Banners from "../components/Banners";
import Footer from "../components/Footer";
import Meta from "../components/Meta";

import Img from "gatsby-image";
import "../sass/style.global.scss";

const TemplateWrapper = ({ children, meta, title, language, feature }) => {
  const data = useStaticQuery(graphql`
    query HeadingQueryBootStrap {
      site {
        siteMetadata {
          title
          description
        }
      }
      settingsYaml {
        en {
          description
          keywords
          title
        }
        pt {
          description
          keywords
          title
        }
      }
      menu: menusJson(
        title: { eq: "Home" }
        en: { links: { elemMatch: { enabled: { eq: true } } } }
        pt: { links: { elemMatch: { enabled: { eq: true } } } }
      ) {
        en {
          links {
            description
            display
            enabled
            link
          }
        }
        pt {
          links {
            description
            display
            enabled
            link
          }
        }
      }
      banners: allMarkdownRemark(
        filter: { frontmatter: { banner: { eq: true } } }
      ) {
        nodes {
          id
          frontmatter {
            language
            banner
            goto {
              link
              linktext
              linktitle
            }
            image {
              childImageSharp {
                fluid(quality: 85, maxWidth: 1444) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
            title
            subtitle
            description
            btnColor
            btnTextColor
            subtitleColor
            titleColor
          }
        }
      }
    }
  `);

  const { socialMediaCard, googleTrackingId } = data.settingsYaml || {};
  const menu = data.menu[language || "en"].links;
  const defaultMetadata = data.settingsYaml[language || "en"];

  return (
    <>
      {/* <SEO {page.}></SEO> */}
      <Helmet titleTemplate={data.settingsYaml.titleformat}>
        <html lang={language || `en`} />
        <title>{title || defaultMetadata.title}</title>
        {meta && meta.description && meta.description != null && (
          <meta name="description" content={meta.description} />
        )}
        <meta
          name="keywords"
          content={(meta && meta.keywords) || defaultMetadata.keywords}
        />

        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title || defaultMetadata.title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/icons/icon-48x48.png" />
        <link
          rel="shortcut icon"
          type="image/png"
          href="/icons/icon-48x48.png"
        />
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* {feature && feature.bokunLink && (
                <script
                  src="https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=78235668-9ba3-43e0-b6a9-4b5322217da3"
                  
                ></script>
              )} */}

        {!!feature?.bokunLink && (
          <script
            type="text/javascript"
            src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes"
          ></script>
        )}
      </Helmet>
      <Meta
        googleTrackingId={googleTrackingId}
        absoluteImageUrl={
          socialMediaCard && socialMediaCard.image && socialMediaCard.image
        }
        {...meta}
        {...data.settingsYaml}
      />

      <header>
        <NavbarComponent menu={menu} />
        {feature && (
          <div
            className="feature"
            style={{
              color: (feature.textcolor || "white") + `!important`
            }}
          >
            <Img
              loading="eager"
              objectFit="cover"
              objectPosition="50% 50%"
              fluid={feature.image.childImageSharp.fluid}
              alt={feature.title}
            />
            <div className="fBanner">
              {feature.title && (
                <div className="fBannerTitle">
                  <h2
                    style={{
                      color: feature.textcolor || "white"
                    }}
                  >
                    {feature.title}
                  </h2>
                </div>
              )}
              {feature && feature.bokunLink && (
                <div className="fBannerButton">
                  <a
                    rel="noreferrer"
                    className="bokunButton"
                    href={feature.bokunLink}
                    target="_blank"
                  >
                    {feature.bokunLinkText}
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
        {!feature && <Banners banners={data.banners} />}
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

TemplateWrapper.propsTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      display: PropTypes.string,
      enable: PropTypes.string,
      link: PropTypes.string
    })
  )
};

export default TemplateWrapper;
