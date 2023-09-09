import React from 'react'
import styles from '../styles/schoolCard.module.css'

const SchoolCard = ({schoolData}) => {
  return (
    <div className={styles.box}>
            <div className={styles.boxIcon}><img src={schoolData.logo} alt='logo' /></div>
            <div className={styles.boxLabel}>{schoolData.name}</div>
            <div className={styles.boxTitle}><img src='./location.png' /> {schoolData.place}</div>
            <div className={styles.boxImage}>
                <img src={schoolData.img} />
            </div>
            <div className={styles.empty}></div>
            <div className={styles.details}>
                <div className={styles.courseScore}>
                    <div className={styles.course}>{schoolData.course}</div>
                    <div className={styles.score}>{schoolData.scoreType} : <span>{schoolData.score}</span></div>
                </div>
                <div>
                    <div className={styles.year}>( {schoolData.year} )</div>
                    
                </div>
            </div>
    </div>

  )
}

export default SchoolCard