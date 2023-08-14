import React from 'react'
import styles from '../styles/four.module.css'
import Carousel from './Carousel'
const Four = () => {
  return (
    <div className={styles.four}>
        <h3 className={styles.heading}>Explore my designs</h3>
        <div className={styles.designContainer}>
            <Carousel/>
        </div>
    </div>
  )
}

export default Four