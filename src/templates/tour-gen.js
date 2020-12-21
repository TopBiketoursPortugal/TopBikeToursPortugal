import React from "react";
import { filter } from "lodash-es";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/LayoutBootstrap";
import styled from "styled-components";
import { TourGallery, TourPlan, TourPricing } from "../components/Tour/index";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { HTMLContent, HTMLMarkdownContent } from "../components/Content";
import ScrollableAnchor, { goToAnchor } from "react-scrollable-anchor";
import { Clock } from "@styled-icons/fa-solid/Clock";
import { Mountain } from "@styled-icons/fa-solid/Mountain";
import { Road } from "@styled-icons/fa-solid/Road";
import { Tag } from "@styled-icons/fa-solid/Tag";
import ReviewsHighlights from "../components/ReviewsHighlights";

import "./tour-gen.scss";

// import { CancelCircle } from "@styled-icons/icomoon/CancelCircle";

// import { Youtube } from "@styled-icons/boxicons-regular/CheckCircle";

// import Box from "@material-ui/core/Box";
// import { UserCheck } from "@styled-icons/icomoon";
// configureAnchors({ offset: -140, scrollDuration: 200 });

const StyledPaper = styled(Paper)`
  border-radius: 0;

  &.sticky {
    position: fixed;
    top: 100px;
    left: 0;
    z-index: 9999;
    width: 100%;
  }
`;

function TabPanel({ children, value, index, ...other }) {
  // const  = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {children}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TourGen({ data }) {
  console.log(data.tour.frontmatter.productcode);

  var reviews = filter(
    data.reviews.nodes,
    (review) =>
      review.frontmatter.relatedProduct === data.tour.frontmatter.productcode
  ).map((r) => {
    return { ...r, ...r.frontmatter, ...r.fields };
  });

  let tour = {
    ...data.tour,
    ...data.tour.frontmatter,
  };
  // console.log(JSON.stringify(reviews));
  // console.log(JSON.stringify(data?.reviews?.nodes));
  // console.log(JSON.stringify(tour));

  tour.reviews = reviews;

  const { settings } = data;
  const [value, setValue] = React.useState(0);
  const [stickyNav /*, setNavState*/] = React.useState(false);

  const anchors = ["information", "tour-plan", "gallery", "pricing", "reviews"];

  function getDifficultyText(language, difficulty) {
    switch (language) {
      case "pt":
        return difficultyText.pt[difficulty];
      default:
        return difficultyText.en[difficulty];
    }
  }

  function handleChange(_, newValue) {
    setValue(newValue);
    goToAnchor(anchors[newValue]);
  }

  // function _handleWaypointEnter(_, newValue) {
  //   setNavState(false);
  // }

  // function _handleWaypointLeave(_, newValue) {
  //   setNavState(true);
  // }

  var difficultyText = {
    en: ["Easy", "Easy to moderate", "Moderate", "Moderate to hard", "Hard"],
    pt: [
      "Fácil",
      "Fácil a moderado",
      "Moderado",
      "Moderade a difícil",
      "Difícil",
    ],
  };

  // console.log(JSON.stringify(tour));

  return (
    <Layout
      language={tour.language}
      meta={tour.meta || false}
      title={tour.title || false}
      feature={tour.feature}
    >
      {tour && tour.duration && tour.distance && tour.difficulty && (
        <div className="container specs">
          <div className="row">
            {tour.frontmatter.duration && (
              <div className="col text-center">
                <Clock size="24" />
                <span>{` ${tour.duration} ${tour.durationUnit}`}</span>
              </div>
            )}
            {tour.difficulty && (
              <div className="col text-center">
                <Mountain size="24" />
                <span alt="Difficulty">{` ${tour.difficulty}/5`}</span>
                <span>
                  {`  ` + getDifficultyText(tour.language, tour.difficulty - 1)}
                </span>
              </div>
            )}
            {tour.distance && (
              <div className="col text-center">
                <Road size="24" />
                <span>{` ${tour.distance} ${tour.distanceUnit}`}</span>
              </div>
            )}
          </div>
        </div>
      )}
      {/* <Waypoint onEnter={_handleWaypointEnter} onLeave={_handleWaypointLeave} /> */}
      <div className="container">
        <StyledPaper className={stickyNav ? "sticky" : ""}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Information" {...a11yProps(0)} />

            {tour.itinerary && <Tab label="Tour Plan" {...a11yProps(1)} />}
            {tour.gallery && <Tab label="Gallery" {...a11yProps(2)} />}
            {tour.pricing && tour.pricing.length > 0 && (
              <Tab label="Pricing" {...a11yProps(4)} />
            )}

            {!!reviews.length && <Tab label="Reviews" {...a11yProps(5)} />}

            {/* <Tab label="The fine print" {...a11yProps(5)} />*/}
          </Tabs>
        </StyledPaper>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-8">
            <ScrollableAnchor id={"information"}>
              <HTMLContent
                id={a11yProps(0).id}
                className="container"
                content={tour.html}
              />
            </ScrollableAnchor>
          </div>
          <div className="col-12 col-md-4 tour-booking-overlay">
            <div className="tour-booking">
              <div className="tour-booking-header-price-wrap">
                <div className="tour-booking-header-price-overlay"></div>
                {tour && tour.pricing && tour.pricing.length > 0 && (
                  <div className="tour-booking-tour-price-wrap tour-booking-discount">
                    <span className="tour-booking-tour-price">
                      <span className="tour-booking-head">
                        <Tag size={24} className="price" />
                        From{" "}
                      </span>
                      <span
                        className={
                          tour.pricing[0] &&
                          tour.pricing[0].discount &&
                          tour.pricing[0].discount > 0
                            ? "tour-booking-tail hasDiscount"
                            : "tour-booking-tail"
                        }
                      >
                        {tour.pricing[0].price} €
                      </span>
                    </span>
                    {tour.pricing[0].discount > 0 && (
                      <span className="tour-booking-tour-discount-price">
                        {tour.pricing[0].discount} €
                      </span>
                    )}
                    <span
                      className="fa fa-info-circle tour-booking-tour-price-info"
                      data-rel="tipsy"
                      original-title="The initial price based on 1 adult with the lowest price in low season"
                    ></span>
                  </div>
                )}
              </div>
              <div className="tour-booking-form">
                <div id="demo" style={{ widt: "100%", height: "400px" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {tour && tour.mapUrl && (
              <iframe
                title="tour"
                src={tour.mapUrl}
                width={"100%"}
                height={"480"}
              ></iframe>
            )}
            {tour.itinerary && (
              <ScrollableAnchor id={"tour-plan"}>
                <div id={a11yProps(1).id} className="container">
                  <TourPlan tour={tour} {...settings}></TourPlan>
                </div>
              </ScrollableAnchor>
            )}

            {tour.pricing && (
              <ScrollableAnchor id={"pricing"}>
                <div id={a11yProps(4).id} className="container">
                  <TourPricing tour={tour}></TourPricing>
                  {tour.afterpricing && (
                    <>
                      <br />
                      <HTMLMarkdownContent
                        className="container"
                        content={tour.afterpricing}
                      />
                    </>
                  )}
                </div>
              </ScrollableAnchor>
            )}

            {tour.gallery && (
              <ScrollableAnchor id={"gallery"}>
                <div id={a11yProps(2).id} className="container">
                  <TourGallery tour={tour} />
                </div>
              </ScrollableAnchor>
            )}

            {!!reviews.length && (
              <ScrollableAnchor id={"reviews"}>
                <div id={a11yProps(5).id} className="container">
                  {/* <TourReviews reviews={reviews}></TourReviews> */}
                  <ReviewsHighlights
                    reviews={reviews}
                    className="reviewsHighlights"
                  />
                </div>
              </ScrollableAnchor>
            )}

            {/* <ScrollableAnchor id={"the-fine-print"}>
              <div className="container">fine print</div>
            </ScrollableAnchor> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default TourGen;

export const tourGenQuery = graphql`
  query TourGenByID($id: String!) {
    settings: settingsYaml {
      googleApiKey
      googleTrackingId
      location {
        lat
        lng
      }
    }
    reviews: allMarkdownRemark(
      filter: {
        fields: { contentType: { eq: "testimonials" } }
        frontmatter: { language: { eq: "en" } }
      }
    ) {
      nodes {
        id
        html
        fields {
          slug
          contentType
          langKey
          localizedPath
        }
        fileAbsolutePath
        frontmatter {
          banner
          score
          author {
            country
            name
          }
          date(fromNow: true)
          language
          title
          quote
          relatedProduct
        }
      }
    }
    tour: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Itinerary
      ...TourSkill
      ...TourPricing
      ...FeatureImage
      html
      frontmatter {
        title
        subtitle
        description
        slug
        difficulty
        distance
        duration
        productcode
        distanceUnit
        durationUnit
        groupSizeMax
        groupSizeMin
        highlight
        path
        physicality
        skillLevel
        tags
        templateKey
        afterpricing
        language
        gallery {
          alt
          image {
            childImageSharp {
              fluid(quality: 60, maxWidth: 1444) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
              high: fluid(quality: 90, maxWidth: 2888) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`;
