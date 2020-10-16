import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import CreateUser from "./create-user.component";
// import EditUser from "./edit-user.component";
// import UserList from "./user-list.component";
// import Login from "./log-in.component";
// import Home from "./home.component"

const createError = require('http-errors');
const passport = require('passport');

export default class UserNav extends Component {
 
    render() {
        return (
            <div className="App">
                <header className="App-header">

                    <Navbar bg="light" className="Login">

                        <Nav className="justify-content-end">
                            <Nav>
                                <Link to={"/create-user"} className="nav-link"> Create User</Link>
                            </Nav>
                            <Nav>
                                <Link to={"/log-in"} className="nav-link"> Log In </Link>
                            </Nav>
                            <Nav>
                                <Link to={"/user-list"} className="nav-link">  User List</Link>
                            </Nav>
                        </Nav>

                    </Navbar>

                </header>


            </div>
        )
    }
}
