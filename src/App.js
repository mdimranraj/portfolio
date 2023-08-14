import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Designs from './pages/Designs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/designs' element={<Designs/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Designs/> */}
      
    </div>
  );
}

export default App;
