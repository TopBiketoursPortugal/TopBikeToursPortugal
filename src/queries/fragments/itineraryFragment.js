import { graphql } from "gatsby";
export const query = graphql`
  fragment Itinerary on MarkdownRemark {
    frontmatter {
      mapUrl
      itinerary {
        day
        description
        location {
          lat
          lng
        }
        title
      }
    }
  }
`;
