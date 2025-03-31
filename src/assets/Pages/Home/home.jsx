import './home.css'

function Home(){
    return(
        <>
        <div className='con'>
           <div class="home" id="home">
            <div class="intro">
                
            </div>
            <div className="slide-con">
            <div id="slide" class="details">
                <h1>Hello!</h1>
                <h3>I'm Eleanor Ebere</h3>
                <p>A Front-End Developer with a passion for technology and design.</p>
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
                            with the skills necessary for a Front-End Developer.
                            I am eager to expand my skills and grow as a developer.
                            Please feel free to contact me if you need my services.

                        </p>
                        <p class="hobby">I enjoy playing intersting, problem solving games, cooking, singing and listening 
                            to music.
                        </p>
                        <div className="addition">
                            <div className="add">
                                <div>
                                    <img src="/src/assets/images/user-solid (1).svg" alt="" />
                                    <p>Birth-Date:</p>
                                    <p>6th August 2008</p>
                                </div>
                                <div>
                                    <img src="/src/assets/images/book-solid.svg" alt="" />
                                    <p>School:</p>
                                    <p>Aptech-ph</p>
                                </div>
                                <div>
                                    <img src="/src/assets/images/flag-solid.svg" alt="" />
                                    <p>Nationality:</p>
                                    <p>Nigerian</p>
                                </div>
                            </div>
                            <div className="add">
                                <div>
                                    <img src="/src/assets/images/envelope-solid.svg" alt="" />
                                    <p>Email:</p>
                                    <p>ele123nor@gmail.com</p>
                                </div>
                                <div>
                                    <img src="/src/assets/images/phone-solid.svg" alt="" />
                                    <p>Phone:</p>
                                    <p>09097194405</p>
                                </div>
                                <div>
                                    <img src="/src/assets/images/location-dot-solid.svg" alt="" />
                                    <p>Location:</p>
                                    <p>Rivers State, Nigeria</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                <div class="profile">
                    <div className='frame'></div>
                    <img className='frame-pic' src="/src/assets/images/picture-block.jpg" alt="" />
                </div>
            </div>
            <div className="skills">
                <div class="header">
                    <div></div>
                    <h1>My Skills</h1>
                    <div></div>
                </div>
                <div className='topic'>
                    <p>All the skills I have acquired regarding
                            Front-End Development   :
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
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
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