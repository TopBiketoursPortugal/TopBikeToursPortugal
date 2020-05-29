import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout/LayoutBootstrap";
import { Timeline } from "../components/Timeline";
import "./tour-calendar.scss";
// import { orderBy } from "lodash-es";
export const TourCalendarTemplate = ({ title, description, ...other }) => {
  return (
    <>
      <h1>{title}</h1>
      <div>{description}</div>
    </>
  );
};

export const TourCalendarPage = ({ data: { tourCalendar } }) => {
  //   console.log(JSON.stringify(tourCalendar));
  return (
    <Layout
      meta={tourCalendar.frontmatter.meta || false}
      title={tourCalendar.frontmatter.title || false}
      feature={tourCalendar.frontmatter.feature}
      language={tourCalendar.frontmatter.language}
    >
      <div className="container tourCalendar">
        <TourCalendarTemplate {...tourCalendar.frontmatter} />
        {/* <Timeline
          dates={[
            ...orderBy(tourCalendar.frontmatter.dates, ["date"], ["asc"])
          ]}
        /> */}
        <Timeline
          dates={tourCalendar.frontmatter.dates}
        />
      </div>
    </Layout>
  );
};

export default TourCalendarPage;

export const pageQuery = graphql`
  query TourCalendar($id: String!) {
    tourCalendar: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...FeatureImage
      id
      frontmatter {
        title
        subtitle
        language
        description
        dates {
          body
          date
          type
        }
      }
    }
  }
`;
