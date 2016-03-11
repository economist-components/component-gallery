import React from 'react';
import SceneChanger from '@economist/component-scenechanger';
import Slides from './slides';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.handleSlideChange = this.handleSlideChange.bind(this);
    this.state = {
      activeSlide: props.defaultSceneIndex,
    };
  }

  handleSlideChange(...args) {
    const firstIndex = 0;
    const index = args[firstIndex];
    this.setState({ activeSlide: index });
  }

  render() {
    const { images, navigation } = this.props;
    const { activeSlide } = this.state;
    const sceneTotal = images.length;
    const title = images[activeSlide].title;
    const caption = images[activeSlide].caption;
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
      <div className="gallery__features-content">
        {titleDiv}
        {captionDiv}
      </div>
    );
    return (
      <div className="gallery">
        <Slides images={images} activeSlide={activeSlide} />
        <div className="gallery__features">
          {galleryFeatures}
          <div className="gallery__features-navigation">
            {NavigationElement}
          </div>
        </div>
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
    ),
    navigation: React.PropTypes.node,
  };
}
