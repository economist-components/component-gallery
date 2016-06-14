import 'babel-polyfill';
import Gallery from '../src';
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
chai.use(chaiEnzyme()).should();

describe('Gallery', () => {
  let images = null;
  beforeEach(() => {
    images = [
      {
        title: '1',
        caption: 'ONE RUSSIAN',
        sources: [
          {
            url: 'http://placekitten.com/2000/1136',
            width: 2000,
            height: 1136,
            dppx: 1,
          },
        ],
        alt: 'this is the first alt',
      },
      {
        title: '2',
        caption: 'THE FIRST TO GO?',
        sources: [
          {
            url: 'http://placekitten.com/1190/560',
            width: 1190,
            height: 560,
            dppx: 1,
          },
          {
            url: 'http://placekitten.com/480/390',
            width: 480,
            height: 390,
            dppx: 1,
          },
        ],
        alt: 'this is the second alt',
      },
      {
        title: '3',
        caption: 'CRACKS IN THE CAUCASUS',
        sources: [
          {
            url: 'http://placekitten.com/1190/560',
            width: 1190,
            height: 560,
            dppx: 1,
          },
          {
            url: 'http://placekitten.com/480/390',
            width: 480,
            height: 390,
            dppx: 1,
          },
        ],
        alt: 'this is the third alt',
      },
      {
        title: '4',
        caption: 'BACK TO THE FUTURE',
        sources: [
          {
            url: 'http://placekitten.com/1190/560',
            width: 1190,
            height: 560,
            dppx: 1,
          },
          {
            url: 'http://placekitten.com/480/390',
            width: 480,
            height: 390,
            dppx: 1,
          },
        ],
        alt: 'this is the fourth alt',
      },
      {
        title: '5',
        caption: 'TARTAR SOURCE',
        sources: [
          {
            url: 'http://placekitten.com/2000/1136',
            width: 2000,
            height: 1136,
            dppx: 1,
          },
        ],
        alt: 'this is the fith alt',
      },
    ];
  });

  it('renders a React element', () => {
    React.isValidElement(<Gallery images={images} />).should.equal(true);
  });

  describe('Rendering', () => {
    let rendered = null;
    let gallery = null;
    beforeEach(() => {
      rendered = mount(<Gallery images={images} />);
      gallery = rendered.find('.gallery');
    });

    it('renders a top level div.gallery', () => {
      gallery.should.have.tagName('div');
      gallery.should.have.className('gallery');
    });
  });
});
