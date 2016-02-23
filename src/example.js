import Gallery from './';
import React from 'react';

const images = [
  {
    title: '1',
    caption: 'ONE RUSSIAN',
    sources: [
      {
        url: 'http://world-if-stage.elasticbeanstalk.com/assets/3ff076cc.svg',
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
        url: `http://cms-worldin.economist.com/sites/default/files/styles/1190x560l/
public/Asia-Japan%27s-unfinished-business-3570x1680.jpg?itok=SZqlubHA`,
        width: 1190,
        height: 560,
        dppx: 1,
      },
      {
        url: `http://cms-worldin.economist.com/sites/default/files/styles/480x390p/
public/Asia-Japan%27s-unfinished-business-1440x1170.jpg?itok=kKQzSkC8`,
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
        url: `http://cms-worldin.economist.com/sites/default/files/styles/1190x560l/
public/S%26T-The-year-of-the-organoid-3570x1680.jpg?itok=6YlYw_iQ`,
        width: 1190,
        height: 560,
        dppx: 1,
      },
      {
        url: `http://cms-worldin.economist.com/sites/default/files/styles/480x390p/
public/S%26T-The-year-of-the-organoid-1440x1170.jpg?itok=vAGOd1cS`,
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
        url: `http://cms-worldin.economist.com/sites/default/files/styles/
1190x560l/public/TWI_2016_D.jpg?itok=cAYSYWwq`,
        width: 1190,
        height: 560,
        dppx: 1,
      },
      {
        url: `http://cms-worldin.economist.com/sites/default/files/styles/
480x390p/public/TWI_2016_M.jpg?itok=XN3EVIIv`,
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
        url: 'http://world-if-stage.elasticbeanstalk.com/assets/3ff076cc.svg',
        width: 2000,
        height: 1136,
        dppx: 1,
      },
    ],
    alt: 'this is the fith alt',
  },
];
export default (
  <Gallery images={images} />
);
