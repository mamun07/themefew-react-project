import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Footerwidget extends Component {
    render() {
        return (
            <>
                <Col md={3}>
                    <div className="entry-footer-single text-white">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><Link>Home</Link></li>
                            <li><Link>About</Link></li>
                            <li><Link>Team</Link></li>
                            <li><Link>Conact</Link></li>
                            <li><Link>Helps</Link></li>
                        </ul>
                    </div>
                </Col>
            </>
        )
    }
}
