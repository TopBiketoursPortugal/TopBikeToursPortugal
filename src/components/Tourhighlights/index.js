import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";
import * as Style from './Tourhighlights.styled'
// import BackgroundImage from 'gatsby-background-image'
import { StaticQuery, navigate, graphql, Link } from 'gatsby'
import { HTMLContent } from '../Content'
import showdown from 'showdown'
import './tourhighlights.scss'
import { filter } from 'lodash-es'

const Tourhighlights = ({
  description,
  descriptionafter,
  heading,
  language,
}) => {
  const converter = new showdown.Converter()
  const query = graphql`query featuredToursQuery {
  tours: allMarkdownRemark(
    filter: {frontmatter: {packagetype: {eq: "PackageTour"}, featured: {eq: true}}}
  ) {
    nodes {
      id
      excerpt(truncate: true, pruneLength: 200)
      fields {
        slug
        localizedPath
      }
      frontmatter {
        title
        path
        language
        packagetype
        image {
          childImageSharp {
            gatsbyImageData(quality: 85, placeholder: NONE, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
}
`
  return (
    <StaticQuery
      query={query}
      render={(data) => (
        <div className="tourHighlights">
          <HTMLContent
            className="container tourTitle"
            content={converter.makeHtml(heading)}
          />
          <HTMLContent
            className="container  subtitle"
            content={converter.makeHtml(description)}
          />
          <div className="container">
            <div className="row">
              {data &&
                data.tours &&
                data.tours.nodes &&
                filter(
                  data.tours.nodes,
                  (t) => t.frontmatter.language === language
                )
                  .slice(0, 3)
                  .map((tour, index) => (
                    <div
                      key={'featured' + tour.id}
                      role="link"
                      aria-label={`Go to ${tour.frontmatter}`}
                      tab={index}
                      tabIndex={index}
                      className="col col-12 col-md-4"
                      onClick={(event) => {
                        event.preventDefault()
                        navigate(
                          tour.frontmatter.path ||
                            tour.fields.localizedPath ||
                            tour.fields.slug
                        )
                      }}
                      onKeyDown={(event) => {
                        event.preventDefault()
                        navigate(
                          tour.frontmatter.path ||
                            tour.fields.localizedPath ||
                            tour.fields.slug
                        )
                      }}
                    >
                      <Style.Tour>
                        <Link
                          to={
                            tour.frontmatter.path ||
                            tour.fields.localizedPath ||
                            tour.fields.slug
                          }
                        >
                          <Style.ToursImageContainer>
                            {tour?.frontmatter?.image && (
                              <GatsbyImage
                                image={tour.frontmatter.image.childImageSharp.gatsbyImageData}
                                alt={tour.frontmatter.title} />
                            )}
                          </Style.ToursImageContainer>
                          <Style.TourTitle>
                            {tour.frontmatter.title}
                          </Style.TourTitle>
                          <Style.TourResume>{tour.excerpt}</Style.TourResume>
                        </Link>
                      </Style.Tour>
                    </div>
                  ))}
            </div>
          </div>
          <HTMLContent
            className="container subtitle after"
            content={converter.makeHtml(descriptionafter)}
          />
        </div>
      )}
    ></StaticQuery>
  );
}

export default Tourhighlights
