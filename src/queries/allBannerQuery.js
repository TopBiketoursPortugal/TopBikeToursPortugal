import { graphql } from 'gatsby'
export const query = graphql`{
  allBannerJson: allMarkdownRemark(
    filter: {frontmatter: {banner: {eq: true}}}
    sort: {fields: frontmatter___order, order: ASC}
  ) {
    nodes {
      id
      frontmatter {
        language
        banner
        goto {
          link
          linktext
          linktitle
        }
        image {
          childImageSharp {
            gatsbyImageData(quality: 85, placeholder: NONE, layout: FULL_WIDTH)
          }
        }
        title
        subtitle
        description
        btnColor
        btnTextColor
        subtitleColor
        titleColor
      }
    }
  }
}
`

export default query
