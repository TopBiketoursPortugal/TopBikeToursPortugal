import { graphql } from "gatsby";
export const query = graphql`
  fragment FeatureImage on MarkdownRemark {
    frontmatter {
      feature {
        title
        textcolor
        align
        bokunLink
        bokunId
        bokunLinkText
        image {
          childImageSharp {
            fluid(quality: 85, maxWidth: 1444) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        imageAlign
      }
    }
  }
`;
