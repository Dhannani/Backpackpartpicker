import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar bg="success" className="Login">
          <div class="btn-group" role="group" aria-label="...">
            <Link to="/packs">
              <button
                class="btn btn-success my-2 my-sm-0"
                type="submit"
                onSubmit="asd"
              >
                Build a Pack!
              </button>
            </Link>
          </div>
        </Navbar>
      </div>
    );
  }
}
