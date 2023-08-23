import React from 'react'
import styles from '../styles/one.module.css';
const One = () => {

  return (
    <div className={styles.one}>
          <h1>Hey,</h1>
          <h3 className={styles.typeHead}><div>I'm a </div><div className={styles.typingText}>Full Stack Web Developer.</div></h3>
          <div>   
            <div>From conceptualization to execution, I believe in the power of seamless functionality and elegant visual aesthetics. 
            </div>
            <div>Join me as we explore the fusion of code and creativity, 
            where every pixel and line of code serves a purpose in delivering exceptional user experiences.
            </div>
          </div>
    </div>
  )
}

export default One