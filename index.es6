import React from 'react';
import Pager from '@economist/component-pager';
import ImageCaption from '@economist/component-imagecaption';

export default class Gallery extends React.Component {

  static get propTypes() {
    return {
      children: React.PropTypes.node,
      defaultSceneIndex: React.PropTypes.number,
      images: React.PropTypes.array,
      sizeThreshold: React.PropTypes.number,
      test: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      defaultSceneIndex: 0,
      sizeThreshold: 500,
    };
  }

  // CONSTRUCTOR
  //    bind handleResize to this component
  //    set default state
  constructor(props) {
    super(props);
    this.nextPassState = this.nextPassState.bind(this);
    this.state = {
      sceneIndex: props.defaultSceneIndex,
      hideImage: false,
      showPager: false,
    };
  }

  componentDidMount() {
    this.setState({ showPager: 'Gallery-loaded' });
  }

  // HANDLE RESIZE ends

  // NEXT PASS STATE
  // Called on timeout from passState to reset scene index
  // and unhide image
  nextPassState(index) {
    this.setState({
      sceneIndex: index,
      hideImage: false,
    });
  }
  // NEXT PASS STATE ends

  // PASS STATE
  // Fields scenechanger click and changes index on state
  // Sets state to hide image, then does a setTimeout to
  // change the image in secret and unhide...
  passState() {
    const index = arguments[0];
    this.setState({ hideImage: true });
    setTimeout(() => {
      this.nextPassState(index);
    }, 550);
  }

  getSrcSet(image) {
    return Object.keys(image).map((key) => `${image[key]} ${key}`).join(',');
  }

  // RENDER
  render() {
    const sceneTotal = this.props.images.length;
    const sceneIndex = this.state.sceneIndex;
    const image = this.props.images[sceneIndex].src;
    const title = this.props.images[sceneIndex].title;
    const alt = this.props.images[sceneIndex].alt;
    const srcset = this.props.images[sceneIndex].srcset;
    const caption = this.props.images[sceneIndex].caption;
    // loaded class for scenechanger display
    const galleryOuterClass = 'Gallery ' + this.state.showPager;

    // Image class-name: hidden or not
    let galleryImagesState = 'Gallery--images-shown';
    if (this.state.hideImage) {
      galleryImagesState += ' Gallery--images-hidden';
    }

    // Image JSX
    const galleryImages = (
      <div className = "Gallery--images">
        <div className = {galleryImagesState}>
          <ImageCaption caption="" src={image} alt={alt} srcset={this.getSrcSet(srcset)} />
        </div>
      </div>
    );
    // Title and caption JSX.
    const captionDiv = (
      <div className="Gallery--features-content">
        <div className="Gallery--features-content-title">
          {title}
        </div>
        <div className="Gallery--features-content--caption">
          {caption}
        </div>
      </div>
    );
    // Glue it all together.
    return (
      <div className={galleryOuterClass}>
        <div className="Gallery--slides">
          {galleryImages}
        </div>
        <div className="Gallery--features">
          {captionDiv}
          <div className="Gallery--features-scenechange">
            <Pager
              sceneTotal={sceneTotal}
              defaultSceneIndex={sceneIndex}
              onChangeIndex={this.passState.bind(this)}
              prevNext="arrows"
              />
          </div>
        </div>
      </div>
    );
  }
}
