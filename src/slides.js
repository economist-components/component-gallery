import ImageCaption from '@economist/component-imagecaption';
import React from 'react';

function renderGalleryImage(activeSlide, image, alt, index) {
  const modifier = (activeSlide === index) ? 'gallery__slide--visible' : 'gallery__slide--hidden';
  return (
    <div className={`gallery__slide ${ modifier }`} key={index}>
      <ImageCaption
        className="gallery__image"
        sources={image}
        alt={alt}
      />
    </div>
  );
}

export default function Slides({
  images,
  activeSlide,
}) {
  const alt = images[activeSlide].alt;
  const galleryImages = images.map((image, index) => (renderGalleryImage(activeSlide, image.sources, alt, index)));
  return (
    <div className="gallery__slides">
      {galleryImages}
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  Slides.propTypes = {
    images: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        title: React.PropTypes.string,
        caption: React.PropTypes.string,
        sources: React.PropTypes.arrayOf(
          React.PropTypes.shape({
            url: React.PropTypes.string,
            width: React.PropTypes.number,
            height: React.PropTypes.number,
            dppx: React.PropTypes.number,
          })
        ),
        alt: React.PropTypes.string,
      })
    ).isRequired,
    activeSlide: React.PropTypes.number.isRequired,
  };
}
