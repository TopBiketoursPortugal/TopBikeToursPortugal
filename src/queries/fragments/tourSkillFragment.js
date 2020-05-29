import { graphql } from "gatsby";
export const query = graphql`
  fragment TourSkill on MarkdownRemark {
    frontmatter {
      minAge
      difficulty
      distance
      duration
      distanceUnit
      durationUnit
      groupSizeMax
      groupSizeMin
      highlight
      physicality
      skillLevel
    }
  }
`;
