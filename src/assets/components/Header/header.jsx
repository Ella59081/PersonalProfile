import './header.css'
import { act, useState } from 'react';

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

    const links = [
            "Home",
            "About",
            "Services",
            "Projects",
            "Contact"
    ]
    
    const [active, setActive] = useState("Home");

    return(
        <>
        <nav id="slight" className={back ? "changed" : "slight"}>
            <div className="logo"> 
                <a href="#home">MyFolio</a>
            </div>
            <div className="links">
                {
                    links.map((link, index) =>(
                        <a key={index} style={{color:  `${active == link ? 'grey': 'white'}`}}
                        onClick={() => setActive(link)}
                         href={'#'+ link}>
                            {link}
                        </a>
                    ))
                }
            </div>
        </nav>
        </>
    )
}

export default Header