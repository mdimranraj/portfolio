import React from 'react';
import styles from '../styles/carousel.module.css'
import designlinks from '../data/designlinks';
function Carousel(){
    return (

        <div className={styles.slider}>
        <div className={styles.slideTrack}>
            {
            designlinks.map((currObject)=>{ return (
                <div className={styles.slide} key={currObject.id}>
                    <img src={currObject.image} alt='img'/>
                </div>)})
                
            }      
        </div>
    </div>



    );
}

export default Carousel;