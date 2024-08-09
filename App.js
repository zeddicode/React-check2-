
import React from 'react';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './image';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './image.css';

const firstName = 'Yekeen'; 

function App() {
  return (
    <div className="App">
      <Card className='productCard'>
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <div className='hello'>
        <h4>Hello, {firstName || 'there'}!</h4>
        {firstName && (
          <img className='productImage'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJryObKqzyPiK1o4e49Uj5PXn7PV5vbo7Qw&s"
            alt="Welcome"
             />
        )}
      </div>
    </div>
  );
}

export default App;
