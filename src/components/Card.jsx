import React, { useState } from 'react'
import styles from '../styles/card.module.css'
const Card = ({details}) => {

  return (
    <div className={styles.card}> 
    
      <div className={styles.imageHolder}>
        <img className={styles.image} src={details.image} alt='Website-Img'/>
      </div>
      
      <div className={styles.cardDescription}>
        <div className={styles.title}>{details.title}</div>
      </div>
    </div>
  )
}

export default Card