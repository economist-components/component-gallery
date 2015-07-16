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
    };
  }

  static get defaultProps() {
    return {
      defaultSceneIndex: 1,
      imageArray: [
        'http://lorempixel.com/1190/676/city',
        'http://lorempixel.com/1190/676/people',
        'http://lorempixel.com/1190/676/animals',
        'http://lorempixel.com/1190/676/fashion',
        'http://lorempixel.com/1190/676/cats',
      ],
    };
  }

  constructor(props) {
    super(props);
    this.state = { sceneIndex: props.defaultSceneIndex };
  }

  passState() {
    this.setState({ sceneIndex: arguments[0] });
  }

  render() {
    const sceneTotal = this.props.imageArray.length;
    const sceneIndex = this.state.sceneIndex;
    const image = this.props.imageArray[sceneIndex];
    return (
      <div>
        <ImageCaption caption="To come" src={image}/>
        <SceneChanger
          sceneTotal={sceneTotal}
          defaultSceneIndex={sceneIndex}
          onChangeIndex={this.passState.bind(this)}
        />
      </div>
    );
  }
}
