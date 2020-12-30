import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Benefits from '../../sections/benefits/Benefits'
import Cardbox from '../../sections/cardbox/Cardbox'
import Hero from '../../sections/hero/Hero'
import SectionTitle from '../../sections/sectiontitle/SectionTitle'

import './Home.min.css'

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="entry-slider-area mb120">
                    <Hero />
                </div>
                <div className="entry-intro-area mb120">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md={6}>
                                <SectionTitle/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}><Cardbox /></Col>
                            <Col md={4}><Cardbox /></Col>
                            <Col md={4}><Cardbox /></Col>
                        </Row>
                    </Container>
                </div>
                <div className="entry-benefits-area mb120">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <Benefits />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}
