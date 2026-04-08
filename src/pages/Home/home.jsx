import '../../pages/Home/responsiveness.css'
import './home.css'
import { useState, useEffect } from 'react';
import { 
    User2, Mail, 
    BookText, Phone, 
    MapPin, Flag, ChevronUp 
} from 'lucide-react';

import introPic from '../../assets/images/pic-10.jpg'
import htmlLogo from '../../assets/images/logo-html.png'
import cssLogo from '../../assets/images/logo-css.png'
import jslLogo from '../../assets/images/javascript-logo.svg'
import reactlLogo from '../../assets/images/logo-react.png'
import twLogo from '../../assets/images/tailwind-logo.svg'
import sqlLogo from '../../assets/images/sql-logo.svg'
import mdbLogo from '../../assets/images/mongodb-logo.svg'
import services from '../../components/services';
import projects from '../../components/projects';
import languages from '../../components/languages';
import { BsGithub } from 'react-icons/bs';
import { Link } from 'lucide-react';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import resume from '../../assets/docs/Resume.pdf'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home(){


    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, 
        });
        AOS.refresh(); 
    }, []);

    const skills = [
        {
            skill: "HTML",
            image: htmlLogo 
        },
        {
            skill: "CSS",
            image: cssLogo
        },
        {
            skill: "JavaScript",
            image: jslLogo
        },
        {
            skill: "React JS",
            image: reactlLogo
        },
        {
            skill: "Tailwind",
            image: twLogo
        },
        {
            skill: "SQL Server",
            image: sqlLogo
        },
        {
            skill: "Mongo DB",
            image: mdbLogo
        }
    ]

    console.log(languages);

    const [pastHome, setPastHome] = useState(false)
    useEffect(() => {
        const handleScrolling = () =>{
            if(window.scrollY > 500){
                setPastHome(true)
            }else{
                setPastHome(false)
            }
        
        }
        window.addEventListener("scroll", handleScrolling);
        handleScrolling();
        return () => 
        window.removeEventListener("scroll", handleScrolling);
      }, [])
    
    const scrollToTop = () =>{
       window.scrollTo({
        top: 0,
        behavior: 'smooth',
       }
       )

       document.documentElememt.scrollTop = 0;
    }

    return(
        <>
        <div className='con'>
           <div class="home" id="Home">
            { pastHome &&
            <button onClick={scrollToTop} className="back">
                <ChevronUp size={28}/>
            </button>
            }
            <div class='center-pic'>
                <img src={introPic} alt="" />
            </div>
            <div id="slide" class="details">
                <div className='greet'>
                    <h1>Hello!</h1>
                    <h1 className='wave'>🖐️</h1>
                </div>
                <h3 className='name'>I'm Eleanor Ebere</h3>
                <p className='des'>A Front-End Developer with a passion for technology and design.
                    Eager to learn, grow and collaborate.
                    
                </p>
                <div class="buttons">
                    <a href="#Contact">Contact me</a>
                    <a href="#Projects" className="second">See my works</a>
                </div>  
            </div>
           </div>
           <div className="about" id="About">
            <div data-aos="fade-up" class="header">
                    <div></div>
                    <h1>About Me</h1>
                    <div></div>
            </div>
            <div class="info-block">
                    <div data-aos="fade-up" class="info">
                        <p> Hi, My name is Eleanor Ebere, I'm a Front-End Developer currently schooling in Aptech-ph, Rivers State, Nigeria,
                            building dynamic, responsive, user-friendly interfaces and websites using frontend technologies
                            such as HTML, CSS , JavaScript and React and effiently consuming Restful APIS.
                            I am eager to expand my skills and grow as a developer.
                            I also have wide knowledge of database management and data manipulation.
                            In my free time I enjoy playing problem solving games and listening 
                            to music.
                        </p>
                        <div data-aos="fade-up" className="addition">
                            <div>
                                    <User2 color='grey'/>
                                    <p>Birth-Date :</p>
                                    <p>6th August 2008</p>
                                </div>
                                <div>
                                    <BookText color='grey'/>
                                    <p>School :</p>
                                    <p>Aptech-ph</p>
                                </div>
                                <div>
                                    <Flag color='grey'/>
                                    <p>Nationality :</p>
                                    <p>Nigerian</p>
                                </div>
                                <div>
                                    <Mail color='grey'/>
                                    <p>Email :</p>
                                    <p>ele123nor@gmail.com</p>
                                </div>
                                <div>
                                    <Phone color='grey' />
                                    <p>Phone :</p>
                                    <p>09097194405</p>
                                </div>
                                <div>
                                    <MapPin color='grey'/>
                                    <p>Location :</p>
                                    <p>Rivers State, Nigeria</p>
                                </div>
                        </div>
                        
                    </div>
            </div>
            <div data-aos="fade-up" class="buttons middle">
                <a href="#Contact">Contact me</a>
                <a href={resume} target='blank' className="second">Download My CV</a>
                </div> 
            <div className="skills">
                <div data-aos="fade-up" class="header">
                    <div></div>
                    <h1>My Skills</h1>
                    <div></div>
                </div>
                <div className='topic'>
                    <div className="blocks">
                        {
                            skills.map((skill, index) =>(
                                <div data-aos="fade-up" key={index} className="block">
                                    <img src={skill.image} alt="" />
                                    <h2>{skill.skill}</h2>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
           </div>
           <div className="services" id='Services'>
            <div data-aos="fade-up" class="header">
                    <div></div>
                    <h1>My Services</h1>
                    <div></div>
            </div>
            <div className='cards'>
                <div data-aos="fade-up" className="diff">
                    <img src="/src/assets/images/services.png" alt="" />
                    
                    <h4>MY SERVICES</h4>
                    <p>I focus on building modern and dynamic designs
                        tailored to your specific needs.
                    </p>
                </div>
                {
                    services.map((service, index) =>(
                        <div data-aos="fade-up" className="card" key={index}>
                            <img src={service.img} alt="" />
                            <h3>{service.service_name}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))
                }
            </div>
           </div>
           <div className="projects" id='Projects'>
            <div data-aos="fade-up" class="header">
                    <div></div>
                    <h1>My Projects</h1>
                    <div></div>
            </div>
            <div className="project-con">
                {
                    projects.map((project, index) =>(
                        <div data-aos="fade-up" className='projectDiv' key={index}>
                            <div style={{backgroundImage: `url(${project.img})`}} className="imageHolder"></div>
                            <h3 className='projectName' >{project.name}</h3>
                            <p className='projectDesc'>{project.description}</p>
                            <div className="languages">
                                {project.languages.map((language, index) =>(
                                    <div className='language' key={index} style={{border : `1px solid ${languages[language]}`, color: languages[language] }}>
                                        {language} 
                                    </div>
                                ))}
                            </div>
                            <div className='viewLinks'>
                                <a className='gitLink' href={project.githubLink} target='blank'><BsGithub fill='white' size={24}/></a>
                                <a className='website' href={project.demoLink} target='blank'><Link size={24}/></a>
                            </div>
                            {/* <div className='viewLinks'>
                                <Link to={project.githubLink}>Github repo </Link>
                                <Link to={project.demoLink}>View Demo</Link>
                            </div> */}
                        </div>
                    ))
                }
                
            </div>
           </div>
           <div className="contact" id='Contact'>
            <div data-aos="fade-up" class="header">
                    <div></div>
                    <h1>Contact Me</h1>
                    <div></div>
            </div>
            <div className="form-div">
                <form method='post' className="form">
                    <h2>
                    Send me an email
                    </h2>
                    <div className="inputs">
                    <input type="text" name='name' placeholder='Your Name'/>
                    <input type="text" name='email' placeholder='Your Email'/>
                    <textarea type="text" name='message' className='message' placeholder='Your Message'/>
                    <button type='submit'>Send message</button>
                    </div>
                </form>
                <div className='send'>
                    <h2>Reach out to me</h2>
                    <p>Feel free to reach out to me, I'm ever ready
                        to reply to you.
                    </p>
                    <p>Or reach me on the following
                    social media platforms.</p>
                    <div className="socials">
                        <a target="blank" href="https://www.instagram.com/chanchilla08?igsh" className='instagram'>
                            <BsInstagram className='icon instaIcon'/>
                        </a>
                        <a target="blank" href="https://www.linkedin.com/in/eleanor-ebere-829719358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='linkedIn'>
                            <BsLinkedin className='icon linkedIcon'/>
                        </a>
                        <a target="blank" href="https://youtube.com/@kookella?si=NVKsog4gtDbsEsjk" className='youtube'>
                            <BsYoutube className='icon youtubeIcon'/>
                        </a>
                        <a target="blank" href="https://www.github.com/Ella59081" className='github'>
                            <BsGithub className='icon githubIcon'/>
                        </a>
                    </div>
                    <div className="lists">
                        <h2>Contact Info</h2>
                        <div className="add">
                            <div>
                                <Mail color='silver'/>
                                <p>Email :</p>
                                <a href="mailto:ele123nor@gmail.com">ele123nor@gmail</a>
                            </div>
                            <div>
                                <Phone color='silver' />
                                <p>Phone :</p>
                                <p>09097194405</p>
                            </div>
                            <div>
                                <MapPin color='silver'/>
                                <p>Location :</p>
                                <p>03 Joseph Chinwo street, Port Harcourt</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
           <div className="footer" id='footer'>

               <p>© 2026. All right reserved.</p>           </div>
        </div>
        </>
    )
}

export default Home