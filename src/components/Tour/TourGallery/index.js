import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import "./tourgallery.scss";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
//https://blog.usejournal.com/building-highly-performant-masonry-layouts-with-gatsby-js-54115acc3e72
// public class TourGallery ({ tour: { gallery } }) => {

export class TourGallery extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
  };

  constructor(props) {
    super(props);
  }

  clickOpen(isOpen, photoIndex) {
    if (typeof photoIndex === "undefined") photoIndex = 0;
    this.setState({ isOpen, photoIndex });
    // setIsOpen(openState);
    // setIndex(_index);
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    var gallery = this.props.tour.gallery;
    const sliderImages = gallery.map((item) => {
      return {
        src: item.image.childImageSharp.fluid.src,
        w: item.image.childImageSharp.fluid.presentationWidth,
        h: item.image.childImageSharp.fluid.presentationHeight,
      };
    });

    const images = gallery.map((item) => item.image.childImageSharp.high.src);

    // console.log(JSON.stringify(sliderImages));

    return (
      <div className="container">
        {gallery && <h2 className="row col-12">Gallery</h2>}
        <div className="row">
          {gallery &&
            gallery.map((item, i) => (
              <div
                onClick={() => this.clickOpen(true, i)}
                onKeyDown={() => this.clickOpen(true, i)}
                className="col-xs-1 col-4 imgwrapper"
                key={`tg${i}`}
              >
                <Img
                  key={item.image.childImageSharp.id}
                  fluid={item.image.childImageSharp.fluid}
                  alt={item.image.title}
                />
              </div>
            ))}
        </div>
        {isOpen && (
          <Lightbox
          className="imageZoom"
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}

TourGallery.propsTypes = {
  tour: PropTypes.shape({
    title: PropTypes.string,
    gallery: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.any,
        name: PropTypes.string,
      })
    ),
  }),
};

export default TourGallery;
