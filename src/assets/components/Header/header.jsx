import './header.css'
import { useState } from 'react';

function Header(){
    const [back, setBack] = useState(false);
    const change =  () =>{
        if(window.scrollY > 2){
            setBack(true)
        }else{
            setBack(false)
        }
    }
    window.addEventListener("scroll", change)
    window.addEventListener("scroll", ()=>{} );

    return(
        <>
         <nav id="slight" className={back ? "changed" : "slight"}>
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