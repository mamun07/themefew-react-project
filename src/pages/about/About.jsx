import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './about.min.css'

export default class About extends Component {
    render() {
        return (
            <>
            <div className="entry-about-page">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="entry-about-title">
                                Welcome to about page
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            </>
        )
    }
}
