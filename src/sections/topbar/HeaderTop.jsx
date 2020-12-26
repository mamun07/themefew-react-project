import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'


import {FaPhoneAlt, FaEnvelope, FaUser,FaSearch } from 'react-icons/fa';
import './topbar.min.css'

export default class HeaderTop extends Component {
    render() {
        return (
            <>
                <div className="header-top p-1">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div className="header-top-left float-left">
                                    <span className="mr-3"><FaPhoneAlt/> +0545-45454544</span>
                                    <span><FaEnvelope/> mamun@gmail.com</span>
                                </div>
                                <div className="header-top-right float-right">
                                    <span className="mr-3"><FaSearch/></span>
                                    <span><FaUser/></span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}

