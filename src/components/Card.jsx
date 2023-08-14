import React from 'react'
import styles from '../styles/card.module.css'
const Card = ({details}) => {
  return (
    <div className={styles.card}> 
      <img src={details.image} alt='Website-Img'/>
      <div className={styles.cardDescription}>
        {details.title}
      </div>
    </div>
  )
}

export default Card