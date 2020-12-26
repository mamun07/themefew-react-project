import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './pages/home/Home'
import NavBar from './sections/menu/NavBar'
import HeaderTop from './sections/topbar/HeaderTop'

export default class Routers extends Component {
    render() {
        return (
            <>
            <Router>
                <HeaderTop/>
                <NavBar sticky="top"/>
                <Switch>
                    <Route exect path="/" Component={Home}/>
                </Switch>
            </Router>
            </>
        )
    }
}
