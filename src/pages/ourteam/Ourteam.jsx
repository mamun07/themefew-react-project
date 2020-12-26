import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './Ourteam.min.css'

export default class Ourteam extends Component {
    render() {
        return (
            <>
            <div className="entry-team-page">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="entry-team-title">
                                Welcome to Our Team page
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            </>
        )
    }
}
