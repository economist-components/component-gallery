
import Gallery from '..';
import React from 'react/addons';
import chai from 'chai';
chai.should();
describe('Gallery', () => {
  it('is compatible with React.Component', () => {
    Gallery.should.be.a('function')
      .and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(<Gallery/>).should.equal(true);
  });
});
