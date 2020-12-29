import React, { Component } from 'react'
import { Container, Row, Col, Image} from 'react-bootstrap'
import styled from 'styled-components'
import sliderdata from '../../data.json'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

export default class Hero extends Component {
    render() {
        const H6text = styled.h6`
            color: #e4e4e4;
            margin: 0 0 10px 0;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 16px;
        `
        const H2text = styled.h2`
            color: #fff;
            font-size: 55px;
            line-height: 70px;
            margin: 0 0 30px 0;
            font-weight: bolder;
            letter-spacing: 1px;
        `
        const Ptext = styled.p`
        color: #e4e4e4;
        margin: 0 0 20px 0;
        letter-spacing: 1px;
        font-size: 16px;
        line-height: 26px;
        `
        
        const sildermap = sliderdata.slider_datas.map((slider_list)=>{
            return <div class="item">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="slider-left">
                                <H6text>{slider_list.sub_title}</H6text>
                                <H2text>{slider_list.title}</H2text>
                                <Ptext>{slider_list.description}</Ptext>
                                <Link exact to="/about">View More</Link>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="slider-right">
                                <Image src={slider_list.images}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        });
        return (
            <>
                <OwlCarousel
                    className="owl-theme"
                    loop = {true}
                    margin={0}
                    nav ={false}
                    items ={1}
                    autoplay ={true}
                >
                    {sildermap}
                </OwlCarousel>
            </>
        )
    }
}
