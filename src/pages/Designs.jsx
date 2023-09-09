import React from 'react'
import styles from '../styles/designs.module.css'
import Card from '../components/Card'
import designlinks from '../data/designlinks'
import { Link, useNavigate } from 'react-router-dom'


const Designs = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.designs}>
        <div className={styles.nav}>
            <button onClick={()=>navigate(-1)} type="button" class="btn btn-secondary"> Back </button>
            <h2>Showroom</h2>
            
        </div>
        
        <div className={styles.mainContainer}>
            {designlinks.map((eachObject)=>{return <Link to={`/projectdetails/${eachObject.id}`} style={{flex:'1'}}><Card key={eachObject.id} details={eachObject}/></Link>})}
        </div>
    </div>
  )
}

export default Designs