import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateUser from "./components/create-user.component";
import EditUser from "./components/edit-user.component";
import UserList from "./components/user-list.component";
import Login from "./components/log-in.component";
const createError = require('http-errors');
const passport    = require('passport');

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">

        <Navbar bg="light" className="Login">
          <Container>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <Nav className="justify-content-end">
                      <Nav>
                        <Link  to={"/create-user"} className="nav-link">
                          Create User
                </Link>
                      </Nav>
                      <Nav>
                        <Link to={"/log-in"} className="nav-link">
                          Log In
                </Link>
                      </Nav>

                      <Nav>
                        <Link to={"/user-list"} className="nav-link">
                          User List
                </Link>
                      </Nav>
                    </Nav>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Switch>
                      <Route exact path='/' component={CreateUser} />
                      <Route path="/create-user" component={CreateUser} />
                      <Route path="/log-in" component={Login} />
                      <Route path="/edit-user/:id" component={EditUser} />
                      <Route path="/user-list" component={UserList} />
                    </Switch>
                  </Col>
                </Row>
              </Col>
            </Row>

          </Container>
        </Navbar>
      </header>


    </div>
  </Router>);
}

export default App;