import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./log-in.component";
import UserNav from "./user-nav.component";


const createError = require('http-errors');
const passport = require('passport');

export default class Wrapper extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">

                    <Navbar bg="light" className="Login">
                        <Container>
                            <Row>
                                <Col>
                                    <Row>
                                        <UserNav/>
                                    </Row>
                                    <Row>
                                            <Login/>
                                    </Row>
                                </Col>
                            </Row>

                        </Container>
                    </Navbar>

                </header>


            </div>
        )
    }
}
