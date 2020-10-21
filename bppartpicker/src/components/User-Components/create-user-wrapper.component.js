import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import Login from "./log-in.component";
import UserNav from "./user-nav.component";
import CreateUser from "./create-user.component";

import {BrowserRouter as Redirect, withRouter} from 'react-router-dom';

class CreateUserWrapper extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if(this.props.loggedIn) {
            this.props.history.push("/packs")
          }
        return (
            <Navbar bg="light" className="Login">
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                <UserNav />
                                <CreateUser />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        )
    }
}
export default withRouter(CreateUserWrapper)