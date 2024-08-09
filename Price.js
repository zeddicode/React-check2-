
import React from 'react';
import product from './Product';
import './Price.css';

const Price = () => {
  return <h3 className='price'>{product.price}</h3>;
};

export default Price;
