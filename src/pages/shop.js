

import React from 'react';
import '../App.css';
import Nav from '../components/nav';
// import { Link } from 'react-router-dom';

function Shop() {
  return (
    <div className="App">
      <header className="vv">
      <Nav/>
      </header>
        <div className='pp '>
            <div className=' grid grid-cols-3 gap-4 md:grid-cols-2  '>
                <div className=''>
                 1
                </div>
                <div className=' border border-black'>
                 2
                </div>
                <div>
                 3
                </div>
                <div className=' border border-black'>
                 2
                </div>
                <div className=' border border-black'>
                 2
                </div>
                <div className=' border border-black'>
                 2
                </div>
            </div>
        </div>    
    </div>
  );
}

export default Shop;
