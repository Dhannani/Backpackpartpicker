import React from "react";
// import Nav from "react-bootstrap/Nav";
//import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";


import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


import EditUser from "./components/User-Components/edit-user.component";
import UserList from "./components/User-Components/user-list.component";
import LoginWrapper from "./components/User-Components/login-wrapper.component";
import CreateUserWrapper from "./components/User-Components/create-user-wrapper.component";
import Packs from "./components/Main-Components/packs.component";
import Navbar from "./components/Main-Components/navbar.component";
import Home from "./components/Main-Components/home.component"

import Controller from "./components/controller.component"


function App() {
  console.log("new page")
  return (
    <Controller />
  );
}
export default App;