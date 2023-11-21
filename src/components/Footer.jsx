import React from 'react'
import styles from '../styles/footer.module.css'
const Footer = () => {
  return (
    <div className={styles.footer}>
                <div className={styles.copyright}> 
                    ©️Copyright 2023 <span>Md Imran Raj</span>
                </div>
                <div className={styles.connect}>
                        <a target='_blank' href='https://github.com/mdimranraj'><i className={`fa-brands fa-github ${styles.github}`}></i></a>
                        <a href='https://www.facebook.com/mdimranraj786' target='_blank'><i className={`fa-brands fa-facebook ${styles.facebook}`}></i></a>
                        <a href='https://www.twitter.com/MdImranRaj13' target='_blank'><i className={`fa-brands fa-twitter ${styles.twitter}`}></i></a>
                        <a href='https://www.instagram.com/mdimranraj007/' target='_blank'><i class={`fa-brands fa-square-instagram ${styles.instagram}`}></i></a>
                        <a href='https://www.linkedin.com/in/md-imran-raj-952659201/' target='_blank'><i class={`fa-brands fa-linkedin ${styles.linkedin}`}></i></a>
                </div>
                
    </div>
  )
}

export default Footer