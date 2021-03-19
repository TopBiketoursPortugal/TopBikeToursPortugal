import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from "gatsby-plugin-image";
import './tourgallery.scss'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
//https://blog.usejournal.com/building-highly-performant-masonry-layouts-with-gatsby-js-54115acc3e72
// public class TourGallery ({ tour: { gallery } }) => {

const TourGallery = (props) => {
  const [gallery] = useState(props.tour.gallery)
  const [image, setImage] = useState(null)
  const [nextImage, setNextImage] = useState(null)
  const [prevImage, setPrevImage] = useState(null)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const clickOpen = (isOpen, photoIndex) => {
    setPhotoIndex(photoIndex ?? 0)
    setIsOpen(isOpen)
  }

  useEffect(() => {
    setImage(gallery[photoIndex].image.childImageSharp.high.src)
    setPrevImage(
      gallery[(photoIndex + gallery.length - 1) % gallery.length].image
        .childImageSharp.high.src
    )
    setNextImage(
      gallery[(photoIndex + 1) % gallery.length].image.childImageSharp.high.src
    )
  }, [gallery, photoIndex])

  return (
    <div className="container">
      {!!gallery.length && <h2 className="row col-12">Gallery</h2>}
      <div className="row">
        {!!gallery.length &&
          gallery.map((item, i) => (
            <div
              role="button"
              tabIndex={i}
              onClick={() => clickOpen(true, i)}
              onKeyDown={() => clickOpen(true, i)}
              className="col-xs-1 col-4 imgwrapper"
              key={`tg${i}`}
            >
              <GatsbyImage
                image={item.image.childImageSharp.gatsbyImageData}
                key={item.image.childImageSharp.id}
                alt={item.image.title} />
            </div>
          ))}
      </div>
      {isOpen && (
        <Lightbox
          className="imageZoom"
          mainSrc={image}
          nextSrc={nextImage}
          prevSrc={prevImage}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + gallery.length - 1) % gallery.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % gallery.length)
          }
        />
      )}
    </div>
  );
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
}

export default TourGallery
