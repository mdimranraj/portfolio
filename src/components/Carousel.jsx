import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../styles/carousel.module.css'
import designlinks from '../data/designlinks';
function Carousel(){
    return (

        <div className={styles.slider}>
        <div className={styles.slideTrack}>
            {
            designlinks.map((currObject)=>{ return (
                <Link to={`/projectdetails/${currObject.id}`}>
                <div className={styles.slide} key={currObject.id}>
                    <img src={currObject.image} alt='img'/>
                    <div>{currObject.title}</div>
                </div>
                </Link>
                )})
                
            }      
        </div>
    </div>



    );
}

export default Carousel;