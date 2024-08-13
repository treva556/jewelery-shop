
import React from 'react';
import '../App.css';
import Nav from '../components/nav';
// import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="App">
      <header className="vv">
      <Nav/>
      <div className='pp'> 
        img
      </div>
      </header>
          
      <div className=' mt-1 pp'>
            A short About
        </div>  
          <div className=' mt-1 pp'>
            Items
        </div>    
        <div className=' mt-1 pp'>
            Most popular
        </div>  
        <div className=' mt-1 pp'>
            New arrivals
      </div>  
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        <div className=' mt-1 pp'>
            Im 1
        </div>  
        <div className=' mt-1 pp'>
            Im 2
        </div>  
     </div>
    </div>
  );
} 

export default Main;
