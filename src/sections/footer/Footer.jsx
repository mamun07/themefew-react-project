import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footerwidget from '../footerwidget/Footerwidget'
import './footer.min.css'

export default class Footer extends Component {
    render() {
        return (
            <>
            <div className="entry-footer-area">
                <Container>
                    <Row>
                        <Footerwidget/>
                        <Footerwidget/>
                        <Footerwidget/>
                        <Footerwidget/>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <div className="entry-footer text-center text-white">
                                <p className="m-0">Built and maintained by ThemeFew. © 2020, Want to contribute? <Link to="/contact-us">Contact us</Link></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            </>
        )
    }
}
