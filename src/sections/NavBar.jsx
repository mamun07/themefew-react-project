import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'

export default class NavBar extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col md={12}>
                            <ul>
                                <li>
                                    <Link exect to="/">Home</Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
