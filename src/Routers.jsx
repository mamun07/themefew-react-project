import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import NavBar from './sections/menu/NavBar'
import HeaderTop from './sections/topbar/HeaderTop'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contactus from './pages/contact/Contactus'
import Blog from './pages/blog/Blog'
import Ourteam from './pages/ourteam/Ourteam'
import Portfolio from './pages/portfolio/Portfolio'
import Footer from './sections/footer/Footer'

export default class Routers extends Component {
    render() {
        return (
            <>
            <Router>
                <div className="header-area">
                    <HeaderTop/>
                    <NavBar/>
                </div>
                <div className="body-main-area">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact-us" component={Contactus} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/our-team" component={Ourteam} />
                        <Route exact path="/portfolio" component={Portfolio} />
                    </Switch>
                </div>
                <div className="footer-area">
                    <Footer/>
                </div>
            </Router>
            </>
        )
    }
}
