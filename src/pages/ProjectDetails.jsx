import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import styles from '../styles/projectDetails.module.css'
import designlinks from '../data/designlinks'
import Footer from '../components/Footer'

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();  

  const projectData = designlinks.filter((eachObject)=> eachObject.id === id)
  const project = projectData[0];  
//   console.log(project);
  
  return (
    <div className={styles.heroContainer}>
        <div className={styles.container}>
        <div className={styles.nav}>
            <button onClick={()=>navigate(-1)} type="button" className="btn btn-secondary"> Back </button>
            <h2>{project.title}</h2> 
            <a href={project.link} target='_blank' rel='noreferrer'><button type="button" class="btn btn-success">Visit Site</button></a>
        </div>

        <div className={styles.mainContainer}>
            
            <div className={styles.images}>
                {
                project.images.map(image =>
                    <div className={styles.imgHolder} key={image}>
                        <div className={styles.loading}>Loading...</div>
                        <img src={image} alt={project.title}/>
                    </div>)
                } 
            </div>
            <div className={styles.belowCarousel}>        
                <div className={styles.about}>
                    <div className={styles.overviewContainer}>
                        <h5>Overview</h5>
                        <div>{project.content.overview.map(text=>(<div key={text}>{text}</div>))}</div>
                    </div>
                    <div className={styles.detailsContainer}>
                        <h5>Details</h5>
                        <div>{project.content.details.map(detail=>(<div key={detail}>{detail}</div>))}</div>
                    </div>
                </div>
                <div className={styles.techStack}>
                    <h5>Tech Stack Used</h5>
                    {project.stack.map((curr)=> <li key={curr}>{curr}</li>)}
                    {
                        project.libraries && <h5 style={{marginTop:"10px"}}>Libraries Used</h5>
                    }
                    {
                        project.libraries && project.libraries.map((curr)=> <li key={curr}>{curr}</li>)   
                    }
                </div>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ProjectDetails