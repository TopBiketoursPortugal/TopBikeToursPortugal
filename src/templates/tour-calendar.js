import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout/LayoutBootstrap";
import { Timeline } from "../components/Timeline";
import "./tour-calendar.scss";
// import { orderBy } from "lodash-es";
const TourCalendarTemplate = ({ title, description }) => {
  return (
    <>
      <h1>{title}</h1>
      <div>{description}</div>
    </>
  );
};

const TourCalendarPage = ({ data: { tourCalendar } }) => {
  return (
    <Layout
      meta={tourCalendar.frontmatter.meta || false}
      title={tourCalendar.frontmatter.title || false}
      feature={tourCalendar.frontmatter.feature}
      language={tourCalendar.frontmatter.language}
    >
      <div className="container tourCalendar">
        <TourCalendarTemplate
          title={tourCalendar.frontmatter.title}
          description={tourCalendar.frontmatter.description}
        />
        <Timeline dates={tourCalendar.frontmatter.dates} />
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
