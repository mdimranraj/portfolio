import React from 'react'
import Card from './Card'
import styles from '../styles/three.module.css'

const Three = () => {
  return (
    <div className={styles.three}>
      <h3>Connect with me</h3>
      <div className={styles.mainContainer}>
        <img src='gmail.png' alt='connect' />
        <img src='facebook.png' alt='connect' />
        <img src='instagram.png' alt='connect' />
        <img src='linkedin.png' alt='connect' />
        <img src='github.png' alt='connect' />
      </div>
    </div>
  )
}

export default Three