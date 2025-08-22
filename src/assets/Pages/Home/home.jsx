import './home.css'
import { useState, useEffect } from 'react';
import { User2 } from 'lucide-react';
import { Mail } from 'lucide-react';
import { BookText } from 'lucide-react';
import { Phone } from 'lucide-react';
import {MapPin} from 'lucide-react';
import { Flag } from 'lucide-react';
import introPic from '../../../assets/images/pic-1.jpg'
import profilePicture from '../../../assets/images/picture(4).jpg'
import arrowUp from "../../../assets/images/angle-up-solid.svg"

function Home(){

    const skills = [
        {
            skill: "HTML",
            image: "" 
        },
        {
            skill: "CSS",
            image: ""
        },
        {
            skill: "JAVASCRIPT",
            image: ""
        },
        {
            skill: "REACT",
            image: ""
        },
        {
            skill: "TAILWIND",
            image: ""
        },
        {
            skill: "SQL SERVER",
            image: ""
        },
        {
            skill: "MONGO DB",
            image: ""
        }
    ]

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
           <div class="home" id="home">
            { pastHome &&
            <button onClick={scrollToTop} className="back">
               <img src={arrowUp} alt="" />
            </button>
            }
            <div class="intro">
                <div class='center-pic'>
                    <img src={introPic} alt="" />
                </div>
            </div>
            <div className="slide-con">
            <div id="slide" class="details">
                <div className='greet'>
                    <h1>Hello!</h1>
                    <h1 className='wave'>👋</h1>
                </div>
                <h3>I'm Eleanor Ebere</h3>
                <p>A Front-End Developer with a passion for technology and design.
                    Eager to learn, grow and collaborate.
                    
                </p>
                <div class="buttons">
                    <a href="#contact">Contact me</a>
                    <a href="#projects" className="second">See my works</a>
                </div>  
            </div>
            </div>
           </div>
           <div className="about" id="about">
            <div class="header">
                    <div></div>
                    <h1>About Me</h1>
                    <div></div>
            </div>
            <div class="info-block">
                    <div class="info">
                        <p> Hi, My name is Eleanor Ebere, I'm a Front-End Developer currently schooling in Aptech-ph, Rivers State, Nigeria,
                            building dynamic, responsive, user-friendly interfaces and websites using frontend technologies
                            such as HTML, CSS , JavaScript and React and Effiently consuming Restful APIS.
                            I am eager to expand my skills and grow as a developer.
                            I also have wide knowledge of database management and data manipulation.
                        </p>
                        <p class="hobby">In my free time I enjoy playing problem solving games and listening 
                            to music.
                        </p>
                        <div className="addition">
                            <div className="add">
                                <div>
                                    <User2 color='black'/>
                                    <p>Birth-Date :</p>
                                    <p>6th August 2008</p>
                                </div>
                                <div>
                                    <BookText color='black'/>
                                    <p>School :</p>
                                    <p>Aptech-ph</p>
                                </div>
                                <div>
                                    <Flag color='black'/>
                                    <p>Nationality :</p>
                                    <p>Nigerian</p>
                                </div>
                            </div>
                            <div className="add">
                                <div>
                                    <Mail color='black'/>
                                    <p>Email :</p>
                                    <p>ele123nor@gmail.com</p>
                                </div>
                                <div>
                                    <Phone color='black' />
                                    <p>Phone :</p>
                                    <p>09097194405</p>
                                </div>
                                <div>
                                    <MapPin color='black'/>
                                    <p>Location :</p>
                                    <p>Rivers State, Nigeria</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                <div class="profile">
                    <div className='frame'></div>
                    <img className='frame-pic' src={profilePicture} alt="" />
                </div>
            </div>
            <div class="buttons middle">
                <a href="#contact">Contact me</a>
                <a href="#projects" className="second">Download My CV</a>
                </div> 
            <div className="skills">
                <div class="header">
                    <div></div>
                    <h1>My Skills</h1>
                    <div></div>
                </div>
                <div className='topic'>
                    <p>Skills I have acquired with regard to frontend development
                        including languages, libraires and database management :
                    </p>
                    <div className="blocks">
                        <div className="block">
                            <img src="/src/assets/images/logo-html.png" alt="" /> 
                            {/* this image rotates 180deg on hover */}
                            <h2>HTML</h2>
                        </div>
                        <div className="block">
                        <img src="/src/assets/images/logo-css.png" alt="" /> 
                            {/* this image rotates 180deg on hover */}
                            <h2>CSS</h2>
                        </div>
                        <div className="block">
                        <img src="/src/assets/images/logo-js.png" alt="" /> 
                            {/* this image rotates 180deg on hover */}
                            <h2>JAVASCRIPT</h2>
                        </div>
                        <div className="block">
                        <img src="/src/assets/images/logo-react.png" alt="" /> 
                            {/* this image rotates 180deg on hover */}
                            <h2>REACT</h2>
                        </div>
                    </div>
                </div>
            </div>
           </div>
           <div className="services" id='services'>
            <div class="header">
                    <div></div>
                    <h1>My Services</h1>
                    <div></div>
            </div>
            <div className='cards'>
                <div className="diff">
                    <img src="/src/assets/images/services.png" alt="" />
                    {/* this image rotates 180deg on hover */}
                    <h4>MY SERVICES</h4>
                    <p>I offer the following the services</p>
                </div>
                <div className="card">
                    <img src="/src/assets/images/devices.png" alt="" />
                    <h3>Responsive Design</h3>
                    <p>Responsive and flexible design across all devices and browsers</p>
                </div>
                <div className="card">
                    <img src="/src/assets/images/2interfaces.png" alt="" />
                    <h3>Beautiful Interfaces</h3>
                    <p>Interactive and dynamic user interfaces for websites</p>
                </div>
                <div className="card">
                    <img src="/src/assets/images/frame.png" alt="" />
                    <h3>Use of proper tools </h3>
                    <p>Using javascript and frame works to create user friendly interfaces</p>
                </div>
            </div>
           </div>
           <div className="projects" id='projects'>
            <div class="header">
                    <div></div>
                    <h1>My Projects</h1>
                    <div></div>
            </div>
            <div className="project-con">
                <div className="project">
                    <div className='pro-img'>
                        <img src="/src/assets/images/nvidia-pic.PNG" alt="" />
                        
                    </div>
                    <div className='pro-info'>
                        <h2>Nvidia clone</h2>
                        <p>A clone of the Nvida website showing only the home page.
                        </p>
                        <p>HTML, CSS</p>
                    </div>
                </div>
                <div className="project">
                    <div className='pro-img'>
                        <img src="/src/assets/images/resume-pic.PNG" alt="" />
                        
                    </div>
                <div className='pro-info'>
                        <h2>Resume Builder</h2>
                        <p>A resume builder where users can input their details and
                           get a job ready portfolio.
                        </p>
                        <p>REACT, CSS</p>
                    </div>
                </div>
                <div className="project">
                    <div className='pro-img'>
                        <img src="/src/assets/images/ecommerce-pic.PNG" alt="" />
                        
                    </div>
                    <div class='pro-info'>
                        <h2>Ecommerce Website</h2>
                        <p>An Ecommerce website for easy shopping with API consumption
                           where customers can login see their profile and statistics

                        </p>
                        <p>REACT, CSS</p>
                    </div>
                </div>
                
            </div>
           </div>
           <div className="contact" id='contact'>
            <div class="header">
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
                            <img src="/src/assets/images/logo-instagram.jpeg" alt="" />
                        </a>
                        <a target="blank" href="https://www.linkedin.com/in/eleanor-ebere-829719358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='linkedin'>
                            <img src="/src/assets/images/logo-linked.png" alt="" />
                        </a>
                        <a target="blank" href="https://youtube.com/@kookella?si=NVKsog4gtDbsEsjk" className='youtube'>
                            <img src="/src/assets/images/logo-youtube.png" alt="" />
                        </a>
                        <a target="blank" href="https://www.github.com/Ella59081" className='whatsapp'>
                            <img src="/src/assets/images/logo-github.webp" alt="" />
                            
                        </a>
                    </div>
                    <div className="lists">
                        <h2>Contact Info</h2>
                        <div className="add">
                            <div>
                                <img src="/src/assets/images/envelope-solid.svg" alt="" />
                                <p>Email :</p>
                                <a href="mailto:ele123nor@gmail.com">ele123nor@gmail</a>
                            </div>
                            <div>
                                <img src="/src/assets/images/phone-solid.svg" alt="" />
                                <p>Phone :</p>
                                <p>09097194405</p>
                            </div>
                            <div>
                                    <img src="/src/assets/images/location-dot-solid.svg" alt="" />
                                    <p>Location :</p>
                                    <p>03 Joseph Chinwo street, Rumewhara</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
           <div className="footer" id='footer'>
               <p>© 2020. Designed by Eleanor All right reserved.</p>           </div>
        </div>
        </>
    )
}

export default Home