import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Slider from "react-animated-slider";
import "./banner.scss";

const Banners = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        allBannerJson: allMarkdownRemark(
          filter: { frontmatter: { banner: { eq: true } } }
          sort: { fields: frontmatter___order, order: ASC }
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
                  fluid(quality: 85, maxWidth: 1444) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
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
    `}
    render={(data) => {
      // Set ImageData.
      var banners = data.allBannerJson.nodes.map((b) => {
        return { ...b.frontmatter, ...b };
      });
      return (
        <Slider
          className={`slider-wrapper`}
          duration={4000}
          autoplay={4000}
          infinite={true}
        >
          {/* {banners.map(item => (
            <BannerSlide key={`b${item.id}`} banner={item} />
          ))} */}
          {banners &&
            banners.map((item) => (
              <div
                key={`banner` + item.id}
                className={`slider-content`}
                style={{
                  backgroundImage: `url('${item.image.childImageSharp.fluid.src}')`,
                }}
              >
                {/* <Content> */}
                <div className={`inner`}>
                  {item.description && <h2>{item.title}</h2>}
                  {item.description && <p>{item.description}</p>}
                  {item.goto && item.goto.link && (
                    <Link className={`action`} to={item.goto.link}>
                      {item.goto.linktext}
                    </Link>
                  )}
                </div>
                {/* </Content> */}
              </div>
            ))}
        </Slider>
      );
    }}
  />
);

// const BannerSlide = ({ banner: { id, image, title, description, button } }) => (
//   <Container>
//     <BackgroundImage fluid={image.childImageSharp.fluid}>
//       <Content>
//         <Title>{title}</Title>
//         <Subtitle>{description}</Subtitle>
//         <Action>{button}</Action>
//       </Content>
//     </BackgroundImage>
//   </Container>
// );
export default Banners;
