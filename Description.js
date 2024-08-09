

import React from 'react';
import product from './Product';
import './description.css';

const Description = () => {
  return <p className='description'>{product.description}</p>;
};

export default Description;
