import React from "react";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateUser from "./components/create-user.component";
import EditUser from "./components/edit-user.component";
import UserList from "./components/user-list.component";
import Wrapper from "./components/login-wrapper.component";

const createError = require('http-errors');
const passport = require('passport');

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">

        <Switch>
          <Route exact path='/' component={Wrapper} />
          <Route path="/create-user" component={CreateUser} />
          <Route path="/log-in" component={Wrapper} />
          <Route path="/edit-user/:id" component={EditUser} />
          <Route path="/user-list" component={UserList} />
        </Switch>
      </header>
    </div>
  </Router>);
}
export default App;