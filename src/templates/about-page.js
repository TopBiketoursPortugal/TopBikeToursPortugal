import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../layout/LayoutBootstrap";
import Content, { HTMLContent } from "../components/Content";
import { TeamListComponent } from "../components/team";
import "./about-page.scss";

export const AboutPageTemplate = ({
  title,
  content,
  contentComponent,
  team
}) => {
  const PageContent = contentComponent || Content;
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              {/* <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2> */}
              <PageContent className="content" content={content} />
              {team && <TeamListComponent team={team} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  team: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      bio: PropTypes.string,
      role: PropTypes.string,
      image: PropTypes.any
    })
  )
};

const AboutPage = ({ data }) => {
  const { page } = data;

  return (
    <Layout
      language={page.frontmatter.language}
      meta={page.frontmatter.meta || false}
      title={page.frontmatter.title || false}
      feature={page.frontmatter.feature}
    >
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={page.frontmatter.title}
        content={page.html}
        team={page.frontmatter.team}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      ...Meta
      ...FeatureImage
      frontmatter {
        title
        language
        team {
          bio
          name
          role
          image {
            childImageSharp {
              fluid(quality: 85, maxWidth: 1444) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`;
