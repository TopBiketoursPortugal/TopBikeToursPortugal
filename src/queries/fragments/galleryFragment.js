import { graphql } from 'gatsby'
export const query = graphql`fragment Gallery on MarkdownRemark {
  frontmatter {
    gallery {
      alt
      image {
        childImageSharp {
          gatsbyImageData(quality: 85, width: 760, placeholder: NONE, layout: CONSTRAINED)
        }
      }
    }
  }
}
`
