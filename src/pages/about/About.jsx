import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './about.min.css'

export default class About extends Component {
    render() {
        return (
            <>
            <div className="entry-about-page mt100">
                <Container className="p80">
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <div className="entry-about-title text-center">
                                <h6>Welcome to</h6>
                                <h2>Kalkulat</h2>
                                <p>We have a team of admissions coordinators who work specifically with insurance companies to
                                verify your benefits for coverage. This process comes at no cost to you.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            </>
        )
    }
}
