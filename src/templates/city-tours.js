import React from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import { graphql, Link, navigate } from "gatsby";
import Layout from "../layout/LayoutBootstrap";
import Rating from "../components/Rating";
import { HTMLContent } from "../components/Content";
import Breadcrumb from "../components/Breadcrumb";
import { sum } from "lodash-es";
// import { Helmet } from "react-helmet";
// import styled from "styled-components";
// import { Col, Row, Container } from "@bootstrap-styled/v4";
// import { Time } from "@styled-icons/boxicons-regular/Time";
// import { Mountain } from "@styled-icons/fa-solid/Mountain";
// import { Road } from "@styled-icons/fa-solid/Road";
import { filter } from "lodash-es";
import "./city-tours.scss";

export const TourTemplate = ({
  image,
  path,
  title,
  price,
  discount,
  rating,
  html,
  excerpt,
  language,
}) => {
  var tourRating = rating
    ? Math.round(sum(rating.map((r) => r.rating)) / rating.length)
    : 0;
  return (
    <div
      className="row tour"
      role="navigation"
      onClick={(event) => {
        event.preventDefault();
        navigate(path);
      }}
      onKeyDown={(event) => {
        event.preventDefault();
        navigate(path);
      }}
    >
      <div className="col-12 col-sm-4 no-gutter tourImageContainer">
        <Img fluid={image.childImageSharp.fluid} alt={title} />
      </div>
      <div className="col-12 col-sm-8 tourBody">
        <div className="row h-100">
          <div className="col-12 col-md-8">
            <h2>{title}</h2>
            <HTMLContent content={excerpt} />
          </div>
          <div className="col-12 col-md-4 priceContainer text-center">
            {price && (
              <>
                <div>From</div>
                <div className="priceDiscount">{discount}</div>
                <div className="price">€ {price}</div>
                <Rating
                  style={{ color: "#fa7500" }}
                  value={tourRating}
                  total={5}
                  size={16}
                />
              </>
            )}
            <div className="action">
              <Link to={path} className="btn">
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ToursListTemplate = ({ tours }) => (
  <>
    {tours &&
      tours.map((tour, jindex) => (
        <TourTemplate key={`ct_${jindex}`} {...tour} {...tour.frontmatter} />
      ))}
  </>
);

export const CityToursTemplate = ({ tours, body, afterList }) => (
  <section className="tourList">
    <HTMLContent className="row" content={body} />
    <ToursListTemplate tours={tours} />
    {afterList && <HTMLContent content={afterList} />}
  </section>
);

export const CityToursPage = ({ data }) => {
  const { page, tours } = data;
  const language = page.frontmatter.language;
  const toursFiltered = filter(
    tours.nodes,
    (t) => t.frontmatter.language === language
  );
  // console.log(JSON.stringify(toursFiltered));
  // console.log(JSON.stringify(data.page.frontmatter.meta));
  return (
    <Layout
      meta={page.frontmatter.meta || false}
      title={page.frontmatter.title || false}
      feature={page.frontmatter.feature}
      language={language}
    >
      <>
        <Breadcrumb
          routes={[
            { displayName: "Home", url: "/" },
            {
              displayName: page.frontmatter.title,
              url: page.frontmatter.path || page.frontmatter.slug,
            },
          ]}
        />
        <CityToursTemplate
          tours={toursFiltered}
          body={page.html}
          {...page.frontmatter}
        />
      </>
    </Layout>
  );
};

CityToursPage.propTypes = {
  data: PropTypes.any,
};

export default CityToursPage;

export const pageQuery = graphql`
  query CityToursPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...FeatureImage

      html
      frontmatter {
        title
        slug
        templateKey
        language
        subtitle
        afterList
        featuredImage {
          childImageSharp {
            fluid(quality: 85, maxWidth: 1444) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        path
      }
    }
    tours: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/.+/tours/.+/" }
        frontmatter: { packagetype: { eq: "SingleTour" } }
      }
      sort: { order: ASC, fields: [frontmatter___order] }
    ) {
      nodes {
        ...Meta
        ...Itinerary
        ...TourPricing
        frontmatter {
          templateKey
          key
          title
          path
          language
          subtitle
          description
          code
          packagetype
          tourtype
          tourcategory
          tags
          image {
            childImageSharp {
              fluid(quality: 85, maxWidth: 1444) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          lang
          langKey
          slug
        }
        html
        excerpt(truncate: true, pruneLength: 100)
      }
    }
  }
`;
