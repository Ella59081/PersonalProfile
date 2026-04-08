import './header.css'
import '../../pages/Home/responsiveness.css'
import { act, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Pointer, X } from 'lucide-react';

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

    const [isClicked, setIsClicked] = useState(false);

    

    return(
        <>
        <nav id="slight" className={back ? "changed" : "slight"}>
            <div className="logo"> 
                <a href="#Home">MyFolio</a>
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
            <GiHamburgerMenu  onClick={() => setIsClicked(true)} className='hamburger' size={23} />

            {
                isClicked? 
                <menu className='menu'>
                <div className="leftSide">
                    <div className="menuLinks">
                        {
                            links.map((link, index) =>(
                                <a key={index} style={{color: `${active == link ? 'grey': 'white'}`}}
                                 onClick={ ()=> {
                                    setActive(link); 
                                    setIsClicked(false);
                                 }}
                                 href={'#'+ link}>
                                 {link}
                                </a>
                            ))
                        }
                    </div>
                </div>
                <X color='white' cursor={"pointer"} size={23} onClick={ ()=> setIsClicked(false)}/>
            </menu> : ""
            } 
        </nav>
        </>
    )
}

export default Header