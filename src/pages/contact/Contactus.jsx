import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './contactus.min.css'

export default class Contactus extends Component {
    render() {
        return (
            <>
            <div className="entry-contact-page">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="entry-contact-title">
                                Welcome to Contact page
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            </>
        )
    }
}
