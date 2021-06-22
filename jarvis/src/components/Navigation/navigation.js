import React from 'react'

import {IoChevronDown} from "react-icons/io5"

import {
    Container, Row, Col
} from 'react-bootstrap'

import Sidebar from './sidebar'

import BritishFlag from './image/united-kingdom.png'

import './navigation.scss'

export default function Navigation() {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={9}></Col>
                    <Col md={1}>
                      <img src={BritishFlag} className="country-flag"/>  
                     <IoChevronDown className="language-button"/>
                    </Col>
                    <Col md={2}>
                        <Row>
                            <Col md={4}>
                                <div className="circle-logo">
                                    <p>G</p>
                                </div>
                            </Col>
                            <Col md={8}>
                                <p className="nameAccount">Gading CP</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Sidebar/>
        </div>
    )
}
