import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Image } from 'react-bootstrap'

import { FaAngleDown, FaAngleRight,FaHome } from 'react-icons/fa';
import './NavBar.min.css'

import Logo from '../../assets/images/few.svg'

export default function NavBar(){

    const [navbar, setNavbar] = useState(false);
    const changebackground =()=>{
        if(window.scrollY >=5){
            setNavbar(true)
        }else(
            setNavbar(false)
        )
    }
    window.addEventListener('scroll', changebackground);

    return (
        <>
            <nav id="smmNavbar" className={navbar ? "navbar sm-navbar navbar-expand-lg" : "navbar sm-navbar removebg navbar-expand-lg"}>
                    <Container>
                        <Link className="navbar-brand" to="/"><Image width="100" src={Logo}/></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                        <li className="nav-item"><Link exact to="/"><FaHome/> Home</Link></li>
                                        <li className="nav-item has-menu-item-submenu">
                                            <Link>Pages <FaAngleDown/></Link>
                                            <ul className="sub-menu">
                                                <li><Link exact to="/about"><FaAngleRight/> About us</Link></li>
                                                <li><Link exact to="/contact-us"><FaAngleRight/> Contact us</Link></li>
                                                <li><Link exact to="/our-team"><FaAngleRight/> Our Team</Link></li>
                                                <li><Link exact to="/portfolio"><FaAngleRight/> Project</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item"><Link exact to="/about">About</Link></li>
                                        <li className="nav-item"><Link exact to="/blog">Blog</Link></li>
                                        <li className="nav-item"><Link exact to="/our-team">Our Team</Link></li>
                                        <li className="nav-item"><Link exact to="/portfolio">Portfolio</Link></li>
                                        <li className="nav-item"><Link exact to="/contact-us">Conatct</Link></li>
                                </ul>
                        </div>
                    </Container>
            </nav>
        </>
    )
}

