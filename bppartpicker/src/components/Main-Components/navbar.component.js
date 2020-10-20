import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Cookie from "js-cookie";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.loggedIn = this.isloggedin()
   
  }


  isloggedin() {
    let accessString = Cookie.get("JWT");
    console.log(accessString);
    axios
      .get("http://localhost:4000/packs/", {
        headers: { Authorization: "JWT " + accessString },
      })
      .then((res) => {
        console.log("logged in");
        return true;
      })
      .catch((error) => {
        console.log("not logged in");
        return false;
      });
    return false;
  }

  logout() {
    Cookie.set("JWT", "");
  }

  render() {
    return (
      <Nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={"/"} className="nav-link">
          BPPartPicker
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link to={"/packs"} className="nav-link">
                Create a Pack
              </Link>
            </li>
            {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
          {!this.isloggedin() ? (
            <Link to={"/log-in"} className="nav-link">
              Login
            </Link>
          ) : (
            <button
              class="btn btn-success my-2 my-sm-0"
              type="submit"
              onClick={this.logout}
            >
              Logout
            </button>
          )}
        </div>
      </Nav>
    );
  }
}
