import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Designs from './pages/Designs';
import styles from '../src/styles/modal.module.css';
import Aboutme from './pages/Aboutme';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <div className="App">
      
        {/* Modal 1 */}

        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className={`modal-dialog modal-dialog-centered modal-dialog-scrollable`}>
            <div className={`modal-content ${styles.modal1}`}>
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Languages</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                ...
              </div>
            </div>
          </div>
        </div>


        {/* =========== */}
        
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
