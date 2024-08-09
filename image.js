
import React from 'react';
import product from './Product';

const Image = () => {
  return <img className='image' src={product.imageUrl} alt={product.name}/>;
};

export default Image;
