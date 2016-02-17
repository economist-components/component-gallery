import ImageCaption from '@economist/component-imagecaption';
import React from 'react';
import SceneChanger from '@economist/component-scenechanger';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.handleSlideChange = this.handleSlideChange.bind(this);
    this.state = {
      activeSlide: props.defaultSceneIndex,
    };
  }

  handleSlideChange(...args) {
    const first = 0;
    const index = args[first];
    this.setState({ activeSlide: index });
  }

  renderGalleryImage(image, alt, index) {
    const { activeSlide } = this.state;
    let klass = 'gallery__slide gallery__slide--hidden';
    if (activeSlide === index) {
      klass = 'gallery__slide gallery__slide--visible';
    }
    return (
      <div className={klass} key={index}>
        <ImageCaption
          className="gallery__image"
          sources={image}
          alt={alt}
        />
      </div>
    );
  }

  render() {
    const { images, navigation } = this.props;
    const { activeSlide } = this.state;
    const sceneTotal = images.length;
    const title = images[activeSlide].title;
    const alt = images[activeSlide].alt;
    const caption = images[activeSlide].caption;
    const galleryImages = images.map((image, index) => (this.renderGalleryImage(image.sources, alt, index)));
    let titleDiv = null;
    if (title) {
      titleDiv = (
        <div className="gallery__features-content-title">
          {title}
        </div>
      );
    }

    let captionDiv = null;
    if (caption) {
      captionDiv = (
        <div className="gallery__features-content--caption">
          {caption}
        </div>
      );
    }

    let NavigationElement = (
      <SceneChanger
        sceneTotal={sceneTotal}
        defaultSceneIndex={activeSlide}
        onChangeIndex={this.handleSlideChange}
      />
    );
    if (navigation) {
      const Navigation = navigation;
      NavigationElement = (<Navigation { ...this.props } />);
    }

    const galleryFeatures = (
      <div className="gallery__features">
        <div className="gallery__features-content">
          {titleDiv}
          {captionDiv}
        </div>
        <div className="gallery__features-navigation">
          {NavigationElement}
        </div>
      </div>
    );
    return (
      <div className="gallery">
        <div className="gallery__slides">
          {galleryImages}
        </div>
        {galleryFeatures}
      </div>
    );
  }
}

Gallery.defaultProps = {
  defaultSceneIndex: 0,
  navigation: null,
};

if (process.env.NODE_ENV !== 'production') {
  Gallery.propTypes = {
    defaultSceneIndex: React.PropTypes.number,
    images: React.PropTypes.arrayOf(React.PropTypes.object),
    navigation: React.PropTypes.node,
  };
}
