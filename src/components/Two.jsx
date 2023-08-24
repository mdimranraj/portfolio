import React from 'react'
import styles from '../styles/two.module.css';
import { Link } from 'react-router-dom';

const Two = () => {
  return (
    <div className={styles.two}>
        <div className={styles.containerOne}>
            <div className={styles.photoDiv}>
                <Link to='/aboutme'>
                <div className={styles.flipBox}>
                  <div className={styles.flipBoxInner}>
                    <div className={styles.flipBoxFront}>
                      <img className={styles.photo} src='imran.png' alt='imran-photo'/>
                    </div>
                    <div className={styles.flipBoxBack}>
                      <p>Explore More →</p>
                    </div>
                  </div>
                </div>
                </Link>

              {/* <img src='imran.png' alt='imran-photo'/> */}
              <h6>Md Imran Raj</h6>
            </div>
            
            <div className={styles.buttonGrp}>
              <button className={`${styles.btn1} btn btn-info`} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Languages</button>
              <a href='../resume/resume9.pdf' download='ImranResume.pdf'><button className={`${styles.btn2} btn btn-info`} type="button" >Download Resume</button></a>
            </div>
        </div>
        <div className={styles.containerTwo}>
            <q>The weirdest of Human imagination can be realised through softwares</q>
        </div>    
    </div>
  )
}

export default Two