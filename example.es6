import React from 'react';
import Gallery from './index.es6';
const data = require('./data.json');
data.scenes.forEach((scene) => Gallery.store.add(scene));
export default (<Gallery />);
