import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class HeaderTop extends Component {
    render() {
        return (
            <>
                <div className="header-top p-1">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div className="header-top-left">
                                    Header Top 
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}
