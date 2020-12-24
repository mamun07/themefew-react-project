import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './sections/NavBar'

import Home from './pages/Home'

export default class Routers extends Component {
    render() {
        return (
            <>
                <Router>
                    <NavBar sticky="top"/>
                    <Switch>
                        <Route exect path="/" Component={Home}/>
                    </Switch>
                </Router>
            </>
        )
    }
}
