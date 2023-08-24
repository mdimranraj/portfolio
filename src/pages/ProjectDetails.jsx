import React from 'react'
import {Link,useParams, useNavigate} from 'react-router-dom'
import styles from '../styles/projectDetails.module.css'
import designlinks from '../data/designlinks'

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();  

  const projectData = designlinks.filter((eachObject)=> eachObject.id === id)
  const project = projectData[0];  
  console.log(project);
  
  return (
    <div className={styles.container}>
        <div className={styles.nav}>
            <button onClick={()=>navigate(-1)} type="button" class="btn btn-secondary"> Back </button>
            <h2>{project.title}</h2> 
            <a href={project.link} target='_blank' rel='noreferrer'><button type="button" class="btn btn-success">Visit Site</button></a>
        </div>

        <div className={styles.mainContainer}>
            <div className={styles.images}>
    
                {project.images.map(image => <div className={styles.imgHolder}><div className={styles.loading}>Loading...</div><img src={image} alt={project.title}/></div>)}
                
            </div>
            <div className={styles.about}>
                <div className={styles.overviewContainer}>
                    <h5>Overview</h5>
                    <div>{project.content.overview.map(text=>(<div>{text}</div>))}</div>
                </div>
                <div className={styles.detailsContainer}>
                    <h5>Details</h5>
                    <div>{project.content.details.map(detail=>(<div>{detail}</div>))}</div>
                </div>
            </div>
            <div className={styles.techStack}>
                <h5>Tech Stack Used</h5>
                {project.stack.map((curr)=> <li>{curr}</li>)}
                {
                    project.libraries && <h5 style={{marginTop:"10px"}}>Libraries Used</h5>
                }
                {
                    project.libraries && project.libraries.map((curr)=> <li>{curr}</li>)   
                }
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails