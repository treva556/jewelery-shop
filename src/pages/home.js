
import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="App">
      <header className="vv">
      <p className='wtext'> Nav   shop   About</p> 
      </header>
      <div className='pp'>
        Jewelery shop website
        <Link to='https://aarkcollective.com/' className='h'></Link>
        <p>https://aarkcollective.com/  </p>
      </div>
      <div className='foot'>
      <p className='wtext'> footer </p>
      </div>
      
    </div>
  );
}

export default Main;
