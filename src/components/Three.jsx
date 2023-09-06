import React from 'react'
import Card from './Card'
import styles from '../styles/three.module.css'

const Three = () => {
  return (
    <div className={styles.three}>
      <div className={styles.mainContainer}>
        <div className={styles.topIcons}>
        <i className={`fa-brands fa-github ${styles.github}`}></i>
        <i className={`fa-brands fa-facebook ${styles.facebook}`}></i>
        <i className={`fa-brands fa-twitter ${styles.twitter}`}></i>
        </div>
        <h3>Connect with me</h3>
        <div className={styles.bottomIcons}>
        <i class={`fa-brands fa-square-instagram ${styles.instagram}`}></i>
        <i class={`fa-brands fa-linkedin ${styles.linkedin}`}></i>
        <i class={`fa-solid fa-envelope ${styles.gmail}`}></i>
        </div>
      </div>
    </div>
  )
}

export default Three