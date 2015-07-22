// GALLERY
/* global window */

import React from 'react';
import SceneChanger from '@economist/component-scenechanger';
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
    this.handleResize = this.handleResize.bind(this);
    this.nextPassState = this.nextPassState.bind(this);
    this.state = {
      sceneIndex: props.defaultSceneIndex,
      isSmall: false,
      hideImage: false,
    };
  }


  // componentWillMount() {
  // }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
    this.props.test = 'loaded';
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  // HANDLE RESIZE
  // Responds to resize event by comparing component
  // width with big/small threshold and setting state accordingly
  handleResize() {
    const width = React.findDOMNode(this).offsetWidth;
    let resizeFlag = false;
    if (width < this.props.sizeThreshold) {
      resizeFlag = true;
    }
    this.setState({ isSmall: resizeFlag });
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
  // PASS STATE ends

  // RENDER
  render() {
    const sceneTotal = this.props.images.length;
    const sceneIndex = this.state.sceneIndex;
    const image = this.props.images[sceneIndex].src;
    const title = this.props.images[sceneIndex].title;
    const caption = this.props.images[sceneIndex].caption;
    // Class name: big or small, with test:loaded class for scenechanger display
    let galleryOuterClass = 'mnv-ec-gallery-outer-wrapper ' + this.props.test;
    if (this.state.isSmall) {
      galleryOuterClass += ' mnv-ec-gallery-small';
    } else {
      galleryOuterClass += ' mnv-ec-gallery-big';
    }

    // Image class-name: hidden or not
    let mapHolderClass = 'mnv-ec-gallery-map-holder';
    if (this.state.hideImage) {
      mapHolderClass += ' mnv-ec-gallery-map-holder-hidden';
    }
    // Image JSX
    const mapWrapper = (
      <div className = "mnv-ec-gallery-map-wrapper">
        <div className = {mapHolderClass}>
          <ImageCaption caption="" src={image}/>
        </div>
      </div>
    );
    // Title and caption JSX
    const captionDiv = (
      <div className="mnv-ec-gallery-caption-outer-wrapper">
        <div className="mnv-ec-gallery-scene-title-div">
          {title}
        </div>
        <div className="mnv-ec-gallery-scene-caption-div">
          {caption}
        </div>
      </div>
    );
    // Glue it all together:
    return (
      <div className={galleryOuterClass}>
        <div className="mnv-ec-gallery-inner-wrapper">
          {mapWrapper}
          <div className="mnv-ec-gallery-nav-wrapper">
            {captionDiv}
            <div className="mnv-ec-gallery-scenechange-external-wrapper">
              <SceneChanger
                sceneTotal={sceneTotal}
                defaultSceneIndex={sceneIndex}
                onChangeIndex={this.passState.bind(this)}/>
            </div>
            <div className="mnv-ec-gallery-red-slab"/>
          </div>
        </div>
      </div>
    );
  }
}
