import React from 'react'
import styles from '../styles/aboutme.module.css'
import { Link } from 'react-router-dom'
import SchoolCard from '../components/SchoolCard'
import schoolData from '../data/schoolData'
import Card from '../components/Card'
import designlinks from '../data/designlinks'
import Footer from '../components/Footer'
import useWindowDimensions from '../hooks/useWindowDimensions'

const Aboutme = () => {
    const { height, width } = useWindowDimensions();
  return (
    <div className={styles.heroContainerTop}>
        
        <div className={styles.aboutme}>
            <div className={styles.nav}>
                <Link to="/"><i class={`fa-solid fa-house ${styles.home}`}></i></Link>
                <h2>Md Imran Raj</h2>
            </div>
            
            <div className={styles.mainContainer}>
                
                <div className={styles.firstContainer}>
                    <div className={styles.leftContainer}>
                        <div className={styles.introduction}>
                            <i>Application development</i> is not only an art but a process moulded with a lot of patience.<br/><br/>
                            With a passion for crafting innovative digital experiences,
                            I have embarked on a creative odyssey that merges cutting-edge technology with aesthetically pleasing design.<br/><br/>
                            Throughout these virtual pages, you will discover a collection of projects that reflect my dedication to creating user-centric applications and captivating web interfaces. 
                            From <i>conceptualization</i> to <i>execution</i>, I believe in the power of seamless functionality and elegant visual aesthetics. <br/><br/>
                            Join me as we explore the fusion of code and creativity, 
                            where every pixel and line of code serves a purpose in delivering exceptional user experiences.
                        </div>
                        <div className={styles.buttonGrp}>
                            
                            <Link to="/designs">
                                <div className={styles.buttonOneDiv}>
                                    <div><img className={styles.brochure} src='./mesh.png'></img></div>
                                    <button className={`${styles.btn1} btn btn-info`} type="button" >Project Showroom</button>
                                </div>
                            </Link>
                            <a target="_blank" href='https://drive.google.com/uc?export=download&id=1YBvV0N7drnmp-q1bJjMVUJ4JlJUMPuDw' download='ImranResume.pdf'>
                                <div className={styles.buttonTwoDiv}>
                                    <div><img className={styles.brochure} src='./resume.png'></img></div> 
                                    <button className={`${styles.btn2} btn btn-info`} type="button" >Download Resume</button>
                                </div>
                            </a>
                            <a target="_blank" href='https://drive.google.com/drive/folders/0B-IoIAHwbpM9NTc5eDZxdVlCWWc?resourcekey=0-uz7TcKwfy0L_jMLqqVIRQg&usp=sharing'>
                                <div className={styles.buttonThreeDiv}>
                                    <div><img className={styles.brochure}  src='./certificates.png'></img></div>                     
                                    <button className={`${styles.btn3} btn btn-info`} type="button" >Certificates</button>                              
                                </div>
                            </a>
                        </div>
                    </div>
                    
                    <div className={styles.rightContainer}>
                        <img src='./imran4-edit.png'/>
                    </div>
                </div>  

            
                <hr/>
                
                <div className={styles.skills}>
                    <h2>Skills</h2>
                    <div className={styles.skillsContainer}>
                        <div className={styles.humanLang}>
                            <h5>Human Lang</h5>
                            <div><img src='./logo/english.png' alt='english' />English</div>
                            <div><img src='./logo/hindi.png' alt='hindi' />Hindi</div>
                            <div><img src='./logo/urdu.png' alt='urdu' />Urdu</div>
                            <div><img src='./logo/arabic.png' alt='arabic' />Arabic</div>
                        </div>
                        <div className={styles.machineLang}>
                            <h5>Prog Lang</h5>
                            <div><img src='./logo/c.png' alt='c' />C</div>
                            <div><img src='./logo/cpp.png' alt='cpp' />C++</div>
                            <div><img src='./logo/python.png' alt='python' />Python</div>
                            <div><img src='./logo/java.png' alt='java' />Java</div>
                            <div><img src='./logo/kotlin.png' alt='kotlin' />Kotlin</div>
                            <div><img src='./logo/js.png' alt='javascript' />Javascript</div>                  
                        </div>
                        <div className={styles.webTech}>
                            <h5>Web Technology</h5>
                            <div><img src='./logo/html.png' alt='html' />HTML-5</div>
                            <div><img src='./logo/css.png' alt='css' />CSS-3</div>
                            <div><img src='./logo/js.png' alt='javascript' />Javascript ES6</div>
                            <div><img src='./logo/react.png' alt='react' />React</div>
                            <div><img src='./logo/php.png' alt='php' />PHP</div>
                            <div><img src='./logo/laravel.png' alt='laravel' />Laravel</div>
                            <div><img src='./logo/angular.png' alt='angular' />Angular</div>
                            <div><img src='./logo/mongodb.png' alt='mongodb' />MongoDB</div>
                            <div><img src='./logo/node.png' alt='node' />Node</div>

                        </div>
                        <div className={styles.libraries}>
                            <h5>Lib / Frameworks</h5>
                            <div><img src='./logo/bootstrap.png' alt='bootstrap' />Bootstrap</div>
                            <div><img src='./logo/express.png' alt='express' />Express</div>
                            <div><img src='./logo/jquery.png' alt='jquery' />Jquery</div>
                            <div><img src='./logo/mongoose.png' alt='mongoose' />Mongoose</div>
                            <div><img src='./logo/react.png' alt='react' />React</div>
                            <div><img src='./logo/angular.png' alt='angular' />Angular</div>
                            <div><img src='./logo/laravel.png' alt='laravel' />Laravel</div>

                        </div>
                        <div className={styles.tools}>
                            <h5>Tools</h5>
                            <div><img src='./logo/canva.png' alt='canva' />Canva</div>
                            <div><img src='./logo/figma.png' alt='figma' />Figma</div>
                            <div><img src='./logo/xd.png' alt='xd' />Adobe XD</div>
                            <div><img src='./logo/office.png' alt='office' />M.S. Office</div>
                        </div>
                    </div>
                </div>


                <hr/>

                <div className={styles.education}>
                        <div className={styles.edHeading}><h2>Education</h2></div>
                        <div className={styles.edContent}>
                            <div ><SchoolCard schoolData={schoolData[0]} /></div>
                            <div ><SchoolCard schoolData={schoolData[1]} /></div>
                            <div ><SchoolCard schoolData={schoolData[2]} /></div>

                            {/* <SchoolCard schoolData={schoolData[0]} /> */}
                            {/* <SchoolCard schoolData={schoolData[1]} /> */}
                            {/* <SchoolCard schoolData={schoolData[2]} /> */}
                        </div>
                </div>

                <hr />
                
                <div className = {styles.featuredWorks}>
                    <div className={styles.featuredTitle}>
                        <h2>Featured Works </h2>
                        <div className={styles.lastCard}>
                            <Link to={`/designs`}>
                                {width>500 && <span>View All </span>}
                                <i className={"fa-solid fa-arrow-right fa-beat"}></i>
                            </Link>
                        </div>
                    </div>
                    
                    <div>
                        {designlinks.map((eachObject)=>{return eachObject.featured && <Link to={`/projectdetails/${eachObject.id}`}><Card key={eachObject.id} details={eachObject}/></Link>})}
                        
                    </div>
                    
                </div>

                
            </div> 

            
        </div>
        <Footer/>
    </div>
  )
}

export default Aboutme