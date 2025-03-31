import './header.css'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <>
         <nav id="slight">
            <div class="logo"> 
                <a href="#home">MyFolio</a>
            </div>
            <div class="links">
                {/* <Link to="/home.jsx">Home</Link>
                <Link to="/about.jsx">About</Link> */}
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
        </>
    )
}

export default Header