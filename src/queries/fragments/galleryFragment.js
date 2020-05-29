import { graphql } from "gatsby";
export const query = graphql`
  fragment Gallery on MarkdownRemark {
    frontmatter {
      gallery {
        alt
        image {
          childImageSharp {
            fluid(quality: 85, maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`;
