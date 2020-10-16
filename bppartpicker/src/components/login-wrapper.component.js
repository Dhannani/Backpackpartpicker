import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import Login from "./log-in.component";
import UserNav from "./user-nav.component";

export default class Wrapper extends Component {
    render() {
        return (
            <Navbar bg="light" className="Login">
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                <UserNav />
                                <Login />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        )
    }
}
