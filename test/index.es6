import Gallery from './../index.es6';
import React from 'react';
const TestUtils = React.addons.TestUtils;
const data = require('./../data.json');
describe('Gallery', () => {
  it('should exist', () => {
    Gallery.should.be.a('function');
  });

  it('renders a component', () => {
    (<Gallery/>).should.be.an('object');
  });

  it('is a react component', () => {
    const defaultSceneIndex = 0;
    (new Gallery(defaultSceneIndex)).should.be.an.instanceOf(React.Component);
  });
});

describe('Rendering', () => {
  const renderer = TestUtils.createRenderer();
  let component;
  beforeEach(() => {
    component = renderer.render(React.createElement(Gallery, { images: data }));
    component = renderer.getRenderOutput();
  });

  it('renders a div.Gallery', () => {
    component
      .should.have.property('type', 'div');
    component
      .should.have.deep.property('props.className', 'Gallery');
  });
});
