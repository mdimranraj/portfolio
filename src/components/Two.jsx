import React, { useState } from 'react'
import styles from '../styles/two.module.css';
import { Link } from 'react-router-dom';

const Two = () => {

  return (
    <div className={styles.two}>
        <div className={styles.containerOne}>
            <div className={styles.photoDiv}>
              <img className={styles.photo} src='imran2.png' alt='imran-photo'/>
              <h6>Md Imran Raj</h6>
            </div>
            
            <div className={styles.buttonGrp}>
              <Link to="/aboutme"><button className={`${styles.btn1} btn btn-info`} type="button" >Get to know me</button></Link>
              <a target="_blank" href='https://drive.google.com/uc?export=download&id=1zSfliRZIFlZOHW-WBdEKykV1txXAPn68' download='ImranResume.pdf'>
                <button className={`${styles.btn2} btn btn-info`} type="button" >Download Resume</button>
              </a>
            </div>
        </div>
        <div className={styles.containerTwo}>
            <q>The weirdest of Human imagination can be realised through softwares</q>
        </div>    
    </div>
  )
}

export default Two