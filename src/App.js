import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Designs from './pages/Designs';
import Aboutme from './pages/Aboutme';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <div className="App">
              
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/designs' element={<Designs/>}/>
          <Route path='/aboutme' element={<Aboutme/>}/>
          <Route path='/projectdetails/:id' element={<ProjectDetails/>}/>
        </Routes>
      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
