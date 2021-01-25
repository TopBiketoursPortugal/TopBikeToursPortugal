import React, { useState } from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import "./tourgallery.scss";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
//https://blog.usejournal.com/building-highly-performant-masonry-layouts-with-gatsby-js-54115acc3e72
// public class TourGallery ({ tour: { gallery } }) => {

const TourGallery = (props) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const clickOpen = (isOpen, photoIndex) => {
    if (typeof photoIndex === "undefined") setPhotoIndex(0);
    setPhotoIndex(photoIndex);
    isOpen(isOpen);
  };

  let { gallery } = props.tour.gallery;

  const images = gallery.map((item) => item.image.childImageSharp.high.src);

  return (
    <div className="container">
      {gallery && <h2 className="row col-12">Gallery</h2>}
      <div className="row">
        {gallery &&
          gallery.map((item, i) => (
            <div
              role="button"
              tabIndex={i}
              onClick={() => clickOpen(true, i)}
              onKeyDown={() => clickOpen(true, i)}
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
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

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
