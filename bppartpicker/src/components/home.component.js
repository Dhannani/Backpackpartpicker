import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Cookie from 'js-cookie';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export default class CreateUser extends Component {
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
      <div >
       
      </div>
    );
  }
}
