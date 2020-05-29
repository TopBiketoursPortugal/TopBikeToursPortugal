import { graphql } from "gatsby";
export const query = graphql`
  fragment TourPricing on MarkdownRemark {
    frontmatter {
      pricing {
        bestValue
        discount
        package
        packageContents {
          icon
          title
          value
        }
        highSeasonPriceSupplement
        type
        price
      }
    }
  }
`;
