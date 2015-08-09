import Gallery from './../index.es6';
import React from 'react/addons';
const TestUtils = React.addons.TestUtils;
const data = require('./../data.json');
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
