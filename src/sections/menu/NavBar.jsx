import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import { FaAngleDown, FaAngleRight,FaHome } from 'react-icons/fa';
import './NavBar.min.css'

export default class NavBar extends Component {
    render() {
        return (
            <>
                <nav id="smmNavbar" className="navbar sm-navbar navbar-expand-lg">
                        <Container>
                            <Link className="navbar-brand" to="/">ThemeFew</Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="line"></span>
                                <span className="line"></span>
                                <span className="line"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                            <li className="nav-item"><Link to="/"><FaHome/> Home</Link></li>
                                            <li className="nav-item has-menu-item-submenu">
                                                <Link  to="/">Pages <FaAngleDown/></Link>
                                                <ul className="sub-menu">
                                                    <li><Link to="/"><FaAngleRight/> About us</Link></li>
                                                    <li><Link to="/"><FaAngleRight/> Contact us</Link></li>
                                                    <li><Link to="/"><FaAngleRight/> Our Service</Link></li>
                                                    <li><Link to="/"><FaAngleRight/> Our Team</Link></li>
                                                    <li><Link to="/"><FaAngleRight/> Project</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item"><Link to="/">About</Link></li>
                                            <li className="nav-item"><Link to="/">Blog</Link></li>
                                            <li className="nav-item"><Link to="/">Our Team</Link></li>
                                            <li className="nav-item"><Link to="/">Portfolio</Link></li>
                                            <li className="nav-item"><Link to="/">Conatct</Link></li>
                                    </ul>
                            </div>
                        </Container>
                </nav>
            </>
        )
    }
}
