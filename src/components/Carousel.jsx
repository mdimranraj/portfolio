import React from 'react';
import styles from '../styles/carousel.module.css'
function Carousel(){
    return (

        <div className={styles.slider}>
        <div className={styles.slideTrack}>
            
            <div className={styles.slide}>
                    <img src='dummy.png'/>
            </div>
            <div className={styles.slide}>
                    <img src='nightsky.png'/>
            </div>
            <div className={styles.slide}>
            <img src='dummy.png'/>
            </div>
            <div className={styles.slide}>
            <img src='nightsky.png'/>
            </div>
            <div className={styles.slide}>
            <img src='dummy.png'/>
            </div>
            <div className={styles.slide}>
            <img src='nightsky.png'/>
            </div>
            <div className={styles.slide}>
            <img src='dummy.png'/>
            </div>
            <div className={styles.slide}>
            <img src='nightsky.png'/>
            </div>
            <div className={styles.slide}>
            <img src='dummy.png'/>
            </div>
            
        </div>
    </div>



    );
}

export default Carousel;