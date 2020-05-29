import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/LayoutBootstrap";
import {
  HTMLContent,
  HTMLMarkdownContent
} from "../components/Content";
import Img from "gatsby-image";
import { groupBy } from "lodash-es";
import "./bikes-page.scss";

export const BikesPageTemplate = ({
  html,
  title,
  bikes,
  equipment,
  afterequipment
}) => {
  // const PageContent = contentComponent || Content;
  var groups = groupBy(bikes, b => b.type);
  var groupsKeys = Object.keys(groups);

  return (
    <div className="container">
      <div className="row titleBikes">
        <HTMLContent content={html} className="col-12" />
      </div>
      <div className="row">
        {groupsKeys.map((g, index) => (
          <div key={`g` + index} className="col-sm-4 col-12 bikesImages">
            <h2>{g}</h2>
            {groups[g].map((item, index2) => (
              <Img
                key={"gi_" + index + "_" + index2}
                fluid={item.image.childImageSharp.fluid}
                alt={item.type}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="row">
        {equipment.map((equip, index) => (
          <div key={`equi` + index} className="col-sm-4 col-12">
            {equip.type}
            <br />
            <HTMLMarkdownContent
              className="container"
              content={equip.description}
            />
          </div>
        ))}
      </div>
      {afterequipment && (
        <div className="container">
          <HTMLMarkdownContent
            className="row justify-content-center"
            content={afterequipment}
          />
        </div>
      )}
    </div>
  );
};

BikesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string,
  bikes: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      image: PropTypes.any
    })
  ),
  equipment: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      description: PropTypes.string
    })
  )
};

const BikesPage = ({ data }) => {
  // console.log(JSON.stringify(data));
  const { page } = data;
  return (
    <Layout
      language={page.frontmatter.language}
      meta={page.frontmatter.meta || false}
      title={page.frontmatter.title || false}
      feature={page.frontmatter.feature}
    >
      <BikesPageTemplate html={page.html} {...page.frontmatter} />
    </Layout>
  );
};

BikesPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default BikesPage;

export const bikesPageQuery = graphql`
  query BikesPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      ...Meta
      ...FeatureImage
      frontmatter {
        title
        language
        bikes {
          type
          image {
            childImageSharp {
              fluid(quality: 85, maxWidth: 700) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
        equipment {
          type
          description
        }
        afterequipment
      }
    }
  }
`;
