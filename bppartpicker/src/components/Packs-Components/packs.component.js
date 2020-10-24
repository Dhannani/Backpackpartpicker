import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { Grid, Row, Col} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import StatsCard from "./Stats.component"
import Locker from "./Locker.component"

export default class Packs extends Component {
    render() {
        return (              
                <Container fluid='true' >
                    <Row fluid='true'>
                        
                        <Col fluid='true' lg={2}>
                        <Locker />
                        </Col>
                        <Col lg={10}>
                        <StatsCard /></Col>
                    <Row>
                     
                    </Row>
                    </Row>
                </Container>

        )
    }
}