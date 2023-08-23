import React from 'react'
import styles from '../styles/aboutme.module.css'
import { Link } from 'react-router-dom'

const Aboutme = () => {
  return (
    <div className={styles.aboutme}>
        <div className={styles.nav}>
            <Link to="/"><button type="button" class="btn btn-secondary"> Back </button></Link>
            <h2>Md Imran Raj</h2>
        </div>
        
        <div className={styles.mainContainer}>
            <div className={styles.introDiv}>
                <div className={styles.introLeft}>
                Application development is not only an art but a process moulded with a lot of patience.
                With a passion for crafting innovative digital experiences,
                I have embarked on a creative odyssey that merges cutting-edge technology with aesthetically pleasing design. 
                Throughout these virtual pages, you will discover a collection of projects that reflect my dedication to creating user-centric applications and captivating web interfaces. 
                From conceptualization to execution, I believe in the power of seamless functionality and elegant visual aesthetics. 
                Join me as we explore the fusion of code and creativity, 
                where every pixel and line of code serves a purpose in delivering exceptional user experiences.
                </div>
                <div className={styles.introRight}>
                    <img src="imran.png" alt='imran-pic'/>
                    <span><q>The weirdest of Human imagination can be realised through softwares</q></span>
                </div>
            </div>
            <div className={styles.education}>
                <h2>Education</h2>

            </div>
            <div className={styles.skills}>
                <h2>Skills</h2>
                
            </div>
            <div className={styles.certificates}>
                <h2>Certificates</h2>

            </div>
            
        </div>
    </div>
  )
}

export default Aboutme