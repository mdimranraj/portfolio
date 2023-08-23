import React from 'react'
import {Link,useParams} from 'react-router-dom'
import styles from '../styles/projectDetails.module.css'
import designlinks from '../data/designlinks'

const ProjectDetails = () => {
  const { id } = useParams();
    
  const projectData = designlinks.filter((eachObject)=> eachObject.id === id)
  const project = projectData[0];  
  console.log(project);
  
  return (
    <div className={styles.container}>
        <div className={styles.nav}>
            <Link to="/"><button type="button" class="btn btn-secondary"> Back </button></Link>
            <h2>{project.title}</h2> 
            <a href={project.link} target='_blank' rel='noreferrer'><button type="button" class="btn btn-success">Visit Site</button></a>
        </div>

        <div className={styles.detailsContainer}>
            <div className={styles.images}>
    
                {project.images.map(image => <img src={image} alt={project.title}/>)}
                
            </div>
            <div className={styles.about}>
                kklgasjgkslkgjasdkl jgioaesjlkjsdkjsj sdagijs lksdjagklasjklhk skjkagj khkjsg
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