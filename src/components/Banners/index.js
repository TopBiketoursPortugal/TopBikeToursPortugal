import React from "react";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import { graphql, Link, useStaticQuery } from "gatsby";

import Slider from "react-animated-slider";
import "./banner.scss";
import Helmet from "react-helmet";

const Banners = () => {
  const data = useStaticQuery(graphql`
    {
      allBannerJson: allMarkdownRemark(
        filter: { frontmatter: { banner: { eq: true } } }
        sort: { fields: frontmatter___order, order: ASC }
      ) {
        banners: nodes {
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
                fluid(quality: 90, maxWidth: 1444) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            title
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

  // const {banners = data?.allBannerJson?.nodes?.map(b => ({
  //   ...b.frontmatter, b.id
  // }));

  const { banners } = data?.allBannerJson;

  return (
    <Slider className="slider-wrapper" duration={4000} autoplay={4000} infinite>
      {!!banners &&
        banners?.length > 0 &&
        banners.map(({ frontmatter, id }, index) => {
          const item = frontmatter;
          const priority = index === 0 ? "eager" : "lazy";
          return (
            <div key={`banner${id}`} className="slider-content">
              <Helmet>
                <link
                  rel="preload"
                  as="image"
                  href={item?.image?.childImageSharp?.srcWebp}
                  type="image/webp"
                />
                <link
                  rel="preload"
                  as="image"
                  href="/static/c265ccf4c72743163dac1657fde9f906/f28db/canadian-bike-tour-group.webp"
                  type="image/webp"
                  imageSrcSet="/static/c265ccf4c72743163dac1657fde9f906/6f100/canadian-bike-tour-group.webp 361w,\n/static/c265ccf4c72743163dac1657fde9f906/2c395/canadian-bike-tour-group.webp 722w,\n/static/c265ccf4c72743163dac1657fde9f906/f28db/canadian-bike-tour-group.webp 1444w"
                  imageSizes="(max-width: 1444px) 100vw, 1444px"
                />
              </Helmet>
              <Img
                loading={priority}
                style={{ display: "none" }}
                fadeIn={false}
                fluid={item?.image?.childImageSharp?.fluid}
              />
              <BackgroundImage
                critical={index === 0}
                className="hero-image"
                fluid={item?.image?.childImageSharp?.fluid}
              >
                <div className="inner">
                  {item?.title && <h2>{item.title}</h2>}
                  {item?.description && <p>{item.description}</p>}
                  {item?.goto?.link && (
                    <Link className="action" to={item.goto.link}>
                      {item.goto.linktext}
                    </Link>
                  )}
                </div>
              </BackgroundImage>
            </div>
          );
        })}
    </Slider>
  );
};

export default Banners;
