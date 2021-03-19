import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";
//  import Image from "./Image";
import './PostCard.scss'
// import BackgroundImage from "gatsby-background-image";

const PostCard = ({
  featuredImage,
  featuredImagePostion,
  title,
  excerpt,
  slug,
  path,
  localizedPath,
  categories = [],
  className = '',
  ...props
}) => (
  <Link to={path || localizedPath || slug} className={`PostCard ${className}`}>
    {featuredImage && (
      <div className="PostCard--Image relative">
        {/* <Img background fluid={featuredImage.childImageSharp.fluid} alt={title} /> */}
        <GatsbyImage
          image={featuredImage.childImageSharp.gatsbyImageData}
          className="PostCard--BGImage"
          alt={title}
          // objectPosition={featuredImagePostion}
          style={{ color: featuredImagePostion }} />
      </div>
    )}
    <div className="PostCard--Content">
      {title && <h3 className="PostCard--Title">{title}</h3>}
      <div className="PostCard--Category">
        {categories && categories.map((cat) => cat.category).join(', ')}
      </div>
      {excerpt && <div className="PostCard--Excerpt">{excerpt}</div>}
    </div>
  </Link>
)

export default PostCard
