// GALLERY

import React from 'react';
import SceneChanger from '@economist/component-scenechanger';
import ImageCaption from '@economist/component-imagecaption';

export default class Gallery extends React.Component {

  static get propTypes() {
    return {
      defaultSceneIndex: React.PropTypes.number,
      images: React.PropTypes.array,
      children: React.PropTypes.node,
      imageArray: React.PropTypes.array,
      sizeThreshold: React.PropTypes.number,
    };
  }

  static get defaultProps() {
    return {
      defaultSceneIndex: 0,
      galleryArray: [
        {
          'image': './assets/None_1_v001.png',
          'title': '1',
          'caption': 'IMAGE 1'
        },
        {
          'image': './assets/Chech_2_v001.png',
          'title': '2',
          'caption': 'IMAGE 2'
        },
        {
          'image': './assets/Caucs_3_v001.png',
          'title': '3',
          'caption': 'IMAGE 3'
        },
        {
          'image': './assets/Tatar_4_v001.png',
          'title': '4',
          'caption': 'IMAGE 4'
        },
        {
          'image': './assets/Crim_5_v001.png',
          'title': '5',
          'caption': 'IMAGE 5'
        },
        {
          'image': './assets/Ural_6_v001.png',
          'title': '6',
          'caption': 'IMAGE 6'
        },
        {
          'image': './assets/Sib_7_v001.png',
          'title': '7',
          'caption': 'IMAGE 7'
        },
        {
          'image': './assets/Other_8_v001.png',
          'title': '8',
          'caption': 'IMAGE 8'
        },
        {
          'image': './assets/All_9_v001.png',
          'title': '9',
          'caption': 'IMAGE 9'
        }
      ],
      sizeThreshold: 500,
    };
  }

  // CONSTRUCTOR 
  //    bind handleResize to this component
  //    set default state
  constructor(props) {
    super(props);
    this.handleResize = this.handleResize.bind(this);
    this.state = { 
      sceneIndex: props.defaultSceneIndex,
      isSmall: false
    };
  }

  // HANDLE RESIZE
  // Responds to resize event by comparing component
  // width with big/small threshold and setting state accordingly
  handleResize(e) {
    var width, resizeFlag;
    width = React.findDOMNode(this).offsetWidth;
    resizeFlag = false; // by default
    if (width < this.props.sizeThreshold) {
      resizeFlag = true;
    }
    this.setState({ isSmall: resizeFlag });
  }
  // HANDLE RESIZE ends



  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  passState() {
    this.setState({ sceneIndex: arguments[0] });
  }

  render() {
    const sceneTotal = this.props.galleryArray.length;
    const sceneIndex = this.state.sceneIndex;
    const image = this.props.galleryArray[sceneIndex].image;
    const title = this.props.galleryArray[sceneIndex].title;
    const caption = this.props.galleryArray[sceneIndex].caption;
    // Class name: big or small...
    var galleryOuterClass = "mnv-ec-gallery-outer-wrapper";
    if (this.state.isSmall) {
      galleryOuterClass += " mnv-ec-gallery-small";
    }
    else {
      galleryOuterClass += " mnv-ec-gallery-big";
    }

    // Image
    var mapWrapper = 
      <div className = "mnv-ec-gallery-map-wrapper">
        <div className = "mnv-ec-gallery-map-holder">
          <ImageCaption caption="" src={image}/>
        </div>
      </div>
    ;

    // Title and caption
    var captionDiv =
      <div className="mnv-ec-gallery-caption-outer-wrapper">
        <div className=".mnv-ec-gallery-scene-title-div">
          {title}
        </div>
        <div className="mnv-ec-gallery-scene-caption-div">
          {caption}
        </div>
      </div>
    ;

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

/*
    return (








    );
*/
  }
}
