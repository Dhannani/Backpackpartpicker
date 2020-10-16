import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Cookie from 'js-cookie';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "react-bootstrap/esm/Navbar";
toast.configure();

export default class Login extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  getPacks() {
    let accessString = Cookie.get("JWT")
    console.log(accessString)
    axios.get('http://localhost:4000/packs/', {headers: {Authorization: 'JWT ' + accessString}})
        .then((res) => {
            console.log('made it!!')
        }).catch((error) => {
            console.log(error)
        })
}

  onChangeUserName(e) {
    this.setState({ username: e.target.value });
  }

  onChangeUserEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeUserPassword(e) {
    this.setState({ password: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("logging in...")
    const userObject = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .get("http://localhost:4000/users/log-in", { params: userObject })
      .then(function (res) {
        if (res.status === 200) {
          console.log("Successful login")
          console.log(res.data)
          Cookie.set("JWT", res.data.token)
          toast.success(res.data.message, {
            position: toast.POSITION.BOTTOM_CENTER,
            hideProgressBar: true,
          })
        }
        else {
          toast.warning(res.data, {
            position: toast.POSITION.BOTTOM_CENTER,
            hideProgressBar: true,
          })
        }
      });
    this.setState({ username: "", email: "", password: "" });
  }

  render() {
    return (
      <div className="form-wrapper">
        <Navbar bg="dark">

        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={this.state.email}
              onChange={this.onChangeUserEmail}
            />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              value={this.state.password}
              onChange={this.onChangeUserPassword}
            />
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            Lez Get itttt!
          </Button>
        </Form>
        <Button variant="danger" size="lg" block="block" onClick={this.getPacks}>
            PAX
          </Button>
          </Navbar>
      </div>
    );
  }
}
