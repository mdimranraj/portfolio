import React from 'react'
import Card from './Card'
import styles from '../styles/three.module.css'

const Three = () => {
  return (
    <div className={styles.three}>
      <div className={styles.mainContainer}>
        <div className={styles.topIcons}>
        <a target='_blank' href='https://github.com/mdimranraj'><i className={`fa-brands fa-github ${styles.github}`}></i></a>
        <a href='https://www.facebook.com/mdimranraj786' target='_blank'><i className={`fa-brands fa-facebook ${styles.facebook}`}></i></a>
        <a href='https://www.twitter.com/MdImranRaj13' target='_blank'><i className={`fa-brands fa-twitter ${styles.twitter}`}></i></a>
        </div>
        <h3>Connect with me</h3>
        <div className={styles.bottomIcons}>
        <a href='https://www.instagram.com/mdimranraj007/' target='_blank'><i class={`fa-brands fa-square-instagram ${styles.instagram}`}></i></a>
        <a href='https://www.linkedin.com/in/md-imran-raj-952659201/' target='_blank'><i class={`fa-brands fa-linkedin ${styles.linkedin}`}></i></a>
        <a href='mailto:mdimranraj786@gmail.com' target='_blank'><i class={`fa-solid fa-envelope ${styles.gmail}`}></i></a>
        </div>
      </div>
    </div>
  )
}

export default Three