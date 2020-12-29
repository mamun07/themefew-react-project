import React, { Component } from 'react'
import Hero from '../../sections/hero/Hero'

import './Home.min.css'

export default class Home extends Component {
    render() {
        return (
            <>
            <div className="entry-slider-area">
                <Hero />
            </div>
            </>
        )
    }
}
