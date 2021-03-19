import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import Layout from "../layout/LayoutBootstrap";
import Rating from "../components/Rating";
import { HTMLContent } from "../components/Content";
import Breadcrumb from "../components/Breadcrumb";
import { sum } from "lodash-es";
import scrollTo from "gatsby-plugin-smoothscroll";
// import { Helmet } from "react-helmet";
// import styled from "styled-components";
// import { Col, Row, Container } from "@bootstrap-styled/v4";
// import { Time } from "@styled-icons/boxicons-regular/Time";
// import { Mountain } from "@styled-icons/fa-solid/Mountain";
// import { Road } from "@styled-icons/fa-solid/Road";
import { filter } from "lodash-es";
import "./city-tours.scss";

const TourTemplate = ({
  image,
  path,
  title,
  price,
  discount,
  rating,
  html,
  excerpt,
  language
}) => {
  var tourRating = rating
    ? Math.round(sum(rating.map((r) => r.rating)) / rating.length)
    : 0;
  return (
    <div
      className="row tour"
      aria-label="Go to"
      role="link"
      tabIndex={0}
      onClick={(event) => {
        event.preventDefault();
        console.log(path);
        scrollTo(path);
      }}
    >
      <div className="col-12 col-sm-4 no-gutter tourImageContainer">
        <GatsbyImage
          image={image.childImageSharp.gatsbyImageData}
          alt={title ?? "title"}
        />
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

const ToursListTemplate = ({ tours }) => (
  <>
    {tours &&
      tours.map((tour, jindex) => (
        <TourTemplate key={tour.id} {...tour} {...tour.frontmatter} />
      ))}
  </>
);

const CityToursTemplate = ({ tours, body, afterList }) => (
  <section className="container tourList">
    <HTMLContent className="row" content={body} />
    <ToursListTemplate tours={tours} />
    {afterList && <HTMLContent content={afterList} />}
  </section>
);

const CityToursPage = ({ data }) => {
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
              url: page.frontmatter.path || page.frontmatter.slug
            }
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
            gatsbyImageData(quality: 85, placeholder: NONE, layout: FULL_WIDTH)
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
        id
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
              gatsbyImageData(
                quality: 85
                placeholder: NONE
                layout: FULL_WIDTH
              )
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
