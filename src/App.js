

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Main from './pages/home';
import Shop from './pages/shop';



function App() {
  return (
    <div>
     <Router>
      <div className="App">
     

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/shop" element={<Shop/>} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contacts" element={<Contacts />} /> */}
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
