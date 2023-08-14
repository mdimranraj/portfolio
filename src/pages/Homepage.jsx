import React from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles/homepage.module.css';
import One from '../components/One';
import Two from '../components/Two';
import Four from '../components/Four';
import Three from '../components/Three';

const Homepage = () => {
  return (
    <div className={styles.homepage}>
        <div className={styles.mainFlex}>
            <div className={styles.firstRow}>
                <div className={styles.one}>
                    <One/>
                </div>
                <div className={styles.two}>
                    <Two/>
                </div>
            </div>
            <div className={styles.secondRow}>
                <div className={styles.three}>
                    <Three/>
                </div>
                <div className={styles.four}>
                    <Four/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage