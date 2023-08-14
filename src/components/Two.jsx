import React from 'react'
import styles from '../styles/two.module.css';

const Two = () => {
  return (
    <div className={styles.two}>
        <div className={styles.containerOne}>
            <div className={styles.photoDiv}>
              <img src='imran.png' alt='imran-photo'/>
              <h6>Md Imran Raj</h6>
            </div>
            
            <div className={styles.buttonGrp}>
              <button className={`${styles.btn1} btn btn-info`} type="button" >Languages</button>
              <button className={`${styles.btn2} btn btn-info`} type="button" >Skills</button>
            </div>
        </div>
        <div className={styles.containerTwo}>
            <q>The weirdest of Human imagination can be realised through softwares</q>
        </div>    
    </div>
  )
}

export default Two