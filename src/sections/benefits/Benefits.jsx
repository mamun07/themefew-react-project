import React, { Component } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Benefits extends Component {
    render() {
        return (
            <>
                <div className="entry-benefits-area">
                    <Container>
                        <Row className="mb120">
                            <Col md={6}>
                                <div className="benefits-text">
                                    <h6>OUR BENEFITS</h6>
                                    <h2>The Most Creative Ideas For Our Clients</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                                    <Link>For More</Link>
                                </div>
                            </Col>
                            <Col md={6}>
                                <Image src="https://themelayer.net/wp/theme/wp-kalkulat/wp-content/uploads/2020/05/8.png"/>
                            </Col>
                        </Row>
                        <Row className="mb120">
                            <Col md={6}>
                                <Image src="https://themelayer.net/wp/theme/wp-kalkulat/wp-content/uploads/2020/05/phone-img1.png"/>
                            </Col>
                            <Col md={6}>
                                <div className="benefits-text">
                                    <h6>EXPLORE AND CREATE</h6>
                                    <h2>Awesome, Clean, Poweful and Creative!</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                                    <Link>For More</Link>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <div className="benefits-text">
                                    <h6>GET APP NOW</h6>
                                    <h2>Available For Your Smartphone</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                                    <Link>For More</Link>
                                </div>
                            </Col>
                            <Col md={6}>
                                <Image src="https://themelayer.net/wp/theme/wp-kalkulat/wp-content/uploads/2020/05/Image.png"/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}
