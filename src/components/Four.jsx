import React, { useState } from 'react'
import styles from '../styles/four.module.css'
import Carousel from './Carousel'
import { Link } from 'react-router-dom';
const Four = () => {
  const [hide,setHide] = useState(false);
  function display(){
    setHide(true);
  }
  function displayOff(){
    setHide(false);
  }
  return (
    <div className={styles.four}>
        <div className={styles.titleBar}>
          <h3 className={styles.heading}>Showroom</h3>
          <div className={styles.extendBtn}>
            <Link to='/designs'>
              {hide && <span className={styles.extendText}>Visit Showroom</span>}
              {/* <img className={styles.extend} alt='extend' src='expand.png' onMouseOver={display} onMouseOut={displayOff}></img> */}
              <i className="fa-solid fa-layer-group fa-bounce fa-lg" onMouseOver={display} onMouseOut={displayOff}></i>
            </Link>
          </div>
        </div>
        <div className={styles.designContainer}>
            <Carousel/>
        </div>
    </div>
  )
}

export default Four