import React from 'react'
import styles from '../styles/two.module.css';

const Two = () => {
  return (
    <div className={styles.two}>
        <div className={styles.containerOne}>
            <img src='imran.png' alt='imran-photo'/>
            <div className={styles.buttonGrp}>
              <button className={`${styles.btn1} btn btn-info`} type="button" >Languages</button>
              <button className={`${styles.btn2} btn btn-info`} type="button" >Skills</button>
            </div>
        </div>
        <div className={styles.containerTwo}>
            The weirdest of Human imagination can be realised through softwares
        </div>    
    </div>
  )
}

export default Two