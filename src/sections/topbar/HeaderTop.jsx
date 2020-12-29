import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import {FaPhoneAlt, FaEnvelope, FaUser,FaSearch } from 'react-icons/fa';
import './topbar.min.css'

export default class HeaderTop extends Component {
    render() {
        return (
            <>
                <div className="header-top p-2">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div className="topbar">
                                    <div className="header-top-left">
                                        <span className="mr-3"><FaPhoneAlt/> +0545-45454544</span>
                                        <span><FaEnvelope/> mamun@gmail.com</span>
                                    </div>
                                    <div className="header-top-right">
                                        <ul>
                                            <li><Link><FaSearch/></Link></li>
                                            <li><Link><FaUser/></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}

