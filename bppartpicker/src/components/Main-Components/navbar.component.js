import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "react-bootstrap/Nav";
import Cookie from "js-cookie";

import { BrowserRouter as Router, Link } from "react-router-dom";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    //this.isloggedin = this.isloggedin.bind(this);
    this.logout = this.logout.bind(this);

  }

  componentDidMount() {
        //this.props.isloggedin()
  }



 

  logout() {
    Cookie.set("JWT", "");
    console.log("logging out...")
    window.location.reload(false)
    this.props.isloggedin()
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
                Brows Packs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Brows Items
              </a>
            </li>
          </ul>
          {!this.props.loggedIn ? (
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
