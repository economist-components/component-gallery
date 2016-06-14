import 'babel-polyfill';
import Gallery from '../src';
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
chai.use(chaiEnzyme()).should();

describe('Gallery', () => {
  it('renders a React element', () => {
    React.isValidElement(<Gallery />).should.equal(true);
  });

  describe('Rendering', () => {
    let rendered = null;
    let gallery = null;
    beforeEach(() => {
      rendered = mount(<Gallery />);
      gallery = rendered.find('.gallery');
    });

    it('renders a top level div.gallery', () => {
      gallery.should.have.tagName('div');
      gallery.should.have.className('gallery');
    });
  });
});
