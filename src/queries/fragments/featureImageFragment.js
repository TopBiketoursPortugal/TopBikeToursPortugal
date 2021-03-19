import { graphql } from 'gatsby'
export const query = graphql`fragment FeatureImage on MarkdownRemark {
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
          gatsbyImageData(quality: 85, placeholder: NONE, layout: FULL_WIDTH)
        }
      }
      imageAlign
    }
  }
}
`
