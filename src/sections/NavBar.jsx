import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './NavBar.min.css'

export default class NavBar extends Component {
    render() {
        return (
            <>
                <nav id="smmNavbar" className="navbar sm-navbar navbar-expand-lg">
                        <Container>
                            <Link className="navbar-brand" href="#">ThemeFew</Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="line"></span>
                                <span className="line"></span>
                                <span className="line"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                            <li className="nav-item"><Link to="/">Home</Link></li>
                                            <li className="nav-item"><Link to="/">About</Link></li>
                                            <li className="nav-item"><Link to="/">Conatct</Link></li>
                                            <li className="nav-item"><Link to="/">Our Service</Link></li>
                                            <li className="nav-item"><Link to="/">Our Team</Link></li>
                                            <li className="nav-item"><Link to="/">Our Project</Link></li>
                                            <li className="nav-item has-menu-item-submenu">
                                                <Link  to="/">Pages</Link>
                                                <ul className="sub-menu">
                                                    <li><Link href="">menu item</Link></li>
                                                    <li><Link href="">menu item</Link></li>
                                                </ul>
                                            </li>
                                    </ul>
                            </div>
                        </Container>
                </nav>
            </>
        )
    }
}
