import React from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../layout/LayoutBootstrap";
import Rating from "../components/Rating";
import { HTMLMarkdownContent, HTMLContent } from "../components/Content";
// import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Col, Row, Container } from "@bootstrap-styled/v4";
import { Time } from "@styled-icons/boxicons-regular/Time";
import { Mountain } from "@styled-icons/fa-solid/Mountain";
import { Road } from "@styled-icons/fa-solid/Road";
import { sum } from "lodash-es";

// import { display } from "@material-ui/system";
// import { CenterFocusStrong } from "@styled-icons/material";

// const SectionTitle = styled.h1`
//   text-align: center;
//   font-size: 3rem;
//   padding: 45px;
// `;

const TourLink = styled(Link)`
  &:active {
    text-decoration: none;
    color: #000;
  }
  &:visited {
    text-decoration: none;
    color: #000;
  }
  &:link {
    text-decoration: none;
    color: #000;
  }
  &:active {
    text-decoration: none;
    color: #000;
  }
`;

const TourColumn = styled(Col)`
  padding-bottom: 30px;
`;

const TourImageContainer = styled.div`
  overflow: hidden;
  max-height: 200px;

  img {
    transition: opacity 500ms ease 0s, transform 500ms ease 0s !important;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover img {
    transform: scale3d(1.05, 1.05, 1.05);
  }
`;

const Tour = styled.article`
  box-shadow: 0 0 10px rgb(220, 220, 220);
  background: #fff;
  height: 100%;
  .colDuration {
    padding-bottom: 15px;
  }

  .row {
    span {
      color: #898686;
    }
    svg {
      color: #fa7500;
      margin-right: 5px;
    }
  }

  img {
    max-width: 100%;
    vertical-align: middle;
  }
`;

const TourTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  text-align: center;
  margin-bottom: 15px;
`;

const TourSpecificationContainer = styled.div`
  display: flex;
`;

// const TourSpecificationFull = styled.div`
//   display: flex;
//   width: 100%;
//   flex: 0 0 100%;
//   margin-bottom: 15px;

//   span {
//     color: #898686;
//   }
//   svg {
//     color: #fa7500;
//     margin-right: 5px;
//   }
// `;

// const TourSpecification = styled.div`
//   display: flex;
//   flex: 0 0 50%;
//   margin-bottom: 15px;

//   span {
//     color: #898686;
//   }
//   svg {
//     color: #fa7500;
//     margin-right: 5px;
//   }
// `;

const TourSpecPrice = styled.div`
  display: flex;
  flex: 0 0 50%;
  flex-direction: column;
`;

const TourPrice = styled.span`
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  width: 100%;
  text-align: right;
`;

const TourDiscountPrice = styled.div`
  font-size: 1.5rem;
  text-decoration: line-through;
  text-align: right;
  color: #aaa;
`;

/*https://www.gatsbyjs.org/docs/adding-pagination*/
function ToursListPage({ data }) {
  const tours = data.allTourJson.nodes.map(t => {
    return {
      ...t,
      ...t.frontmatter,
      ...t.fields
    };
  });

  // console.log(JSON.stringify(tours));
  const toursPage = data.toursPage;
  return (
    <Layout
      language={toursPage.frontmatter.language}
      meta={toursPage.frontmatter.meta || false}
      title={toursPage.frontmatter.title || false}
      feature={toursPage.frontmatter.feature}
    >
      <section>
        <HTMLContent content={toursPage.html} className="container" />
        <Container>
          <Row>
            {tours &&
              tours.map(tour => {
                var tourRating = 0;

                if (tour && tour.rating)
                  tourRating = Math.round(
                    sum(tour.rating.map(r => r.rating || 0)) /
                      tour.rating.length
                  );

                return (
                  <TourColumn key={tour.id} xs="12" sm="4" md="4" my={10}>
                    <TourLink to={tour.path || tour.localizedPath || tour.slug}>
                      <Tour>
                        <TourImageContainer>
                          <Img fluid={tour.image.childImageSharp.fluid} alt={tour.title} />
                        </TourImageContainer>
                        <div style={{ padding: "25px" }}>
                          <TourTitle>{tour.title}</TourTitle>
                          <div className="row">
                            <div className="col-12 colDuration">
                              <Time size="24" />
                              <span>{` ${tour.duration} ${tour.durationUnit}`}</span>
                            </div>
                            <div className="col-6">
                              <Mountain size="24" />
                              <span alt="Difficulty">{` ${tour.difficulty}/5`}</span>
                            </div>
                            <div className="col-6">
                              <Road size="24" />
                              <span>{` ${tour.distance} ${tour.distanceUnit}`}</span>
                            </div>
                          </div>
                          {tour.princing &&
                            tour.princing.length > 0 &&
                            tour.princing[0] &&
                            tour.princing[0].price &&
                            tour.princing[0].price > 0 && (
                              <TourSpecificationContainer>
                                <TourSpecPrice>
                                  <Rating
                                    style={{ color: "#fa7500" }}
                                    value={tourRating}
                                    total={5}
                                    size={24}
                                  />
                                  <span>{` (${tour.rating.length} reviews)`}</span>
                                </TourSpecPrice>
                                <TourSpecPrice>
                                  {tour.princing &&
                                    tour.princing.length &&
                                    tour.princing[0].discount &&
                                    tour.princing[0].discount >=
                                      tour.princing[0].price && (
                                      <TourDiscountPrice>
                                        {tour.princing[0].discount}€
                                      </TourDiscountPrice>
                                    )}
                                  <TourPrice>
                                    {tour.princing[0].price}€
                                  </TourPrice>
                                </TourSpecPrice>
                              </TourSpecificationContainer>
                            )}
                        </div>
                      </Tour>
                    </TourLink>
                  </TourColumn>
                );
              })}
          </Row>
        </Container>
        {toursPage.frontmatter.descriptionafter && (
          <>
            <br />
            <HTMLMarkdownContent
              className="container"
              content={toursPage.frontmatter.descriptionafter}
            />
          </>
        )}
      </section>
    </Layout>
  );
}

ToursListPage.propTypes = {
  data: PropTypes.any
};

export default ToursListPage;

export const pageQuery = graphql`
  query ToursQuery($id: String!, $language: String!) {
    toursPage: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...FeatureImage
      id
      html
      frontmatter {
        title
        language
        description
        descriptionafter
      }
    }
    allTourJson: allMarkdownRemark(
      filter: {
        frontmatter: {
          packagetype: { eq: "PackageTour" }
          language: { eq: $language }
        }
      }
      sort: { order: ASC, fields: [frontmatter___order] }
    ) {
      nodes {
        id
        excerpt(truncate: true, pruneLength: 200)
        html
        fields {
          slug
          localizedPath
          langKey
          contentType
        }
        frontmatter {
          title
          subtitle
          description
          difficulty
          distance
          duration
          minAge
          language
          image {
            childImageSharp {
              fluid(quality: 85, maxWidth: 1444) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          distanceUnit
          durationUnit
          groupSizeMax
          groupSizeMin
          highlight
          mapUrl
          itinerary {
            day
            description
            title
          }
          path
          physicality
          skillLevel
          tags
          pricing {
            price
            discount
          }
          tourtype
          packagetype
        }
      }
    }
  }
`;
