import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";

import Login from "./log-in.component";
import UserNav from "./user-nav.component";

import {BrowserRouter as Redirect, withRouter} from 'react-router-dom';

export default class LoginWrapper extends Component {
    constructor(props) {
        super(props);

        
    }

    componentDidMount() {
    
    }
    render() {
        if(this.props.loggedin) {
            return (<Redirect from="/login" to="/packs" />)
          }
        
        return (
            <Navbar bg="light" className="Login">
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                <UserNav />
                                <Login loggedIn={this.props.loggedIn} isloggedin={this.props.isloggedin}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        )
    }
}
