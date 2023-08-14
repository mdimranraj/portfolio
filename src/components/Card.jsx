import React from 'react'
import styles from '../styles/card.module.css'
const Card = () => {
  return (
    <div className={styles.card}> 
      <img src='dummy.png' alt='Website-Img'/>
      <div className={styles.cardDescription}>
        kjshhe ijshi ksi 
      </div>
    </div>
  )
}

export default Card