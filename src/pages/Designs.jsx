import React from 'react'
import styles from '../styles/designs.module.css'
import Card from '../components/Card'
import designlinks from '../data/designlinks'
import { Link } from 'react-router-dom'


const Designs = () => {
  return (
    <div className={styles.designs}>
        <div className={styles.nav}>
            <Link to="/"><button type="button" class="btn btn-secondary"> Back </button></Link>
            <h2>Designs' Library</h2>
            
        </div>
        
        <div className={styles.mainContainer}>
            {designlinks.map((eachObject)=>{return <Link to={`/projectdetails/${eachObject.id}`} style={{flex:'1',flexBasis:'300px'}}><Card key={eachObject.id} details={eachObject}/></Link>})}
        </div>
    </div>
  )
}

export default Designs