import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Home.min.css'

export default class Home extends Component {
    render() {
        return (
            <>
            <div className="entry-slider-area">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="slider-title">
                                <p>This area for slider</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            </>
        )
    }
}
