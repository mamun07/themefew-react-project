import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './Blog.min.css'

export default class Blog extends Component {
    render() {
        return (
            <>
            <div className="entry-blog-page">
                <Container>
                    <Row>
                        <Col md={8}>
                            <div className="entry-blog-left">
                                Welcome to Blog Left
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="entry-blog-right">
                                Welcome to Blog Right
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            </>
        )
    }
}
