import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,FaCalendarAlt  } from 'react-icons/fa';
import './contactus.min.css'

export default class Contactus extends Component {
    render() {
        return (
            <>
            <div className="entry-contact-page mt100">
                <div className="contact-title p-5">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md={7}>
                                <div className="entry-contact-title text-center">
                                    <h2>Welcome to Contact page</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut non, minima soluta fuga tenetur sed nihil? Sit officia earum velit!</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="contact-form-area p-5">
                    <Container>
                        <Row>
                            <Col md={7}>
                                <div className="entry-contact-address">
                                    <h4 className="mb-3">CONTACT ADDRESS</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br></br>Ut non, minima soluta fuga tenetur sed nihil? Sit officia earum velit!</p>
                                </div>
                                <div className="conact-details">
                                    <ul className="pl-0 mt-5">
                                        <li>
                                            <p><FaPhoneAlt/> Got a Question? Call Us +09606-998800</p>
                                        </li>
                                        <li>
                                            <p><FaCalendarAlt/> Saturday to Thursday ( 9am-9pm )</p>
                                        </li>
                                        <li>
                                            <p><FaEnvelope/> info@caremebd.com</p>
                                        </li>
                                        <li>
                                            <p><FaMapMarkerAlt/> Suite 08/09 (12th Floor), Sahera Tropical Center, Elephant Road, Dhaka-1207</p>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={5}>
                                <div className="entry-contact-form">
                                    <Form>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>First Name</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Label>Last Name</Form.Label>
                                                    <Form.Control type="text" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="I agree with your all terms and conditions" />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">Contact Now</Button>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            </>
        )
    }
}
