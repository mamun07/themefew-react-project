import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './Portfolio.min.css'

export default class Portfolio extends Component {
    render() {
        return (
            <>
            <div className="entry-portfolio-page mt100">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="entry-portfolio-title">
                                Welcome to portfolio page
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            </>
        )
    }
}
