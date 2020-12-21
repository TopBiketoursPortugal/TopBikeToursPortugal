// import Partners from "../components/Partners";
import { ChevronCircleDown } from "@styled-icons/fa-solid/ChevronCircleDown";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
// import showdown from "showdown";
import { HTMLContent } from "../components/Content";
// import Tourhighlights from "../components/Tourhighlights/index";
import ReviewsHighlights from "../components/ReviewsHighlights";
import Scroll from "../components/Scroll";
import Layout from "../layout/LayoutBootstrap";
import "./home-page.mod.scss";
export const HomePageTemplate = ({
  title,
  content,
  contentComponent,
  toursection,
  blogsection,
  language,
  reviews,
}) => {
  // const PageContent = contentComponent || Content;
  // const converter = new showdown.Converter();
  return (
    <>
      <Scroll type="class" element="home" offset={-100}>
        <div className="scrollButtonContainer">
          <button
            className="scrollButton animatedScrollButton"
            aria-label="Go to tourhighlights"
            // role="navigation"
            resource="scroll.nav.gototourhighlights"
          >
            <ChevronCircleDown />
          </button>
        </div>
      </Scroll>
      <div className="container">
        <HTMLContent className="home" content={content} />
      </div>
      <Scroll type="class" element="tourHighlights" offset={-95}>
        <button
          className="scrollButton"
          aria-label="Go to tourhighlights"
          // role="navigation"
        >
          <ChevronCircleDown />
        </button>
      </Scroll>

      
      {!!reviews.length && (
        <ReviewsHighlights
          reviews={reviews.map((review) => ({
            ...review,
            ...review.frontmatter,
            ...review.fields,
          }))}
          className="reviewsHighlights"
        />
      )}
      {/* <Scroll type="class" element="home" offset={-100}>
          <ChevronCircleDown>Click me</ChevronCircleDown>
        </Scroll> */}
      {/* <Scroll type="class" element="comments" offset={-100}>
          <ChevronCircleDown>Click me</ChevronCircleDown>
        </Scroll> */}

      {/* <Partners className="partners" /> */}
    </>
  );
};

HomePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  toursection: PropTypes.any,
  language: PropTypes.string,
};

const HomePage = ({ data }) => {
  const { markdownRemark: post } = data;
  const reviews = data.reviews.nodes;
  const language = post.frontmatter.language || `en`;
  return (
    <Layout language={language} meta={post.frontmatter.meta || false}>
      <HomePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        toursection={post.frontmatter.toursection}
        blogsection={post.frontmatter.blogsection}
        language={language}
        reviews={reviews}
      />
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HomePage;

export const homePageQuery = graphql`
  query HomePage($id: String!, $language: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        language
        meta {
          title
          description
        }
       
        blogsection {
          description
          descriptionafter
          heading
        }
      }
    }
    reviews: allMarkdownRemark(
      filter: {
        fields: { contentType: { eq: "testimonials" } }
        frontmatter: { language: { eq: $language }, showHome: { eq: true } }
      }
      limit: 2
    ) {
      nodes {
        id
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
            avatar {
              childImageSharp {
                fluid(quality: 85, maxWidth: 300) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          date(fromNow: true)
          language
          title
          quote
        }
        html
      }
    }
  }
`;
