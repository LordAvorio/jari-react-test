import React from 'react'

import {
    Container, Row, Col
} from 'react-bootstrap'

import './sidebar.scss'

import { AiOutlinePieChart, AiOutlineSetting } from "react-icons/ai";
import { BsGraphUp, BsPencilSquare } from "react-icons/bs";
import {IoChevronDown, IoLocationOutline, IoBagOutline, IoNewspaperOutline, IoLogOutOutline} from "react-icons/io5"


export default function Sidebar() {
    return (
        <div>
            <div className="sidebarContainer">
                <Container>
                    <Row className="titleContainer">
                        <Col md={12}>
                            <p className="Title-Sidebar">Jari Visibility</p>
                        </Col>
                        <Col md={12}>
                            <div className="box-Sidebar">
                                <p>Team Jarvis</p>
                                <p>Development</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Row>
                                <Col md={2}>
                                    <AiOutlinePieChart className="Logo-Menu"/>
                                </Col>
                                <Col md={8}>
                                    <p className="Title-Menu">Dashboard</p>
                                </Col>
                                <Col md={2}>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <BsGraphUp className="Logo-Menu"/>
                                </Col>
                                <Col md={8}>
                                    <p className="Title-Menu">Member Journey</p>
                                </Col>
                                <Col md={2}>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <IoLocationOutline className="Logo-Menu"/>
                                </Col>
                                <Col md={8}>
                                    <p className="Title-Menu">Last Location</p>
                                </Col>
                                <Col md={2}>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <IoBagOutline className="Logo-Menu"/>
                                </Col>
                                <Col md={8}>
                                    <p className="Title-Menu">Customer</p>
                                </Col>
                                <Col md={2}>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <BsPencilSquare className="Logo-Menu"/>
                                </Col>
                                <Col md={7}>
                                    <p className="Title-Menu">Task</p>
                                </Col>
                                <Col md={1}>
                                    <IoChevronDown className="Logo-Menu-2"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <AiOutlineSetting className="Logo-Menu"/>
                                </Col>
                                <Col md={7}>
                                    <p className="Title-Menu">Configuration</p>
                                </Col>
                                <Col md={1}>
                                    <IoChevronDown className="Logo-Menu-2"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <IoNewspaperOutline className="Logo-Menu"/>
                                </Col>
                                <Col md={8}>
                                    <p className="Title-Menu">Report</p>
                                </Col>
                                <Col md={2}>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <IoLogOutOutline className="Logo-Menu"/>
                                </Col>
                                <Col md={8}>
                                    <p className="Title-Menu">Sign Out</p>
                                </Col>
                                <Col md={2}>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
