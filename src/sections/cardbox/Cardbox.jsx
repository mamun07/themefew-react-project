import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FaAngleDoubleRight } from 'react-icons/fa';

export default class Cardbox extends Component {
    render() {
        return (
            <>
                <div className="single-cardbox-area">
                    <Card>
                        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" />
                        <Card.Body>
                            <Card.Title><h3>Card Title</h3></Card.Title>
                            <Card.Text><p>Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p></Card.Text>
                            <Link to="/contact-us">Learn More<FaAngleDoubleRight/></Link>
                        </Card.Body>
                    </Card>
                </div>
            </>
        )
    }
}
