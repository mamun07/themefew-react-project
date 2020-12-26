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

export default class Routers extends Component {
    render() {
        return (
            <>
            <Router>
                <HeaderTop/>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact-us" component={Contactus} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/our-team" component={Ourteam} />
                    <Route exact path="/portfolio" component={Portfolio} />
                </Switch>
            </Router>
            </>
        )
    }
}
